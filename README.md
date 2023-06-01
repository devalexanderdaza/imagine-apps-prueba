
# Imagine Apps - Easy Media

This is a project created with the purpose of providing evidence for the position of "Semi sr. Fullstack developer - NodeJS / Angular".

## Monorepository

This is a mono repository, it has two folders, one for the backend and one for the frontend powered by Turbo Repo.

## Features on Backend

- Authentication and Authorization
- Logout with BlacklistedTokens Collection
- Posts (create, get all, get by user using email, filter posts by character on title or content, filter posts by createdAt date)
- Cors
- Validation
- Guards
- Decorator isPublic()

## Features on Frontend

- Login and Register
- Get all posts of logged user
- Get all posts published
- Create new posts
- ReactiveForms with Angular
- Single service for consume the backend
## Authors

- [@devalexanderdaza](https://www.github.com/devalexanderdaza)


## API Reference

This project has a Postman Collection located on main folder


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`APP_PORT`

`APP_GLOBAL_PREFIX`

`DB_HOST`

`DB_USER`

`DB_PASSWORD`

`DB_NAME`

`DB_URL`

## Installation

Install with yarn

```bash
  yarn install
```

Run backend and frontend

```bash
  yarn run dev
```

Build backend and frontend for production

```bash
  yarn build
```

After run in development mode the backend run on 

```bash
  http://localhost:5000
```

and the frontend run on 

```bash
  http://localhost:4200
```
    
## Acknowledgements

 - [NodeJS](https://nodejs.org/en)
 - [NestJS](https://nestjs.com/)
 - [Angular](https://angular.io/)
 - [Turbo Repo](https://turbo.build/)
 - [Bootstrap](https://getbootstrap.com/)
 - [Mongo Atlas](https://www.mongodb.com/atlas/database)
 - [Figma](https://www.figma.com/)