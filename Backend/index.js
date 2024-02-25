require("dotenv").config();
const { URLMONGODB, SESSION_SECRET } = process.env;
const express = require("express");
const { default: mongoose } = require("mongoose");
const MongoStore = require("connect-mongo");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./src/routes/index");
const session = require('express-session')
const chatSocket = require("./src/controllers/chatSocket");
const {Server} = require('socket.io'); //Creacion de un server con socket io
const {createServer} = require('node:http') //Crear un server http de Node 
const PORT = 3001

const app = express();
const server = createServer(app)
const io = new Server(server, {
  cors: {
    origin: 'https://wedevelop.vercel.app/'
  }
})

io.on('connection', (socket) => {
  console.log('a user has connected!!')

  socket.on('message', (data) => {
    console.log(data)
    socket.broadcast.emit('messageBroadcast', data)
  })
})

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
   res.header('Access-Control-Allow-Headers', 'Content-Type'); 
   res.header('Access-Control-Allow-Credentials', true); // Habilitar credenciales
   next();
});

app.use(session({
    store: MongoStore.create({
        mongoUrl: URLMONGODB,
        ttl: 120
    }),
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    rolling: false
}))

app.get('/chat', chatSocket)
app.use(router);


server.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:3001`);
})

//Mongo DB
const connectionMongoose = async () => {
  await mongoose.connect(URLMONGODB)
    .catch((err) => console.log(err));
  console.log(`Database connected`)
}

connectionMongoose()