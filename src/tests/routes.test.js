const request = require('supertest')
const app = require('../bin/www')
// Test homepage with post method 
describe('Post Index Endpoints', () => {
  it('should filter records by post body', () => {
    return request(app).post('/').send({
      startDate: '2016-01-26',
      endDate: '2018-02-02',
      minCount: 2700,
      maxCount: 3000
    }).then((res) => {
      expect(res.statusCode).toBe(200) // expect status is 200
      expect(Array.isArray(res.body)).toBe(true) // except body is array
      expect(res.body.length).toBe(537) // except 537 items filtered
    })
  })
})
