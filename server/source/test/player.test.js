
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const server = require("../main_express");

chai.use(chaiHttp);


describe('Group', () => {

    describe("Create an Player", () => {

        it('Successful. Return 200', (done) => {
            chai.request(server)
                .post('/player/')
                .end((err, res) => {
                expect(res).to.have.status(200);
                expect(1).to.equal(1);
                done();
            });
        });
    })


    describe("Get an Player", () => {

        it('Successful. Return 200', (done) => {
            chai.request(server)
                .get('/player/1/')
                .end((err, res) => {
                expect(res).to.have.status(200);
                expect(1).to.equal(1);
                done();
            });
        });
    })

    describe("List an Player", () => {

        it('Successful. Return 200', (done) => {
            chai.request(server)
                .get('/player/')
                .end((err, res) => {
                expect(res).to.have.status(200);
                expect(1).to.equal(1);
                done();
            });
        });
    })

    describe("Update an Player", () => {

        it('Successful. Return 200', (done) => {
            chai.request(server)
                .put('/player/1/')
                .end((err, res) => {
                expect(res).to.have.status(200);
                expect(1).to.equal(1);
                done();
            });
        });
    })

    describe("Delete an Player", () => {

        it('Successful. Return 200', (done) => {
            chai.request(server)
                .delete('/player/1/')
                .end((err, res) => {
                expect(res).to.have.status(200);
                expect(1).to.equal(1);
                done();
            });
        });
    })
});










