export default async function sendDataToSheets(data: any) {
  const url =
    "https://script.google.com/macros/s/AKfycbzhZvb85DvQf37xZopLurDFjzwlIdWMxkcPJN9yFUu2E7lga3c-7s-bu3EYHGsgJ4n7/exec";
  try {
    console.log('sending data');
    
    const response = await fetch(url, {
      method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const responseData = await response.json();
      console.log("Data sent successfully:", responseData);
    } else {
      console.error(
        "Error sending data:",
        response.status,
        response.statusText
      );
    }
  } catch (error) {
    console.error("Error sending data:", error);
  }
}
