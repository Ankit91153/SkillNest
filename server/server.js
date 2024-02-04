const express=require("express");
require("dotenv").config()
const app =express();
const cors = require("cors");
const errorMiddleware = require("./middlewares/error-middleware");
const PORT=5000
const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
  };
  
  app.use(cors(corsOptions));
  
app.use(express.json())
app.use(errorMiddleware);
const authRouter=require("./routers/auth-router")
const contactRouter=require("./routers/contact-router")
const serviceRouter=require("./routers/service-router")
const adminRouter=require("./routers/admin-router")
const connect=require("./utils/db")
app.use("/api/auth",authRouter);
app.use("/api/form",contactRouter);
app.use("/api/service",serviceRouter);

// admin route
app.use("/api/admin",adminRouter)
connect().then(()=>{
    app.listen(PORT,()=>{
        console.log(`app is running at port number ${PORT}`);
    })
})