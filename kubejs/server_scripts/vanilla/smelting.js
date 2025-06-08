ServerEvents.recipes((event) => {

   event.smelting('industrialforegoing:plastic', 'thermal:cured_rubber');

   event.remove({ id: 'plastic_from_ava:plastic' });

})