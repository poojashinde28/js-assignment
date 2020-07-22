console.log('Fetch API');

fetch('https://jsonplaceholder.typicode.com/todos/25')
.then(response=>response.json())
.then(data=>console.log(data))
