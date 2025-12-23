const https = require("https");

https.get(
  "https://lifeplusbd.alphaforcesecurity.org/api/v1/get-countries",
  (res) => {
    let data = "";

    res.on("data", (chank) => {
      data += chank;
    });
    res.on("end", () => {
      console.log(JSON.parse(data));
    });
  }
);
