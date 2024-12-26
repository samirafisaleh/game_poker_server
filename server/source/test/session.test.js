
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const server = require("../main_express");

chai.use(chaiHttp);


describe('Group', () => {

    describe("Create an  ", () => {

        it('Successful. Return 200', (done) => {
            chai.request(server)
                .post('/action/')
                .end((err, res) => {
                expect(res).to.have.status(200);
                expect(1).to.equal(1);
                done();
            });
        });
    })


    describe("Get an Action", () => {

        it('Successful. Return 200', (done) => {
            chai.request(server)
                .get('/action/1/')
                .end((err, res) => {
                expect(res).to.have.status(200);
                expect(1).to.equal(1);
                done();
            });
        });
    })

    describe("List an Action", () => {

        it('Successful. Return 200', (done) => {
            chai.request(server)
                .get('/action/')
                .end((err, res) => {
                expect(res).to.have.status(200);
                expect(1).to.equal(1);
                done();
            });
        });
    })

    describe("Update an Action", () => {

        it('Successful. Return 200', (done) => {
            chai.request(server)
                .put('/action/1/')
                .end((err, res) => {
                expect(res).to.have.status(200);
                expect(1).to.equal(1);
                done();
            });
        });
    })

    describe("Delete an Action", () => {

        it('Successful. Return 200', (done) => {
            chai.request(server)
                .delete('/action/1/')
                .end((err, res) => {
                expect(res).to.have.status(200);
                expect(1).to.equal(1);
                done();
            });
        });
    })
});










