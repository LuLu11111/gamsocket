const port = process.env.PORT || 10008;
const server= require("http").Server();

var io = require("socket.io")(server);

var usernames = [];




io.on("connection", function(socket){
    console.log("someone is connected");
    
    
  socket.on("username", function(data){
        console.log("user is giving username:"+data);
      
      
      
        usernames.push(data);
        
        io.emit("usersjoined", usernames);
        
    })
    
    socket.on("joinroom", function(data){
        socket.join(data);
        
    });
    
   
    
    socket.on("disconnect", function(){
        console.log("user has disconnected");
    });
});

server.listen(port, (err)=>{
    if(err){
        console.log(err);
        return false;
    }
    
    console.log("port is running");
})