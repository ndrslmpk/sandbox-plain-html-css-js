function getSelectedData() {
  let hid, mid, tid;

  //retrieve input values
  hid = document.getElementById("hid").value;
  mid = document.getElementById("mid").value;
  tid = document.getElementById("tid").value;

  let reqData = data;
  let inputArr = [
    { key: "Hersteller", value: hid },
    { key: "Modell", value: mid },
    { key: "Technologiestufe", value: tid },
  ];

  // creates a control array with TRUE for filled field
  let inputBoolArr = inputArr.map(function (element) {
    return !(element.value === "" || element.value === null);
  });
  console.log("inputBoolArr: " + inputBoolArr);

  if (inputBoolArr[0] === true) {
    reqData = reqData.filter(
      (element) => element.Hersteller == inputArr[0].value
    );
  }
  if (inputBoolArr[1] === true) {
    reqData = reqData.filter((element) => element.Modell == inputArr[1].value);
  }
  if (inputBoolArr[2] === true) {
    reqData = reqData.filter(
      (element) => element.Technolgiestufe == inputArr[2].value
    );
  }

  //Starting to display data
  const table = document.getElementById("dataDisplay");

  for (let i = 1; i < reqData.length; i++) {
    let row = table.insertRow(i);

    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);

    cell1.innerHTML = reqData[i].Hersteller;
    cell2.innerHTML = reqData[i].Modell;
    cell3.innerHTML = reqData[i].Technolgiestufe;
    cell4.innerHTML = reqData[i].Bauform;
    cell5.innerHTML = reqData[i].Aufladbar;
    cell6.innerHTML = reqData[i].Preis;
  }
}
