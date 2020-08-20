const axios = require('axios')
const MockAdapter = require("axios-mock-adapter")
const faker = require('faker')

const mock = new MockAdapter(axios, {
    delayResponse: 5000 
})


mock.onGet("/users").reply(function (config) {
    
    let data = []

    for (let i=0; i<=25; i++) {
        data.push({
            "id": i,
            "uuid": faker.random.uuid(),
            "avatar_url": faker.random.image(),
            "type": "User",
            "name": faker.name.findName(),
            "company": faker.random.companyName,
            "location": "San Francisco",
            "email": faker.internet.email(),
            "bio": "There once was...",
            "username": "monatheoctocat"
        })
    }

    return [ 200, data ];
})