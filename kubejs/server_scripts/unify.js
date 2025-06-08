ServerEvents.recipes(event=> {
  event.remove({ id: 'ava:silicon' })

  event.remove({ id: 'nukacraft:lead_block' })

  event.remove({ id: 'minecraft:bucket' })
  event.shaped('1x minecraft:bucket', [
    'F F',
    ' F ',
    '   '
  ], {
     F: 'thermal:iron_plate'
  })

})