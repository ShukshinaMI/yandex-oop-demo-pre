const config = {
  url: 'http://localhost:3000/tasks',
  headers: {
    'Content-Type': 'application/json',
  },
};

const page = document.querySelector('.page');
const createTodoListForm = (...args) => new TodoListForm(...args);
const createTodoListItem = (...args) => new TodoListItem(...args);
const api = new Api(config);

api.getTasks()
  .then(data => {
    const todoList = new TodoList(data, createTodoListForm, createTodoListItem, api);
    todoList.render(page);
  })
  .catch(err => {
    console.log('Ошибка при загрузке карточек', err.message);
  });
