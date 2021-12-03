FROM node:16-alpine as build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install
RUN npm install -g @angular/cli

COPY . .

RUN npm run build

FROM nginx

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/fibonacci /usr/share/nginx/html

EXPOSE 80