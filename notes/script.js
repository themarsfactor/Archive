// document.addEventListener("DOMContentLoaded", async function(){

//     result = await axios("http://localhost:4000/api/init")

//     console.log(result);

// })




document.querySelector("#create-note-btn").addEventListener("click", async function(){


    const form = document.querySelector("#create-note-form");

    const title = form.title.value.trim().length > 0 ? form.title.value : null;

    const note = form.note.value.trim().length > 0 ? form.note.value : null;


    if(title == null || note == null){}
    else{

        const note_object = {
            title: form.title.value,
            note: form.note.value
        }

        const result = await axios.post(`http://localhost:5000/api/notes/create-note`, note_object);

        console.log(result);
       


    }


    

   



})