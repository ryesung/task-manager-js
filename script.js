const newTaskForm = document.querySelector('#form_newTask')

function receiveNewTask(event){
  event.preventDefault();
  console.log(event);
  const taskNameInput = document.querySelector('#taskName');
  const nameValue = taskNameInput.value;

  const descInput = document.querySelector('#taskDescription').value;
  const assignInput = document.querySelector('#assignTo').value;
  const dueDateInput = document.querySelector('#dueDate').value;
  const checkCompleted = document.querySelector('#checkCompleted').value;
  const checkNotCompleted = document.querySelector('#checkNotCompleted').value;
  console.log(assignInput + taskNameInput + checkCompleted + descInput)
}
newTaskForm.addEventListener('submit', receiveNewTask);