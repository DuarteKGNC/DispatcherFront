import axios from "axios";
export async function importTicketJSON(ticket){

  const formData = new FormData();
  formData.append('file', ticket);

  try {
    const response = await axios.post("http://localhost:8000/post.ImportTicket", formData, {headers: {'Content-Type': 'multipart/form-data'}});
    if (response.status === 200) {
      alert('File successfully uploaded!');
      return response.data;
    } else {
      alert('Error uploading file');
    }

  }catch(error){
    alert("Error uplading the file");
  }
}
    