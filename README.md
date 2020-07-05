# Skripts

A simple web application for writing, running your JS scripts in a web browser. Any script can be saved and shared using a auto generated unique URL for each script.

This application has backend and frontend parts which can be deployed on a physical server or a
docker container.

## Develop or Run

Clone this repository locally and choose one of options below to run or develop. Make sure to have `node` and `npm` installed before proceeding.

To develop with hot reload use vue dev server in frontend and nodemon server for backend. Start frontend and backend seperately:

```sh
cd /frontend
npm install
npm run serve # Run development server at localhost:8080

cd /server
npm install
npm run dev # Starts node server at localhost:3000
```

Test production build:

```sh
# Make production build
cd /frontend
npm run build

# Test as if in production
cd /server
npm install
node main.js # starts server at localhost:3000. It also serves frontend static files
```

Run in docker container:

```sh
docker build -t skripts .

docker run --rm -p 3000:3000 -d skripts:latest
```

## Features

## Limitations

## Credits

## Coming up..
