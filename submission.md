# Call for Code Submission

## Submission name

Personalized Disaster Assistant

## Short description

Your handy, personalised digital guide to surviving through any disaster.

## Long description

Our Call for Code submission, Personal Disaster Assistant (PDA), is a mobile application that helps people affected by natural disaster by recommending personalized actionable tasks before, during and after a disaster. 

The action list not only provides expert advice personalized for the current disaster and user, useful in a crisis and stressful situation when it is harder to think calmly and make optimal decisions, but also provides a reassurance that the user is taking sensible actions, and not forgetting actions that they obviously ought to be taking. There is a mental health benefit from having a clear list of priority actions to take and being able to feel that you are able to take some action for the good of yourself and the people important to you. We believe the application can help reduce stress by acting like a real assistant accompanying users during difficult time.

To get the full benefits from Personal Disaster Assistant, users should register and provide a few pieces of information about their geographical location, family, special needs and dependents. This allows the application to better select and personalise the suggested actions that will be generated in case a disaster was to happen. This data is uploaded to the PDA server and stored in a Cloudant database.

Alongside the PDA server, a weather data pipeline composed of the IBM Weather Service, IBM Event Streams and IBM Streaming Analytics ingests weather conditions and alerts and is able to generate events in case natural disasters are expected with the precise geographical locations.

From the moment a disaster is predicted, the PDA server is able to identify users likely to be affected, alert them, and generate recommended actions to prepare or evacuate.

For as long as network connectivity is maintained, updated actions lists will be pushed regularly, during the disaster, and then continuing in the immediate aftermath, changing as the likely needs and priorities of the users change. If possible, users can also update their status, which will personalise their advice further, such as highlighting the need for urgent medical care or supplies or suggesting attempting to reach a relief effort in the region.

The application is designed to support intermittent connectivity by caching data on the phone and only transferring minimal amounts of data. In the likely event of total loss of network connectivity, the PDA app will store an offline list of actions locally, at the expense of some the personalisation and situational targeting of the dynamically updated action list. 

When the disaster has ended, and the immediate damage has been addressed, the action suggestions can change to advice for long term health monitoring and recovery, including both physical and mental long-term effects, as well as advice on how to handle issues such as insurance claims, if applicable.

To conclude, we believe this solution could be implemented today and would only require limited investment from organisations and users.

## Solution roadmap

So far, we've only developed a proof of concept to validate how the solution would work and identify the area that needed extra thinking. This has allowed us to confirm such a solution is feasible. We've also been able to get feedback from a few subject matter experts and gain confidence this project would actually help people affected by a disaster both physically and mentally. 

The next steps would be to first gather expert recommendations for each type of disaster and include that in the action generation logic. Then the proof of concept web application would need to be turned into a mobile application with support for low battery usage and an offline mode. 

As the solution is designed using very scalable services (Event Streams, Cloudant) we expect the current architecture to be able to be deployed at scale and cover large populations.

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