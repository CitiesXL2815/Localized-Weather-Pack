ServerEvents.recipes(event=> {
  event.remove({ id: 'mekanism:steel_casing' })
  event.shaped('1x mekanism:steel_casing', [
    'IFI',
    'FGF',
    'IFI'
  ], {
     F: 'minecraft:glass',
     G: 'thermal:copper_gear',
     I: 'thermal:steel_plate'
  })

  event.shaped('4x thermal:bronze_ingot', [
    'FF ',
    'FT ',
    '   '
  ], {
     F: 'minecraft:copper_ingot',
     T: 'thermal:tin_ingot'
  })

  event.recipes.mekanismCrushing(Item.of('enderio:silicon', 1), '#forge:sand');

})