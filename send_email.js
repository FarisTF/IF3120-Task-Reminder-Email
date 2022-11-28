const dataPath = "./database.json"; // path to our JSON file
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

// util functions
const saveTodolistData = (data) => {
    const stringifyData = JSON.stringify(data);
    fs.writeFileSync(dataPath, stringifyData);
};
const getTodolistData = () => {
    const jsonData = fs.readFileSync(dataPath);
    return JSON.parse(jsonData);
};

const port = 4242;
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create - Tambah todolist
app.post("/todolist", (req, res) => {
    var existTodolist = getTodolistData();
    const newTodolistId = Math.floor(100000 + Math.random() * 900000);

    existTodolist[newTodolistId] = req.body;

    console.log(existTodolist);
    saveTodolistData(existTodolist);
    res.send({ success: true, msg: "Todolist added successfully" });
});

// Read - Ambil semua todolist
app.get("/todolist", (req, res) => {
    const todolist = getTodolistData();
    res.send(todolist);
});

app.listen(port, () => console.log(`Listening on port ${port}!`));

is_not_done = false;
kegiatan_not_done = "";
database = getTodolistData();

for (let x in database) {
    console.log(x + ": ");
    console.log(database[x]);
    console.log("\n");
}

for (let x in database) {
    if (database[x]["is_done"] == false) {
        is_not_done = true;
        kegiatan_not_done += database[x]["activity"];
        kegiatan_not_done += "\n";
        kegiatan_not_done += database[x]["course_name"];
        kegiatan_not_done += "\n";
        kegiatan_not_done += database[x]["deadline"];
        kegiatan_not_done += "\n\n";
    }
}

var nodemailer = require("nodemailer");

console.log(kegiatan_not_done);

console.log(Object.keys(database).length);

// var transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//         user: "kofifanhertza@gmail.com",
//         pass: "quawdcugjnnwyywq",
//     },
// });

// var mailOptions = {
//     from: "kofifanhertza@gmail.com",
//     to: "18220038@std.stei.itb.ac.id, 18220044@std.stei.itb.ac.id, 18220042@std.stei.itb.ac.id, 18220022@std.stei.itb.ac.id, 18220082@std.stei.itb.ac.id, 18220072@std.stei.itb.ac.id",
//     subject: "JANGAN LUPA MENGERJAKAN INI",
//     text: kegiatan_not_done,
// };

// if (is_not_done) {
//     transporter.sendMail(mailOptions, (err, info) => {
//         if (err) throw err;
//         console.log("Email sent: " + info.response);
//     });
// }
