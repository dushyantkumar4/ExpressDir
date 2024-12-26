// const express=require("express");
// const app=express();

// // console.dir(app);
// let port =8080;
// app.listen(port,()=>{
//     console.log(`app is listening on port ${port}`);
// });

// app.get("/",(req,res)=>{
//     res.send("you have visited on root path");
// });

// app.get("/search",(req,res)=>{
//     res.send("you have visited on search path");
// });

// app.get("/help",(req,res)=>{
//     res.send("you have visited on help path");
// });
// app.get("*",(req,res)=>{
//     res.send("this path doesn't exist");
// });
// app.post("/",(req,res)=>{
//     res.send("you sent a post request to root");
// });



// app.use((req,res)=>{
//     // console.log(req);
//     console.log("request received ");
//     // res.send('this is a basic responce');
//     // res.send({
//     //     name:"apple",
//     //     color:"red"
//     // })
//     // res.send("<h1>hello</h1>");
//     let code="<h1>standerd code</h1> <ul><li>apple</li><li>litchi</li></ul>";
//     res.send(code);
// });
// app.use((req,res)=>{
//     console.log("returning a request");
//     res.send("this is practice");
// });
// app.get("/",(req,res)=>{
//     res.send(`you are at home`);
// });
// app.get("/search",(req,res)=>{
//     res.send(`you are serching somthing`);
// });
// app.get("/hello",(req,res)=>{
//     res.send(`you are greeting`);
// });
// app.get("*",(req,res)=>{
//     res.send(`this page doesn't exist`);
// });
// app.post("/",(req,res)=>{
//     res.send(`you are on post `);
// });

// const express =require("express");
// const app=express();
// let port=8080;
// app.listen(port,()=>{
//     console.log(`app is listening on port ${port}`);
// });

// app.get("/",(req,res)=>{
//     res.send(`you are at home`);
// });
// app.get("/:username/:id",(req,res)=>{
//     let {username,id}=req.params;
//     let code=`<h1>welcome to the page of @${username}</h1>`
//     res.send(code);
// });
// app.get("/search",(req,res)=>{
//     let {q}=req.query;
//     if(!q){
//         res.send(`<h1>nothing searched</h1>`);
//     }
//     let code=`<h1>search results for: ${q}</h1>`;
//     res.send(code);
// })
// const express=require("express");
// const app=express();
// let port=8080;
// app.listen(port,()=>{
//     console.log(`app is listening on port:${port}`);
// });

// app.get("/",(req,res)=>{
//     res.send("hello you are at root ");
// });
// app.get("*",(req,res)=>{
//     res.send("page not found");
// });
// app.post("/",(req,res)=>{
//     res.send("you are trying to reach post root");
// });
const express=require("express");
const app=express();
let port=8080;

app.get("/",(req,res)=>{
    res.send("hello world!");
});

app.listen(port,()=>{
    console.log(`port is listening on ${port}`);
});


// app.get("/:username",(req,res)=>{
//     let {username}=req.params;
//     let code =`<h1> welcome to the page of@${username} </h1>`;
//     res.send(code);
// })
// app.get("/search",(req,res)=>{
//     let {q}=req.query;
//     let code =`<h1>search result for the ${q}</h1>`;
//     res.send(code);
// })
