# syntax=docker/dockerfile:1

# ---------- Builder ----------
FROM node:20-alpine AS builder
WORKDIR /app

# This project's real lockfile is pnpm-lock.yaml, so build with pnpm.
RUN npm install -g pnpm@10.29.1

# Install dependencies from the committed lockfile (reproducible build).
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# NEXT_PUBLIC_* values are inlined into the client bundle at BUILD time,
# so they must be available before `next build`. Pass via --build-arg.
ARG NEXT_PUBLIC_CALENDLY_URL
ENV NEXT_PUBLIC_CALENDLY_URL=$NEXT_PUBLIC_CALENDLY_URL

# Build -> produces .next/standalone (because next.config.mjs sets output: 'standalone').
COPY . .
RUN pnpm run build

# ---------- Runner ----------
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
# Cloud Run routes traffic to $PORT (8080 by default); bind on all interfaces.
ENV PORT=8080
ENV HOSTNAME=0.0.0.0

# Run as an unprivileged user.
RUN addgroup -S nodejs && adduser -S nextjs -G nodejs

# Copy only what the standalone server needs: the traced server bundle,
# static assets, and the public folder (standalone does not include these two).
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

USER nextjs
EXPOSE 8080

# The Next.js standalone server respects PORT and HOSTNAME.
CMD ["node", "server.js"]
