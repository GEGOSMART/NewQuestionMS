FROM node:12

WORKDIR /code
COPY package*.json /code/
RUN npm install
COPY . /code/

CMD ["npm","start"]
