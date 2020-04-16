'use strict'

const faker = require('faker')

const date = new Date()
date.setDate(date.getDate() + 1)

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('productPhoto', [
      // Tablet for kids
      {
        id: faker.random.uuid(),
        productId: '0d55c1b9-0f35-4f2f-9ef8-ae1beb84aa2d',
        url: 'https://m.media-amazon.com/images/I/71cgKlZ85UL._AC_UY218_ML3_.jpg',
        createdAt: new Date()
      },
      {
        id: faker.random.uuid(),
        productId: '0d55c1b9-0f35-4f2f-9ef8-ae1beb84aa2d',
        url: 'https://http2.mlstatic.com/tablet-rosa-frozen-para-ninos-disney-dragon-touch-y88x-plus-D_NQ_NP_614984-MLM28810108388_112018-F.jpg',
        createdAt: new Date()
      },
      {
        id: faker.random.uuid(),
        productId: '0d55c1b9-0f35-4f2f-9ef8-ae1beb84aa2d',
        url: 'https://images-na.ssl-images-amazon.com/images/I/617KEXCjciL._AC_SX425_.jpg',
        createdAt: new Date()
      },
      // Redmi note 7
      {
        id: faker.random.uuid(),
        productId: '41b39187-d14c-48da-a379-62334561a9fa',
        url: 'https://m.media-amazon.com/images/I/41FBnbqW3pL._AC_UY218_ML3_.jpg',
        createdAt: new Date()
      },
      {
        id: faker.random.uuid(),
        productId: '41b39187-d14c-48da-a379-62334561a9fa',
        url: 'https://sgfm.elcorteingles.es/SGFM/dctm/MARKET/694/105/962/6941059620792_00_640x640.jpg',
        createdAt: new Date()
      },
      {
        id: faker.random.uuid(),
        productId: '41b39187-d14c-48da-a379-62334561a9fa',
        url: 'https://i01.appmifile.com/webfile/globalimg/products/m/redmi-note-7-pro/specs_phone1.jpg',
        createdAt: new Date()
      },
      // Shoes nike
      {
        id: faker.random.uuid(),
        productId: 'b8457bb6-6415-4e26-8cac-ee9d882eb9e8',
        url: 'https://images-na.ssl-images-amazon.com/images/I/7161kRzHgVL._UX575_.jpg',
        createdAt: new Date()
      },
      {
        id: faker.random.uuid(),
        productId: 'b8457bb6-6415-4e26-8cac-ee9d882eb9e8',
        url: 'https://i1.t4s.cz/products/aj6900-002/nike-air-vapormax-flyknit-3-181493-aj6900-003-orig.jpg',
        createdAt: new Date()
      },
      {
        id: faker.random.uuid(),
        productId: 'b8457bb6-6415-4e26-8cac-ee9d882eb9e8',
        url: 'https://i1.t4s.cz/products/aj6900-004/nike-air-vapormax-flyknit-3-180825-aj6900-004-orig.jpg',
        createdAt: new Date()
      },
      // Headphones android
      {
        id: faker.random.uuid(),
        productId: 'a3c5e764-39bd-4d46-b4e0-79e6e917d62d',
        url: 'https://images-na.ssl-images-amazon.com/images/I/519tNVVaAHL._SX425_.jpg',
        createdAt: new Date()
      },
      {
        id: faker.random.uuid(),
        productId: 'a3c5e764-39bd-4d46-b4e0-79e6e917d62d',
        url: 'https://www.sijdistribuciones.com/wp-content/uploads/2019/08/product-jpeg-500x500.jpg',
        createdAt: new Date()
      },
      {
        id: faker.random.uuid(),
        productId: 'a3c5e764-39bd-4d46-b4e0-79e6e917d62d',
        url: 'https://static.casademovil.es/media/catalog/product/cache/1/image/600x400/9df78eab33525d08d6e5fb8d27136e95/6/1/61prfyx4jsl._sl1000__3.jpg',
        createdAt: new Date()
      },
      // Standley thermo
      {
        id: faker.random.uuid(),
        productId: '707ff612-b677-4615-9f61-05fcca566dbd',
        url: 'https://images-na.ssl-images-amazon.com/images/I/31kymfBM1BL.jpg',
        createdAt: new Date()
      },
      // Thermic bottle
      {
        id: faker.random.uuid(),
        productId: '3c69b2e0-d379-4dae-93c8-60c4e311c19b',
        url: 'https://www.dealsanimg.com/d/l400/pict/293349682697_/super-sparrow-botella-de-agua-deportiva.jpg',
        createdAt: new Date()
      },
      // Other thermic bottle
      {
        id: faker.random.uuid(),
        productId: 'c332abc1-8b12-4fe2-8d61-d25589a317b1',
        url: 'https://images-na.ssl-images-amazon.com/images/I/811yQu5%2BBDL._SX522_.jpg',
        createdAt: new Date()
      },
      // Beer
      {
        id: faker.random.uuid(),
        productId: 'e8ff5942-0580-49e8-975d-aaa10a512c7a',
        url: 'https://www.revistaneo.com/sites/default/files/2019-10/stella.jpg',
        createdAt: new Date()
      },
      {
        id: faker.random.uuid(),
        productId: 'e8ff5942-0580-49e8-975d-aaa10a512c7a',
        url: 'https://www.marketgradimex.ro/wp-content/uploads/2018/09/stella-artois-2.jpg',
        createdAt: new Date()
      },
      // Fernet
      {
        id: faker.random.uuid(),
        productId: '2e0f7128-4a6e-47b7-91e0-03c24b4c40c4',
        url: 'https://www.encopadebalon.com/3861-thickbox_default/fernet-branca.jpg',
        createdAt: new Date()
      },
      {
        id: faker.random.uuid(),
        productId: '2e0f7128-4a6e-47b7-91e0-03c24b4c40c4',
        url: 'https://fundeu.fiile.org.ar/library/timthumb/timthumb.php?src=/uploadsfotos/ferne_fundeu_argentina.png&w=720',
        createdAt: new Date()
      },
      {
        id: faker.random.uuid(),
        productId: '2e0f7128-4a6e-47b7-91e0-03c24b4c40c4',
        url: 'https://i.pinimg.com/originals/40/cf/05/40cf05011de52366d267db108f776091.jpg',
        createdAt: new Date()
      },
      // Holders phone
      {
        id: faker.random.uuid(),
        productId: '3324019c-596f-4ed5-9533-84e8b6207b74',
        url: 'https://images-na.ssl-images-amazon.com/images/I/61OEonE6HlL._AC_SY355_.jpg',
        createdAt: new Date()
      },
      // Dog
      {
        id: faker.random.uuid(),
        productId: 'ccb7e454-898d-4f6c-8226-84d50bcd9299',
        url: 'https://images-na.ssl-images-amazon.com/images/I/717JYVB71OL._AC_SX679_.jpg',
        createdAt: new Date()
      },
      {
        id: faker.random.uuid(),
        productId: 'ccb7e454-898d-4f6c-8226-84d50bcd9299',
        url: 'https://www.kiwoko.com/media/wysiwyg/cabecera-elegir-lamejor-correa-para-mi-perro.jpg',
        createdAt: new Date()
      },
      {
        id: faker.random.uuid(),
        productId: 'ccb7e454-898d-4f6c-8226-84d50bcd9299',
        url: 'https://www.timbrit.com.co/blog/wp-content/uploads/2019/08/Tipos-de-correas-para-pasear-a-tu-perro-1024x684.jpg',
        createdAt: new Date()
      }
    ])
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('productPhoto', null, {})
  }
}
