ServerEvents.recipes(event=> {
  event.shaped('1x industrialforegoing:laser_drill', [
    'FIF',
    'RGR',
    'ABA'
  ], {
     F: 'industrialforegoing:plastic',
     I: 'thermal:diamond_gear',
     R: 'minecraft:piston',
     G: 'thermal:machine_frame',
     A: 'thermal:gold_gear',
     B: 'minecraft:redstone'
  })

  event.shaped('1x industrialforegoing:ore_laser_base', [
    'FKF',
    'JHJ',
    'YTY'
  ], {
     F: 'industrialforegoing:plastic',
     K: 'minecraft:diamond_pickaxe',
     J: '#forge:ingots/aluminum',
     H: 'thermal:machine_frame',
     Y: 'thermal:diamond_gear',
     T: 'minecraft:redstone'
  })

  event.shaped('1x industrialforegoing:fluid_extractor', [
    'RJR',
    'EGE',
    'RLR'
  ], {
     R: 'minecraft:iron_ingot',
     J: 'minecraft:light_weighted_pressure_plate',
     E: '#forge:cobblestone',
     G: 'thermal:machine_frame',
     L: 'minecraft:piston'
  })

  event.shaped('1x industrialforegoing:latex_processing_unit', [
    'YPY',
    'WKL',
    'YFY'
  ], {
     Y: 'minecraft:iron_ingot',
     P: 'minecraft:redstone_block',
     W: 'minecraft:water_bucket',
     K: 'thermal:machine_frame',
     F: 'minecraft:furnace',
     L: 'industrialforegoing:latex_bucket'
  })

  event.shaped('1x industrialforegoing:black_hole_controller', [
    'MDM',
    'BNB',
    'MVM'
  ], {
     M: 'industrialforegoing:plastic',
     D: 'thermal:diamond_gear',
     B: 'minecraft:ender_eye',
     N: 'minecraft:ender_chest',
     V: 'thermal:machine_frame'
  })

  event.shaped('1x industrialforegoing:dissolution_chamber', [
    'TRT',
    'WNW',
    'QAQ'
  ], {
     T: 'industrialforegoing:plastic',
     R: '#forge:chests',
     W: 'minecraft:bucket',
     N: 'thermal:machine_frame',
     Q: 'minecraft:gold_ingot',
     A: 'thermal:diamond_gear'
  })

  event.shaped('1x industrialforegoing:bioreactor', [
    'RJR',
    'ZXZ',
    'UIU'
  ], {
     R: 'industrialforegoing:plastic',
     J: 'thermal:diamond_gear',
     Z: '#forge:slimeballs',
     X: 'thermal:machine_frame',
     U: 'minecraft:brick',
     I: 'minecraft:sugar'
  })

  event.shaped('1x industrialforegoing:biofuel_generator', [
    'RJR',
    'TYT',
    'ETE'
  ], {
     R: 'industrialforegoing:plastic',
     J: 'minecraft:furnace',
     T: 'minecraft:piston',
     Y: 'thermal:machine_frame',
     E: 'thermal:gold_gear'
  })

  event.shaped('1x industrialforegoing:plant_gatherer', [
    'RJR',
    'SDS',
    'GHG'
  ], {
     R: 'industrialforegoing:plastic',
     J: 'minecraft:iron_hoe',
     S: 'minecraft:iron_axe',
     D: 'thermal:machine_frame',
     G: 'thermal:gold_gear',
     H: 'minecraft:redstone'
  })

  event.shaped('1x industrialforegoing:sewer', [
    'RJR',
    'XZX',
    'XCX'
  ], {
     R: 'industrialforegoing:plastic',
     J: 'minecraft:bucket',
     X: 'minecraft:brick',
     Z: 'thermal:machine_frame',
     C: 'thermal:iron_gear'
  })

  event.remove({ id: 'industrialforegoing:machine_frame_pity' })
  event.shaped('1x industrialforegoing:machine_frame_pity', [
    'GTG',
    'THT',
    'GTG'
  ], {
     G: 'thermal:enderium_ingot',
     T: 'thermal:enderium_glass',
     H: 'thermal:energy_cell_frame'
  })

  event.shaped('1x industrialforegoing:animal_rancher', [
    'GGG',
    'RIR',
    'ABA'
  ], {
     G: 'industrialforegoing:plastic',
     A: 'thermal:gold_gear',
     I: 'minecraft:bucket',
     B: 'thermal:machine_frame',
     R: 'minecraft:shears'
  })

  event.shaped('1x industrialforegoing:machine_frame_simple', [
    'GOG',
    'RIR',
    'ABA'
  ], {
     G: 'industrialforegoing:plastic',
     A: 'minecraft:iron_ingot',
     I: 'thermal:energy_cell_frame',
     B: 'thermal:gold_gear',
     R: 'minecraft:nether_brick',
     O: 'industrialforegoing:machine_frame_pity'
  })

  event.shaped('1x industrialforegoing:machine_frame_advanced', [
    'GOG',
    'RIR',
    'ABA'
  ], {
     G: 'industrialforegoing:plastic',
     A: 'minecraft:gold_ingot',
     I: 'thermal:energy_cell_frame',
     B: 'thermal:diamond_gear',
     R: 'minecraft:netherite_scrap',
     O: 'industrialforegoing:machine_frame_simple'
  })

  event.shaped('1x industrialforegoing:machine_frame_supreme', [
    'GOG',
    'RIR',
    'ABA'
  ], {
     G: 'industrialforegoing:plastic',
     A: 'minecraft:diamond',
     I: 'thermal:energy_cell_frame',
     B: 'thermal:diamond_gear',
     R: 'minecraft:netherite_ingot',
     O: 'industrialforegoing:machine_frame_advanced'
  })

})