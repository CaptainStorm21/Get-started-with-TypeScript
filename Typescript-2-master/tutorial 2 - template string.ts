//template string 

var container = document.getElementById('container');

var todo = {
id: 123,
name: "pick up a book from the store",
completed: true
};


container.innerHTML=`
<div todo = `${todo.id}` class="list-group-item">
<i class = "${todo.completed ? "" :  "hidden"}"
<span class = "name">${todo.name}</span>
</div>
`
