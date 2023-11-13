FROM node:18.16.0-alpine as build-stage

WORKDIR /app

# not good practice
COPY package.json /app/

RUN npm install

COPY ./ /app/

RUN npm run build

FROM nginx:1.21.0-alpine
ENV NODE_ENV production
# Copy built assets from builder

COPY --from=build-stage /app/dist/ /usr/share/nginx/html

COPY /nginx.conf /etc/nginx/conf.d/default.conf

#COPY --from=build-stage /app/dist /usr/share/nginx/html
## Add your nginx.conf
#COPY nginx.conf /etc/nginx/conf.d/default.conf
## Expose port
#EXPOSE 80
## Start nginx
#CMD ["nginx", "-g", "daemon off;"]
