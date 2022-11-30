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
                    todoDiv.id = x;

                    const course = document.createElement("div");
                    course.classList.add("course");
                    course.textContent = data[x]["course_name"];

                    const activity = document.createElement("div");
                    activity.classList.add("activity");
                    activity.id = data[x]["user_id"];
                    activity.textContent = data[x]["activity"];

                    const deadline = document.createElement("div");
                    deadline.classList.add("deadline");
                    deadline.textContent = data[x]["deadline"];

                    const completeButton = document.createElement("button");
                    completeButton.classList.add("complete-btn");
                    completeButton.textContent = 'V';

                    // const breakline = document.createElement("br");
                    // breakline.textContent = " ";

                    todoDiv.appendChild(course);
                    todoDiv.appendChild(activity);
                    todoDiv.appendChild(deadline);
                    todoDiv.appendChild(completeButton);


                    mainContainer.appendChild(todoDiv);

                    const completeButtonHehe = document.querySelector(" .complete-btn");
                    console.log(completeButtonHehe);
                    completeButtonHehe.addEventListener("click", updateTodo);
                }
        }
    }
}


function updateTodo(e) {
    const item = e.target;
    const todoContainer = item.parentElement;
    const id =  todoContainer.id;
    console.log(id);

    var activity = document.querySelector(".activity").textContent;
    var userid = document.querySelector(".activity").id;
    var course = document.querySelector(".course").textContent;
    var deadline = document.querySelector(".deadline").textContent;
    var data = {
        "user_id": userid,
        "activity": activity,
        "course_name": course,
        "deadline": deadline,
        "is_done": true,
    }

    todoContainer.remove();

    console.log(data);



    fetch('http://localhost:4242/todolist/' +id, {
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

