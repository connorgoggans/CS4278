FROM openjdk:8
MAINTAINER Connor Goggans <connor.goggans@vanderbilt.edu>
WORKDIR /app/midterm
ADD ./build/libs/ .
EXPOSE 8080
CMD java -jar ./app.war --spring.profiles.active=dev,swagger
