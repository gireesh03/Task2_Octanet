function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('taskList');
        const li = document.createElement('li');
        const taskSpan = document.createElement('span');
        taskSpan.className = 'task';
        taskSpan.textContent = taskText;
        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-button';
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function () {
            taskList.removeChild(li);
        };

        li.appendChild(taskSpan);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
        taskInput.value = '';
    }
}
