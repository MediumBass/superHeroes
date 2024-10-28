const request = require('supertest');
const express = require("express");
const app = express()
const {heroes,images} = require("../Sequalize/defaultData")

describe('HeroController - createMultipleHeroes', () => {
    it('should create 7 new heroes and add images for them', async () => {

        for (let i = 0; i < heroes.length; i++) {
            const response = await request('http://localhost:8000').post('/api/hero').send(heroes[i]);
            let responseImage
            for (let j = 0; j < images[i].length; j++) {
                 responseImage = await request('http://localhost:8000').post('/api/image').send({
                    hero_id:response.body.id,
                    image_link: images[i][j].image_link
                });
            }
            expect(response.status).toBe(200);
            expect(response.body).toMatchObject(heroes[i]); // response data matches with objects in array
            expect(responseImage.body.hero_id).toBe(response.body.id); //image id matches with hero id
        }
    });
});
describe('HeroController - Delete one with images', () => {
    it('should delete 1 hero and all his images', async () => {
        const deleteResponse = await request('http://localhost:8000').delete(`/api/hero/1`);
        expect(deleteResponse.status).toBe(200);
        expect(deleteResponse.text).toBe("Hero Deleted");
        const getImagesResponse =await request('http://localhost:8000').get(`/api/image/1`);
        expect(getImagesResponse.body).toEqual([])
    });
});