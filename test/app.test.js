
const supertest = require('supertest');
const app = require('../app');
const {expect} = require('chai');

describe('App.js Module', () => {
  describe('GET /apps', () => {
    // Get JSON object from GET
    it('should return a json object from GET /apps', () => {
      return supertest(app)
        .get('/apps')
        .expect(200)
        .expect('Content-Type', /json/)
      ;
    });
    // Genres Tests
    it('should send a 404 if given an invalid genre', () => {
      return supertest(app)
        .get('/apps')
        .query({genres: 'N/A'})
        .expect(404, 'Make sure to filter by Action, Puzzle, Strategy, Casual, Arcade, or Card.')
      ;
    });
    it('should return apps with matching action genres', () => {
      return supertest(app)
        .get('/apps?genres=Action')
        .expect(200)
        .expect('Content-Type', /json/)
        .then(res => {
          expect(res.body).to.be.an('array');
          for (let i = 0; i < res.body.length; i++) {
            expect(res.body[i].Genres).to.include('Action');
          }
        })
      ;
    });
    it('should return apps with matching puzzle genres', () => {
      return supertest(app)
        .get('/apps')
        .query({genres: 'Puzzle'})
        .expect(200)
        .expect('Content-Type', /json/)
        .then(res => {
          expect(res.body).to.be.an('array');
          for (let i = 0; i < res.body.length; i++) {
            expect(res.body[i].Genres).to.include('Puzzle');
          }
        })
      ;
    });
    it('should return apps with matching strategy genres', () => {
      return supertest(app)
        .get('/apps')
        .query({genres: 'Strategy'})
        .expect(200)
        .expect('Content-Type', /json/)
        .then(res => {
          expect(res.body).to.be.an('array');
          for (let i = 0; i < res.body.length; i++) {
            expect(res.body[i].Genres).to.include('Strategy');
          }
        })
      ;
    });
    it('should return apps with matching casual genres', () => {
      return supertest(app)
        .get('/apps')
        .query({genres: 'Casual'})
        .expect(200)
        .expect('Content-Type', /json/)
        .then(res => {
          expect(res.body).to.be.an('array');
          for (let i = 0; i < res.body.length; i++) {
            expect(res.body[i].Genres).to.include('Casual');
          }
        })
      ;
    });
    it('should return apps with matching arcade genres', () => {
      return supertest(app)
        .get('/apps')
        .query({genres: 'Arcade'})
        .expect(200)
        .expect('Content-Type', /json/)
        .then(res => {
          expect(res.body).to.be.an('array');
          for (let i = 0; i < res.body.length; i++) {
            expect(res.body[i].Genres).to.include('Arcade');
          }
        })
      ;
    });
    it('should return apps with matching card genres', () => {
      return supertest(app)
        .get('/apps')
        .query({genres: 'Card'})
        .expect(200)
        .expect('Content-Type', /json/)
        .then(res => {
          expect(res.body).to.be.an('array');
          for (let i = 0; i < res.body.length; i++) {
            expect(res.body[i].Genres).to.include('Card');
          }
        })
      ;
    });
    // Sort Tests
    it('should send a 404 if given an invalid sort', () => {
      return supertest(app)
        .get('/apps')
        .query({sort: 'N/A'})
        .expect(404, 'Make sure to sort by either rating or app.')
      ;
    });
    it('should sort by app name', () => {
      return supertest(app)
        .get('/apps')
        .query({sort: 'app'})
        .expect(200)
        .expect('Content-Type', /json/)
        .then(res => {
          expect(res.body).to.be.an('array');
          let sorted = true;

          console.log('app', res.body);

          let i = 0;
          while (i < res.body.length - 1) {
            // compare current object at `i` with next object at `i + 1`
            const currentObj = res.body[i];
            const nextObj = res.body[i + 1];
            // if the next object is less than the object at i,
            if (nextObj.App.toLowerCase() < currentObj.App.toLowerCase()) {
              // the objects were not sorted correctly
              sorted = false;
              break; // exit the loop
            }
            i++;
          }
          expect(sorted).to.be.true;
        })
      ;
    });
    it('should sort by app rating', () => {
      return supertest(app)
        .get('/apps')
        .query({sort: 'rating'})
        .expect(200)
        .expect('Content-Type', /json/)
        .then(res => {
          expect(res.body).to.be.an('array');
          let sorted = true;

          let i = 0;
          while (i < res.body.length - 1) {
            // compare current object at `i` with next object at `i + 1`
            const currentBook = res.body[i];
            const nextBook = res.body[i + 1];
            // if the next object is less than the object at i,
            if (nextBook.Rating > currentBook.Rating) {
              // the objects were not sorted correctly
              sorted = false;
              break; // exit the loop
            }
            i++;
          }
          expect(sorted).to.be.true;
        })
      ;
    });
    it('should both sort and return a result with sort and genres specified', () => {
      supertest(app)
        .get('/apps')
        .query({genres: 'action', sort: 'rating'})
        .expect(200)
        .expect('Content-Type', /json/)
        .then(res => {
          expect(res.body).to.be.an('array');
          for (let i = 0; i < res.body.length; i++) {
            expect(res.body[i].Genres).to.include('Action');
          }

          let sorted = true;

          let i = 0;
          while (i < res.body.length - 1) {
            // compare current object at `i` with next object at `i + 1`
            const currentBook = res.body[i];
            const nextBook = res.body[i + 1];
            // if the next object is less than the object at i,
            if (nextBook.Rating > currentBook.Rating) {
              // the objects were not sorted correctly
              sorted = false;
              break; // exit the loop
            }
            i++;
          }
          expect(sorted).to.be.true;
        })
      ;
    });
  });
});