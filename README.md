# express-example

- Learning Express.js

- Pipeline status: [![CircleCI](https://circleci.com/gh/dogukankotan/express-example/tree/master.svg?style=svg)](https://circleci.com/gh/dogukankotan/express-example/tree/master)

- Production Link on Heroku: https://testapiexpress.herokuapp.com/
  

## Database Model

```json
// Model
{
   counts: [ 0, 600, 500 ],
    _id: 58adc57a1f84e37c19df0cfc,
    key: 'lXTIcYVZIuzxrP01',
    value: 'QYV8Jr6Kn52OrnL35HWTcWNkl2FcPH3Hc0Q5AtnW5D1UCjrIFSZNcfMWCSsIW7NqdukbL6oshFlBmhgb8wbvqN39qTKCckJ499LzaRYgY87Qszv00DdVJghXGvWYbFiaR5cRQqHsAnkX',
    createdAt: 2016-09-09T05:07:22.324Z
    },
}
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
