FROM node:23-alpine

#This is the frontend
WORKDIR /frontend

#
COPY package*.json ./

#install stuff
RUN npm i

ENV VITE_API_URL="http://backend:8000"

#Copy the rest low key
COPY . .

CMD ["npm","run","dev","--host"]

EXPOSE 5173