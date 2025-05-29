# Build stage
FROM node:20-alpine AS builder
WORKDIR /app

# Accept build args for Vite env vars
ARG VITE_SUPABASE_URL
ARG VITE_SUPABASE_KEY

# Write .env file with secrets
RUN echo "VITE_SUPABASE_URL=$VITE_SUPABASE_URL" > .env && \
    echo "VITE_SUPABASE_KEY=$VITE_SUPABASE_KEY" >> .env

COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM node:20-alpine AS runner
WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/dist ./dist
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
