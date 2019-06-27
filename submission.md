# Call for Code Submission

## Submission name

Personalized Disaster Assistant

## Short description

Your handy, personalized digital assistant to surviving natural disasters.

## Long description

Our Call for Code submission, Personalized Disaster Assistant (PDA), is a mobile application that helps people affected by natural disaster by recommending personalized actionable tasks before, during and after a disaster. 

The action list not only provides expert advice personalized for the current disaster and user, useful in a crisis and stressful situation when it is harder to think calmly and make optimal decisions, but also provides a reassurance that the user is taking sensible actions, and not forgetting actions that they obviously ought to be taking. There is a mental health benefit from having a clear list of priority actions to take and being able to feel that you are able to take some action for the good of yourself and the people important to you. We believe the application can help reduce stress by acting like a real assistant accompanying users during difficult time.

To get the full benefits from Personalized Disaster Assistant, users should register and provide a few pieces of information about their geographical location, family, special needs and dependents. This allows the application to better select and personalise the suggested actions that will be generated in case a disaster was to happen. This data is uploaded to the PDA server and stored in a Cloudant database.

Alongside the PDA server, a weather data pipeline composed of the IBM Weather Service, IBM Event Streams and IBM Streaming Analytics ingests weather conditions and alerts and is able to generate events in case natural disasters are expected with the precise geographical locations.

From the moment a disaster is predicted, the PDA server is able to identify users likely to be affected, alert them, and generate recommended actions to prepare or evacuate.

For as long as network connectivity is maintained, updated actions lists will be pushed regularly, during the disaster, and then continuing in the immediate aftermath, changing as the likely needs and priorities of the users change. If possible, users can also update their status, which will personalise their advice further, such as highlighting the need for urgent medical care or supplies or suggesting attempting to reach a relief effort in the region.

The application is designed to support intermittent connectivity by caching data on the phone and only transferring minimal amounts of data. In the likely event of total loss of network connectivity, the PDA app will store an offline list of actions locally, at the expense of some the personalisation and situational targeting of the dynamically updated action list. 

When the disaster has ended, and the immediate damage has been addressed, the action suggestions can change to advice for long term health monitoring and recovery, including both physical and mental long-term effects, as well as advice on how to handle issues such as insurance claims, if applicable.

To conclude, we believe this solution could be implemented today and would only require limited investment from organisations and users.

## Solution roadmap

See [roadmap.md](roadmap.md) for details about the current state of the project and its roadmap.

## Link to GitHub

https://github.ibm.com/mickael-maison/call-for-code

## Link to a three-minute demo video


## List of IBM Cloud Services or IBM Systems used in the solution

- [Cloudant](https://cloud.ibm.com/catalog/services/cloudant)
- [Event Streams](https://cloud.ibm.com/catalog/services/event-streams)
- [Streaming Analytics](https://cloud.ibm.com/catalog/services/streaming-analytics)
- [Cloud Functions](https://cloud.ibm.com/openwhisk)
- [Weather Service](https://cloud.ibm.com/catalog/services/weather-company-data)
- [Kubernetes Service](https://cloud.ibm.com/kubernetes/catalog/cluster)

## Your IBM email address and the email addresses of up to four additional team members

- Mickael Maison: mickael.maison@uk.ibm.com
- Simon Clark: clarksi9@uk.ibm.com
- Katherine Farmer: kfarme3@uk.ibm.com
- Tina Selenge: gantigmaa.selenge1@uk.ibm.com
- Michael Burgess: michburg@uk.ibm.com
