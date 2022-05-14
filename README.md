# Car Management API 🔥

Car Management API (Backend Only)

- Superadmin

```
email = superadmin@gmail.com
password = 12345678
```

## 🚀Features

- ### Account Management ❗

```
  Create Account
  Read Account
  Read Account by id
  Update Account
  Delete Account (Soft Delete)
```

- ### Car Management 🚗

```
  Create Car
  Read list of Cars
  Read car by id
  Update Car
  Delete Car (Soft Delete)
```

- ### Login 👨‍✈️

```
  Login with Token
```

## 🏃How to Run (Installation)

```
1. yarn install
```

```
2. yarn sequelize-cli init
```

```
3. Edit file config.js and set the username and the password
   Example :
   "username": "postgres",
   "password": "12345678",
   "database": "car_management_api",
   "host": "127.0.0.1",
   "dialect": "postgres"
```

```
4. yarn sequelize-cli db:create
```

```
5. Table Initialization
   Table Account :
   yarn sequelize-cli model:generate --name Account --attributes email:string,password:string,role:string,is_deleted:boolean --underscored
   Table Car :
   yarn sequelize-cli model:generate --name Cars --attributes name:string,photo:string,price:integer,size_id:integer,created_by:integer,updated_by:integer,is_deleted:boolean,deleted_by:integer --underscored
   Table Size :
   yarn sequelize-cli model:generate --name Size --attributes name:string --underscored
```

```
6. Set lowercase in every table name
```

```
7. Add 1 property in "is_deleted" property = defaultValue : false in migration folder (only for account and cars table).
   Example:
   is_deleted: {
   type: Sequelize.BOOLEAN,
   defaultValue: false,

```

```
8.Create seeders for superadmin & sizes data

Superadmin :
yarn sequelize-cli seed:generate --name demo-user

Sizes :
yarn sequelize-cli seed:generate --name size
```

```
9.Edit seeders file and add some code to make it to be functional.
The line is only an estimation

Superadmin :
Line 2  :
const controller = require("../controller")

Line 13 :
await queryInterface.bulkInsert("accounts", [
      {
        email: "superadmin@gmail.com",
        password: controller.encryptPass("12345678"),
        role: "superadmin",
        created_at: new Date(),
        updated_at: new Date(),
        is_deleted: false,
      },
    ]);


Sizes:
Line 13:
 await queryInterface.bulkInsert("sizes", [
      {
        name: "Small",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Medium",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Large",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
```

```
10. Migrate tables and generate seeders
yarn migrate
yarn sequelize-cli db:seed:all

```

```
11. RUN IT
yarn start
```

## 🔍Endpoints

```

- /docs = API Documentation & testing
- /api/v1/login = Login
- /api/v1/admins = Post & Get Admin Account
- /api/v1/admins/:id = Get by id, Put, Delete(Soft Delete) Admin Account
- /api/v1/cars = Post & Get Car Data
- /api/v1/cars/:id = Get by id, Put, Delete(Soft Delete) Car Data
- /api/v1/register = Post Member Account
- /api/v1/profile = Get current login account

```

## ⭐Tech

| Package            | Version | Source                                                  |
| ------------------ | ------- | ------------------------------------------------------- |
| bcrypt             | ^5.0.1  | https://www.npmjs.com/package/bcrypt                    |
| express            | ^3.1.7  | https://expressjs.com/                                  |
| cors               | ^2.8.5  | https://expressjs.com/en/resources/middleware/cors.html |
| jsonwebtoken       | ^8.5.1  | https://jwt.io/                                         |
| pg                 | ^8.7.3  | https://yarnpkg.com/package/pg                          |
| pg-hstore          | ^2.3.4  | https://yarnpkg.com/package/pg-hstore                   |
| sequelize          | ^6.19.0 | https://sequelize.org/                                  |
| sequelize-cli      | ^6.4.1  | https://yarnpkg.com/package/sequelize-cli               |
| swagger-ui-express | ^4.4.0  | https://www.npmjs.com/package/swagger-ui-express        |

## 📌Entity Relationship Diagram

<img src="erd.png">
```
