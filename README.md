# KeystoneJS Starter Template

You've created a KeystoneJS project! This project contains a simple list of users and an admin application (`localhost:3000/admin`) with basic authentication.

## Running the Project.

To run this project first run `npm install`. 
run project with `npm run dev`.

Once running, 
Keystone Admin UI is reachable via `localhost:3000/admin`.
Keystone  UI is reachable via `localhost:3000/`.

## Login to admin portal

admin email and password will be shown on first app run . 
Or you can comment intial data condition to print it on terminal.

email: admin@example.com
  password: 692568c899b7

## integrating Next js
run follwing on  terminal 
`yarn add @keystonejs/app-next` 

integrate next js as according to docs
`https://www.keystonejs.com/keystonejs/app-next/`

add following in index js

`const { NextApp } = require('@keystonejs/app-next');

...

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({ enableDefaultRoute: false }),
    new NextApp({ dir: 'app' }),
  ],
  distDir,
}
`

dont forgot to add `distDir=/path to .next folder from app js`
`const distDir='app\.next'`


## run next js app
- Create `app` folder 
Populate `./pages/index.js` with the following contents:
`
function HomePage() {
  return <div>Welcome to Next.js!</div>
}

export default HomePage
`
Restart server and look for `http://localhost:3000/`

## image upload with keystone5
run following command in terminal to add file dependecy\
`yarn add @keystonejs/file-adapters`

add imageUpload.js file and add the following code

## edit index.js with following code
const imageScheama =require('./imageUpload');

...

keystone.createList('image',imageScheama)


## upload image
Navigate to `localhost:3000/admin` to upload images.


## Next steps

This example has no front-end application but you can build your own using the GraphQL API (`http://localhost:3000/admin/graphiql`).
