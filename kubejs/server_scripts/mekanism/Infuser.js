ServerEvents.recipes(event => {
    event.custom({
    type: 'mekanism:metallurgic_infusing',
    chemicalInput: {
        amount: 20,
        tag: 'mekanism:redstone'
    },
    itemInput: {
      ingredient: {
        item: 'mekanism:basic_control_circuit'
      }
    },
    output: {
        item: 'mekanism:advanced_control_circuit'
    }
   })

   event.remove({ output: 'mekanism:alloy_infused', type: 'mekanism:metallurgic_infusing' })
   event.custom({
       type: 'mekanism:metallurgic_infusing',
       chemicalInput: {
           amount: 10,
           tag: 'mekanism:redstone'
       },
       itemInput: {
         ingredient: {
           item: 'minecraft:copper_ingot'
         }
       },
       output: {
           item: 'mekanism:alloy_infused'
       }
      })

   event.custom({
       type: 'mekanism:metallurgic_infusing',
       chemicalInput: {
           amount: 20,
           tag: 'mekanism:diamond'
       },
       itemInput: {
         ingredient: {
           item: 'mekanism:advanced_control_circuit'
         }
       },
       output: {
           item: 'mekanism:elite_control_circuit'
       }
      })

   event.custom({
       type: 'mekanism:metallurgic_infusing',
       chemicalInput: {
           amount: 20,
           tag: 'mekanism:refined_obsidian'
       },
       itemInput: {
         ingredient: {
           item: 'mekanism:elite_control_circuit'
         }
       },
       output: {
           item: 'mekanism:ultimate_control_circuit'
       }
      })
})