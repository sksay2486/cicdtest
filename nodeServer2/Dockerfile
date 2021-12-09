FROM node:latest

RUN npm install -g nodemon
COPY . /src
RUN cd /src; npm install
WORKDIR /src

CMD ["nodemon", "server.js"]