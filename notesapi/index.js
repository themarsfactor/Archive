const express = require("express");

const cors = require("cors");


const app = express(); //create the app

app.use(cors());

app.use(express.json());

//Handling of Request
app.get("/api/init", (request, response) =>{


    response.send({
        message: "You have initiated the API",
        data: null,
        code: "success",
        status: 200
    });

});


app.post("/api/notes/create-note", function(request, response){

    //console.log(request);

        const title = request.body.title;
        const note = request.body.note;

        response.send({
            message: "Note created successfully",
            data: {
                data: {
                    title: title,
                    note: note
                }
            },
            code: 'success',
            status: 201
        })


})


app.get("/api/user/get-notes", function(request, response){


    response.send("Get user's created notes");


})



//listen on a particular port
const PORT = 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))


