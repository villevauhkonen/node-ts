#Build image
FROM node:10 as BUILD

#Select workdir
WORKDIR /app

#Copy package.json for dep installation
COPY package.json .

#Install dependencies
RUN npm install

#Copy source
COPY . .
RUN mkdir dist

#Compile typescript
RUN npm run build

#Run image
FROM node:alpine as PUBLISH

WORKDIR /app

COPY package.json .

#Copy compiled source form build image
COPY --from=BUILD app/dist .

#Install only production dependencies
RUN npm install --production

#Program entrypoint
ENTRYPOINT [ "node","index.js" ]

