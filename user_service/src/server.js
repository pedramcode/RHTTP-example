const { RHTTPServer } = require("rhttp_node");

const server = new RHTTPServer("127.0.0.1", 6379);

server.post("/user/register", (req, res)=>{
    if(!Object.keys(req.query).includes("username") || !Object.keys(req.query).includes.includes("password") || !Object.keys(req.query).includes.includes("email")){
        return res.status(200).contentType("application/json").send(JSON.stringify({
            error: "Pass all required parameters",
        }));
    }
    // Do things
    return res.status(200).contentType("application/json").send(JSON.stringify({
        msg: "Registration was successful",
    }));
});

server.listen((err)=>{
    if(err){
        console.error(err);
    }else{
        console.info("Server is ready");
    }
});