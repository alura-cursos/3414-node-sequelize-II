'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('cursos', [
      {
        titulo: 'API com Express',
        descricao: 'Curso de API com Express e MongoDB',
        data_inicio: '2023-01-01',
        categoria_id: 1,
        docente_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'API com GraphQL',
        descricao: 'Curso de API com GraphQL e Apollo',
        data_inicio: '2023-02-01',
        categoria_id: 1,
        docente_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'SpringBoot',
        descricao: 'Curso de Java com Spring Framework',
        data_inicio: '2023-01-01',
        categoria_id: 2,
        docente_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'Tópicos Avançados',
        descricao: 'Curso de tópicos avançados com Java',
        data_inicio: '2023-03-01',
        categoria_id: 2,
        docente_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'Python Web com Django',
        descricao: 'Curso de aplicações web com Django',
        data_inicio: '2023-01-01',
        categoria_id: 3,
        docente_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'Python Web com Django II',
        descricao: 'Curso de aplicações web com Django - continuação',
        data_inicio: '2023-05-01',
        categoria_id: 3,
        docente_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'Orientação a Objetos com C#',
        descricao: 'Curso de C#: coleções, arquivos e libs',
        data_inicio: '2023-01-01',
        categoria_id: 4,
        docente_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'Testes limpos com C#',
        descricao: 'Curso de testes com C#',
        data_inicio: '2023-04-01',
        categoria_id: 4,
        docente_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('cursos', null, {});
  }
};
