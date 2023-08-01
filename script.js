// Get HTML elements
const taskInput = document.getElementById('task-input');
const taskStatus = document.getElementById('task-status');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

// Function to create a new task
function createTaskElement(task, status) {
  const li = document.createElement('li');
  
  const taskText = document.createElement('span');
  taskText.textContent = task;
  
  const statusText = document.createElement('span');
  statusText.textContent = status;
  
  const resultText = document.createElement('span');
  resultText.classList.add('result');
  
  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('delete-btn');
  deleteBtn.textContent = 'Delete';

  li.appendChild(taskText);
  li.appendChild(document.createTextNode(': '));
  li.appendChild(statusText);
  li.appendChild(document.createTextNode(' | Result: '));
  li.appendChild(resultText);
  li.appendChild(deleteBtn);

  return li;
}

// Add task when "Add Argument" button is clicked
addBtn.addEventListener('click', function() {
  const task = taskInput.value.trim();
  const status = taskStatus.value;

  if (task !== '' && status !== '') {
    const li = createTaskElement(task, status);
    taskList.appendChild(li);
    taskInput.value = '';
    taskStatus.value = '';
    setResult(li);
  }
});

// Delete task when delete button is clicked
taskList.addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-btn')) {
    const listItem = event.target.parentElement;
    listItem.remove();
  }
});

// Function to set the result of the argument
function setResult(listItem) {
  const statusText = listItem.querySelector('span:nth-child(3)').textContent;
  const resultText = listItem.querySelector('.result');
  
  if (statusText === 'true') {
    resultText.textContent = 'The argument is true.';
  } else if (statusText === 'false') {
    resultText.textContent = 'The argument is false.';
  } else {
    resultText.textContent = '';
  }
}
