ServerEvents.recipes((event) => {

   event.recipes.thermal.smelter('enderio:dark_steel_ingot', ['thermal:steel_ingot', '4x mekanism:dust_obsidian']).energy(20000);

   event.recipes.thermal.pulverizer(Item.of('enderio:silicon').withChance(1.5), 'minecraft:sand').energy(1000);

   event.recipes.thermal.smelter('2x ae2:fluix_crystal', ['ae2:charged_certus_quartz_crystal', 'minecraft:redstone', 'minecraft:quartz']).energy(10000);

   event.recipes.thermal.pulverizer(Item.of('minecraft:string').withChance(3.5), 'thermal:flax').energy(20000);

   event.recipes.thermal.smelter('2x megacells:sky_steel_ingot', ['ae2:charged_certus_quartz_crystal', 'minecraft:iron_ingot', 'ae2:sky_stone_block']).energy(20000);

})
