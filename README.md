# TODO list API


## Introduction

TODO list API lets you search, fetch, create to-do-items and also group them together. One has to use RESTful calling style to access and edit TODO list API.

## Video Demo

<a href="https://www.youtube.com/watch?v=XBAy-1FJA4c" target="blank"><img src="https://image.ibb.co/mctJq6/demo.jpg"
alt="Start Demo" width="1000" height="600" border="10" /></a>

## API Reference and Resource Types

| Method       	 | HTTP Request  	| Description|
| ------------- |:-------------:	| -----:      |
| getGroups     | GET  /groups           | Returns all the user's task lists/groups.|
| getSpecificGroup| GET /group/:groupId | Returns the user's specified task list |
| deleteGroup   | DELETE /group/:groupId| Deletes the entire user's specified task list. |
| addNewGroup   | POST  /creategroup    | Creates task list for to-do-items e.g."Shopping List"|
|getGroupItems  | GET  /grouptasks/:groupId | Returns all the to-do-items from a specific list/group.|
| getAllTasks   | GET  /tasks           | Returns all the to-do-tasks from all lists/groups.|
| getSpecificTask| GET  /task/:taskId  | Returns specific task.|
| addNewTask   | POST  /create         | Creates a new to-do-task inside a specific list/group. Note: Provide group_id in the POST request's header. e.g id:group_id|
| deleteTask    | DELETE  /remove/:groupId/:taskId| Deletes the user's specified to-do-item.|


## Get Started

To build TODO list API, I used list of standard libraries to get the server up and running. So, the first one is NodeJS which will install Node and npm. It is the basis of my server and I used it along with Express to build a web server in API endpoints. So, Express is Node.js web application framework, and is used to build all the API endpoints. Also, I used mongoDB database to store TODO list data. Finally, I used Babel library to write ES6 Syntax since it transpiles the code for us.

To be able to run this project, you need the following
1. Fork/Clone
1. Install [Node.js](https://nodejs.org/en/)
1. Install [mongoDB](https://www.mongodb.com/)
1. Install dependencies - `npm install`
1. Run the development server - `npm start`  (Note: Make sure you also start your mongoDB database using mongod command.)
1. To be able to test TODO list API endpoints, you can use front-end tools such as [Api Tester](https://apitester.com/), [Postman](https://www.getpostman.com/), etc.

## File Hierarchy ##

I followed the MVC design pattern to build this project but the only letter we're not using is "V" since we don't need frontend for our API.
 
```
- TODO list API
   - src   				//MVC files
      -controllers
	-todoController.js  		//all the functions that handle API endpoints are located in this file
      -models
        -todoModel.js     		//database schemas are located in this file. 
      -routes
        -todoRoutes.js   		//contains all the API endpoints and handles HTTP requests
   - .babelrc   			//Babel configuration file
   - LICENSE      			//MIT license for this project
   - README.md     			//documentation
   - index.js      			//The entry point of our API
   - package.json   			//holds various metadata relevant to project
```

## Authors

* **Sher Sanginov**
