var assert = require('chai').assert
const request = require('supertest');
const app = require("../app");


describe('GET /mensajes', function () {
    it('Deberia responder el parametro texto', function () {
        var texto = "probando";
        request(app)
            .get('/mensajes/'+texto)
            .set('Accept', 'text/plain;')
            .expect(200)
            .end(function (err, res) {
                assert.equal(res.text, texto);
            });
    });
});