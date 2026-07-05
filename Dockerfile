FROM node:22.19.0 as builder

WORKDIR /usr/src/app

COPY  ./package*.json ./
COPY  ./tsconfig*.json ./
COPY  ./yarn.lock ./
COPY ./index.html ./
COPY ./vite.config.ts ./
COPY ./nginx ./nginx

RUN npm install --force

COPY ./src ./src

RUN npm run build

FROM nginx:1.19.6
COPY --from=builder /usr/src/app/dist /var/www/html

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 85
