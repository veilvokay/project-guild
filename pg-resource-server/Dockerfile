FROM maven:3.8-openjdk-18 AS build
COPY . /app
WORKDIR /app
RUN mvn clean install -DskipTests

FROM openjdk:18
COPY --from=build app/target/resource-server-0.0.1-SNAPSHOT.jar resource-server.jar
CMD ["java","-jar","/resource-server.jar"]