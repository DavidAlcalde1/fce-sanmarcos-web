const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API FCE UNMSM',
      version: '1.0.0',
      description: 'API para gestión de noticias – Trabajo de suficiencia UPLA'
    },
    servers: [{ url: 'http://localhost:8080/api' }]
  },
  apis: ['./src/routes/*.js']
};

const specs = swaggerJsdoc(options);

module.exports = specs;