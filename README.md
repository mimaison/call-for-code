# PDA - Personalized Disaster Assistant

## Design

![Design](design/design.png)

1. User starts the PDA application and registers
2. User information are stored
3. PDA starts a Kafka Connect Weather Connector instance
4. The connector will regularly fetch weather forecast for the user location
5. The connector pushes the weather data to Event Streams
6. IBM Streams consumes the weather data, identifies natural disasters and pushes an event back to Event Streams
7. PDA consumes disaster events
8. PDA generates personalized todos

## Prerequisites

### Cloudant

- Provision a [Cloudant instance](https://cloud.ibm.com/catalog/services/cloudant)
- Create a database called `users`
- Create a Service Credential

### Event Streams

- Provision an [Event Streams instance](https://cloud.ibm.com/catalog/services/event-streams)
- Create a topic called `disasters`
- Create a Service Credential

## How to run the application

### Move to the pda folder

```shell
cd pda
```

### Install dependencies

```shell
npm install
```

### Configuration

Update `config.json` with your credentials

### Start the application 
```shell
npm start
```

Point browser at http://localhost:3000