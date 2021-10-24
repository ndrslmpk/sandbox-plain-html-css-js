// var cryptoData;

const cryptoDataUrl = "https://api2.binance.com/api/v3/ticker/24hr";

function getCryptoHttp() {
  let xhrequest = new XMLHttpRequest();

  xhrequest.open("GET", cryptoDataUrl); // just configures the request without opening the connection
  // xhrequest.responseType = "json";
  xhrequest.send(); // actually opens the connection and sends the request to the target (server)
  xhrequest.onload = () => {
    console.log(xhrequest);
    if (xhrequest.status == 200) {
      console.log(JSON.parse(xhrequest.response));
      console.log("typeof:JSON parse: ");
      console.log(typeof JSON.parse(xhrequest.response));
      console.log(JSON.parse(xhrequest.response));
      console.log(JSON.parse(xhrequest.response)[0]);
      var cryptoData = JSON.parse(xhrequest.response);
      console.log(cryptoData);
      insertData(cryptoData);
      clearArray(cryptoData);
    } else {
      console.log(`error ${xhrequest.status} ${xhrequest.statusText}`);
    }
  };
  xhrequest.onerror = () => {
    alert(
      `Request Failed!` +
        "Repsonse Status:" +
        xhrequest.status +
        "Response Status Text:" +
        xhrequest.statusText
    );
  };
}

function getCryptoFetch() {
  let response = fetch(cryptoDataUrl)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      insertData(data);
    });
}

async function getCryptoAsyncFetch() {
  let response = await fetch(cryptoDataUrl);
  let data = await response.json();
  insertData(data);
}

function getCryptoAxios() {}

function getCryptoJquery() {}

function insertData(payload) {
  console.log("in Insert Function:" + payload);
  var table = document.getElementById("dataDisplay");
  // resets the potentially previously added tableBody elements
  table.innerHTML = "";
  console.log(table);
  console.log("payload is " + payload);
  console.log("0,0= " + payload[0]);

  for (let i = 0; i < payload.length; i++) {
    let row = table.insertRow(i);

    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);

    cell1.innerHTML = payload[i].symbol;
    cell2.innerHTML = payload[i].askPrice;
    cell3.innerHTML = payload[i].askQty;
    cell4.innerHTML = payload[i].bidPrice;
    cell5.innerHTML = payload[i].bidQty;
    cell6.innerHTML = payload[i].volume;
  }
}

function clearArray(array) {
  while (array.length) {
    array.pop();
  }
}
