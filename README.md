# TODO list API

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

- Naming is done according to the work the api is doing
- Not returning any unwanted things in the response, this is saving the caller's network
- Error handling should be done precisely
