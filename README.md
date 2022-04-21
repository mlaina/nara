# NARA

<p align="center">
  <a href="https://github.com/devsman/nara-man/actions?query=workflow%3ABuild"><img src="https://github.com/devsman/nara-man/workflows/Build/badge.svg"></a>
</p>
<p align="center">
  <a href="https://github.com/devsman/nara-man/actions?query=workflow%3ADeploy"><img src="https://github.com/devsman/nara-man/workflows/Deploy/badge.svg"></a>
</p>

Relational, node, API **APLICATION**

Download dependencys with NPM

`npm install`

Run the proyect with

## `node server.js`

## Dependencies

- **bcrypt**: Password encrypt, User password. Hash and Salt.
- **body-parser**: Parser json, in http request and response.
- **express**:
- **express-jwt**: Combine express and json web token.
- **forever**: For daemon the service.
- **jsonwebtoken**: The security of the rest API.
- **morgan**: Control the logs of the Express API.
- **mysql2**: Connect with the DB, Sequelize way
- **sequelize**: ORM to control the model and the DB queries.
- **swagger-ui-express**: Document the API.
- **winston**: Control the log.

---

## DML

To generate random data use http://generatedata.com/

Into the dir models the directory _seed_

---

## Docker

Build the docker image:

`docker build -t mlaina/nara .`

Run a container of **NARA**:

`docker run -p 8000:3000 -d mlaina/nara`

To push to **dockerhub** a new image of nara:
`docker push mlaina/nara:tagname`

To pull the nara image to **dockerhub** repository:
`docker pull mlaina/nara`



docker build --tag bulletinboard:1.0 .
