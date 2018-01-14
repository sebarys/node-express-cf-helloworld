# node-express-cf-helloworld
Helloworld app with manifest to deploy in CloudFoundry

# How to run application

Execute command:
```
npm start
```
Application will start on port 8080

# How to deploy application to CF

1. Set your CF API URL and login
```
cf api <API_ENDPOINT_URL>
cf login
```
2. Deploy app using selected manifest e.g. `manifest.yml`
```
cf push -f <MANIFEST_FILE_NAME>
```
