# Build stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage - lightweight static server
FROM node:20-alpine
RUN npm install -g serve
COPY --from=builder /app/dist /app
EXPOSE 8080
CMD ["serve", "-s", "/app", "-l", "8080"]
