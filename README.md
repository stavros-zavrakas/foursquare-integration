# Foursquare integration - require.js S.P.A.

## Description
This is a very simple example of a single page application using require.js (amd modules)

The client side code is splitted into multiple modules:
- app.js - It loads the require.js configuration and boot the whole application 
- events.js - It binds some simple jQuery events
- libs/ - Contains the 3rd party libs. These libs are here after the build step and it is not part of the source control
- logger.js - Simple logger implementation that supports different log levels
- models.js - Models defined to connect with the 3rd party APIs
- renderer.js - It takes care of the rendering step. A template engine can be integrated (e.g: handlebars.js)
- requestor.js - It is firing all the ajax requests to the APIs. This is used by the models
- utils.js - Some utility functions

## Build & Run
```
npm install
npm run client:clean
npm run client:build
npm start
```
