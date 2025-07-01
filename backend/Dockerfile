FROM node:20
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn install && yarn global add nodemon
COPY . .
EXPOSE 3001
CMD ["yarn", "dev"] 