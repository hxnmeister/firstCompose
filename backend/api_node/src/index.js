const httpSrv = require("http");

const serverInstance = httpSrv.createServer
(
    function (request, response)
    {
        response.send("Hello NodeJsApi!");
    }
);

serverInstance.listen(3000, function (error)
{
    console.log("Server started!" + "http://localhost:3000");
});

