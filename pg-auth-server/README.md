# Project Guild Authorization Server

For this server to work you need to register an application on the discord developer portal: https://discord.com/developers/applications and go to OAuth 2

Currently .env file is only supported with IDE plugin. Better to create own `application.yml` or just replace `${DISCORD_CLIENT_ID}` and `${DISCORD_CLIENT_SECRET}` with the CLIENT ID and CLIENT SECRET provided by discord. You also need to add `http://127.0.0.1:9000/login/oauth2/code/discord` as a redirect URI on the discord OAuth page.

After that you can start the server by running

`mvn spring-boot:run` for this to work you need a proper mvn and java 17+ installation. Dockerization is WIP.

When the server is running and everything was set up correclty you can trigger the auth flow with the following link:

http://127.0.0.1:9000/oauth2/authorize?response_type=code&client_id=oidc-client&redirect_uri=http://127.0.0.1:8080/login/oauth2/code/oidc-client&scope=openid%20profile