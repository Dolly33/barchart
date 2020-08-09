var vertical = [
    ["January", Math.floor(Math.random() * (1000 - 500)) + 500],
    ["February", Math.floor(Math.random() * (1000 - 500)) + 500],
    ["March", Math.floor(Math.random() * (1000 - 500)) + 500],
    ["April", Math.floor(Math.random() * (1000 - 500)) + 500],
    ["May", Math.floor(Math.random() * (1000 - 500)) + 500],
    ["June", Math.floor(Math.random() * (1000 - 500)) + 500],
    ["July", Math.floor(Math.random() * (1000 - 500)) + 500],
    ["August", Math.floor(Math.random() * (1000 - 500)) + 500],
    ["September", Math.floor(Math.random() * (1000 - 500)) + 500],
    ["October", Math.floor(Math.random() * (1000 - 500)) + 500],
    ["November", Math.floor(Math.random() * (1000 - 500)) + 500],
    ["December", Math.floor(Math.random() * (1000 - 500)) + 500]
];

  function randDarkColor() {
    var lum = -0.25;
    var hex = String('#' + Math.random().toString(16).slice(2, 8).toUpperCase()).replace(/[^0-9a-f]/gi, '');
    if (hex.length < 6) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    var rgb = "#", c, i;
    for (i = 0; i < 3; i++) {
      c = parseInt(hex.substr(i * 2, 2), 16);
      c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
      rgb += ("00" + c).substr(c.length);
    }
    return rgb;
  }

window.addEventListener("load", function(){
  
    // DRAW THE VERTICAL BARS
    container = document.getElementById("bar-vertical");
    for (var vert of vertical) {
      var bar = document.createElement("div");
      bar.classList.add("vcell");
  
      var inbar = document.createElement("div");
      inbar.classList.add("vbar");
      inbar.style = "background: " + randDarkColor() + "; height: " + vertical[0][1];
      inbar.innerHTML = vert[0];
  
      bar.appendChild(inbar);
      container.appendChild(bar);
    }
  });
