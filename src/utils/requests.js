import axios from "axios";
const LOCALHOST = "http://localhost:8000/";

export async function getUser(){
    try{
        const response = await axios.get(LOCALHOST+"/get.UserIDS");
        return response;
    }catch{
        setTimeout(()=>{
            alert("Couldn't get users");
        }, 10000);
    }
}

export async function createNewTicket(ticket){
    const headers = {
        'Content-Type': 'application/json'
    }
    let json_ticket = {
        "author_name":{
            "ticket_id":"#"+ticket.ticket_id,
            "priority":ticket.severity
        },
        "ticket_link":ticket.ticket_link,
        "media": ticket.media,
        "fields":{
            "title":ticket.title,
            "goalkeeper":ticket.goalkeeper,
            "description":ticket.description,
            "how_to_reproduce":ticket.steps_to_rep,
            "debug_info":ticket.debug_info
        }
    }

    const response = await axios.post(LOCALHOST+"post.NewTicket", json_ticket, {headers: headers});
    return response;
}


export async function uploadMediaData(media){
    const response = await axios.post(LOCALHOST, {"media": media});
    return response;
}   