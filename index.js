const http = require("http");
const express = require("express");
const socketIo = require("socket.io");
require("dotenv").config();
const connectToDb = require("./config.js/db");
const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const PORT = process.env.PORT || 800;

const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const isAuthanticated = require("./middlewares/isAuthanticated");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRoutes);
app.use("/product", productRoutes);
app.use("/order", isAuthanticated, orderRoutes);

io.on('connection', (socket) => {
    console.log("A user connected");

    socket.on("disconnect", () => {
        console.log("User disconnected");
    });
})

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});