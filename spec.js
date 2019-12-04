const expect = require('chai').expect;
const request = require('request');
const should = require('should');
const util = require('util');
var baseUrl = "https://swapi.co/api"

describe(" Protractor API",()=>{
    it('-> Name ',()=>{
        request.get({url:baseUrl+'/people/1/'},function(error,response,body){
            var bodyObj = JSON.parse(body);
            expect(bodyObj.name).to.equal("Luke Skywalker")
            expect(response.statusCode).to.equal(200);
            console.log(body)
            console.log("testttttttttt ----------------"+error)
            // done();
        });
    });
});

// describe(" ",()=>{
//     it('two plus two is four', (done) => {
//         expect(2 + 2).to.equals(4);
//         done();
//       });
// })
