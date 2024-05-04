'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Lugares', {
      id: {
        allowNull: true,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false
      },
      descripcion: {
        type: Sequelize.TEXT
      },
      ubicacion: {
        type: Sequelize.STRING
      },
      coordenadas: {
        type: Sequelize.STRING,
        allowNull: true
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Lugares');
  }
};