import mongoose from 'mongoose';
import { ItemSchema, ItemGroupSchema } from '../models/todoModel';

const Todo = mongoose.model('Todo', ItemSchema);
const Group = mongoose.model('Group', ItemGroupSchema)
var async = require('async');



/* POST body{title: "input"}   /addgroup*/
export const addNewGroup =(req, res)=> {
  let newGroup = new Group(req.body);

  newGroup.save((err, group)=>{
    if(err){
      res.send(err);
    }
    res.json(group);
  });

};
/* get all groups; GET /getallgroups */
export const getGroups = (req, res) =>{
  console.log("inside get groups")
  Group.find({}, (err, list) => {
      if (err) {
          res.send(err);
      }
      res.json(list);
  });
};

/* get one specific group GET: /getgroup/:group_id*/
export const getSpecificGroup =(req, res) =>{
   Group.findById(req.params.groupId, (err, item) => {
      if (err) {
          res.send(err);
      }
      res.json(item);
});}


var deleteIds = [];
/* Delete group DELETE /deletegroup/:groupId */
export const deleteGroup =(req, res) =>{
  deleteIds = [];
  Group.findById(req.params.groupId, (err, group) => {
      if (err) {
          res.send(err);
      }else{
          group.todoitems.forEach(function(id) {
              console.log(id);
              deleteIds.push(id);
          });
     async.map(deleteIds,deleteTodos,function(err,data){
              if(err){
                  res.send(err)
              }else{
                Group.remove({ _id: req.params.groupId }, (err, item) => {
                  if (err) {
                      res.send(err);
                  }
                  console.log(item);
                  res.json({ message: 'The group and its to-do-items were deleted.'});
                  });

              }
          })
      }
    });
  }

/* callback function */
function deleteTodos(id,cb){
    Todo.remove({_id: id}, (err, task)=>{
     if(err){
        res.send(err);
    }else{
        cb();
    }
   });

}



/* get all tasks for specific group GET /getgrouptaks/:groupId */

var todoarray =[];
var todoIds = [];

export const getGroupItems = (req, res) => {
    todoarray = [];
    todoIds = []
    Group.findById(req.params.groupId, (err, group) => {
        if (err) {
            res.send(err);
        }else{
            group.todoitems.forEach(function(id) {
                console.log(id);
                todoIds.push(id);
            });
            async.map(todoIds,getTodos,function(err,data){
                if(err){
                    res.send(err)
                }else{
                    res.send(todoarray)
                }
            })
        }
  
    });

}
/* callback function */
function getTodos(id,cb){
    Todo.findById(id, (err, task)=>{
     if(err){
        res.send(err);
    }else{
        todoarray.push(task);
        cb();
    }
   });

}

/* Create task POST /createtask  body:{title, group_id} */
export const addNewTask = (req, res) => {
    console.log(req.body);
    let newTodo = new Todo(req.body);
    newTodo.save((err, todo) => {
        if (err) {
            res.send(err);
        }
        console.log(todo);
        Group.findById(req.headers.id, (err, item) => {
            if (err) {
                res.send(err);
            }

            item.todoitems.push(newTodo);
            item.save();
            });
        res.json(todo);
});
};

/* GET  /gettask/:taskId */
export const getSpecificTask = (req, res) => {
    Todo.findById(req.params.taskId, (err, task)=>{
      if(err){
        res.send(err);
      }
      res.json(task);
    });
  }

/*GET all tasks   /gettasks */
export const getalltask = (req, res )=>{
  Todo.find({}, (err, item)=>{
    if (err){
      res.send(err);
    }
    res.json(item);

  })

}

var removeId = [];
/* DELETE task /deletetask/:groupId/:taskId  */
export const deleteTask = (req, res) => {
    removeId=[];
    Group.findById(req.params.groupId, (err, item) => {
        if (err) {
            res.send(err);
        }
        else{
                  removeId.push(req.params.taskId);
                  item.todoitems.forEach(function(id) {
                  if(id==req.params.taskId){
                            var index = item.todoitems.indexOf(id);
                            if(index >-1){

                              item.todoitems.splice(index, 1);
                              item.save()
                            };}
                          });
                async.map(removeId, removeTask, function(err, data){
                  if(err){res.send(err)}
                  else{res.send("Success, the item was deleted")}
                })

            };
    }); }

/* callback function */
  function removeTask(id,cb){
      Todo.remove({_id: id}, (err, task)=>{
       if(err){
          res.send(err);
      }else{
          cb();
      }
     });

    }
