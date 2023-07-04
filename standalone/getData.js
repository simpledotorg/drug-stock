function doGet() {
//   return HtmlService.createHtmlOutputFromFile("index.html");
  var scriptUrl =
      "https://script.google.com/macros/s/AKfycbzhZvb85DvQf37xZopLurDFjzwlIdWMxkcPJN9yFUu2E7lga3c-7s-bu3EYHGsgJ4n7/exec";
    // Replace with your web app URL

    // Make a GET request to the Google Apps Script web app
    var xhr = new XMLHttpRequest();
    xhr.open("GET", scriptUrl, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var response = xhr.responseText;
        console.log(response); // Do something with the response here
        return response;
      }
    };
    xhr.send();
}
