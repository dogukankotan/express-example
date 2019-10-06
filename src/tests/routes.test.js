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
      expect(res.body).toHaveProperty('code') // except body has code
      expect(res.body.code).toBe(200) // expect code is 200
      expect(res.body).toHaveProperty('msg') // except body has msg
      expect(res.body.msg).toBe('Success') // expect msg is Success
      expect(res.body).toHaveProperty('records') // except body has records
      expect(Array.isArray(res.body.records)).toBe(true) // except records has array
      expect(res.body.records.length).toBe(537) // except 537 items filtered in records
    })
  })

  it('should give bad request error for dates', () => {
    return request(app).post('/').send({
      startDate: '2016-01-266',
      endDate: '2018-02-026',
      minCount: 2700,
      maxCount: 3000
    }).then((res) => {
      expect(res.statusCode).toBe(400) // expect status is 400
      expect(res.body).toHaveProperty('code') // except body has code
      expect(res.body.code).toBe(400) // expect code is 400
      expect(res.body).toHaveProperty('msg') // except body has msg
      expect(res.body.msg).toBe('Bad Request: Please check errors') // expect msg is Success
      expect(res.body).toHaveProperty('errors') // except body has errors
      expect(Array.isArray(res.body.errors)).toBe(true) // except errors has array
    })
  })

  it('should give bad request error for counts', () => {
    return request(app).post('/').send({
      startDate: '2016-01-26',
      endDate: '2018-02-02',
      minCount: '',
      maxCount: {}
    }).then((res) => {
      expect(res.statusCode).toBe(400) // expect status is 400
      expect(res.body).toHaveProperty('code') // except body has code
      expect(res.body.code).toBe(400) // expect code is 400
      expect(res.body).toHaveProperty('msg') // except body has msg
      expect(res.body.msg).toBe('Bad Request: Please check errors') // expect msg is Success
      expect(res.body).toHaveProperty('errors') // except body has errors
      expect(Array.isArray(res.body.errors)).toBe(true) // except errors has array
    })
  })

  it('should give not found error', () => {
    return request(app).post('/').send({
      startDate: '2018-02-02',
      endDate: '2018-02-02',
      minCount: 2700,
      maxCount: 3000
    }).then((res) => {
      expect(res.statusCode).toBe(404) // expect status is 404
      expect(res.body).toHaveProperty('code') // except body has code
      expect(res.body.code).toBe(404) // expect code is 404
      expect(res.body).toHaveProperty('msg') // except body has msg
      expect(res.body.msg).toBe('Not Found') // expect msg is Success
    })
  })
})
