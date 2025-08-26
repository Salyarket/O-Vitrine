FROM node:22-alpine

WORKDIR /app

# Installer les dépendances
COPY package*.json ./
RUN npm install

# Copier le code
COPY ./ ./

# Build TS + Prisma Client
RUN npm run build
RUN npm run db:generate

# Lancer l’app avec Prisma + Node
CMD ["npm", "run", "docker:start"]
