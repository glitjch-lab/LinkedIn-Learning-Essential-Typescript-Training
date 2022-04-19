
// Defines shape of what is expected to be returned
interface Todo {
  id: number,
  title: string,
  status: TodoStatus,
  completedOn?: Date
}

// Defines strict spelling of string for status property 
enum TodoStatus {
  done = "done",
  inProgress = "in-progress",
  Todo = "todo"
}

const todoItems = [
  { id: 1, title: "Learn HTML", status: "done", completedOn: new Date("2021-09-11") },
  { id: 2, title: "Learn TypeScript", status: "in-progress" },
  { id: 3, title: "Write the best app in the world", status: "todo" },
]

// Defines parameter a string and declare the function to return exactly as the interface outlines
function addTodoItem(todo: string): Todo {
  const id = getNextId(todoItems)

  // Applies stricter type on status via enum
  const newTodo = {
      id,
      title: todo,
      status: TodoStatus.Todo,
  }

  todoItems.push(newTodo)

  return newTodo
}

// Uses generics to capture type passed through within Array and nested objects.
function getNextId<T extends {id: number}>(items: T[]): number {
  return items.reduce((max, x) => x.id > max ? max : x.id, 0) + 1
}

const newTodo = addTodoItem("Buy lots of stuff with all the money we make from the app")

console.log(JSON.stringify(newTodo))