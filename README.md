#Start project for developing
1. yarn run ui
2. yarn run server

#Start for prod
1. Set env vars:
    PORT=${SERVER_PORT} //You can use any
    ORIGIN_URI=${URI} // Used to allow requests to the server from a specific ip. Example http://34.35.26.63:80
2. Build project:
    yarn run build
3. Start:
    yarn run start

