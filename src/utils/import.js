export function importTicketJSON(ticket){
    document.getElementById('import').onclick = () => {
        const files = document.getElementById('selectFiles').files;
        if (files.length <= 0) {
          return false;
        }
      
        const fr = new FileReader();
      
        fr.onload = e => {
          const result = JSON.parse(e.target.result);
          const formatted = JSON.stringify(result, null, 2);
          console.log(formatted);
        }
        fr.readAsText(files.item(0));
      };
      console.log(ticket)
}