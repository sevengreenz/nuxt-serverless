# serverless-nuxt

> Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for devloplment and launch server
$ npm start
```

## Deploy

```` bash
# configure the profile
$ serverless config credentials --provider aws --key [aws_access_key_id] --secret [aws_secret_access_key]

# deploy code to AWS
$ npm run deploy
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js) and [Serverless](https://serverless.com/).
