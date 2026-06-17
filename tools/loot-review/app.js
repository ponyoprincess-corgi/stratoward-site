const state = {
  activeTab: "items",
  snapshot: null,
  metadata: { entries: {}, items: {} },
  dirty: false,
  selectedItemKey: "",
  sort: { key: "upgradeDemandQuantity", dir: "desc" },
};

const tabs = [
  ["items", "Item Balancing"],
  ["recipes", "Recipes"],
  ["minerals", "Mineral Rocks"],
  ["aiDrops", "AI Drops"],
  ["issues", "Issue Queue"],
  ["proposed", "Proposed Changes"],
];

state.activeTab = resolveInitialTab();

const tabTips = {
  items: "Item-first economy view. Use this to see sources, uses, sinks, quantities, pickup mapping, and balance flags.",
  recipes: "Recipe DataTable rows with clean input/output quantities and craft/refine/upgrade grouping.",
  minerals: "MiningV2 mineral families and their authored loot entries, shown without raw debug strings.",
  aiDrops: "Native AI death-drop tables by pawn Blueprint.",
  issues: "Automatically detected balance, data, and mapping warnings from the exported snapshot.",
  proposed: "Rows where you typed a proposed change. These are metadata only and do not modify gameplay assets.",
};

const $ = (id) => document.getElementById(id);

function resolveBridgeBase() {
  const params = new URL(window.location.href).searchParams;
  const bridgeFromUrl = (params.get("bridge") || "").trim();
  return bridgeFromUrl.replace(/\/$/, "");
}

const bridgeBase = resolveBridgeBase();
const bridgeMode = Boolean(bridgeBase);

function normalizeMetadata(raw) {
  const data = raw && typeof raw === "object" ? raw : {};
  const legacyItems = data.items && typeof data.items === "object" ? data.items : {};
  const entries = data.entries && typeof data.entries === "object" ? data.entries : legacyItems;
  return { ...data, entries, items: legacyItems };
}

function entryMeta(key) {
  if (!state.metadata.entries[key]) state.metadata.entries[key] = {};
  return state.metadata.entries[key];
}

function getStatus(key) {
  return entryMeta(key).status || "unreviewed";
}

function textIncludes(value, query) {
  return String(value || "").toLowerCase().includes(query);
}

function serializeSearchTarget(row) {
  const key = row?.key || row?.targetKey || "";
  return `${JSON.stringify(row || {})} ${JSON.stringify(entryMeta(key))}`.toLowerCase();
}

function passesFilters(row) {
  const key = row.key || row.targetKey || "";
  const query = $("searchInput").value.trim().toLowerCase();
  const status = getStatus(key);
  const priority = entryMeta(key).priority || "";
  const statusFilter = $("statusFilter").value;
  const priorityFilter = $("priorityFilter").value;
  const sinkFilter = $("sinkFilter")?.value || "all";
  const issueFilter = $("issueFilter")?.value || "all";

  if (query && !textIncludes(serializeSearchTarget(row), query)) return false;
  if (statusFilter !== "all" && status !== statusFilter) return false;
  if (priorityFilter !== "all") {
    if (priorityFilter === "none" && priority) return false;
    if (priorityFilter !== "none" && priority !== priorityFilter) return false;
  }
  if (state.activeTab === "items") {
    if (sinkFilter !== "all" && row.sinkClassification !== sinkFilter) return false;
    if (issueFilter === "with_issues" && !(row.issueCount > 0)) return false;
    if (issueFilter !== "all" && issueFilter !== "with_issues" && !row.balanceIssueTypes?.includes(issueFilter) && !row.balanceFlags?.includes(issueFilter)) {
      return false;
    }
  }
  return true;
}

async function fetchJson(url, options) {
  const response = await fetch(url, options);
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
  return response.json();
}

function bundledSnapshot() {
  return deriveSnapshot(window.STRATOWARD_LOOT_REVIEW_SNAPSHOT || emptySnapshot());
}

function bundledMetadata() {
  return normalizeMetadata(window.STRATOWARD_LOOT_REVIEW_METADATA || { entries: {}, items: {} });
}

async function loadAll() {
  $("connectionText").textContent = bridgeMode
    ? "Connected to the editor bridge. Refresh reads the latest project assets and DataTables."
    : "Opened inside the StratoWard site shell. Live refresh and metadata saving require the StratoWard Debug Panel bridge.";
  $("refreshButton").disabled = !bridgeMode;
  $("saveButton").disabled = !bridgeMode;

  try {
    const [snapshot, metadata] = await Promise.all([
      fetchJson("latest_project_snapshot.json"),
      fetchJson("review_metadata.json").catch(() => ({ entries: {}, items: {} })),
    ]);
    state.snapshot = deriveSnapshot(snapshot);
    state.metadata = normalizeMetadata(metadata);
  } catch (error) {
    state.snapshot = bundledSnapshot();
    state.metadata = bundledMetadata();
    $("connectionText").textContent = state.snapshot.generatedAtUtc
      ? `Opened as a raw file. Showing last exported snapshot from ${state.snapshot.generatedAtUtc}. Open from the StratoWard Debug Panel for live refresh.`
      : `No snapshot loaded. Open from the StratoWard Debug Panel or click Refresh there. ${error.message}`;
  }

  render();
}

function emptySnapshot() {
  return {
    generatedAtUtc: "",
    items: [],
    recipes: [],
    minerals: [],
    aiDrops: [],
    issues: [],
    recipeTables: [],
  };
}

async function refreshFromProject() {
  if (!bridgeMode) {
    $("connectionText").textContent = "No bridge URL configured. Open from the StratoWard Debug Panel to refresh from Unreal.";
    return;
  }

  $("refreshButton").disabled = true;
  $("connectionText").textContent = "Refreshing from project assets...";
  try {
    state.snapshot = deriveSnapshot(await fetchJson(`${bridgeBase}/api/refresh`, { method: "POST" }));
    $("connectionText").textContent = `Latest project snapshot: ${state.snapshot.generatedAtUtc || "just now"}`;
  } catch (error) {
    $("connectionText").textContent = `Refresh failed: ${error.message}`;
  } finally {
    $("refreshButton").disabled = false;
    render();
  }
}

async function saveMetadata() {
  if (!bridgeMode) {
    $("connectionText").textContent = "No bridge URL configured. Open from the StratoWard Debug Panel to save review metadata.";
    return;
  }

  const payload = {
    entries: state.metadata.entries || {},
    updatedAtUtc: new Date().toISOString(),
  };

  $("saveButton").disabled = true;
  try {
    state.metadata = normalizeMetadata(await fetchJson(`${bridgeBase}/api/review-metadata`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }));
    state.dirty = false;
    $("connectionText").textContent = `Review metadata saved: ${state.metadata.updatedAtUtc || "now"}`;
  } catch (error) {
    $("connectionText").textContent = `Metadata save failed: ${error.message}`;
  } finally {
    $("saveButton").disabled = false;
    render();
  }
}

function setStatus(key, status) {
  entryMeta(key).status = status;
  entryMeta(key).updatedAtUtc = new Date().toISOString();
  state.dirty = true;
  render();
}

function updateMetaField(key, field, value) {
  entryMeta(key)[field] = value;
  entryMeta(key).updatedAtUtc = new Date().toISOString();
  state.dirty = true;
}

function deriveSnapshot(raw) {
  const snapshot = { ...emptySnapshot(), ...(raw || {}) };
  snapshot.recipes = arr(snapshot.recipes);
  snapshot.items = arr(snapshot.items);
  snapshot.minerals = arr(snapshot.minerals);
  snapshot.aiDrops = arr(snapshot.aiDrops);
  snapshot.issues = arr(snapshot.issues);

  const recipesByKey = new Map(snapshot.recipes.map((recipe) => [recipe.key, recipe]));
  const consumersByItem = new Map();
  const producersByItem = new Map();
  const requiredByItemGroup = new Map();
  const producedByItemGroup = new Map();

  snapshot.recipes.forEach((recipe) => {
    arr(recipe.inputs).forEach((entry) => {
      addMapArray(consumersByItem, entry.itemId, recipe);
      addGroupedQuantity(requiredByItemGroup, entry.itemId, recipe.group || "recipe", entry.amount);
    });
    arr(recipe.outputs).forEach((entry) => {
      addMapArray(producersByItem, entry.itemId, recipe);
      addGroupedQuantity(producedByItemGroup, entry.itemId, recipe.group || "recipe", entry.amount);
    });
  });

  const issuesByTarget = new Map();
  snapshot.issues.forEach((issue) => addMapArray(issuesByTarget, issue.targetKey, issue));

  snapshot.items = snapshot.items.map((item) => {
    const key = item.key || `item:${item.itemId}`;
    const producedByRecipes = arr(item.producedByRecipes);
    const consumedByRecipes = arr(item.consumedByRecipes);
    const droppedByAi = arr(item.droppedByAi);
    const droppedByMinerals = arr(item.droppedByMinerals);
    const requiredQuantityByGroup = { ...mapObject(requiredByItemGroup.get(item.itemId)), ...(item.requiredQuantityByGroup || {}) };
    const producedQuantityByGroup = { ...mapObject(producedByItemGroup.get(item.itemId)), ...(item.producedQuantityByGroup || {}) };
    const sinkClassification = item.sinkClassification || inferSinkClassification(item.itemId, consumedByRecipes, recipesByKey);
    const balanceFlags = unique([...arr(item.balanceFlags), ...buildBalanceFlags(item, {
      producedByRecipes,
      consumedByRecipes,
      droppedByAi,
      droppedByMinerals,
      requiredQuantityByGroup,
      sinkClassification,
    })]);
    const directIssueTypes = arr(issuesByTarget.get(key)).map((issue) => issue.type).filter(Boolean);
    const balanceIssueTypes = unique([...balanceFlags, ...directIssueTypes]);
    const downstreamChains = arr(item.downstreamChains).length
      ? item.downstreamChains
      : buildDownstreamChains(item.itemId, consumersByItem);

    return {
      ...item,
      key,
      producedByRecipes,
      consumedByRecipes,
      droppedByAi,
      droppedByMinerals,
      directProducerCount: producedByRecipes.length,
      directConsumerCount: consumedByRecipes.length,
      aiDropSourceCount: droppedByAi.length,
      mineralDropSourceCount: droppedByMinerals.length,
      directSourceCount: producedByRecipes.length + droppedByAi.length + droppedByMinerals.length,
      directUseCount: consumedByRecipes.length,
      directRecipeInputQuantity: sumValues(requiredQuantityByGroup),
      upgradeDemandQuantity: Number(requiredQuantityByGroup.upgrade || item.upgradeDemandQuantity || 0),
      requiredQuantityByGroup,
      producedQuantityByGroup,
      producedRecipeGroups: unique(producedByRecipes.map((recipeKey) => recipesByKey.get(recipeKey)?.group).filter(Boolean)),
      consumedRecipeGroups: unique(consumedByRecipes.map((recipeKey) => recipesByKey.get(recipeKey)?.group).filter(Boolean)),
      sinkClassification,
      downstreamChains,
      rawInputChains: buildRawInputChains(item.itemId, producersByItem),
      balanceFlags,
      balanceIssueTypes,
      issueCount: arr(issuesByTarget.get(key)).length + balanceFlags.length,
      issues: arr(issuesByTarget.get(key)),
    };
  });

  snapshot._recipesByKey = recipesByKey;
  snapshot._issuesByTarget = issuesByTarget;
  return snapshot;
}

function render() {
  renderSummary();
  renderTabs();
  const rows = getRowsForTab(state.activeTab).filter(passesFilters);
  const content = $("content");
  content.innerHTML = "";
  content.className = state.activeTab === "items" ? "content item-balance-content" : "content";

  if (!rows.length) {
    content.append(empty(`No ${tabLabel(state.activeTab).toLowerCase()} match the current filters.`));
    return;
  }

  if (state.activeTab === "items") {
    renderItemBalance(content, sortItems(rows));
    mountSelectedReviewControls();
    return;
  }

  rows.forEach((row) => content.append(renderCard(row, state.activeTab)));
}

function tabLabel(tab) {
  return tabs.find(([id]) => id === tab)?.[1] || tab;
}

function resolveInitialTab() {
  const hashTab = String(location.hash || "").replace(/^#/, "");
  return tabs.some(([id]) => id === hashTab) ? hashTab : "items";
}

function getRowsForTab(tab) {
  const snapshot = state.snapshot || emptySnapshot();
  if (tab === "proposed") {
    return Object.entries(state.metadata.entries || {})
      .filter(([, meta]) => meta.proposedChange && meta.proposedChange.trim())
      .map(([key, meta]) => ({ key, title: key, meta, kind: "proposed" }));
  }
  return snapshot[tab] || [];
}

function renderSummary() {
  const snapshot = state.snapshot || emptySnapshot();
  const items = arr(snapshot.items);
  const allKeys = [
    ...items.map((x) => x.key),
    ...(snapshot.recipes || []).map((x) => x.key),
    ...(snapshot.minerals || []).map((x) => x.key),
    ...(snapshot.aiDrops || []).map((x) => x.key),
  ];
  const statusCounts = allKeys.reduce((acc, key) => {
    acc[getStatus(key)] = (acc[getStatus(key)] || 0) + 1;
    return acc;
  }, {});
  const shipDemandItems = items.filter((item) => item.upgradeDemandQuantity > 0).length;
  const deadEnds = items.filter((item) => item.balanceFlags?.includes("no_sinks")).length;
  const values = [
    ["Items", items.length, "Total item rows found in item data plus recipe/drop references."],
    ["Recipes", snapshot.recipes?.length || 0, "Total authored recipe rows across crafting, refining, and upgrade tables."],
    ["Ship Demand Items", shipDemandItems, "Items consumed directly by ship-upgrade recipes."],
    ["Dead Ends", deadEnds, "Items with no detected terminal sink or downstream recipe use."],
    ["Issues", snapshot.issues?.length || 0, "Automatically detected data, mapping, or balance warnings."],
    ["Needs Changing", statusCounts.needs_changing || 0, "Rows you marked as needing a gameplay/content change."],
  ];
  $("summaryGrid").innerHTML = values.map(([label, count, help]) => (
    `<div class="summary-card" title="${tip(help)}"><strong>${escapeHtml(count)}</strong><span>${escapeHtml(label)}</span></div>`
  )).join("");
}

function renderTabs() {
  $("tabs").innerHTML = tabs.map(([id, label]) => {
    const count = getRowsForTab(id).length;
    return `<button class="${id === state.activeTab ? "active" : ""}" data-tab="${id}" title="${tip(tabTips[id] || label)}">${label} <span class="pill" title="${tip(`Rows in ${label}.`)}">${count}</span></button>`;
  }).join("");
  document.querySelectorAll("[data-tab]").forEach((button) => {
    button.onclick = () => {
      state.activeTab = button.dataset.tab;
      location.hash = state.activeTab;
      render();
    };
  });
}

function renderItemBalance(content, rows) {
  if (!state.selectedItemKey || !rows.some((row) => row.key === state.selectedItemKey)) {
    state.selectedItemKey = rows[0]?.key || "";
  }
  const selected = rows.find((row) => row.key === state.selectedItemKey) || rows[0];

  const shell = document.createElement("section");
  shell.className = "balance-shell";
  shell.innerHTML = `
    <div class="table-panel">
      <table class="item-table">
        <thead>
          <tr>
            ${sortHeader("displayName", "Item")}
            ${sortHeader("directSourceCount", "Sources")}
            ${sortHeader("directUseCount", "Uses")}
            ${sortHeader("directRecipeInputQuantity", "Qty In")}
            ${sortHeader("upgradeDemandQuantity", "Upgrade")}
            ${sortHeader("sinkClassification", "Sink")}
            ${sortHeader("pickupResolved", "Pickup")}
            ${sortHeader("issueCount", "Issues")}
          </tr>
        </thead>
        <tbody>
          ${rows.map((row) => renderItemTableRow(row, row.key === selected?.key)).join("")}
        </tbody>
      </table>
    </div>
    <aside class="detail-panel">
      ${selected ? renderItemDetail(selected) : ""}
    </aside>
  `;
  content.append(shell);

  shell.querySelectorAll("[data-item-key]").forEach((row) => {
    row.onclick = () => {
      state.selectedItemKey = row.dataset.itemKey;
      render();
    };
  });
  shell.querySelectorAll("[data-sort-key]").forEach((button) => {
    button.onclick = () => {
      const key = button.dataset.sortKey;
      state.sort = {
        key,
        dir: state.sort.key === key && state.sort.dir === "asc" ? "desc" : "asc",
      };
      render();
    };
  });
}

function sortHeader(key, label) {
  const marker = state.sort.key === key ? (state.sort.dir === "asc" ? "asc" : "desc") : "";
  return `<th><button class="sort-button" data-sort-key="${escapeHtml(key)}" title="${tip(sortTip(key, label))}">${escapeHtml(label)} <span>${marker}</span></button></th>`;
}

function renderItemTableRow(row, selected) {
  const status = getStatus(row.key);
  const issueKind = row.issueCount > 0 ? "warn" : "good";
  return `
    <tr class="${selected ? "selected" : ""} ${status !== "unreviewed" ? status : ""}" data-item-key="${escapeHtml(row.key)}" title="${tip("Select this item to inspect its sources, uses, sinks, chains, issues, and review notes.")}">
      <td title="${tip("Display name and internal item id.")}">
        <strong>${escapeHtml(row.displayName || row.itemId)}</strong>
        <span class="key">${escapeHtml(row.itemId)}</span>
      </td>
      <td title="${tip("Total direct sources. r = recipe producers, d = AI/mineral drop sources.")}">${escapeHtml(row.directSourceCount || 0)} <span class="muted mini">r${escapeHtml(row.directProducerCount || 0)} d${escapeHtml((row.aiDropSourceCount || 0) + (row.mineralDropSourceCount || 0))}</span></td>
      <td title="${tip("Number of direct recipe rows that consume this item.")}">${escapeHtml(row.directUseCount || 0)}</td>
      <td title="${tip("Total authored recipe input quantity across all direct consumers. This is not a drop-rate estimate.")}">${escapeHtml(row.directRecipeInputQuantity || 0)}</td>
      <td title="${tip("Total authored quantity consumed by ship-upgrade recipes.")}">${escapeHtml(row.upgradeDemandQuantity || 0)}</td>
      <td title="${tip("Detected terminal sink classification for this item.")}"><span class="sink-label">${escapeHtml(row.sinkClassification || "not terminal")}</span></td>
      <td title="${tip("Whether the dashboard resolved a floating pickup Blueprint for this item.")}">${row.pickupResolved ? `<span class="pill good" title="${tip("Pickup Blueprint resolved.")}">mapped</span>` : `<span class="pill warn" title="${tip(row.pickupFailureReason || "Pickup Blueprint was not resolved.")}">missing</span>`}</td>
      <td title="${tip("Automatic issue count plus balance flags for this item.")}"><span class="pill ${issueKind}">${escapeHtml(row.issueCount || 0)}</span></td>
    </tr>
  `;
}

function renderItemDetail(row) {
  const status = getStatus(row.key);
  const sourceLines = [
    listLine("Produced by", row.producedByRecipes),
    listLine("AI drops", row.droppedByAi),
    listLine("Mineral drops", row.droppedByMinerals),
    row.pickupResolved
      ? `<div><span class="muted">Pickup:</span> <code>${escapeHtml(row.pickupBlueprintName || "mapped")}</code></div>`
      : `<div><span class="muted">Pickup:</span> <span class="pill warn">${escapeHtml(row.pickupFailureReason || "unresolved")}</span></div>`,
  ];
  const sinkLines = [
    `<div><span class="muted">Sink:</span> <span class="pill ${row.sinkClassification === "not terminal" ? "" : "good"}">${escapeHtml(row.sinkClassification || "not terminal")}</span></div>`,
    `<div><span class="muted">Upgrade demand:</span> <strong>${escapeHtml(row.upgradeDemandQuantity || 0)}</strong></div>`,
    quantityMapLine("Required by group", row.requiredQuantityByGroup),
    quantityMapLine("Produced by group", row.producedQuantityByGroup),
  ];
  const issueLines = [
    ...(row.balanceFlags || []).map((flag) => `<span class="pill warn">${escapeHtml(flagLabel(flag))}</span>`),
    ...(row.issues || []).map((issue) => `<div><span class="pill ${issue.severity === "high" ? "bad" : "warn"}">${escapeHtml(issue.type)}</span> ${escapeHtml(issue.message || "")}</div>`),
  ];

  return `
    <div class="detail-head">
      <div>
        <p class="eyebrow">${escapeHtml(status)}</p>
        <h2>${escapeHtml(row.displayName || row.itemId)}</h2>
        <div class="key">${escapeHtml(row.itemId)}</div>
      </div>
      ${pillRow([
        row.knownItemData ? ["Item data", "good"] : ["Missing item data", "bad"],
        row.pickupResolved ? ["Pickup mapped", "good"] : ["Pickup unresolved", "warn"],
        row.naturalResource ? ["Natural/raw", ""] : null,
      ])}
    </div>
    ${section("Sources", sourceLines)}
    ${section("Direct Uses", [
      listLine("Consumed by", row.consumedByRecipes),
      quantityMapLine("Required quantities", row.requiredQuantityByGroup),
    ])}
    ${section("Ship/Terminal Sinks", sinkLines)}
    ${section("Raw Inputs", renderChainList(row.rawInputChains, "No upstream raw chain for this item."))}
    ${section("Downstream Chains", renderChainList(row.downstreamChains, "No downstream terminal chain found."))}
    ${section("Issues", issueLines.length ? issueLines : [`<span class="muted">None.</span>`])}
    <h3>Review Notes</h3>
    <div id="selectedReviewControls"></div>
  `;
}

function renderCard(row, tab) {
  const key = row.key || row.targetKey || "";
  const status = getStatus(key);
  const card = document.createElement("article");
  card.className = `card ${tab === "issues" ? "issue" : ""} ${status !== "unreviewed" ? status : ""}`;

  const left = document.createElement("div");
  const middle = document.createElement("div");
  const right = document.createElement("div");
  left.innerHTML = renderHeader(row, tab);
  middle.innerHTML = renderDetails(row, tab);
  right.append(renderReviewControls(key));

  card.append(left, middle, right);
  return card;
}

function renderHeader(row, tab) {
  if (tab === "recipes") {
    return `<h2 title="${tip("Recipe row name from the DataTable.")}">${escapeHtml(row.rowName)}</h2><div class="key" title="${tip("Source recipe DataTable.")}">${escapeHtml(row.tableName)}</div>${pillRow([
      [row.group, "", "Recipe group inferred from the source DataTable name."],
      [`${row.timeRequired || 0}s`, "", "Authored recipe duration in seconds."],
    ])}`;
  }
  if (tab === "minerals") {
    return `<h2 title="${tip("Mineral family display name from the MiningV2 catalog.")}">${escapeHtml(row.displayName)}</h2><div class="key" title="${tip("Internal mineral family id.")}">${escapeHtml(row.familyId)}</div>${pillRow([
      [`${row.drops?.length || 0} drops`, row.drops?.length ? "good" : "bad", "Number of authored loot entries on this mineral family."],
      [`weight ${fmt(row.autoSpawnWeight)}`, "", "Relative auto-spawn weight for this mineral family. Higher means the family is picked more often when generating mineral mixes."],
    ])}`;
  }
  if (tab === "aiDrops") {
    return `<h2 title="${tip("AI pawn Blueprint asset name.")}">${escapeHtml(row.name)}</h2><div class="key" title="${tip("Generated class used for reading native LootEntries.")}">${escapeHtml(row.className)}</div>${pillRow([[`${row.drops?.length || 0} drops`, row.drops?.length ? "good" : "bad", "Number of native death-drop entries on this AI pawn."]])}`;
  }
  if (tab === "issues") {
    return `<h2 title="${tip("Machine-readable issue type.")}">${escapeHtml(flagLabel(row.type))}</h2><div class="key" title="${tip("Dashboard row this issue points at.")}">${escapeHtml(row.targetKey)}</div>${pillRow([[row.severity || "review", row.severity === "high" ? "bad" : "warn", "Issue severity estimated by the dashboard."]])}`;
  }
  return `<h2 title="${tip("Row with a saved proposed change.")}">${escapeHtml(row.title || row.key)}</h2><div class="key" title="${tip("Metadata key. This does not edit gameplay data.")}">${escapeHtml(row.key)}</div>${pillRow([["metadata only", "warn", "This row exists only because review metadata contains a proposed change."]])}`;
}

function renderDetails(row, tab) {
  if (tab === "recipes") {
    return section("Recipe Flow", [
      `<div class="flow-columns">${entryGrid("Inputs", row.inputs, "Items consumed by this recipe row.")}${entryGrid("Outputs", row.outputs, "Items produced by this recipe row.")}</div>`,
      metricRow([
        ["Group", row.group || "recipe", "Recipe category inferred from DataTable name."],
        ["Time", `${row.timeRequired || 0}s`, "Authored recipe duration. Zero usually means instant or not used by the current station flow."],
      ]),
      technicalDetails("Recipe source", [
        ["Table path", row.tablePath],
      ], "Open only when you need the asset path that owns this recipe row."),
    ]);
  }
  if (tab === "minerals") {
    return section("Rock Drops", [
      metricRow([
        ["Drop rows", row.drops?.length || 0, "Authored loot entries on the resolved MiningLootSourceComponent."],
        ["Spawn weight", fmt(row.autoSpawnWeight), "Relative mineral-family selection weight."],
        ["Pulse", row.lootPulseInterval ? `${fmt(row.lootPulseInterval)}s` : "unknown", "Minimum time between successful mining loot pulses."],
        ["Stack cap", row.maxItemsPerPickupStack || "none", "Maximum items per spawned pickup stack. None/0 means no dashboard-known cap."],
      ]),
      entryTable("Authored drop rolls", row.drops, "mineral"),
      entryTable("Max per successful pulse", row.maxPerSuccessfulPulse, "max"),
      row.fullMiningMaxAvailable ? entryTable("Full mining max", row.fullMiningMax, "max") : infoLine("Full mining max", row.fullMiningMaxReason || "Unknown pulse count; dashboard does not estimate total.", "The dashboard avoids speculative full-rock totals because successful pulse count is not known here."),
      row.fallbackItemId ? infoLine("Fallback", row.fallbackItemId, "Fallback item used only when the loot table has no usable entry or runtime falls back.") : "",
      profileGrid(row.generatedProfileSamples),
      technicalDetails("Technical source", [
        ["Read mode", row.lootSourceReadMode || "resolved"],
        ["Loot source", row.lootSourceSummary],
        ["Blueprint", row.blueprintAssetPath],
        ["Load warning", row.loadWarning],
      ], "Open only when checking how the dashboard read this mineral Blueprint. Hidden by default to keep balance review clean."),
    ]);
  }
  if (tab === "aiDrops") {
    return section("Death Drops", [
      metricRow([
        ["Drop rows", row.drops?.length || 0, "Native LootEntries read from the AI pawn class default object."],
      ]),
      entryTable("Authored death drops", row.drops, "ai"),
      technicalDetails("AI source", [
        ["Asset", row.assetPath],
        ["Class", row.className],
      ], "Open only when you need the exact AI asset path/class that owns these drops."),
    ]);
  }
  if (tab === "issues") {
    return section("Why It Needs Review", [
      `<p class="issue-message" title="${tip("Dashboard-generated explanation for this warning.")}">${escapeHtml(row.message || "")}</p>`,
      metricRow([
        ["Severity", row.severity || "review", "How urgently this issue should be checked."],
        ["Target", row.targetKey || "unknown", "The dashboard row this issue points at."],
      ]),
    ]);
  }
  return section("Proposed Change", [
    `<p class="proposal-text" title="${tip("Saved proposed gameplay/content change. Metadata only.")}">${escapeHtml(row.meta?.proposedChange || "")}</p>`,
    row.meta?.notes ? `<p class="muted" title="${tip("Saved review note.")}">${escapeHtml(row.meta.notes)}</p>` : "",
  ]);
}

function renderReviewControls(key) {
  const template = $("reviewControlsTemplate").content.cloneNode(true);
  const meta = entryMeta(key);
  template.querySelectorAll("[data-status]").forEach((button) => {
    if (meta.status === button.dataset.status) button.classList.add("active-status");
    button.onclick = () => setStatus(key, button.dataset.status);
  });
  const priority = template.querySelector(".priority");
  priority.value = meta.priority || "";
  priority.onchange = () => updateMetaField(key, "priority", priority.value);
  const notes = template.querySelector(".notes");
  notes.value = meta.notes || "";
  notes.onchange = () => updateMetaField(key, "notes", notes.value);
  const proposed = template.querySelector(".proposed");
  proposed.value = meta.proposedChange || "";
  proposed.onchange = () => updateMetaField(key, "proposedChange", proposed.value);
  return template;
}

function mountSelectedReviewControls() {
  const host = $("selectedReviewControls");
  if (host && state.selectedItemKey) {
    host.append(renderReviewControls(state.selectedItemKey));
  }
}

function section(title, lines) {
  return `<section class="detail-section" title="${tip(sectionTip(title))}"><h3>${escapeHtml(title)}</h3><div class="list">${lines.filter(Boolean).join("")}</div></section>`;
}

function metricRow(metrics) {
  const cells = metrics
    .filter(([label, value]) => value !== undefined && value !== null && value !== "")
    .map(([label, value, help, kind]) => (
      `<div class="metric ${kind || ""}" title="${tip(help || label)}"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>`
    ));
  return `<div class="metric-row">${cells.join("")}</div>`;
}

function entryGrid(title, entries, help) {
  const list = arr(entries);
  return `
    <div class="entry-panel" title="${tip(help || title)}">
      <h4>${escapeHtml(title)}</h4>
      ${list.length ? list.map((entry) => (
        `<div class="entry-row" title="${tip("Authored recipe item and amount.")}"><code>${escapeHtml(entry.itemId)}</code><strong>x${escapeHtml(entry.amount || 0)}</strong></div>`
      )).join("") : `<div class="muted">None</div>`}
    </div>
  `;
}

function entryTable(title, entries, mode) {
  const list = arr(entries);
  if (!list.length) {
    return infoLine(title, "None", "No entries were exported for this section.");
  }

  const columns = mode === "max"
    ? [["itemId", "Item", "Item id."], ["maxAmount", "Max", "Maximum amount from one successful pulse."]]
    : [["itemId", "Item", "Item id."], ["amountRange", "Amount", "Authored min-max amount range."], ["weight", "Weight", "Relative selection weight, not an estimated drop total."], ["roll", "Roll", "Roll chance value as authored. This dashboard does not turn it into total supply."]];

  return `
    <div class="clean-table-wrap" title="${tip(tableTip(mode))}">
      <h4>${escapeHtml(title)}</h4>
      <table class="clean-table">
        <thead><tr>${columns.map(([, label, help]) => `<th title="${tip(help)}">${escapeHtml(label)}</th>`).join("")}</tr></thead>
        <tbody>${list.map((entry) => `<tr>${columns.map(([key]) => `<td>${formatEntryCell(entry, key)}</td>`).join("")}</tr>`).join("")}</tbody>
      </table>
    </div>
  `;
}

function formatEntryCell(entry, key) {
  if (key === "itemId") return `<code>${escapeHtml(entry.itemId || "unknown")}</code>`;
  if (key === "amountRange") return `${escapeHtml(entry.minAmount ?? entry.amount ?? 0)}-${escapeHtml(entry.maxAmount ?? entry.amount ?? 0)}`;
  if (key === "weight") return fmt(entry.chanceWeight ?? entry.lootWeight ?? 0);
  if (key === "roll") return fmt(entry.rollChance ?? 1);
  if (key === "maxAmount") return escapeHtml(entry.maxAmount || 0);
  return escapeHtml(entry[key] || "");
}

function infoLine(label, value, help) {
  return `<div class="info-line" title="${tip(help || label)}"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>`;
}

function profileGrid(samples) {
  const list = arr(samples);
  if (!list.length) return "";
  return `
    <div class="profile-grid" title="${tip("Generated mineral weight modifiers by distance band. c = common core, r = rare core, b = bleed.")}">
      ${list.map((sample) => (
        `<div class="profile-card">
          <span>${escapeHtml(sample.band)}</span>
          <strong>c ${fmt(sample.coreCommonMultiplier)}</strong>
          <strong>r ${fmt(sample.coreRareMultiplier)}</strong>
          <strong>b ${fmt(sample.bleedMultiplier)}</strong>
        </div>`
      )).join("")}
    </div>
  `;
}

function technicalDetails(title, rows, help) {
  const cleanRows = rows.filter(([, value]) => value !== undefined && value !== null && String(value).trim());
  if (!cleanRows.length) return "";
  return `
    <details class="technical-details" title="${tip(help || title)}">
      <summary>${escapeHtml(title)}</summary>
      <div class="technical-list">
        ${cleanRows.map(([label, value]) => `<div><span>${escapeHtml(label)}</span><code>${escapeHtml(value)}</code></div>`).join("")}
      </div>
    </details>
  `;
}

function listLine(label, values) {
  const list = Array.isArray(values) ? values : [];
  if (!list.length) return `<div><span class="muted">${escapeHtml(label)}:</span> <span class="muted">None</span></div>`;
  return `<div><span class="muted">${escapeHtml(label)}:</span> ${list.slice(0, 12).map((v) => `<code>${escapeHtml(compactRecipeKey(v))}</code>`).join(", ")}${list.length > 12 ? ` <span class="pill">+${list.length - 12}</span>` : ""}</div>`;
}

function pillRow(values) {
  const valid = values.filter(Boolean);
  if (!valid.length) return "";
  return `<div class="pill-row">${valid.map(([text, kind, help]) => `<span class="pill ${kind || ""}" title="${tip(help || text)}">${escapeHtml(text)}</span>`).join("")}</div>`;
}

function quantityMapLine(label, value) {
  const entries = Object.entries(value || {}).filter(([, amount]) => Number(amount) > 0);
  if (!entries.length) return `<div><span class="muted">${escapeHtml(label)}:</span> <span class="muted">None</span></div>`;
  return `<div><span class="muted">${escapeHtml(label)}:</span> ${entries.map(([group, amount]) => `<code>${escapeHtml(group)} ${escapeHtml(amount)}</code>`).join(", ")}</div>`;
}

function renderChainList(chains, emptyText) {
  const list = arr(chains);
  if (!list.length) return [`<span class="muted">${escapeHtml(emptyText)}</span>`];
  return list.slice(0, 10).map((chain) => (
    `<div class="chain-line"><span class="pill good">${escapeHtml(chain.terminalType || "chain")}</span> ${escapeHtml(chain.summary || arr(chain.steps).join(" -> "))}</div>`
  ));
}

function sortItems(rows) {
  const { key, dir } = state.sort;
  const sign = dir === "asc" ? 1 : -1;
  return [...rows].sort((a, b) => {
    const av = sortValue(a, key);
    const bv = sortValue(b, key);
    if (typeof av === "number" && typeof bv === "number") return (av - bv) * sign || String(a.itemId).localeCompare(String(b.itemId));
    return String(av).localeCompare(String(bv)) * sign || String(a.itemId).localeCompare(String(b.itemId));
  });
}

function sortValue(row, key) {
  if (key === "pickupResolved") return row.pickupResolved ? 1 : 0;
  if (key === "displayName") return row.displayName || row.itemId || "";
  return row[key] ?? "";
}

function empty(message) {
  const node = document.createElement("div");
  node.className = "empty";
  node.textContent = message;
  return node;
}

function buildBalanceFlags(item, data) {
  const flags = [];
  const hasDrops = data.droppedByAi.length > 0 || data.droppedByMinerals.length > 0;
  const hasSources = hasDrops || data.producedByRecipes.length > 0;
  const hasUses = data.consumedByRecipes.length > 0 || data.sinkClassification !== "not terminal";
  const upgradeDemand = Number(data.requiredQuantityByGroup.upgrade || 0);
  if (!hasSources) flags.push("missing_sources");
  if (!hasUses) flags.push("no_sinks");
  if (data.producedByRecipes.length > 0 && !hasDrops) flags.push("recipe_only_output");
  if (hasDrops && data.consumedByRecipes.length === 0 && data.producedByRecipes.length === 0) flags.push("dropped_but_unused");
  if (upgradeDemand > 0) flags.push("ship_upgrade_demand");
  if (!item.pickupResolved && !item.naturalResource && !String(item.itemId || "").startsWith("raw_")) flags.push("missing_pickup_mapping");
  return unique(flags);
}

function buildDownstreamChains(itemId, consumersByItem) {
  const chains = [];
  const visit = (currentItemId, steps, seen, depth) => {
    if (depth >= 5 || chains.length >= 10) return;
    arr(consumersByItem.get(currentItemId)).forEach((recipe) => {
      const input = arr(recipe.inputs).find((entry) => entry.itemId === currentItemId);
      arr(recipe.outputs).forEach((output) => {
        if (!input || !output.itemId || chains.length >= 10) return;
        const step = `${currentItemId} x${input.amount || 0} -> ${output.itemId} x${output.amount || 0} via ${recipe.tableName}`;
        const nextSteps = [...steps, step];
        const terminalType = recipe.group === "upgrade" ? "ship upgrade" : inferTerminalItemSinkType(output.itemId);
        if (terminalType !== "not terminal") {
          chains.push({ terminalType, terminalItemId: output.itemId, steps: nextSteps, summary: nextSteps.join(" -> ") });
        } else if (!seen.has(output.itemId)) {
          visit(output.itemId, nextSteps, new Set([...seen, output.itemId]), depth + 1);
        }
      });
    });
  };
  visit(itemId, [], new Set([itemId]), 0);
  return chains;
}

function buildRawInputChains(itemId, producersByItem) {
  const chains = [];
  const visit = (currentItemId, steps, seen, depth) => {
    if (depth >= 5 || chains.length >= 10) return;
    const producers = arr(producersByItem.get(currentItemId));
    if (!producers.length) {
      if (steps.length) chains.push({ terminalType: "raw/source", terminalItemId: currentItemId, steps, summary: steps.join(" <- ") });
      return;
    }
    producers.forEach((recipe) => {
      const output = arr(recipe.outputs).find((entry) => entry.itemId === currentItemId);
      arr(recipe.inputs).forEach((input) => {
        if (!output || !input.itemId || chains.length >= 10) return;
        const step = `${currentItemId} x${output.amount || 0} from ${input.itemId} x${input.amount || 0} via ${recipe.tableName}`;
        if (String(input.itemId).startsWith("raw_") || seen.has(input.itemId)) {
          chains.push({ terminalType: "raw/source", terminalItemId: input.itemId, steps: [...steps, step], summary: [...steps, step].join(" <- ") });
        } else {
          visit(input.itemId, [...steps, step], new Set([...seen, input.itemId]), depth + 1);
        }
      });
    });
  };
  visit(itemId, [], new Set([itemId]), 0);
  return chains;
}

function inferSinkClassification(itemId, consumedRecipeKeys, recipesByKey) {
  if (arr(consumedRecipeKeys).some((key) => recipesByKey.get(key)?.group === "upgrade")) return "ship upgrade";
  return inferTerminalItemSinkType(itemId);
}

function inferTerminalItemSinkType(itemId) {
  const id = String(itemId || "").toLowerCase();
  if (id.startsWith("con_")) return "terminal consumable";
  if (id.startsWith("module_")) return "terminal module";
  if (id.startsWith("weapon_")) return "terminal weapon";
  return "not terminal";
}

function addMapArray(map, key, value) {
  if (!key) return;
  if (!map.has(key)) map.set(key, []);
  map.get(key).push(value);
}

function addGroupedQuantity(map, itemId, group, amount) {
  if (!itemId) return;
  if (!map.has(itemId)) map.set(itemId, {});
  const target = map.get(itemId);
  target[group] = (target[group] || 0) + Number(amount || 0);
}

function mapObject(value) {
  return value && typeof value === "object" ? value : {};
}

function sumValues(value) {
  return Object.values(value || {}).reduce((sum, amount) => sum + Number(amount || 0), 0);
}

function arr(value) {
  return Array.isArray(value) ? value : [];
}

function unique(values) {
  return [...new Set(values.filter(Boolean))].sort();
}

function compactRecipeKey(value) {
  return String(value || "").replace(/^recipe:/, "");
}

function flagLabel(flag) {
  return String(flag || "").replaceAll("_", " ");
}

function sortTip(key, label) {
  const tips = {
    displayName: "Sort by display name or item id.",
    directSourceCount: "Sort by direct source count. Sources include recipe producers and AI/mineral drops.",
    directUseCount: "Sort by number of direct recipe consumers.",
    directRecipeInputQuantity: "Sort by total authored quantity consumed by direct recipes.",
    upgradeDemandQuantity: "Sort by total authored quantity consumed by ship-upgrade recipes.",
    sinkClassification: "Sort by detected terminal sink type.",
    pickupResolved: "Sort by whether a floating pickup Blueprint was resolved.",
    issueCount: "Sort by automatic issue and balance-flag count.",
  };
  return tips[key] || `Sort by ${label}.`;
}

function sectionTip(title) {
  const tips = {
    "Recipe Flow": "Readable input/output view for a recipe row.",
    "Rock Drops": "Clean balance view of mineral-family loot without raw debug strings.",
    "Death Drops": "Clean balance view of AI death-drop entries.",
    "Why It Needs Review": "Dashboard-generated reason this row was added to the issue queue.",
    "Proposed Change": "Review metadata you typed for a row; this does not edit gameplay data.",
    Sources: "Where this item enters the economy.",
    "Direct Uses": "Recipe rows that directly consume this item.",
    "Ship/Terminal Sinks": "Where this item ultimately leaves the economy or reaches a terminal crafted form.",
    "Raw Inputs": "Upstream recipe chain from this item back toward raw/source materials.",
    "Downstream Chains": "Downstream recipe chain from this item toward terminal outputs.",
    Issues: "Automatic balance/data warnings for this row.",
  };
  return tips[title] || title;
}

function tableTip(mode) {
  if (mode === "max") return "Maximum authored amount per successful mining pulse. This is not a full-rock total.";
  if (mode === "ai") return "AI death-drop entries with authored min/max and weight.";
  return "Mineral loot entries with authored min/max, relative weight, and roll chance.";
}

function tip(value) {
  return escapeHtml(value).replace(/"/g, "&quot;");
}

function fmt(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number.toFixed(number >= 10 ? 0 : 2) : "0";
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  }[char]));
}

$("refreshButton").onclick = refreshFromProject;
$("saveButton").onclick = saveMetadata;
$("searchInput").oninput = render;
$("statusFilter").onchange = render;
$("priorityFilter").onchange = render;
$("sinkFilter").onchange = render;
$("issueFilter").onchange = render;

window.addEventListener("beforeunload", (event) => {
  if (state.dirty) {
    event.preventDefault();
    event.returnValue = "";
  }
});

loadAll();
