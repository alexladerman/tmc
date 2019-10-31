# The Moving Company 

Assignment: Order placement system

### Prerequisites
Visual Studio, Eclipse, IntelliJ or similar IDE
SQL Server, MySql, or any other database suited for the task
Cloud plattform like Microsoft Azure, Amazon AWS, Google Cloud.

Maximum time allowed 
No limit

You are free to structure the project as you like. During the technical interview we will be looking at your decision making (architecture, design, etc), technical implementation, and how you go about to solve a given problem.

## Description of assignment

TMC (The moving company) offers transportation and relocation services to its customers. The company is Norwegian but expanding and starting out in new markets in Europe.
Among the relocation services they offer we find these services: Packing, Moving, Cleaning.
TMC needs a solution that allows placement of customer orders from many channels, like a web page, mobile app, third party partner page etc. TMC has its own sales representatives but wants to also allow partnering real estate brokers to place relocation orders on behalf of their customers. 
TMC needs to have the ability to rapidly release new features that may involve UI, business logic and data model changes by reducing dependency across features. They also require the system to have reduced overall downtime caused by system updates. Rollouts must be possible without scheduled downtime. Rollbacks must be possible in the event of failure. As TMC are expanding, scalability and reliability are key in their new solution. 
Your solution should be extendable by request from the customer (The moving company) and should be ready for production usage. 

### Details:
The actor / user needs to be able to place / find / edit / delete orders on behalf of customers.
When placing an order, the following information is needed:

- Name
- Phone number
- Email
- Address he’s moving from
- Address he’s moving to
- What service they are ordering
- Date for when the service is to be carried out
- A text field where the where one can add a note to the order, for example: “the customer won’t be available till 12 pm)

## Exercise 1 – High level architecture
Create a high-level architecture diagram to show your vision of a system / solution that solves the customer’s needs.
What core services would you propose as part of the new proposed architecture?
Few things to think about: State handling? Scalability and Resiliency? Access (Authentication and Authorization mechanisms? Identify)? Potential points of failure? 
 If you are familiar with cloud, please suggest a cloud born solution: (on any cloud platform; Microsoft Azure, Amazon AWS, Google Cloud, Openshift). A microservice or serverless architecture approach is preferred. Use any cloud components you deem fit for the task / customer requirements.
If you’re not familiar with cloud, just create a highlevel architecture

## Exercise 2 – Front end
Implement part of a front-end (mobile) application you specified in Exercise 1. 
Requirements: Vue, React or Angular preferred (Pure HTML / CSS / JS will be accepted. You can add any other js library if needed). Use GULP/Webpack to run and pack the web application.
Alternatively, you can create a mobile front-end solution. (Xamarin or React Native are preferred). 

## Exercise 3 – Back end
Implement the backend architecture you specified in Exercise 1.  If time is an issue, scope this down to the most important part of the backend components and implement a simple Proof of Concept. 
Requirement: Any programming language and framework.





