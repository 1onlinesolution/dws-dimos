# =======================================================================
# To build a docker image:
# docker build -t dws-dimos:1.0 .
# =======================================================================
# To create/run a container from an image (with image_id)
# docker run --rm -d -p 7002:7002 --name dws-dimos image_id
# =======================================================================
FROM node:alpine

LABEL version="1.0"

WORKDIR ./
COPY package.json ./
RUN npm install
COPY ./ ./

CMD ["npm", "start"]

