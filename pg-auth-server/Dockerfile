FROM maven:3.8-openjdk-18 AS build
COPY . /app
WORKDIR /app
RUN mvn clean install -DskipTests

FROM openjdk:18
COPY --from=build app/target/auth-server-0.0.1-SNAPSHOT.jar auth.jar
CMD ["java","-jar","/auth.jar"]