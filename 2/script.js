        var addBtn = document.getElementById("addBtn")
        var taskInput = document.getElementById("taskInput")
        var taskList = document.getElementById("taskList")
        onload = function() {
            var saved = localStorage.getItem("task")
            if (saved) {
                var li = document.createElement("li")
                li.textContent = saved
                var delBtn = document.createElement("button")
                delBtn.textContent = "Delete"
                delBtn.onclick = function() {
                    li.remove()
                    localStorage.removeItem("task")
                }
                li.append(delBtn)
                taskList.append(li)
            }
        }
        addBtn.addEventListener("click", function() {
            var taskText = taskInput.value.trim()
            if (taskText === "") return 0
            localStorage.setItem("task", taskText)
            var li = document.createElement("li")
            li.textContent = taskText
            var delBtn = document.createElement("button")
            delBtn.textContent = "Delete"
            delBtn.className = "delete"
            delBtn.onclick = function() { 
                li.remove()
                localStorage.removeItem("task")
            }
            li.append(delBtn)
            taskList.append(li)
            taskInput.value = ""
        })