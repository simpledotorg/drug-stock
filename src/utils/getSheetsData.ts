export default async function getData(): Promise<{
  facilities: string[];
  drugs: string[];
  rawFormFields: string[];
}> {
  const response = await fetch(
    "https://script.google.com/macros/s/AKfycbzhZvb85DvQf37xZopLurDFjzwlIdWMxkcPJN9yFUu2E7lga3c-7s-bu3EYHGsgJ4n7/exec"
  );
  const rawData = await response.json();
  // console.log(rawData.data);
  
  const { 'Facility name': facilities, 'Drug': drugs, formFields: rawFormFields } = rawData.data;

  const drugsList = createDrugList(rawFormFields)

  return {
    facilities,
    drugs: drugsList,
    rawFormFields,
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

function createDrugList(rawFormFields: string[]) {
  const editedArray: string[] = []
  rawFormFields.forEach(field => {
    editedArray.push(field.replace('b1', '').replace('b2', '').replace('b3', '').replace('stock', '').replace('expiry', '').trim())
  })
  const filterToDrugs = editedArray.filter(drug => drug.includes('mg')) 
  const drugsList = [...new Set(filterToDrugs)]
  console.log(drugsList);
  return drugsList;
}