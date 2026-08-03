FROM node:24

WORKDIR /usr/src/app

COPY . . 

RUN npm ci

ARG START_CMD="npm run start"
ENV START_CMD=$START_CMD

CMD ["sh", "-c", "$START_CMD"]

