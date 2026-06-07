ServerEvents.recipes(event=> {
  event.shaped('1x ae2:flawless_budding_quartz', [
    ' F ',
    'FIF',
    ' R '
  ], {
     F: 'ae2:charged_certus_quartz_crystal',
     I: 'ae2:flawed_budding_quartz',
     R: 'ae2:meteorite_compass'
  })

  event.shaped('1x chimes:carved_bamboo_chimes', [
    ' G ',
    ' I ',
    ' R '
  ], {
     G: '#minecraft:wooden_slabs',
     I: 'minecraft:string',
     R: 'bambooeverything:dry_bamboo'
  })

  event.remove({ id: 'bagofyurting:bag_of_yurting' })
  event.shaped('1x bagofyurting:bag_of_yurting', [
    'HHH',
    'HIH',
    'HHH'
  ], {
     H: '#minecraft:wool',
     I: 'minecraft:ender_eye'
  })

  event.shaped('12x draconicevolution:chaos_shard', [
    'IGI',
    'GHG',
    'IGI'
  ], {
     I: 'draconicevolution:awakened_draconium_block',
     G: 'minecraft:dragon_egg',
     H: 'draconicevolution:dragon_heart'
  })

  event.shaped('1x nukacraft:fusion_core', [
    'IGI',
    'HKH',
    'GYG'
  ], {
     I: 'thermal:cured_rubber',
     G: '#forge:ingots/enderium',
     H: 'mekanism:energy_tablet',
     K: '#forge:gears/stellarium',
     Y: 'mekanism:ultimate_control_circuit'
  })

  event.shaped('1x nukacraft:fusion_cell', [
    'IGI',
    'GKG',
    'IGI'
  ], {
     I: '#forge:ingots/steel',
     G: 'thermal:cured_rubber',
     K: 'mekanism:ultimate_energy_cube'
  })

  event.shaped('1x nukacraft:power_armor_frame', [
    'ABC',
    'DED',
    'FGH'
  ], {
     A: 'mekanism:mekasuit_helmet',
     B: 'nukacraft:fusion_cell',
     C: 'mekanism:mekasuit_bodyarmor',
     D: 'nukacraft:fusion_core',
     E: 'thermalendergy:endergy_upgrade_3',
     F: 'mekanism:mekasuit_pants',
     G: '#forge:gears/stellarium',
     H: 'mekanism:mekasuit_boots'
  })

  event.remove({ id: 'thermalendergy:endergy_upgrade_1' })
  event.shaped('1x thermalendergy:endergy_upgrade_1', [
    'ABA',
    'CDC',
    'ABA'
  ], {
     A: '#forge:ingots/prismalium',
     B: 'minecraft:ender_eye',
     C: '#forge:gears/abyssal',
     D: 'thermal_extra:abyssal_upgrade_augment'
  })

  event.remove({ id: 'minecraft:stone_stairs' })
  event.shaped('4x minecraft:stone_stairs', [
    '  H',
    ' HH',
    'HHH'
  ], {
     H: 'minecraft:stone'
  })

  event.remove({ id: 'protective_armor:helmet' })
  event.shaped('1x protective_armor:test_helmet', [
    'JHJ',
    'IGI',
    'HHH'
  ], {
     H: 'thermal:hazmat_fabric',
     I: 'mekanism:structural_glass',
     G: 'mekanism:hazmat_mask',
     J: 'ad_astra:calorite_plate'
  })

  event.remove({ id: 'protective_armor:chestplate' })
  event.shaped('1x protective_armor:test_chestplate', [
    'JHJ',
    'IGI',
    'HHH'
  ], {
     H: 'thermal:hazmat_fabric',
     I: 'thermal:cured_rubber_block',
     G: 'mekanism:hazmat_gown',
     J: 'ad_astra:calorite_plate'
  })

  event.remove({ id: 'protective_armor:leggings' })
  event.shaped('1x protective_armor:test_leggings', [
    'JHJ',
    'HGH',
    'IKI'
  ], {
     H: 'thermal:hazmat_fabric',
     I: 'thermal:cured_rubber_block',
     G: 'mekanism:hazmat_pants',
     J: 'ad_astra:calorite_plate',
     K: '#forge:plates/steel'
  })

  event.remove({ id: 'protective_armor:boots' })
  event.shaped('1x protective_armor:test_boots', [
    'JKJ',
    'HGH',
    'ILI'
  ], {
     H: 'thermal:hazmat_fabric',
     I: 'thermal:cured_rubber_block',
     G: 'mekanism:hazmat_boots',
     J: 'ad_astra:calorite_plate',
     K: '#forge:plates/steel',
     L: 'thermal:cured_rubber'
  })

  event.remove({ id: 'mekanism:mekasuit_helmet' })
  event.shaped('1x mekanism:mekasuit_helmet', [
    'JHJ',
    'JGJ',
    'KIK'
  ], {
     H: 'mekanism:ultimate_control_circuit',
     I: 'mekanism:ultimate_induction_cell',
     G: 'protective_armor:test_helmet',
     J: 'mekanism:hdpe_sheet',
     K: 'mekanism:pellet_polonium'
  })

  event.remove({ id: 'mekanism:mekasuit_bodyarmor' })
  event.shaped('1x mekanism:mekasuit_bodyarmor', [
    'JHJ',
    'JGJ',
    'KIK'
  ], {
     H: 'mekanism:ultimate_control_circuit',
     I: 'mekanism:ultimate_induction_cell',
     G: 'protective_armor:test_chestplate',
     J: 'mekanism:hdpe_sheet',
     K: 'mekanism:pellet_polonium'
  })

  event.remove({ id: 'mekanism:mekasuit_pants' })
  event.shaped('1x mekanism:mekasuit_pants', [
    'JHJ',
    'JGJ',
    'KIK'
  ], {
     H: 'mekanism:ultimate_control_circuit',
     I: 'mekanism:ultimate_induction_cell',
     G: 'protective_armor:test_leggings',
     J: 'mekanism:hdpe_sheet',
     K: 'mekanism:pellet_polonium'
  })

  event.remove({ id: 'mekanism:mekasuit_boots' })
  event.shaped('1x mekanism:mekasuit_boots', [
    'JHJ',
    'JGJ',
    'KIK'
  ], {
     H: 'mekanism:ultimate_control_circuit',
     I: 'mekanism:ultimate_induction_cell',
     G: 'protective_armor:test_boots',
     J: 'mekanism:hdpe_sheet',
     K: 'mekanism:pellet_polonium'
  })

  event.remove({ id: 'atmosphericwatergenerator:ak_fluid_storage_disk_to_part' })

  event.recipes.thermal.crucible(Fluid.of('tconstruct:blazing_blood', 450), 'minecraft:blaze_rod')

  event.recipes.thermal.centrifuge(Fluid.of('thermal:crude_oil', 250), 'minecraft:coal')

  event.recipes.thermal.centrifuge(Fluid.of('thermal:crude_oil', 1000), 'minecraft:coal_block')

})