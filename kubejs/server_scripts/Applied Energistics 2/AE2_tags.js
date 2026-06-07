ServerEvents.tags('item', (event) => {
    event
        .get('ae2:all_quartz_dust')
        .add([
            'ftbmaterials:quartz_dust',
            'mekanism:dust_quartz',
            'enderio:powedered_quartz',
            'thermal:quartz_dust'
        ]);

})