export function getData() {
  fetch(
    "https://script.google.com/macros/s/AKfycbzhZvb85DvQf37xZopLurDFjzwlIdWMxkcPJN9yFUu2E7lga3c-7s-bu3EYHGsgJ4n7/exec"
  )
    .then((response) => response.text())
    .then((content) => {
      this.sheet = JSON.parse(content);
      // console.log(this.sheet.data['Facility name']);
      this.facilities = this.sheet.data["Facility name"];
      this.drugs = this.sheet.data.Drug;
      this.dbReply = true;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
