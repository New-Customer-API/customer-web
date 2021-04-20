
FROM node:12.16.1-alpine As builder

WORKDIR /customer-web

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build --prod

FROM nginx:1.15.8-alpine

COPY --from=builder /customer-web/dist/customer-web /usr/share/nginx/html

EXPOSE 80