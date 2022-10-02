#Start project for developing:
1. yarn install
2. yarn run ui
3. yarn run server

#Start for prod:
1. Install modules:
    yarn install
2. Set env vars for server:
    PORT=${SERVER_PORT} //You can use any
    ORIGIN_URI=${URI} // Used to allow requests to the server from a specific ip. Example http://34.35.26.63:80
3. Build project:
    yarn run build
4. Start:
    yarn run start

