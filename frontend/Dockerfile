FROM node:24 

WORKDIR /usr/src/app

COPY . .

RUN npm ci

# RUN npm run test 

RUN npm run build
# CMD [ "npm","run","start" ]
CMD [ "npx","vite","preview","--host"]