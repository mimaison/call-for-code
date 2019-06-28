# Call for Code Submission

## Submission name

Personalized Disaster Assistant

## Short description

Your handy, personalized digital assistant to surviving natural disasters.

## Long description

During a natural disaster, it is hard to think clearly and calmly about what you need to do. Under stress, it is easy to react to situations without stopping to think and plan about what actions are the best to take, to safeguard yourself and those around you or even worse to not react in a timely manner! To stand the best chance of a good outcome preparation is key. Before the disaster strikes, you are under pressure to make every preparation possible, as quickly as possible, without forgetting anything crucial. Both during and after the disaster the pressure is more intense and the need to follow key tasks is vital.

Our solution is a mobile application, called the Personalized Disaster Assistant (PDA), that helps people affected by natural disaster by recommending personalized actionable tasks before, during and after a disaster.

A user would register and provide information about their location, family, special needs, and dependents. This allows the application to better select and personalize the suggested actions that will be generated in the event of a disaster. This data is uploaded to the PDA server and stored securely in a highly available database.

The PDA can consume data and alerts from a variety of sources, (e.g. the IBM Weather Service), and feed them to IBM Streaming Analytics to generate events when extreme conditions are expected. Matching these events with precise geographical locations, the PDA can warn users that a disaster may be imminent.

At that point, an action list is also suggested, including things such as how much food and clean water to store, whether to try to evacuate or take shelter, medical supplies to gather, and other actions specific to the type of disaster and the user.

During the disaster, an updated action list is pushed out to users, with the emphasis changing from preparation to surviving, and helping others to survive. At this point, if communication is possible, the app could be used to provide updates to emergency services about anyone in critical condition, and receive advice for their care in return.

For as long as network connectivity is maintained, updated actions lists will be pushed regularly, during the disaster. The application is designed to support intermittent connectivity by caching data on the phone and only transferring minimal amounts of data. In the likely event of total loss of network connectivity, the PDA app will store an offline list of actions locally, at the expense of some the personalization and situational targeting, compared to the dynamically updated list.

In the immediate aftermath the action list changes again, with the emphasis changing to advice for long term health monitoring and recovery, including both physical and mental long-term effects. Advice at this point might also include when and how to reach out for help, and advice on giving and receiving support.

Apart from the practical value of the advice, there is a mental health benefit from having a clear list of priority actions to take, and being able to feel that you are able to take some action for the good of yourself and the people important to you, taking some control of your situation.

## Solution roadmap

See [roadmap.md](roadmap.md) for details about the current state of the project and its roadmap.

## Link to GitHub

https://github.ibm.com/mickael-maison/call-for-code

## Link to a three-minute demo video

https://ibm.ent.box.com/file/482578929629

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
