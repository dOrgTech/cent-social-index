# ⛓ Cent.co Social Index

## Description

This is a collaborative research project between Cent.co x dOrg index significant NFT movements (transfers & mints for now) to try and glean insights as to the nature of these movements. It's our hope that we can learn something interesting about how NFTs trade hands through this on-chain data.

The current tools we are using for are:

* `AnyBlock` for SQL queries of on-chain data
* `Nest.js` for setting up a pluggable architecture around modules to easily change data sources / output if necessary
* `SQLite` for hosting the data we're interested in (transfer information) for the initial exploration

## Get Local SQLite DB

1. First, you will need an AnyBlock account. Create one [here](https://www.anyblockanalytics.com/).
    * If you have any issues, ping me (Nikhil) with your email and I can add you to my account as a registered user.

2. Next, create an `.env.development` file and use the format specified in `.env.example`, and fill in the fields as specified in AnyBlock.
    * For `DB_PATH` you can do something like `./db/cent.dev.sqlite` — this is the local SQLite database that will get constructed for you.
    * For `ANYBLOCK_DB_DATABASE` we're going to want to query `ethereum_ethereum_mainnet`.

3. Finally, install / run the app as specified [below](#dev-environment) and if all goes well, the app should query AnyBlock to get the data we want and drop it into your local SQLite database.

4. Message us if you have any issues with or questions about this process!

## Dev Environment

### Package Installation

```bash
$ npm install
```

### Running The App

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev
```

### Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Technical FAQ
Place technical issues and how to solve them here

## Nest Framework

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

- Website - [https://nestjs.com](https://nestjs.com/)

Nest is [MIT licensed](LICENSE).
