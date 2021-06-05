FROM node:12.13.0-alpine

# set work directory
WORKDIR /web/app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /web/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json package-lock.json ./

RUN npm install -D
CMD ["npm", "run", "export"]
