'use strict'
const faker = require('faker')

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('product', [
      {
        id: faker.random.uuid(),
        photoUrl: 'https://m.media-amazon.com/images/I/71cgKlZ85UL._AC_UY218_ML3_.jpg',
        name: 'Tablet para niños',
        price: 25.99,
        marketPrice: 64.99,
        createdAt: new Date()
      },
      {
        id: faker.random.uuid(),
        photoUrl: 'https://m.media-amazon.com/images/I/41FBnbqW3pL._AC_UY218_ML3_.jpg',
        name: 'Celular Xiaomi note 7',
        description: 'Xiaomi Redmi Note 7, 64 GB/4 GB de RAM, 6.30 pulgadas FHD+, Snapdragon 660, azul – versión global desbloqueada',
        price: 75.60,
        marketPrice: 189.00,
        createdAt: new Date()
      },
      {
        id: faker.random.uuid(),
        photoUrl: 'https://images-na.ssl-images-amazon.com/images/I/7161kRzHgVL._UX575_.jpg',
        name: 'Zapatilla Nike Air Pegasus (running)',
        description: 'Nike Men\'s Air Zoom Pegasus 35 Running Shoe',
        price: 77.04,
        marketPrice: 224.93,
        createdAt: new Date()
      },
      {
        id: faker.random.uuid(),
        photoUrl: 'https://images-na.ssl-images-amazon.com/images/I/519tNVVaAHL._SX425_.jpg',
        name: 'Auriculares Android Compatibles Xiaomi Airdots (2138 Meli)',
        description: 'Absolutely Marvelous Wireless Bluetooth Earbuds Airdots IPX4 Water Resistant Charge Case Compatible with iPhone iOS and Android Devices Phone Call and Voice Assistant Connection Capability (Black)',
        price: 21,
        marketPrice: 30,
        createdAt: new Date()
      },
      {
        id: faker.random.uuid(),
        photoUrl: 'https://images-na.ssl-images-amazon.com/images/I/31kymfBM1BL.jpg',
        name: 'Termo Stanley',
        description: 'Termos inoxidable Rey de 16 onzas, vaso viajero, negro mate, Azul Midnight',
        price: 19.99,
        marketPrice: 27.99,
        createdAt: new Date()
      },
      {
        id: faker.random.uuid(),
        photoUrl: 'https://images-na.ssl-images-amazon.com/images/I/811yQu5%2BBDL._SX522_.jpg',
        name: 'Botella termica',
        description: 'Super Sparrow - Botella de agua aislada al vacío de acero inoxidable, boca estándar de 11.8 fl oz, 21.0 fl oz, 16.9 fl oz, 25.4 fl oz y 1 L, sin BPA, con 2 tapas intercambiables + bolsa para botella',
        price: 15,
        marketPrice: 17.55,
        createdAt: new Date()
      },
      {
        id: faker.random.uuid(),
        photoUrl: 'https://images-na.ssl-images-amazon.com/images/I/811yQu5%2BBDL._SX522_.jpg',
        name: 'Botella termica',
        description: 'Super Sparrow - Botella de agua aislada al vacío de acero inoxidable, boca estándar de 11.8 fl oz, 21.0 fl oz, 16.9 fl oz, 25.4 fl oz y 1 L, sin BPA, con 2 tapas intercambiables + bolsa para botella',
        price: 15,
        marketPrice: 17.55,
        createdAt: new Date()
      },
      {
        id: faker.random.uuid(),
        photoUrl: 'https://www.revistaneo.com/sites/default/files/2019-10/stella.jpg',
        name: 'Cerveza Stella Artois',
        price: 30.99,
        marketPrice: 36.00,
        createdAt: new Date()
      },
      {
        id: faker.random.uuid(),
        photoUrl: 'https://www.encopadebalon.com/3861-thickbox_default/fernet-branca.jpg',
        name: 'Fernet',
        description: 'Fernet Branca',
        price: 10.99,
        marketPrice: 14.20,
        createdAt: new Date()
      },
      {
        id: faker.random.uuid(),
        photoUrl: 'https://images-na.ssl-images-amazon.com/images/I/61OEonE6HlL._AC_SY355_.jpg',
        name: 'Holders para llevar el telefono en el auto',
        description: 'Soporte Movil Coche, POOPHUNS Soporte Coche',
        price: 8.99,
        marketPrice: 10.99,
        createdAt: new Date()
      },
      {
        id: faker.random.uuid(),
        photoUrl: 'https://images-na.ssl-images-amazon.com/images/I/717JYVB71OL._AC_SX679_.jpg',
        name: 'Correa para pasear perro',
        description: 'vitazoo Correa de Perro en Negro Grafito, Resistente y AjustableSoporte Movil Coche, POOPHUNS Soporte Coche',
        price: 12.00,
        marketPrice: 14.00,
        createdAt: new Date()
      }
    ])
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('product', null)
  }
}
