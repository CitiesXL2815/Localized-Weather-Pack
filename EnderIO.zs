#Name: EnderIO.zs
#Author: CitiesXL2815

print("Initializing 'EnderIO.zs'...");

    #EnderIO Gears
mods.jei.JEI.removeAndHide(<enderio:item_material:9>);
mods.jei.JEI.removeAndHide(<enderio:item_material:10>);

    #EnderIO Recipes
recipes.remove(<enderio:block_enhanced_sag_mill>);
recipes.remove(<enderio:block_sag_mill>);
recipes.remove(<enderio:block_enhanced_alloy_smelter>);
recipes.remove(<enderio:block_alloy_smelter>);
recipes.remove(<enderio:block_simple_furnace>);
recipes.remove(<enderio:block_simple_sag_mill>);
recipes.remove(<enderio:block_simple_alloy_smelter>);
recipes.addShaped(<enderio:block_enhanced_sag_mill>, [[<enderio:item_alloy_ingot:8>, <enderio:block_sag_mill>, <enderio:item_alloy_ingot:8>], [<enderio:item_material:13>, <enderio:item_material:54>, <enderio:item_material:13>]]);
recipes.addShaped(<enderio:block_enhanced_sag_mill>, [[<minecraft:flint>, <minecraft:flint>, <minecraft:flint>], [<enderio:item_alloy_ingot:8>, <enderio:item_material:54>, <enderio:item_alloy_ingot:8>], [<enderio:item_material:13>, <ic2:te:47>, <enderio:item_material:13>]]);
recipes.addShaped(<enderio:block_sag_mill>, [[<enderio:item_alloy_ingot:6>, <enderio:block_simple_sag_mill>, <enderio:item_alloy_ingot:6>], [<enderio:item_material:73>, <enderio:item_material:1>, <enderio:item_material:73>]]);
recipes.addShaped(<enderio:block_sag_mill>, [[<minecraft:flint>, <minecraft:flint>, <minecraft:flint>], [<enderio:item_alloy_ingot:6>, <enderio:item_material:1>, <enderio:item_alloy_ingot:6>], [<enderio:item_material:73>, <ic2:te:47>, <enderio:item_material:73>]]);
recipes.addShaped(<enderio:block_enhanced_alloy_smelter>, [[<enderio:item_alloy_ingot:8>, <enderio:block_alloy_smelter>, <enderio:item_alloy_ingot:8>], [<enderio:item_material:13>, <enderio:item_material:54>, <enderio:item_material:13>]]);
recipes.addShaped(<enderio:block_enhanced_alloy_smelter>, [[<enderio:item_alloy_ingot:8>, <ic2:te:44>, <enderio:item_alloy_ingot:8>], [<ic2:te:54>, <enderio:item_material:54>, <ic2:te:54>], [<enderio:item_material:13>, <minecraft:bucket>, <enderio:item_material:13>]]);
recipes.addShaped(<enderio:block_alloy_smelter>, [[<enderio:item_alloy_ingot:6>, null, <enderio:item_alloy_ingot:6>], [<enderio:block_simple_alloy_smelter>, <enderio:item_material:1>, <enderio:block_simple_furnace>], [<enderio:item_material:73>, <minecraft:bucket>, <enderio:item_material:73>]]);
recipes.addShaped(<enderio:block_alloy_smelter>, [[<enderio:item_alloy_ingot:6>, <ic2:te:44>, <enderio:item_alloy_ingot:6>], [<ic2:te:54>, <enderio:item_material:1>, <ic2:te:54>], [<enderio:item_material:73>, <minecraft:bucket>, <enderio:item_material:73>]]);
recipes.addShaped(<enderio:block_simple_furnace>, [[<ore:ingotIron>, <ic2:te:44>, <ore:ingotIron>], [<minecraft:stonebrick>, <enderio:item_material>, <minecraft:stonebrick>], [<ore:gearStone>, <minecraft:bucket>, <ore:gearStone>]]);
recipes.addShaped(<enderio:block_simple_sag_mill>, [[<ore:itemFlint>, <ore:itemFlint>, <ore:itemFlint>], [<ore:ingotIron>, <enderio:item_material>, <ore:ingotIron>], [<ore:gearStone>, <ic2:te:47>, <ore:gearStone>]]);
recipes.addShaped(<enderio:block_simple_alloy_smelter>, [[<ore:ingotIron>, <ore:ingotIron>, <ore:ingotIron>], [<ic2:te:54>, <enderio:item_material>, <ic2:te:54>], [<ore:gearStone>, <minecraft:bucket>, <ore:gearStone>]]);

print("Initializing 'EnderIO.zs'...");