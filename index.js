const express = require("express");
const cors = require("cors");

const AdminRoutes = require("./routes/AdminRoutes");
const TeacherRoutes = require("./routes/TeacherRoutes");

const port = 5000;

const app = express();

app.use(express.json());

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

//routes
app.use("/admin", AdminRoutes);
app.use("/teacher", TeacherRoutes);

app.listen(port);
