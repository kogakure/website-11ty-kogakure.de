FROM --platform=linux/amd64 node:lts

RUN npm install -g http-server
RUN npm install -g pnpm

WORKDIR /app

COPY package*.json pnpm-*.yaml ./

RUN pnpm install

COPY . .

RUN pnpm run build

EXPOSE 8080
CMD [ "http-server", "dist" ]
