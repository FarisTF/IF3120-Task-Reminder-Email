const completeButton = document.querySelector(".complete-btn");

var generateBtn = document.getElementById("fetchbutton");
generateBtn.addEventListener("click", fetchdata);

function fetchdata() {
    fetch("http://localhost:4242/todolist")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            appendData(data);
        })
        .catch(function (err) {
            console.log("error: " + err);
        });


    function appendData(data) {
        var mainContainer = document.getElementById("data");
        if (mainContainer.innerHTML = "");
            for (let x in data) {
                if (data[x].is_done == false) {
                    const todoDiv = document.createElement("div");
                    todoDiv.classList.add("todo");

                    const course = document.createElement("div");
                    course.textContent = data[x]["course_name"];

                    const activity = document.createElement("div");
                    activity.textContent = data[x]["activity"];

                    const deadline = document.createElement("div");
                    deadline.textContent = data[x]["deadline"];

                    const completeButton = document.createElement("button");
                    completeButton.textContent = 'V';

                    // const breakline = document.createElement("br");
                    // breakline.textContent = " ";

                    todoDiv.appendChild(course);
                    todoDiv.appendChild(activity);
                    todoDiv.appendChild(deadline);
                    todoDiv.appendChild(completeButton);


                    mainContainer.appendChild(todoDiv);
                }
        }
    }
}


function updateTodo() {
    var todo = document.getElementById("todo").value;
    var course = document.getElementById("course").value;
    var deadline = document.getElementById("deadline").value;
    var data = {
        "activity": todo,
        "course_name": course,
        "deadline": deadline,
        "is_done": true,
    }
    fetch('http://localhost:4242/todolist/:id', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}