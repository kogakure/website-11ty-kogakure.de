# Stage 1: Build the application
FROM node:lts AS builder

RUN npm install -g pnpm

WORKDIR /app

COPY package*.json pnpm-*.yaml ./

RUN pnpm install

COPY . .

RUN pnpm run build

# Stage 2: Serve the application using Nginx
FROM nginx:stable-alpine

# Copy build artifacts from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
