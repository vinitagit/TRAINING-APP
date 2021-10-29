var express = require("express");
var app = express(); //include the module .this give us the capability the read the body.

var bodyParser = require("body-parser");
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
let users = ["vineeta:test123","meenu:test123","pankaj:test123","rakesh:test123"];
let todos = ["cook breakfast", "finish coding", "do exercise"];
/*app.get("/todo", function (request, response) {
    response.json(todos);
});

app.delete("/todo/:index", function (request, response) {
    let newTodos = todos.filter((val, index) => {
        if (index == request.params.index) return false;
        return true;
    });
    todos = [...newTodos];
    response.json("todo deleted successfully");
});

app.post("/todo", function (request, response) {
    let todo = request.body.todo;
    console.log(todo);
    todos.push(todo);

    response.json("Todo inserted successfully");
});*/

app.post("/login", function (request, response) {
    let user1 = request.body.username;
    let passwd = request.body.password;
    if(!user1) {
        response.status(400).json("enter username");
  // stop further execution in this callback
        return;
    }
    if(!passwd) {
        response.status(400).json("enter password");
  // stop further execution in this callback
        return;
    }
    const val = users.includes(user1+':'+ passwd);
    if(val){
        response.status(200).json("user authenticated");
        return;
    } else {
        response.status(400).json("user does not exist");
        return;
    }
    
});
app.listen(4000);
