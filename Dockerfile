FROM node:18
WORKDIR /test
COPY package.json .
RUN npm i
RUN npx playwright install chromium  
RUN npx playwright install-deps
COPY . ./
RUN npm test
