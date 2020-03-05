'use strict'

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('user', [
      {
        id: '9c3859b0-5efe-11ea-bc55-0242ac130003',
        name: 'user test',
        createdAt: new Date()
      }
    ])
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('user', null)
  }
}
