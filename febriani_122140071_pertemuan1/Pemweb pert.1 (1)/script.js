document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const taskTime = document.getElementById('taskTime');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    // Variabel untuk menyimpan nomor tugas terakhir
    let taskCounter = 1;

    // Load tasks from localStorage
    loadTasks();

    // Add task event
    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        const taskDateTime = taskTime.value;
        if (taskText && taskDateTime) {
            addTask(taskText, taskDateTime);
            taskInput.value = '';
            taskTime.value = '';
        }
    });

    // Function to add task
    function addTask(taskText, taskDateTime) {
        const li = document.createElement('li');
        li.textContent = `${taskCounter}. ${taskText} (Due: ${new Date(taskDateTime).toLocaleString()})`;

        // Tandai tugas sebagai selesai
        li.addEventListener('click', () => {
            li.classList.toggle('completed');
            saveTasks();
            checkAllTasksCompleted();
        });

        // Delete task
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Hapus';
        deleteButton.addEventListener('click', (e) => {
            e.stopPropagation(); 
            if (confirm('Apakah Anda yakin ingin menghapus tugas ini?')) {
                li.classList.add('fade-out'); // Tambahkan kelas untuk animasi
                li.addEventListener('transitionend', () => {
                    li.remove();
                    saveTasks();
                    updateTaskCounter(); 
                });
            }
        });

        li.appendChild(deleteButton);
        taskList.appendChild(li);
        taskCounter++; // Tingkatkan nomor tugas
        saveTasks();
    }

    // Function to save tasks to localStorage
    function saveTasks() {
        const tasks = [];
        taskList.querySelectorAll('li').forEach(li => {
            const taskText = li.childNodes[0].textContent.split(' (Due: ')[0].split('. ')[1];
            const taskDateTime = li.childNodes[0].textContent.split(' (Due: ')[1].replace(')', '');
            tasks.push({
                text: taskText,
                dateTime: taskDateTime,
                completed: li.classList.contains('completed')
            });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Function to load tasks from localStorage
    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.textContent = `${index + 1}. ${task.text} (Due: ${new Date(task.dateTime).toLocaleString()})`;
            if (task.completed) {
                li.classList.add('completed'); // Tandai tugas sebagai selesai jika sudah disimpan
            }

            // Tandai tugas sebagai selesai
            li.addEventListener('click', () => {
                li.classList.toggle('completed');
                saveTasks();
                checkAllTasksCompleted(); 
            });

            // Delete task
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Hapus';
            deleteButton.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent triggering the click event on li
                if (confirm('Apakah Anda yakin ingin menghapus tugas ini?')) {
                    li.classList.add('fade-out'); // Tambahkan kelas untuk animasi
                    li.addEventListener('transitionend', () => {
                        li.remove();
                        saveTasks();
                        updateTaskCounter()
                    });
                }
            });

            li.appendChild(deleteButton);
            taskList.appendChild(li);
        });
    
    }
});