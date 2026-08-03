FROM node:24

WORKDIR /usr/src/app

COPY . . 

RUN npm ci

ARG START_CMD="npm run start"

CMD sh -c "$START_CMD"

# CMD [ "npm","run","start" ]

