# Characters Creator ( Illumi-api )
###### You can upload any character's information and later you will see it in the mural-section. Anyone's welcomed to collaborate!


###### You can watch the deployed app here:
###### coming soon...

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## EndPoints:

**- /characters/main**
returns a collection of the main characters of hxh

**- /characters/secondary**
returns a collection of secondary characters of hxh

**- /characters/public**
This is a public endpoint wich has the CORS verification disabled. (Can be accessed from any origin)

*You can mofify all the above routes from src/characters/app.controller.ts*

**- /characters/test**
This is a temporally endpoint. it's just for development purposes, in the future this will become the new characters/main

## License

Nest is [MIT licensed](LICENSE).


