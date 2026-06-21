FROM node:20-alpine AS builder
WORKDIR /app

# install dependencies
COPY package*.json yarn.lock* ./
RUN npm ci

# build
COPY . .
RUN npm run build

# runtime image
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=8080

# copy runtime deps and build output
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

EXPOSE 8080

# start Next.js on the port provided by the environment
CMD ["sh", "-c", "npx next start -p $PORT"]
