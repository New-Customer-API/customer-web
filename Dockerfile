FROM node:12.18.4-alpine3.12
ADD . /customer-web
WORKDIR /customer-web
RUN npm install -g @angular/cli 
RUN npm install
EXPOSE 4200
CMD ["ng", "serve"]
