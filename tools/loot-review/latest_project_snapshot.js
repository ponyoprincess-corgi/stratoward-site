window.STRATOWARD_LOOT_REVIEW_SNAPSHOT = {
	"schemaVersion": "1.1",
	"project": "STRATOWARD",
	"projectDir": "C:/SVN/StratoWard_5_7/",
	"generatedAtUtc": "2026-05-29T04:58:36.826Z",
	"itemDataSource": "/Game/UltimateSurvivalPack/Blueprints/Datatable/Inventory/DT_ItemData_StratoWard.DT_ItemData_StratoWard",
	"recipeTables": [
		{
			"name": "DT_Recipes_Crafting",
			"path": "/Game/Data/Items/DT_Recipes_Crafting.DT_Recipes_Crafting",
			"group": "crafting",
			"rowCount": 17
		},
		{
			"name": "DT_Recipes_Refining",
			"path": "/Game/Data/Items/DT_Recipes_Refining.DT_Recipes_Refining",
			"group": "refining",
			"rowCount": 14
		},
		{
			"name": "DT_Recipes_Upgrade_01",
			"path": "/Game/Data/Items/DT_Recipes_Upgrade_01.DT_Recipes_Upgrade_01",
			"group": "upgrade",
			"rowCount": 1
		},
		{
			"name": "DT_Recipes_Upgrade_02",
			"path": "/Game/Data/Items/DT_Recipes_Upgrade_02.DT_Recipes_Upgrade_02",
			"group": "upgrade",
			"rowCount": 1
		},
		{
			"name": "DT_Recipes_Upgrade_03",
			"path": "/Game/Data/Items/DT_Recipes_Upgrade_03.DT_Recipes_Upgrade_03",
			"group": "upgrade",
			"rowCount": 1
		}
	],
	"items": [
		{
			"key": "item:cmp_circuit_boards",
			"itemId": "cmp_circuit_boards",
			"knownItemData": true,
			"naturalResource": false,
			"producedByRecipes": [
				"recipe:DT_Recipes_Refining:cmp_circuit_boards"
			],
			"consumedByRecipes": [
				"recipe:DT_Recipes_Crafting:cmp_drone_repair",
				"recipe:DT_Recipes_Refining:cmp_tech_data",
				"recipe:DT_Recipes_Upgrade_01:UpgradeShip",
				"recipe:DT_Recipes_Upgrade_02:UpgradeShip",
				"recipe:DT_Recipes_Upgrade_03:UpgradeShip"
			],
			"droppedByAi": [],
			"droppedByMinerals": [],
			"directProducerCount": 1,
			"directConsumerCount": 5,
			"aiDropSourceCount": 0,
			"mineralDropSourceCount": 0,
			"directSourceCount": 1,
			"directUseCount": 5,
			"directRecipeInputQuantity": 59,
			"upgradeDemandQuantity": 57,
			"sinkClassification": "ship upgrade",
			"requiredQuantityByGroup":
			{
				"crafting": 1,
				"refining": 1,
				"upgrade": 57
			},
			"producedQuantityByGroup":
			{
				"refining": 1
			},
			"producedRecipeGroups": [
				"refining"
			],
			"consumedRecipeGroups": [
				"crafting",
				"refining",
				"upgrade"
			],
			"downstreamChains": [
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "cmp_circuit_boards x4 -> UpgradeShip x1 via DT_Recipes_Upgrade_01",
					"steps": [
						"cmp_circuit_boards x4 -> UpgradeShip x1 via DT_Recipes_Upgrade_01"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "cmp_circuit_boards x15 -> UpgradeShip x1 via DT_Recipes_Upgrade_02",
					"steps": [
						"cmp_circuit_boards x15 -> UpgradeShip x1 via DT_Recipes_Upgrade_02"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "cmp_circuit_boards x38 -> UpgradeShip x1 via DT_Recipes_Upgrade_03",
					"steps": [
						"cmp_circuit_boards x38 -> UpgradeShip x1 via DT_Recipes_Upgrade_03"
					]
				}
			],
			"pickupResolved": true,
			"pickupBlueprintName": "BP_Floating_WorldItem_CircuitBoards",
			"pickupFailureReason": "",
			"itemData":
			{
				"itemId": "cmp_circuit_boards",
				"displayName": "cmp_circuit_boards",
				"category": "",
				"sourceTable": "/Game/UltimateSurvivalPack/Blueprints/Datatable/Inventory/DT_ItemData_StratoWard.DT_ItemData_StratoWard",
				"raw":
				{
					"name": "cmp_circuit_boards",
					"description": "Circuit Boards",
					"maximum Stack": 64,
					"item Type": "Other",
					"icon": "/Script/Engine.Texture2D'/Game/StratoWard/UI/Icons/Icon_CircuitBoard.Icon_CircuitBoard'",
					"item Mesh": "/Script/Engine.StaticMesh'/Game/StratoWard/Mesh/Loot/ManMade/HardCase_Crate_02/cargo__hardcase_model/StaticMeshes/cargo__hardcase_model.cargo__hardcase_model'",
					"survival Properties":
					{
						"health to Add": 0,
						"hunger to Add": 0,
						"thirst to Add": 0,
						"cosume Sound": "/Script/Engine.SoundCue'/Game/UltimateSurvivalPack/Demo/Audio/SFX/CUE_EatSound.CUE_EatSound'",
						"effect Time": 0
					},
					"holdable Class": "None",
					"armor Properties":
					{
						"armor to Add": "Head",
						"armor Male Mesh": "None",
						"armor Female Mesh": "None",
						"armor Protection Percent": 0,
						"hide Mesh": [],
						"slots to Add": 0,
						"temperature to Add": 0
					},
					"building Data":
					{
						"build Type": "Building",
						"ghost Mesh": "None",
						"collision Transform":
						{
							"rotation":
							{
								"x": 0,
								"y": -0,
								"z": 0,
								"w": 1
							},
							"translation":
							{
								"x": 0,
								"y": 0,
								"z": 105
							},
							"scale3D":
							{
								"x": 100,
								"y": 100,
								"z": 100
							}
						},
						"final Building Class": "None",
						"health": 500,
						"repair Add Health": 25,
						"support Snapping": false
					},
					"sell Price": 0,
					"itemTypeTag":
					{
						"tagName": "Item.Category.Component"
					},
					"tier": 2
				}
			},
			"displayName": "cmp_circuit_boards",
			"category": "",
			"balanceFlags": [
				"recipe_only_output",
				"ship_upgrade_demand"
			]
		},
		{
			"key": "item:cmp_microchips",
			"itemId": "cmp_microchips",
			"knownItemData": true,
			"naturalResource": false,
			"producedByRecipes": [
				"recipe:DT_Recipes_Refining:cmp_microchips"
			],
			"consumedByRecipes": [
				"recipe:DT_Recipes_Crafting:item_scanner",
				"recipe:DT_Recipes_Crafting:module_turret_laser",
				"recipe:DT_Recipes_Crafting:weapon_laser",
				"recipe:DT_Recipes_Refining:cmp_tech_data"
			],
			"droppedByAi": [],
			"droppedByMinerals": [],
			"directProducerCount": 1,
			"directConsumerCount": 4,
			"aiDropSourceCount": 0,
			"mineralDropSourceCount": 0,
			"directSourceCount": 1,
			"directUseCount": 4,
			"directRecipeInputQuantity": 6,
			"upgradeDemandQuantity": 0,
			"sinkClassification": "not terminal",
			"requiredQuantityByGroup":
			{
				"crafting": 5,
				"refining": 1
			},
			"producedQuantityByGroup":
			{
				"refining": 1
			},
			"producedRecipeGroups": [
				"refining"
			],
			"consumedRecipeGroups": [
				"crafting",
				"refining"
			],
			"downstreamChains": [
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_laser",
					"summary": "cmp_microchips x2 -> module_turret_laser x1 via DT_Recipes_Crafting",
					"steps": [
						"cmp_microchips x2 -> module_turret_laser x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal weapon",
					"terminalItemId": "weapon_laser",
					"summary": "cmp_microchips x2 -> weapon_laser x1 via DT_Recipes_Crafting",
					"steps": [
						"cmp_microchips x2 -> weapon_laser x1 via DT_Recipes_Crafting"
					]
				}
			],
			"pickupResolved": true,
			"pickupBlueprintName": "BP_Floating_WorldItem_Microchips",
			"pickupFailureReason": "",
			"itemData":
			{
				"itemId": "cmp_microchips",
				"displayName": "cmp_microchips",
				"category": "",
				"sourceTable": "/Game/UltimateSurvivalPack/Blueprints/Datatable/Inventory/DT_ItemData_StratoWard.DT_ItemData_StratoWard",
				"raw":
				{
					"name": "cmp_microchips",
					"description": "Hello world!",
					"maximum Stack": 64,
					"item Type": "Other",
					"icon": "/Script/Engine.Texture2D'/Game/StratoWard/UI/Icons/Icon_MicroChip.Icon_MicroChip'",
					"item Mesh": "/Script/Engine.StaticMesh'/Game/StratoWard/Mesh/Loot/ManMade/HardCase_Crate_02/cargo__hardcase_model/StaticMeshes/cargo__hardcase_model.cargo__hardcase_model'",
					"survival Properties":
					{
						"health to Add": 0,
						"hunger to Add": 0,
						"thirst to Add": 0,
						"cosume Sound": "/Script/Engine.SoundCue'/Game/UltimateSurvivalPack/Demo/Audio/SFX/CUE_EatSound.CUE_EatSound'",
						"effect Time": 0
					},
					"holdable Class": "None",
					"armor Properties":
					{
						"armor to Add": "Head",
						"armor Male Mesh": "None",
						"armor Female Mesh": "None",
						"armor Protection Percent": 0,
						"hide Mesh": [],
						"slots to Add": 0,
						"temperature to Add": 0
					},
					"building Data":
					{
						"build Type": "Building",
						"ghost Mesh": "None",
						"collision Transform":
						{
							"rotation":
							{
								"x": 0,
								"y": -0,
								"z": 0,
								"w": 1
							},
							"translation":
							{
								"x": 0,
								"y": 0,
								"z": 105
							},
							"scale3D":
							{
								"x": 100,
								"y": 100,
								"z": 100
							}
						},
						"final Building Class": "None",
						"health": 500,
						"repair Add Health": 25,
						"support Snapping": false
					},
					"sell Price": 0,
					"itemTypeTag":
					{
						"tagName": "Item.Category.Component"
					},
					"tier": 2
				}
			},
			"displayName": "cmp_microchips",
			"category": "",
			"balanceFlags": [
				"recipe_only_output"
			]
		},
		{
			"key": "item:cmp_servo_motors",
			"itemId": "cmp_servo_motors",
			"knownItemData": true,
			"naturalResource": false,
			"producedByRecipes": [
				"recipe:DT_Recipes_Refining:cmp_servo_motors"
			],
			"consumedByRecipes": [
				"recipe:DT_Recipes_Crafting:cmp_drone_repair",
				"recipe:DT_Recipes_Crafting:module_turret_repair",
				"recipe:DT_Recipes_Crafting:tool_mining",
				"recipe:DT_Recipes_Upgrade_01:UpgradeShip",
				"recipe:DT_Recipes_Upgrade_02:UpgradeShip",
				"recipe:DT_Recipes_Upgrade_03:UpgradeShip"
			],
			"droppedByAi": [],
			"droppedByMinerals": [],
			"directProducerCount": 1,
			"directConsumerCount": 6,
			"aiDropSourceCount": 0,
			"mineralDropSourceCount": 0,
			"directSourceCount": 1,
			"directUseCount": 6,
			"directRecipeInputQuantity": 99,
			"upgradeDemandQuantity": 95,
			"sinkClassification": "ship upgrade",
			"requiredQuantityByGroup":
			{
				"crafting": 4,
				"upgrade": 95
			},
			"producedQuantityByGroup":
			{
				"refining": 1
			},
			"producedRecipeGroups": [
				"refining"
			],
			"consumedRecipeGroups": [
				"crafting",
				"upgrade"
			],
			"downstreamChains": [
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_repair",
					"summary": "cmp_servo_motors x1 -> module_turret_repair x1 via DT_Recipes_Crafting",
					"steps": [
						"cmp_servo_motors x1 -> module_turret_repair x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "cmp_servo_motors x8 -> UpgradeShip x1 via DT_Recipes_Upgrade_01",
					"steps": [
						"cmp_servo_motors x8 -> UpgradeShip x1 via DT_Recipes_Upgrade_01"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "cmp_servo_motors x25 -> UpgradeShip x1 via DT_Recipes_Upgrade_02",
					"steps": [
						"cmp_servo_motors x25 -> UpgradeShip x1 via DT_Recipes_Upgrade_02"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "cmp_servo_motors x62 -> UpgradeShip x1 via DT_Recipes_Upgrade_03",
					"steps": [
						"cmp_servo_motors x62 -> UpgradeShip x1 via DT_Recipes_Upgrade_03"
					]
				}
			],
			"pickupResolved": true,
			"pickupBlueprintName": "BP_Floating_WorldItem_ServoMotors",
			"pickupFailureReason": "",
			"itemData":
			{
				"itemId": "cmp_servo_motors",
				"displayName": "cmp_servo_motors",
				"category": "",
				"sourceTable": "/Game/UltimateSurvivalPack/Blueprints/Datatable/Inventory/DT_ItemData_StratoWard.DT_ItemData_StratoWard",
				"raw":
				{
					"name": "cmp_servo_motors",
					"description": "Hello world!",
					"maximum Stack": 64,
					"item Type": "Other",
					"icon": "/Script/Engine.Texture2D'/Game/StratoWard/UI/Icons/Icon_ServoMotor.Icon_ServoMotor'",
					"item Mesh": "/Script/Engine.StaticMesh'/Game/StratoWard/Mesh/Loot/ManMade/Foil_Package_Med/foil_wrapped_parcel_Med_model/StaticMeshes/foil_wrapped_parcel_Med_model.foil_wrapped_parcel_Med_model'",
					"survival Properties":
					{
						"health to Add": 0,
						"hunger to Add": 0,
						"thirst to Add": 0,
						"cosume Sound": "/Script/Engine.SoundCue'/Game/UltimateSurvivalPack/Demo/Audio/SFX/CUE_EatSound.CUE_EatSound'",
						"effect Time": 0
					},
					"holdable Class": "None",
					"armor Properties":
					{
						"armor to Add": "Head",
						"armor Male Mesh": "None",
						"armor Female Mesh": "None",
						"armor Protection Percent": 0,
						"hide Mesh": [],
						"slots to Add": 0,
						"temperature to Add": 0
					},
					"building Data":
					{
						"build Type": "Building",
						"ghost Mesh": "None",
						"collision Transform":
						{
							"rotation":
							{
								"x": 0,
								"y": -0,
								"z": 0,
								"w": 1
							},
							"translation":
							{
								"x": 0,
								"y": 0,
								"z": 105
							},
							"scale3D":
							{
								"x": 100,
								"y": 100,
								"z": 100
							}
						},
						"final Building Class": "None",
						"health": 500,
						"repair Add Health": 25,
						"support Snapping": false
					},
					"sell Price": 0,
					"itemTypeTag":
					{
						"tagName": "Item.Category.Component"
					},
					"tier": 2
				}
			},
			"displayName": "cmp_servo_motors",
			"category": "",
			"balanceFlags": [
				"recipe_only_output",
				"ship_upgrade_demand"
			]
		},
		{
			"key": "item:cmp_structural_panels",
			"itemId": "cmp_structural_panels",
			"knownItemData": true,
			"naturalResource": false,
			"producedByRecipes": [
				"recipe:DT_Recipes_Refining:cmp_structural_panels"
			],
			"consumedByRecipes": [
				"recipe:DT_Recipes_Crafting:module_solar_panel",
				"recipe:DT_Recipes_Crafting:module_turret_blaster",
				"recipe:DT_Recipes_Crafting:module_turret_laser",
				"recipe:DT_Recipes_Crafting:module_turret_repair",
				"recipe:DT_Recipes_Crafting:module_turret_rocket",
				"recipe:DT_Recipes_Upgrade_01:UpgradeShip",
				"recipe:DT_Recipes_Upgrade_02:UpgradeShip",
				"recipe:DT_Recipes_Upgrade_03:UpgradeShip"
			],
			"droppedByAi": [],
			"droppedByMinerals": [],
			"directProducerCount": 1,
			"directConsumerCount": 8,
			"aiDropSourceCount": 0,
			"mineralDropSourceCount": 0,
			"directSourceCount": 1,
			"directUseCount": 8,
			"directRecipeInputQuantity": 179,
			"upgradeDemandQuantity": 173,
			"sinkClassification": "ship upgrade",
			"requiredQuantityByGroup":
			{
				"crafting": 6,
				"upgrade": 173
			},
			"producedQuantityByGroup":
			{
				"refining": 2
			},
			"producedRecipeGroups": [
				"refining"
			],
			"consumedRecipeGroups": [
				"crafting",
				"upgrade"
			],
			"downstreamChains": [
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_solar_panel",
					"summary": "cmp_structural_panels x1 -> module_solar_panel x1 via DT_Recipes_Crafting",
					"steps": [
						"cmp_structural_panels x1 -> module_solar_panel x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_blaster",
					"summary": "cmp_structural_panels x1 -> module_turret_blaster x1 via DT_Recipes_Crafting",
					"steps": [
						"cmp_structural_panels x1 -> module_turret_blaster x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_laser",
					"summary": "cmp_structural_panels x1 -> module_turret_laser x1 via DT_Recipes_Crafting",
					"steps": [
						"cmp_structural_panels x1 -> module_turret_laser x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_repair",
					"summary": "cmp_structural_panels x1 -> module_turret_repair x1 via DT_Recipes_Crafting",
					"steps": [
						"cmp_structural_panels x1 -> module_turret_repair x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_rocket",
					"summary": "cmp_structural_panels x2 -> module_turret_rocket x1 via DT_Recipes_Crafting",
					"steps": [
						"cmp_structural_panels x2 -> module_turret_rocket x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "cmp_structural_panels x12 -> UpgradeShip x1 via DT_Recipes_Upgrade_01",
					"steps": [
						"cmp_structural_panels x12 -> UpgradeShip x1 via DT_Recipes_Upgrade_01"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "cmp_structural_panels x34 -> UpgradeShip x1 via DT_Recipes_Upgrade_02",
					"steps": [
						"cmp_structural_panels x34 -> UpgradeShip x1 via DT_Recipes_Upgrade_02"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "cmp_structural_panels x127 -> UpgradeShip x1 via DT_Recipes_Upgrade_03",
					"steps": [
						"cmp_structural_panels x127 -> UpgradeShip x1 via DT_Recipes_Upgrade_03"
					]
				}
			],
			"pickupResolved": true,
			"pickupBlueprintName": "BP_Floating_WorldItem_StructuralPanels",
			"pickupFailureReason": "",
			"itemData":
			{
				"itemId": "cmp_structural_panels",
				"displayName": "cmp_structural_panels",
				"category": "",
				"sourceTable": "/Game/UltimateSurvivalPack/Blueprints/Datatable/Inventory/DT_ItemData_StratoWard.DT_ItemData_StratoWard",
				"raw":
				{
					"name": "cmp_structural_panels",
					"description": "Structural Panels",
					"maximum Stack": 64,
					"item Type": "Other",
					"icon": "/Script/Engine.Texture2D'/Game/StratoWard/UI/Icons/Icon_StructuralPanel.Icon_StructuralPanel'",
					"item Mesh": "/Script/Engine.StaticMesh'/Game/StratoWard/Mesh/Loot/ManMade/Cargo_Large/space_cargo_large_model/StaticMeshes/space_cargo_large_model1.space_cargo_large_model1'",
					"survival Properties":
					{
						"health to Add": 0,
						"hunger to Add": 0,
						"thirst to Add": 0,
						"cosume Sound": "/Script/Engine.SoundCue'/Game/UltimateSurvivalPack/Demo/Audio/SFX/CUE_EatSound.CUE_EatSound'",
						"effect Time": 0
					},
					"holdable Class": "None",
					"armor Properties":
					{
						"armor to Add": "Head",
						"armor Male Mesh": "None",
						"armor Female Mesh": "None",
						"armor Protection Percent": 0,
						"hide Mesh": [],
						"slots to Add": 0,
						"temperature to Add": 0
					},
					"building Data":
					{
						"build Type": "Building",
						"ghost Mesh": "None",
						"collision Transform":
						{
							"rotation":
							{
								"x": 0,
								"y": -0,
								"z": 0,
								"w": 1
							},
							"translation":
							{
								"x": 0,
								"y": 0,
								"z": 105
							},
							"scale3D":
							{
								"x": 100,
								"y": 100,
								"z": 100
							}
						},
						"final Building Class": "None",
						"health": 500,
						"repair Add Health": 25,
						"support Snapping": false
					},
					"sell Price": 0,
					"itemTypeTag":
					{
						"tagName": "Item.Category.Component"
					},
					"tier": 2
				}
			},
			"displayName": "cmp_structural_panels",
			"category": "",
			"balanceFlags": [
				"recipe_only_output",
				"ship_upgrade_demand"
			]
		},
		{
			"key": "item:cmp_tech_data",
			"itemId": "cmp_tech_data",
			"knownItemData": true,
			"naturalResource": false,
			"producedByRecipes": [
				"recipe:DT_Recipes_Refining:cmp_tech_data"
			],
			"consumedByRecipes": [
				"recipe:DT_Recipes_Crafting:item_scanner"
			],
			"droppedByAi": [],
			"droppedByMinerals": [],
			"directProducerCount": 1,
			"directConsumerCount": 1,
			"aiDropSourceCount": 0,
			"mineralDropSourceCount": 0,
			"directSourceCount": 1,
			"directUseCount": 1,
			"directRecipeInputQuantity": 1,
			"upgradeDemandQuantity": 0,
			"sinkClassification": "not terminal",
			"requiredQuantityByGroup":
			{
				"crafting": 1
			},
			"producedQuantityByGroup":
			{
				"refining": 1
			},
			"producedRecipeGroups": [
				"refining"
			],
			"consumedRecipeGroups": [
				"crafting"
			],
			"downstreamChains": [],
			"pickupResolved": true,
			"pickupBlueprintName": "BP_Floating_WorldItem_TechData",
			"pickupFailureReason": "",
			"itemData":
			{
				"itemId": "cmp_tech_data",
				"displayName": "cmp_tech_data",
				"category": "",
				"sourceTable": "/Game/UltimateSurvivalPack/Blueprints/Datatable/Inventory/DT_ItemData_StratoWard.DT_ItemData_StratoWard",
				"raw":
				{
					"name": "cmp_tech_data",
					"description": "Tech Data",
					"maximum Stack": 64,
					"item Type": "Other",
					"icon": "/Script/Engine.Texture2D'/Game/StratoWard/UI/Icons/Icon_Data.Icon_Data'",
					"item Mesh": "None",
					"survival Properties":
					{
						"health to Add": 0,
						"hunger to Add": 0,
						"thirst to Add": 0,
						"cosume Sound": "/Script/Engine.SoundCue'/Game/UltimateSurvivalPack/Demo/Audio/SFX/CUE_EatSound.CUE_EatSound'",
						"effect Time": 0
					},
					"holdable Class": "None",
					"armor Properties":
					{
						"armor to Add": "Head",
						"armor Male Mesh": "None",
						"armor Female Mesh": "None",
						"armor Protection Percent": 0,
						"hide Mesh": [],
						"slots to Add": 0,
						"temperature to Add": 0
					},
					"building Data":
					{
						"build Type": "Building",
						"ghost Mesh": "None",
						"collision Transform":
						{
							"rotation":
							{
								"x": 0,
								"y": -0,
								"z": 0,
								"w": 1
							},
							"translation":
							{
								"x": 0,
								"y": 0,
								"z": 105
							},
							"scale3D":
							{
								"x": 100,
								"y": 100,
								"z": 100
							}
						},
						"final Building Class": "None",
						"health": 500,
						"repair Add Health": 25,
						"support Snapping": false
					},
					"sell Price": 0,
					"itemTypeTag":
					{
						"tagName": "Item.Category.Component"
					},
					"tier": 2
				}
			},
			"displayName": "cmp_tech_data",
			"category": "",
			"balanceFlags": [
				"recipe_only_output"
			]
		},
		{
			"key": "item:cmp_thruster_parts",
			"itemId": "cmp_thruster_parts",
			"knownItemData": true,
			"naturalResource": false,
			"producedByRecipes": [
				"recipe:DT_Recipes_Refining:cmp_thruster_parts"
			],
			"consumedByRecipes": [
				"recipe:DT_Recipes_Crafting:module_turret_rocket",
				"recipe:DT_Recipes_Crafting:weapon_rocket"
			],
			"droppedByAi": [],
			"droppedByMinerals": [],
			"directProducerCount": 1,
			"directConsumerCount": 2,
			"aiDropSourceCount": 0,
			"mineralDropSourceCount": 0,
			"directSourceCount": 1,
			"directUseCount": 2,
			"directRecipeInputQuantity": 2,
			"upgradeDemandQuantity": 0,
			"sinkClassification": "not terminal",
			"requiredQuantityByGroup":
			{
				"crafting": 2
			},
			"producedQuantityByGroup":
			{
				"refining": 1
			},
			"producedRecipeGroups": [
				"refining"
			],
			"consumedRecipeGroups": [
				"crafting"
			],
			"downstreamChains": [
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_rocket",
					"summary": "cmp_thruster_parts x1 -> module_turret_rocket x1 via DT_Recipes_Crafting",
					"steps": [
						"cmp_thruster_parts x1 -> module_turret_rocket x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal weapon",
					"terminalItemId": "weapon_rocket",
					"summary": "cmp_thruster_parts x1 -> weapon_rocket x1 via DT_Recipes_Crafting",
					"steps": [
						"cmp_thruster_parts x1 -> weapon_rocket x1 via DT_Recipes_Crafting"
					]
				}
			],
			"pickupResolved": true,
			"pickupBlueprintName": "BP_Floating_WorldItem_ThrusterParts",
			"pickupFailureReason": "",
			"itemData":
			{
				"itemId": "cmp_thruster_parts",
				"displayName": "cmp_thruster_parts",
				"category": "",
				"sourceTable": "/Game/UltimateSurvivalPack/Blueprints/Datatable/Inventory/DT_ItemData_StratoWard.DT_ItemData_StratoWard",
				"raw":
				{
					"name": "cmp_thruster_parts",
					"description": "Thruster Parts",
					"maximum Stack": 64,
					"item Type": "Other",
					"icon": "/Script/Engine.Texture2D'/Game/StratoWard/UI/Icons/Icon_ServoMotor.Icon_ServoMotor'",
					"item Mesh": "/Script/Engine.StaticMesh'/Game/StratoWard/Mesh/Loot/ManMade/Foil_Package_Med/foil_wrapped_parcel_Med_model/StaticMeshes/foil_wrapped_parcel_Med_model.foil_wrapped_parcel_Med_model'",
					"survival Properties":
					{
						"health to Add": 0,
						"hunger to Add": 0,
						"thirst to Add": 0,
						"cosume Sound": "/Script/Engine.SoundCue'/Game/UltimateSurvivalPack/Demo/Audio/SFX/CUE_EatSound.CUE_EatSound'",
						"effect Time": 0
					},
					"holdable Class": "None",
					"armor Properties":
					{
						"armor to Add": "Head",
						"armor Male Mesh": "None",
						"armor Female Mesh": "None",
						"armor Protection Percent": 0,
						"hide Mesh": [],
						"slots to Add": 0,
						"temperature to Add": 0
					},
					"building Data":
					{
						"build Type": "Building",
						"ghost Mesh": "None",
						"collision Transform":
						{
							"rotation":
							{
								"x": 0,
								"y": -0,
								"z": 0,
								"w": 1
							},
							"translation":
							{
								"x": 0,
								"y": 0,
								"z": 105
							},
							"scale3D":
							{
								"x": 100,
								"y": 100,
								"z": 100
							}
						},
						"final Building Class": "None",
						"health": 500,
						"repair Add Health": 25,
						"support Snapping": false
					},
					"sell Price": 0,
					"itemTypeTag":
					{
						"tagName": "Item.Category.Component"
					},
					"tier": 2
				}
			},
			"displayName": "cmp_thruster_parts",
			"category": "",
			"balanceFlags": [
				"recipe_only_output"
			]
		},
		{
			"key": "item:cmp_wire_coils",
			"itemId": "cmp_wire_coils",
			"knownItemData": true,
			"naturalResource": false,
			"producedByRecipes": [
				"recipe:DT_Recipes_Crafting:cmp_wire_coils"
			],
			"consumedByRecipes": [
				"recipe:DT_Recipes_Crafting:module_turret_blaster",
				"recipe:DT_Recipes_Crafting:weapon_blaster",
				"recipe:DT_Recipes_Upgrade_01:UpgradeShip",
				"recipe:DT_Recipes_Upgrade_02:UpgradeShip",
				"recipe:DT_Recipes_Upgrade_03:UpgradeShip"
			],
			"droppedByAi": [],
			"droppedByMinerals": [],
			"directProducerCount": 1,
			"directConsumerCount": 5,
			"aiDropSourceCount": 0,
			"mineralDropSourceCount": 0,
			"directSourceCount": 1,
			"directUseCount": 5,
			"directRecipeInputQuantity": 367,
			"upgradeDemandQuantity": 363,
			"sinkClassification": "ship upgrade",
			"requiredQuantityByGroup":
			{
				"crafting": 4,
				"upgrade": 363
			},
			"producedQuantityByGroup":
			{
				"crafting": 2
			},
			"producedRecipeGroups": [
				"crafting"
			],
			"consumedRecipeGroups": [
				"crafting",
				"upgrade"
			],
			"downstreamChains": [
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_blaster",
					"summary": "cmp_wire_coils x2 -> module_turret_blaster x1 via DT_Recipes_Crafting",
					"steps": [
						"cmp_wire_coils x2 -> module_turret_blaster x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal weapon",
					"terminalItemId": "weapon_blaster",
					"summary": "cmp_wire_coils x2 -> weapon_blaster x1 via DT_Recipes_Crafting",
					"steps": [
						"cmp_wire_coils x2 -> weapon_blaster x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "cmp_wire_coils x35 -> UpgradeShip x1 via DT_Recipes_Upgrade_01",
					"steps": [
						"cmp_wire_coils x35 -> UpgradeShip x1 via DT_Recipes_Upgrade_01"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "cmp_wire_coils x98 -> UpgradeShip x1 via DT_Recipes_Upgrade_02",
					"steps": [
						"cmp_wire_coils x98 -> UpgradeShip x1 via DT_Recipes_Upgrade_02"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "cmp_wire_coils x230 -> UpgradeShip x1 via DT_Recipes_Upgrade_03",
					"steps": [
						"cmp_wire_coils x230 -> UpgradeShip x1 via DT_Recipes_Upgrade_03"
					]
				}
			],
			"pickupResolved": true,
			"pickupBlueprintName": "BP_Floating_WorldItem_WireCoils",
			"pickupFailureReason": "",
			"itemData":
			{
				"itemId": "cmp_wire_coils",
				"displayName": "cmp_wire_coils",
				"category": "",
				"sourceTable": "/Game/UltimateSurvivalPack/Blueprints/Datatable/Inventory/DT_ItemData_StratoWard.DT_ItemData_StratoWard",
				"raw":
				{
					"name": "cmp_wire_coils",
					"description": "Hello world!",
					"maximum Stack": 64,
					"item Type": "Other",
					"icon": "/Script/Engine.Texture2D'/Game/StratoWard/UI/Icons/Icons_WireCoils.Icons_WireCoils'",
					"item Mesh": "/Script/Engine.StaticMesh'/Game/StratoWard/Mesh/Loot/ManMade/Foil_Package_Small/foil_wrapped_parcel_pillow_model/StaticMeshes/foil_wrapped_parcel_pillow_model.foil_wrapped_parcel_pillow_model'",
					"survival Properties":
					{
						"health to Add": 0,
						"hunger to Add": 0,
						"thirst to Add": 0,
						"cosume Sound": "/Script/Engine.SoundCue'/Game/UltimateSurvivalPack/Demo/Audio/SFX/CUE_EatSound.CUE_EatSound'",
						"effect Time": 0
					},
					"holdable Class": "None",
					"armor Properties":
					{
						"armor to Add": "Head",
						"armor Male Mesh": "None",
						"armor Female Mesh": "None",
						"armor Protection Percent": 0,
						"hide Mesh": [],
						"slots to Add": 0,
						"temperature to Add": 0
					},
					"building Data":
					{
						"build Type": "Building",
						"ghost Mesh": "None",
						"collision Transform":
						{
							"rotation":
							{
								"x": 0,
								"y": -0,
								"z": 0,
								"w": 1
							},
							"translation":
							{
								"x": 0,
								"y": 0,
								"z": 105
							},
							"scale3D":
							{
								"x": 100,
								"y": 100,
								"z": 100
							}
						},
						"final Building Class": "None",
						"health": 500,
						"repair Add Health": 25,
						"support Snapping": false
					},
					"sell Price": 0,
					"itemTypeTag":
					{
						"tagName": "Item.Category.Component"
					},
					"tier": 2
				}
			},
			"displayName": "cmp_wire_coils",
			"category": "",
			"balanceFlags": [
				"recipe_only_output",
				"ship_upgrade_demand"
			]
		},
		{
			"key": "item:con_fuel",
			"itemId": "con_fuel",
			"knownItemData": true,
			"naturalResource": false,
			"producedByRecipes": [
				"recipe:DT_Recipes_Crafting:con_fuel"
			],
			"consumedByRecipes": [],
			"droppedByAi": [],
			"droppedByMinerals": [],
			"directProducerCount": 1,
			"directConsumerCount": 0,
			"aiDropSourceCount": 0,
			"mineralDropSourceCount": 0,
			"directSourceCount": 1,
			"directUseCount": 0,
			"directRecipeInputQuantity": 0,
			"upgradeDemandQuantity": 0,
			"sinkClassification": "terminal consumable",
			"requiredQuantityByGroup":
			{
			},
			"producedQuantityByGroup":
			{
				"crafting": 1300
			},
			"producedRecipeGroups": [
				"crafting"
			],
			"consumedRecipeGroups": [],
			"downstreamChains": [],
			"pickupResolved": true,
			"pickupBlueprintName": "BP_Floating_WorldItem_Fuel",
			"pickupFailureReason": "",
			"itemData":
			{
				"itemId": "con_fuel",
				"displayName": "con_fuel",
				"category": "",
				"sourceTable": "/Game/UltimateSurvivalPack/Blueprints/Datatable/Inventory/DT_ItemData_StratoWard.DT_ItemData_StratoWard",
				"raw":
				{
					"name": "con_fuel",
					"description": "Fuel",
					"maximum Stack": 1600,
					"item Type": "Other",
					"icon": "/Script/Engine.Texture2D'/Game/StratoWard/UI/Icons/Icon_FuelTank.Icon_FuelTank'",
					"item Mesh": "/Script/Engine.StaticMesh'/Game/StratoWard/Mesh/Loot/ManMade/FuelTank/red_yellow_fuel_tank_3d_model/StaticMeshes/red_yellow_fuel_tank_3d_model.red_yellow_fuel_tank_3d_model'",
					"survival Properties":
					{
						"health to Add": 0,
						"hunger to Add": 0,
						"thirst to Add": 0,
						"cosume Sound": "/Script/Engine.SoundCue'/Game/UltimateSurvivalPack/Demo/Audio/SFX/CUE_EatSound.CUE_EatSound'",
						"effect Time": 0
					},
					"holdable Class": "None",
					"armor Properties":
					{
						"armor to Add": "Head",
						"armor Male Mesh": "None",
						"armor Female Mesh": "None",
						"armor Protection Percent": 0,
						"hide Mesh": [],
						"slots to Add": 0,
						"temperature to Add": 0
					},
					"building Data":
					{
						"build Type": "Building",
						"ghost Mesh": "None",
						"collision Transform":
						{
							"rotation":
							{
								"x": 0,
								"y": -0,
								"z": 0,
								"w": 1
							},
							"translation":
							{
								"x": 0,
								"y": 0,
								"z": 105
							},
							"scale3D":
							{
								"x": 100,
								"y": 100,
								"z": 100
							}
						},
						"final Building Class": "None",
						"health": 500,
						"repair Add Health": 25,
						"support Snapping": false
					},
					"sell Price": 0,
					"itemTypeTag":
					{
						"tagName": "Item.Category.Consumable"
					},
					"tier": 3
				}
			},
			"displayName": "con_fuel",
			"category": "",
			"balanceFlags": [
				"recipe_only_output"
			]
		},
		{
			"key": "item:con_nutrient_paste",
			"itemId": "con_nutrient_paste",
			"knownItemData": true,
			"naturalResource": false,
			"producedByRecipes": [
				"recipe:DT_Recipes_Crafting:con_nutrient_paste"
			],
			"consumedByRecipes": [],
			"droppedByAi": [],
			"droppedByMinerals": [],
			"directProducerCount": 1,
			"directConsumerCount": 0,
			"aiDropSourceCount": 0,
			"mineralDropSourceCount": 0,
			"directSourceCount": 1,
			"directUseCount": 0,
			"directRecipeInputQuantity": 0,
			"upgradeDemandQuantity": 0,
			"sinkClassification": "terminal consumable",
			"requiredQuantityByGroup":
			{
			},
			"producedQuantityByGroup":
			{
				"crafting": 1
			},
			"producedRecipeGroups": [
				"crafting"
			],
			"consumedRecipeGroups": [],
			"downstreamChains": [],
			"pickupResolved": true,
			"pickupBlueprintName": "BP_Floating_WorldItem_NutrientPastePack",
			"pickupFailureReason": "",
			"itemData":
			{
				"itemId": "con_nutrient_paste",
				"displayName": "con_nutrient_paste",
				"category": "",
				"sourceTable": "/Game/UltimateSurvivalPack/Blueprints/Datatable/Inventory/DT_ItemData_StratoWard.DT_ItemData_StratoWard",
				"raw":
				{
					"name": "con_nutrient_paste",
					"description": "Nutrient paste pack",
					"maximum Stack": 64,
					"item Type": "Food",
					"icon": "/Script/Engine.Texture2D'/Game/StratoWard/UI/Icons/Icon_NutrientPaste.Icon_NutrientPaste'",
					"item Mesh": "/Script/Engine.StaticMesh'/Game/StratoWard/Mesh/Loot/ManMade/ProteinPack/protein_pack_model/StaticMeshes/protein_pack_model.protein_pack_model'",
					"survival Properties":
					{
						"health to Add": 15,
						"hunger to Add": 50,
						"thirst to Add": 30,
						"cosume Sound": "/Script/Engine.SoundCue'/Game/UltimateSurvivalPack/Demo/Audio/SFX/CUE_EatSound.CUE_EatSound'",
						"effect Time": 0
					},
					"holdable Class": "None",
					"armor Properties":
					{
						"armor to Add": "Head",
						"armor Male Mesh": "None",
						"armor Female Mesh": "None",
						"armor Protection Percent": 0,
						"hide Mesh": [],
						"slots to Add": 0,
						"temperature to Add": 0
					},
					"building Data":
					{
						"build Type": "Building",
						"ghost Mesh": "None",
						"collision Transform":
						{
							"rotation":
							{
								"x": 0,
								"y": -0,
								"z": 0,
								"w": 1
							},
							"translation":
							{
								"x": 0,
								"y": 0,
								"z": 105
							},
							"scale3D":
							{
								"x": 100,
								"y": 100,
								"z": 100
							}
						},
						"final Building Class": "None",
						"health": 500,
						"repair Add Health": 25,
						"support Snapping": false
					},
					"sell Price": 0,
					"itemTypeTag":
					{
						"tagName": "Item.Category.Consumable"
					},
					"tier": 3
				}
			},
			"displayName": "con_nutrient_paste",
			"category": "",
			"balanceFlags": [
				"recipe_only_output"
			]
		},
		{
			"key": "item:con_protein_bar",
			"itemId": "con_protein_bar",
			"knownItemData": true,
			"naturalResource": false,
			"producedByRecipes": [
				"recipe:DT_Recipes_Crafting:con_protein_bar"
			],
			"consumedByRecipes": [],
			"droppedByAi": [],
			"droppedByMinerals": [],
			"directProducerCount": 1,
			"directConsumerCount": 0,
			"aiDropSourceCount": 0,
			"mineralDropSourceCount": 0,
			"directSourceCount": 1,
			"directUseCount": 0,
			"directRecipeInputQuantity": 0,
			"upgradeDemandQuantity": 0,
			"sinkClassification": "terminal consumable",
			"requiredQuantityByGroup":
			{
			},
			"producedQuantityByGroup":
			{
				"crafting": 1
			},
			"producedRecipeGroups": [
				"crafting"
			],
			"consumedRecipeGroups": [],
			"downstreamChains": [],
			"pickupResolved": true,
			"pickupBlueprintName": "BP_Floating_WorldItem_ProteinBar",
			"pickupFailureReason": "",
			"itemData":
			{
				"itemId": "con_protein_bar",
				"displayName": "con_protein_bar",
				"category": "",
				"sourceTable": "/Game/UltimateSurvivalPack/Blueprints/Datatable/Inventory/DT_ItemData_StratoWard.DT_ItemData_StratoWard",
				"raw":
				{
					"name": "con_protein_bar",
					"description": "Protein bar",
					"maximum Stack": 3,
					"item Type": "Food",
					"icon": "/Script/Engine.Texture2D'/Game/StratoWard/UI/Icons/Icon_ProteinBar.Icon_ProteinBar'",
					"item Mesh": "/Script/Engine.StaticMesh'/Game/StratoWard/Mesh/Loot/ManMade/ProteinBar/protein_bar_model/StaticMeshes/protein_bar_model.protein_bar_model'",
					"survival Properties":
					{
						"health to Add": 10,
						"hunger to Add": 30,
						"thirst to Add": 15,
						"cosume Sound": "/Script/Engine.SoundCue'/Game/UltimateSurvivalPack/Demo/Audio/SFX/CUE_EatSound.CUE_EatSound'",
						"effect Time": 0
					},
					"holdable Class": "None",
					"armor Properties":
					{
						"armor to Add": "Head",
						"armor Male Mesh": "None",
						"armor Female Mesh": "None",
						"armor Protection Percent": 0,
						"hide Mesh": [],
						"slots to Add": 0,
						"temperature to Add": 0
					},
					"building Data":
					{
						"build Type": "Building",
						"ghost Mesh": "None",
						"collision Transform":
						{
							"rotation":
							{
								"x": 0,
								"y": -0,
								"z": 0,
								"w": 1
							},
							"translation":
							{
								"x": 0,
								"y": 0,
								"z": 105
							},
							"scale3D":
							{
								"x": 100,
								"y": 100,
								"z": 100
							}
						},
						"final Building Class": "None",
						"health": 500,
						"repair Add Health": 25,
						"support Snapping": false
					},
					"sell Price": 0,
					"itemTypeTag":
					{
						"tagName": "Item.Category.Consumable"
					},
					"tier": 3
				}
			},
			"displayName": "con_protein_bar",
			"category": "",
			"balanceFlags": [
				"recipe_only_output"
			]
		},
		{
			"key": "item:con_synth_steak",
			"itemId": "con_synth_steak",
			"knownItemData": true,
			"naturalResource": false,
			"producedByRecipes": [
				"recipe:DT_Recipes_Crafting:con_synth_steak"
			],
			"consumedByRecipes": [],
			"droppedByAi": [],
			"droppedByMinerals": [],
			"directProducerCount": 1,
			"directConsumerCount": 0,
			"aiDropSourceCount": 0,
			"mineralDropSourceCount": 0,
			"directSourceCount": 1,
			"directUseCount": 0,
			"directRecipeInputQuantity": 0,
			"upgradeDemandQuantity": 0,
			"sinkClassification": "terminal consumable",
			"requiredQuantityByGroup":
			{
			},
			"producedQuantityByGroup":
			{
				"crafting": 1
			},
			"producedRecipeGroups": [
				"crafting"
			],
			"consumedRecipeGroups": [],
			"downstreamChains": [],
			"pickupResolved": true,
			"pickupBlueprintName": "BP_Floating_WorldItem_SynthSteak",
			"pickupFailureReason": "",
			"itemData":
			{
				"itemId": "con_synth_steak",
				"displayName": "con_synth_steak",
				"category": "",
				"sourceTable": "/Game/UltimateSurvivalPack/Blueprints/Datatable/Inventory/DT_ItemData_StratoWard.DT_ItemData_StratoWard",
				"raw":
				{
					"name": "con_synth_steak",
					"description": "Synth steak",
					"maximum Stack": 64,
					"item Type": "Food",
					"icon": "/Script/Engine.Texture2D'/Game/StratoWard/UI/Icons/Icon_SynthSteak.Icon_SynthSteak'",
					"item Mesh": "/Script/Engine.StaticMesh'/Game/UltimateSurvivalPack/Demo/Mesh/SM_Pork_Cooked.SM_Pork_Cooked'",
					"survival Properties":
					{
						"health to Add": 30,
						"hunger to Add": 100,
						"thirst to Add": -10,
						"cosume Sound": "/Script/Engine.SoundCue'/Game/UltimateSurvivalPack/Demo/Audio/SFX/CUE_EatSound.CUE_EatSound'",
						"effect Time": 0
					},
					"holdable Class": "None",
					"armor Properties":
					{
						"armor to Add": "Head",
						"armor Male Mesh": "None",
						"armor Female Mesh": "None",
						"armor Protection Percent": 0,
						"hide Mesh": [],
						"slots to Add": 0,
						"temperature to Add": 0
					},
					"building Data":
					{
						"build Type": "Building",
						"ghost Mesh": "None",
						"collision Transform":
						{
							"rotation":
							{
								"x": 0,
								"y": -0,
								"z": 0,
								"w": 1
							},
							"translation":
							{
								"x": 0,
								"y": 0,
								"z": 105
							},
							"scale3D":
							{
								"x": 100,
								"y": 100,
								"z": 100
							}
						},
						"final Building Class": "None",
						"health": 500,
						"repair Add Health": 25,
						"support Snapping": false
					},
					"sell Price": 0,
					"itemTypeTag":
					{
						"tagName": "Item.Category.Consumable"
					},
					"tier": 3
				}
			},
			"displayName": "con_synth_steak",
			"category": "",
			"balanceFlags": [
				"recipe_only_output"
			]
		},
		{
			"key": "item:con_water_pack",
			"itemId": "con_water_pack",
			"knownItemData": true,
			"naturalResource": false,
			"producedByRecipes": [
				"recipe:DT_Recipes_Crafting:con_water_pack"
			],
			"consumedByRecipes": [],
			"droppedByAi": [],
			"droppedByMinerals": [],
			"directProducerCount": 1,
			"directConsumerCount": 0,
			"aiDropSourceCount": 0,
			"mineralDropSourceCount": 0,
			"directSourceCount": 1,
			"directUseCount": 0,
			"directRecipeInputQuantity": 0,
			"upgradeDemandQuantity": 0,
			"sinkClassification": "terminal consumable",
			"requiredQuantityByGroup":
			{
			},
			"producedQuantityByGroup":
			{
				"crafting": 1
			},
			"producedRecipeGroups": [
				"crafting"
			],
			"consumedRecipeGroups": [],
			"downstreamChains": [],
			"pickupResolved": true,
			"pickupBlueprintName": "BP_Floating_WorldItem_WaterPack",
			"pickupFailureReason": "",
			"itemData":
			{
				"itemId": "con_water_pack",
				"displayName": "con_water_pack",
				"category": "",
				"sourceTable": "/Game/UltimateSurvivalPack/Blueprints/Datatable/Inventory/DT_ItemData_StratoWard.DT_ItemData_StratoWard",
				"raw":
				{
					"name": "con_water_pack",
					"description": "Water pack",
					"maximum Stack": 64,
					"item Type": "Food",
					"icon": "/Script/Engine.Texture2D'/Game/StratoWard/UI/Icons/Icon_WaterPack.Icon_WaterPack'",
					"item Mesh": "/Script/Engine.StaticMesh'/Game/StratoWard/Mesh/Loot/ManMade/WaterPack/water_pack_3d_model/StaticMeshes/water_pack_3d_model.water_pack_3d_model'",
					"survival Properties":
					{
						"health to Add": 3,
						"hunger to Add": 3,
						"thirst to Add": 50,
						"cosume Sound": "/Script/Engine.SoundCue'/Game/UltimateSurvivalPack/Demo/Audio/SFX/CUE_EatSound.CUE_EatSound'",
						"effect Time": 0
					},
					"holdable Class": "None",
					"armor Properties":
					{
						"armor to Add": "Head",
						"armor Male Mesh": "None",
						"armor Female Mesh": "None",
						"armor Protection Percent": 0,
						"hide Mesh": [],
						"slots to Add": 0,
						"temperature to Add": 0
					},
					"building Data":
					{
						"build Type": "Building",
						"ghost Mesh": "None",
						"collision Transform":
						{
							"rotation":
							{
								"x": 0,
								"y": -0,
								"z": 0,
								"w": 1
							},
							"translation":
							{
								"x": 0,
								"y": 0,
								"z": 105
							},
							"scale3D":
							{
								"x": 100,
								"y": 100,
								"z": 100
							}
						},
						"final Building Class": "None",
						"health": 500,
						"repair Add Health": 25,
						"support Snapping": false
					},
					"sell Price": 0,
					"itemTypeTag":
					{
						"tagName": "Item.Category.Consumable"
					},
					"tier": 3
				}
			},
			"displayName": "con_water_pack",
			"category": "",
			"balanceFlags": [
				"recipe_only_output"
			]
		},
		{
			"key": "item:Drone",
			"itemId": "Drone",
			"knownItemData": true,
			"naturalResource": false,
			"producedByRecipes": [
				"recipe:DT_Recipes_Crafting:cmp_drone_repair"
			],
			"consumedByRecipes": [],
			"droppedByAi": [],
			"droppedByMinerals": [],
			"directProducerCount": 1,
			"directConsumerCount": 0,
			"aiDropSourceCount": 0,
			"mineralDropSourceCount": 0,
			"directSourceCount": 1,
			"directUseCount": 0,
			"directRecipeInputQuantity": 0,
			"upgradeDemandQuantity": 0,
			"sinkClassification": "not terminal",
			"requiredQuantityByGroup":
			{
			},
			"producedQuantityByGroup":
			{
				"crafting": 5
			},
			"producedRecipeGroups": [
				"crafting"
			],
			"consumedRecipeGroups": [],
			"downstreamChains": [],
			"pickupResolved": false,
			"pickupBlueprintName": "",
			"pickupFailureReason": "Drone: no pickup BP match",
			"itemData":
			{
				"itemId": "Drone",
				"displayName": "Drone",
				"category": "",
				"sourceTable": "/Game/UltimateSurvivalPack/Blueprints/Datatable/Inventory/DT_ItemData_StratoWard.DT_ItemData_StratoWard",
				"raw":
				{
					"name": "Drone",
					"description": "Add to repair bay to have it fix the ship",
					"maximum Stack": 64,
					"item Type": "Other",
					"icon": "/Script/Engine.Texture2D'/Engine/EditorResources/Ai_Spawnpoint.Ai_Spawnpoint'",
					"item Mesh": "/Script/Engine.StaticMesh'/Game/StratoWard/Mesh/Aliens/Enemies/Star_Drone/SM_Star_Drone_WIP.SM_Star_Drone_WIP'",
					"survival Properties":
					{
						"health to Add": 0,
						"hunger to Add": 0,
						"thirst to Add": 0,
						"cosume Sound": "/Script/Engine.SoundCue'/Game/UltimateSurvivalPack/Demo/Audio/SFX/CUE_EatSound.CUE_EatSound'",
						"effect Time": 0
					},
					"holdable Class": "None",
					"armor Properties":
					{
						"armor to Add": "Head",
						"armor Male Mesh": "None",
						"armor Female Mesh": "None",
						"armor Protection Percent": 0,
						"hide Mesh": [],
						"slots to Add": 0,
						"temperature to Add": 0
					},
					"building Data":
					{
						"build Type": "Building",
						"ghost Mesh": "None",
						"collision Transform":
						{
							"rotation":
							{
								"x": 0,
								"y": -0,
								"z": 0,
								"w": 1
							},
							"translation":
							{
								"x": 0,
								"y": 0,
								"z": 105
							},
							"scale3D":
							{
								"x": 100,
								"y": 100,
								"z": 100
							}
						},
						"final Building Class": "None",
						"health": 500,
						"repair Add Health": 25,
						"support Snapping": false
					},
					"sell Price": 2,
					"itemTypeTag":
					{
						"tagName": "None"
					},
					"tier": 0
				}
			},
			"displayName": "Drone",
			"category": "",
			"balanceFlags": [
				"missing_pickup_mapping",
				"no_sinks",
				"recipe_only_output"
			]
		},
		{
			"key": "item:GatlinGun",
			"itemId": "GatlinGun",
			"knownItemData": true,
			"naturalResource": false,
			"producedByRecipes": [],
			"consumedByRecipes": [],
			"droppedByAi": [],
			"droppedByMinerals": [],
			"directProducerCount": 0,
			"directConsumerCount": 0,
			"aiDropSourceCount": 0,
			"mineralDropSourceCount": 0,
			"directSourceCount": 0,
			"directUseCount": 0,
			"directRecipeInputQuantity": 0,
			"upgradeDemandQuantity": 0,
			"sinkClassification": "not terminal",
			"requiredQuantityByGroup":
			{
			},
			"producedQuantityByGroup":
			{
			},
			"producedRecipeGroups": [],
			"consumedRecipeGroups": [],
			"downstreamChains": [],
			"pickupResolved": false,
			"pickupBlueprintName": "",
			"pickupFailureReason": "GatlinGun: no pickup BP match",
			"itemData":
			{
				"itemId": "GatlinGun",
				"displayName": "GatlinGun",
				"category": "",
				"sourceTable": "/Game/UltimateSurvivalPack/Blueprints/Datatable/Inventory/DT_ItemData_StratoWard.DT_ItemData_StratoWard",
				"raw":
				{
					"name": "GatlinGun",
					"description": "A gun",
					"maximum Stack": 1,
					"item Type": "Weapon",
					"icon": "/Script/Engine.Texture2D'/Game/StratoWard/UI/Icons/Icon_Turret_Blaster.Icon_Turret_Blaster'",
					"item Mesh": "/Script/Engine.StaticMesh'/Game/UltimateSurvivalPack/Demo/Mesh/Weapons/SM_UZI.SM_UZI'",
					"survival Properties":
					{
						"health to Add": 0,
						"hunger to Add": 0,
						"thirst to Add": 0,
						"cosume Sound": "/Script/Engine.SoundCue'/Game/UltimateSurvivalPack/Demo/Audio/SFX/CUE_EatSound.CUE_EatSound'",
						"effect Time": 0
					},
					"holdable Class": "/Script/Engine.BlueprintGeneratedClass'/Game/UltimateSurvivalPack/Blueprints/Holdable/HoldableActors/StratoWard/BP_Holdable_RangeWeapon_GatlinGun.BP_Holdable_RangeWeapon_GatlinGun_C'",
					"armor Properties":
					{
						"armor to Add": "Head",
						"armor Male Mesh": "None",
						"armor Female Mesh": "None",
						"armor Protection Percent": 0,
						"hide Mesh": [],
						"slots to Add": 0,
						"temperature to Add": 0
					},
					"building Data":
					{
						"build Type": "Building",
						"ghost Mesh": "None",
						"collision Transform":
						{
							"rotation":
							{
								"x": 0,
								"y": -0,
								"z": 0,
								"w": 1
							},
							"translation":
							{
								"x": 0,
								"y": 0,
								"z": 105
							},
							"scale3D":
							{
								"x": 100,
								"y": 100,
								"z": 100
							}
						},
						"final Building Class": "None",
						"health": 500,
						"repair Add Health": 25,
						"support Snapping": false
					},
					"sell Price": 40,
					"itemTypeTag":
					{
						"tagName": "None"
					},
					"tier": 0
				}
			},
			"displayName": "GatlinGun",
			"category": "",
			"balanceFlags": [
				"missing_pickup_mapping",
				"missing_sources",
				"no_sinks"
			]
		},
		{
			"key": "item:item_scanner",
			"itemId": "item_scanner",
			"knownItemData": true,
			"naturalResource": false,
			"producedByRecipes": [
				"recipe:DT_Recipes_Crafting:item_scanner"
			],
			"consumedByRecipes": [],
			"droppedByAi": [],
			"droppedByMinerals": [],
			"directProducerCount": 1,
			"directConsumerCount": 0,
			"aiDropSourceCount": 0,
			"mineralDropSourceCount": 0,
			"directSourceCount": 1,
			"directUseCount": 0,
			"directRecipeInputQuantity": 0,
			"upgradeDemandQuantity": 0,
			"sinkClassification": "not terminal",
			"requiredQuantityByGroup":
			{
			},
			"producedQuantityByGroup":
			{
				"crafting": 1
			},
			"producedRecipeGroups": [
				"crafting"
			],
			"consumedRecipeGroups": [],
			"downstreamChains": [],
			"pickupResolved": true,
			"pickupBlueprintName": "BP_Floating_WorldItem_Scanner",
			"pickupFailureReason": "",
			"itemData":
			{
				"itemId": "item_scanner",
				"displayName": "item_scanner",
				"category": "",
				"sourceTable": "/Game/UltimateSurvivalPack/Blueprints/Datatable/Inventory/DT_ItemData_StratoWard.DT_ItemData_StratoWard",
				"raw":
				{
					"name": "item_scanner",
					"description": "Detector Scanner",
					"maximum Stack": 1,
					"item Type": "Weapon",
					"icon": "/Script/Engine.Texture2D'/Game/StratoWard/UI/Icons/Icon_Scanner.Icon_Scanner'",
					"item Mesh": "None",
					"survival Properties":
					{
						"health to Add": 0,
						"hunger to Add": 0,
						"thirst to Add": 0,
						"cosume Sound": "/Script/Engine.SoundCue'/Game/UltimateSurvivalPack/Demo/Audio/SFX/CUE_EatSound.CUE_EatSound'",
						"effect Time": 0
					},
					"holdable Class": "/Script/Engine.BlueprintGeneratedClass'/Game/UltimateSurvivalPack/Blueprints/Holdable/HoldableActors/BP_SW_Holdable_DetectorScanner.BP_SW_Holdable_DetectorScanner_C'",
					"armor Properties":
					{
						"armor to Add": "Head",
						"armor Male Mesh": "None",
						"armor Female Mesh": "None",
						"armor Protection Percent": 0,
						"hide Mesh": [],
						"slots to Add": 0,
						"temperature to Add": 0
					},
					"building Data":
					{
						"build Type": "Building",
						"ghost Mesh": "None",
						"collision Transform":
						{
							"rotation":
							{
								"x": 0,
								"y": -0,
								"z": 0,
								"w": 1
							},
							"translation":
							{
								"x": 0,
								"y": 0,
								"z": 105
							},
							"scale3D":
							{
								"x": 100,
								"y": 100,
								"z": 100
							}
						},
						"final Building Class": "None",
						"health": 500,
						"repair Add Health": 25,
						"support Snapping": false
					},
					"sell Price": 0,
					"itemTypeTag":
					{
						"tagName": "Item.Category.FinalItem"
					},
					"tier": 3
				}
			},
			"displayName": "item_scanner",
			"category": "",
			"balanceFlags": [
				"no_sinks",
				"recipe_only_output"
			]
		},
		{
			"key": "item:mat_aluminum_alloy",
			"itemId": "mat_aluminum_alloy",
			"knownItemData": true,
			"naturalResource": false,
			"producedByRecipes": [
				"recipe:DT_Recipes_Refining:mat_aluminum_alloy"
			],
			"consumedByRecipes": [
				"recipe:DT_Recipes_Crafting:cmp_drone_repair",
				"recipe:DT_Recipes_Refining:cmp_structural_panels",
				"recipe:DT_Recipes_Refining:cmp_thruster_parts"
			],
			"droppedByAi": [],
			"droppedByMinerals": [],
			"directProducerCount": 1,
			"directConsumerCount": 3,
			"aiDropSourceCount": 0,
			"mineralDropSourceCount": 0,
			"directSourceCount": 1,
			"directUseCount": 3,
			"directRecipeInputQuantity": 7,
			"upgradeDemandQuantity": 0,
			"sinkClassification": "not terminal",
			"requiredQuantityByGroup":
			{
				"crafting": 2,
				"refining": 5
			},
			"producedQuantityByGroup":
			{
				"refining": 2
			},
			"producedRecipeGroups": [
				"refining"
			],
			"consumedRecipeGroups": [
				"crafting",
				"refining"
			],
			"downstreamChains": [
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_solar_panel",
					"summary": "mat_aluminum_alloy x3 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x1 -> module_solar_panel x1 via DT_Recipes_Crafting",
					"steps": [
						"mat_aluminum_alloy x3 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x1 -> module_solar_panel x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_blaster",
					"summary": "mat_aluminum_alloy x3 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x1 -> module_turret_blaster x1 via DT_Recipes_Crafting",
					"steps": [
						"mat_aluminum_alloy x3 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x1 -> module_turret_blaster x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_laser",
					"summary": "mat_aluminum_alloy x3 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x1 -> module_turret_laser x1 via DT_Recipes_Crafting",
					"steps": [
						"mat_aluminum_alloy x3 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x1 -> module_turret_laser x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_repair",
					"summary": "mat_aluminum_alloy x3 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x1 -> module_turret_repair x1 via DT_Recipes_Crafting",
					"steps": [
						"mat_aluminum_alloy x3 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x1 -> module_turret_repair x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_rocket",
					"summary": "mat_aluminum_alloy x3 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x2 -> module_turret_rocket x1 via DT_Recipes_Crafting",
					"steps": [
						"mat_aluminum_alloy x3 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x2 -> module_turret_rocket x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "mat_aluminum_alloy x3 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x12 -> UpgradeShip x1 via DT_Recipes_Upgrade_01",
					"steps": [
						"mat_aluminum_alloy x3 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x12 -> UpgradeShip x1 via DT_Recipes_Upgrade_01"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "mat_aluminum_alloy x3 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x34 -> UpgradeShip x1 via DT_Recipes_Upgrade_02",
					"steps": [
						"mat_aluminum_alloy x3 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x34 -> UpgradeShip x1 via DT_Recipes_Upgrade_02"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "mat_aluminum_alloy x3 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x127 -> UpgradeShip x1 via DT_Recipes_Upgrade_03",
					"steps": [
						"mat_aluminum_alloy x3 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x127 -> UpgradeShip x1 via DT_Recipes_Upgrade_03"
					]
				},
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_rocket",
					"summary": "mat_aluminum_alloy x2 -> cmp_thruster_parts x1 via DT_Recipes_Refining -> cmp_thruster_parts x1 -> module_turret_rocket x1 via DT_Recipes_Crafting",
					"steps": [
						"mat_aluminum_alloy x2 -> cmp_thruster_parts x1 via DT_Recipes_Refining",
						"cmp_thruster_parts x1 -> module_turret_rocket x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal weapon",
					"terminalItemId": "weapon_rocket",
					"summary": "mat_aluminum_alloy x2 -> cmp_thruster_parts x1 via DT_Recipes_Refining -> cmp_thruster_parts x1 -> weapon_rocket x1 via DT_Recipes_Crafting",
					"steps": [
						"mat_aluminum_alloy x2 -> cmp_thruster_parts x1 via DT_Recipes_Refining",
						"cmp_thruster_parts x1 -> weapon_rocket x1 via DT_Recipes_Crafting"
					]
				}
			],
			"pickupResolved": true,
			"pickupBlueprintName": "BP_Floating_WorldItem_AluminumAlloy",
			"pickupFailureReason": "",
			"itemData":
			{
				"itemId": "mat_aluminum_alloy",
				"displayName": "mat_aluminum_alloy",
				"category": "",
				"sourceTable": "/Game/UltimateSurvivalPack/Blueprints/Datatable/Inventory/DT_ItemData_StratoWard.DT_ItemData_StratoWard",
				"raw":
				{
					"name": "mat_aluminum_alloy",
					"description": "Hello world!",
					"maximum Stack": 64,
					"item Type": "Other",
					"icon": "/Script/Engine.Texture2D'/Game/StratoWard/UI/Icons/Icon_Aluminum_Alloy.Icon_Aluminum_Alloy'",
					"item Mesh": "/Script/Engine.StaticMesh'/Game/StratoWard/Mesh/Loot/ManMade/Foil_Package_Small/foil_wrapped_parcel_pillow_model/StaticMeshes/foil_wrapped_parcel_pillow_model1.foil_wrapped_parcel_pillow_model1'",
					"survival Properties":
					{
						"health to Add": 0,
						"hunger to Add": 0,
						"thirst to Add": 0,
						"cosume Sound": "/Script/Engine.SoundCue'/Game/UltimateSurvivalPack/Demo/Audio/SFX/CUE_EatSound.CUE_EatSound'",
						"effect Time": 0
					},
					"holdable Class": "None",
					"armor Properties":
					{
						"armor to Add": "Head",
						"armor Male Mesh": "None",
						"armor Female Mesh": "None",
						"armor Protection Percent": 0,
						"hide Mesh": [],
						"slots to Add": 0,
						"temperature to Add": 0
					},
					"building Data":
					{
						"build Type": "Building",
						"ghost Mesh": "None",
						"collision Transform":
						{
							"rotation":
							{
								"x": 0,
								"y": -0,
								"z": 0,
								"w": 1
							},
							"translation":
							{
								"x": 0,
								"y": 0,
								"z": 105
							},
							"scale3D":
							{
								"x": 100,
								"y": 100,
								"z": 100
							}
						},
						"final Building Class": "None",
						"health": 500,
						"repair Add Health": 25,
						"support Snapping": false
					},
					"sell Price": 0,
					"itemTypeTag":
					{
						"tagName": "Item.Category.Material"
					},
					"tier": 1
				}
			},
			"displayName": "mat_aluminum_alloy",
			"category": "",
			"balanceFlags": [
				"recipe_only_output"
			]
		},
		{
			"key": "item:mat_copper",
			"itemId": "mat_copper",
			"knownItemData": true,
			"naturalResource": true,
			"producedByRecipes": [
				"recipe:DT_Recipes_Refining:mat_copper"
			],
			"consumedByRecipes": [
				"recipe:DT_Recipes_Crafting:cmp_wire_coils",
				"recipe:DT_Recipes_Refining:cmp_circuit_boards"
			],
			"droppedByAi": [],
			"droppedByMinerals": [],
			"directProducerCount": 1,
			"directConsumerCount": 2,
			"aiDropSourceCount": 0,
			"mineralDropSourceCount": 0,
			"directSourceCount": 1,
			"directUseCount": 2,
			"directRecipeInputQuantity": 3,
			"upgradeDemandQuantity": 0,
			"sinkClassification": "not terminal",
			"requiredQuantityByGroup":
			{
				"crafting": 2,
				"refining": 1
			},
			"producedQuantityByGroup":
			{
				"refining": 2
			},
			"producedRecipeGroups": [
				"refining"
			],
			"consumedRecipeGroups": [
				"crafting",
				"refining"
			],
			"downstreamChains": [
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_blaster",
					"summary": "mat_copper x2 -> cmp_wire_coils x2 via DT_Recipes_Crafting -> cmp_wire_coils x2 -> module_turret_blaster x1 via DT_Recipes_Crafting",
					"steps": [
						"mat_copper x2 -> cmp_wire_coils x2 via DT_Recipes_Crafting",
						"cmp_wire_coils x2 -> module_turret_blaster x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal weapon",
					"terminalItemId": "weapon_blaster",
					"summary": "mat_copper x2 -> cmp_wire_coils x2 via DT_Recipes_Crafting -> cmp_wire_coils x2 -> weapon_blaster x1 via DT_Recipes_Crafting",
					"steps": [
						"mat_copper x2 -> cmp_wire_coils x2 via DT_Recipes_Crafting",
						"cmp_wire_coils x2 -> weapon_blaster x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "mat_copper x2 -> cmp_wire_coils x2 via DT_Recipes_Crafting -> cmp_wire_coils x35 -> UpgradeShip x1 via DT_Recipes_Upgrade_01",
					"steps": [
						"mat_copper x2 -> cmp_wire_coils x2 via DT_Recipes_Crafting",
						"cmp_wire_coils x35 -> UpgradeShip x1 via DT_Recipes_Upgrade_01"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "mat_copper x2 -> cmp_wire_coils x2 via DT_Recipes_Crafting -> cmp_wire_coils x98 -> UpgradeShip x1 via DT_Recipes_Upgrade_02",
					"steps": [
						"mat_copper x2 -> cmp_wire_coils x2 via DT_Recipes_Crafting",
						"cmp_wire_coils x98 -> UpgradeShip x1 via DT_Recipes_Upgrade_02"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "mat_copper x2 -> cmp_wire_coils x2 via DT_Recipes_Crafting -> cmp_wire_coils x230 -> UpgradeShip x1 via DT_Recipes_Upgrade_03",
					"steps": [
						"mat_copper x2 -> cmp_wire_coils x2 via DT_Recipes_Crafting",
						"cmp_wire_coils x230 -> UpgradeShip x1 via DT_Recipes_Upgrade_03"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "mat_copper x1 -> cmp_circuit_boards x1 via DT_Recipes_Refining -> cmp_circuit_boards x4 -> UpgradeShip x1 via DT_Recipes_Upgrade_01",
					"steps": [
						"mat_copper x1 -> cmp_circuit_boards x1 via DT_Recipes_Refining",
						"cmp_circuit_boards x4 -> UpgradeShip x1 via DT_Recipes_Upgrade_01"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "mat_copper x1 -> cmp_circuit_boards x1 via DT_Recipes_Refining -> cmp_circuit_boards x15 -> UpgradeShip x1 via DT_Recipes_Upgrade_02",
					"steps": [
						"mat_copper x1 -> cmp_circuit_boards x1 via DT_Recipes_Refining",
						"cmp_circuit_boards x15 -> UpgradeShip x1 via DT_Recipes_Upgrade_02"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "mat_copper x1 -> cmp_circuit_boards x1 via DT_Recipes_Refining -> cmp_circuit_boards x38 -> UpgradeShip x1 via DT_Recipes_Upgrade_03",
					"steps": [
						"mat_copper x1 -> cmp_circuit_boards x1 via DT_Recipes_Refining",
						"cmp_circuit_boards x38 -> UpgradeShip x1 via DT_Recipes_Upgrade_03"
					]
				}
			],
			"pickupResolved": true,
			"pickupBlueprintName": "BP_Floating_WorldItem_Copper",
			"pickupFailureReason": "",
			"itemData":
			{
				"itemId": "mat_copper",
				"displayName": "mat_copper",
				"category": "",
				"sourceTable": "/Game/UltimateSurvivalPack/Blueprints/Datatable/Inventory/DT_ItemData_StratoWard.DT_ItemData_StratoWard",
				"raw":
				{
					"name": "mat_copper",
					"description": "Hello world!",
					"maximum Stack": 64,
					"item Type": "Other",
					"icon": "/Script/Engine.Texture2D'/Game/StratoWard/UI/Icons/Icon_Copper.Icon_Copper'",
					"item Mesh": "/Script/Engine.StaticMesh'/Game/StratoWard/Mesh/Loot/ManMade/Foil_Package_Small/foil_wrapped_parcel_pillow_model/StaticMeshes/foil_wrapped_parcel_pillow_model.foil_wrapped_parcel_pillow_model'",
					"survival Properties":
					{
						"health to Add": 0,
						"hunger to Add": 0,
						"thirst to Add": 0,
						"cosume Sound": "/Script/Engine.SoundCue'/Game/UltimateSurvivalPack/Demo/Audio/SFX/CUE_EatSound.CUE_EatSound'",
						"effect Time": 0
					},
					"holdable Class": "None",
					"armor Properties":
					{
						"armor to Add": "Head",
						"armor Male Mesh": "None",
						"armor Female Mesh": "None",
						"armor Protection Percent": 0,
						"hide Mesh": [],
						"slots to Add": 0,
						"temperature to Add": 0
					},
					"building Data":
					{
						"build Type": "Building",
						"ghost Mesh": "None",
						"collision Transform":
						{
							"rotation":
							{
								"x": 0,
								"y": -0,
								"z": 0,
								"w": 1
							},
							"translation":
							{
								"x": 0,
								"y": 0,
								"z": 105
							},
							"scale3D":
							{
								"x": 100,
								"y": 100,
								"z": 100
							}
						},
						"final Building Class": "None",
						"health": 500,
						"repair Add Health": 25,
						"support Snapping": false
					},
					"sell Price": 0,
					"itemTypeTag":
					{
						"tagName": "Item.Category.Material"
					},
					"tier": 1
				}
			},
			"displayName": "mat_copper",
			"category": "",
			"balanceFlags": [
				"recipe_only_output"
			]
		},
		{
			"key": "item:mat_insulation",
			"itemId": "mat_insulation",
			"knownItemData": true,
			"naturalResource": false,
			"producedByRecipes": [
				"recipe:DT_Recipes_Refining:mat_insulation"
			],
			"consumedByRecipes": [
				"recipe:DT_Recipes_Refining:cmp_structural_panels"
			],
			"droppedByAi": [],
			"droppedByMinerals": [],
			"directProducerCount": 1,
			"directConsumerCount": 1,
			"aiDropSourceCount": 0,
			"mineralDropSourceCount": 0,
			"directSourceCount": 1,
			"directUseCount": 1,
			"directRecipeInputQuantity": 1,
			"upgradeDemandQuantity": 0,
			"sinkClassification": "not terminal",
			"requiredQuantityByGroup":
			{
				"refining": 1
			},
			"producedQuantityByGroup":
			{
				"refining": 2
			},
			"producedRecipeGroups": [
				"refining"
			],
			"consumedRecipeGroups": [
				"refining"
			],
			"downstreamChains": [
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_solar_panel",
					"summary": "mat_insulation x1 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x1 -> module_solar_panel x1 via DT_Recipes_Crafting",
					"steps": [
						"mat_insulation x1 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x1 -> module_solar_panel x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_blaster",
					"summary": "mat_insulation x1 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x1 -> module_turret_blaster x1 via DT_Recipes_Crafting",
					"steps": [
						"mat_insulation x1 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x1 -> module_turret_blaster x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_laser",
					"summary": "mat_insulation x1 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x1 -> module_turret_laser x1 via DT_Recipes_Crafting",
					"steps": [
						"mat_insulation x1 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x1 -> module_turret_laser x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_repair",
					"summary": "mat_insulation x1 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x1 -> module_turret_repair x1 via DT_Recipes_Crafting",
					"steps": [
						"mat_insulation x1 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x1 -> module_turret_repair x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_rocket",
					"summary": "mat_insulation x1 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x2 -> module_turret_rocket x1 via DT_Recipes_Crafting",
					"steps": [
						"mat_insulation x1 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x2 -> module_turret_rocket x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "mat_insulation x1 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x12 -> UpgradeShip x1 via DT_Recipes_Upgrade_01",
					"steps": [
						"mat_insulation x1 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x12 -> UpgradeShip x1 via DT_Recipes_Upgrade_01"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "mat_insulation x1 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x34 -> UpgradeShip x1 via DT_Recipes_Upgrade_02",
					"steps": [
						"mat_insulation x1 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x34 -> UpgradeShip x1 via DT_Recipes_Upgrade_02"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "mat_insulation x1 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x127 -> UpgradeShip x1 via DT_Recipes_Upgrade_03",
					"steps": [
						"mat_insulation x1 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x127 -> UpgradeShip x1 via DT_Recipes_Upgrade_03"
					]
				}
			],
			"pickupResolved": true,
			"pickupBlueprintName": "BP_Floating_WorldItem_Insulation",
			"pickupFailureReason": "",
			"itemData":
			{
				"itemId": "mat_insulation",
				"displayName": "mat_insulation",
				"category": "",
				"sourceTable": "/Game/UltimateSurvivalPack/Blueprints/Datatable/Inventory/DT_ItemData_StratoWard.DT_ItemData_StratoWard",
				"raw":
				{
					"name": "mat_insulation",
					"description": "Hello world!",
					"maximum Stack": 64,
					"item Type": "Other",
					"icon": "/Script/Engine.Texture2D'/Game/StratoWard/UI/Icons/Icon_Insulation.Icon_Insulation'",
					"item Mesh": "/Script/Engine.StaticMesh'/Game/StratoWard/Mesh/Loot/ManMade/Foil_Package_Med/foil_wrapped_parcel_Med_model/StaticMeshes/foil_wrapped_parcel_Med_model.foil_wrapped_parcel_Med_model'",
					"survival Properties":
					{
						"health to Add": 0,
						"hunger to Add": 0,
						"thirst to Add": 0,
						"cosume Sound": "/Script/Engine.SoundCue'/Game/UltimateSurvivalPack/Demo/Audio/SFX/CUE_EatSound.CUE_EatSound'",
						"effect Time": 0
					},
					"holdable Class": "None",
					"armor Properties":
					{
						"armor to Add": "Head",
						"armor Male Mesh": "None",
						"armor Female Mesh": "None",
						"armor Protection Percent": 0,
						"hide Mesh": [],
						"slots to Add": 0,
						"temperature to Add": 0
					},
					"building Data":
					{
						"build Type": "Building",
						"ghost Mesh": "None",
						"collision Transform":
						{
							"rotation":
							{
								"x": 0,
								"y": -0,
								"z": 0,
								"w": 1
							},
							"translation":
							{
								"x": 0,
								"y": 0,
								"z": 105
							},
							"scale3D":
							{
								"x": 100,
								"y": 100,
								"z": 100
							}
						},
						"final Building Class": "None",
						"health": 500,
						"repair Add Health": 25,
						"support Snapping": false
					},
					"sell Price": 0,
					"itemTypeTag":
					{
						"tagName": "Item.Category.Material"
					},
					"tier": 1
				}
			},
			"displayName": "mat_insulation",
			"category": "",
			"balanceFlags": [
				"recipe_only_output"
			]
		},
		{
			"key": "item:mat_plastic",
			"itemId": "mat_plastic",
			"knownItemData": true,
			"naturalResource": false,
			"producedByRecipes": [
				"recipe:DT_Recipes_Refining:mat_plastic"
			],
			"consumedByRecipes": [
				"recipe:DT_Recipes_Crafting:con_water_pack",
				"recipe:DT_Recipes_Refining:cmp_circuit_boards"
			],
			"droppedByAi": [],
			"droppedByMinerals": [],
			"directProducerCount": 1,
			"directConsumerCount": 2,
			"aiDropSourceCount": 0,
			"mineralDropSourceCount": 0,
			"directSourceCount": 1,
			"directUseCount": 2,
			"directRecipeInputQuantity": 3,
			"upgradeDemandQuantity": 0,
			"sinkClassification": "not terminal",
			"requiredQuantityByGroup":
			{
				"crafting": 1,
				"refining": 2
			},
			"producedQuantityByGroup":
			{
				"refining": 3
			},
			"producedRecipeGroups": [
				"refining"
			],
			"consumedRecipeGroups": [
				"crafting",
				"refining"
			],
			"downstreamChains": [
				{
					"terminalType": "terminal consumable",
					"terminalItemId": "con_water_pack",
					"summary": "mat_plastic x1 -> con_water_pack x1 via DT_Recipes_Crafting",
					"steps": [
						"mat_plastic x1 -> con_water_pack x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "mat_plastic x2 -> cmp_circuit_boards x1 via DT_Recipes_Refining -> cmp_circuit_boards x4 -> UpgradeShip x1 via DT_Recipes_Upgrade_01",
					"steps": [
						"mat_plastic x2 -> cmp_circuit_boards x1 via DT_Recipes_Refining",
						"cmp_circuit_boards x4 -> UpgradeShip x1 via DT_Recipes_Upgrade_01"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "mat_plastic x2 -> cmp_circuit_boards x1 via DT_Recipes_Refining -> cmp_circuit_boards x15 -> UpgradeShip x1 via DT_Recipes_Upgrade_02",
					"steps": [
						"mat_plastic x2 -> cmp_circuit_boards x1 via DT_Recipes_Refining",
						"cmp_circuit_boards x15 -> UpgradeShip x1 via DT_Recipes_Upgrade_02"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "mat_plastic x2 -> cmp_circuit_boards x1 via DT_Recipes_Refining -> cmp_circuit_boards x38 -> UpgradeShip x1 via DT_Recipes_Upgrade_03",
					"steps": [
						"mat_plastic x2 -> cmp_circuit_boards x1 via DT_Recipes_Refining",
						"cmp_circuit_boards x38 -> UpgradeShip x1 via DT_Recipes_Upgrade_03"
					]
				}
			],
			"pickupResolved": true,
			"pickupBlueprintName": "BP_Floating_WorldItem_Plastic",
			"pickupFailureReason": "",
			"itemData":
			{
				"itemId": "mat_plastic",
				"displayName": "mat_plastic",
				"category": "",
				"sourceTable": "/Game/UltimateSurvivalPack/Blueprints/Datatable/Inventory/DT_ItemData_StratoWard.DT_ItemData_StratoWard",
				"raw":
				{
					"name": "mat_plastic",
					"description": "Hello world!",
					"maximum Stack": 5,
					"item Type": "Other",
					"icon": "/Script/Engine.Texture2D'/Game/StratoWard/UI/Icons/Icon_Plastic.Icon_Plastic'",
					"item Mesh": "/Script/Engine.StaticMesh'/Game/StratoWard/Mesh/Loot/ManMade/HardCase_Crate_02/cargo__hardcase_model/StaticMeshes/cargo__hardcase_model.cargo__hardcase_model'",
					"survival Properties":
					{
						"health to Add": 0,
						"hunger to Add": 0,
						"thirst to Add": 0,
						"cosume Sound": "/Script/Engine.SoundCue'/Game/UltimateSurvivalPack/Demo/Audio/SFX/CUE_EatSound.CUE_EatSound'",
						"effect Time": 0
					},
					"holdable Class": "None",
					"armor Properties":
					{
						"armor to Add": "Head",
						"armor Male Mesh": "None",
						"armor Female Mesh": "None",
						"armor Protection Percent": 0,
						"hide Mesh": [],
						"slots to Add": 0,
						"temperature to Add": 0
					},
					"building Data":
					{
						"build Type": "Building",
						"ghost Mesh": "None",
						"collision Transform":
						{
							"rotation":
							{
								"x": 0,
								"y": -0,
								"z": 0,
								"w": 1
							},
							"translation":
							{
								"x": 0,
								"y": 0,
								"z": 105
							},
							"scale3D":
							{
								"x": 100,
								"y": 100,
								"z": 100
							}
						},
						"final Building Class": "None",
						"health": 500,
						"repair Add Health": 25,
						"support Snapping": false
					},
					"sell Price": 0,
					"itemTypeTag":
					{
						"tagName": "Item.Category.Material"
					},
					"tier": 1
				}
			},
			"displayName": "mat_plastic",
			"category": "",
			"balanceFlags": [
				"recipe_only_output"
			]
		},
		{
			"key": "item:mat_polymers",
			"itemId": "mat_polymers",
			"knownItemData": true,
			"naturalResource": false,
			"producedByRecipes": [
				"recipe:DT_Recipes_Refining:mat_polymers"
			],
			"consumedByRecipes": [
				"recipe:DT_Recipes_Crafting:item_scanner",
				"recipe:DT_Recipes_Refining:cmp_thruster_parts"
			],
			"droppedByAi": [],
			"droppedByMinerals": [],
			"directProducerCount": 1,
			"directConsumerCount": 2,
			"aiDropSourceCount": 0,
			"mineralDropSourceCount": 0,
			"directSourceCount": 1,
			"directUseCount": 2,
			"directRecipeInputQuantity": 4,
			"upgradeDemandQuantity": 0,
			"sinkClassification": "not terminal",
			"requiredQuantityByGroup":
			{
				"crafting": 2,
				"refining": 2
			},
			"producedQuantityByGroup":
			{
				"refining": 2
			},
			"producedRecipeGroups": [
				"refining"
			],
			"consumedRecipeGroups": [
				"crafting",
				"refining"
			],
			"downstreamChains": [
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_rocket",
					"summary": "mat_polymers x2 -> cmp_thruster_parts x1 via DT_Recipes_Refining -> cmp_thruster_parts x1 -> module_turret_rocket x1 via DT_Recipes_Crafting",
					"steps": [
						"mat_polymers x2 -> cmp_thruster_parts x1 via DT_Recipes_Refining",
						"cmp_thruster_parts x1 -> module_turret_rocket x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal weapon",
					"terminalItemId": "weapon_rocket",
					"summary": "mat_polymers x2 -> cmp_thruster_parts x1 via DT_Recipes_Refining -> cmp_thruster_parts x1 -> weapon_rocket x1 via DT_Recipes_Crafting",
					"steps": [
						"mat_polymers x2 -> cmp_thruster_parts x1 via DT_Recipes_Refining",
						"cmp_thruster_parts x1 -> weapon_rocket x1 via DT_Recipes_Crafting"
					]
				}
			],
			"pickupResolved": true,
			"pickupBlueprintName": "BP_Floating_WorldItem_Polymers",
			"pickupFailureReason": "",
			"itemData":
			{
				"itemId": "mat_polymers",
				"displayName": "mat_polymers",
				"category": "",
				"sourceTable": "/Game/UltimateSurvivalPack/Blueprints/Datatable/Inventory/DT_ItemData_StratoWard.DT_ItemData_StratoWard",
				"raw":
				{
					"name": "mat_polymers",
					"description": "Hello world!",
					"maximum Stack": 64,
					"item Type": "Other",
					"icon": "/Script/Engine.Texture2D'/Game/StratoWard/UI/Icons/Icon_Polymer.Icon_Polymer'",
					"item Mesh": "/Script/Engine.StaticMesh'/Game/StratoWard/Mesh/Loot/ManMade/Foil_Package_Small/foil_wrapped_parcel_pillow_model/StaticMeshes/foil_wrapped_parcel_pillow_model1.foil_wrapped_parcel_pillow_model1'",
					"survival Properties":
					{
						"health to Add": 0,
						"hunger to Add": 0,
						"thirst to Add": 0,
						"cosume Sound": "/Script/Engine.SoundCue'/Game/UltimateSurvivalPack/Demo/Audio/SFX/CUE_EatSound.CUE_EatSound'",
						"effect Time": 0
					},
					"holdable Class": "None",
					"armor Properties":
					{
						"armor to Add": "Head",
						"armor Male Mesh": "None",
						"armor Female Mesh": "None",
						"armor Protection Percent": 0,
						"hide Mesh": [],
						"slots to Add": 0,
						"temperature to Add": 0
					},
					"building Data":
					{
						"build Type": "Building",
						"ghost Mesh": "None",
						"collision Transform":
						{
							"rotation":
							{
								"x": 0,
								"y": -0,
								"z": 0,
								"w": 1
							},
							"translation":
							{
								"x": 0,
								"y": 0,
								"z": 105
							},
							"scale3D":
							{
								"x": 100,
								"y": 100,
								"z": 100
							}
						},
						"final Building Class": "None",
						"health": 500,
						"repair Add Health": 25,
						"support Snapping": false
					},
					"sell Price": 0,
					"itemTypeTag":
					{
						"tagName": "Item.Category.Material"
					},
					"tier": 1
				}
			},
			"displayName": "mat_polymers",
			"category": "",
			"balanceFlags": [
				"recipe_only_output"
			]
		},
		{
			"key": "item:mat_rare_earth",
			"itemId": "mat_rare_earth",
			"knownItemData": true,
			"naturalResource": true,
			"producedByRecipes": [
				"recipe:DT_Recipes_Refining:mat_rare_earth"
			],
			"consumedByRecipes": [
				"recipe:DT_Recipes_Crafting:module_turret_laser",
				"recipe:DT_Recipes_Crafting:weapon_laser",
				"recipe:DT_Recipes_Refining:cmp_microchips",
				"recipe:DT_Recipes_Refining:cmp_servo_motors"
			],
			"droppedByAi": [],
			"droppedByMinerals": [],
			"directProducerCount": 1,
			"directConsumerCount": 4,
			"aiDropSourceCount": 0,
			"mineralDropSourceCount": 0,
			"directSourceCount": 1,
			"directUseCount": 4,
			"directRecipeInputQuantity": 5,
			"upgradeDemandQuantity": 0,
			"sinkClassification": "not terminal",
			"requiredQuantityByGroup":
			{
				"crafting": 3,
				"refining": 2
			},
			"producedQuantityByGroup":
			{
				"refining": 1
			},
			"producedRecipeGroups": [
				"refining"
			],
			"consumedRecipeGroups": [
				"crafting",
				"refining"
			],
			"downstreamChains": [
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_laser",
					"summary": "mat_rare_earth x1 -> module_turret_laser x1 via DT_Recipes_Crafting",
					"steps": [
						"mat_rare_earth x1 -> module_turret_laser x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal weapon",
					"terminalItemId": "weapon_laser",
					"summary": "mat_rare_earth x2 -> weapon_laser x1 via DT_Recipes_Crafting",
					"steps": [
						"mat_rare_earth x2 -> weapon_laser x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_laser",
					"summary": "mat_rare_earth x1 -> cmp_microchips x1 via DT_Recipes_Refining -> cmp_microchips x2 -> module_turret_laser x1 via DT_Recipes_Crafting",
					"steps": [
						"mat_rare_earth x1 -> cmp_microchips x1 via DT_Recipes_Refining",
						"cmp_microchips x2 -> module_turret_laser x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal weapon",
					"terminalItemId": "weapon_laser",
					"summary": "mat_rare_earth x1 -> cmp_microchips x1 via DT_Recipes_Refining -> cmp_microchips x2 -> weapon_laser x1 via DT_Recipes_Crafting",
					"steps": [
						"mat_rare_earth x1 -> cmp_microchips x1 via DT_Recipes_Refining",
						"cmp_microchips x2 -> weapon_laser x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_repair",
					"summary": "mat_rare_earth x1 -> cmp_servo_motors x1 via DT_Recipes_Refining -> cmp_servo_motors x1 -> module_turret_repair x1 via DT_Recipes_Crafting",
					"steps": [
						"mat_rare_earth x1 -> cmp_servo_motors x1 via DT_Recipes_Refining",
						"cmp_servo_motors x1 -> module_turret_repair x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "mat_rare_earth x1 -> cmp_servo_motors x1 via DT_Recipes_Refining -> cmp_servo_motors x8 -> UpgradeShip x1 via DT_Recipes_Upgrade_01",
					"steps": [
						"mat_rare_earth x1 -> cmp_servo_motors x1 via DT_Recipes_Refining",
						"cmp_servo_motors x8 -> UpgradeShip x1 via DT_Recipes_Upgrade_01"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "mat_rare_earth x1 -> cmp_servo_motors x1 via DT_Recipes_Refining -> cmp_servo_motors x25 -> UpgradeShip x1 via DT_Recipes_Upgrade_02",
					"steps": [
						"mat_rare_earth x1 -> cmp_servo_motors x1 via DT_Recipes_Refining",
						"cmp_servo_motors x25 -> UpgradeShip x1 via DT_Recipes_Upgrade_02"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "mat_rare_earth x1 -> cmp_servo_motors x1 via DT_Recipes_Refining -> cmp_servo_motors x62 -> UpgradeShip x1 via DT_Recipes_Upgrade_03",
					"steps": [
						"mat_rare_earth x1 -> cmp_servo_motors x1 via DT_Recipes_Refining",
						"cmp_servo_motors x62 -> UpgradeShip x1 via DT_Recipes_Upgrade_03"
					]
				}
			],
			"pickupResolved": true,
			"pickupBlueprintName": "BP_Floating_WorldItem_ItemRareEarth",
			"pickupFailureReason": "",
			"itemData":
			{
				"itemId": "mat_rare_earth",
				"displayName": "mat_rare_earth",
				"category": "",
				"sourceTable": "/Game/UltimateSurvivalPack/Blueprints/Datatable/Inventory/DT_ItemData_StratoWard.DT_ItemData_StratoWard",
				"raw":
				{
					"name": "mat_rare_earth",
					"description": "Hello world!",
					"maximum Stack": 64,
					"item Type": "Other",
					"icon": "/Script/Engine.Texture2D'/Game/StratoWard/UI/Icons/Icon_RareEarth.Icon_RareEarth'",
					"item Mesh": "/Script/Engine.StaticMesh'/Game/StratoWard/Mesh/Loot/ManMade/Foil_Package_Small/foil_wrapped_parcel_pillow_model/StaticMeshes/foil_wrapped_parcel_pillow_model.foil_wrapped_parcel_pillow_model'",
					"survival Properties":
					{
						"health to Add": 0,
						"hunger to Add": 0,
						"thirst to Add": 0,
						"cosume Sound": "/Script/Engine.SoundCue'/Game/UltimateSurvivalPack/Demo/Audio/SFX/CUE_EatSound.CUE_EatSound'",
						"effect Time": 0
					},
					"holdable Class": "None",
					"armor Properties":
					{
						"armor to Add": "Head",
						"armor Male Mesh": "None",
						"armor Female Mesh": "None",
						"armor Protection Percent": 0,
						"hide Mesh": [],
						"slots to Add": 0,
						"temperature to Add": 0
					},
					"building Data":
					{
						"build Type": "Building",
						"ghost Mesh": "None",
						"collision Transform":
						{
							"rotation":
							{
								"x": 0,
								"y": -0,
								"z": 0,
								"w": 1
							},
							"translation":
							{
								"x": 0,
								"y": 0,
								"z": 105
							},
							"scale3D":
							{
								"x": 100,
								"y": 100,
								"z": 100
							}
						},
						"final Building Class": "None",
						"health": 500,
						"repair Add Health": 25,
						"support Snapping": false
					},
					"sell Price": 0,
					"itemTypeTag":
					{
						"tagName": "Item.Category.Material"
					},
					"tier": 1
				}
			},
			"displayName": "mat_rare_earth",
			"category": "",
			"balanceFlags": [
				"recipe_only_output"
			]
		},
		{
			"key": "item:mat_silicon",
			"itemId": "mat_silicon",
			"knownItemData": true,
			"naturalResource": true,
			"producedByRecipes": [
				"recipe:DT_Recipes_Refining:mat_silicon"
			],
			"consumedByRecipes": [
				"recipe:DT_Recipes_Crafting:module_solar_panel",
				"recipe:DT_Recipes_Refining:cmp_circuit_boards",
				"recipe:DT_Recipes_Refining:cmp_microchips"
			],
			"droppedByAi": [],
			"droppedByMinerals": [],
			"directProducerCount": 1,
			"directConsumerCount": 3,
			"aiDropSourceCount": 0,
			"mineralDropSourceCount": 0,
			"directSourceCount": 1,
			"directUseCount": 3,
			"directRecipeInputQuantity": 5,
			"upgradeDemandQuantity": 0,
			"sinkClassification": "not terminal",
			"requiredQuantityByGroup":
			{
				"crafting": 2,
				"refining": 3
			},
			"producedQuantityByGroup":
			{
				"refining": 2
			},
			"producedRecipeGroups": [
				"refining"
			],
			"consumedRecipeGroups": [
				"crafting",
				"refining"
			],
			"downstreamChains": [
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_solar_panel",
					"summary": "mat_silicon x2 -> module_solar_panel x1 via DT_Recipes_Crafting",
					"steps": [
						"mat_silicon x2 -> module_solar_panel x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "mat_silicon x1 -> cmp_circuit_boards x1 via DT_Recipes_Refining -> cmp_circuit_boards x4 -> UpgradeShip x1 via DT_Recipes_Upgrade_01",
					"steps": [
						"mat_silicon x1 -> cmp_circuit_boards x1 via DT_Recipes_Refining",
						"cmp_circuit_boards x4 -> UpgradeShip x1 via DT_Recipes_Upgrade_01"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "mat_silicon x1 -> cmp_circuit_boards x1 via DT_Recipes_Refining -> cmp_circuit_boards x15 -> UpgradeShip x1 via DT_Recipes_Upgrade_02",
					"steps": [
						"mat_silicon x1 -> cmp_circuit_boards x1 via DT_Recipes_Refining",
						"cmp_circuit_boards x15 -> UpgradeShip x1 via DT_Recipes_Upgrade_02"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "mat_silicon x1 -> cmp_circuit_boards x1 via DT_Recipes_Refining -> cmp_circuit_boards x38 -> UpgradeShip x1 via DT_Recipes_Upgrade_03",
					"steps": [
						"mat_silicon x1 -> cmp_circuit_boards x1 via DT_Recipes_Refining",
						"cmp_circuit_boards x38 -> UpgradeShip x1 via DT_Recipes_Upgrade_03"
					]
				},
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_laser",
					"summary": "mat_silicon x2 -> cmp_microchips x1 via DT_Recipes_Refining -> cmp_microchips x2 -> module_turret_laser x1 via DT_Recipes_Crafting",
					"steps": [
						"mat_silicon x2 -> cmp_microchips x1 via DT_Recipes_Refining",
						"cmp_microchips x2 -> module_turret_laser x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal weapon",
					"terminalItemId": "weapon_laser",
					"summary": "mat_silicon x2 -> cmp_microchips x1 via DT_Recipes_Refining -> cmp_microchips x2 -> weapon_laser x1 via DT_Recipes_Crafting",
					"steps": [
						"mat_silicon x2 -> cmp_microchips x1 via DT_Recipes_Refining",
						"cmp_microchips x2 -> weapon_laser x1 via DT_Recipes_Crafting"
					]
				}
			],
			"pickupResolved": true,
			"pickupBlueprintName": "BP_Floating_WorldItem_Silicon",
			"pickupFailureReason": "",
			"itemData":
			{
				"itemId": "mat_silicon",
				"displayName": "mat_silicon",
				"category": "",
				"sourceTable": "/Game/UltimateSurvivalPack/Blueprints/Datatable/Inventory/DT_ItemData_StratoWard.DT_ItemData_StratoWard",
				"raw":
				{
					"name": "mat_silicon",
					"description": "Hello world!",
					"maximum Stack": 64,
					"item Type": "Other",
					"icon": "/Script/Engine.Texture2D'/Game/StratoWard/UI/Icons/Icon_Silicon.Icon_Silicon'",
					"item Mesh": "/Script/Engine.StaticMesh'/Game/StratoWard/Mesh/Loot/ManMade/Foil_Package_Small/foil_wrapped_parcel_pillow_model/StaticMeshes/foil_wrapped_parcel_pillow_model1.foil_wrapped_parcel_pillow_model1'",
					"survival Properties":
					{
						"health to Add": 0,
						"hunger to Add": 0,
						"thirst to Add": 0,
						"cosume Sound": "/Script/Engine.SoundCue'/Game/UltimateSurvivalPack/Demo/Audio/SFX/CUE_EatSound.CUE_EatSound'",
						"effect Time": 0
					},
					"holdable Class": "None",
					"armor Properties":
					{
						"armor to Add": "Head",
						"armor Male Mesh": "None",
						"armor Female Mesh": "None",
						"armor Protection Percent": 0,
						"hide Mesh": [],
						"slots to Add": 0,
						"temperature to Add": 0
					},
					"building Data":
					{
						"build Type": "Building",
						"ghost Mesh": "None",
						"collision Transform":
						{
							"rotation":
							{
								"x": 0,
								"y": -0,
								"z": 0,
								"w": 1
							},
							"translation":
							{
								"x": 0,
								"y": 0,
								"z": 105
							},
							"scale3D":
							{
								"x": 100,
								"y": 100,
								"z": 100
							}
						},
						"final Building Class": "None",
						"health": 500,
						"repair Add Health": 25,
						"support Snapping": false
					},
					"sell Price": 0,
					"itemTypeTag":
					{
						"tagName": "Item.Category.Material"
					},
					"tier": 1
				}
			},
			"displayName": "mat_silicon",
			"category": "",
			"balanceFlags": [
				"recipe_only_output"
			]
		},
		{
			"key": "item:mat_stainless_steel",
			"itemId": "mat_stainless_steel",
			"knownItemData": true,
			"naturalResource": false,
			"producedByRecipes": [
				"recipe:DT_Recipes_Refining:mat_stainless_steel"
			],
			"consumedByRecipes": [
				"recipe:DT_Recipes_Crafting:tool_mining",
				"recipe:DT_Recipes_Crafting:weapon_blaster",
				"recipe:DT_Recipes_Refining:cmp_servo_motors",
				"recipe:DT_Recipes_Refining:cmp_structural_panels"
			],
			"droppedByAi": [],
			"droppedByMinerals": [],
			"directProducerCount": 1,
			"directConsumerCount": 4,
			"aiDropSourceCount": 0,
			"mineralDropSourceCount": 0,
			"directSourceCount": 1,
			"directUseCount": 4,
			"directRecipeInputQuantity": 6,
			"upgradeDemandQuantity": 0,
			"sinkClassification": "not terminal",
			"requiredQuantityByGroup":
			{
				"crafting": 3,
				"refining": 3
			},
			"producedQuantityByGroup":
			{
				"refining": 2
			},
			"producedRecipeGroups": [
				"refining"
			],
			"consumedRecipeGroups": [
				"crafting",
				"refining"
			],
			"downstreamChains": [
				{
					"terminalType": "terminal weapon",
					"terminalItemId": "weapon_blaster",
					"summary": "mat_stainless_steel x1 -> weapon_blaster x1 via DT_Recipes_Crafting",
					"steps": [
						"mat_stainless_steel x1 -> weapon_blaster x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_repair",
					"summary": "mat_stainless_steel x1 -> cmp_servo_motors x1 via DT_Recipes_Refining -> cmp_servo_motors x1 -> module_turret_repair x1 via DT_Recipes_Crafting",
					"steps": [
						"mat_stainless_steel x1 -> cmp_servo_motors x1 via DT_Recipes_Refining",
						"cmp_servo_motors x1 -> module_turret_repair x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "mat_stainless_steel x1 -> cmp_servo_motors x1 via DT_Recipes_Refining -> cmp_servo_motors x8 -> UpgradeShip x1 via DT_Recipes_Upgrade_01",
					"steps": [
						"mat_stainless_steel x1 -> cmp_servo_motors x1 via DT_Recipes_Refining",
						"cmp_servo_motors x8 -> UpgradeShip x1 via DT_Recipes_Upgrade_01"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "mat_stainless_steel x1 -> cmp_servo_motors x1 via DT_Recipes_Refining -> cmp_servo_motors x25 -> UpgradeShip x1 via DT_Recipes_Upgrade_02",
					"steps": [
						"mat_stainless_steel x1 -> cmp_servo_motors x1 via DT_Recipes_Refining",
						"cmp_servo_motors x25 -> UpgradeShip x1 via DT_Recipes_Upgrade_02"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "mat_stainless_steel x1 -> cmp_servo_motors x1 via DT_Recipes_Refining -> cmp_servo_motors x62 -> UpgradeShip x1 via DT_Recipes_Upgrade_03",
					"steps": [
						"mat_stainless_steel x1 -> cmp_servo_motors x1 via DT_Recipes_Refining",
						"cmp_servo_motors x62 -> UpgradeShip x1 via DT_Recipes_Upgrade_03"
					]
				},
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_solar_panel",
					"summary": "mat_stainless_steel x2 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x1 -> module_solar_panel x1 via DT_Recipes_Crafting",
					"steps": [
						"mat_stainless_steel x2 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x1 -> module_solar_panel x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_blaster",
					"summary": "mat_stainless_steel x2 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x1 -> module_turret_blaster x1 via DT_Recipes_Crafting",
					"steps": [
						"mat_stainless_steel x2 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x1 -> module_turret_blaster x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_laser",
					"summary": "mat_stainless_steel x2 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x1 -> module_turret_laser x1 via DT_Recipes_Crafting",
					"steps": [
						"mat_stainless_steel x2 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x1 -> module_turret_laser x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_repair",
					"summary": "mat_stainless_steel x2 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x1 -> module_turret_repair x1 via DT_Recipes_Crafting",
					"steps": [
						"mat_stainless_steel x2 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x1 -> module_turret_repair x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_rocket",
					"summary": "mat_stainless_steel x2 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x2 -> module_turret_rocket x1 via DT_Recipes_Crafting",
					"steps": [
						"mat_stainless_steel x2 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x2 -> module_turret_rocket x1 via DT_Recipes_Crafting"
					]
				}
			],
			"pickupResolved": true,
			"pickupBlueprintName": "BP_Floating_WorldItem_StainlessSteel",
			"pickupFailureReason": "",
			"itemData":
			{
				"itemId": "mat_stainless_steel",
				"displayName": "mat_stainless_steel",
				"category": "",
				"sourceTable": "/Game/UltimateSurvivalPack/Blueprints/Datatable/Inventory/DT_ItemData_StratoWard.DT_ItemData_StratoWard",
				"raw":
				{
					"name": "mat_stainless_steel",
					"description": "Hello world!",
					"maximum Stack": 64,
					"item Type": "Other",
					"icon": "/Script/Engine.Texture2D'/Game/StratoWard/UI/Icons/Icon_Steel.Icon_Steel'",
					"item Mesh": "/Script/Engine.StaticMesh'/Game/StratoWard/Mesh/Loot/ManMade/HardCase_Crate_02/cargo__hardcase_model/StaticMeshes/cargo__hardcase_model.cargo__hardcase_model'",
					"survival Properties":
					{
						"health to Add": 0,
						"hunger to Add": 0,
						"thirst to Add": 0,
						"cosume Sound": "/Script/Engine.SoundCue'/Game/UltimateSurvivalPack/Demo/Audio/SFX/CUE_EatSound.CUE_EatSound'",
						"effect Time": 0
					},
					"holdable Class": "None",
					"armor Properties":
					{
						"armor to Add": "Head",
						"armor Male Mesh": "None",
						"armor Female Mesh": "None",
						"armor Protection Percent": 0,
						"hide Mesh": [],
						"slots to Add": 0,
						"temperature to Add": 0
					},
					"building Data":
					{
						"build Type": "Building",
						"ghost Mesh": "None",
						"collision Transform":
						{
							"rotation":
							{
								"x": 0,
								"y": -0,
								"z": 0,
								"w": 1
							},
							"translation":
							{
								"x": 0,
								"y": 0,
								"z": 105
							},
							"scale3D":
							{
								"x": 100,
								"y": 100,
								"z": 100
							}
						},
						"final Building Class": "None",
						"health": 500,
						"repair Add Health": 25,
						"support Snapping": false
					},
					"sell Price": 0,
					"itemTypeTag":
					{
						"tagName": "Item.Category.Material"
					},
					"tier": 1
				}
			},
			"displayName": "mat_stainless_steel",
			"category": "",
			"balanceFlags": [
				"recipe_only_output"
			]
		},
		{
			"key": "item:module_solar_panel",
			"itemId": "module_solar_panel",
			"knownItemData": true,
			"naturalResource": false,
			"producedByRecipes": [
				"recipe:DT_Recipes_Crafting:module_solar_panel"
			],
			"consumedByRecipes": [],
			"droppedByAi": [],
			"droppedByMinerals": [],
			"directProducerCount": 1,
			"directConsumerCount": 0,
			"aiDropSourceCount": 0,
			"mineralDropSourceCount": 0,
			"directSourceCount": 1,
			"directUseCount": 0,
			"directRecipeInputQuantity": 0,
			"upgradeDemandQuantity": 0,
			"sinkClassification": "terminal module",
			"requiredQuantityByGroup":
			{
			},
			"producedQuantityByGroup":
			{
				"crafting": 1
			},
			"producedRecipeGroups": [
				"crafting"
			],
			"consumedRecipeGroups": [],
			"downstreamChains": [],
			"pickupResolved": true,
			"pickupBlueprintName": "BP_Floating_WorldItem_SolarPanelModule",
			"pickupFailureReason": "",
			"itemData":
			{
				"itemId": "module_solar_panel",
				"displayName": "module_solar_panel",
				"category": "",
				"sourceTable": "/Game/UltimateSurvivalPack/Blueprints/Datatable/Inventory/DT_ItemData_StratoWard.DT_ItemData_StratoWard",
				"raw":
				{
					"name": "module_solar_panel",
					"description": "For base ship energy",
					"maximum Stack": 1,
					"item Type": "Other",
					"icon": "/Script/Engine.Texture2D'/Game/StratoWard/UI/Icons/Icon_SolarPanel.Icon_SolarPanel'",
					"item Mesh": "/Script/Engine.StaticMesh'/Game/StratoWard/Mesh/Loot/ManMade/Cargo_Large/space_cargo_large_model/StaticMeshes/space_cargo_large_model1.space_cargo_large_model1'",
					"survival Properties":
					{
						"health to Add": 0,
						"hunger to Add": 0,
						"thirst to Add": 0,
						"cosume Sound": "/Script/Engine.SoundCue'/Game/UltimateSurvivalPack/Demo/Audio/SFX/CUE_EatSound.CUE_EatSound'",
						"effect Time": 0
					},
					"holdable Class": "/Script/Engine.BlueprintGeneratedClass'/Game/UltimateSurvivalPack/Blueprints/Holdable/HoldableActors/BP_Holdable_Building.BP_Holdable_Building_C'",
					"armor Properties":
					{
						"armor to Add": "Head",
						"armor Male Mesh": "None",
						"armor Female Mesh": "None",
						"armor Protection Percent": 0,
						"hide Mesh": [],
						"slots to Add": 0,
						"temperature to Add": 0
					},
					"building Data":
					{
						"build Type": "Building",
						"ghost Mesh": "/Script/Engine.BlueprintGeneratedClass'/Game/UltimateSurvivalPack/Blueprints/Buildings/Ghost/BP_Ghost_SolarPanel.BP_Ghost_SolarPanel_C'",
						"collision Transform":
						{
							"rotation":
							{
								"x": 0,
								"y": -0,
								"z": 0,
								"w": 1
							},
							"translation":
							{
								"x": 0,
								"y": 0,
								"z": 105
							},
							"scale3D":
							{
								"x": 100,
								"y": 100,
								"z": 100
							}
						},
						"final Building Class": "/Script/Engine.BlueprintGeneratedClass'/Game/CIWSTurrets/Blueprints/BP_SolarPanel.BP_SolarPanel_C'",
						"health": 500,
						"repair Add Health": 25,
						"support Snapping": true
					},
					"sell Price": 0,
					"itemTypeTag":
					{
						"tagName": "Item.Category.FinalItem"
					},
					"tier": 3
				}
			},
			"displayName": "module_solar_panel",
			"category": "",
			"balanceFlags": [
				"recipe_only_output"
			]
		},
		{
			"key": "item:module_turret_blaster",
			"itemId": "module_turret_blaster",
			"knownItemData": true,
			"naturalResource": false,
			"producedByRecipes": [
				"recipe:DT_Recipes_Crafting:module_turret_blaster"
			],
			"consumedByRecipes": [],
			"droppedByAi": [],
			"droppedByMinerals": [],
			"directProducerCount": 1,
			"directConsumerCount": 0,
			"aiDropSourceCount": 0,
			"mineralDropSourceCount": 0,
			"directSourceCount": 1,
			"directUseCount": 0,
			"directRecipeInputQuantity": 0,
			"upgradeDemandQuantity": 0,
			"sinkClassification": "terminal module",
			"requiredQuantityByGroup":
			{
			},
			"producedQuantityByGroup":
			{
				"crafting": 1
			},
			"producedRecipeGroups": [
				"crafting"
			],
			"consumedRecipeGroups": [],
			"downstreamChains": [],
			"pickupResolved": false,
			"pickupBlueprintName": "",
			"pickupFailureReason": "module_turret_blaster: no pickup BP match",
			"itemData":
			{
				"itemId": "module_turret_blaster",
				"displayName": "module_turret_blaster",
				"category": "",
				"sourceTable": "/Game/UltimateSurvivalPack/Blueprints/Datatable/Inventory/DT_ItemData_StratoWard.DT_ItemData_StratoWard",
				"raw":
				{
					"name": "module_turret_blaster",
					"description": "Place this to defend your ship",
					"maximum Stack": 1,
					"item Type": "Other",
					"icon": "/Script/Engine.Texture2D'/Game/StratoWard/UI/Icons/Icon_Turret_Blaster.Icon_Turret_Blaster'",
					"item Mesh": "/Script/Engine.StaticMesh'/Game/StratoWard/Mesh/Loot/ManMade/Cargo_Large/space_cargo_large_model/StaticMeshes/space_cargo_large_model.space_cargo_large_model'",
					"survival Properties":
					{
						"health to Add": 0,
						"hunger to Add": 0,
						"thirst to Add": 0,
						"cosume Sound": "/Script/Engine.SoundCue'/Game/UltimateSurvivalPack/Demo/Audio/SFX/CUE_EatSound.CUE_EatSound'",
						"effect Time": 0
					},
					"holdable Class": "/Script/Engine.BlueprintGeneratedClass'/Game/UltimateSurvivalPack/Blueprints/Holdable/HoldableActors/BP_Holdable_Building.BP_Holdable_Building_C'",
					"armor Properties":
					{
						"armor to Add": "Head",
						"armor Male Mesh": "None",
						"armor Female Mesh": "None",
						"armor Protection Percent": 0,
						"hide Mesh": [],
						"slots to Add": 0,
						"temperature to Add": 0
					},
					"building Data":
					{
						"build Type": "Building",
						"ghost Mesh": "/Script/Engine.BlueprintGeneratedClass'/Game/UltimateSurvivalPack/Blueprints/Buildings/Ghost/BP_Ghost_GatlinTurret.BP_Ghost_GatlinTurret_C'",
						"collision Transform":
						{
							"rotation":
							{
								"x": 0,
								"y": -0,
								"z": 0,
								"w": 1
							},
							"translation":
							{
								"x": 0,
								"y": 0,
								"z": 105
							},
							"scale3D":
							{
								"x": 100,
								"y": 100,
								"z": 100
							}
						},
						"final Building Class": "/Script/Engine.BlueprintGeneratedClass'/Game/CIWSTurrets/Blueprints/BP_SW_Turret_Blaster.BP_SW_Turret_Blaster_C'",
						"health": 500,
						"repair Add Health": 25,
						"support Snapping": true
					},
					"sell Price": 0,
					"itemTypeTag":
					{
						"tagName": "Item.Category.FinalItem"
					},
					"tier": 3
				}
			},
			"displayName": "module_turret_blaster",
			"category": "",
			"balanceFlags": [
				"missing_pickup_mapping",
				"recipe_only_output"
			]
		},
		{
			"key": "item:module_turret_laser",
			"itemId": "module_turret_laser",
			"knownItemData": true,
			"naturalResource": false,
			"producedByRecipes": [
				"recipe:DT_Recipes_Crafting:module_turret_laser"
			],
			"consumedByRecipes": [],
			"droppedByAi": [],
			"droppedByMinerals": [],
			"directProducerCount": 1,
			"directConsumerCount": 0,
			"aiDropSourceCount": 0,
			"mineralDropSourceCount": 0,
			"directSourceCount": 1,
			"directUseCount": 0,
			"directRecipeInputQuantity": 0,
			"upgradeDemandQuantity": 0,
			"sinkClassification": "terminal module",
			"requiredQuantityByGroup":
			{
			},
			"producedQuantityByGroup":
			{
				"crafting": 1
			},
			"producedRecipeGroups": [
				"crafting"
			],
			"consumedRecipeGroups": [],
			"downstreamChains": [],
			"pickupResolved": true,
			"pickupBlueprintName": "BP_Floating_WorldItem_LaserTurret",
			"pickupFailureReason": "",
			"itemData":
			{
				"itemId": "module_turret_laser",
				"displayName": "module_turret_laser",
				"category": "",
				"sourceTable": "/Game/UltimateSurvivalPack/Blueprints/Datatable/Inventory/DT_ItemData_StratoWard.DT_ItemData_StratoWard",
				"raw":
				{
					"name": "module_turret_laser",
					"description": "Place this to defend your ship",
					"maximum Stack": 1,
					"item Type": "Other",
					"icon": "/Script/Engine.Texture2D'/Game/StratoWard/UI/Icons/Icon_Turret_Laser.Icon_Turret_Laser'",
					"item Mesh": "/Script/Engine.StaticMesh'/Game/StratoWard/Mesh/Loot/ManMade/Cargo_Large/space_cargo_large_model/StaticMeshes/space_cargo_large_model.space_cargo_large_model'",
					"survival Properties":
					{
						"health to Add": 0,
						"hunger to Add": 0,
						"thirst to Add": 0,
						"cosume Sound": "/Script/Engine.SoundCue'/Game/UltimateSurvivalPack/Demo/Audio/SFX/CUE_EatSound.CUE_EatSound'",
						"effect Time": 0
					},
					"holdable Class": "/Script/Engine.BlueprintGeneratedClass'/Game/UltimateSurvivalPack/Blueprints/Holdable/HoldableActors/BP_Holdable_Building.BP_Holdable_Building_C'",
					"armor Properties":
					{
						"armor to Add": "Head",
						"armor Male Mesh": "None",
						"armor Female Mesh": "None",
						"armor Protection Percent": 0,
						"hide Mesh": [],
						"slots to Add": 0,
						"temperature to Add": 0
					},
					"building Data":
					{
						"build Type": "Building",
						"ghost Mesh": "/Script/Engine.BlueprintGeneratedClass'/Game/UltimateSurvivalPack/Blueprints/Buildings/Ghost/BP_Ghost_LaserTurret.BP_Ghost_LaserTurret_C'",
						"collision Transform":
						{
							"rotation":
							{
								"x": 0,
								"y": -0,
								"z": 0,
								"w": 1
							},
							"translation":
							{
								"x": 0,
								"y": 0,
								"z": 105
							},
							"scale3D":
							{
								"x": 100,
								"y": 100,
								"z": 100
							}
						},
						"final Building Class": "/Script/Engine.BlueprintGeneratedClass'/Game/CIWSTurrets/Blueprints/BP_SW_Turret_Laser.BP_SW_Turret_Laser_C'",
						"health": 500,
						"repair Add Health": 25,
						"support Snapping": true
					},
					"sell Price": 0,
					"itemTypeTag":
					{
						"tagName": "Item.Category.FinalItem"
					},
					"tier": 3
				}
			},
			"displayName": "module_turret_laser",
			"category": "",
			"balanceFlags": [
				"recipe_only_output"
			]
		},
		{
			"key": "item:module_turret_missile",
			"itemId": "module_turret_missile",
			"knownItemData": true,
			"naturalResource": false,
			"producedByRecipes": [],
			"consumedByRecipes": [],
			"droppedByAi": [],
			"droppedByMinerals": [],
			"directProducerCount": 0,
			"directConsumerCount": 0,
			"aiDropSourceCount": 0,
			"mineralDropSourceCount": 0,
			"directSourceCount": 0,
			"directUseCount": 0,
			"directRecipeInputQuantity": 0,
			"upgradeDemandQuantity": 0,
			"sinkClassification": "terminal module",
			"requiredQuantityByGroup":
			{
			},
			"producedQuantityByGroup":
			{
			},
			"producedRecipeGroups": [],
			"consumedRecipeGroups": [],
			"downstreamChains": [],
			"pickupResolved": false,
			"pickupBlueprintName": "",
			"pickupFailureReason": "module_turret_missile: no pickup BP match",
			"itemData":
			{
				"itemId": "module_turret_missile",
				"displayName": "module_turret_missile",
				"category": "",
				"sourceTable": "/Game/UltimateSurvivalPack/Blueprints/Datatable/Inventory/DT_ItemData_StratoWard.DT_ItemData_StratoWard",
				"raw":
				{
					"name": "module_turret_missile",
					"description": "Place this to defend your ship",
					"maximum Stack": 1,
					"item Type": "Other",
					"icon": "/Script/Engine.Texture2D'/Game/StratoWard/UI/Icons/Icon_Turret_Rocket.Icon_Turret_Rocket'",
					"item Mesh": "/Script/Engine.StaticMesh'/Game/StratoWard/Mesh/Loot/ManMade/Cargo_Large/space_cargo_large_model/StaticMeshes/space_cargo_large_model.space_cargo_large_model'",
					"survival Properties":
					{
						"health to Add": 0,
						"hunger to Add": 0,
						"thirst to Add": 0,
						"cosume Sound": "/Script/Engine.SoundCue'/Game/UltimateSurvivalPack/Demo/Audio/SFX/CUE_EatSound.CUE_EatSound'",
						"effect Time": 0
					},
					"holdable Class": "/Script/Engine.BlueprintGeneratedClass'/Game/UltimateSurvivalPack/Blueprints/Holdable/HoldableActors/BP_Holdable_Building.BP_Holdable_Building_C'",
					"armor Properties":
					{
						"armor to Add": "Head",
						"armor Male Mesh": "None",
						"armor Female Mesh": "None",
						"armor Protection Percent": 0,
						"hide Mesh": [],
						"slots to Add": 0,
						"temperature to Add": 0
					},
					"building Data":
					{
						"build Type": "Building",
						"ghost Mesh": "/Script/Engine.BlueprintGeneratedClass'/Game/UltimateSurvivalPack/Blueprints/Buildings/Ghost/BP_Ghost_MissileTurret.BP_Ghost_MissileTurret_C'",
						"collision Transform":
						{
							"rotation":
							{
								"x": 0,
								"y": -0,
								"z": 0,
								"w": 1
							},
							"translation":
							{
								"x": 0,
								"y": 0,
								"z": 105
							},
							"scale3D":
							{
								"x": 100,
								"y": 100,
								"z": 100
							}
						},
						"final Building Class": "/Script/Engine.BlueprintGeneratedClass'/Game/CIWSTurrets/Blueprints/BP_SW_Turret_Missile.BP_SW_Turret_Missile_C'",
						"health": 500,
						"repair Add Health": 25,
						"support Snapping": true
					},
					"sell Price": 0,
					"itemTypeTag":
					{
						"tagName": "Item.Category.FinalItem"
					},
					"tier": 3
				}
			},
			"displayName": "module_turret_missile",
			"category": "",
			"balanceFlags": [
				"missing_pickup_mapping",
				"missing_sources"
			]
		},
		{
			"key": "item:module_turret_repair",
			"itemId": "module_turret_repair",
			"knownItemData": true,
			"naturalResource": false,
			"producedByRecipes": [
				"recipe:DT_Recipes_Crafting:module_turret_repair"
			],
			"consumedByRecipes": [],
			"droppedByAi": [],
			"droppedByMinerals": [],
			"directProducerCount": 1,
			"directConsumerCount": 0,
			"aiDropSourceCount": 0,
			"mineralDropSourceCount": 0,
			"directSourceCount": 1,
			"directUseCount": 0,
			"directRecipeInputQuantity": 0,
			"upgradeDemandQuantity": 0,
			"sinkClassification": "terminal module",
			"requiredQuantityByGroup":
			{
			},
			"producedQuantityByGroup":
			{
				"crafting": 1
			},
			"producedRecipeGroups": [
				"crafting"
			],
			"consumedRecipeGroups": [],
			"downstreamChains": [],
			"pickupResolved": true,
			"pickupBlueprintName": "BP_Floating_WorldItem_RepairTurret",
			"pickupFailureReason": "",
			"itemData":
			{
				"itemId": "module_turret_repair",
				"displayName": "module_turret_repair",
				"category": "",
				"sourceTable": "/Game/UltimateSurvivalPack/Blueprints/Datatable/Inventory/DT_ItemData_StratoWard.DT_ItemData_StratoWard",
				"raw":
				{
					"name": "module_turret_repair",
					"description": "Repair Turret",
					"maximum Stack": 1,
					"item Type": "Other",
					"icon": "/Script/Engine.Texture2D'/Game/StratoWard/UI/Icons/Icon_ServoMotor.Icon_ServoMotor'",
					"item Mesh": "/Script/Engine.StaticMesh'/Game/StratoWard/Mesh/Loot/ManMade/Cargo_Large/space_cargo_large_model/StaticMeshes/space_cargo_large_model1.space_cargo_large_model1'",
					"survival Properties":
					{
						"health to Add": 0,
						"hunger to Add": 0,
						"thirst to Add": 0,
						"cosume Sound": "/Script/Engine.SoundCue'/Game/UltimateSurvivalPack/Demo/Audio/SFX/CUE_EatSound.CUE_EatSound'",
						"effect Time": 0
					},
					"holdable Class": "/Script/Engine.BlueprintGeneratedClass'/Game/UltimateSurvivalPack/Blueprints/Holdable/HoldableActors/BP_Holdable_Building.BP_Holdable_Building_C'",
					"armor Properties":
					{
						"armor to Add": "Head",
						"armor Male Mesh": "None",
						"armor Female Mesh": "None",
						"armor Protection Percent": 0,
						"hide Mesh": [],
						"slots to Add": 0,
						"temperature to Add": 0
					},
					"building Data":
					{
						"build Type": "Building",
						"ghost Mesh": "/Script/Engine.BlueprintGeneratedClass'/Game/UltimateSurvivalPack/Blueprints/Buildings/Ghost/BP_Ghost_RepairBay.BP_Ghost_RepairBay_C'",
						"collision Transform":
						{
							"rotation":
							{
								"x": 0,
								"y": -0,
								"z": 0,
								"w": 1
							},
							"translation":
							{
								"x": 0,
								"y": 0,
								"z": 105
							},
							"scale3D":
							{
								"x": 100,
								"y": 100,
								"z": 100
							}
						},
						"final Building Class": "/Script/Engine.BlueprintGeneratedClass'/Game/CIWSTurrets/Blueprints/BP_RepairBay.BP_RepairBay_C'",
						"health": 500,
						"repair Add Health": 25,
						"support Snapping": true
					},
					"sell Price": 0,
					"itemTypeTag":
					{
						"tagName": "Item.Category.FinalItem"
					},
					"tier": 3
				}
			},
			"displayName": "module_turret_repair",
			"category": "",
			"balanceFlags": [
				"recipe_only_output"
			]
		},
		{
			"key": "item:module_turret_rocket",
			"itemId": "module_turret_rocket",
			"knownItemData": false,
			"naturalResource": false,
			"producedByRecipes": [
				"recipe:DT_Recipes_Crafting:module_turret_rocket"
			],
			"consumedByRecipes": [],
			"droppedByAi": [],
			"droppedByMinerals": [],
			"directProducerCount": 1,
			"directConsumerCount": 0,
			"aiDropSourceCount": 0,
			"mineralDropSourceCount": 0,
			"directSourceCount": 1,
			"directUseCount": 0,
			"directRecipeInputQuantity": 0,
			"upgradeDemandQuantity": 0,
			"sinkClassification": "terminal module",
			"requiredQuantityByGroup":
			{
			},
			"producedQuantityByGroup":
			{
				"crafting": 1
			},
			"producedRecipeGroups": [
				"crafting"
			],
			"consumedRecipeGroups": [],
			"downstreamChains": [],
			"pickupResolved": true,
			"pickupBlueprintName": "BP_Floating_WorldItem_MissileTurret",
			"pickupFailureReason": "",
			"displayName": "module_turret_rocket",
			"category": "",
			"balanceFlags": [
				"recipe_only_output"
			]
		},
		{
			"key": "item:raw_alien_enzyme",
			"itemId": "raw_alien_enzyme",
			"knownItemData": true,
			"naturalResource": true,
			"producedByRecipes": [],
			"consumedByRecipes": [
				"recipe:DT_Recipes_Crafting:con_synth_steak",
				"recipe:DT_Recipes_Refining:mat_polymers"
			],
			"droppedByAi": [
				"ai:BP_Al_Alien_Base",
				"ai:BP_Alien_BabyCyclop",
				"ai:BP_Alien_BatCyclop",
				"ai:BP_Alien_BatCyclop_ProjExp",
				"ai:BP_Alien_ClamWorm",
				"ai:BP_Alien_ClamWorm_ProjExp",
				"ai:BP_Alien_Drone",
				"ai:BP_Alien_Drone_ProjExp",
				"ai:BP_Alien_FatLobster",
				"ai:BP_Alien_FatLobster_ProjExp",
				"ai:BP_Alien_Fighter",
				"ai:BP_Alien_Fighter_ProjExp",
				"ai:BP_Alien_GiantOctopus",
				"ai:BP_Alien_Melee",
				"ai:BP_Alien_Ranged",
				"ai:BP_Alien_Ranged_TEMP_Aura",
				"ai:BP_Alien_Ranged_TEMP_Aura4",
				"ai:BP_Alien_SpikeRay",
				"ai:BP_Alien_SquidMother",
				"ai:BP_Alien_Yellow_Friendly",
				"ai:BP_FriendlyAttackCarrierDrone"
			],
			"droppedByMinerals": [],
			"directProducerCount": 0,
			"directConsumerCount": 2,
			"aiDropSourceCount": 21,
			"mineralDropSourceCount": 0,
			"directSourceCount": 21,
			"directUseCount": 2,
			"directRecipeInputQuantity": 2,
			"upgradeDemandQuantity": 0,
			"sinkClassification": "not terminal",
			"requiredQuantityByGroup":
			{
				"crafting": 1,
				"refining": 1
			},
			"producedQuantityByGroup":
			{
			},
			"producedRecipeGroups": [],
			"consumedRecipeGroups": [
				"crafting",
				"refining"
			],
			"downstreamChains": [
				{
					"terminalType": "terminal consumable",
					"terminalItemId": "con_synth_steak",
					"summary": "raw_alien_enzyme x1 -> con_synth_steak x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_alien_enzyme x1 -> con_synth_steak x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_rocket",
					"summary": "raw_alien_enzyme x1 -> mat_polymers x2 via DT_Recipes_Refining -> mat_polymers x2 -> cmp_thruster_parts x1 via DT_Recipes_Refining -> cmp_thruster_parts x1 -> module_turret_rocket x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_alien_enzyme x1 -> mat_polymers x2 via DT_Recipes_Refining",
						"mat_polymers x2 -> cmp_thruster_parts x1 via DT_Recipes_Refining",
						"cmp_thruster_parts x1 -> module_turret_rocket x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal weapon",
					"terminalItemId": "weapon_rocket",
					"summary": "raw_alien_enzyme x1 -> mat_polymers x2 via DT_Recipes_Refining -> mat_polymers x2 -> cmp_thruster_parts x1 via DT_Recipes_Refining -> cmp_thruster_parts x1 -> weapon_rocket x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_alien_enzyme x1 -> mat_polymers x2 via DT_Recipes_Refining",
						"mat_polymers x2 -> cmp_thruster_parts x1 via DT_Recipes_Refining",
						"cmp_thruster_parts x1 -> weapon_rocket x1 via DT_Recipes_Crafting"
					]
				}
			],
			"pickupResolved": false,
			"pickupBlueprintName": "",
			"pickupFailureReason": "raw_alien_enzyme: no pickup BP match",
			"itemData":
			{
				"itemId": "raw_alien_enzyme",
				"displayName": "raw_alien_enzyme",
				"category": "",
				"sourceTable": "/Game/UltimateSurvivalPack/Blueprints/Datatable/Inventory/DT_ItemData_StratoWard.DT_ItemData_StratoWard",
				"raw":
				{
					"name": "raw_alien_enzyme",
					"description": "Hello world!",
					"maximum Stack": 64,
					"item Type": "Other",
					"icon": "/Script/Engine.Texture2D'/Game/StratoWard/UI/Icons/Icon_OrganicEnzyme.Icon_OrganicEnzyme'",
					"item Mesh": "None",
					"survival Properties":
					{
						"health to Add": 0,
						"hunger to Add": 0,
						"thirst to Add": 0,
						"cosume Sound": "/Script/Engine.SoundCue'/Game/UltimateSurvivalPack/Demo/Audio/SFX/CUE_EatSound.CUE_EatSound'",
						"effect Time": 0
					},
					"holdable Class": "None",
					"armor Properties":
					{
						"armor to Add": "Head",
						"armor Male Mesh": "None",
						"armor Female Mesh": "None",
						"armor Protection Percent": 0,
						"hide Mesh": [],
						"slots to Add": 0,
						"temperature to Add": 0
					},
					"building Data":
					{
						"build Type": "Building",
						"ghost Mesh": "None",
						"collision Transform":
						{
							"rotation":
							{
								"x": 0,
								"y": -0,
								"z": 0,
								"w": 1
							},
							"translation":
							{
								"x": 0,
								"y": 0,
								"z": 105
							},
							"scale3D":
							{
								"x": 100,
								"y": 100,
								"z": 100
							}
						},
						"final Building Class": "None",
						"health": 500,
						"repair Add Health": 25,
						"support Snapping": false
					},
					"sell Price": 0,
					"itemTypeTag":
					{
						"tagName": "Item.Category.RawResource"
					},
					"tier": 0
				}
			},
			"displayName": "raw_alien_enzyme",
			"category": "",
			"balanceFlags": []
		},
		{
			"key": "item:raw_ammonia_ice",
			"itemId": "raw_ammonia_ice",
			"knownItemData": true,
			"naturalResource": true,
			"producedByRecipes": [],
			"consumedByRecipes": [
				"recipe:DT_Recipes_Refining:mat_insulation",
				"recipe:DT_Recipes_Refining:mat_polymers"
			],
			"droppedByAi": [],
			"droppedByMinerals": [
				"mineral:rockyCarbon",
				"mineral:volatileIce"
			],
			"directProducerCount": 0,
			"directConsumerCount": 2,
			"aiDropSourceCount": 0,
			"mineralDropSourceCount": 2,
			"directSourceCount": 2,
			"directUseCount": 2,
			"directRecipeInputQuantity": 3,
			"upgradeDemandQuantity": 0,
			"sinkClassification": "not terminal",
			"requiredQuantityByGroup":
			{
				"refining": 3
			},
			"producedQuantityByGroup":
			{
			},
			"producedRecipeGroups": [],
			"consumedRecipeGroups": [
				"refining"
			],
			"downstreamChains": [
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_solar_panel",
					"summary": "raw_ammonia_ice x2 -> mat_insulation x2 via DT_Recipes_Refining -> mat_insulation x1 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x1 -> module_solar_panel x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_ammonia_ice x2 -> mat_insulation x2 via DT_Recipes_Refining",
						"mat_insulation x1 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x1 -> module_solar_panel x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_blaster",
					"summary": "raw_ammonia_ice x2 -> mat_insulation x2 via DT_Recipes_Refining -> mat_insulation x1 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x1 -> module_turret_blaster x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_ammonia_ice x2 -> mat_insulation x2 via DT_Recipes_Refining",
						"mat_insulation x1 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x1 -> module_turret_blaster x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_laser",
					"summary": "raw_ammonia_ice x2 -> mat_insulation x2 via DT_Recipes_Refining -> mat_insulation x1 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x1 -> module_turret_laser x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_ammonia_ice x2 -> mat_insulation x2 via DT_Recipes_Refining",
						"mat_insulation x1 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x1 -> module_turret_laser x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_repair",
					"summary": "raw_ammonia_ice x2 -> mat_insulation x2 via DT_Recipes_Refining -> mat_insulation x1 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x1 -> module_turret_repair x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_ammonia_ice x2 -> mat_insulation x2 via DT_Recipes_Refining",
						"mat_insulation x1 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x1 -> module_turret_repair x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_rocket",
					"summary": "raw_ammonia_ice x2 -> mat_insulation x2 via DT_Recipes_Refining -> mat_insulation x1 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x2 -> module_turret_rocket x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_ammonia_ice x2 -> mat_insulation x2 via DT_Recipes_Refining",
						"mat_insulation x1 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x2 -> module_turret_rocket x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "raw_ammonia_ice x2 -> mat_insulation x2 via DT_Recipes_Refining -> mat_insulation x1 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x12 -> UpgradeShip x1 via DT_Recipes_Upgrade_01",
					"steps": [
						"raw_ammonia_ice x2 -> mat_insulation x2 via DT_Recipes_Refining",
						"mat_insulation x1 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x12 -> UpgradeShip x1 via DT_Recipes_Upgrade_01"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "raw_ammonia_ice x2 -> mat_insulation x2 via DT_Recipes_Refining -> mat_insulation x1 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x34 -> UpgradeShip x1 via DT_Recipes_Upgrade_02",
					"steps": [
						"raw_ammonia_ice x2 -> mat_insulation x2 via DT_Recipes_Refining",
						"mat_insulation x1 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x34 -> UpgradeShip x1 via DT_Recipes_Upgrade_02"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "raw_ammonia_ice x2 -> mat_insulation x2 via DT_Recipes_Refining -> mat_insulation x1 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x127 -> UpgradeShip x1 via DT_Recipes_Upgrade_03",
					"steps": [
						"raw_ammonia_ice x2 -> mat_insulation x2 via DT_Recipes_Refining",
						"mat_insulation x1 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x127 -> UpgradeShip x1 via DT_Recipes_Upgrade_03"
					]
				},
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_rocket",
					"summary": "raw_ammonia_ice x1 -> mat_polymers x2 via DT_Recipes_Refining -> mat_polymers x2 -> cmp_thruster_parts x1 via DT_Recipes_Refining -> cmp_thruster_parts x1 -> module_turret_rocket x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_ammonia_ice x1 -> mat_polymers x2 via DT_Recipes_Refining",
						"mat_polymers x2 -> cmp_thruster_parts x1 via DT_Recipes_Refining",
						"cmp_thruster_parts x1 -> module_turret_rocket x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal weapon",
					"terminalItemId": "weapon_rocket",
					"summary": "raw_ammonia_ice x1 -> mat_polymers x2 via DT_Recipes_Refining -> mat_polymers x2 -> cmp_thruster_parts x1 via DT_Recipes_Refining -> cmp_thruster_parts x1 -> weapon_rocket x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_ammonia_ice x1 -> mat_polymers x2 via DT_Recipes_Refining",
						"mat_polymers x2 -> cmp_thruster_parts x1 via DT_Recipes_Refining",
						"cmp_thruster_parts x1 -> weapon_rocket x1 via DT_Recipes_Crafting"
					]
				}
			],
			"pickupResolved": true,
			"pickupBlueprintName": "BP_Floating_WorldItem_AmmoniaIce",
			"pickupFailureReason": "",
			"itemData":
			{
				"itemId": "raw_ammonia_ice",
				"displayName": "raw_ammonia_ice",
				"category": "",
				"sourceTable": "/Game/UltimateSurvivalPack/Blueprints/Datatable/Inventory/DT_ItemData_StratoWard.DT_ItemData_StratoWard",
				"raw":
				{
					"name": "raw_ammonia_ice",
					"description": "Hello world!",
					"maximum Stack": 64,
					"item Type": "Other",
					"icon": "/Script/Engine.Texture2D'/Game/StratoWard/UI/Icons/Icon_AmmoniaIce.Icon_AmmoniaIce'",
					"item Mesh": "/Script/Engine.StaticMesh'/Game/StratoWard/Mesh/Loot/Minerals/AmmoniaIce/ammonia_ice_model/StaticMeshes/ammonia_ice_model.ammonia_ice_model'",
					"survival Properties":
					{
						"health to Add": 0,
						"hunger to Add": 0,
						"thirst to Add": 0,
						"cosume Sound": "/Script/Engine.SoundCue'/Game/UltimateSurvivalPack/Demo/Audio/SFX/CUE_EatSound.CUE_EatSound'",
						"effect Time": 0
					},
					"holdable Class": "None",
					"armor Properties":
					{
						"armor to Add": "Head",
						"armor Male Mesh": "None",
						"armor Female Mesh": "None",
						"armor Protection Percent": 0,
						"hide Mesh": [],
						"slots to Add": 0,
						"temperature to Add": 0
					},
					"building Data":
					{
						"build Type": "Building",
						"ghost Mesh": "None",
						"collision Transform":
						{
							"rotation":
							{
								"x": 0,
								"y": -0,
								"z": 0,
								"w": 1
							},
							"translation":
							{
								"x": 0,
								"y": 0,
								"z": 105
							},
							"scale3D":
							{
								"x": 100,
								"y": 100,
								"z": 100
							}
						},
						"final Building Class": "None",
						"health": 500,
						"repair Add Health": 25,
						"support Snapping": false
					},
					"sell Price": 0,
					"itemTypeTag":
					{
						"tagName": "Item.Category.RawResource"
					},
					"tier": 0
				}
			},
			"displayName": "raw_ammonia_ice",
			"category": "",
			"balanceFlags": []
		},
		{
			"key": "item:raw_basalt",
			"itemId": "raw_basalt",
			"knownItemData": true,
			"naturalResource": true,
			"producedByRecipes": [],
			"consumedByRecipes": [
				"recipe:DT_Recipes_Refining:mat_insulation"
			],
			"droppedByAi": [],
			"droppedByMinerals": [
				"mineral:commonMetal",
				"mineral:rareMetal",
				"mineral:rockyCarbon",
				"mineral:volatileIce"
			],
			"directProducerCount": 0,
			"directConsumerCount": 1,
			"aiDropSourceCount": 0,
			"mineralDropSourceCount": 4,
			"directSourceCount": 4,
			"directUseCount": 1,
			"directRecipeInputQuantity": 3,
			"upgradeDemandQuantity": 0,
			"sinkClassification": "not terminal",
			"requiredQuantityByGroup":
			{
				"refining": 3
			},
			"producedQuantityByGroup":
			{
			},
			"producedRecipeGroups": [],
			"consumedRecipeGroups": [
				"refining"
			],
			"downstreamChains": [
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_solar_panel",
					"summary": "raw_basalt x3 -> mat_insulation x2 via DT_Recipes_Refining -> mat_insulation x1 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x1 -> module_solar_panel x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_basalt x3 -> mat_insulation x2 via DT_Recipes_Refining",
						"mat_insulation x1 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x1 -> module_solar_panel x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_blaster",
					"summary": "raw_basalt x3 -> mat_insulation x2 via DT_Recipes_Refining -> mat_insulation x1 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x1 -> module_turret_blaster x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_basalt x3 -> mat_insulation x2 via DT_Recipes_Refining",
						"mat_insulation x1 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x1 -> module_turret_blaster x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_laser",
					"summary": "raw_basalt x3 -> mat_insulation x2 via DT_Recipes_Refining -> mat_insulation x1 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x1 -> module_turret_laser x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_basalt x3 -> mat_insulation x2 via DT_Recipes_Refining",
						"mat_insulation x1 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x1 -> module_turret_laser x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_repair",
					"summary": "raw_basalt x3 -> mat_insulation x2 via DT_Recipes_Refining -> mat_insulation x1 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x1 -> module_turret_repair x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_basalt x3 -> mat_insulation x2 via DT_Recipes_Refining",
						"mat_insulation x1 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x1 -> module_turret_repair x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_rocket",
					"summary": "raw_basalt x3 -> mat_insulation x2 via DT_Recipes_Refining -> mat_insulation x1 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x2 -> module_turret_rocket x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_basalt x3 -> mat_insulation x2 via DT_Recipes_Refining",
						"mat_insulation x1 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x2 -> module_turret_rocket x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "raw_basalt x3 -> mat_insulation x2 via DT_Recipes_Refining -> mat_insulation x1 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x12 -> UpgradeShip x1 via DT_Recipes_Upgrade_01",
					"steps": [
						"raw_basalt x3 -> mat_insulation x2 via DT_Recipes_Refining",
						"mat_insulation x1 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x12 -> UpgradeShip x1 via DT_Recipes_Upgrade_01"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "raw_basalt x3 -> mat_insulation x2 via DT_Recipes_Refining -> mat_insulation x1 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x34 -> UpgradeShip x1 via DT_Recipes_Upgrade_02",
					"steps": [
						"raw_basalt x3 -> mat_insulation x2 via DT_Recipes_Refining",
						"mat_insulation x1 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x34 -> UpgradeShip x1 via DT_Recipes_Upgrade_02"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "raw_basalt x3 -> mat_insulation x2 via DT_Recipes_Refining -> mat_insulation x1 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x127 -> UpgradeShip x1 via DT_Recipes_Upgrade_03",
					"steps": [
						"raw_basalt x3 -> mat_insulation x2 via DT_Recipes_Refining",
						"mat_insulation x1 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x127 -> UpgradeShip x1 via DT_Recipes_Upgrade_03"
					]
				}
			],
			"pickupResolved": true,
			"pickupBlueprintName": "BP_Floating_WorldItem_BasaltRock",
			"pickupFailureReason": "",
			"itemData":
			{
				"itemId": "raw_basalt",
				"displayName": "raw_basalt",
				"category": "",
				"sourceTable": "/Game/UltimateSurvivalPack/Blueprints/Datatable/Inventory/DT_ItemData_StratoWard.DT_ItemData_StratoWard",
				"raw":
				{
					"name": "raw_basalt",
					"description": "Hello world!",
					"maximum Stack": 64,
					"item Type": "Other",
					"icon": "/Script/Engine.Texture2D'/Game/StratoWard/UI/Icons/Icons_Raw_Basalt.Icons_Raw_Basalt'",
					"item Mesh": "/Script/Engine.StaticMesh'/Game/StratoWard/Mesh/Loot/Minerals/Basalt/basalt_model/StaticMeshes/basalt_model.basalt_model'",
					"survival Properties":
					{
						"health to Add": 0,
						"hunger to Add": 0,
						"thirst to Add": 0,
						"cosume Sound": "/Script/Engine.SoundCue'/Game/UltimateSurvivalPack/Demo/Audio/SFX/CUE_EatSound.CUE_EatSound'",
						"effect Time": 0
					},
					"holdable Class": "None",
					"armor Properties":
					{
						"armor to Add": "Head",
						"armor Male Mesh": "None",
						"armor Female Mesh": "None",
						"armor Protection Percent": 0,
						"hide Mesh": [],
						"slots to Add": 0,
						"temperature to Add": 0
					},
					"building Data":
					{
						"build Type": "Building",
						"ghost Mesh": "None",
						"collision Transform":
						{
							"rotation":
							{
								"x": 0,
								"y": -0,
								"z": 0,
								"w": 1
							},
							"translation":
							{
								"x": 0,
								"y": 0,
								"z": 105
							},
							"scale3D":
							{
								"x": 100,
								"y": 100,
								"z": 100
							}
						},
						"final Building Class": "None",
						"health": 500,
						"repair Add Health": 25,
						"support Snapping": false
					},
					"sell Price": 0,
					"itemTypeTag":
					{
						"tagName": "Item.Category.RawResource"
					},
					"tier": 0
				}
			},
			"displayName": "raw_basalt",
			"category": "",
			"balanceFlags": []
		},
		{
			"key": "item:raw_bauxite",
			"itemId": "raw_bauxite",
			"knownItemData": true,
			"naturalResource": true,
			"producedByRecipes": [],
			"consumedByRecipes": [
				"recipe:DT_Recipes_Refining:mat_aluminum_alloy"
			],
			"droppedByAi": [],
			"droppedByMinerals": [
				"mineral:commonMetal",
				"mineral:rareMetal"
			],
			"directProducerCount": 0,
			"directConsumerCount": 1,
			"aiDropSourceCount": 0,
			"mineralDropSourceCount": 2,
			"directSourceCount": 2,
			"directUseCount": 1,
			"directRecipeInputQuantity": 4,
			"upgradeDemandQuantity": 0,
			"sinkClassification": "not terminal",
			"requiredQuantityByGroup":
			{
				"refining": 4
			},
			"producedQuantityByGroup":
			{
			},
			"producedRecipeGroups": [],
			"consumedRecipeGroups": [
				"refining"
			],
			"downstreamChains": [
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_solar_panel",
					"summary": "raw_bauxite x4 -> mat_aluminum_alloy x2 via DT_Recipes_Refining -> mat_aluminum_alloy x3 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x1 -> module_solar_panel x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_bauxite x4 -> mat_aluminum_alloy x2 via DT_Recipes_Refining",
						"mat_aluminum_alloy x3 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x1 -> module_solar_panel x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_blaster",
					"summary": "raw_bauxite x4 -> mat_aluminum_alloy x2 via DT_Recipes_Refining -> mat_aluminum_alloy x3 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x1 -> module_turret_blaster x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_bauxite x4 -> mat_aluminum_alloy x2 via DT_Recipes_Refining",
						"mat_aluminum_alloy x3 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x1 -> module_turret_blaster x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_laser",
					"summary": "raw_bauxite x4 -> mat_aluminum_alloy x2 via DT_Recipes_Refining -> mat_aluminum_alloy x3 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x1 -> module_turret_laser x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_bauxite x4 -> mat_aluminum_alloy x2 via DT_Recipes_Refining",
						"mat_aluminum_alloy x3 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x1 -> module_turret_laser x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_repair",
					"summary": "raw_bauxite x4 -> mat_aluminum_alloy x2 via DT_Recipes_Refining -> mat_aluminum_alloy x3 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x1 -> module_turret_repair x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_bauxite x4 -> mat_aluminum_alloy x2 via DT_Recipes_Refining",
						"mat_aluminum_alloy x3 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x1 -> module_turret_repair x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_rocket",
					"summary": "raw_bauxite x4 -> mat_aluminum_alloy x2 via DT_Recipes_Refining -> mat_aluminum_alloy x3 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x2 -> module_turret_rocket x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_bauxite x4 -> mat_aluminum_alloy x2 via DT_Recipes_Refining",
						"mat_aluminum_alloy x3 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x2 -> module_turret_rocket x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "raw_bauxite x4 -> mat_aluminum_alloy x2 via DT_Recipes_Refining -> mat_aluminum_alloy x3 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x12 -> UpgradeShip x1 via DT_Recipes_Upgrade_01",
					"steps": [
						"raw_bauxite x4 -> mat_aluminum_alloy x2 via DT_Recipes_Refining",
						"mat_aluminum_alloy x3 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x12 -> UpgradeShip x1 via DT_Recipes_Upgrade_01"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "raw_bauxite x4 -> mat_aluminum_alloy x2 via DT_Recipes_Refining -> mat_aluminum_alloy x3 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x34 -> UpgradeShip x1 via DT_Recipes_Upgrade_02",
					"steps": [
						"raw_bauxite x4 -> mat_aluminum_alloy x2 via DT_Recipes_Refining",
						"mat_aluminum_alloy x3 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x34 -> UpgradeShip x1 via DT_Recipes_Upgrade_02"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "raw_bauxite x4 -> mat_aluminum_alloy x2 via DT_Recipes_Refining -> mat_aluminum_alloy x3 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x127 -> UpgradeShip x1 via DT_Recipes_Upgrade_03",
					"steps": [
						"raw_bauxite x4 -> mat_aluminum_alloy x2 via DT_Recipes_Refining",
						"mat_aluminum_alloy x3 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x127 -> UpgradeShip x1 via DT_Recipes_Upgrade_03"
					]
				},
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_rocket",
					"summary": "raw_bauxite x4 -> mat_aluminum_alloy x2 via DT_Recipes_Refining -> mat_aluminum_alloy x2 -> cmp_thruster_parts x1 via DT_Recipes_Refining -> cmp_thruster_parts x1 -> module_turret_rocket x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_bauxite x4 -> mat_aluminum_alloy x2 via DT_Recipes_Refining",
						"mat_aluminum_alloy x2 -> cmp_thruster_parts x1 via DT_Recipes_Refining",
						"cmp_thruster_parts x1 -> module_turret_rocket x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal weapon",
					"terminalItemId": "weapon_rocket",
					"summary": "raw_bauxite x4 -> mat_aluminum_alloy x2 via DT_Recipes_Refining -> mat_aluminum_alloy x2 -> cmp_thruster_parts x1 via DT_Recipes_Refining -> cmp_thruster_parts x1 -> weapon_rocket x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_bauxite x4 -> mat_aluminum_alloy x2 via DT_Recipes_Refining",
						"mat_aluminum_alloy x2 -> cmp_thruster_parts x1 via DT_Recipes_Refining",
						"cmp_thruster_parts x1 -> weapon_rocket x1 via DT_Recipes_Crafting"
					]
				}
			],
			"pickupResolved": true,
			"pickupBlueprintName": "BP_Floating_WorldItem_BauxiteRegolith",
			"pickupFailureReason": "",
			"itemData":
			{
				"itemId": "raw_bauxite",
				"displayName": "raw_bauxite",
				"category": "",
				"sourceTable": "/Game/UltimateSurvivalPack/Blueprints/Datatable/Inventory/DT_ItemData_StratoWard.DT_ItemData_StratoWard",
				"raw":
				{
					"name": "raw_bauxite",
					"description": "Unprocessed bauxite",
					"maximum Stack": 64,
					"item Type": "Other",
					"icon": "/Script/Engine.Texture2D'/Game/StratoWard/UI/Icons/Icon_Bauxite.Icon_Bauxite'",
					"item Mesh": "None",
					"survival Properties":
					{
						"health to Add": 0,
						"hunger to Add": 0,
						"thirst to Add": 0,
						"cosume Sound": "/Script/Engine.SoundCue'/Game/UltimateSurvivalPack/Demo/Audio/SFX/CUE_EatSound.CUE_EatSound'",
						"effect Time": 0
					},
					"holdable Class": "None",
					"armor Properties":
					{
						"armor to Add": "Head",
						"armor Male Mesh": "None",
						"armor Female Mesh": "None",
						"armor Protection Percent": 0,
						"hide Mesh": [],
						"slots to Add": 0,
						"temperature to Add": 0
					},
					"building Data":
					{
						"build Type": "Building",
						"ghost Mesh": "None",
						"collision Transform":
						{
							"rotation":
							{
								"x": 0,
								"y": -0,
								"z": 0,
								"w": 1
							},
							"translation":
							{
								"x": 0,
								"y": 0,
								"z": 105
							},
							"scale3D":
							{
								"x": 100,
								"y": 100,
								"z": 100
							}
						},
						"final Building Class": "None",
						"health": 500,
						"repair Add Health": 25,
						"support Snapping": false
					},
					"sell Price": 0,
					"itemTypeTag":
					{
						"tagName": "Item.Category.RawResource"
					},
					"tier": 0
				}
			},
			"displayName": "raw_bauxite",
			"category": "",
			"balanceFlags": []
		},
		{
			"key": "item:raw_carapace",
			"itemId": "raw_carapace",
			"knownItemData": true,
			"naturalResource": true,
			"producedByRecipes": [],
			"consumedByRecipes": [],
			"droppedByAi": [
				"ai:BP_Al_Alien_Base",
				"ai:BP_Alien_BabyCyclop",
				"ai:BP_Alien_BatCyclop",
				"ai:BP_Alien_BatCyclop_ProjExp",
				"ai:BP_Alien_ClamWorm",
				"ai:BP_Alien_ClamWorm_ProjExp",
				"ai:BP_Alien_Drone",
				"ai:BP_Alien_Drone_ProjExp",
				"ai:BP_Alien_FatLobster",
				"ai:BP_Alien_FatLobster_ProjExp",
				"ai:BP_Alien_Fighter",
				"ai:BP_Alien_Fighter_ProjExp",
				"ai:BP_Alien_GiantOctopus",
				"ai:BP_Alien_Melee",
				"ai:BP_Alien_Ranged",
				"ai:BP_Alien_Ranged_TEMP_Aura",
				"ai:BP_Alien_Ranged_TEMP_Aura4",
				"ai:BP_Alien_SpikeRay",
				"ai:BP_Alien_SquidMother",
				"ai:BP_Alien_Yellow_Friendly",
				"ai:BP_FriendlyAttackCarrierDrone"
			],
			"droppedByMinerals": [
				"mineral:rareMetal",
				"mineral:rockyCarbon"
			],
			"directProducerCount": 0,
			"directConsumerCount": 0,
			"aiDropSourceCount": 21,
			"mineralDropSourceCount": 2,
			"directSourceCount": 23,
			"directUseCount": 0,
			"directRecipeInputQuantity": 0,
			"upgradeDemandQuantity": 0,
			"sinkClassification": "not terminal",
			"requiredQuantityByGroup":
			{
			},
			"producedQuantityByGroup":
			{
			},
			"producedRecipeGroups": [],
			"consumedRecipeGroups": [],
			"downstreamChains": [],
			"pickupResolved": true,
			"pickupBlueprintName": "BP_Floating_WorldItem_ChitinousCarapace",
			"pickupFailureReason": "",
			"itemData":
			{
				"itemId": "raw_carapace",
				"displayName": "raw_carapace",
				"category": "",
				"sourceTable": "/Game/UltimateSurvivalPack/Blueprints/Datatable/Inventory/DT_ItemData_StratoWard.DT_ItemData_StratoWard",
				"raw":
				{
					"name": "raw_carapace",
					"description": "Hello world!",
					"maximum Stack": 64,
					"item Type": "Other",
					"icon": "/Script/Engine.Texture2D'/Game/StratoWard/UI/Icons/Icon_Carapace.Icon_Carapace'",
					"item Mesh": "None",
					"survival Properties":
					{
						"health to Add": 0,
						"hunger to Add": 0,
						"thirst to Add": 0,
						"cosume Sound": "/Script/Engine.SoundCue'/Game/UltimateSurvivalPack/Demo/Audio/SFX/CUE_EatSound.CUE_EatSound'",
						"effect Time": 0
					},
					"holdable Class": "None",
					"armor Properties":
					{
						"armor to Add": "Head",
						"armor Male Mesh": "None",
						"armor Female Mesh": "None",
						"armor Protection Percent": 0,
						"hide Mesh": [],
						"slots to Add": 0,
						"temperature to Add": 0
					},
					"building Data":
					{
						"build Type": "Building",
						"ghost Mesh": "None",
						"collision Transform":
						{
							"rotation":
							{
								"x": 0,
								"y": -0,
								"z": 0,
								"w": 1
							},
							"translation":
							{
								"x": 0,
								"y": 0,
								"z": 105
							},
							"scale3D":
							{
								"x": 100,
								"y": 100,
								"z": 100
							}
						},
						"final Building Class": "None",
						"health": 500,
						"repair Add Health": 25,
						"support Snapping": false
					},
					"sell Price": 0,
					"itemTypeTag":
					{
						"tagName": "Item.Category.RawResource"
					},
					"tier": 0
				}
			},
			"displayName": "raw_carapace",
			"category": "",
			"balanceFlags": [
				"dropped_but_unused",
				"no_sinks"
			]
		},
		{
			"key": "item:raw_carbon_dust",
			"itemId": "raw_carbon_dust",
			"knownItemData": true,
			"naturalResource": true,
			"producedByRecipes": [],
			"consumedByRecipes": [
				"recipe:DT_Recipes_Refining:mat_plastic",
				"recipe:DT_Recipes_Refining:mat_polymers"
			],
			"droppedByAi": [],
			"droppedByMinerals": [
				"mineral:commonMetal",
				"mineral:rockyCarbon",
				"mineral:volatileIce"
			],
			"directProducerCount": 0,
			"directConsumerCount": 2,
			"aiDropSourceCount": 0,
			"mineralDropSourceCount": 3,
			"directSourceCount": 3,
			"directUseCount": 2,
			"directRecipeInputQuantity": 5,
			"upgradeDemandQuantity": 0,
			"sinkClassification": "not terminal",
			"requiredQuantityByGroup":
			{
				"refining": 5
			},
			"producedQuantityByGroup":
			{
			},
			"producedRecipeGroups": [],
			"consumedRecipeGroups": [
				"refining"
			],
			"downstreamChains": [
				{
					"terminalType": "terminal consumable",
					"terminalItemId": "con_water_pack",
					"summary": "raw_carbon_dust x3 -> mat_plastic x3 via DT_Recipes_Refining -> mat_plastic x1 -> con_water_pack x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_carbon_dust x3 -> mat_plastic x3 via DT_Recipes_Refining",
						"mat_plastic x1 -> con_water_pack x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "raw_carbon_dust x3 -> mat_plastic x3 via DT_Recipes_Refining -> mat_plastic x2 -> cmp_circuit_boards x1 via DT_Recipes_Refining -> cmp_circuit_boards x4 -> UpgradeShip x1 via DT_Recipes_Upgrade_01",
					"steps": [
						"raw_carbon_dust x3 -> mat_plastic x3 via DT_Recipes_Refining",
						"mat_plastic x2 -> cmp_circuit_boards x1 via DT_Recipes_Refining",
						"cmp_circuit_boards x4 -> UpgradeShip x1 via DT_Recipes_Upgrade_01"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "raw_carbon_dust x3 -> mat_plastic x3 via DT_Recipes_Refining -> mat_plastic x2 -> cmp_circuit_boards x1 via DT_Recipes_Refining -> cmp_circuit_boards x15 -> UpgradeShip x1 via DT_Recipes_Upgrade_02",
					"steps": [
						"raw_carbon_dust x3 -> mat_plastic x3 via DT_Recipes_Refining",
						"mat_plastic x2 -> cmp_circuit_boards x1 via DT_Recipes_Refining",
						"cmp_circuit_boards x15 -> UpgradeShip x1 via DT_Recipes_Upgrade_02"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "raw_carbon_dust x3 -> mat_plastic x3 via DT_Recipes_Refining -> mat_plastic x2 -> cmp_circuit_boards x1 via DT_Recipes_Refining -> cmp_circuit_boards x38 -> UpgradeShip x1 via DT_Recipes_Upgrade_03",
					"steps": [
						"raw_carbon_dust x3 -> mat_plastic x3 via DT_Recipes_Refining",
						"mat_plastic x2 -> cmp_circuit_boards x1 via DT_Recipes_Refining",
						"cmp_circuit_boards x38 -> UpgradeShip x1 via DT_Recipes_Upgrade_03"
					]
				},
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_rocket",
					"summary": "raw_carbon_dust x2 -> mat_polymers x2 via DT_Recipes_Refining -> mat_polymers x2 -> cmp_thruster_parts x1 via DT_Recipes_Refining -> cmp_thruster_parts x1 -> module_turret_rocket x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_carbon_dust x2 -> mat_polymers x2 via DT_Recipes_Refining",
						"mat_polymers x2 -> cmp_thruster_parts x1 via DT_Recipes_Refining",
						"cmp_thruster_parts x1 -> module_turret_rocket x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal weapon",
					"terminalItemId": "weapon_rocket",
					"summary": "raw_carbon_dust x2 -> mat_polymers x2 via DT_Recipes_Refining -> mat_polymers x2 -> cmp_thruster_parts x1 via DT_Recipes_Refining -> cmp_thruster_parts x1 -> weapon_rocket x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_carbon_dust x2 -> mat_polymers x2 via DT_Recipes_Refining",
						"mat_polymers x2 -> cmp_thruster_parts x1 via DT_Recipes_Refining",
						"cmp_thruster_parts x1 -> weapon_rocket x1 via DT_Recipes_Crafting"
					]
				}
			],
			"pickupResolved": false,
			"pickupBlueprintName": "",
			"pickupFailureReason": "raw_carbon_dust: no pickup BP match",
			"itemData":
			{
				"itemId": "raw_carbon_dust",
				"displayName": "raw_carbon_dust",
				"category": "",
				"sourceTable": "/Game/UltimateSurvivalPack/Blueprints/Datatable/Inventory/DT_ItemData_StratoWard.DT_ItemData_StratoWard",
				"raw":
				{
					"name": "raw_carbon_dust",
					"description": "Hello world!",
					"maximum Stack": 64,
					"item Type": "Other",
					"icon": "/Script/Engine.Texture2D'/Game/StratoWard/UI/Icons/Icon_CarbonDust.Icon_CarbonDust'",
					"item Mesh": "None",
					"survival Properties":
					{
						"health to Add": 0,
						"hunger to Add": 0,
						"thirst to Add": 0,
						"cosume Sound": "/Script/Engine.SoundCue'/Game/UltimateSurvivalPack/Demo/Audio/SFX/CUE_EatSound.CUE_EatSound'",
						"effect Time": 0
					},
					"holdable Class": "None",
					"armor Properties":
					{
						"armor to Add": "Head",
						"armor Male Mesh": "None",
						"armor Female Mesh": "None",
						"armor Protection Percent": 0,
						"hide Mesh": [],
						"slots to Add": 0,
						"temperature to Add": 0
					},
					"building Data":
					{
						"build Type": "Building",
						"ghost Mesh": "None",
						"collision Transform":
						{
							"rotation":
							{
								"x": 0,
								"y": -0,
								"z": 0,
								"w": 1
							},
							"translation":
							{
								"x": 0,
								"y": 0,
								"z": 105
							},
							"scale3D":
							{
								"x": 100,
								"y": 100,
								"z": 100
							}
						},
						"final Building Class": "None",
						"health": 500,
						"repair Add Health": 25,
						"support Snapping": false
					},
					"sell Price": 0,
					"itemTypeTag":
					{
						"tagName": "Item.Category.RawResource"
					},
					"tier": 0
				}
			},
			"displayName": "raw_carbon_dust",
			"category": "",
			"balanceFlags": []
		},
		{
			"key": "item:raw_chromium",
			"itemId": "raw_chromium",
			"knownItemData": true,
			"naturalResource": true,
			"producedByRecipes": [],
			"consumedByRecipes": [
				"recipe:DT_Recipes_Refining:mat_stainless_steel"
			],
			"droppedByAi": [],
			"droppedByMinerals": [
				"mineral:commonMetal",
				"mineral:rareMetal"
			],
			"directProducerCount": 0,
			"directConsumerCount": 1,
			"aiDropSourceCount": 0,
			"mineralDropSourceCount": 2,
			"directSourceCount": 2,
			"directUseCount": 1,
			"directRecipeInputQuantity": 1,
			"upgradeDemandQuantity": 0,
			"sinkClassification": "not terminal",
			"requiredQuantityByGroup":
			{
				"refining": 1
			},
			"producedQuantityByGroup":
			{
			},
			"producedRecipeGroups": [],
			"consumedRecipeGroups": [
				"refining"
			],
			"downstreamChains": [
				{
					"terminalType": "terminal weapon",
					"terminalItemId": "weapon_blaster",
					"summary": "raw_chromium x1 -> mat_stainless_steel x2 via DT_Recipes_Refining -> mat_stainless_steel x1 -> weapon_blaster x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_chromium x1 -> mat_stainless_steel x2 via DT_Recipes_Refining",
						"mat_stainless_steel x1 -> weapon_blaster x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_repair",
					"summary": "raw_chromium x1 -> mat_stainless_steel x2 via DT_Recipes_Refining -> mat_stainless_steel x1 -> cmp_servo_motors x1 via DT_Recipes_Refining -> cmp_servo_motors x1 -> module_turret_repair x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_chromium x1 -> mat_stainless_steel x2 via DT_Recipes_Refining",
						"mat_stainless_steel x1 -> cmp_servo_motors x1 via DT_Recipes_Refining",
						"cmp_servo_motors x1 -> module_turret_repair x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "raw_chromium x1 -> mat_stainless_steel x2 via DT_Recipes_Refining -> mat_stainless_steel x1 -> cmp_servo_motors x1 via DT_Recipes_Refining -> cmp_servo_motors x8 -> UpgradeShip x1 via DT_Recipes_Upgrade_01",
					"steps": [
						"raw_chromium x1 -> mat_stainless_steel x2 via DT_Recipes_Refining",
						"mat_stainless_steel x1 -> cmp_servo_motors x1 via DT_Recipes_Refining",
						"cmp_servo_motors x8 -> UpgradeShip x1 via DT_Recipes_Upgrade_01"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "raw_chromium x1 -> mat_stainless_steel x2 via DT_Recipes_Refining -> mat_stainless_steel x1 -> cmp_servo_motors x1 via DT_Recipes_Refining -> cmp_servo_motors x25 -> UpgradeShip x1 via DT_Recipes_Upgrade_02",
					"steps": [
						"raw_chromium x1 -> mat_stainless_steel x2 via DT_Recipes_Refining",
						"mat_stainless_steel x1 -> cmp_servo_motors x1 via DT_Recipes_Refining",
						"cmp_servo_motors x25 -> UpgradeShip x1 via DT_Recipes_Upgrade_02"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "raw_chromium x1 -> mat_stainless_steel x2 via DT_Recipes_Refining -> mat_stainless_steel x1 -> cmp_servo_motors x1 via DT_Recipes_Refining -> cmp_servo_motors x62 -> UpgradeShip x1 via DT_Recipes_Upgrade_03",
					"steps": [
						"raw_chromium x1 -> mat_stainless_steel x2 via DT_Recipes_Refining",
						"mat_stainless_steel x1 -> cmp_servo_motors x1 via DT_Recipes_Refining",
						"cmp_servo_motors x62 -> UpgradeShip x1 via DT_Recipes_Upgrade_03"
					]
				},
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_solar_panel",
					"summary": "raw_chromium x1 -> mat_stainless_steel x2 via DT_Recipes_Refining -> mat_stainless_steel x2 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x1 -> module_solar_panel x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_chromium x1 -> mat_stainless_steel x2 via DT_Recipes_Refining",
						"mat_stainless_steel x2 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x1 -> module_solar_panel x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_blaster",
					"summary": "raw_chromium x1 -> mat_stainless_steel x2 via DT_Recipes_Refining -> mat_stainless_steel x2 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x1 -> module_turret_blaster x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_chromium x1 -> mat_stainless_steel x2 via DT_Recipes_Refining",
						"mat_stainless_steel x2 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x1 -> module_turret_blaster x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_laser",
					"summary": "raw_chromium x1 -> mat_stainless_steel x2 via DT_Recipes_Refining -> mat_stainless_steel x2 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x1 -> module_turret_laser x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_chromium x1 -> mat_stainless_steel x2 via DT_Recipes_Refining",
						"mat_stainless_steel x2 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x1 -> module_turret_laser x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_repair",
					"summary": "raw_chromium x1 -> mat_stainless_steel x2 via DT_Recipes_Refining -> mat_stainless_steel x2 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x1 -> module_turret_repair x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_chromium x1 -> mat_stainless_steel x2 via DT_Recipes_Refining",
						"mat_stainless_steel x2 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x1 -> module_turret_repair x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_rocket",
					"summary": "raw_chromium x1 -> mat_stainless_steel x2 via DT_Recipes_Refining -> mat_stainless_steel x2 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x2 -> module_turret_rocket x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_chromium x1 -> mat_stainless_steel x2 via DT_Recipes_Refining",
						"mat_stainless_steel x2 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x2 -> module_turret_rocket x1 via DT_Recipes_Crafting"
					]
				}
			],
			"pickupResolved": true,
			"pickupBlueprintName": "BP_Floating_WorldItem_ChromiumVein",
			"pickupFailureReason": "",
			"itemData":
			{
				"itemId": "raw_chromium",
				"displayName": "raw_chromium",
				"category": "",
				"sourceTable": "/Game/UltimateSurvivalPack/Blueprints/Datatable/Inventory/DT_ItemData_StratoWard.DT_ItemData_StratoWard",
				"raw":
				{
					"name": "raw_chromium",
					"description": "Hello world!",
					"maximum Stack": 64,
					"item Type": "Other",
					"icon": "/Script/Engine.Texture2D'/Game/StratoWard/UI/Icons/Icon_Chromite.Icon_Chromite'",
					"item Mesh": "/Script/Engine.StaticMesh'/Game/StratoWard/Mesh/Loot/Minerals/Chromite/chromite_model/StaticMeshes/chromite_model.chromite_model'",
					"survival Properties":
					{
						"health to Add": 0,
						"hunger to Add": 0,
						"thirst to Add": 0,
						"cosume Sound": "/Script/Engine.SoundCue'/Game/UltimateSurvivalPack/Demo/Audio/SFX/CUE_EatSound.CUE_EatSound'",
						"effect Time": 0
					},
					"holdable Class": "None",
					"armor Properties":
					{
						"armor to Add": "Head",
						"armor Male Mesh": "None",
						"armor Female Mesh": "None",
						"armor Protection Percent": 0,
						"hide Mesh": [],
						"slots to Add": 0,
						"temperature to Add": 0
					},
					"building Data":
					{
						"build Type": "Building",
						"ghost Mesh": "None",
						"collision Transform":
						{
							"rotation":
							{
								"x": 0,
								"y": -0,
								"z": 0,
								"w": 1
							},
							"translation":
							{
								"x": 0,
								"y": 0,
								"z": 105
							},
							"scale3D":
							{
								"x": 100,
								"y": 100,
								"z": 100
							}
						},
						"final Building Class": "None",
						"health": 500,
						"repair Add Health": 25,
						"support Snapping": false
					},
					"sell Price": 0,
					"itemTypeTag":
					{
						"tagName": "Item.Category.RawResource"
					},
					"tier": 0
				}
			},
			"displayName": "raw_chromium",
			"category": "",
			"balanceFlags": []
		},
		{
			"key": "item:raw_cobalt",
			"itemId": "raw_cobalt",
			"knownItemData": true,
			"naturalResource": true,
			"producedByRecipes": [],
			"consumedByRecipes": [
				"recipe:DT_Recipes_Refining:mat_stainless_steel"
			],
			"droppedByAi": [],
			"droppedByMinerals": [
				"mineral:commonMetal",
				"mineral:rareMetal"
			],
			"directProducerCount": 0,
			"directConsumerCount": 1,
			"aiDropSourceCount": 0,
			"mineralDropSourceCount": 2,
			"directSourceCount": 2,
			"directUseCount": 1,
			"directRecipeInputQuantity": 1,
			"upgradeDemandQuantity": 0,
			"sinkClassification": "not terminal",
			"requiredQuantityByGroup":
			{
				"refining": 1
			},
			"producedQuantityByGroup":
			{
			},
			"producedRecipeGroups": [],
			"consumedRecipeGroups": [
				"refining"
			],
			"downstreamChains": [
				{
					"terminalType": "terminal weapon",
					"terminalItemId": "weapon_blaster",
					"summary": "raw_cobalt x1 -> mat_stainless_steel x2 via DT_Recipes_Refining -> mat_stainless_steel x1 -> weapon_blaster x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_cobalt x1 -> mat_stainless_steel x2 via DT_Recipes_Refining",
						"mat_stainless_steel x1 -> weapon_blaster x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_repair",
					"summary": "raw_cobalt x1 -> mat_stainless_steel x2 via DT_Recipes_Refining -> mat_stainless_steel x1 -> cmp_servo_motors x1 via DT_Recipes_Refining -> cmp_servo_motors x1 -> module_turret_repair x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_cobalt x1 -> mat_stainless_steel x2 via DT_Recipes_Refining",
						"mat_stainless_steel x1 -> cmp_servo_motors x1 via DT_Recipes_Refining",
						"cmp_servo_motors x1 -> module_turret_repair x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "raw_cobalt x1 -> mat_stainless_steel x2 via DT_Recipes_Refining -> mat_stainless_steel x1 -> cmp_servo_motors x1 via DT_Recipes_Refining -> cmp_servo_motors x8 -> UpgradeShip x1 via DT_Recipes_Upgrade_01",
					"steps": [
						"raw_cobalt x1 -> mat_stainless_steel x2 via DT_Recipes_Refining",
						"mat_stainless_steel x1 -> cmp_servo_motors x1 via DT_Recipes_Refining",
						"cmp_servo_motors x8 -> UpgradeShip x1 via DT_Recipes_Upgrade_01"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "raw_cobalt x1 -> mat_stainless_steel x2 via DT_Recipes_Refining -> mat_stainless_steel x1 -> cmp_servo_motors x1 via DT_Recipes_Refining -> cmp_servo_motors x25 -> UpgradeShip x1 via DT_Recipes_Upgrade_02",
					"steps": [
						"raw_cobalt x1 -> mat_stainless_steel x2 via DT_Recipes_Refining",
						"mat_stainless_steel x1 -> cmp_servo_motors x1 via DT_Recipes_Refining",
						"cmp_servo_motors x25 -> UpgradeShip x1 via DT_Recipes_Upgrade_02"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "raw_cobalt x1 -> mat_stainless_steel x2 via DT_Recipes_Refining -> mat_stainless_steel x1 -> cmp_servo_motors x1 via DT_Recipes_Refining -> cmp_servo_motors x62 -> UpgradeShip x1 via DT_Recipes_Upgrade_03",
					"steps": [
						"raw_cobalt x1 -> mat_stainless_steel x2 via DT_Recipes_Refining",
						"mat_stainless_steel x1 -> cmp_servo_motors x1 via DT_Recipes_Refining",
						"cmp_servo_motors x62 -> UpgradeShip x1 via DT_Recipes_Upgrade_03"
					]
				},
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_solar_panel",
					"summary": "raw_cobalt x1 -> mat_stainless_steel x2 via DT_Recipes_Refining -> mat_stainless_steel x2 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x1 -> module_solar_panel x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_cobalt x1 -> mat_stainless_steel x2 via DT_Recipes_Refining",
						"mat_stainless_steel x2 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x1 -> module_solar_panel x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_blaster",
					"summary": "raw_cobalt x1 -> mat_stainless_steel x2 via DT_Recipes_Refining -> mat_stainless_steel x2 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x1 -> module_turret_blaster x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_cobalt x1 -> mat_stainless_steel x2 via DT_Recipes_Refining",
						"mat_stainless_steel x2 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x1 -> module_turret_blaster x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_laser",
					"summary": "raw_cobalt x1 -> mat_stainless_steel x2 via DT_Recipes_Refining -> mat_stainless_steel x2 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x1 -> module_turret_laser x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_cobalt x1 -> mat_stainless_steel x2 via DT_Recipes_Refining",
						"mat_stainless_steel x2 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x1 -> module_turret_laser x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_repair",
					"summary": "raw_cobalt x1 -> mat_stainless_steel x2 via DT_Recipes_Refining -> mat_stainless_steel x2 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x1 -> module_turret_repair x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_cobalt x1 -> mat_stainless_steel x2 via DT_Recipes_Refining",
						"mat_stainless_steel x2 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x1 -> module_turret_repair x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_rocket",
					"summary": "raw_cobalt x1 -> mat_stainless_steel x2 via DT_Recipes_Refining -> mat_stainless_steel x2 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x2 -> module_turret_rocket x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_cobalt x1 -> mat_stainless_steel x2 via DT_Recipes_Refining",
						"mat_stainless_steel x2 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x2 -> module_turret_rocket x1 via DT_Recipes_Crafting"
					]
				}
			],
			"pickupResolved": true,
			"pickupBlueprintName": "BP_Floating_WorldItem_CobaltTraceOre",
			"pickupFailureReason": "",
			"itemData":
			{
				"itemId": "raw_cobalt",
				"displayName": "raw_cobalt",
				"category": "",
				"sourceTable": "/Game/UltimateSurvivalPack/Blueprints/Datatable/Inventory/DT_ItemData_StratoWard.DT_ItemData_StratoWard",
				"raw":
				{
					"name": "raw_cobalt",
					"description": "Hello world!",
					"maximum Stack": 64,
					"item Type": "Other",
					"icon": "/Script/Engine.Texture2D'/Game/StratoWard/UI/Icons/Icon_Cobalt.Icon_Cobalt'",
					"item Mesh": "/Script/Engine.StaticMesh'/Game/StratoWard/Mesh/Loot/Minerals/Cobalt/cobalt__model/StaticMeshes/cobalt__model.cobalt__model'",
					"survival Properties":
					{
						"health to Add": 0,
						"hunger to Add": 0,
						"thirst to Add": 0,
						"cosume Sound": "/Script/Engine.SoundCue'/Game/UltimateSurvivalPack/Demo/Audio/SFX/CUE_EatSound.CUE_EatSound'",
						"effect Time": 0
					},
					"holdable Class": "None",
					"armor Properties":
					{
						"armor to Add": "Head",
						"armor Male Mesh": "None",
						"armor Female Mesh": "None",
						"armor Protection Percent": 0,
						"hide Mesh": [],
						"slots to Add": 0,
						"temperature to Add": 0
					},
					"building Data":
					{
						"build Type": "Building",
						"ghost Mesh": "None",
						"collision Transform":
						{
							"rotation":
							{
								"x": 0,
								"y": -0,
								"z": 0,
								"w": 1
							},
							"translation":
							{
								"x": 0,
								"y": 0,
								"z": 105
							},
							"scale3D":
							{
								"x": 100,
								"y": 100,
								"z": 100
							}
						},
						"final Building Class": "None",
						"health": 500,
						"repair Add Health": 25,
						"support Snapping": false
					},
					"sell Price": 0,
					"itemTypeTag":
					{
						"tagName": "Item.Category.RawResource"
					},
					"tier": 0
				}
			},
			"displayName": "raw_cobalt",
			"category": "",
			"balanceFlags": []
		},
		{
			"key": "item:raw_copper_sulfide",
			"itemId": "raw_copper_sulfide",
			"knownItemData": true,
			"naturalResource": true,
			"producedByRecipes": [],
			"consumedByRecipes": [
				"recipe:DT_Recipes_Refining:mat_copper"
			],
			"droppedByAi": [],
			"droppedByMinerals": [
				"mineral:commonMetal",
				"mineral:rareMetal",
				"mineral:rockyCarbon"
			],
			"directProducerCount": 0,
			"directConsumerCount": 1,
			"aiDropSourceCount": 0,
			"mineralDropSourceCount": 3,
			"directSourceCount": 3,
			"directUseCount": 1,
			"directRecipeInputQuantity": 3,
			"upgradeDemandQuantity": 0,
			"sinkClassification": "not terminal",
			"requiredQuantityByGroup":
			{
				"refining": 3
			},
			"producedQuantityByGroup":
			{
			},
			"producedRecipeGroups": [],
			"consumedRecipeGroups": [
				"refining"
			],
			"downstreamChains": [
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_blaster",
					"summary": "raw_copper_sulfide x3 -> mat_copper x2 via DT_Recipes_Refining -> mat_copper x2 -> cmp_wire_coils x2 via DT_Recipes_Crafting -> cmp_wire_coils x2 -> module_turret_blaster x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_copper_sulfide x3 -> mat_copper x2 via DT_Recipes_Refining",
						"mat_copper x2 -> cmp_wire_coils x2 via DT_Recipes_Crafting",
						"cmp_wire_coils x2 -> module_turret_blaster x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal weapon",
					"terminalItemId": "weapon_blaster",
					"summary": "raw_copper_sulfide x3 -> mat_copper x2 via DT_Recipes_Refining -> mat_copper x2 -> cmp_wire_coils x2 via DT_Recipes_Crafting -> cmp_wire_coils x2 -> weapon_blaster x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_copper_sulfide x3 -> mat_copper x2 via DT_Recipes_Refining",
						"mat_copper x2 -> cmp_wire_coils x2 via DT_Recipes_Crafting",
						"cmp_wire_coils x2 -> weapon_blaster x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "raw_copper_sulfide x3 -> mat_copper x2 via DT_Recipes_Refining -> mat_copper x2 -> cmp_wire_coils x2 via DT_Recipes_Crafting -> cmp_wire_coils x35 -> UpgradeShip x1 via DT_Recipes_Upgrade_01",
					"steps": [
						"raw_copper_sulfide x3 -> mat_copper x2 via DT_Recipes_Refining",
						"mat_copper x2 -> cmp_wire_coils x2 via DT_Recipes_Crafting",
						"cmp_wire_coils x35 -> UpgradeShip x1 via DT_Recipes_Upgrade_01"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "raw_copper_sulfide x3 -> mat_copper x2 via DT_Recipes_Refining -> mat_copper x2 -> cmp_wire_coils x2 via DT_Recipes_Crafting -> cmp_wire_coils x98 -> UpgradeShip x1 via DT_Recipes_Upgrade_02",
					"steps": [
						"raw_copper_sulfide x3 -> mat_copper x2 via DT_Recipes_Refining",
						"mat_copper x2 -> cmp_wire_coils x2 via DT_Recipes_Crafting",
						"cmp_wire_coils x98 -> UpgradeShip x1 via DT_Recipes_Upgrade_02"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "raw_copper_sulfide x3 -> mat_copper x2 via DT_Recipes_Refining -> mat_copper x2 -> cmp_wire_coils x2 via DT_Recipes_Crafting -> cmp_wire_coils x230 -> UpgradeShip x1 via DT_Recipes_Upgrade_03",
					"steps": [
						"raw_copper_sulfide x3 -> mat_copper x2 via DT_Recipes_Refining",
						"mat_copper x2 -> cmp_wire_coils x2 via DT_Recipes_Crafting",
						"cmp_wire_coils x230 -> UpgradeShip x1 via DT_Recipes_Upgrade_03"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "raw_copper_sulfide x3 -> mat_copper x2 via DT_Recipes_Refining -> mat_copper x1 -> cmp_circuit_boards x1 via DT_Recipes_Refining -> cmp_circuit_boards x4 -> UpgradeShip x1 via DT_Recipes_Upgrade_01",
					"steps": [
						"raw_copper_sulfide x3 -> mat_copper x2 via DT_Recipes_Refining",
						"mat_copper x1 -> cmp_circuit_boards x1 via DT_Recipes_Refining",
						"cmp_circuit_boards x4 -> UpgradeShip x1 via DT_Recipes_Upgrade_01"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "raw_copper_sulfide x3 -> mat_copper x2 via DT_Recipes_Refining -> mat_copper x1 -> cmp_circuit_boards x1 via DT_Recipes_Refining -> cmp_circuit_boards x15 -> UpgradeShip x1 via DT_Recipes_Upgrade_02",
					"steps": [
						"raw_copper_sulfide x3 -> mat_copper x2 via DT_Recipes_Refining",
						"mat_copper x1 -> cmp_circuit_boards x1 via DT_Recipes_Refining",
						"cmp_circuit_boards x15 -> UpgradeShip x1 via DT_Recipes_Upgrade_02"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "raw_copper_sulfide x3 -> mat_copper x2 via DT_Recipes_Refining -> mat_copper x1 -> cmp_circuit_boards x1 via DT_Recipes_Refining -> cmp_circuit_boards x38 -> UpgradeShip x1 via DT_Recipes_Upgrade_03",
					"steps": [
						"raw_copper_sulfide x3 -> mat_copper x2 via DT_Recipes_Refining",
						"mat_copper x1 -> cmp_circuit_boards x1 via DT_Recipes_Refining",
						"cmp_circuit_boards x38 -> UpgradeShip x1 via DT_Recipes_Upgrade_03"
					]
				}
			],
			"pickupResolved": false,
			"pickupBlueprintName": "",
			"pickupFailureReason": "raw_copper_sulfide: multiple pickup BP matches",
			"itemData":
			{
				"itemId": "raw_copper_sulfide",
				"displayName": "raw_copper_sulfide",
				"category": "",
				"sourceTable": "/Game/UltimateSurvivalPack/Blueprints/Datatable/Inventory/DT_ItemData_StratoWard.DT_ItemData_StratoWard",
				"raw":
				{
					"name": "raw_copper_sulfide",
					"description": "Hello world!",
					"maximum Stack": 64,
					"item Type": "Other",
					"icon": "/Script/Engine.Texture2D'/Game/StratoWard/UI/Icons/Icon_CopperSulfide.Icon_CopperSulfide'",
					"item Mesh": "/Script/Engine.StaticMesh'/Game/StratoWard/Mesh/Loot/Minerals/Copper_Sulfide/copper_sulfide_model/StaticMeshes/copper_sulfide_model.copper_sulfide_model'",
					"survival Properties":
					{
						"health to Add": 0,
						"hunger to Add": 0,
						"thirst to Add": 0,
						"cosume Sound": "/Script/Engine.SoundCue'/Game/UltimateSurvivalPack/Demo/Audio/SFX/CUE_EatSound.CUE_EatSound'",
						"effect Time": 0
					},
					"holdable Class": "None",
					"armor Properties":
					{
						"armor to Add": "Head",
						"armor Male Mesh": "None",
						"armor Female Mesh": "None",
						"armor Protection Percent": 0,
						"hide Mesh": [],
						"slots to Add": 0,
						"temperature to Add": 0
					},
					"building Data":
					{
						"build Type": "Building",
						"ghost Mesh": "None",
						"collision Transform":
						{
							"rotation":
							{
								"x": 0,
								"y": -0,
								"z": 0,
								"w": 1
							},
							"translation":
							{
								"x": 0,
								"y": 0,
								"z": 105
							},
							"scale3D":
							{
								"x": 100,
								"y": 100,
								"z": 100
							}
						},
						"final Building Class": "None",
						"health": 500,
						"repair Add Health": 25,
						"support Snapping": false
					},
					"sell Price": 0,
					"itemTypeTag":
					{
						"tagName": "Item.Category.RawResource"
					},
					"tier": 0
				}
			},
			"displayName": "raw_copper_sulfide",
			"category": "",
			"balanceFlags": []
		},
		{
			"key": "item:raw_hydrocarbon_ice",
			"itemId": "raw_hydrocarbon_ice",
			"knownItemData": true,
			"naturalResource": true,
			"producedByRecipes": [],
			"consumedByRecipes": [
				"recipe:DT_Recipes_Crafting:con_fuel",
				"recipe:DT_Recipes_Refining:mat_plastic"
			],
			"droppedByAi": [],
			"droppedByMinerals": [
				"mineral:rockyCarbon",
				"mineral:volatileIce"
			],
			"directProducerCount": 0,
			"directConsumerCount": 2,
			"aiDropSourceCount": 0,
			"mineralDropSourceCount": 2,
			"directSourceCount": 2,
			"directUseCount": 2,
			"directRecipeInputQuantity": 6,
			"upgradeDemandQuantity": 0,
			"sinkClassification": "not terminal",
			"requiredQuantityByGroup":
			{
				"crafting": 4,
				"refining": 2
			},
			"producedQuantityByGroup":
			{
			},
			"producedRecipeGroups": [],
			"consumedRecipeGroups": [
				"crafting",
				"refining"
			],
			"downstreamChains": [
				{
					"terminalType": "terminal consumable",
					"terminalItemId": "con_fuel",
					"summary": "raw_hydrocarbon_ice x4 -> con_fuel x1300 via DT_Recipes_Crafting",
					"steps": [
						"raw_hydrocarbon_ice x4 -> con_fuel x1300 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal consumable",
					"terminalItemId": "con_water_pack",
					"summary": "raw_hydrocarbon_ice x2 -> mat_plastic x3 via DT_Recipes_Refining -> mat_plastic x1 -> con_water_pack x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_hydrocarbon_ice x2 -> mat_plastic x3 via DT_Recipes_Refining",
						"mat_plastic x1 -> con_water_pack x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "raw_hydrocarbon_ice x2 -> mat_plastic x3 via DT_Recipes_Refining -> mat_plastic x2 -> cmp_circuit_boards x1 via DT_Recipes_Refining -> cmp_circuit_boards x4 -> UpgradeShip x1 via DT_Recipes_Upgrade_01",
					"steps": [
						"raw_hydrocarbon_ice x2 -> mat_plastic x3 via DT_Recipes_Refining",
						"mat_plastic x2 -> cmp_circuit_boards x1 via DT_Recipes_Refining",
						"cmp_circuit_boards x4 -> UpgradeShip x1 via DT_Recipes_Upgrade_01"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "raw_hydrocarbon_ice x2 -> mat_plastic x3 via DT_Recipes_Refining -> mat_plastic x2 -> cmp_circuit_boards x1 via DT_Recipes_Refining -> cmp_circuit_boards x15 -> UpgradeShip x1 via DT_Recipes_Upgrade_02",
					"steps": [
						"raw_hydrocarbon_ice x2 -> mat_plastic x3 via DT_Recipes_Refining",
						"mat_plastic x2 -> cmp_circuit_boards x1 via DT_Recipes_Refining",
						"cmp_circuit_boards x15 -> UpgradeShip x1 via DT_Recipes_Upgrade_02"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "raw_hydrocarbon_ice x2 -> mat_plastic x3 via DT_Recipes_Refining -> mat_plastic x2 -> cmp_circuit_boards x1 via DT_Recipes_Refining -> cmp_circuit_boards x38 -> UpgradeShip x1 via DT_Recipes_Upgrade_03",
					"steps": [
						"raw_hydrocarbon_ice x2 -> mat_plastic x3 via DT_Recipes_Refining",
						"mat_plastic x2 -> cmp_circuit_boards x1 via DT_Recipes_Refining",
						"cmp_circuit_boards x38 -> UpgradeShip x1 via DT_Recipes_Upgrade_03"
					]
				}
			],
			"pickupResolved": true,
			"pickupBlueprintName": "BP_Floating_WorldItem_VolatileHydrocarbonIce",
			"pickupFailureReason": "",
			"itemData":
			{
				"itemId": "raw_hydrocarbon_ice",
				"displayName": "raw_hydrocarbon_ice",
				"category": "",
				"sourceTable": "/Game/UltimateSurvivalPack/Blueprints/Datatable/Inventory/DT_ItemData_StratoWard.DT_ItemData_StratoWard",
				"raw":
				{
					"name": "raw_hydrocarbon_ice",
					"description": "Hello world!",
					"maximum Stack": 64,
					"item Type": "Other",
					"icon": "/Script/Engine.Texture2D'/Game/StratoWard/UI/Icons/Icon_HydroIce.Icon_HydroIce'",
					"item Mesh": "/Script/Engine.StaticMesh'/Game/StratoWard/Mesh/Loot/Minerals/HydroIce/Hydro_Ice_model/StaticMeshes/Hydro_Ice_model.Hydro_Ice_model'",
					"survival Properties":
					{
						"health to Add": 0,
						"hunger to Add": 0,
						"thirst to Add": 0,
						"cosume Sound": "/Script/Engine.SoundCue'/Game/UltimateSurvivalPack/Demo/Audio/SFX/CUE_EatSound.CUE_EatSound'",
						"effect Time": 0
					},
					"holdable Class": "None",
					"armor Properties":
					{
						"armor to Add": "Head",
						"armor Male Mesh": "None",
						"armor Female Mesh": "None",
						"armor Protection Percent": 0,
						"hide Mesh": [],
						"slots to Add": 0,
						"temperature to Add": 0
					},
					"building Data":
					{
						"build Type": "Building",
						"ghost Mesh": "None",
						"collision Transform":
						{
							"rotation":
							{
								"x": 0,
								"y": -0,
								"z": 0,
								"w": 1
							},
							"translation":
							{
								"x": 0,
								"y": 0,
								"z": 105
							},
							"scale3D":
							{
								"x": 100,
								"y": 100,
								"z": 100
							}
						},
						"final Building Class": "None",
						"health": 500,
						"repair Add Health": 25,
						"support Snapping": false
					},
					"sell Price": 0,
					"itemTypeTag":
					{
						"tagName": "Item.Category.RawResource"
					},
					"tier": 0
				}
			},
			"displayName": "raw_hydrocarbon_ice",
			"category": "",
			"balanceFlags": []
		},
		{
			"key": "item:raw_lanthanide",
			"itemId": "raw_lanthanide",
			"knownItemData": true,
			"naturalResource": true,
			"producedByRecipes": [],
			"consumedByRecipes": [
				"recipe:DT_Recipes_Refining:mat_rare_earth"
			],
			"droppedByAi": [],
			"droppedByMinerals": [
				"mineral:commonMetal",
				"mineral:rareMetal"
			],
			"directProducerCount": 0,
			"directConsumerCount": 1,
			"aiDropSourceCount": 0,
			"mineralDropSourceCount": 2,
			"directSourceCount": 2,
			"directUseCount": 1,
			"directRecipeInputQuantity": 3,
			"upgradeDemandQuantity": 0,
			"sinkClassification": "not terminal",
			"requiredQuantityByGroup":
			{
				"refining": 3
			},
			"producedQuantityByGroup":
			{
			},
			"producedRecipeGroups": [],
			"consumedRecipeGroups": [
				"refining"
			],
			"downstreamChains": [
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_laser",
					"summary": "raw_lanthanide x3 -> mat_rare_earth x1 via DT_Recipes_Refining -> mat_rare_earth x1 -> module_turret_laser x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_lanthanide x3 -> mat_rare_earth x1 via DT_Recipes_Refining",
						"mat_rare_earth x1 -> module_turret_laser x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal weapon",
					"terminalItemId": "weapon_laser",
					"summary": "raw_lanthanide x3 -> mat_rare_earth x1 via DT_Recipes_Refining -> mat_rare_earth x2 -> weapon_laser x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_lanthanide x3 -> mat_rare_earth x1 via DT_Recipes_Refining",
						"mat_rare_earth x2 -> weapon_laser x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_laser",
					"summary": "raw_lanthanide x3 -> mat_rare_earth x1 via DT_Recipes_Refining -> mat_rare_earth x1 -> cmp_microchips x1 via DT_Recipes_Refining -> cmp_microchips x2 -> module_turret_laser x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_lanthanide x3 -> mat_rare_earth x1 via DT_Recipes_Refining",
						"mat_rare_earth x1 -> cmp_microchips x1 via DT_Recipes_Refining",
						"cmp_microchips x2 -> module_turret_laser x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal weapon",
					"terminalItemId": "weapon_laser",
					"summary": "raw_lanthanide x3 -> mat_rare_earth x1 via DT_Recipes_Refining -> mat_rare_earth x1 -> cmp_microchips x1 via DT_Recipes_Refining -> cmp_microchips x2 -> weapon_laser x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_lanthanide x3 -> mat_rare_earth x1 via DT_Recipes_Refining",
						"mat_rare_earth x1 -> cmp_microchips x1 via DT_Recipes_Refining",
						"cmp_microchips x2 -> weapon_laser x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_repair",
					"summary": "raw_lanthanide x3 -> mat_rare_earth x1 via DT_Recipes_Refining -> mat_rare_earth x1 -> cmp_servo_motors x1 via DT_Recipes_Refining -> cmp_servo_motors x1 -> module_turret_repair x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_lanthanide x3 -> mat_rare_earth x1 via DT_Recipes_Refining",
						"mat_rare_earth x1 -> cmp_servo_motors x1 via DT_Recipes_Refining",
						"cmp_servo_motors x1 -> module_turret_repair x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "raw_lanthanide x3 -> mat_rare_earth x1 via DT_Recipes_Refining -> mat_rare_earth x1 -> cmp_servo_motors x1 via DT_Recipes_Refining -> cmp_servo_motors x8 -> UpgradeShip x1 via DT_Recipes_Upgrade_01",
					"steps": [
						"raw_lanthanide x3 -> mat_rare_earth x1 via DT_Recipes_Refining",
						"mat_rare_earth x1 -> cmp_servo_motors x1 via DT_Recipes_Refining",
						"cmp_servo_motors x8 -> UpgradeShip x1 via DT_Recipes_Upgrade_01"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "raw_lanthanide x3 -> mat_rare_earth x1 via DT_Recipes_Refining -> mat_rare_earth x1 -> cmp_servo_motors x1 via DT_Recipes_Refining -> cmp_servo_motors x25 -> UpgradeShip x1 via DT_Recipes_Upgrade_02",
					"steps": [
						"raw_lanthanide x3 -> mat_rare_earth x1 via DT_Recipes_Refining",
						"mat_rare_earth x1 -> cmp_servo_motors x1 via DT_Recipes_Refining",
						"cmp_servo_motors x25 -> UpgradeShip x1 via DT_Recipes_Upgrade_02"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "raw_lanthanide x3 -> mat_rare_earth x1 via DT_Recipes_Refining -> mat_rare_earth x1 -> cmp_servo_motors x1 via DT_Recipes_Refining -> cmp_servo_motors x62 -> UpgradeShip x1 via DT_Recipes_Upgrade_03",
					"steps": [
						"raw_lanthanide x3 -> mat_rare_earth x1 via DT_Recipes_Refining",
						"mat_rare_earth x1 -> cmp_servo_motors x1 via DT_Recipes_Refining",
						"cmp_servo_motors x62 -> UpgradeShip x1 via DT_Recipes_Upgrade_03"
					]
				}
			],
			"pickupResolved": true,
			"pickupBlueprintName": "BP_Floating_WorldItem_LanthanideDust",
			"pickupFailureReason": "",
			"itemData":
			{
				"itemId": "raw_lanthanide",
				"displayName": "raw_lanthanide",
				"category": "",
				"sourceTable": "/Game/UltimateSurvivalPack/Blueprints/Datatable/Inventory/DT_ItemData_StratoWard.DT_ItemData_StratoWard",
				"raw":
				{
					"name": "raw_lanthanide",
					"description": "Hello world!",
					"maximum Stack": 64,
					"item Type": "Other",
					"icon": "/Script/Engine.Texture2D'/Game/StratoWard/UI/Icons/Icon_Lathanide.Icon_Lathanide'",
					"item Mesh": "/Script/Engine.StaticMesh'/Game/StratoWard/Mesh/Loot/Minerals/Lathanide/Lathanide_model/StaticMeshes/Lathanide_model.Lathanide_model'",
					"survival Properties":
					{
						"health to Add": 0,
						"hunger to Add": 0,
						"thirst to Add": 0,
						"cosume Sound": "/Script/Engine.SoundCue'/Game/UltimateSurvivalPack/Demo/Audio/SFX/CUE_EatSound.CUE_EatSound'",
						"effect Time": 0
					},
					"holdable Class": "None",
					"armor Properties":
					{
						"armor to Add": "Head",
						"armor Male Mesh": "None",
						"armor Female Mesh": "None",
						"armor Protection Percent": 0,
						"hide Mesh": [],
						"slots to Add": 0,
						"temperature to Add": 0
					},
					"building Data":
					{
						"build Type": "Building",
						"ghost Mesh": "None",
						"collision Transform":
						{
							"rotation":
							{
								"x": 0,
								"y": -0,
								"z": 0,
								"w": 1
							},
							"translation":
							{
								"x": 0,
								"y": 0,
								"z": 105
							},
							"scale3D":
							{
								"x": 100,
								"y": 100,
								"z": 100
							}
						},
						"final Building Class": "None",
						"health": 500,
						"repair Add Health": 25,
						"support Snapping": false
					},
					"sell Price": 0,
					"itemTypeTag":
					{
						"tagName": "Item.Category.RawResource"
					},
					"tier": 0
				}
			},
			"displayName": "raw_lanthanide",
			"category": "",
			"balanceFlags": []
		},
		{
			"key": "item:raw_lithium_ice",
			"itemId": "raw_lithium_ice",
			"knownItemData": true,
			"naturalResource": true,
			"producedByRecipes": [],
			"consumedByRecipes": [
				"recipe:DT_Recipes_Refining:cmp_thruster_parts"
			],
			"droppedByAi": [],
			"droppedByMinerals": [
				"mineral:volatileIce"
			],
			"directProducerCount": 0,
			"directConsumerCount": 1,
			"aiDropSourceCount": 0,
			"mineralDropSourceCount": 1,
			"directSourceCount": 1,
			"directUseCount": 1,
			"directRecipeInputQuantity": 1,
			"upgradeDemandQuantity": 0,
			"sinkClassification": "not terminal",
			"requiredQuantityByGroup":
			{
				"refining": 1
			},
			"producedQuantityByGroup":
			{
			},
			"producedRecipeGroups": [],
			"consumedRecipeGroups": [
				"refining"
			],
			"downstreamChains": [
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_rocket",
					"summary": "raw_lithium_ice x1 -> cmp_thruster_parts x1 via DT_Recipes_Refining -> cmp_thruster_parts x1 -> module_turret_rocket x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_lithium_ice x1 -> cmp_thruster_parts x1 via DT_Recipes_Refining",
						"cmp_thruster_parts x1 -> module_turret_rocket x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal weapon",
					"terminalItemId": "weapon_rocket",
					"summary": "raw_lithium_ice x1 -> cmp_thruster_parts x1 via DT_Recipes_Refining -> cmp_thruster_parts x1 -> weapon_rocket x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_lithium_ice x1 -> cmp_thruster_parts x1 via DT_Recipes_Refining",
						"cmp_thruster_parts x1 -> weapon_rocket x1 via DT_Recipes_Crafting"
					]
				}
			],
			"pickupResolved": false,
			"pickupBlueprintName": "",
			"pickupFailureReason": "raw_lithium_ice: no pickup BP match",
			"itemData":
			{
				"itemId": "raw_lithium_ice",
				"displayName": "raw_lithium_ice",
				"category": "",
				"sourceTable": "/Game/UltimateSurvivalPack/Blueprints/Datatable/Inventory/DT_ItemData_StratoWard.DT_ItemData_StratoWard",
				"raw":
				{
					"name": "raw_lithium_ice",
					"description": "Hello world!",
					"maximum Stack": 64,
					"item Type": "Other",
					"icon": "/Script/Engine.Texture2D'/Game/StratoWard/UI/Icons/Icon_LithiumCrystal.Icon_LithiumCrystal'",
					"item Mesh": "/Script/Engine.StaticMesh'/Game/StratoWard/Mesh/Loot/Minerals/Lithium_Crystal/lithium_crystal_model/StaticMeshes/lithium_crystal_model.lithium_crystal_model'",
					"survival Properties":
					{
						"health to Add": 0,
						"hunger to Add": 0,
						"thirst to Add": 0,
						"cosume Sound": "/Script/Engine.SoundCue'/Game/UltimateSurvivalPack/Demo/Audio/SFX/CUE_EatSound.CUE_EatSound'",
						"effect Time": 0
					},
					"holdable Class": "None",
					"armor Properties":
					{
						"armor to Add": "Head",
						"armor Male Mesh": "None",
						"armor Female Mesh": "None",
						"armor Protection Percent": 0,
						"hide Mesh": [],
						"slots to Add": 0,
						"temperature to Add": 0
					},
					"building Data":
					{
						"build Type": "Building",
						"ghost Mesh": "None",
						"collision Transform":
						{
							"rotation":
							{
								"x": 0,
								"y": -0,
								"z": 0,
								"w": 1
							},
							"translation":
							{
								"x": 0,
								"y": 0,
								"z": 105
							},
							"scale3D":
							{
								"x": 100,
								"y": 100,
								"z": 100
							}
						},
						"final Building Class": "None",
						"health": 500,
						"repair Add Health": 25,
						"support Snapping": false
					},
					"sell Price": 0,
					"itemTypeTag":
					{
						"tagName": "Item.Category.RawResource"
					},
					"tier": 0
				}
			},
			"displayName": "raw_lithium_ice",
			"category": "",
			"balanceFlags": []
		},
		{
			"key": "item:raw_nickel_iron",
			"itemId": "raw_nickel_iron",
			"knownItemData": true,
			"naturalResource": true,
			"producedByRecipes": [],
			"consumedByRecipes": [
				"recipe:DT_Recipes_Refining:mat_stainless_steel"
			],
			"droppedByAi": [],
			"droppedByMinerals": [
				"mineral:commonMetal",
				"mineral:rareMetal",
				"mineral:rockyCarbon",
				"mineral:volatileIce"
			],
			"directProducerCount": 0,
			"directConsumerCount": 1,
			"aiDropSourceCount": 0,
			"mineralDropSourceCount": 4,
			"directSourceCount": 4,
			"directUseCount": 1,
			"directRecipeInputQuantity": 4,
			"upgradeDemandQuantity": 0,
			"sinkClassification": "not terminal",
			"requiredQuantityByGroup":
			{
				"refining": 4
			},
			"producedQuantityByGroup":
			{
			},
			"producedRecipeGroups": [],
			"consumedRecipeGroups": [
				"refining"
			],
			"downstreamChains": [
				{
					"terminalType": "terminal weapon",
					"terminalItemId": "weapon_blaster",
					"summary": "raw_nickel_iron x4 -> mat_stainless_steel x2 via DT_Recipes_Refining -> mat_stainless_steel x1 -> weapon_blaster x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_nickel_iron x4 -> mat_stainless_steel x2 via DT_Recipes_Refining",
						"mat_stainless_steel x1 -> weapon_blaster x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_repair",
					"summary": "raw_nickel_iron x4 -> mat_stainless_steel x2 via DT_Recipes_Refining -> mat_stainless_steel x1 -> cmp_servo_motors x1 via DT_Recipes_Refining -> cmp_servo_motors x1 -> module_turret_repair x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_nickel_iron x4 -> mat_stainless_steel x2 via DT_Recipes_Refining",
						"mat_stainless_steel x1 -> cmp_servo_motors x1 via DT_Recipes_Refining",
						"cmp_servo_motors x1 -> module_turret_repair x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "raw_nickel_iron x4 -> mat_stainless_steel x2 via DT_Recipes_Refining -> mat_stainless_steel x1 -> cmp_servo_motors x1 via DT_Recipes_Refining -> cmp_servo_motors x8 -> UpgradeShip x1 via DT_Recipes_Upgrade_01",
					"steps": [
						"raw_nickel_iron x4 -> mat_stainless_steel x2 via DT_Recipes_Refining",
						"mat_stainless_steel x1 -> cmp_servo_motors x1 via DT_Recipes_Refining",
						"cmp_servo_motors x8 -> UpgradeShip x1 via DT_Recipes_Upgrade_01"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "raw_nickel_iron x4 -> mat_stainless_steel x2 via DT_Recipes_Refining -> mat_stainless_steel x1 -> cmp_servo_motors x1 via DT_Recipes_Refining -> cmp_servo_motors x25 -> UpgradeShip x1 via DT_Recipes_Upgrade_02",
					"steps": [
						"raw_nickel_iron x4 -> mat_stainless_steel x2 via DT_Recipes_Refining",
						"mat_stainless_steel x1 -> cmp_servo_motors x1 via DT_Recipes_Refining",
						"cmp_servo_motors x25 -> UpgradeShip x1 via DT_Recipes_Upgrade_02"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "raw_nickel_iron x4 -> mat_stainless_steel x2 via DT_Recipes_Refining -> mat_stainless_steel x1 -> cmp_servo_motors x1 via DT_Recipes_Refining -> cmp_servo_motors x62 -> UpgradeShip x1 via DT_Recipes_Upgrade_03",
					"steps": [
						"raw_nickel_iron x4 -> mat_stainless_steel x2 via DT_Recipes_Refining",
						"mat_stainless_steel x1 -> cmp_servo_motors x1 via DT_Recipes_Refining",
						"cmp_servo_motors x62 -> UpgradeShip x1 via DT_Recipes_Upgrade_03"
					]
				},
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_solar_panel",
					"summary": "raw_nickel_iron x4 -> mat_stainless_steel x2 via DT_Recipes_Refining -> mat_stainless_steel x2 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x1 -> module_solar_panel x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_nickel_iron x4 -> mat_stainless_steel x2 via DT_Recipes_Refining",
						"mat_stainless_steel x2 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x1 -> module_solar_panel x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_blaster",
					"summary": "raw_nickel_iron x4 -> mat_stainless_steel x2 via DT_Recipes_Refining -> mat_stainless_steel x2 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x1 -> module_turret_blaster x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_nickel_iron x4 -> mat_stainless_steel x2 via DT_Recipes_Refining",
						"mat_stainless_steel x2 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x1 -> module_turret_blaster x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_laser",
					"summary": "raw_nickel_iron x4 -> mat_stainless_steel x2 via DT_Recipes_Refining -> mat_stainless_steel x2 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x1 -> module_turret_laser x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_nickel_iron x4 -> mat_stainless_steel x2 via DT_Recipes_Refining",
						"mat_stainless_steel x2 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x1 -> module_turret_laser x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_repair",
					"summary": "raw_nickel_iron x4 -> mat_stainless_steel x2 via DT_Recipes_Refining -> mat_stainless_steel x2 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x1 -> module_turret_repair x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_nickel_iron x4 -> mat_stainless_steel x2 via DT_Recipes_Refining",
						"mat_stainless_steel x2 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x1 -> module_turret_repair x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_rocket",
					"summary": "raw_nickel_iron x4 -> mat_stainless_steel x2 via DT_Recipes_Refining -> mat_stainless_steel x2 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x2 -> module_turret_rocket x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_nickel_iron x4 -> mat_stainless_steel x2 via DT_Recipes_Refining",
						"mat_stainless_steel x2 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x2 -> module_turret_rocket x1 via DT_Recipes_Crafting"
					]
				}
			],
			"pickupResolved": true,
			"pickupBlueprintName": "BP_Floating_WorldItem_NickelIronAlloyChunk",
			"pickupFailureReason": "",
			"itemData":
			{
				"itemId": "raw_nickel_iron",
				"displayName": "raw_nickel_iron",
				"category": "",
				"sourceTable": "/Game/UltimateSurvivalPack/Blueprints/Datatable/Inventory/DT_ItemData_StratoWard.DT_ItemData_StratoWard",
				"raw":
				{
					"name": "raw_nickel_iron",
					"description": "Hello world!",
					"maximum Stack": 64,
					"item Type": "Other",
					"icon": "/Script/Engine.Texture2D'/Game/StratoWard/UI/Icons/Icon_Nickel_Iron.Icon_Nickel_Iron'",
					"item Mesh": "/Script/Engine.StaticMesh'/Game/StratoWard/Mesh/Loot/Minerals/Nickel_Iron/Nickel_Iron_model/StaticMeshes/Nickel_Iron_model.Nickel_Iron_model'",
					"survival Properties":
					{
						"health to Add": 0,
						"hunger to Add": 0,
						"thirst to Add": 0,
						"cosume Sound": "/Script/Engine.SoundCue'/Game/UltimateSurvivalPack/Demo/Audio/SFX/CUE_EatSound.CUE_EatSound'",
						"effect Time": 0
					},
					"holdable Class": "None",
					"armor Properties":
					{
						"armor to Add": "Head",
						"armor Male Mesh": "None",
						"armor Female Mesh": "None",
						"armor Protection Percent": 0,
						"hide Mesh": [],
						"slots to Add": 0,
						"temperature to Add": 0
					},
					"building Data":
					{
						"build Type": "Building",
						"ghost Mesh": "None",
						"collision Transform":
						{
							"rotation":
							{
								"x": 0,
								"y": -0,
								"z": 0,
								"w": 1
							},
							"translation":
							{
								"x": 0,
								"y": 0,
								"z": 105
							},
							"scale3D":
							{
								"x": 100,
								"y": 100,
								"z": 100
							}
						},
						"final Building Class": "None",
						"health": 500,
						"repair Add Health": 25,
						"support Snapping": false
					},
					"sell Price": 0,
					"itemTypeTag":
					{
						"tagName": "Item.Category.RawResource"
					},
					"tier": 0
				}
			},
			"displayName": "raw_nickel_iron",
			"category": "",
			"balanceFlags": []
		},
		{
			"key": "item:raw_silicate_sand",
			"itemId": "raw_silicate_sand",
			"knownItemData": true,
			"naturalResource": true,
			"producedByRecipes": [],
			"consumedByRecipes": [
				"recipe:DT_Recipes_Refining:mat_silicon"
			],
			"droppedByAi": [],
			"droppedByMinerals": [
				"mineral:rockyCarbon",
				"mineral:volatileIce"
			],
			"directProducerCount": 0,
			"directConsumerCount": 1,
			"aiDropSourceCount": 0,
			"mineralDropSourceCount": 2,
			"directSourceCount": 2,
			"directUseCount": 1,
			"directRecipeInputQuantity": 4,
			"upgradeDemandQuantity": 0,
			"sinkClassification": "not terminal",
			"requiredQuantityByGroup":
			{
				"refining": 4
			},
			"producedQuantityByGroup":
			{
			},
			"producedRecipeGroups": [],
			"consumedRecipeGroups": [
				"refining"
			],
			"downstreamChains": [
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_solar_panel",
					"summary": "raw_silicate_sand x4 -> mat_silicon x2 via DT_Recipes_Refining -> mat_silicon x2 -> module_solar_panel x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_silicate_sand x4 -> mat_silicon x2 via DT_Recipes_Refining",
						"mat_silicon x2 -> module_solar_panel x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "raw_silicate_sand x4 -> mat_silicon x2 via DT_Recipes_Refining -> mat_silicon x1 -> cmp_circuit_boards x1 via DT_Recipes_Refining -> cmp_circuit_boards x4 -> UpgradeShip x1 via DT_Recipes_Upgrade_01",
					"steps": [
						"raw_silicate_sand x4 -> mat_silicon x2 via DT_Recipes_Refining",
						"mat_silicon x1 -> cmp_circuit_boards x1 via DT_Recipes_Refining",
						"cmp_circuit_boards x4 -> UpgradeShip x1 via DT_Recipes_Upgrade_01"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "raw_silicate_sand x4 -> mat_silicon x2 via DT_Recipes_Refining -> mat_silicon x1 -> cmp_circuit_boards x1 via DT_Recipes_Refining -> cmp_circuit_boards x15 -> UpgradeShip x1 via DT_Recipes_Upgrade_02",
					"steps": [
						"raw_silicate_sand x4 -> mat_silicon x2 via DT_Recipes_Refining",
						"mat_silicon x1 -> cmp_circuit_boards x1 via DT_Recipes_Refining",
						"cmp_circuit_boards x15 -> UpgradeShip x1 via DT_Recipes_Upgrade_02"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "raw_silicate_sand x4 -> mat_silicon x2 via DT_Recipes_Refining -> mat_silicon x1 -> cmp_circuit_boards x1 via DT_Recipes_Refining -> cmp_circuit_boards x38 -> UpgradeShip x1 via DT_Recipes_Upgrade_03",
					"steps": [
						"raw_silicate_sand x4 -> mat_silicon x2 via DT_Recipes_Refining",
						"mat_silicon x1 -> cmp_circuit_boards x1 via DT_Recipes_Refining",
						"cmp_circuit_boards x38 -> UpgradeShip x1 via DT_Recipes_Upgrade_03"
					]
				},
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_laser",
					"summary": "raw_silicate_sand x4 -> mat_silicon x2 via DT_Recipes_Refining -> mat_silicon x2 -> cmp_microchips x1 via DT_Recipes_Refining -> cmp_microchips x2 -> module_turret_laser x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_silicate_sand x4 -> mat_silicon x2 via DT_Recipes_Refining",
						"mat_silicon x2 -> cmp_microchips x1 via DT_Recipes_Refining",
						"cmp_microchips x2 -> module_turret_laser x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal weapon",
					"terminalItemId": "weapon_laser",
					"summary": "raw_silicate_sand x4 -> mat_silicon x2 via DT_Recipes_Refining -> mat_silicon x2 -> cmp_microchips x1 via DT_Recipes_Refining -> cmp_microchips x2 -> weapon_laser x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_silicate_sand x4 -> mat_silicon x2 via DT_Recipes_Refining",
						"mat_silicon x2 -> cmp_microchips x1 via DT_Recipes_Refining",
						"cmp_microchips x2 -> weapon_laser x1 via DT_Recipes_Crafting"
					]
				}
			],
			"pickupResolved": true,
			"pickupBlueprintName": "BP_Floating_WorldItem_SilicateSand",
			"pickupFailureReason": "",
			"itemData":
			{
				"itemId": "raw_silicate_sand",
				"displayName": "raw_silicate_sand",
				"category": "",
				"sourceTable": "/Game/UltimateSurvivalPack/Blueprints/Datatable/Inventory/DT_ItemData_StratoWard.DT_ItemData_StratoWard",
				"raw":
				{
					"name": "raw_silicate_sand",
					"description": "Hello world!",
					"maximum Stack": 64,
					"item Type": "Other",
					"icon": "/Script/Engine.Texture2D'/Game/StratoWard/UI/Icons/Icon_Raw_Silicate.Icon_Raw_Silicate'",
					"item Mesh": "/Script/Engine.StaticMesh'/Game/StratoWard/Mesh/Loot/Minerals/Silicate/silicate_model/StaticMeshes/silicate_model.silicate_model'",
					"survival Properties":
					{
						"health to Add": 0,
						"hunger to Add": 0,
						"thirst to Add": 0,
						"cosume Sound": "/Script/Engine.SoundCue'/Game/UltimateSurvivalPack/Demo/Audio/SFX/CUE_EatSound.CUE_EatSound'",
						"effect Time": 0
					},
					"holdable Class": "None",
					"armor Properties":
					{
						"armor to Add": "Head",
						"armor Male Mesh": "None",
						"armor Female Mesh": "None",
						"armor Protection Percent": 0,
						"hide Mesh": [],
						"slots to Add": 0,
						"temperature to Add": 0
					},
					"building Data":
					{
						"build Type": "Building",
						"ghost Mesh": "None",
						"collision Transform":
						{
							"rotation":
							{
								"x": 0,
								"y": -0,
								"z": 0,
								"w": 1
							},
							"translation":
							{
								"x": 0,
								"y": 0,
								"z": 105
							},
							"scale3D":
							{
								"x": 100,
								"y": 100,
								"z": 100
							}
						},
						"final Building Class": "None",
						"health": 500,
						"repair Add Health": 25,
						"support Snapping": false
					},
					"sell Price": 0,
					"itemTypeTag":
					{
						"tagName": "Item.Category.RawResource"
					},
					"tier": 0
				}
			},
			"displayName": "raw_silicate_sand",
			"category": "",
			"balanceFlags": []
		},
		{
			"key": "item:raw_slime",
			"itemId": "raw_slime",
			"knownItemData": true,
			"naturalResource": true,
			"producedByRecipes": [],
			"consumedByRecipes": [
				"recipe:DT_Recipes_Crafting:con_nutrient_paste",
				"recipe:DT_Recipes_Crafting:con_protein_bar",
				"recipe:DT_Recipes_Crafting:con_synth_steak"
			],
			"droppedByAi": [
				"ai:BP_Al_Alien_Base",
				"ai:BP_Alien_BabyCyclop",
				"ai:BP_Alien_BatCyclop",
				"ai:BP_Alien_BatCyclop_ProjExp",
				"ai:BP_Alien_ClamWorm",
				"ai:BP_Alien_ClamWorm_ProjExp",
				"ai:BP_Alien_Drone",
				"ai:BP_Alien_Drone_ProjExp",
				"ai:BP_Alien_FatLobster",
				"ai:BP_Alien_FatLobster_ProjExp",
				"ai:BP_Alien_Fighter",
				"ai:BP_Alien_Fighter_ProjExp",
				"ai:BP_Alien_GiantOctopus",
				"ai:BP_Alien_Melee",
				"ai:BP_Alien_Ranged",
				"ai:BP_Alien_Ranged_TEMP_Aura",
				"ai:BP_Alien_Ranged_TEMP_Aura4",
				"ai:BP_Alien_SpikeRay",
				"ai:BP_Alien_SquidMother",
				"ai:BP_Alien_Yellow_Friendly",
				"ai:BP_FriendlyAttackCarrierDrone"
			],
			"droppedByMinerals": [
				"mineral:rareMetal",
				"mineral:rockyCarbon",
				"mineral:volatileIce"
			],
			"directProducerCount": 0,
			"directConsumerCount": 3,
			"aiDropSourceCount": 21,
			"mineralDropSourceCount": 3,
			"directSourceCount": 24,
			"directUseCount": 3,
			"directRecipeInputQuantity": 7,
			"upgradeDemandQuantity": 0,
			"sinkClassification": "not terminal",
			"requiredQuantityByGroup":
			{
				"crafting": 7
			},
			"producedQuantityByGroup":
			{
			},
			"producedRecipeGroups": [],
			"consumedRecipeGroups": [
				"crafting"
			],
			"downstreamChains": [
				{
					"terminalType": "terminal consumable",
					"terminalItemId": "con_nutrient_paste",
					"summary": "raw_slime x2 -> con_nutrient_paste x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_slime x2 -> con_nutrient_paste x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal consumable",
					"terminalItemId": "con_protein_bar",
					"summary": "raw_slime x2 -> con_protein_bar x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_slime x2 -> con_protein_bar x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal consumable",
					"terminalItemId": "con_synth_steak",
					"summary": "raw_slime x3 -> con_synth_steak x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_slime x3 -> con_synth_steak x1 via DT_Recipes_Crafting"
					]
				}
			],
			"pickupResolved": true,
			"pickupBlueprintName": "BP_Floating_WorldItem_ReactiveBiomassSlime",
			"pickupFailureReason": "",
			"itemData":
			{
				"itemId": "raw_slime",
				"displayName": "raw_slime",
				"category": "",
				"sourceTable": "/Game/UltimateSurvivalPack/Blueprints/Datatable/Inventory/DT_ItemData_StratoWard.DT_ItemData_StratoWard",
				"raw":
				{
					"name": "raw_slime",
					"description": "Hello world!",
					"maximum Stack": 64,
					"item Type": "Other",
					"icon": "/Script/Engine.Texture2D'/Game/StratoWard/UI/Icons/Icon_Slime.Icon_Slime'",
					"item Mesh": "/Script/Engine.StaticMesh'/Game/StratoWard/Mesh/Loot/Organic/Alien_Carcass/alien_carcass_model/StaticMeshes/alien_carcass_model.alien_carcass_model'",
					"survival Properties":
					{
						"health to Add": 0,
						"hunger to Add": 0,
						"thirst to Add": 0,
						"cosume Sound": "/Script/Engine.SoundCue'/Game/UltimateSurvivalPack/Demo/Audio/SFX/CUE_EatSound.CUE_EatSound'",
						"effect Time": 0
					},
					"holdable Class": "None",
					"armor Properties":
					{
						"armor to Add": "Head",
						"armor Male Mesh": "None",
						"armor Female Mesh": "None",
						"armor Protection Percent": 0,
						"hide Mesh": [],
						"slots to Add": 0,
						"temperature to Add": 0
					},
					"building Data":
					{
						"build Type": "Building",
						"ghost Mesh": "None",
						"collision Transform":
						{
							"rotation":
							{
								"x": 0,
								"y": -0,
								"z": 0,
								"w": 1
							},
							"translation":
							{
								"x": 0,
								"y": 0,
								"z": 105
							},
							"scale3D":
							{
								"x": 100,
								"y": 100,
								"z": 100
							}
						},
						"final Building Class": "None",
						"health": 500,
						"repair Add Health": 25,
						"support Snapping": false
					},
					"sell Price": 0,
					"itemTypeTag":
					{
						"tagName": "Item.Category.RawResource"
					},
					"tier": 0
				}
			},
			"displayName": "raw_slime",
			"category": "",
			"balanceFlags": []
		},
		{
			"key": "item:raw_spores",
			"itemId": "raw_spores",
			"knownItemData": true,
			"naturalResource": true,
			"producedByRecipes": [],
			"consumedByRecipes": [],
			"droppedByAi": [
				"ai:BP_Al_Alien_Base",
				"ai:BP_Alien_BabyCyclop",
				"ai:BP_Alien_BatCyclop",
				"ai:BP_Alien_BatCyclop_ProjExp",
				"ai:BP_Alien_ClamWorm",
				"ai:BP_Alien_ClamWorm_ProjExp",
				"ai:BP_Alien_Drone",
				"ai:BP_Alien_Drone_ProjExp",
				"ai:BP_Alien_FatLobster",
				"ai:BP_Alien_FatLobster_ProjExp",
				"ai:BP_Alien_Fighter",
				"ai:BP_Alien_Fighter_ProjExp",
				"ai:BP_Alien_GiantOctopus",
				"ai:BP_Alien_Melee",
				"ai:BP_Alien_Ranged",
				"ai:BP_Alien_Ranged_TEMP_Aura",
				"ai:BP_Alien_Ranged_TEMP_Aura4",
				"ai:BP_Alien_SpikeRay",
				"ai:BP_Alien_SquidMother",
				"ai:BP_Alien_Yellow_Friendly",
				"ai:BP_FriendlyAttackCarrierDrone"
			],
			"droppedByMinerals": [
				"mineral:volatileIce"
			],
			"directProducerCount": 0,
			"directConsumerCount": 0,
			"aiDropSourceCount": 21,
			"mineralDropSourceCount": 1,
			"directSourceCount": 22,
			"directUseCount": 0,
			"directRecipeInputQuantity": 0,
			"upgradeDemandQuantity": 0,
			"sinkClassification": "not terminal",
			"requiredQuantityByGroup":
			{
			},
			"producedQuantityByGroup":
			{
			},
			"producedRecipeGroups": [],
			"consumedRecipeGroups": [],
			"downstreamChains": [],
			"pickupResolved": false,
			"pickupBlueprintName": "",
			"pickupFailureReason": "raw_spores: no pickup BP match",
			"itemData":
			{
				"itemId": "raw_spores",
				"displayName": "raw_spores",
				"category": "",
				"sourceTable": "/Game/UltimateSurvivalPack/Blueprints/Datatable/Inventory/DT_ItemData_StratoWard.DT_ItemData_StratoWard",
				"raw":
				{
					"name": "raw_spores",
					"description": "Hello world!",
					"maximum Stack": 64,
					"item Type": "Other",
					"icon": "/Script/Engine.Texture2D'/Game/StratoWard/UI/Icons/Icon_Spore.Icon_Spore'",
					"item Mesh": "/Script/Engine.StaticMesh'/Game/StratoWard/Mesh/Loot/Organic/Alien_Spore/alien_spore_model/StaticMeshes/alien_spore_model.alien_spore_model'",
					"survival Properties":
					{
						"health to Add": 0,
						"hunger to Add": 0,
						"thirst to Add": 0,
						"cosume Sound": "/Script/Engine.SoundCue'/Game/UltimateSurvivalPack/Demo/Audio/SFX/CUE_EatSound.CUE_EatSound'",
						"effect Time": 0
					},
					"holdable Class": "None",
					"armor Properties":
					{
						"armor to Add": "Head",
						"armor Male Mesh": "None",
						"armor Female Mesh": "None",
						"armor Protection Percent": 0,
						"hide Mesh": [],
						"slots to Add": 0,
						"temperature to Add": 0
					},
					"building Data":
					{
						"build Type": "Building",
						"ghost Mesh": "None",
						"collision Transform":
						{
							"rotation":
							{
								"x": 0,
								"y": -0,
								"z": 0,
								"w": 1
							},
							"translation":
							{
								"x": 0,
								"y": 0,
								"z": 105
							},
							"scale3D":
							{
								"x": 100,
								"y": 100,
								"z": 100
							}
						},
						"final Building Class": "None",
						"health": 500,
						"repair Add Health": 25,
						"support Snapping": false
					},
					"sell Price": 0,
					"itemTypeTag":
					{
						"tagName": "Item.Category.Material"
					},
					"tier": 0
				}
			},
			"displayName": "raw_spores",
			"category": "",
			"balanceFlags": [
				"dropped_but_unused",
				"no_sinks"
			]
		},
		{
			"key": "item:raw_sulfur",
			"itemId": "raw_sulfur",
			"knownItemData": true,
			"naturalResource": true,
			"producedByRecipes": [],
			"consumedByRecipes": [
				"recipe:DT_Recipes_Crafting:con_fuel",
				"recipe:DT_Recipes_Crafting:weapon_rocket"
			],
			"droppedByAi": [],
			"droppedByMinerals": [
				"mineral:commonMetal",
				"mineral:rockyCarbon",
				"mineral:volatileIce"
			],
			"directProducerCount": 0,
			"directConsumerCount": 2,
			"aiDropSourceCount": 0,
			"mineralDropSourceCount": 3,
			"directSourceCount": 3,
			"directUseCount": 2,
			"directRecipeInputQuantity": 3,
			"upgradeDemandQuantity": 0,
			"sinkClassification": "not terminal",
			"requiredQuantityByGroup":
			{
				"crafting": 3
			},
			"producedQuantityByGroup":
			{
			},
			"producedRecipeGroups": [],
			"consumedRecipeGroups": [
				"crafting"
			],
			"downstreamChains": [
				{
					"terminalType": "terminal consumable",
					"terminalItemId": "con_fuel",
					"summary": "raw_sulfur x1 -> con_fuel x1300 via DT_Recipes_Crafting",
					"steps": [
						"raw_sulfur x1 -> con_fuel x1300 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal weapon",
					"terminalItemId": "weapon_rocket",
					"summary": "raw_sulfur x2 -> weapon_rocket x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_sulfur x2 -> weapon_rocket x1 via DT_Recipes_Crafting"
					]
				}
			],
			"pickupResolved": true,
			"pickupBlueprintName": "BP_Floating_WorldItem_SulfurCrystals",
			"pickupFailureReason": "",
			"itemData":
			{
				"itemId": "raw_sulfur",
				"displayName": "raw_sulfur",
				"category": "",
				"sourceTable": "/Game/UltimateSurvivalPack/Blueprints/Datatable/Inventory/DT_ItemData_StratoWard.DT_ItemData_StratoWard",
				"raw":
				{
					"name": "raw_sulfur",
					"description": "Hello world!",
					"maximum Stack": 64,
					"item Type": "Other",
					"icon": "/Script/Engine.Texture2D'/Game/StratoWard/UI/Icons/Icon_SulfurCrystal.Icon_SulfurCrystal'",
					"item Mesh": "/Script/Engine.StaticMesh'/Game/StratoWard/Mesh/Loot/Minerals/SulfurCrystal/sulfur_crystal_model/StaticMeshes/sulfur_crystal_model.sulfur_crystal_model'",
					"survival Properties":
					{
						"health to Add": 0,
						"hunger to Add": 0,
						"thirst to Add": 0,
						"cosume Sound": "/Script/Engine.SoundCue'/Game/UltimateSurvivalPack/Demo/Audio/SFX/CUE_EatSound.CUE_EatSound'",
						"effect Time": 0
					},
					"holdable Class": "None",
					"armor Properties":
					{
						"armor to Add": "Head",
						"armor Male Mesh": "None",
						"armor Female Mesh": "None",
						"armor Protection Percent": 0,
						"hide Mesh": [],
						"slots to Add": 0,
						"temperature to Add": 0
					},
					"building Data":
					{
						"build Type": "Building",
						"ghost Mesh": "None",
						"collision Transform":
						{
							"rotation":
							{
								"x": 0,
								"y": -0,
								"z": 0,
								"w": 1
							},
							"translation":
							{
								"x": 0,
								"y": 0,
								"z": 105
							},
							"scale3D":
							{
								"x": 100,
								"y": 100,
								"z": 100
							}
						},
						"final Building Class": "None",
						"health": 500,
						"repair Add Health": 25,
						"support Snapping": false
					},
					"sell Price": 0,
					"itemTypeTag":
					{
						"tagName": "Item.Category.RawResource"
					},
					"tier": 0
				}
			},
			"displayName": "raw_sulfur",
			"category": "",
			"balanceFlags": []
		},
		{
			"key": "item:raw_tendon_fiber",
			"itemId": "raw_tendon_fiber",
			"knownItemData": true,
			"naturalResource": true,
			"producedByRecipes": [],
			"consumedByRecipes": [
				"recipe:DT_Recipes_Crafting:con_protein_bar",
				"recipe:DT_Recipes_Crafting:con_synth_steak"
			],
			"droppedByAi": [
				"ai:BP_Al_Alien_Base",
				"ai:BP_Alien_BabyCyclop",
				"ai:BP_Alien_BatCyclop",
				"ai:BP_Alien_BatCyclop_ProjExp",
				"ai:BP_Alien_ClamWorm",
				"ai:BP_Alien_ClamWorm_ProjExp",
				"ai:BP_Alien_Drone",
				"ai:BP_Alien_Drone_ProjExp",
				"ai:BP_Alien_FatLobster",
				"ai:BP_Alien_FatLobster_ProjExp",
				"ai:BP_Alien_Fighter",
				"ai:BP_Alien_Fighter_ProjExp",
				"ai:BP_Alien_GiantOctopus",
				"ai:BP_Alien_Melee",
				"ai:BP_Alien_Ranged",
				"ai:BP_Alien_Ranged_TEMP_Aura",
				"ai:BP_Alien_Ranged_TEMP_Aura4",
				"ai:BP_Alien_SpikeRay",
				"ai:BP_Alien_SquidMother",
				"ai:BP_Alien_Yellow_Friendly",
				"ai:BP_FriendlyAttackCarrierDrone"
			],
			"droppedByMinerals": [],
			"directProducerCount": 0,
			"directConsumerCount": 2,
			"aiDropSourceCount": 21,
			"mineralDropSourceCount": 0,
			"directSourceCount": 21,
			"directUseCount": 2,
			"directRecipeInputQuantity": 3,
			"upgradeDemandQuantity": 0,
			"sinkClassification": "not terminal",
			"requiredQuantityByGroup":
			{
				"crafting": 3
			},
			"producedQuantityByGroup":
			{
			},
			"producedRecipeGroups": [],
			"consumedRecipeGroups": [
				"crafting"
			],
			"downstreamChains": [
				{
					"terminalType": "terminal consumable",
					"terminalItemId": "con_protein_bar",
					"summary": "raw_tendon_fiber x1 -> con_protein_bar x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_tendon_fiber x1 -> con_protein_bar x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal consumable",
					"terminalItemId": "con_synth_steak",
					"summary": "raw_tendon_fiber x2 -> con_synth_steak x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_tendon_fiber x2 -> con_synth_steak x1 via DT_Recipes_Crafting"
					]
				}
			],
			"pickupResolved": false,
			"pickupBlueprintName": "",
			"pickupFailureReason": "raw_tendon_fiber: no pickup BP match",
			"itemData":
			{
				"itemId": "raw_tendon_fiber",
				"displayName": "raw_tendon_fiber",
				"category": "",
				"sourceTable": "/Game/UltimateSurvivalPack/Blueprints/Datatable/Inventory/DT_ItemData_StratoWard.DT_ItemData_StratoWard",
				"raw":
				{
					"name": "raw_tendon_fiber",
					"description": "Hello world!",
					"maximum Stack": 64,
					"item Type": "Other",
					"icon": "/Script/Engine.Texture2D'/Game/StratoWard/UI/Icons/Icon_Tendon.Icon_Tendon'",
					"item Mesh": "None",
					"survival Properties":
					{
						"health to Add": 0,
						"hunger to Add": 0,
						"thirst to Add": 0,
						"cosume Sound": "/Script/Engine.SoundCue'/Game/UltimateSurvivalPack/Demo/Audio/SFX/CUE_EatSound.CUE_EatSound'",
						"effect Time": 0
					},
					"holdable Class": "None",
					"armor Properties":
					{
						"armor to Add": "Head",
						"armor Male Mesh": "None",
						"armor Female Mesh": "None",
						"armor Protection Percent": 0,
						"hide Mesh": [],
						"slots to Add": 0,
						"temperature to Add": 0
					},
					"building Data":
					{
						"build Type": "Building",
						"ghost Mesh": "None",
						"collision Transform":
						{
							"rotation":
							{
								"x": 0,
								"y": -0,
								"z": 0,
								"w": 1
							},
							"translation":
							{
								"x": 0,
								"y": 0,
								"z": 105
							},
							"scale3D":
							{
								"x": 100,
								"y": 100,
								"z": 100
							}
						},
						"final Building Class": "None",
						"health": 500,
						"repair Add Health": 25,
						"support Snapping": false
					},
					"sell Price": 0,
					"itemTypeTag":
					{
						"tagName": "Item.Category.RawResource"
					},
					"tier": 0
				}
			},
			"displayName": "raw_tendon_fiber",
			"category": "",
			"balanceFlags": []
		},
		{
			"key": "item:raw_titanium",
			"itemId": "raw_titanium",
			"knownItemData": true,
			"naturalResource": true,
			"producedByRecipes": [],
			"consumedByRecipes": [
				"recipe:DT_Recipes_Refining:mat_aluminum_alloy"
			],
			"droppedByAi": [],
			"droppedByMinerals": [
				"mineral:commonMetal",
				"mineral:rareMetal"
			],
			"directProducerCount": 0,
			"directConsumerCount": 1,
			"aiDropSourceCount": 0,
			"mineralDropSourceCount": 2,
			"directSourceCount": 2,
			"directUseCount": 1,
			"directRecipeInputQuantity": 1,
			"upgradeDemandQuantity": 0,
			"sinkClassification": "not terminal",
			"requiredQuantityByGroup":
			{
				"refining": 1
			},
			"producedQuantityByGroup":
			{
			},
			"producedRecipeGroups": [],
			"consumedRecipeGroups": [
				"refining"
			],
			"downstreamChains": [
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_solar_panel",
					"summary": "raw_titanium x1 -> mat_aluminum_alloy x2 via DT_Recipes_Refining -> mat_aluminum_alloy x3 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x1 -> module_solar_panel x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_titanium x1 -> mat_aluminum_alloy x2 via DT_Recipes_Refining",
						"mat_aluminum_alloy x3 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x1 -> module_solar_panel x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_blaster",
					"summary": "raw_titanium x1 -> mat_aluminum_alloy x2 via DT_Recipes_Refining -> mat_aluminum_alloy x3 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x1 -> module_turret_blaster x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_titanium x1 -> mat_aluminum_alloy x2 via DT_Recipes_Refining",
						"mat_aluminum_alloy x3 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x1 -> module_turret_blaster x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_laser",
					"summary": "raw_titanium x1 -> mat_aluminum_alloy x2 via DT_Recipes_Refining -> mat_aluminum_alloy x3 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x1 -> module_turret_laser x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_titanium x1 -> mat_aluminum_alloy x2 via DT_Recipes_Refining",
						"mat_aluminum_alloy x3 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x1 -> module_turret_laser x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_repair",
					"summary": "raw_titanium x1 -> mat_aluminum_alloy x2 via DT_Recipes_Refining -> mat_aluminum_alloy x3 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x1 -> module_turret_repair x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_titanium x1 -> mat_aluminum_alloy x2 via DT_Recipes_Refining",
						"mat_aluminum_alloy x3 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x1 -> module_turret_repair x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_rocket",
					"summary": "raw_titanium x1 -> mat_aluminum_alloy x2 via DT_Recipes_Refining -> mat_aluminum_alloy x3 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x2 -> module_turret_rocket x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_titanium x1 -> mat_aluminum_alloy x2 via DT_Recipes_Refining",
						"mat_aluminum_alloy x3 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x2 -> module_turret_rocket x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "raw_titanium x1 -> mat_aluminum_alloy x2 via DT_Recipes_Refining -> mat_aluminum_alloy x3 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x12 -> UpgradeShip x1 via DT_Recipes_Upgrade_01",
					"steps": [
						"raw_titanium x1 -> mat_aluminum_alloy x2 via DT_Recipes_Refining",
						"mat_aluminum_alloy x3 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x12 -> UpgradeShip x1 via DT_Recipes_Upgrade_01"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "raw_titanium x1 -> mat_aluminum_alloy x2 via DT_Recipes_Refining -> mat_aluminum_alloy x3 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x34 -> UpgradeShip x1 via DT_Recipes_Upgrade_02",
					"steps": [
						"raw_titanium x1 -> mat_aluminum_alloy x2 via DT_Recipes_Refining",
						"mat_aluminum_alloy x3 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x34 -> UpgradeShip x1 via DT_Recipes_Upgrade_02"
					]
				},
				{
					"terminalType": "ship upgrade",
					"terminalItemId": "UpgradeShip",
					"summary": "raw_titanium x1 -> mat_aluminum_alloy x2 via DT_Recipes_Refining -> mat_aluminum_alloy x3 -> cmp_structural_panels x2 via DT_Recipes_Refining -> cmp_structural_panels x127 -> UpgradeShip x1 via DT_Recipes_Upgrade_03",
					"steps": [
						"raw_titanium x1 -> mat_aluminum_alloy x2 via DT_Recipes_Refining",
						"mat_aluminum_alloy x3 -> cmp_structural_panels x2 via DT_Recipes_Refining",
						"cmp_structural_panels x127 -> UpgradeShip x1 via DT_Recipes_Upgrade_03"
					]
				},
				{
					"terminalType": "terminal module",
					"terminalItemId": "module_turret_rocket",
					"summary": "raw_titanium x1 -> mat_aluminum_alloy x2 via DT_Recipes_Refining -> mat_aluminum_alloy x2 -> cmp_thruster_parts x1 via DT_Recipes_Refining -> cmp_thruster_parts x1 -> module_turret_rocket x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_titanium x1 -> mat_aluminum_alloy x2 via DT_Recipes_Refining",
						"mat_aluminum_alloy x2 -> cmp_thruster_parts x1 via DT_Recipes_Refining",
						"cmp_thruster_parts x1 -> module_turret_rocket x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal weapon",
					"terminalItemId": "weapon_rocket",
					"summary": "raw_titanium x1 -> mat_aluminum_alloy x2 via DT_Recipes_Refining -> mat_aluminum_alloy x2 -> cmp_thruster_parts x1 via DT_Recipes_Refining -> cmp_thruster_parts x1 -> weapon_rocket x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_titanium x1 -> mat_aluminum_alloy x2 via DT_Recipes_Refining",
						"mat_aluminum_alloy x2 -> cmp_thruster_parts x1 via DT_Recipes_Refining",
						"cmp_thruster_parts x1 -> weapon_rocket x1 via DT_Recipes_Crafting"
					]
				}
			],
			"pickupResolved": true,
			"pickupBlueprintName": "BP_Floating_WorldItem_TitaniumTraceOre",
			"pickupFailureReason": "",
			"itemData":
			{
				"itemId": "raw_titanium",
				"displayName": "raw_titanium",
				"category": "",
				"sourceTable": "/Game/UltimateSurvivalPack/Blueprints/Datatable/Inventory/DT_ItemData_StratoWard.DT_ItemData_StratoWard",
				"raw":
				{
					"name": "raw_titanium",
					"description": "Hello world!",
					"maximum Stack": 64,
					"item Type": "Other",
					"icon": "/Script/Engine.Texture2D'/Game/StratoWard/UI/Icons/Icon_Titanium.Icon_Titanium'",
					"item Mesh": "None",
					"survival Properties":
					{
						"health to Add": 0,
						"hunger to Add": 0,
						"thirst to Add": 0,
						"cosume Sound": "/Script/Engine.SoundCue'/Game/UltimateSurvivalPack/Demo/Audio/SFX/CUE_EatSound.CUE_EatSound'",
						"effect Time": 0
					},
					"holdable Class": "None",
					"armor Properties":
					{
						"armor to Add": "Head",
						"armor Male Mesh": "None",
						"armor Female Mesh": "None",
						"armor Protection Percent": 0,
						"hide Mesh": [],
						"slots to Add": 0,
						"temperature to Add": 0
					},
					"building Data":
					{
						"build Type": "Building",
						"ghost Mesh": "None",
						"collision Transform":
						{
							"rotation":
							{
								"x": 0,
								"y": -0,
								"z": 0,
								"w": 1
							},
							"translation":
							{
								"x": 0,
								"y": 0,
								"z": 105
							},
							"scale3D":
							{
								"x": 100,
								"y": 100,
								"z": 100
							}
						},
						"final Building Class": "None",
						"health": 500,
						"repair Add Health": 25,
						"support Snapping": false
					},
					"sell Price": 0,
					"itemTypeTag":
					{
						"tagName": "Item.Category.RawResource"
					},
					"tier": 0
				}
			},
			"displayName": "raw_titanium",
			"category": "",
			"balanceFlags": []
		},
		{
			"key": "item:raw_water_ice",
			"itemId": "raw_water_ice",
			"knownItemData": true,
			"naturalResource": true,
			"producedByRecipes": [],
			"consumedByRecipes": [
				"recipe:DT_Recipes_Crafting:con_nutrient_paste",
				"recipe:DT_Recipes_Crafting:con_water_pack"
			],
			"droppedByAi": [],
			"droppedByMinerals": [
				"mineral:commonMetal",
				"mineral:rareMetal",
				"mineral:rockyCarbon",
				"mineral:volatileIce"
			],
			"directProducerCount": 0,
			"directConsumerCount": 2,
			"aiDropSourceCount": 0,
			"mineralDropSourceCount": 4,
			"directSourceCount": 4,
			"directUseCount": 2,
			"directRecipeInputQuantity": 8,
			"upgradeDemandQuantity": 0,
			"sinkClassification": "not terminal",
			"requiredQuantityByGroup":
			{
				"crafting": 8
			},
			"producedQuantityByGroup":
			{
			},
			"producedRecipeGroups": [],
			"consumedRecipeGroups": [
				"crafting"
			],
			"downstreamChains": [
				{
					"terminalType": "terminal consumable",
					"terminalItemId": "con_nutrient_paste",
					"summary": "raw_water_ice x3 -> con_nutrient_paste x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_water_ice x3 -> con_nutrient_paste x1 via DT_Recipes_Crafting"
					]
				},
				{
					"terminalType": "terminal consumable",
					"terminalItemId": "con_water_pack",
					"summary": "raw_water_ice x5 -> con_water_pack x1 via DT_Recipes_Crafting",
					"steps": [
						"raw_water_ice x5 -> con_water_pack x1 via DT_Recipes_Crafting"
					]
				}
			],
			"pickupResolved": true,
			"pickupBlueprintName": "BP_Floating_WorldItem_CryoWaterIce",
			"pickupFailureReason": "",
			"itemData":
			{
				"itemId": "raw_water_ice",
				"displayName": "raw_water_ice",
				"category": "",
				"sourceTable": "/Game/UltimateSurvivalPack/Blueprints/Datatable/Inventory/DT_ItemData_StratoWard.DT_ItemData_StratoWard",
				"raw":
				{
					"name": "raw_water_ice",
					"description": "Hello world!",
					"maximum Stack": 64,
					"item Type": "Other",
					"icon": "/Script/Engine.Texture2D'/Game/StratoWard/UI/Icons/Icon_WaterIce.Icon_WaterIce'",
					"item Mesh": "/Script/Engine.StaticMesh'/Game/StratoWard/Mesh/Loot/Minerals/WaterIce/water_ice_model/StaticMeshes/water_ice_model.water_ice_model'",
					"survival Properties":
					{
						"health to Add": 0,
						"hunger to Add": 0,
						"thirst to Add": 0,
						"cosume Sound": "/Script/Engine.SoundCue'/Game/UltimateSurvivalPack/Demo/Audio/SFX/CUE_EatSound.CUE_EatSound'",
						"effect Time": 0
					},
					"holdable Class": "None",
					"armor Properties":
					{
						"armor to Add": "Head",
						"armor Male Mesh": "None",
						"armor Female Mesh": "None",
						"armor Protection Percent": 0,
						"hide Mesh": [],
						"slots to Add": 0,
						"temperature to Add": 0
					},
					"building Data":
					{
						"build Type": "Building",
						"ghost Mesh": "None",
						"collision Transform":
						{
							"rotation":
							{
								"x": 0,
								"y": -0,
								"z": 0,
								"w": 1
							},
							"translation":
							{
								"x": 0,
								"y": 0,
								"z": 105
							},
							"scale3D":
							{
								"x": 100,
								"y": 100,
								"z": 100
							}
						},
						"final Building Class": "None",
						"health": 500,
						"repair Add Health": 25,
						"support Snapping": false
					},
					"sell Price": 0,
					"itemTypeTag":
					{
						"tagName": "Item.Category.RawResource"
					},
					"tier": 0
				}
			},
			"displayName": "raw_water_ice",
			"category": "",
			"balanceFlags": []
		},
		{
			"key": "item:tool_mining",
			"itemId": "tool_mining",
			"knownItemData": true,
			"naturalResource": false,
			"producedByRecipes": [
				"recipe:DT_Recipes_Crafting:tool_mining"
			],
			"consumedByRecipes": [],
			"droppedByAi": [],
			"droppedByMinerals": [],
			"directProducerCount": 1,
			"directConsumerCount": 0,
			"aiDropSourceCount": 0,
			"mineralDropSourceCount": 0,
			"directSourceCount": 1,
			"directUseCount": 0,
			"directRecipeInputQuantity": 0,
			"upgradeDemandQuantity": 0,
			"sinkClassification": "not terminal",
			"requiredQuantityByGroup":
			{
			},
			"producedQuantityByGroup":
			{
				"crafting": 1
			},
			"producedRecipeGroups": [
				"crafting"
			],
			"consumedRecipeGroups": [],
			"downstreamChains": [],
			"pickupResolved": false,
			"pickupBlueprintName": "",
			"pickupFailureReason": "tool_mining: no pickup BP match",
			"itemData":
			{
				"itemId": "tool_mining",
				"displayName": "tool_mining",
				"category": "",
				"sourceTable": "/Game/UltimateSurvivalPack/Blueprints/Datatable/Inventory/DT_ItemData_StratoWard.DT_ItemData_StratoWard",
				"raw":
				{
					"name": "tool_mining",
					"description": "For mining",
					"maximum Stack": 1,
					"item Type": "Weapon",
					"icon": "/Script/Engine.Texture2D'/Game/StratoWard/UI/Icons/Icon_Steel.Icon_Steel'",
					"item Mesh": "/Script/Engine.StaticMesh'/Game/UltimateSurvivalPack/Demo/Mesh/SM_Hammer.SM_Hammer'",
					"survival Properties":
					{
						"health to Add": 0,
						"hunger to Add": 0,
						"thirst to Add": 0,
						"cosume Sound": "None",
						"effect Time": 0
					},
					"holdable Class": "/Script/Engine.BlueprintGeneratedClass'/Game/UltimateSurvivalPack/Blueprints/Holdable/HoldableActors/BP_Holdable_Jetpack_Welder.BP_Holdable_Jetpack_Welder_C'",
					"armor Properties":
					{
						"armor to Add": "Head",
						"armor Male Mesh": "None",
						"armor Female Mesh": "None",
						"armor Protection Percent": 0,
						"hide Mesh": [],
						"slots to Add": 0,
						"temperature to Add": 0
					},
					"building Data":
					{
						"build Type": "Building",
						"ghost Mesh": "None",
						"collision Transform":
						{
							"rotation":
							{
								"x": 0,
								"y": -0,
								"z": 0,
								"w": 1
							},
							"translation":
							{
								"x": 0,
								"y": 0,
								"z": 105
							},
							"scale3D":
							{
								"x": 100,
								"y": 100,
								"z": 100
							}
						},
						"final Building Class": "None",
						"health": 500,
						"repair Add Health": 25,
						"support Snapping": false
					},
					"sell Price": 0,
					"itemTypeTag":
					{
						"tagName": "Item.Category.FinalItem"
					},
					"tier": 3
				}
			},
			"displayName": "tool_mining",
			"category": "",
			"balanceFlags": [
				"missing_pickup_mapping",
				"no_sinks",
				"recipe_only_output"
			]
		},
		{
			"key": "item:UpgradeShip",
			"itemId": "UpgradeShip",
			"knownItemData": true,
			"naturalResource": false,
			"producedByRecipes": [
				"recipe:DT_Recipes_Upgrade_01:UpgradeShip",
				"recipe:DT_Recipes_Upgrade_02:UpgradeShip",
				"recipe:DT_Recipes_Upgrade_03:UpgradeShip"
			],
			"consumedByRecipes": [],
			"droppedByAi": [],
			"droppedByMinerals": [],
			"directProducerCount": 3,
			"directConsumerCount": 0,
			"aiDropSourceCount": 0,
			"mineralDropSourceCount": 0,
			"directSourceCount": 3,
			"directUseCount": 0,
			"directRecipeInputQuantity": 0,
			"upgradeDemandQuantity": 0,
			"sinkClassification": "not terminal",
			"requiredQuantityByGroup":
			{
			},
			"producedQuantityByGroup":
			{
				"upgrade": 3
			},
			"producedRecipeGroups": [
				"upgrade"
			],
			"consumedRecipeGroups": [],
			"downstreamChains": [],
			"pickupResolved": true,
			"pickupBlueprintName": "BP_Floating_WorldItem_UpgradeShip",
			"pickupFailureReason": "",
			"itemData":
			{
				"itemId": "UpgradeShip",
				"displayName": "UpgradeShip",
				"category": "",
				"sourceTable": "/Game/UltimateSurvivalPack/Blueprints/Datatable/Inventory/DT_ItemData_StratoWard.DT_ItemData_StratoWard",
				"raw":
				{
					"name": "UpgradeShip",
					"description": "Upgrade the Ship",
					"maximum Stack": 64,
					"item Type": "Other",
					"icon": "/Script/Engine.Texture2D'/Engine/Tutorial/Mobile/TutorialAssets/android_Icon.android_Icon'",
					"item Mesh": "None",
					"survival Properties":
					{
						"health to Add": 0,
						"hunger to Add": 0,
						"thirst to Add": 0,
						"cosume Sound": "/Script/Engine.SoundCue'/Game/UltimateSurvivalPack/Demo/Audio/SFX/CUE_EatSound.CUE_EatSound'",
						"effect Time": 0
					},
					"holdable Class": "None",
					"armor Properties":
					{
						"armor to Add": "Head",
						"armor Male Mesh": "None",
						"armor Female Mesh": "None",
						"armor Protection Percent": 0,
						"hide Mesh": [],
						"slots to Add": 0,
						"temperature to Add": 0
					},
					"building Data":
					{
						"build Type": "Building",
						"ghost Mesh": "None",
						"collision Transform":
						{
							"rotation":
							{
								"x": 0,
								"y": -0,
								"z": 0,
								"w": 1
							},
							"translation":
							{
								"x": 0,
								"y": 0,
								"z": 105
							},
							"scale3D":
							{
								"x": 100,
								"y": 100,
								"z": 100
							}
						},
						"final Building Class": "None",
						"health": 500,
						"repair Add Health": 25,
						"support Snapping": false
					},
					"sell Price": 0,
					"itemTypeTag":
					{
						"tagName": "None"
					},
					"tier": 0
				}
			},
			"displayName": "UpgradeShip",
			"category": "",
			"balanceFlags": [
				"no_sinks",
				"recipe_only_output"
			]
		},
		{
			"key": "item:weapon_ammo_blaster",
			"itemId": "weapon_ammo_blaster",
			"knownItemData": true,
			"naturalResource": false,
			"producedByRecipes": [],
			"consumedByRecipes": [],
			"droppedByAi": [],
			"droppedByMinerals": [],
			"directProducerCount": 0,
			"directConsumerCount": 0,
			"aiDropSourceCount": 0,
			"mineralDropSourceCount": 0,
			"directSourceCount": 0,
			"directUseCount": 0,
			"directRecipeInputQuantity": 0,
			"upgradeDemandQuantity": 0,
			"sinkClassification": "terminal weapon",
			"requiredQuantityByGroup":
			{
			},
			"producedQuantityByGroup":
			{
			},
			"producedRecipeGroups": [],
			"consumedRecipeGroups": [],
			"downstreamChains": [],
			"pickupResolved": false,
			"pickupBlueprintName": "",
			"pickupFailureReason": "weapon_ammo_blaster: no pickup BP match",
			"itemData":
			{
				"itemId": "weapon_ammo_blaster",
				"displayName": "weapon_ammo_blaster",
				"category": "",
				"sourceTable": "/Game/UltimateSurvivalPack/Blueprints/Datatable/Inventory/DT_ItemData_StratoWard.DT_ItemData_StratoWard",
				"raw":
				{
					"name": "weapon_ammo_blaster",
					"description": "Jetpack blaster ammo",
					"maximum Stack": 999,
					"item Type": "Other",
					"icon": "/Script/Engine.Texture2D'/Game/StratoWard/UI/Icons/Icon_Copper.Icon_Copper'",
					"item Mesh": "/Script/Engine.StaticMesh'/Game/UltimateSurvivalPack/Demo/Mesh/SM_Ammo.SM_Ammo'",
					"survival Properties":
					{
						"health to Add": 0,
						"hunger to Add": 0,
						"thirst to Add": 0,
						"cosume Sound": "/Script/Engine.SoundCue'/Game/UltimateSurvivalPack/Demo/Audio/SFX/CUE_EatSound.CUE_EatSound'",
						"effect Time": 0
					},
					"holdable Class": "None",
					"armor Properties":
					{
						"armor to Add": "Head",
						"armor Male Mesh": "None",
						"armor Female Mesh": "None",
						"armor Protection Percent": 0,
						"hide Mesh": [],
						"slots to Add": 0,
						"temperature to Add": 0
					},
					"building Data":
					{
						"build Type": "Building",
						"ghost Mesh": "None",
						"collision Transform":
						{
							"rotation":
							{
								"x": 0,
								"y": -0,
								"z": 0,
								"w": 1
							},
							"translation":
							{
								"x": 0,
								"y": 0,
								"z": 105
							},
							"scale3D":
							{
								"x": 100,
								"y": 100,
								"z": 100
							}
						},
						"final Building Class": "None",
						"health": 500,
						"repair Add Health": 25,
						"support Snapping": false
					},
					"sell Price": 0,
					"itemTypeTag":
					{
						"tagName": "Item.Category.FinalItem"
					},
					"tier": 0
				}
			},
			"displayName": "weapon_ammo_blaster",
			"category": "",
			"balanceFlags": [
				"missing_pickup_mapping",
				"missing_sources"
			]
		},
		{
			"key": "item:weapon_ammo_laser",
			"itemId": "weapon_ammo_laser",
			"knownItemData": true,
			"naturalResource": false,
			"producedByRecipes": [],
			"consumedByRecipes": [],
			"droppedByAi": [],
			"droppedByMinerals": [],
			"directProducerCount": 0,
			"directConsumerCount": 0,
			"aiDropSourceCount": 0,
			"mineralDropSourceCount": 0,
			"directSourceCount": 0,
			"directUseCount": 0,
			"directRecipeInputQuantity": 0,
			"upgradeDemandQuantity": 0,
			"sinkClassification": "terminal weapon",
			"requiredQuantityByGroup":
			{
			},
			"producedQuantityByGroup":
			{
			},
			"producedRecipeGroups": [],
			"consumedRecipeGroups": [],
			"downstreamChains": [],
			"pickupResolved": false,
			"pickupBlueprintName": "",
			"pickupFailureReason": "weapon_ammo_laser: no pickup BP match",
			"itemData":
			{
				"itemId": "weapon_ammo_laser",
				"displayName": "weapon_ammo_laser",
				"category": "",
				"sourceTable": "/Game/UltimateSurvivalPack/Blueprints/Datatable/Inventory/DT_ItemData_StratoWard.DT_ItemData_StratoWard",
				"raw":
				{
					"name": "weapon_ammo_laser",
					"description": "Jetpack laser ammo",
					"maximum Stack": 999,
					"item Type": "Other",
					"icon": "/Script/Engine.Texture2D'/Game/StratoWard/UI/Icons/Icon_RareEarth.Icon_RareEarth'",
					"item Mesh": "/Script/Engine.StaticMesh'/Game/UltimateSurvivalPack/Demo/Mesh/SM_Smoke.SM_Smoke'",
					"survival Properties":
					{
						"health to Add": 0,
						"hunger to Add": 0,
						"thirst to Add": 0,
						"cosume Sound": "/Script/Engine.SoundCue'/Game/UltimateSurvivalPack/Demo/Audio/SFX/CUE_EatSound.CUE_EatSound'",
						"effect Time": 0
					},
					"holdable Class": "None",
					"armor Properties":
					{
						"armor to Add": "Head",
						"armor Male Mesh": "None",
						"armor Female Mesh": "None",
						"armor Protection Percent": 0,
						"hide Mesh": [],
						"slots to Add": 0,
						"temperature to Add": 0
					},
					"building Data":
					{
						"build Type": "Building",
						"ghost Mesh": "None",
						"collision Transform":
						{
							"rotation":
							{
								"x": 0,
								"y": -0,
								"z": 0,
								"w": 1
							},
							"translation":
							{
								"x": 0,
								"y": 0,
								"z": 105
							},
							"scale3D":
							{
								"x": 100,
								"y": 100,
								"z": 100
							}
						},
						"final Building Class": "None",
						"health": 500,
						"repair Add Health": 25,
						"support Snapping": false
					},
					"sell Price": 0,
					"itemTypeTag":
					{
						"tagName": "Item.Category.FinalItem"
					},
					"tier": 0
				}
			},
			"displayName": "weapon_ammo_laser",
			"category": "",
			"balanceFlags": [
				"missing_pickup_mapping",
				"missing_sources"
			]
		},
		{
			"key": "item:weapon_ammo_missile",
			"itemId": "weapon_ammo_missile",
			"knownItemData": true,
			"naturalResource": false,
			"producedByRecipes": [],
			"consumedByRecipes": [],
			"droppedByAi": [],
			"droppedByMinerals": [],
			"directProducerCount": 0,
			"directConsumerCount": 0,
			"aiDropSourceCount": 0,
			"mineralDropSourceCount": 0,
			"directSourceCount": 0,
			"directUseCount": 0,
			"directRecipeInputQuantity": 0,
			"upgradeDemandQuantity": 0,
			"sinkClassification": "terminal weapon",
			"requiredQuantityByGroup":
			{
			},
			"producedQuantityByGroup":
			{
			},
			"producedRecipeGroups": [],
			"consumedRecipeGroups": [],
			"downstreamChains": [],
			"pickupResolved": false,
			"pickupBlueprintName": "",
			"pickupFailureReason": "weapon_ammo_missile: no pickup BP match",
			"itemData":
			{
				"itemId": "weapon_ammo_missile",
				"displayName": "weapon_ammo_missile",
				"category": "",
				"sourceTable": "/Game/UltimateSurvivalPack/Blueprints/Datatable/Inventory/DT_ItemData_StratoWard.DT_ItemData_StratoWard",
				"raw":
				{
					"name": "weapon_ammo_missile",
					"description": "Jetpack missile ammo",
					"maximum Stack": 999,
					"item Type": "Other",
					"icon": "/Script/Engine.Texture2D'/Game/StratoWard/UI/Icons/Icon_FuelTank.Icon_FuelTank'",
					"item Mesh": "/Script/Engine.StaticMesh'/Game/UltimateSurvivalPack/Demo/Mesh/SM_SniperAmmo.SM_SniperAmmo'",
					"survival Properties":
					{
						"health to Add": 0,
						"hunger to Add": 0,
						"thirst to Add": 0,
						"cosume Sound": "/Script/Engine.SoundCue'/Game/UltimateSurvivalPack/Demo/Audio/SFX/CUE_EatSound.CUE_EatSound'",
						"effect Time": 0
					},
					"holdable Class": "None",
					"armor Properties":
					{
						"armor to Add": "Head",
						"armor Male Mesh": "None",
						"armor Female Mesh": "None",
						"armor Protection Percent": 0,
						"hide Mesh": [],
						"slots to Add": 0,
						"temperature to Add": 0
					},
					"building Data":
					{
						"build Type": "Building",
						"ghost Mesh": "None",
						"collision Transform":
						{
							"rotation":
							{
								"x": 0,
								"y": -0,
								"z": 0,
								"w": 1
							},
							"translation":
							{
								"x": 0,
								"y": 0,
								"z": 105
							},
							"scale3D":
							{
								"x": 100,
								"y": 100,
								"z": 100
							}
						},
						"final Building Class": "None",
						"health": 500,
						"repair Add Health": 25,
						"support Snapping": false
					},
					"sell Price": 0,
					"itemTypeTag":
					{
						"tagName": "Item.Category.FinalItem"
					},
					"tier": 0
				}
			},
			"displayName": "weapon_ammo_missile",
			"category": "",
			"balanceFlags": [
				"missing_pickup_mapping",
				"missing_sources"
			]
		},
		{
			"key": "item:weapon_blaster",
			"itemId": "weapon_blaster",
			"knownItemData": true,
			"naturalResource": false,
			"producedByRecipes": [
				"recipe:DT_Recipes_Crafting:weapon_blaster"
			],
			"consumedByRecipes": [],
			"droppedByAi": [],
			"droppedByMinerals": [],
			"directProducerCount": 1,
			"directConsumerCount": 0,
			"aiDropSourceCount": 0,
			"mineralDropSourceCount": 0,
			"directSourceCount": 1,
			"directUseCount": 0,
			"directRecipeInputQuantity": 0,
			"upgradeDemandQuantity": 0,
			"sinkClassification": "terminal weapon",
			"requiredQuantityByGroup":
			{
			},
			"producedQuantityByGroup":
			{
				"crafting": 1
			},
			"producedRecipeGroups": [
				"crafting"
			],
			"consumedRecipeGroups": [],
			"downstreamChains": [],
			"pickupResolved": true,
			"pickupBlueprintName": "BP_Floating_WorldItem_BlasterWeapon",
			"pickupFailureReason": "",
			"itemData":
			{
				"itemId": "weapon_blaster",
				"displayName": "weapon_blaster",
				"category": "",
				"sourceTable": "/Game/UltimateSurvivalPack/Blueprints/Datatable/Inventory/DT_ItemData_StratoWard.DT_ItemData_StratoWard",
				"raw":
				{
					"name": "weapon_blaster",
					"description": "Powerful Weapon",
					"maximum Stack": 1,
					"item Type": "Weapon",
					"icon": "/Script/Engine.Texture2D'/Game/StratoWard/UI/Icons/Icon_Suit_Blaster.Icon_Suit_Blaster'",
					"item Mesh": "/Script/Engine.StaticMesh'/Game/StratoWard/Mesh/Loot/ManMade/Foil_Package_Med/foil_wrapped_parcel_Med_model/StaticMeshes/foil_wrapped_parcel_Med_model1.foil_wrapped_parcel_Med_model1'",
					"survival Properties":
					{
						"health to Add": 0,
						"hunger to Add": 0,
						"thirst to Add": 0,
						"cosume Sound": "None",
						"effect Time": 0
					},
					"holdable Class": "/Script/Engine.BlueprintGeneratedClass'/Game/UltimateSurvivalPack/Blueprints/Holdable/HoldableActors/BP_Holdable_Jetpack_Blaster.BP_Holdable_Jetpack_Blaster_C'",
					"armor Properties":
					{
						"armor to Add": "Head",
						"armor Male Mesh": "None",
						"armor Female Mesh": "None",
						"armor Protection Percent": 0,
						"hide Mesh": [],
						"slots to Add": 0,
						"temperature to Add": 0
					},
					"building Data":
					{
						"build Type": "Building",
						"ghost Mesh": "None",
						"collision Transform":
						{
							"rotation":
							{
								"x": 0,
								"y": -0,
								"z": 0,
								"w": 1
							},
							"translation":
							{
								"x": 0,
								"y": 0,
								"z": 105
							},
							"scale3D":
							{
								"x": 100,
								"y": 100,
								"z": 100
							}
						},
						"final Building Class": "None",
						"health": 500,
						"repair Add Health": 25,
						"support Snapping": false
					},
					"sell Price": 0,
					"itemTypeTag":
					{
						"tagName": "Item.Category.FinalItem"
					},
					"tier": 3
				}
			},
			"displayName": "weapon_blaster",
			"category": "",
			"balanceFlags": [
				"recipe_only_output"
			]
		},
		{
			"key": "item:weapon_laser",
			"itemId": "weapon_laser",
			"knownItemData": true,
			"naturalResource": false,
			"producedByRecipes": [
				"recipe:DT_Recipes_Crafting:weapon_laser"
			],
			"consumedByRecipes": [],
			"droppedByAi": [],
			"droppedByMinerals": [],
			"directProducerCount": 1,
			"directConsumerCount": 0,
			"aiDropSourceCount": 0,
			"mineralDropSourceCount": 0,
			"directSourceCount": 1,
			"directUseCount": 0,
			"directRecipeInputQuantity": 0,
			"upgradeDemandQuantity": 0,
			"sinkClassification": "terminal weapon",
			"requiredQuantityByGroup":
			{
			},
			"producedQuantityByGroup":
			{
				"crafting": 1
			},
			"producedRecipeGroups": [
				"crafting"
			],
			"consumedRecipeGroups": [],
			"downstreamChains": [],
			"pickupResolved": true,
			"pickupBlueprintName": "BP_Floating_WorldItem_LaserWeapon",
			"pickupFailureReason": "",
			"itemData":
			{
				"itemId": "weapon_laser",
				"displayName": "weapon_laser",
				"category": "",
				"sourceTable": "/Game/UltimateSurvivalPack/Blueprints/Datatable/Inventory/DT_ItemData_StratoWard.DT_ItemData_StratoWard",
				"raw":
				{
					"name": "weapon_laser",
					"description": "Powerful Weapon",
					"maximum Stack": 1,
					"item Type": "Weapon",
					"icon": "/Script/Engine.Texture2D'/Game/StratoWard/UI/Icons/Icon_Suit_Laser.Icon_Suit_Laser'",
					"item Mesh": "/Script/Engine.StaticMesh'/Game/StratoWard/Mesh/Loot/ManMade/Foil_Package_Med/foil_wrapped_parcel_Med_model/StaticMeshes/foil_wrapped_parcel_Med_model1.foil_wrapped_parcel_Med_model1'",
					"survival Properties":
					{
						"health to Add": 0,
						"hunger to Add": 0,
						"thirst to Add": 0,
						"cosume Sound": "None",
						"effect Time": 0
					},
					"holdable Class": "/Script/Engine.BlueprintGeneratedClass'/Game/UltimateSurvivalPack/Blueprints/Holdable/HoldableActors/BP_Holdable_Jetpack_Laser.BP_Holdable_Jetpack_Laser_C'",
					"armor Properties":
					{
						"armor to Add": "Head",
						"armor Male Mesh": "None",
						"armor Female Mesh": "None",
						"armor Protection Percent": 0,
						"hide Mesh": [],
						"slots to Add": 0,
						"temperature to Add": 0
					},
					"building Data":
					{
						"build Type": "Building",
						"ghost Mesh": "None",
						"collision Transform":
						{
							"rotation":
							{
								"x": 0,
								"y": -0,
								"z": 0,
								"w": 1
							},
							"translation":
							{
								"x": 0,
								"y": 0,
								"z": 105
							},
							"scale3D":
							{
								"x": 100,
								"y": 100,
								"z": 100
							}
						},
						"final Building Class": "None",
						"health": 500,
						"repair Add Health": 25,
						"support Snapping": false
					},
					"sell Price": 0,
					"itemTypeTag":
					{
						"tagName": "Item.Category.FinalItem"
					},
					"tier": 3
				}
			},
			"displayName": "weapon_laser",
			"category": "",
			"balanceFlags": [
				"recipe_only_output"
			]
		},
		{
			"key": "item:weapon_rocket",
			"itemId": "weapon_rocket",
			"knownItemData": true,
			"naturalResource": false,
			"producedByRecipes": [
				"recipe:DT_Recipes_Crafting:weapon_rocket"
			],
			"consumedByRecipes": [],
			"droppedByAi": [],
			"droppedByMinerals": [],
			"directProducerCount": 1,
			"directConsumerCount": 0,
			"aiDropSourceCount": 0,
			"mineralDropSourceCount": 0,
			"directSourceCount": 1,
			"directUseCount": 0,
			"directRecipeInputQuantity": 0,
			"upgradeDemandQuantity": 0,
			"sinkClassification": "terminal weapon",
			"requiredQuantityByGroup":
			{
			},
			"producedQuantityByGroup":
			{
				"crafting": 1
			},
			"producedRecipeGroups": [
				"crafting"
			],
			"consumedRecipeGroups": [],
			"downstreamChains": [],
			"pickupResolved": true,
			"pickupBlueprintName": "BP_Floating_WorldItem_RocketWeapon",
			"pickupFailureReason": "",
			"itemData":
			{
				"itemId": "weapon_rocket",
				"displayName": "weapon_rocket",
				"category": "",
				"sourceTable": "/Game/UltimateSurvivalPack/Blueprints/Datatable/Inventory/DT_ItemData_StratoWard.DT_ItemData_StratoWard",
				"raw":
				{
					"name": "weapon_rocket",
					"description": "Powerful Weapon",
					"maximum Stack": 1,
					"item Type": "Weapon",
					"icon": "/Script/Engine.Texture2D'/Game/StratoWard/UI/Icons/Icon_Suit_Rocket.Icon_Suit_Rocket'",
					"item Mesh": "/Script/Engine.StaticMesh'/Game/StratoWard/Mesh/Loot/ManMade/Foil_Package_Med/foil_wrapped_parcel_Med_model/StaticMeshes/foil_wrapped_parcel_Med_model1.foil_wrapped_parcel_Med_model1'",
					"survival Properties":
					{
						"health to Add": 0,
						"hunger to Add": 0,
						"thirst to Add": 0,
						"cosume Sound": "None",
						"effect Time": 0
					},
					"holdable Class": "/Script/Engine.BlueprintGeneratedClass'/Game/UltimateSurvivalPack/Blueprints/Holdable/HoldableActors/BP_Holdable_Jetpack_Launcher.BP_Holdable_Jetpack_Launcher_C'",
					"armor Properties":
					{
						"armor to Add": "Head",
						"armor Male Mesh": "None",
						"armor Female Mesh": "None",
						"armor Protection Percent": 0,
						"hide Mesh": [],
						"slots to Add": 0,
						"temperature to Add": 0
					},
					"building Data":
					{
						"build Type": "Building",
						"ghost Mesh": "None",
						"collision Transform":
						{
							"rotation":
							{
								"x": 0,
								"y": -0,
								"z": 0,
								"w": 1
							},
							"translation":
							{
								"x": 0,
								"y": 0,
								"z": 105
							},
							"scale3D":
							{
								"x": 100,
								"y": 100,
								"z": 100
							}
						},
						"final Building Class": "None",
						"health": 500,
						"repair Add Health": 25,
						"support Snapping": false
					},
					"sell Price": 0,
					"itemTypeTag":
					{
						"tagName": "Item.Category.FinalItem"
					},
					"tier": 3
				}
			},
			"displayName": "weapon_rocket",
			"category": "",
			"balanceFlags": [
				"recipe_only_output"
			]
		},
		{
			"key": "item:Wood",
			"itemId": "Wood",
			"knownItemData": true,
			"naturalResource": true,
			"producedByRecipes": [],
			"consumedByRecipes": [],
			"droppedByAi": [],
			"droppedByMinerals": [],
			"directProducerCount": 0,
			"directConsumerCount": 0,
			"aiDropSourceCount": 0,
			"mineralDropSourceCount": 0,
			"directSourceCount": 0,
			"directUseCount": 0,
			"directRecipeInputQuantity": 0,
			"upgradeDemandQuantity": 0,
			"sinkClassification": "not terminal",
			"requiredQuantityByGroup":
			{
			},
			"producedQuantityByGroup":
			{
			},
			"producedRecipeGroups": [],
			"consumedRecipeGroups": [],
			"downstreamChains": [],
			"pickupResolved": true,
			"pickupBlueprintName": "BP_Floating_WorldItem_Wood",
			"pickupFailureReason": "",
			"itemData":
			{
				"itemId": "Wood",
				"displayName": "Wood",
				"category": "",
				"sourceTable": "/Game/UltimateSurvivalPack/Blueprints/Datatable/Inventory/DT_ItemData_StratoWard.DT_ItemData_StratoWard",
				"raw":
				{
					"name": "Wood",
					"description": "Crafting Material.",
					"maximum Stack": 8,
					"item Type": "Other",
					"icon": "/Script/Engine.Texture2D'/Game/StratoWard/UI/Icons/Icons_Raw_Basalt.Icons_Raw_Basalt'",
					"item Mesh": "/Script/Engine.StaticMesh'/Game/UltimateSurvivalPack/Demo/Mesh/SM_Logs.SM_Logs'",
					"survival Properties":
					{
						"health to Add": 0,
						"hunger to Add": 0,
						"thirst to Add": 0,
						"cosume Sound": "/Script/Engine.SoundCue'/Game/UltimateSurvivalPack/Demo/Audio/SFX/CUE_EatSound.CUE_EatSound'",
						"effect Time": 0
					},
					"holdable Class": "None",
					"armor Properties":
					{
						"armor to Add": "Head",
						"armor Male Mesh": "None",
						"armor Female Mesh": "None",
						"armor Protection Percent": 0,
						"hide Mesh": [],
						"slots to Add": 0,
						"temperature to Add": 0
					},
					"building Data":
					{
						"build Type": "Prop",
						"ghost Mesh": "/Script/Engine.BlueprintGeneratedClass'/Game/UltimateSurvivalPack/Blueprints/Buildings/Ghost/BP_Ghost_StorageChest.BP_Ghost_StorageChest_C'",
						"collision Transform":
						{
							"rotation":
							{
								"x": 0,
								"y": -0,
								"z": 0,
								"w": 1
							},
							"translation":
							{
								"x": 0,
								"y": 0,
								"z": 50
							},
							"scale3D":
							{
								"x": 43,
								"y": 63,
								"z": 45
							}
						},
						"final Building Class": "/Script/Engine.BlueprintGeneratedClass'/Game/UltimateSurvivalPack/Blueprints/Buildings/Final/BP_Chest.BP_Chest_C'",
						"health": 500,
						"repair Add Health": 25,
						"support Snapping": false
					},
					"sell Price": 2,
					"itemTypeTag":
					{
						"tagName": "None"
					},
					"tier": 0
				}
			},
			"displayName": "Wood",
			"category": "",
			"balanceFlags": [
				"missing_sources",
				"no_sinks"
			]
		}
	],
	"recipes": [
		{
			"key": "recipe:DT_Recipes_Crafting:cmp_wire_coils",
			"rowName": "cmp_wire_coils",
			"tableName": "DT_Recipes_Crafting",
			"tablePath": "/Game/Data/Items/DT_Recipes_Crafting.DT_Recipes_Crafting",
			"group": "crafting",
			"timeRequired": 0,
			"inputs": [
				{
					"itemId": "mat_copper",
					"amount": 2
				}
			],
			"outputs": [
				{
					"itemId": "cmp_wire_coils",
					"amount": 2
				}
			],
			"raw":
			{
				"outputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "cmp_wire_coils"
						},
						"amount": 2
					}
				],
				"inputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "mat_copper"
						},
						"amount": 2
					}
				],
				"timeRequired": 0
			}
		},
		{
			"key": "recipe:DT_Recipes_Crafting:tool_mining",
			"rowName": "tool_mining",
			"tableName": "DT_Recipes_Crafting",
			"tablePath": "/Game/Data/Items/DT_Recipes_Crafting.DT_Recipes_Crafting",
			"group": "crafting",
			"timeRequired": 0,
			"inputs": [
				{
					"itemId": "mat_stainless_steel",
					"amount": 2
				},
				{
					"itemId": "cmp_servo_motors",
					"amount": 1
				}
			],
			"outputs": [
				{
					"itemId": "tool_mining",
					"amount": 1
				}
			],
			"raw":
			{
				"outputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "tool_mining"
						},
						"amount": 1
					}
				],
				"inputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "mat_stainless_steel"
						},
						"amount": 2
					},
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "cmp_servo_motors"
						},
						"amount": 1
					}
				],
				"timeRequired": 0
			}
		},
		{
			"key": "recipe:DT_Recipes_Crafting:item_scanner",
			"rowName": "item_scanner",
			"tableName": "DT_Recipes_Crafting",
			"tablePath": "/Game/Data/Items/DT_Recipes_Crafting.DT_Recipes_Crafting",
			"group": "crafting",
			"timeRequired": 0,
			"inputs": [
				{
					"itemId": "mat_polymers",
					"amount": 2
				},
				{
					"itemId": "cmp_microchips",
					"amount": 1
				},
				{
					"itemId": "cmp_tech_data",
					"amount": 1
				}
			],
			"outputs": [
				{
					"itemId": "item_scanner",
					"amount": 1
				}
			],
			"raw":
			{
				"outputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "item_scanner"
						},
						"amount": 1
					}
				],
				"inputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "mat_polymers"
						},
						"amount": 2
					},
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "cmp_microchips"
						},
						"amount": 1
					},
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "cmp_tech_data"
						},
						"amount": 1
					}
				],
				"timeRequired": 0
			}
		},
		{
			"key": "recipe:DT_Recipes_Crafting:module_solar_panel",
			"rowName": "module_solar_panel",
			"tableName": "DT_Recipes_Crafting",
			"tablePath": "/Game/Data/Items/DT_Recipes_Crafting.DT_Recipes_Crafting",
			"group": "crafting",
			"timeRequired": 0,
			"inputs": [
				{
					"itemId": "cmp_structural_panels",
					"amount": 1
				},
				{
					"itemId": "mat_silicon",
					"amount": 2
				}
			],
			"outputs": [
				{
					"itemId": "module_solar_panel",
					"amount": 1
				}
			],
			"raw":
			{
				"outputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "module_solar_panel"
						},
						"amount": 1
					}
				],
				"inputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "cmp_structural_panels"
						},
						"amount": 1
					},
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "mat_silicon"
						},
						"amount": 2
					}
				],
				"timeRequired": 0
			}
		},
		{
			"key": "recipe:DT_Recipes_Crafting:module_turret_repair",
			"rowName": "module_turret_repair",
			"tableName": "DT_Recipes_Crafting",
			"tablePath": "/Game/Data/Items/DT_Recipes_Crafting.DT_Recipes_Crafting",
			"group": "crafting",
			"timeRequired": 0,
			"inputs": [
				{
					"itemId": "cmp_structural_panels",
					"amount": 1
				},
				{
					"itemId": "cmp_servo_motors",
					"amount": 1
				}
			],
			"outputs": [
				{
					"itemId": "module_turret_repair",
					"amount": 1
				}
			],
			"raw":
			{
				"outputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "module_turret_repair"
						},
						"amount": 1
					}
				],
				"inputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "cmp_structural_panels"
						},
						"amount": 1
					},
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "cmp_servo_motors"
						},
						"amount": 1
					}
				],
				"timeRequired": 0
			}
		},
		{
			"key": "recipe:DT_Recipes_Crafting:module_turret_blaster",
			"rowName": "module_turret_blaster",
			"tableName": "DT_Recipes_Crafting",
			"tablePath": "/Game/Data/Items/DT_Recipes_Crafting.DT_Recipes_Crafting",
			"group": "crafting",
			"timeRequired": 0,
			"inputs": [
				{
					"itemId": "cmp_structural_panels",
					"amount": 1
				},
				{
					"itemId": "cmp_wire_coils",
					"amount": 2
				}
			],
			"outputs": [
				{
					"itemId": "module_turret_blaster",
					"amount": 1
				}
			],
			"raw":
			{
				"outputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "module_turret_blaster"
						},
						"amount": 1
					}
				],
				"inputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "cmp_structural_panels"
						},
						"amount": 1
					},
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "cmp_wire_coils"
						},
						"amount": 2
					}
				],
				"timeRequired": 0
			}
		},
		{
			"key": "recipe:DT_Recipes_Crafting:module_turret_laser",
			"rowName": "module_turret_laser",
			"tableName": "DT_Recipes_Crafting",
			"tablePath": "/Game/Data/Items/DT_Recipes_Crafting.DT_Recipes_Crafting",
			"group": "crafting",
			"timeRequired": 0,
			"inputs": [
				{
					"itemId": "cmp_structural_panels",
					"amount": 1
				},
				{
					"itemId": "cmp_microchips",
					"amount": 2
				},
				{
					"itemId": "mat_rare_earth",
					"amount": 1
				}
			],
			"outputs": [
				{
					"itemId": "module_turret_laser",
					"amount": 1
				}
			],
			"raw":
			{
				"outputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "module_turret_laser"
						},
						"amount": 1
					}
				],
				"inputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "cmp_structural_panels"
						},
						"amount": 1
					},
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "cmp_microchips"
						},
						"amount": 2
					},
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "mat_rare_earth"
						},
						"amount": 1
					}
				],
				"timeRequired": 0
			}
		},
		{
			"key": "recipe:DT_Recipes_Crafting:module_turret_rocket",
			"rowName": "module_turret_rocket",
			"tableName": "DT_Recipes_Crafting",
			"tablePath": "/Game/Data/Items/DT_Recipes_Crafting.DT_Recipes_Crafting",
			"group": "crafting",
			"timeRequired": 0,
			"inputs": [
				{
					"itemId": "cmp_structural_panels",
					"amount": 2
				},
				{
					"itemId": "cmp_thruster_parts",
					"amount": 1
				}
			],
			"outputs": [
				{
					"itemId": "module_turret_rocket",
					"amount": 1
				}
			],
			"raw":
			{
				"outputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "module_turret_rocket"
						},
						"amount": 1
					}
				],
				"inputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "cmp_structural_panels"
						},
						"amount": 2
					},
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "cmp_thruster_parts"
						},
						"amount": 1
					}
				],
				"timeRequired": 0
			}
		},
		{
			"key": "recipe:DT_Recipes_Crafting:weapon_blaster",
			"rowName": "weapon_blaster",
			"tableName": "DT_Recipes_Crafting",
			"tablePath": "/Game/Data/Items/DT_Recipes_Crafting.DT_Recipes_Crafting",
			"group": "crafting",
			"timeRequired": 0,
			"inputs": [
				{
					"itemId": "mat_stainless_steel",
					"amount": 1
				},
				{
					"itemId": "cmp_wire_coils",
					"amount": 2
				}
			],
			"outputs": [
				{
					"itemId": "weapon_blaster",
					"amount": 1
				}
			],
			"raw":
			{
				"outputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "weapon_blaster"
						},
						"amount": 1
					}
				],
				"inputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "mat_stainless_steel"
						},
						"amount": 1
					},
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "cmp_wire_coils"
						},
						"amount": 2
					}
				],
				"timeRequired": 0
			}
		},
		{
			"key": "recipe:DT_Recipes_Crafting:weapon_laser",
			"rowName": "weapon_laser",
			"tableName": "DT_Recipes_Crafting",
			"tablePath": "/Game/Data/Items/DT_Recipes_Crafting.DT_Recipes_Crafting",
			"group": "crafting",
			"timeRequired": 0,
			"inputs": [
				{
					"itemId": "cmp_microchips",
					"amount": 2
				},
				{
					"itemId": "mat_rare_earth",
					"amount": 2
				}
			],
			"outputs": [
				{
					"itemId": "weapon_laser",
					"amount": 1
				}
			],
			"raw":
			{
				"outputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "weapon_laser"
						},
						"amount": 1
					}
				],
				"inputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "cmp_microchips"
						},
						"amount": 2
					},
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "mat_rare_earth"
						},
						"amount": 2
					}
				],
				"timeRequired": 0
			}
		},
		{
			"key": "recipe:DT_Recipes_Crafting:weapon_rocket",
			"rowName": "weapon_rocket",
			"tableName": "DT_Recipes_Crafting",
			"tablePath": "/Game/Data/Items/DT_Recipes_Crafting.DT_Recipes_Crafting",
			"group": "crafting",
			"timeRequired": 0,
			"inputs": [
				{
					"itemId": "cmp_thruster_parts",
					"amount": 1
				},
				{
					"itemId": "raw_sulfur",
					"amount": 2
				}
			],
			"outputs": [
				{
					"itemId": "weapon_rocket",
					"amount": 1
				}
			],
			"raw":
			{
				"outputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "weapon_rocket"
						},
						"amount": 1
					}
				],
				"inputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "cmp_thruster_parts"
						},
						"amount": 1
					},
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "raw_sulfur"
						},
						"amount": 2
					}
				],
				"timeRequired": 0
			}
		},
		{
			"key": "recipe:DT_Recipes_Crafting:con_water_pack",
			"rowName": "con_water_pack",
			"tableName": "DT_Recipes_Crafting",
			"tablePath": "/Game/Data/Items/DT_Recipes_Crafting.DT_Recipes_Crafting",
			"group": "crafting",
			"timeRequired": 0,
			"inputs": [
				{
					"itemId": "raw_water_ice",
					"amount": 5
				},
				{
					"itemId": "mat_plastic",
					"amount": 1
				}
			],
			"outputs": [
				{
					"itemId": "con_water_pack",
					"amount": 1
				}
			],
			"raw":
			{
				"outputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "con_water_pack"
						},
						"amount": 1
					}
				],
				"inputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "raw_water_ice"
						},
						"amount": 5
					},
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "mat_plastic"
						},
						"amount": 1
					}
				],
				"timeRequired": 0
			}
		},
		{
			"key": "recipe:DT_Recipes_Crafting:con_fuel",
			"rowName": "con_fuel",
			"tableName": "DT_Recipes_Crafting",
			"tablePath": "/Game/Data/Items/DT_Recipes_Crafting.DT_Recipes_Crafting",
			"group": "crafting",
			"timeRequired": 0,
			"inputs": [
				{
					"itemId": "raw_hydrocarbon_ice",
					"amount": 4
				},
				{
					"itemId": "raw_sulfur",
					"amount": 1
				}
			],
			"outputs": [
				{
					"itemId": "con_fuel",
					"amount": 1300
				}
			],
			"raw":
			{
				"outputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "con_fuel"
						},
						"amount": 1300
					}
				],
				"inputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "raw_hydrocarbon_ice"
						},
						"amount": 4
					},
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "raw_sulfur"
						},
						"amount": 1
					}
				],
				"timeRequired": 0
			}
		},
		{
			"key": "recipe:DT_Recipes_Crafting:con_nutrient_paste",
			"rowName": "con_nutrient_paste",
			"tableName": "DT_Recipes_Crafting",
			"tablePath": "/Game/Data/Items/DT_Recipes_Crafting.DT_Recipes_Crafting",
			"group": "crafting",
			"timeRequired": 0,
			"inputs": [
				{
					"itemId": "raw_water_ice",
					"amount": 3
				},
				{
					"itemId": "raw_slime",
					"amount": 2
				}
			],
			"outputs": [
				{
					"itemId": "con_nutrient_paste",
					"amount": 1
				}
			],
			"raw":
			{
				"outputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "con_nutrient_paste"
						},
						"amount": 1
					}
				],
				"inputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "raw_water_ice"
						},
						"amount": 3
					},
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "raw_slime"
						},
						"amount": 2
					}
				],
				"timeRequired": 0
			}
		},
		{
			"key": "recipe:DT_Recipes_Crafting:con_protein_bar",
			"rowName": "con_protein_bar",
			"tableName": "DT_Recipes_Crafting",
			"tablePath": "/Game/Data/Items/DT_Recipes_Crafting.DT_Recipes_Crafting",
			"group": "crafting",
			"timeRequired": 0,
			"inputs": [
				{
					"itemId": "raw_slime",
					"amount": 2
				},
				{
					"itemId": "raw_tendon_fiber",
					"amount": 1
				}
			],
			"outputs": [
				{
					"itemId": "con_protein_bar",
					"amount": 1
				}
			],
			"raw":
			{
				"outputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "con_protein_bar"
						},
						"amount": 1
					}
				],
				"inputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "raw_slime"
						},
						"amount": 2
					},
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "raw_tendon_fiber"
						},
						"amount": 1
					}
				],
				"timeRequired": 0
			}
		},
		{
			"key": "recipe:DT_Recipes_Crafting:con_synth_steak",
			"rowName": "con_synth_steak",
			"tableName": "DT_Recipes_Crafting",
			"tablePath": "/Game/Data/Items/DT_Recipes_Crafting.DT_Recipes_Crafting",
			"group": "crafting",
			"timeRequired": 0,
			"inputs": [
				{
					"itemId": "raw_slime",
					"amount": 3
				},
				{
					"itemId": "raw_tendon_fiber",
					"amount": 2
				},
				{
					"itemId": "raw_alien_enzyme",
					"amount": 1
				}
			],
			"outputs": [
				{
					"itemId": "con_synth_steak",
					"amount": 1
				}
			],
			"raw":
			{
				"outputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "con_synth_steak"
						},
						"amount": 1
					}
				],
				"inputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "raw_slime"
						},
						"amount": 3
					},
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "raw_tendon_fiber"
						},
						"amount": 2
					},
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "raw_alien_enzyme"
						},
						"amount": 1
					}
				],
				"timeRequired": 0
			}
		},
		{
			"key": "recipe:DT_Recipes_Crafting:cmp_drone_repair",
			"rowName": "cmp_drone_repair",
			"tableName": "DT_Recipes_Crafting",
			"tablePath": "/Game/Data/Items/DT_Recipes_Crafting.DT_Recipes_Crafting",
			"group": "crafting",
			"timeRequired": 0,
			"inputs": [
				{
					"itemId": "cmp_servo_motors",
					"amount": 2
				},
				{
					"itemId": "cmp_circuit_boards",
					"amount": 1
				},
				{
					"itemId": "mat_aluminum_alloy",
					"amount": 2
				}
			],
			"outputs": [
				{
					"itemId": "Drone",
					"amount": 5
				}
			],
			"raw":
			{
				"outputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/UltimateSurvivalPack/Blueprints/Datatable/Inventory/DT_ItemData_StratoWard.DT_ItemData_StratoWard'",
							"rowName": "Drone"
						},
						"amount": 5
					}
				],
				"inputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/UltimateSurvivalPack/Blueprints/Datatable/Inventory/DT_ItemData_StratoWard.DT_ItemData_StratoWard'",
							"rowName": "cmp_servo_motors"
						},
						"amount": 2
					},
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/UltimateSurvivalPack/Blueprints/Datatable/Inventory/DT_ItemData_StratoWard.DT_ItemData_StratoWard'",
							"rowName": "cmp_circuit_boards"
						},
						"amount": 1
					},
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/UltimateSurvivalPack/Blueprints/Datatable/Inventory/DT_ItemData_StratoWard.DT_ItemData_StratoWard'",
							"rowName": "mat_aluminum_alloy"
						},
						"amount": 2
					}
				],
				"timeRequired": 0
			}
		},
		{
			"key": "recipe:DT_Recipes_Refining:mat_copper",
			"rowName": "mat_copper",
			"tableName": "DT_Recipes_Refining",
			"tablePath": "/Game/Data/Items/DT_Recipes_Refining.DT_Recipes_Refining",
			"group": "refining",
			"timeRequired": 45,
			"inputs": [
				{
					"itemId": "raw_copper_sulfide",
					"amount": 3
				}
			],
			"outputs": [
				{
					"itemId": "mat_copper",
					"amount": 2
				}
			],
			"raw":
			{
				"outputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "mat_copper"
						},
						"amount": 2
					}
				],
				"inputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "raw_copper_sulfide"
						},
						"amount": 3
					}
				],
				"timeRequired": 45
			}
		},
		{
			"key": "recipe:DT_Recipes_Refining:mat_aluminum_alloy",
			"rowName": "mat_aluminum_alloy",
			"tableName": "DT_Recipes_Refining",
			"tablePath": "/Game/Data/Items/DT_Recipes_Refining.DT_Recipes_Refining",
			"group": "refining",
			"timeRequired": 60,
			"inputs": [
				{
					"itemId": "raw_bauxite",
					"amount": 4
				},
				{
					"itemId": "raw_titanium",
					"amount": 1
				}
			],
			"outputs": [
				{
					"itemId": "mat_aluminum_alloy",
					"amount": 2
				}
			],
			"raw":
			{
				"outputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "mat_aluminum_alloy"
						},
						"amount": 2
					}
				],
				"inputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "raw_bauxite"
						},
						"amount": 4
					},
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "raw_titanium"
						},
						"amount": 1
					}
				],
				"timeRequired": 60
			}
		},
		{
			"key": "recipe:DT_Recipes_Refining:mat_stainless_steel",
			"rowName": "mat_stainless_steel",
			"tableName": "DT_Recipes_Refining",
			"tablePath": "/Game/Data/Items/DT_Recipes_Refining.DT_Recipes_Refining",
			"group": "refining",
			"timeRequired": 90,
			"inputs": [
				{
					"itemId": "raw_nickel_iron",
					"amount": 4
				},
				{
					"itemId": "raw_chromium",
					"amount": 1
				},
				{
					"itemId": "raw_cobalt",
					"amount": 1
				}
			],
			"outputs": [
				{
					"itemId": "mat_stainless_steel",
					"amount": 2
				}
			],
			"raw":
			{
				"outputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "mat_stainless_steel"
						},
						"amount": 2
					}
				],
				"inputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "raw_nickel_iron"
						},
						"amount": 4
					},
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "raw_chromium"
						},
						"amount": 1
					},
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "raw_cobalt"
						},
						"amount": 1
					}
				],
				"timeRequired": 90
			}
		},
		{
			"key": "recipe:DT_Recipes_Refining:mat_silicon",
			"rowName": "mat_silicon",
			"tableName": "DT_Recipes_Refining",
			"tablePath": "/Game/Data/Items/DT_Recipes_Refining.DT_Recipes_Refining",
			"group": "refining",
			"timeRequired": 45,
			"inputs": [
				{
					"itemId": "raw_silicate_sand",
					"amount": 4
				}
			],
			"outputs": [
				{
					"itemId": "mat_silicon",
					"amount": 2
				}
			],
			"raw":
			{
				"outputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "mat_silicon"
						},
						"amount": 2
					}
				],
				"inputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "raw_silicate_sand"
						},
						"amount": 4
					}
				],
				"timeRequired": 45
			}
		},
		{
			"key": "recipe:DT_Recipes_Refining:mat_rare_earth",
			"rowName": "mat_rare_earth",
			"tableName": "DT_Recipes_Refining",
			"tablePath": "/Game/Data/Items/DT_Recipes_Refining.DT_Recipes_Refining",
			"group": "refining",
			"timeRequired": 120,
			"inputs": [
				{
					"itemId": "raw_lanthanide",
					"amount": 3
				}
			],
			"outputs": [
				{
					"itemId": "mat_rare_earth",
					"amount": 1
				}
			],
			"raw":
			{
				"outputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "mat_rare_earth"
						},
						"amount": 1
					}
				],
				"inputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "raw_lanthanide"
						},
						"amount": 3
					}
				],
				"timeRequired": 120
			}
		},
		{
			"key": "recipe:DT_Recipes_Refining:mat_insulation",
			"rowName": "mat_insulation",
			"tableName": "DT_Recipes_Refining",
			"tablePath": "/Game/Data/Items/DT_Recipes_Refining.DT_Recipes_Refining",
			"group": "refining",
			"timeRequired": 60,
			"inputs": [
				{
					"itemId": "raw_basalt",
					"amount": 3
				},
				{
					"itemId": "raw_ammonia_ice",
					"amount": 2
				}
			],
			"outputs": [
				{
					"itemId": "mat_insulation",
					"amount": 2
				}
			],
			"raw":
			{
				"outputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "mat_insulation"
						},
						"amount": 2
					}
				],
				"inputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "raw_basalt"
						},
						"amount": 3
					},
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "raw_ammonia_ice"
						},
						"amount": 2
					}
				],
				"timeRequired": 60
			}
		},
		{
			"key": "recipe:DT_Recipes_Refining:mat_plastic",
			"rowName": "mat_plastic",
			"tableName": "DT_Recipes_Refining",
			"tablePath": "/Game/Data/Items/DT_Recipes_Refining.DT_Recipes_Refining",
			"group": "refining",
			"timeRequired": 45,
			"inputs": [
				{
					"itemId": "raw_carbon_dust",
					"amount": 3
				},
				{
					"itemId": "raw_hydrocarbon_ice",
					"amount": 2
				}
			],
			"outputs": [
				{
					"itemId": "mat_plastic",
					"amount": 3
				}
			],
			"raw":
			{
				"outputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "mat_plastic"
						},
						"amount": 3
					}
				],
				"inputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "raw_carbon_dust"
						},
						"amount": 3
					},
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "raw_hydrocarbon_ice"
						},
						"amount": 2
					}
				],
				"timeRequired": 45
			}
		},
		{
			"key": "recipe:DT_Recipes_Refining:mat_polymers",
			"rowName": "mat_polymers",
			"tableName": "DT_Recipes_Refining",
			"tablePath": "/Game/Data/Items/DT_Recipes_Refining.DT_Recipes_Refining",
			"group": "refining",
			"timeRequired": 75,
			"inputs": [
				{
					"itemId": "raw_carbon_dust",
					"amount": 2
				},
				{
					"itemId": "raw_ammonia_ice",
					"amount": 1
				},
				{
					"itemId": "raw_alien_enzyme",
					"amount": 1
				}
			],
			"outputs": [
				{
					"itemId": "mat_polymers",
					"amount": 2
				}
			],
			"raw":
			{
				"outputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "mat_polymers"
						},
						"amount": 2
					}
				],
				"inputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "raw_carbon_dust"
						},
						"amount": 2
					},
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "raw_ammonia_ice"
						},
						"amount": 1
					},
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "raw_alien_enzyme"
						},
						"amount": 1
					}
				],
				"timeRequired": 75
			}
		},
		{
			"key": "recipe:DT_Recipes_Refining:cmp_servo_motors",
			"rowName": "cmp_servo_motors",
			"tableName": "DT_Recipes_Refining",
			"tablePath": "/Game/Data/Items/DT_Recipes_Refining.DT_Recipes_Refining",
			"group": "refining",
			"timeRequired": 90,
			"inputs": [
				{
					"itemId": "mat_stainless_steel",
					"amount": 1
				},
				{
					"itemId": "mat_rare_earth",
					"amount": 1
				}
			],
			"outputs": [
				{
					"itemId": "cmp_servo_motors",
					"amount": 1
				}
			],
			"raw":
			{
				"outputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "cmp_servo_motors"
						},
						"amount": 1
					}
				],
				"inputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "mat_stainless_steel"
						},
						"amount": 1
					},
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "mat_rare_earth"
						},
						"amount": 1
					}
				],
				"timeRequired": 90
			}
		},
		{
			"key": "recipe:DT_Recipes_Refining:cmp_microchips",
			"rowName": "cmp_microchips",
			"tableName": "DT_Recipes_Refining",
			"tablePath": "/Game/Data/Items/DT_Recipes_Refining.DT_Recipes_Refining",
			"group": "refining",
			"timeRequired": 90,
			"inputs": [
				{
					"itemId": "mat_silicon",
					"amount": 2
				},
				{
					"itemId": "mat_rare_earth",
					"amount": 1
				}
			],
			"outputs": [
				{
					"itemId": "cmp_microchips",
					"amount": 1
				}
			],
			"raw":
			{
				"outputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "cmp_microchips"
						},
						"amount": 1
					}
				],
				"inputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "mat_silicon"
						},
						"amount": 2
					},
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "mat_rare_earth"
						},
						"amount": 1
					}
				],
				"timeRequired": 90
			}
		},
		{
			"key": "recipe:DT_Recipes_Refining:cmp_circuit_boards",
			"rowName": "cmp_circuit_boards",
			"tableName": "DT_Recipes_Refining",
			"tablePath": "/Game/Data/Items/DT_Recipes_Refining.DT_Recipes_Refining",
			"group": "refining",
			"timeRequired": 60,
			"inputs": [
				{
					"itemId": "mat_plastic",
					"amount": 2
				},
				{
					"itemId": "mat_copper",
					"amount": 1
				},
				{
					"itemId": "mat_silicon",
					"amount": 1
				}
			],
			"outputs": [
				{
					"itemId": "cmp_circuit_boards",
					"amount": 1
				}
			],
			"raw":
			{
				"outputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "cmp_circuit_boards"
						},
						"amount": 1
					}
				],
				"inputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "mat_plastic"
						},
						"amount": 2
					},
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "mat_copper"
						},
						"amount": 1
					},
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "mat_silicon"
						},
						"amount": 1
					}
				],
				"timeRequired": 60
			}
		},
		{
			"key": "recipe:DT_Recipes_Refining:cmp_tech_data",
			"rowName": "cmp_tech_data",
			"tableName": "DT_Recipes_Refining",
			"tablePath": "/Game/Data/Items/DT_Recipes_Refining.DT_Recipes_Refining",
			"group": "refining",
			"timeRequired": 120,
			"inputs": [
				{
					"itemId": "cmp_microchips",
					"amount": 1
				},
				{
					"itemId": "cmp_circuit_boards",
					"amount": 1
				}
			],
			"outputs": [
				{
					"itemId": "cmp_tech_data",
					"amount": 1
				}
			],
			"raw":
			{
				"outputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "cmp_tech_data"
						},
						"amount": 1
					}
				],
				"inputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "cmp_microchips"
						},
						"amount": 1
					},
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "cmp_circuit_boards"
						},
						"amount": 1
					}
				],
				"timeRequired": 120
			}
		},
		{
			"key": "recipe:DT_Recipes_Refining:cmp_structural_panels",
			"rowName": "cmp_structural_panels",
			"tableName": "DT_Recipes_Refining",
			"tablePath": "/Game/Data/Items/DT_Recipes_Refining.DT_Recipes_Refining",
			"group": "refining",
			"timeRequired": 120,
			"inputs": [
				{
					"itemId": "mat_aluminum_alloy",
					"amount": 3
				},
				{
					"itemId": "mat_stainless_steel",
					"amount": 2
				},
				{
					"itemId": "mat_insulation",
					"amount": 1
				}
			],
			"outputs": [
				{
					"itemId": "cmp_structural_panels",
					"amount": 2
				}
			],
			"raw":
			{
				"outputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "cmp_structural_panels"
						},
						"amount": 2
					}
				],
				"inputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "mat_aluminum_alloy"
						},
						"amount": 3
					},
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "mat_stainless_steel"
						},
						"amount": 2
					},
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "mat_insulation"
						},
						"amount": 1
					}
				],
				"timeRequired": 120
			}
		},
		{
			"key": "recipe:DT_Recipes_Refining:cmp_thruster_parts",
			"rowName": "cmp_thruster_parts",
			"tableName": "DT_Recipes_Refining",
			"tablePath": "/Game/Data/Items/DT_Recipes_Refining.DT_Recipes_Refining",
			"group": "refining",
			"timeRequired": 150,
			"inputs": [
				{
					"itemId": "mat_aluminum_alloy",
					"amount": 2
				},
				{
					"itemId": "mat_polymers",
					"amount": 2
				},
				{
					"itemId": "raw_lithium_ice",
					"amount": 1
				}
			],
			"outputs": [
				{
					"itemId": "cmp_thruster_parts",
					"amount": 1
				}
			],
			"raw":
			{
				"outputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "cmp_thruster_parts"
						},
						"amount": 1
					}
				],
				"inputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "mat_aluminum_alloy"
						},
						"amount": 2
					},
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "mat_polymers"
						},
						"amount": 2
					},
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_Items.DT_Items'",
							"rowName": "raw_lithium_ice"
						},
						"amount": 1
					}
				],
				"timeRequired": 150
			}
		},
		{
			"key": "recipe:DT_Recipes_Upgrade_01:UpgradeShip",
			"rowName": "UpgradeShip",
			"tableName": "DT_Recipes_Upgrade_01",
			"tablePath": "/Game/Data/Items/DT_Recipes_Upgrade_01.DT_Recipes_Upgrade_01",
			"group": "upgrade",
			"timeRequired": 0,
			"inputs": [
				{
					"itemId": "cmp_structural_panels",
					"amount": 12
				},
				{
					"itemId": "cmp_wire_coils",
					"amount": 35
				},
				{
					"itemId": "cmp_servo_motors",
					"amount": 8
				},
				{
					"itemId": "cmp_circuit_boards",
					"amount": 4
				}
			],
			"outputs": [
				{
					"itemId": "UpgradeShip",
					"amount": 1
				}
			],
			"raw":
			{
				"outputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/UltimateSurvivalPack/Blueprints/Datatable/Inventory/DT_ItemData_StratoWard.DT_ItemData_StratoWard'",
							"rowName": "UpgradeShip"
						},
						"amount": 1
					}
				],
				"inputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_ItemData.DT_ItemData'",
							"rowName": "cmp_structural_panels"
						},
						"amount": 12
					},
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_ItemData.DT_ItemData'",
							"rowName": "cmp_wire_coils"
						},
						"amount": 35
					},
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_ItemData.DT_ItemData'",
							"rowName": "cmp_servo_motors"
						},
						"amount": 8
					},
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_ItemData.DT_ItemData'",
							"rowName": "cmp_circuit_boards"
						},
						"amount": 4
					}
				],
				"timeRequired": 0
			}
		},
		{
			"key": "recipe:DT_Recipes_Upgrade_02:UpgradeShip",
			"rowName": "UpgradeShip",
			"tableName": "DT_Recipes_Upgrade_02",
			"tablePath": "/Game/Data/Items/DT_Recipes_Upgrade_02.DT_Recipes_Upgrade_02",
			"group": "upgrade",
			"timeRequired": 0,
			"inputs": [
				{
					"itemId": "cmp_structural_panels",
					"amount": 34
				},
				{
					"itemId": "cmp_wire_coils",
					"amount": 98
				},
				{
					"itemId": "cmp_servo_motors",
					"amount": 25
				},
				{
					"itemId": "cmp_circuit_boards",
					"amount": 15
				}
			],
			"outputs": [
				{
					"itemId": "UpgradeShip",
					"amount": 1
				}
			],
			"raw":
			{
				"outputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/UltimateSurvivalPack/Blueprints/Datatable/Inventory/DT_ItemData_StratoWard.DT_ItemData_StratoWard'",
							"rowName": "UpgradeShip"
						},
						"amount": 1
					}
				],
				"inputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_ItemData.DT_ItemData'",
							"rowName": "cmp_structural_panels"
						},
						"amount": 34
					},
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_ItemData.DT_ItemData'",
							"rowName": "cmp_wire_coils"
						},
						"amount": 98
					},
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_ItemData.DT_ItemData'",
							"rowName": "cmp_servo_motors"
						},
						"amount": 25
					},
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_ItemData.DT_ItemData'",
							"rowName": "cmp_circuit_boards"
						},
						"amount": 15
					}
				],
				"timeRequired": 0
			}
		},
		{
			"key": "recipe:DT_Recipes_Upgrade_03:UpgradeShip",
			"rowName": "UpgradeShip",
			"tableName": "DT_Recipes_Upgrade_03",
			"tablePath": "/Game/Data/Items/DT_Recipes_Upgrade_03.DT_Recipes_Upgrade_03",
			"group": "upgrade",
			"timeRequired": 0,
			"inputs": [
				{
					"itemId": "cmp_structural_panels",
					"amount": 127
				},
				{
					"itemId": "cmp_wire_coils",
					"amount": 230
				},
				{
					"itemId": "cmp_servo_motors",
					"amount": 62
				},
				{
					"itemId": "cmp_circuit_boards",
					"amount": 38
				}
			],
			"outputs": [
				{
					"itemId": "UpgradeShip",
					"amount": 1
				}
			],
			"raw":
			{
				"outputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/UltimateSurvivalPack/Blueprints/Datatable/Inventory/DT_ItemData_StratoWard.DT_ItemData_StratoWard'",
							"rowName": "UpgradeShip"
						},
						"amount": 1
					}
				],
				"inputItems": [
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_ItemData.DT_ItemData'",
							"rowName": "cmp_structural_panels"
						},
						"amount": 127
					},
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_ItemData.DT_ItemData'",
							"rowName": "cmp_wire_coils"
						},
						"amount": 230
					},
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_ItemData.DT_ItemData'",
							"rowName": "cmp_servo_motors"
						},
						"amount": 62
					},
					{
						"itemRow":
						{
							"dataTable": "/Script/Engine.DataTable'/Game/Data/Items/DT_ItemData.DT_ItemData'",
							"rowName": "cmp_circuit_boards"
						},
						"amount": 38
					}
				],
				"timeRequired": 0
			}
		}
	],
	"minerals": [
		{
			"key": "mineral:commonMetal",
			"familyId": "commonMetal",
			"displayName": "Common Metal",
			"blueprintAssetPath": "/Game/VFX/Effects/Mining/MiningV2/Minerals/BP_Mineral_Metallic.BP_Mineral_Metallic",
			"rarityScore": 0.18000000715255737,
			"autoSpawnWeight": 3.2000000476837158,
			"defaultPlacement":
			{
				"nearBias": 2.4000000953674316,
				"midBias": 1,
				"farBias": 0.25,
				"edgeFalloff": 0.55000001192092896,
				"minimumPresence": 0.039999999105930328
			},
			"generatedProfileSamples": [
				{
					"band": "near",
					"distanceAlpha": 0,
					"coreCommonMultiplier": 1.5499999523162842,
					"coreRareMultiplier": 0.55000001192092896,
					"bleedMultiplier": 0.94999998807907104
				},
				{
					"band": "mid",
					"distanceAlpha": 0.5,
					"coreCommonMultiplier": 1.2129151821136475,
					"coreRareMultiplier": 1.0779640674591064,
					"bleedMultiplier": 1.0109189748764038
				},
				{
					"band": "far",
					"distanceAlpha": 1,
					"coreCommonMultiplier": 0.72000002861022949,
					"coreRareMultiplier": 1.8499999046325684,
					"bleedMultiplier": 1.1000000238418579
				}
			],
			"lootSourceReadMode": "preview_actor",
			"lootSourceSummary": "transient preview actor BP_Mineral_Metallic_C_0",
			"fallbackItemId": "raw_nickel_iron",
			"lootPulseInterval": 0.30000001192092896,
			"maxItemsPerPickupStack": 0,
			"maxPerSuccessfulPulse": [
				{
					"itemId": "raw_basalt",
					"maxAmount": 1,
					"source": "lootTable"
				},
				{
					"itemId": "raw_bauxite",
					"maxAmount": 2,
					"source": "lootTable"
				},
				{
					"itemId": "raw_carbon_dust",
					"maxAmount": 1,
					"source": "lootTable"
				},
				{
					"itemId": "raw_chromium",
					"maxAmount": 2,
					"source": "lootTable"
				},
				{
					"itemId": "raw_cobalt",
					"maxAmount": 2,
					"source": "lootTable"
				},
				{
					"itemId": "raw_copper_sulfide",
					"maxAmount": 2,
					"source": "lootTable"
				},
				{
					"itemId": "raw_lanthanide",
					"maxAmount": 2,
					"source": "lootTable"
				},
				{
					"itemId": "raw_nickel_iron",
					"maxAmount": 2,
					"source": "lootTable"
				},
				{
					"itemId": "raw_sulfur",
					"maxAmount": 1,
					"source": "lootTable"
				},
				{
					"itemId": "raw_titanium",
					"maxAmount": 2,
					"source": "lootTable"
				},
				{
					"itemId": "raw_water_ice",
					"maxAmount": 1,
					"source": "lootTable"
				}
			],
			"fullMiningMaxAvailable": false,
			"fullMiningMaxReason": "Unknown successful MiningV2 pulse count; dashboard does not estimate total.",
			"drops": [
				{
					"itemId": "raw_nickel_iron",
					"chanceWeight": 24,
					"rollChance": 1,
					"lootBucket": "CoreCommon",
					"minAmount": 1,
					"maxAmount": 2
				},
				{
					"itemId": "raw_copper_sulfide",
					"chanceWeight": 18,
					"rollChance": 1,
					"lootBucket": "CoreCommon",
					"minAmount": 1,
					"maxAmount": 2
				},
				{
					"itemId": "raw_bauxite",
					"chanceWeight": 15,
					"rollChance": 1,
					"lootBucket": "CoreCommon",
					"minAmount": 1,
					"maxAmount": 2
				},
				{
					"itemId": "raw_chromium",
					"chanceWeight": 12,
					"rollChance": 1,
					"lootBucket": "CoreCommon",
					"minAmount": 1,
					"maxAmount": 2
				},
				{
					"itemId": "raw_titanium",
					"chanceWeight": 4,
					"rollChance": 1,
					"lootBucket": "CoreRare",
					"minAmount": 1,
					"maxAmount": 2
				},
				{
					"itemId": "raw_cobalt",
					"chanceWeight": 3,
					"rollChance": 1,
					"lootBucket": "CoreRare",
					"minAmount": 1,
					"maxAmount": 2
				},
				{
					"itemId": "raw_lanthanide",
					"chanceWeight": 2,
					"rollChance": 1,
					"lootBucket": "CoreRare",
					"minAmount": 1,
					"maxAmount": 2
				},
				{
					"itemId": "raw_water_ice",
					"chanceWeight": 9,
					"rollChance": 1,
					"lootBucket": "Bleed",
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_carbon_dust",
					"chanceWeight": 6,
					"rollChance": 1,
					"lootBucket": "Bleed",
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_sulfur",
					"chanceWeight": 5,
					"rollChance": 1,
					"lootBucket": "Bleed",
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_basalt",
					"chanceWeight": 5,
					"rollChance": 1,
					"lootBucket": "Bleed",
					"minAmount": 1,
					"maxAmount": 1
				}
			]
		},
		{
			"key": "mineral:rareMetal",
			"familyId": "rareMetal",
			"displayName": "Rare Metal",
			"blueprintAssetPath": "/Game/VFX/Effects/Mining/MiningV2/Minerals/BP_Mineral_RareMetal.BP_Mineral_RareMetal",
			"rarityScore": 0.8399999737739563,
			"autoSpawnWeight": 0.64999997615814209,
			"defaultPlacement":
			{
				"nearBias": 0.079999998211860657,
				"midBias": 0.60000002384185791,
				"farBias": 2.7999999523162842,
				"edgeFalloff": 0.85000002384185791,
				"minimumPresence": 0.019999999552965164
			},
			"generatedProfileSamples": [
				{
					"band": "near",
					"distanceAlpha": 0,
					"coreCommonMultiplier": 1.5499999523162842,
					"coreRareMultiplier": 0.55000001192092896,
					"bleedMultiplier": 0.94999998807907104
				},
				{
					"band": "mid",
					"distanceAlpha": 0.5,
					"coreCommonMultiplier": 1.2129151821136475,
					"coreRareMultiplier": 1.0779640674591064,
					"bleedMultiplier": 1.0109189748764038
				},
				{
					"band": "far",
					"distanceAlpha": 1,
					"coreCommonMultiplier": 0.72000002861022949,
					"coreRareMultiplier": 1.8499999046325684,
					"bleedMultiplier": 1.1000000238418579
				}
			],
			"lootSourceReadMode": "preview_actor",
			"lootSourceSummary": "transient preview actor BP_Mineral_RareMetal_C_0",
			"fallbackItemId": "raw_titanium",
			"lootPulseInterval": 0.25999999046325684,
			"maxItemsPerPickupStack": 0,
			"maxPerSuccessfulPulse": [
				{
					"itemId": "raw_basalt",
					"maxAmount": 1,
					"source": "lootTable"
				},
				{
					"itemId": "raw_bauxite",
					"maxAmount": 2,
					"source": "lootTable"
				},
				{
					"itemId": "raw_carapace",
					"maxAmount": 1,
					"source": "lootTable"
				},
				{
					"itemId": "raw_chromium",
					"maxAmount": 2,
					"source": "lootTable"
				},
				{
					"itemId": "raw_cobalt",
					"maxAmount": 2,
					"source": "lootTable"
				},
				{
					"itemId": "raw_copper_sulfide",
					"maxAmount": 2,
					"source": "lootTable"
				},
				{
					"itemId": "raw_lanthanide",
					"maxAmount": 2,
					"source": "lootTable"
				},
				{
					"itemId": "raw_nickel_iron",
					"maxAmount": 2,
					"source": "lootTable"
				},
				{
					"itemId": "raw_slime",
					"maxAmount": 1,
					"source": "lootTable"
				},
				{
					"itemId": "raw_titanium",
					"maxAmount": 2,
					"source": "lootTable"
				},
				{
					"itemId": "raw_water_ice",
					"maxAmount": 1,
					"source": "lootTable"
				}
			],
			"fullMiningMaxAvailable": false,
			"fullMiningMaxReason": "Unknown successful MiningV2 pulse count; dashboard does not estimate total.",
			"drops": [
				{
					"itemId": "raw_chromium",
					"chanceWeight": 14,
					"rollChance": 1,
					"lootBucket": "CoreCommon",
					"minAmount": 1,
					"maxAmount": 2
				},
				{
					"itemId": "raw_nickel_iron",
					"chanceWeight": 8,
					"rollChance": 1,
					"lootBucket": "CoreCommon",
					"minAmount": 1,
					"maxAmount": 2
				},
				{
					"itemId": "raw_copper_sulfide",
					"chanceWeight": 6,
					"rollChance": 1,
					"lootBucket": "CoreCommon",
					"minAmount": 1,
					"maxAmount": 2
				},
				{
					"itemId": "raw_bauxite",
					"chanceWeight": 5,
					"rollChance": 1,
					"lootBucket": "CoreCommon",
					"minAmount": 1,
					"maxAmount": 2
				},
				{
					"itemId": "raw_titanium",
					"chanceWeight": 22,
					"rollChance": 1,
					"lootBucket": "CoreRare",
					"minAmount": 1,
					"maxAmount": 2
				},
				{
					"itemId": "raw_cobalt",
					"chanceWeight": 18,
					"rollChance": 1,
					"lootBucket": "CoreRare",
					"minAmount": 1,
					"maxAmount": 2
				},
				{
					"itemId": "raw_lanthanide",
					"chanceWeight": 16,
					"rollChance": 1,
					"lootBucket": "CoreRare",
					"minAmount": 1,
					"maxAmount": 2
				},
				{
					"itemId": "raw_basalt",
					"chanceWeight": 3,
					"rollChance": 1,
					"lootBucket": "Bleed",
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_water_ice",
					"chanceWeight": 2,
					"rollChance": 1,
					"lootBucket": "Bleed",
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_carapace",
					"chanceWeight": 2,
					"rollChance": 1,
					"lootBucket": "Bleed",
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_slime",
					"chanceWeight": 2,
					"rollChance": 1,
					"lootBucket": "Bleed",
					"minAmount": 1,
					"maxAmount": 1
				}
			]
		},
		{
			"key": "mineral:volatileIce",
			"familyId": "volatileIce",
			"displayName": "Volatile Ice",
			"blueprintAssetPath": "/Game/VFX/Effects/Mining/MiningV2/Minerals/BP_Mineral_Ice.BP_Mineral_Ice",
			"rarityScore": 0.30000001192092896,
			"autoSpawnWeight": 2.4500000476837158,
			"defaultPlacement":
			{
				"nearBias": 0.75,
				"midBias": 1.5499999523162842,
				"farBias": 0.94999998807907104,
				"edgeFalloff": 0.55000001192092896,
				"minimumPresence": 0.059999998658895493
			},
			"generatedProfileSamples": [
				{
					"band": "near",
					"distanceAlpha": 0,
					"coreCommonMultiplier": 1.5499999523162842,
					"coreRareMultiplier": 0.55000001192092896,
					"bleedMultiplier": 0.94999998807907104
				},
				{
					"band": "mid",
					"distanceAlpha": 0.5,
					"coreCommonMultiplier": 1.2129151821136475,
					"coreRareMultiplier": 1.0779640674591064,
					"bleedMultiplier": 1.0109189748764038
				},
				{
					"band": "far",
					"distanceAlpha": 1,
					"coreCommonMultiplier": 0.72000002861022949,
					"coreRareMultiplier": 1.8499999046325684,
					"bleedMultiplier": 1.1000000238418579
				}
			],
			"lootSourceReadMode": "preview_actor",
			"lootSourceSummary": "transient preview actor BP_Mineral_Ice_C_0",
			"fallbackItemId": "raw_water_ice",
			"lootPulseInterval": 0.23999999463558197,
			"maxItemsPerPickupStack": 0,
			"maxPerSuccessfulPulse": [
				{
					"itemId": "raw_ammonia_ice",
					"maxAmount": 2,
					"source": "lootTable"
				},
				{
					"itemId": "raw_basalt",
					"maxAmount": 1,
					"source": "lootTable"
				},
				{
					"itemId": "raw_carbon_dust",
					"maxAmount": 1,
					"source": "lootTable"
				},
				{
					"itemId": "raw_hydrocarbon_ice",
					"maxAmount": 2,
					"source": "lootTable"
				},
				{
					"itemId": "raw_lithium_ice",
					"maxAmount": 2,
					"source": "lootTable"
				},
				{
					"itemId": "raw_nickel_iron",
					"maxAmount": 1,
					"source": "lootTable"
				},
				{
					"itemId": "raw_silicate_sand",
					"maxAmount": 1,
					"source": "lootTable"
				},
				{
					"itemId": "raw_slime",
					"maxAmount": 1,
					"source": "lootTable"
				},
				{
					"itemId": "raw_spores",
					"maxAmount": 1,
					"source": "lootTable"
				},
				{
					"itemId": "raw_sulfur",
					"maxAmount": 1,
					"source": "lootTable"
				},
				{
					"itemId": "raw_water_ice",
					"maxAmount": 2,
					"source": "lootTable"
				}
			],
			"fullMiningMaxAvailable": false,
			"fullMiningMaxReason": "Unknown successful MiningV2 pulse count; dashboard does not estimate total.",
			"drops": [
				{
					"itemId": "raw_water_ice",
					"chanceWeight": 24,
					"rollChance": 1,
					"lootBucket": "CoreCommon",
					"minAmount": 1,
					"maxAmount": 2
				},
				{
					"itemId": "raw_hydrocarbon_ice",
					"chanceWeight": 20,
					"rollChance": 1,
					"lootBucket": "CoreCommon",
					"minAmount": 1,
					"maxAmount": 2
				},
				{
					"itemId": "raw_ammonia_ice",
					"chanceWeight": 14,
					"rollChance": 1,
					"lootBucket": "CoreRare",
					"minAmount": 1,
					"maxAmount": 2
				},
				{
					"itemId": "raw_lithium_ice",
					"chanceWeight": 10,
					"rollChance": 1,
					"lootBucket": "CoreRare",
					"minAmount": 1,
					"maxAmount": 2
				},
				{
					"itemId": "raw_sulfur",
					"chanceWeight": 7,
					"rollChance": 1,
					"lootBucket": "Bleed",
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_carbon_dust",
					"chanceWeight": 6,
					"rollChance": 1,
					"lootBucket": "Bleed",
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_basalt",
					"chanceWeight": 4,
					"rollChance": 1,
					"lootBucket": "Bleed",
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_nickel_iron",
					"chanceWeight": 4,
					"rollChance": 1,
					"lootBucket": "Bleed",
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_silicate_sand",
					"chanceWeight": 3,
					"rollChance": 1,
					"lootBucket": "Bleed",
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_slime",
					"chanceWeight": 3,
					"rollChance": 1,
					"lootBucket": "Bleed",
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_spores",
					"chanceWeight": 2,
					"rollChance": 1,
					"lootBucket": "Bleed",
					"minAmount": 1,
					"maxAmount": 1
				}
			]
		},
		{
			"key": "mineral:rockyCarbon",
			"familyId": "rockyCarbon",
			"displayName": "Rocky Carbon",
			"blueprintAssetPath": "/Game/VFX/Effects/Mining/MiningV2/Minerals/BP_Mineral_Rocky.BP_Mineral_Rocky",
			"rarityScore": 0.25999999046325684,
			"autoSpawnWeight": 2.5499999523162842,
			"defaultPlacement":
			{
				"nearBias": 1.6499999761581421,
				"midBias": 1,
				"farBias": 0.40000000596046448,
				"edgeFalloff": 0.5,
				"minimumPresence": 0.05000000074505806
			},
			"generatedProfileSamples": [
				{
					"band": "near",
					"distanceAlpha": 0,
					"coreCommonMultiplier": 1.5499999523162842,
					"coreRareMultiplier": 0.55000001192092896,
					"bleedMultiplier": 0.94999998807907104
				},
				{
					"band": "mid",
					"distanceAlpha": 0.5,
					"coreCommonMultiplier": 1.2129151821136475,
					"coreRareMultiplier": 1.0779640674591064,
					"bleedMultiplier": 1.0109189748764038
				},
				{
					"band": "far",
					"distanceAlpha": 1,
					"coreCommonMultiplier": 0.72000002861022949,
					"coreRareMultiplier": 1.8499999046325684,
					"bleedMultiplier": 1.1000000238418579
				}
			],
			"lootSourceReadMode": "preview_actor",
			"lootSourceSummary": "transient preview actor BP_Mineral_Rocky_C_0",
			"fallbackItemId": "raw_basalt",
			"lootPulseInterval": 0.2800000011920929,
			"maxItemsPerPickupStack": 0,
			"maxPerSuccessfulPulse": [
				{
					"itemId": "raw_ammonia_ice",
					"maxAmount": 1,
					"source": "lootTable"
				},
				{
					"itemId": "raw_basalt",
					"maxAmount": 2,
					"source": "lootTable"
				},
				{
					"itemId": "raw_carapace",
					"maxAmount": 1,
					"source": "lootTable"
				},
				{
					"itemId": "raw_carbon_dust",
					"maxAmount": 2,
					"source": "lootTable"
				},
				{
					"itemId": "raw_copper_sulfide",
					"maxAmount": 2,
					"source": "lootTable"
				},
				{
					"itemId": "raw_hydrocarbon_ice",
					"maxAmount": 2,
					"source": "lootTable"
				},
				{
					"itemId": "raw_nickel_iron",
					"maxAmount": 2,
					"source": "lootTable"
				},
				{
					"itemId": "raw_silicate_sand",
					"maxAmount": 2,
					"source": "lootTable"
				},
				{
					"itemId": "raw_slime",
					"maxAmount": 1,
					"source": "lootTable"
				},
				{
					"itemId": "raw_sulfur",
					"maxAmount": 2,
					"source": "lootTable"
				},
				{
					"itemId": "raw_water_ice",
					"maxAmount": 1,
					"source": "lootTable"
				}
			],
			"fullMiningMaxAvailable": false,
			"fullMiningMaxReason": "Unknown successful MiningV2 pulse count; dashboard does not estimate total.",
			"drops": [
				{
					"itemId": "raw_basalt",
					"chanceWeight": 20,
					"rollChance": 1,
					"lootBucket": "CoreCommon",
					"minAmount": 1,
					"maxAmount": 2
				},
				{
					"itemId": "raw_silicate_sand",
					"chanceWeight": 16,
					"rollChance": 1,
					"lootBucket": "CoreCommon",
					"minAmount": 1,
					"maxAmount": 2
				},
				{
					"itemId": "raw_carbon_dust",
					"chanceWeight": 20,
					"rollChance": 1,
					"lootBucket": "CoreCommon",
					"minAmount": 1,
					"maxAmount": 2
				},
				{
					"itemId": "raw_sulfur",
					"chanceWeight": 18,
					"rollChance": 1,
					"lootBucket": "CoreCommon",
					"minAmount": 1,
					"maxAmount": 2
				},
				{
					"itemId": "raw_hydrocarbon_ice",
					"chanceWeight": 8,
					"rollChance": 1,
					"lootBucket": "CoreRare",
					"minAmount": 1,
					"maxAmount": 2
				},
				{
					"itemId": "raw_nickel_iron",
					"chanceWeight": 4,
					"rollChance": 1,
					"lootBucket": "CoreRare",
					"minAmount": 1,
					"maxAmount": 2
				},
				{
					"itemId": "raw_copper_sulfide",
					"chanceWeight": 4,
					"rollChance": 1,
					"lootBucket": "CoreRare",
					"minAmount": 1,
					"maxAmount": 2
				},
				{
					"itemId": "raw_water_ice",
					"chanceWeight": 6,
					"rollChance": 1,
					"lootBucket": "Bleed",
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_ammonia_ice",
					"chanceWeight": 4,
					"rollChance": 1,
					"lootBucket": "Bleed",
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_slime",
					"chanceWeight": 2,
					"rollChance": 1,
					"lootBucket": "Bleed",
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_carapace",
					"chanceWeight": 2,
					"rollChance": 1,
					"lootBucket": "Bleed",
					"minAmount": 1,
					"maxAmount": 1
				}
			]
		},
		{
			"key": "mineral:bioOrganic",
			"familyId": "bioOrganic",
			"displayName": "Bio-Organic",
			"blueprintAssetPath": "/Game/VFX/Effects/Mining/MiningV2/Minerals/BP_Mineral_BioOrganic.BP_Mineral_BioOrganic",
			"rarityScore": 0.68000000715255737,
			"autoSpawnWeight": 0.55000001192092896,
			"defaultPlacement":
			{
				"nearBias": 0.10000000149011612,
				"midBias": 0.55000001192092896,
				"farBias": 2.2000000476837158,
				"edgeFalloff": 0.80000001192092896,
				"minimumPresence": 0.019999999552965164
			},
			"generatedProfileSamples": [
				{
					"band": "near",
					"distanceAlpha": 0,
					"coreCommonMultiplier": 1.5499999523162842,
					"coreRareMultiplier": 0.55000001192092896,
					"bleedMultiplier": 0.94999998807907104
				},
				{
					"band": "mid",
					"distanceAlpha": 0.5,
					"coreCommonMultiplier": 1.2129151821136475,
					"coreRareMultiplier": 1.0779640674591064,
					"bleedMultiplier": 1.0109189748764038
				},
				{
					"band": "far",
					"distanceAlpha": 1,
					"coreCommonMultiplier": 0.72000002861022949,
					"coreRareMultiplier": 1.8499999046325684,
					"bleedMultiplier": 1.1000000238418579
				}
			],
			"lootSourceReadMode": "preview_actor",
			"lootSourceSummary": "transient preview actor BP_Mineral_BioOrganic_C_0",
			"fallbackItemId": "None",
			"lootPulseInterval": 0.15000000596046448,
			"maxItemsPerPickupStack": 0,
			"maxPerSuccessfulPulse": [],
			"fullMiningMaxAvailable": false,
			"fullMiningMaxReason": "Unknown successful MiningV2 pulse count; dashboard does not estimate total.",
			"drops": []
		}
	],
	"aiDrops": [
		{
			"key": "ai:BP_Al_Alien_Base",
			"name": "BP_Al_Alien_Base",
			"assetPath": "/Game/AI_StratoWard/AI/Aliens/Officials/Pawns/Parents/BP_Al_Alien_Base.BP_Al_Alien_Base",
			"className": "BP_Al_Alien_Base_C",
			"drops": [
				{
					"itemId": "raw_carapace",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_alien_enzyme",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_slime",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_spores",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_tendon_fiber",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				}
			]
		},
		{
			"key": "ai:BP_Alien_BabyCyclop",
			"name": "BP_Alien_BabyCyclop",
			"assetPath": "/Game/AI_StratoWard/AI/Aliens/Officials/Pawns/BP_Alien_BabyCyclop.BP_Alien_BabyCyclop",
			"className": "BP_Alien_BabyCyclop_C",
			"drops": [
				{
					"itemId": "raw_carapace",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_alien_enzyme",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_slime",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_spores",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_tendon_fiber",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				}
			]
		},
		{
			"key": "ai:BP_Alien_BatCyclop",
			"name": "BP_Alien_BatCyclop",
			"assetPath": "/Game/AI_StratoWard/AI/Aliens/Officials/Pawns/BP_Alien_BatCyclop.BP_Alien_BatCyclop",
			"className": "BP_Alien_BatCyclop_C",
			"drops": [
				{
					"itemId": "raw_carapace",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_alien_enzyme",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_slime",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_spores",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_tendon_fiber",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				}
			]
		},
		{
			"key": "ai:BP_Alien_BatCyclop_ProjExp",
			"name": "BP_Alien_BatCyclop_ProjExp",
			"assetPath": "/Game/AI_StratoWard/AI/Aliens/Officials/Pawns/ProjectilesExp/BP_Alien_BatCyclop_ProjExp.BP_Alien_BatCyclop_ProjExp",
			"className": "BP_Alien_BatCyclop_ProjExp_C",
			"drops": [
				{
					"itemId": "raw_carapace",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_alien_enzyme",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_slime",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_spores",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_tendon_fiber",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				}
			]
		},
		{
			"key": "ai:BP_Alien_ClamWorm",
			"name": "BP_Alien_ClamWorm",
			"assetPath": "/Game/AI_StratoWard/AI/Aliens/Officials/Pawns/BP_Alien_ClamWorm.BP_Alien_ClamWorm",
			"className": "BP_Alien_ClamWorm_C",
			"drops": [
				{
					"itemId": "raw_carapace",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_alien_enzyme",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_slime",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_spores",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_tendon_fiber",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				}
			]
		},
		{
			"key": "ai:BP_Alien_ClamWorm_ProjExp",
			"name": "BP_Alien_ClamWorm_ProjExp",
			"assetPath": "/Game/AI_StratoWard/AI/Aliens/Officials/Pawns/ProjectilesExp/BP_Alien_ClamWorm_ProjExp.BP_Alien_ClamWorm_ProjExp",
			"className": "BP_Alien_ClamWorm_ProjExp_C",
			"drops": [
				{
					"itemId": "raw_carapace",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_alien_enzyme",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_slime",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_spores",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_tendon_fiber",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				}
			]
		},
		{
			"key": "ai:BP_Alien_Drone",
			"name": "BP_Alien_Drone",
			"assetPath": "/Game/AI_StratoWard/AI/Aliens/Officials/Pawns/BP_Alien_Drone.BP_Alien_Drone",
			"className": "BP_Alien_Drone_C",
			"drops": [
				{
					"itemId": "raw_carapace",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_alien_enzyme",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_slime",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_spores",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_tendon_fiber",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				}
			]
		},
		{
			"key": "ai:BP_Alien_Drone_ProjExp",
			"name": "BP_Alien_Drone_ProjExp",
			"assetPath": "/Game/AI_StratoWard/AI/Aliens/Officials/Pawns/ProjectilesExp/BP_Alien_Drone_ProjExp.BP_Alien_Drone_ProjExp",
			"className": "BP_Alien_Drone_ProjExp_C",
			"drops": [
				{
					"itemId": "raw_carapace",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_alien_enzyme",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_slime",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_spores",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_tendon_fiber",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				}
			]
		},
		{
			"key": "ai:BP_Alien_FatLobster",
			"name": "BP_Alien_FatLobster",
			"assetPath": "/Game/AI_StratoWard/AI/Aliens/Officials/Pawns/BP_Alien_FatLobster.BP_Alien_FatLobster",
			"className": "BP_Alien_FatLobster_C",
			"drops": [
				{
					"itemId": "raw_carapace",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_alien_enzyme",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_slime",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_spores",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_tendon_fiber",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				}
			]
		},
		{
			"key": "ai:BP_Alien_FatLobster_ProjExp",
			"name": "BP_Alien_FatLobster_ProjExp",
			"assetPath": "/Game/AI_StratoWard/AI/Aliens/Officials/Pawns/ProjectilesExp/BP_Alien_FatLobster_ProjExp.BP_Alien_FatLobster_ProjExp",
			"className": "BP_Alien_FatLobster_ProjExp_C",
			"drops": [
				{
					"itemId": "raw_carapace",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_alien_enzyme",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_slime",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_spores",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_tendon_fiber",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				}
			]
		},
		{
			"key": "ai:BP_Alien_Fighter",
			"name": "BP_Alien_Fighter",
			"assetPath": "/Game/AI_StratoWard/AI/Aliens/Officials/Pawns/BP_Alien_Fighter.BP_Alien_Fighter",
			"className": "BP_Alien_Fighter_C",
			"drops": [
				{
					"itemId": "raw_carapace",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_alien_enzyme",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_slime",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_spores",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_tendon_fiber",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				}
			]
		},
		{
			"key": "ai:BP_Alien_Fighter_ProjExp",
			"name": "BP_Alien_Fighter_ProjExp",
			"assetPath": "/Game/AI_StratoWard/AI/Aliens/Officials/Pawns/ProjectilesExp/BP_Alien_Fighter_ProjExp.BP_Alien_Fighter_ProjExp",
			"className": "BP_Alien_Fighter_ProjExp_C",
			"drops": [
				{
					"itemId": "raw_carapace",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_alien_enzyme",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_slime",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_spores",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_tendon_fiber",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				}
			]
		},
		{
			"key": "ai:BP_Alien_GiantOctopus",
			"name": "BP_Alien_GiantOctopus",
			"assetPath": "/Game/AI_StratoWard/AI/Aliens/Officials/Pawns/BP_Alien_GiantOctopus.BP_Alien_GiantOctopus",
			"className": "BP_Alien_GiantOctopus_C",
			"drops": [
				{
					"itemId": "raw_carapace",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_alien_enzyme",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_slime",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_spores",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_tendon_fiber",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				}
			]
		},
		{
			"key": "ai:BP_Alien_Melee",
			"name": "BP_Alien_Melee",
			"assetPath": "/Game/AI_StratoWard/AI/Aliens/Officials/Pawns/Parents/BP_Alien_Melee.BP_Alien_Melee",
			"className": "BP_Alien_Melee_C",
			"drops": [
				{
					"itemId": "raw_carapace",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_alien_enzyme",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_slime",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_spores",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_tendon_fiber",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				}
			]
		},
		{
			"key": "ai:BP_Alien_Ranged",
			"name": "BP_Alien_Ranged",
			"assetPath": "/Game/AI_StratoWard/AI/Aliens/Officials/Pawns/Parents/BP_Alien_Ranged.BP_Alien_Ranged",
			"className": "BP_Alien_Ranged_C",
			"drops": [
				{
					"itemId": "raw_carapace",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_alien_enzyme",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_slime",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_spores",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_tendon_fiber",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				}
			]
		},
		{
			"key": "ai:BP_Alien_Ranged_TEMP_Aura",
			"name": "BP_Alien_Ranged_TEMP_Aura",
			"assetPath": "/Game/AI_StratoWard/AI/Aliens/Officials/Pawns/Parents/BP_Alien_Ranged_TEMP_Aura.BP_Alien_Ranged_TEMP_Aura",
			"className": "BP_Alien_Ranged_TEMP_Aura_C",
			"drops": [
				{
					"itemId": "raw_carapace",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_alien_enzyme",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_slime",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_spores",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_tendon_fiber",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				}
			]
		},
		{
			"key": "ai:BP_Alien_Ranged_TEMP_Aura4",
			"name": "BP_Alien_Ranged_TEMP_Aura4",
			"assetPath": "/Game/AI_StratoWard/AI/Aliens/Officials/Pawns/Parents/BP_Alien_Ranged_TEMP_Aura4.BP_Alien_Ranged_TEMP_Aura4",
			"className": "BP_Alien_Ranged_TEMP_Aura4_C",
			"drops": [
				{
					"itemId": "raw_carapace",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_alien_enzyme",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_slime",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_spores",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_tendon_fiber",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				}
			]
		},
		{
			"key": "ai:BP_Alien_SpikeRay",
			"name": "BP_Alien_SpikeRay",
			"assetPath": "/Game/AI_StratoWard/AI/Aliens/Officials/Pawns/BP_Alien_SpikeRay.BP_Alien_SpikeRay",
			"className": "BP_Alien_SpikeRay_C",
			"drops": [
				{
					"itemId": "raw_carapace",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_alien_enzyme",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_slime",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_spores",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_tendon_fiber",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				}
			]
		},
		{
			"key": "ai:BP_Alien_SquidMother",
			"name": "BP_Alien_SquidMother",
			"assetPath": "/Game/AI_StratoWard/AI/Aliens/Officials/Pawns/BP_Alien_SquidMother.BP_Alien_SquidMother",
			"className": "BP_Alien_SquidMother_C",
			"drops": [
				{
					"itemId": "raw_carapace",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_alien_enzyme",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_slime",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_spores",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_tendon_fiber",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				}
			]
		},
		{
			"key": "ai:BP_Alien_Yellow_Friendly",
			"name": "BP_Alien_Yellow_Friendly",
			"assetPath": "/Game/AI_StratoWard/AI/Aliens/Officials/Pawns/BP_Alien_Yellow_Friendly.BP_Alien_Yellow_Friendly",
			"className": "BP_Alien_Yellow_Friendly_C",
			"drops": [
				{
					"itemId": "raw_carapace",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_alien_enzyme",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_slime",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_spores",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_tendon_fiber",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				}
			]
		},
		{
			"key": "ai:BP_FriendlyAttackCarrierDrone",
			"name": "BP_FriendlyAttackCarrierDrone",
			"assetPath": "/Game/AI_StratoWard/AI/Aliens/Officials/Pawns/BP_FriendlyAttackCarrierDrone.BP_FriendlyAttackCarrierDrone",
			"className": "BP_FriendlyAttackCarrierDrone_C",
			"drops": [
				{
					"itemId": "raw_carapace",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_alien_enzyme",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_slime",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_spores",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				},
				{
					"itemId": "raw_tendon_fiber",
					"lootWeight": 1,
					"minAmount": 1,
					"maxAmount": 1
				}
			]
		}
	],
	"issues": [
		{
			"key": "issue:mineral:bioOrganic:empty_drops",
			"severity": "high",
			"type": "empty_mineral_drops",
			"targetKey": "mineral:bioOrganic",
			"message": "mineral:bioOrganic has no LootTable entries and no fallback item."
		},
		{
			"key": "issue:item:cmp_circuit_boards:recipe_output_never_drops",
			"severity": "medium",
			"type": "recipe_output_never_drops",
			"targetKey": "item:cmp_circuit_boards",
			"message": "cmp_circuit_boards is a recipe output but never appears in AI or mineral drops."
		},
		{
			"key": "issue:item:cmp_circuit_boards:heavy_ship_upgrade_demand",
			"severity": "low",
			"type": "heavy_ship_upgrade_demand",
			"targetKey": "item:cmp_circuit_boards",
			"message": "cmp_circuit_boards is consumed by ship upgrades for 57 authored units across upgrade recipes."
		},
		{
			"key": "issue:item:cmp_microchips:recipe_output_never_drops",
			"severity": "medium",
			"type": "recipe_output_never_drops",
			"targetKey": "item:cmp_microchips",
			"message": "cmp_microchips is a recipe output but never appears in AI or mineral drops."
		},
		{
			"key": "issue:item:cmp_servo_motors:recipe_output_never_drops",
			"severity": "medium",
			"type": "recipe_output_never_drops",
			"targetKey": "item:cmp_servo_motors",
			"message": "cmp_servo_motors is a recipe output but never appears in AI or mineral drops."
		},
		{
			"key": "issue:item:cmp_servo_motors:heavy_ship_upgrade_demand",
			"severity": "low",
			"type": "heavy_ship_upgrade_demand",
			"targetKey": "item:cmp_servo_motors",
			"message": "cmp_servo_motors is consumed by ship upgrades for 95 authored units across upgrade recipes."
		},
		{
			"key": "issue:item:cmp_structural_panels:recipe_output_never_drops",
			"severity": "medium",
			"type": "recipe_output_never_drops",
			"targetKey": "item:cmp_structural_panels",
			"message": "cmp_structural_panels is a recipe output but never appears in AI or mineral drops."
		},
		{
			"key": "issue:item:cmp_structural_panels:heavy_ship_upgrade_demand",
			"severity": "low",
			"type": "heavy_ship_upgrade_demand",
			"targetKey": "item:cmp_structural_panels",
			"message": "cmp_structural_panels is consumed by ship upgrades for 173 authored units across upgrade recipes."
		},
		{
			"key": "issue:item:cmp_tech_data:recipe_output_never_drops",
			"severity": "medium",
			"type": "recipe_output_never_drops",
			"targetKey": "item:cmp_tech_data",
			"message": "cmp_tech_data is a recipe output but never appears in AI or mineral drops."
		},
		{
			"key": "issue:item:cmp_thruster_parts:recipe_output_never_drops",
			"severity": "medium",
			"type": "recipe_output_never_drops",
			"targetKey": "item:cmp_thruster_parts",
			"message": "cmp_thruster_parts is a recipe output but never appears in AI or mineral drops."
		},
		{
			"key": "issue:item:cmp_wire_coils:recipe_output_never_drops",
			"severity": "medium",
			"type": "recipe_output_never_drops",
			"targetKey": "item:cmp_wire_coils",
			"message": "cmp_wire_coils is a recipe output but never appears in AI or mineral drops."
		},
		{
			"key": "issue:item:cmp_wire_coils:heavy_ship_upgrade_demand",
			"severity": "low",
			"type": "heavy_ship_upgrade_demand",
			"targetKey": "item:cmp_wire_coils",
			"message": "cmp_wire_coils is consumed by ship upgrades for 363 authored units across upgrade recipes."
		},
		{
			"key": "issue:item:con_fuel:recipe_output_never_drops",
			"severity": "medium",
			"type": "recipe_output_never_drops",
			"targetKey": "item:con_fuel",
			"message": "con_fuel is a recipe output but never appears in AI or mineral drops."
		},
		{
			"key": "issue:item:con_nutrient_paste:recipe_output_never_drops",
			"severity": "medium",
			"type": "recipe_output_never_drops",
			"targetKey": "item:con_nutrient_paste",
			"message": "con_nutrient_paste is a recipe output but never appears in AI or mineral drops."
		},
		{
			"key": "issue:item:con_protein_bar:recipe_output_never_drops",
			"severity": "medium",
			"type": "recipe_output_never_drops",
			"targetKey": "item:con_protein_bar",
			"message": "con_protein_bar is a recipe output but never appears in AI or mineral drops."
		},
		{
			"key": "issue:item:con_synth_steak:recipe_output_never_drops",
			"severity": "medium",
			"type": "recipe_output_never_drops",
			"targetKey": "item:con_synth_steak",
			"message": "con_synth_steak is a recipe output but never appears in AI or mineral drops."
		},
		{
			"key": "issue:item:con_water_pack:recipe_output_never_drops",
			"severity": "medium",
			"type": "recipe_output_never_drops",
			"targetKey": "item:con_water_pack",
			"message": "con_water_pack is a recipe output but never appears in AI or mineral drops."
		},
		{
			"key": "issue:item:Drone:pickup_mapping",
			"severity": "medium",
			"type": "missing_pickup_mapping",
			"targetKey": "item:Drone",
			"message": "Drone: no pickup BP match"
		},
		{
			"key": "issue:item:Drone:recipe_output_pickup_mapping",
			"severity": "high",
			"type": "recipe_output_missing_pickup_mapping",
			"targetKey": "item:Drone",
			"message": "Drone is produced by recipes but has no known pickup/item mapping."
		},
		{
			"key": "issue:item:Drone:recipe_output_never_drops",
			"severity": "medium",
			"type": "recipe_output_never_drops",
			"targetKey": "item:Drone",
			"message": "Drone is a recipe output but never appears in AI or mineral drops."
		},
		{
			"key": "issue:item:GatlinGun:pickup_mapping",
			"severity": "medium",
			"type": "missing_pickup_mapping",
			"targetKey": "item:GatlinGun",
			"message": "GatlinGun: no pickup BP match"
		},
		{
			"key": "issue:item:item_scanner:recipe_output_never_drops",
			"severity": "medium",
			"type": "recipe_output_never_drops",
			"targetKey": "item:item_scanner",
			"message": "item_scanner is a recipe output but never appears in AI or mineral drops."
		},
		{
			"key": "issue:item:mat_aluminum_alloy:recipe_output_never_drops",
			"severity": "medium",
			"type": "recipe_output_never_drops",
			"targetKey": "item:mat_aluminum_alloy",
			"message": "mat_aluminum_alloy is a recipe output but never appears in AI or mineral drops."
		},
		{
			"key": "issue:item:mat_copper:recipe_output_never_drops",
			"severity": "medium",
			"type": "recipe_output_never_drops",
			"targetKey": "item:mat_copper",
			"message": "mat_copper is a recipe output but never appears in AI or mineral drops."
		},
		{
			"key": "issue:item:mat_insulation:recipe_output_never_drops",
			"severity": "medium",
			"type": "recipe_output_never_drops",
			"targetKey": "item:mat_insulation",
			"message": "mat_insulation is a recipe output but never appears in AI or mineral drops."
		},
		{
			"key": "issue:item:mat_plastic:recipe_output_never_drops",
			"severity": "medium",
			"type": "recipe_output_never_drops",
			"targetKey": "item:mat_plastic",
			"message": "mat_plastic is a recipe output but never appears in AI or mineral drops."
		},
		{
			"key": "issue:item:mat_polymers:recipe_output_never_drops",
			"severity": "medium",
			"type": "recipe_output_never_drops",
			"targetKey": "item:mat_polymers",
			"message": "mat_polymers is a recipe output but never appears in AI or mineral drops."
		},
		{
			"key": "issue:item:mat_rare_earth:recipe_output_never_drops",
			"severity": "medium",
			"type": "recipe_output_never_drops",
			"targetKey": "item:mat_rare_earth",
			"message": "mat_rare_earth is a recipe output but never appears in AI or mineral drops."
		},
		{
			"key": "issue:item:mat_silicon:recipe_output_never_drops",
			"severity": "medium",
			"type": "recipe_output_never_drops",
			"targetKey": "item:mat_silicon",
			"message": "mat_silicon is a recipe output but never appears in AI or mineral drops."
		},
		{
			"key": "issue:item:mat_stainless_steel:recipe_output_never_drops",
			"severity": "medium",
			"type": "recipe_output_never_drops",
			"targetKey": "item:mat_stainless_steel",
			"message": "mat_stainless_steel is a recipe output but never appears in AI or mineral drops."
		},
		{
			"key": "issue:item:module_solar_panel:recipe_output_never_drops",
			"severity": "medium",
			"type": "recipe_output_never_drops",
			"targetKey": "item:module_solar_panel",
			"message": "module_solar_panel is a recipe output but never appears in AI or mineral drops."
		},
		{
			"key": "issue:item:module_turret_blaster:pickup_mapping",
			"severity": "medium",
			"type": "missing_pickup_mapping",
			"targetKey": "item:module_turret_blaster",
			"message": "module_turret_blaster: no pickup BP match"
		},
		{
			"key": "issue:item:module_turret_blaster:recipe_output_pickup_mapping",
			"severity": "high",
			"type": "recipe_output_missing_pickup_mapping",
			"targetKey": "item:module_turret_blaster",
			"message": "module_turret_blaster is produced by recipes but has no known pickup/item mapping."
		},
		{
			"key": "issue:item:module_turret_blaster:recipe_output_never_drops",
			"severity": "medium",
			"type": "recipe_output_never_drops",
			"targetKey": "item:module_turret_blaster",
			"message": "module_turret_blaster is a recipe output but never appears in AI or mineral drops."
		},
		{
			"key": "issue:item:module_turret_laser:recipe_output_never_drops",
			"severity": "medium",
			"type": "recipe_output_never_drops",
			"targetKey": "item:module_turret_laser",
			"message": "module_turret_laser is a recipe output but never appears in AI or mineral drops."
		},
		{
			"key": "issue:item:module_turret_missile:pickup_mapping",
			"severity": "medium",
			"type": "missing_pickup_mapping",
			"targetKey": "item:module_turret_missile",
			"message": "module_turret_missile: no pickup BP match"
		},
		{
			"key": "issue:item:module_turret_repair:recipe_output_never_drops",
			"severity": "medium",
			"type": "recipe_output_never_drops",
			"targetKey": "item:module_turret_repair",
			"message": "module_turret_repair is a recipe output but never appears in AI or mineral drops."
		},
		{
			"key": "issue:item:module_turret_rocket:missing_item_data",
			"severity": "high",
			"type": "missing_item_data",
			"targetKey": "item:module_turret_rocket",
			"message": "module_turret_rocket is referenced but missing from the loaded item data table."
		},
		{
			"key": "issue:item:module_turret_rocket:recipe_output_never_drops",
			"severity": "medium",
			"type": "recipe_output_never_drops",
			"targetKey": "item:module_turret_rocket",
			"message": "module_turret_rocket is a recipe output but never appears in AI or mineral drops."
		},
		{
			"key": "issue:item:raw_carapace:drops_without_recipe_use",
			"severity": "low",
			"type": "drop_without_recipe_or_use",
			"targetKey": "item:raw_carapace",
			"message": "raw_carapace drops from AI/minerals but has no recipe production or consumption crosslink."
		},
		{
			"key": "issue:item:raw_spores:drops_without_recipe_use",
			"severity": "low",
			"type": "drop_without_recipe_or_use",
			"targetKey": "item:raw_spores",
			"message": "raw_spores drops from AI/minerals but has no recipe production or consumption crosslink."
		},
		{
			"key": "issue:item:tool_mining:pickup_mapping",
			"severity": "medium",
			"type": "missing_pickup_mapping",
			"targetKey": "item:tool_mining",
			"message": "tool_mining: no pickup BP match"
		},
		{
			"key": "issue:item:tool_mining:recipe_output_pickup_mapping",
			"severity": "high",
			"type": "recipe_output_missing_pickup_mapping",
			"targetKey": "item:tool_mining",
			"message": "tool_mining is produced by recipes but has no known pickup/item mapping."
		},
		{
			"key": "issue:item:tool_mining:recipe_output_never_drops",
			"severity": "medium",
			"type": "recipe_output_never_drops",
			"targetKey": "item:tool_mining",
			"message": "tool_mining is a recipe output but never appears in AI or mineral drops."
		},
		{
			"key": "issue:item:UpgradeShip:recipe_output_never_drops",
			"severity": "medium",
			"type": "recipe_output_never_drops",
			"targetKey": "item:UpgradeShip",
			"message": "UpgradeShip is a recipe output but never appears in AI or mineral drops."
		},
		{
			"key": "issue:item:weapon_ammo_blaster:pickup_mapping",
			"severity": "medium",
			"type": "missing_pickup_mapping",
			"targetKey": "item:weapon_ammo_blaster",
			"message": "weapon_ammo_blaster: no pickup BP match"
		},
		{
			"key": "issue:item:weapon_ammo_laser:pickup_mapping",
			"severity": "medium",
			"type": "missing_pickup_mapping",
			"targetKey": "item:weapon_ammo_laser",
			"message": "weapon_ammo_laser: no pickup BP match"
		},
		{
			"key": "issue:item:weapon_ammo_missile:pickup_mapping",
			"severity": "medium",
			"type": "missing_pickup_mapping",
			"targetKey": "item:weapon_ammo_missile",
			"message": "weapon_ammo_missile: no pickup BP match"
		},
		{
			"key": "issue:item:weapon_blaster:recipe_output_never_drops",
			"severity": "medium",
			"type": "recipe_output_never_drops",
			"targetKey": "item:weapon_blaster",
			"message": "weapon_blaster is a recipe output but never appears in AI or mineral drops."
		},
		{
			"key": "issue:item:weapon_laser:recipe_output_never_drops",
			"severity": "medium",
			"type": "recipe_output_never_drops",
			"targetKey": "item:weapon_laser",
			"message": "weapon_laser is a recipe output but never appears in AI or mineral drops."
		},
		{
			"key": "issue:item:weapon_rocket:recipe_output_never_drops",
			"severity": "medium",
			"type": "recipe_output_never_drops",
			"targetKey": "item:weapon_rocket",
			"message": "weapon_rocket is a recipe output but never appears in AI or mineral drops."
		}
	]
};
