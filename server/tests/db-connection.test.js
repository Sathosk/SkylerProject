const mongoose = require("mongoose");
const request = require("supertest");
const connectDB = require('../config/db.js');

require("dotenv").config({ path: '../config/config.env' });


const Posts = require('../models/Posts');


/* Testing the API endpoints. */
describe("GET /api/posts/all", () => {
    it("should return all posts", async () => {
        return request('http://localhost:3000/')
        .get("api/post/all")
        .expect('Content-Type', /json/)
        .expect(200)
        .then((response) => {
            expect((response.body)).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({
                        _id: expect.any(String),
                        name: expect.any(String),
                        email: expect.any(String),
                        content: expect.any(String),
                        profilePic: expect.any(String, null),
                        cloudinaryId: expect.any(String, null),
                        like: expect.any(Number),
                        timeStamp: expect.any(String),
                        __v: expect.any(Number)
                    })
                ])
            )
        }) 
    });
});