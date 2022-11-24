var nodemailer = require("nodemailer");
var database = require("./database.json");

console.log(database["data"].length);

is_not_done = false;
kegiatan_not_done = "";

for (var i = 0; i < database["data"].length; i++) {
    if (database["data"][i]["is_done"] == false) {
        is_not_done = true;
        kegiatan_not_done += database["data"][i]["activity"];
        kegiatan_not_done += "\n";
        kegiatan_not_done += database["data"][i]["course_name"];
        kegiatan_not_done += "\n";
        kegiatan_not_done += database["data"][i]["deadline"];
        kegiatan_not_done += "\n\n";
    }
}

console.log(kegiatan_not_done);

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

const express = require("express");
const port = 4242;
const app = express();

app.get("/todolist", async function (req, res, next) {
    res.json(database);
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
