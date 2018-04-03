### todo-server

Todo application's backend using node.js, dynamodb connectivity and jwt authorisation.

#### Instructions 

`git clone https://github.com/arunkumarpalaniappan/todo-server.git`

- Create a dynamoDB in [AWS](https://aws.amazon.com) and create two tables named **todos_users** (with email as key) and **todos_master** (with id as key)
- Create access tokens
- Update tokens in configuration file -> [awsConfig.js](config/awsConfig.js)

`npm i`

`npm start`

- API end points can be accessed using `host:port`**/{ROUTES}**

**Optional**

- You can update jwt token/default host/default port in [default.json](config/default.json)


#### API End Points/Routes

##### Login
`/login`

`METHOD: POST`

`parameters: username,password`

`RESPONSE: JWT Token or 401`

##### Signup
`/signup`

`METHOD: POST`

`parameters: email,password,name`

`RESPONSE: Success Message or 401`

##### Create Todo
`/todo`

`METHOD: POST`

`parameters: todos`

`RESPONSE: Success Message or 401`

##### Edit Todo
`/todo`

`METHOD: PUT`

`parameters: todos`

`RESPONSE: Success Message or 401`

##### Delete Todo
`/todo`

`METHOD: DELETE`

`parameters: todos`

`RESPONSE: Success Message or 401`

##### Get Profile
`/profile`

`METHOD: GET`

`RESPONSE: Profile Info or 401`



#### Application Stack/Tech
- Heroku
- Node
- Hapi
- Express
- Blue Bird
- Json Web Token
- Joi
- bcrypt.js
- Bunyan Logger

#### Data Base
- AWS Dynamo DB

#### License
MIT

