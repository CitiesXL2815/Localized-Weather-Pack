ServerEvents.recipes(event=> {
  event.remove({ id: 'mekanism:steel_casing' })
  event.shaped('1x mekanism:steel_casing', [
    'IFI',
    'FGF',
    'IFI'
  ], {
     F: 'minecraft:glass',
     G: '#forge:gears/osmium',
     I: '#forge:plates/steel'
  })

  event.shaped('4x #forge:ingots/bronze', [
    'FF ',
    'FT ',
    '   '
  ], {
     F: 'minecraft:copper_ingot',
     T: '#forge:ingots/tin'
  })

  event.recipes.mekanismCrushing(Item.of('enderio:silicon', 1), '#forge:sand');

  event.recipes.mekanismCrushing(Item.of('thermal_extra:ancient_dust', 4), 'minecraft:dragon_egg');

  event.recipes.mekanismCrushing(Item.of('minecraft:blaze_powder', 4), 'minecraft:blaze_rod');
  event.recipes.mekanismCrushing(Item.of('#forge:dusts/electrum', 1), '#forge:ingots/electrum');
  event.recipes.mekanismCrushing(Item.of('#forge:dusts/constantan', 1), '#forge:ingots/constantan');
  event.recipes.mekanismCrushing(Item.of('#forge:dusts/invar', 1), '#forge:ingots/invar');

})