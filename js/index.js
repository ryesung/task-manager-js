function validFormFieldInput(data) {
  const newTaskName = document.querySelector('#newTaskName');
  const taskName = newTaskName.value;
  const taskDescriptionInput = document.querySelector('#taskDescription');
  const description = taskDescriptionInput.value;
  const assignToInput = document.querySelector('#assignTo');
  const assignedTo= assignToInput.value;
  const dueDateInput = document.querySelector('#dueDate');
  const dueDate = dueDateInput.value;

  let formFilled = true;

  if (taskName === ''){
    const alert = document.querySelector('#taskAlert');
    alert.style.display = 'block';
    formFilled = false;

  }
  if (description === ''){
    const alert = document.querySelector('#descAlert');
    alert.style.display = 'block';
    formFilled = false;

  }
  if (assignedTo === ''){
    const alert = document.querySelector('#assignAlert');
    alert.style.display = 'block';
    formFilled = false;

  }
  if (dueDate === ''){
    const alert = document.querySelector('#dueAlert');
    alert.style.display = 'block';
    formFilled = false;

  }
  if(formFilled){
    const alerts = document.querySelectorAll('.alert');
    console.log(formFilled);
    console.log(typeof alerts);
    alerts.forEach(element => element.style.display = 'none');
  }
}


addEventListener('submit', validFormFieldInput);