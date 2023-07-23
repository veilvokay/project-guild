# Project Guild Resource Server

Run `mvn spring-boot:run` to start it up, needs a Maven and Java 17+ installation.

Currently, has 2 dummy endpoints:

`/parties` protected my a jwt which can be acquired after logging in through the Auth Server.

`/hello` unprotected "Hello World" endpoint.