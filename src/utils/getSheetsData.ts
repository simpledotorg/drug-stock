export default async function getData(): Promise<{
  facilities: string[];
  drugs: string[];
}> {
  const response = await fetch(
    "https://script.google.com/macros/s/AKfycbzhZvb85DvQf37xZopLurDFjzwlIdWMxkcPJN9yFUu2E7lga3c-7s-bu3EYHGsgJ4n7/exec"
  );
  const rawData = await response.json();
  // console.log(rawData.data);
  
  const { 'Facility name': facilities, 'Drug': drugs } = rawData.data;
  return {
    facilities,
    drugs,
  };
  // const rawData = JSON.parse(response)
  // .then((response) => response.text())
  // .then((content) => {
  //   const rawSheetData = JSON.parse(content);
  //   // console.log(this.sheet.data['Facility name']);
  // })
  // .catch((error) => {
  //   console.error("Error:", error);
  // });
  // return data;
}
