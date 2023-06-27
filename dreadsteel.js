ServerEvents.recipes(event=> {
  event.recipes.thermal.smelter('3x dreadsteel:dreadsteel_ingot', [
    '5x thermal_extra:dragonsteel_ingot',
    'minecraft:netherite_ingot',
    '3x thermal:basalz_powder']).energy(10000)

  event.shaped('1x dreadsteel:dreadsteel_shield', [
    'RFR',
    'RFR',
    ' R '
  ], {
     R: 'dreadsteel:dreadsteel_ingot',
     F: 'thermal_extra:dragonsteel_ingot'
  })

  event.shaped('1x dreadsteel:dreadsteel_scythe', [
    'GHH',
    'OP ',
    'O  '
  ], {
     G: 'thermal_extra:dragonsteel_ingot',
     H: 'dreadsteel:dreadsteel_ingot',
     O: 'redstone_arsenal:flux_obsidian_rod',
     P: 'minecraft:nether_star'
  })
})