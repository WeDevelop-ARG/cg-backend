'use strict'

const products = [
  {
    id: '0d55c1b9-0f35-4f2f-9ef8-ae1beb84aa2d',
    name: 'Tablet para niños',
    price: 25.99,
    marketPrice: 64.99,
    createdAt: new Date()
  },
  {
    id: '41b39187-d14c-48da-a379-62334561a9fa',
    name: 'Celular Xiaomi note 7',
    description: 'Xiaomi Redmi Note 7, 64 GB/4 GB de RAM, 6.30 pulgadas FHD+, Snapdragon 660, azul – versión global desbloqueada',
    price: 75.60,
    marketPrice: 189.00,
    createdAt: new Date()
  },
  {
    id: 'b8457bb6-6415-4e26-8cac-ee9d882eb9e8',
    name: 'Zapatilla Nike Air Pegasus (running)',
    description: 'Nike Men\'s Air Zoom Pegasus 35 Running Shoe',
    price: 77.04,
    marketPrice: 224.93,
    createdAt: new Date()
  },
  {
    id: 'a3c5e764-39bd-4d46-b4e0-79e6e917d62d',
    name: 'Auriculares Android Compatibles Xiaomi Airdots (2138 Meli)',
    description: 'Absolutely Marvelous Wireless Bluetooth Earbuds Airdots IPX4 Water Resistant Charge Case Compatible with iPhone iOS and Android Devices Phone Call and Voice Assistant Connection Capability (Black)',
    price: 21,
    marketPrice: 30,
    createdAt: new Date()
  },
  {
    id: '707ff612-b677-4615-9f61-05fcca566dbd',
    name: 'Termo Stanley',
    description: 'Termos inoxidable Rey de 16 onzas, vaso viajero, negro mate, Azul Midnight',
    price: 19.99,
    marketPrice: 27.99,
    createdAt: new Date()
  },
  {
    id: '3c69b2e0-d379-4dae-93c8-60c4e311c19b',
    name: 'Botella termica',
    description: 'Super Sparrow - Botella de agua aislada al vacío de acero inoxidable, boca estándar de 11.8 fl oz, 21.0 fl oz, 16.9 fl oz, 25.4 fl oz y 1 L, sin BPA, con 2 tapas intercambiables + bolsa para botella',
    price: 15,
    marketPrice: 17.55,
    createdAt: new Date()
  },
  {
    id: 'c332abc1-8b12-4fe2-8d61-d25589a317b1',
    name: 'Botella termica',
    description: 'Super Sparrow - Botella de agua aislada al vacío de acero inoxidable, boca estándar de 11.8 fl oz, 21.0 fl oz, 16.9 fl oz, 25.4 fl oz y 1 L, sin BPA, con 2 tapas intercambiables + bolsa para botella',
    price: 15,
    marketPrice: 17.55,
    createdAt: new Date()
  },
  {
    id: 'e8ff5942-0580-49e8-975d-aaa10a512c7a',
    name: 'Cerveza Stella Artois',
    price: 30.99,
    marketPrice: 36.00,
    createdAt: new Date()
  },
  {
    id: '2e0f7128-4a6e-47b7-91e0-03c24b4c40c4',
    name: 'Fernet',
    description: 'Fernet Branca',
    price: 10.99,
    marketPrice: 14.20,
    createdAt: new Date()
  },
  {
    id: '3324019c-596f-4ed5-9533-84e8b6207b74',
    name: 'Holders para llevar el telefono en el auto',
    description: 'Soporte Movil Coche, POOPHUNS Soporte Coche',
    price: 8.99,
    marketPrice: 10.99,
    createdAt: new Date()
  },
  {
    id: 'ccb7e454-898d-4f6c-8226-84d50bcd9299',
    name: 'Correa para pasear perro',
    description: 'vitazoo Correa de Perro en Negro Grafito, Resistente y AjustableSoporte Movil Coche, POOPHUNS Soporte Coche',
    price: 12.00,
    marketPrice: 14.00,
    createdAt: new Date()
  }
]

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('product', products)
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('product', null)
  }
}
