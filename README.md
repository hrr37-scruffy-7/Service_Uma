# Project Name
Scruffy Leela Project - Uma Abrami
> Project description
Replicate a VRBO item page site. This repo has a dynamic photo gallery component and static photos for the other components.
## Related Projects

  - https://github.com/hrr37-scruffy-7
  - https://github.com/hrr37-fec-leela

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> App.jsx - The front-end get endpoints are set up for localhost 5002. To switch to a more generic endpoint, see commented out line 41.

> Database/index.js - The database file index.js is set up for a local database. To switch to connect to an Atlas cloudbased database, comment line 5, and uncomment lines 3 and 4, match line 4 to match your specific string provided by Atlas for connecting to an application, and add a DBconfig file in the database folder with the password. Here is a sample config file:

>     exports.passwordMongodb = 'AtlasUserPassword';
## Requirements

App Entry: client/src/index.jsx
App components: client/src/components/App.jsx ; client/src/components/Card.jsx

## Development

### Installing Dependencies

Build Setup: Run the following in this directory(i.e. root directory):

```
npm install
npm run start-dev
npm run react-dev
npm run seed
npm run mockseed
```
NOTE: Make sure to sort the Mongo DB before rendering (whether on local db or atlas db):
In terminal:
1) use FRBO;
2) db.images.find().sort({imageId:1, imageIndex:1})

In compass:
1) Find sort option
2) {imageId:1, imageIndex:1}


