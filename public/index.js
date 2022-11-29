fetch('../database.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });


function appendData(data) {
    var mainContainer = document.getElementById("data");
    for (var i = 0; i < data.length; i++) {
        var todo = document.createElement("div");
        todo.innerHTML = data.result[i].name;
        todo.innerHTML = data.result[i].course_name;
        todo.innerHTML = data.result[i].deadline;
        mainContainer.appendChild(div);
    }
}