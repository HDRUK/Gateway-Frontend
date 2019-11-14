FROM node:8  
WORKDIR /src/index.js  
  
# Install app dependencies  
COPY package*.json ./  
RUN npm install  
  
# Copy app contents  
COPY . .  
  
# App port
EXPOSE 8080  

# Add environment variables 
ENV REACT_APP_GRAPH_QL_ENDPOINT=endpointhere
  
# Start the app  
CMD [ "npm","run","start"]  