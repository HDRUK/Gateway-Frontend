# HDR GATEWAY

## React web front end application

## Licence

Apache 2

## Author(s)

[IBM UK](https://www.ibm.com/uk-en)  
[Health Data Research UK](https://www.hdruk.ac.uk/)  
[University of Oxford, Department of Computer Science](http://www.cs.ox.ac.uk/)  
[Parity](https://www.parity.net/)  
[METADATAWORKS](https://metadataworks.co.uk/)  
​

## Contributors

To be added
​

## Relevant Repositories

React Front End Application [Repository](https://github.com/HDRUK/Gateway-Frontend)  
Node Web and Authentication Server [Repository](https://github.com/HDRUK/Gateway-Auth-Server)  
Node Graphql Data Handler [Repository](https://github.com/HDRUK/Gateway-Middleware)  
Postgres Database Creation and update [Repository](https://github.com/HDRUK/Gateway-DB)  
​

## Overview

This is a React Application, which provides the Front End to the Gateway. It uses GraphQL to talk to the data server, and is run through the Gateways Web Auth server.

### Installation / Running Instructions

This is a React application, all node modules are installed locally.

Download or clone from Code Repsitory

[Front End Repository](https://github.com/HDRUK/Gateway-Frontend)

from the downloaded directory run

npm install

This will install the application on port 3000 by default.

### .env file

Create an environment file with the following options:

> REACT_APP_GRAPH_QL_ENDPOINT=
>
> > The URL of the Gateway GraphQL middleware server

> REACT_APP_ENVIRONMENT=
>
> > The current environment

### Example .env file

REACT_APP_GRAPH_QL_ENDPOINT=http://localhost:5001  
REACT_APP_ENVIRONMENT=local

### Useful sites:

[Apollo Client React Documentation](https://www.apollographql.com/docs/react/)

## Running the Application

`npm start`

> Runs the application in watch mode

## Other commands

`npm run lint`

> runs the Lint checker against the code base

`npm run test:coverage`

> runs the unit tests

`npm run sonarQube`

> runs the sonarQube code validator. You will need to either have a local copy running or configure a web service.

## Deployment

This is a React application, and requires deploying as such.

`npm run build`

Deploy the build directory to be accesible by the Gateway's web auth server.
