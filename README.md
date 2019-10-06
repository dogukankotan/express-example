# express-example

- Learning Express.js

- Pipeline status: [![CircleCI](https://circleci.com/gh/dogukankotan/express-example/tree/master.svg?style=svg)](https://circleci.com/gh/dogukankotan/express-example/tree/master)

- Production Link on Heroku: https://testapiexpress.herokuapp.com/
  

# API Documentation

**Request URL:** "http://localhost:3000/" 

```sh
curl -X POST \
  http://localhost:3000/ \
  -H 'Content-Type: application/json' \
  -d '{
	"startDate": "2016-01-26",
	"endDate": "2018-02-02",
	"minCount": 2700,
	"maxCount": 3000
}'
```

- Request Example
```json
{
	"startDate": "2016-01-26",
	"endDate": "2018-02-02",
	"minCount": 2700,
	"maxCount": 3000
}
```

- Success Response Example
```json
{
  "code": 200,
  "msg": "Success",
  "records": [
    {
      "_id": "58adc585dedcff7e190af076",
      "key": "NMBUu74JC1bEGECM",
      "createdAt": "2016-07-06T13:12:01.175Z",
      "totalCount": 2800
    },
    {
      "_id": "58adc585dedcff7e190afbe3",
      "key": "ut383XMVB1FtNWNP",
      "createdAt": "2016-07-07T02:25:28.485Z",
      "totalCount": 2900
    },
    {
      "_id": "58adc57a1f84e37c19df0a61",
      "key": "840hRiaWF4C1xupD",
      "createdAt": "2016-07-07T06:34:29.059Z",
      "totalCount": 2800
    },
    ...
  ],
  "errors": []
```

# App

## Database Model

```json
// Model
{
    "_id": "58adc585dedcff7e190af076",
    "key": "NMBUu74JC1bEGECM",
    "createdAt": "2016-07-06T13:12:01.175Z",
    "value": "QYV8Jr6Kn52OrnL35HWTcWNkl2FcPH3Hc0Q5AtnW5D1UCjrIFSZNcfMWCSsIW7NqdukbL6oshFlBmhgb8wbvqN39qTKCckJ499LzaRYgY87Qszv00DdVJghXGvWYbFiaR5cRQqHsAnkX",
    "counts": [ 0, 600, 500 ]
  },
```



## Requirements
- node
- npm

## Build

```sh
npm install
```

## How to run 

- Rename `.env.example` file to `.env`

- Change `DATABASE_URL` in `.env` file with your mongoDB url.

```sh
npm start
```

## How to test 

```sh
npm test
```

## Test only code style
```sh
npx standard --fix
```

## Test only code
```sh
npx jest
```

## Fix code style issues
```sh
npx standard --fix
```

# References

 - [How to create a REST API with Express.js in Node.js](https://www.robinwieruch.de/node-express-server-rest-api)
 - [MongoDB Aggregation](https://docs.mongodb.com/manual/reference/operator/aggregation/match)
 - [Mongoose Aggregation](https://mongoosejs.com/docs/api/aggregate.html#aggregate_Aggregate)
 - [Testing NodeJs/Express API with Jest and Supertest ](https://medium.com/@hiennguyen_1188/testing-api-endpoints-in-express-js-293f1dc9e0ba)
 - [Jest Test](https://jestjs.io/docs/en/tutorial-async)
 - [Supertest](https://github.com/visionmedia/supertest#readme)
 - [Mongooese Jest](https://mongoosejs.com/docs/jest.html)
 - [Heroku CI](https://devcenter.heroku.com/articles/pipelines)
