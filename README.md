### todo-server

Todo application's backend using node.js, dynamodb connectivity and jwt authorisation.

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

#### API End Points

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

`parameters: email,todos`

`RESPONSE: Success Message or 401`

##### Edit Todo
`/todo`

`METHOD: PUT`

`parameters: email,todos`

`RESPONSE: Success Message or 401`

##### Delete Todo
`/todo`

`METHOD: DELETE`

`parameters: email,todos`

`RESPONSE: Success Message or 401`

##### Get Profile
`/profile`

`METHOD: GET`

`RESPONSE: Profile Info or 401`

