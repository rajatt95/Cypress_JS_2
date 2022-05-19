# 16.14.0 -> node --version
FROM cypress/base:16.14.0
RUN mkdir /app
WORKDIR /app
# . -> Means everything
COPY . /app
RUN npm install

# To verify everything is setup as expected
# RUN $(npm bin)/cypress verify
RUN ["npm", "run", "cy:run_DOCKER_Headed"]
