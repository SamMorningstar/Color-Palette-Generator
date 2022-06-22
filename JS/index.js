function generatePalette() {
  let url = "http://colormind.io/api/";
  let data = {
    model: "default",
  };
  let palette;

  let colorRequest = new XMLHttpRequest();

  colorRequest.onreadystatechange = function () {
    if (colorRequest.readyState == 4 && colorRequest.status == 200) {
      palette = JSON.parse(colorRequest.responseText).result;
      console.log(palette);
      document.getElementById("colorDiv").innerHTML = "";
      for (i = 0; i <= 4; i++) {
        var div = document.createElement("div");
        div.style.width = "100px";
        div.style.height = "100px";
        div.style.background="rgb("+palette[i].toString()+")";
        div.innerHTML=palette[i]
        div.style.color="white"
        document.getElementById("colorDiv").appendChild(div);
      }
    }else{
        console.log(`error ${colorRequest.status} ${colorRequest.statusText}`);
    }
  };

  colorRequest.open("POST", url, true);
  colorRequest.send(JSON.stringify(data));

}
