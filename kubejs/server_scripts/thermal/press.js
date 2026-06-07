ServerEvents.recipes(event => {
    event.custom({
        "type": "thermal:press",
        "input": [
          { "tag": "forge:silicon" },
          { "item": "ae2:silicon_press" }
        ],
        "result": [
          { "item": "ae2:printed_silicon" }
        ],
        "energy": 4000
      });
    event.custom({
        "type": "thermal:press",
        "input": [
          { "tag": "forge:ingots/gold" },
          { "item": "ae2:logic_processor_press" }
        ],
        "result": [
          { "item": "ae2:printed_logic_processor" }
        ],
        "energy": 4000
      });
    event.custom({
        "type": "thermal:press",
        "input": [
          { "tag": "forge:gems/diamond" },
          { "item": "ae2:engineering_processor_press" }
        ],
        "result": [
          { "item": "ae2:printed_engineering_processor" }
        ],
        "energy": 4000
      });
    event.custom({
        "type": "thermal:press",
        "input": [
          { "tag": "forge:gems/certus_quartz" },
          { "item": "ae2:calculation_processor_press" }
        ],
        "result": [
          { "item": "ae2:printed_calculation_processor" }
        ],
        "energy": 4000
      });
    event.custom({
        "type": "thermal:press",
        "input": [
          { "item": "advanced_ae:quantum_alloy" },
          { "item": "advanced_ae:quantum_processor_press" }
        ],
        "result": [
          { "item": "advanced_ae:printed_quantum_processor" }
        ],
        "energy": 4000
      });
    event.custom({
        "type": "thermal:press",
        "input": [
          { "tag": "forge:ingots/sky_steel" },
          { "item": "megacells:accumulation_processor_press" }
        ],
        "result": [
          { "item": "megacells:printed_accumulation_processor" }
        ],
        "energy": 4000
      });
    event.custom({
        "type": "thermal:press",
        "input": [
          { "item": "appflux:charged_redstone" },
          { "item": "appflux:energy_processor_press" }
        ],
        "result": [
          { "item": "appflux:printed_energy_processor" }
        ],
        "energy": 4000
      });
    event.custom({
        "type": "thermal:press",
        "input": [
          { "tag": "forge:ingots/osmium",
            "count": 4
          },
          { "item": "thermal:press_gear_die" }
        ],
        "result": [
          { "tag": "forge:gears/osmium" }
        ],
        "energy": 4000
      });

})