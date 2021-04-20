FROM node:alpine AS my-app-build
WORKDIR /app
COPY . .
RUN npm ci && npm run build

# stage 2

FROM nginx:alpine
COPY --from=customer-web /app/dist/customer-web /usr/share/nginx/html
EXPOSE 80