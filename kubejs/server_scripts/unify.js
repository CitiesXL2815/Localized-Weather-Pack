ServerEvents.recipes(event=> {
  event.remove({ id: 'ava:silicon' })
  event.remove({ id: 'epicpaladins:steel_ingot_from_blasting_iron_ingot'})
  event.remove({ id: 'rpgsmw:s'})
  event.remove({ id: 'rpgsmw:ss'})

  event.remove({ id: 'nukacraft:lead_block' })

  event.remove({ id: 'minecraft:bucket' })
  event.shaped('1x minecraft:bucket', [
    'F F',
    ' F ',
    '   '
  ], {
     F: '#forge:plates/iron'
  })

})