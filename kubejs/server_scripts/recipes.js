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
     G: 'thermal:enderium_ingot',
     H: 'mekanism:energy_tablet',
     K: 'thermalendergy:stellarium_gear',
     Y: 'mekanism:ultimate_control_circuit'
  })

  event.shaped('1x nukacraft:fusion_cell', [
    'IGI',
    'GKG',
    'IGI'
  ], {
     I: 'thermal:steel_ingot',
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
     G: 'thermalendergy:stellarium_gear',
     H: 'mekanism:mekasuit_boots'
  })

  event.remove({ id: 'thermalendergy:endergy_upgrade_1' })
  event.shaped('1x thermalendergy:endergy_upgrade_1', [
    'ABA',
    'CDC',
    'ABA'
  ], {
     A: 'thermalendergy:prismalium_ingot',
     B: 'minecraft:ender_eye',
     C: 'thermal_extra:abyssal_gear',
     D: 'thermal_extra:abyssal_upgrade_augment'
  })

  event.recipes.thermal.crucible(Fluid.of('tconstruct:blazing_blood', 450), 'minecraft:blaze_rod')

})