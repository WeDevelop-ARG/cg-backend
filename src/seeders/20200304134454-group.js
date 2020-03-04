'use strict'
const faker = require('faker')

const date = new Date()
date.setDate(date.getDate() + 1)

const groups = [
  {
    id: faker.random.uuid(),
    productId: '0d55c1b9-0f35-4f2f-9ef8-ae1beb84aa2d',
    type: 'PAIR',
    minParticipants: 2,
    maxParticipants: 2,
    discount: 5,
    expiresAt: date,
    createdAt: date
  },
  {
    id: faker.random.uuid(),
    productId: '41b39187-d14c-48da-a379-62334561a9fa',
    type: 'GROUP',
    minParticipants: 15,
    maxParticipants: 25,
    discount: 30,
    expiresAt: date,
    createdAt: date
  },
  {
    id: faker.random.uuid(),
    productId: 'b8457bb6-6415-4e26-8cac-ee9d882eb9e8',
    type: 'GROUP',
    minParticipants: 10,
    maxParticipants: 20,
    discount: 25,
    expiresAt: date,
    createdAt: date
  },
  {
    id: faker.random.uuid(),
    productId: 'a3c5e764-39bd-4d46-b4e0-79e6e917d62d',
    type: 'PAIR',
    minParticipants: 2,
    maxParticipants: 2,
    discount: 7,
    expiresAt: date,
    createdAt: date
  },
  {
    id: faker.random.uuid(),
    productId: '707ff612-b677-4615-9f61-05fcca566dbd',
    type: 'PAIR',
    minParticipants: 2,
    maxParticipants: 2,
    discount: 6,
    expiresAt: date,
    createdAt: date
  },
  {
    id: faker.random.uuid(),
    productId: '3c69b2e0-d379-4dae-93c8-60c4e311c19b',
    type: 'PAIR',
    minParticipants: 2,
    maxParticipants: 2,
    discount: 4,
    expiresAt: date,
    createdAt: date
  },
  {
    id: faker.random.uuid(),
    productId: 'c332abc1-8b12-4fe2-8d61-d25589a317b1',
    type: 'PAIR',
    minParticipants: 2,
    maxParticipants: 2,
    discount: 4,
    expiresAt: date,
    createdAt: date
  },
  {
    id: faker.random.uuid(),
    productId: 'e8ff5942-0580-49e8-975d-aaa10a512c7a',
    type: 'GROUP',
    minParticipants: 5,
    maxParticipants: 10,
    discount: 14,
    expiresAt: date,
    createdAt: date
  },
  {
    id: faker.random.uuid(),
    productId: '2e0f7128-4a6e-47b7-91e0-03c24b4c40c4',
    type: 'PAIR',
    minParticipants: 2,
    maxParticipants: 2,
    discount: 5,
    expiresAt: date,
    createdAt: date
  },
  {
    id: faker.random.uuid(),
    productId: '3324019c-596f-4ed5-9533-84e8b6207b74',
    type: 'PAIR',
    minParticipants: 2,
    maxParticipants: 2,
    discount: 3,
    expiresAt: date,
    createdAt: date
  },
  {
    id: faker.random.uuid(),
    productId: 'ccb7e454-898d-4f6c-8226-84d50bcd9299',
    type: 'PAIR',
    minParticipants: 2,
    maxParticipants: 2,
    discount: 5,
    expiresAt: date,
    createdAt: date
  }
]

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('group', groups)
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('product', null)
  }
}
