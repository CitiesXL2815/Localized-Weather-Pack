ServerEvents.tags('item', (event) => {

    event.add('forge:coal_coke', 'thermal:coal_coke');
    event.add('immersiveengineering:creosote', 'thermal:creosote');
    event.add('forge:raw_materials/yellorium', 'forge:raw_materials/uranium');
    event
        .get('thermal:crafting/dies')
        .add([
            'ae2:silicon_press',
            'ae2:logic_processor_press',
            'ae2:engineering_processor_press',
            'ae2:calculation_processor_press',
            'immersiveengineering:mold_rod',
            'immersiveengineering:mold_plate',
            'immersiveengineering:mold_gear',
            'immersiveengineering:mold_wire',
            'megacells:accumulation_processor_press',
            'advanced_ae:quantum_processor_press',
            'appflux:energy_processor_press'
        ]);

});