'use strict';
const bcrpt = require ('bcrypt')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('Users', [{
        username:'John Doe',
        password:bcrpt.hashSync('12345',10),
        avatar:'',
        createdAt:Sequelize.fn('NOW'),
        updatedAt:Sequelize.fn('NOW')

      }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
     
      await queryInterface.bulkDelete('Users', null, {});
     
  }
};
