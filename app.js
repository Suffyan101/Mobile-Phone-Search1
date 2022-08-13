var mobile = {
    sumsung: {
        S6: {
            Name: "Sumsung S6",
            Price: "$1200",
            Colour: ["Black", "Red", "White"],
            Camera: "18mp",
        },
        S7: {
            Name: "Sumsung S7",
            Price: "$1200",
            Colour: ["Black", "Red", "White"],
            Camera: "18mp",
        },
        S8: {
            Name: "Sumsung S8",
            Price: "$1200",
            Colour: ["Black", "Red", "White"],
            Camera: "18mp",
        },
        S9: {
            Name: "Sumsung S9",
            Price: "$1200",
            Colour: ["Black", "Red", "White"],
            Camera: "18mp",
        },
        S10: {
            Name: "Sumsung S10",
            Price: "$1200",
            Colour: ["Black", "Red", "White"],
            Camera: "18mp",
        },
        S20: {
            Name: "Sumsung S20",
            Price: "$1200",
            Colour: ["Black", "Red", "White"],
            Camera: "18mp",
        },
    },

    iphone: {
        iphone7: {
            Name: "Iphone 7",
            Price: "$1200",
            Colour: ["Black", "Red", "White"],
            Camera: "18mp",
        },
        iphone8: {
            Name: "Iphone 8",
            Price: "$1200",
            Colour: ["Black", "Red", "White"],
            Camera: "18mp",
        },
        iphone8plus: {
            Name: "Iphone 8 Plus",
            Price: "$1200",
            Colour: ["Black", "Red", "White"],
            Camera: "18mp",
        },
        iphonex: {
            Name: "Iphone X",
            Price: "$1200",
            Colour: ["Black", "Red", "White"],
            Camera: "18mp",
        },
        iphonexmax: {
            Name: "Iphone X-Max",
            Price: "$1200",
            Colour: ["Black", "Red", "White"],
            Camera: "18mp",
        },
        iphonexsmax: {
            Name: "Iphone Xs-Max",
            Price: "$1200",
            Colour: ["Black", "Red", "White"],
            Camera: "18mp",
        },
    },

    realme: {
        realme3: {
            Name: "Realme 3",
            Price: "$120",
            Colour: ["Black", "Red", "White"],
            Camera: "18mp",
        },
        realme5: {
            Name: "Realme 5",
            Price: "$120",
            Colour: ["Black", "Red", "White"],
            Camera: "18mp",
        },
        realme6: {
            Name: "Realme 6",
            Price: "$120",
            Colour: ["Black", "Red", "White"],
            Camera: "18mp",
        },
    }
}
function generateHtml(brand, price, color, features) {
    var div = document.createElement("div");
    var h4 = document.createElement("h4");
    var h4text = document.createTextNode(brand)
    h4.appendChild(h4text)
    var h3 = document.createElement("h3");
    var h3text = document.createTextNode(features)
    h3.appendChild(h3text)
    var h2 = document.createElement("h2");
    var h2text = document.createTextNode(price)
    h2.appendChild(h2text)
    var h1 = document.createElement("h1");
    var h1text = document.createTextNode(color)
    h1.appendChild(h1text)
    div.appendChild(h4)
    div.appendChild(h3)
    div.appendChild(h2)
    div.appendChild(h1)

    return div;
}

function notfound(NotFound) {
    var div = document.createElement('div')
    var a = document.createElement('h1')
    var text = document.createTextNode(NotFound)
    a.appendChild(text)
    div.appendChild(a)
    return div;
}

// console.log(res)
var main = document.getElementById("demo");


function on_click() {
    var a = document.getElementById("select").value;
    var b = document.getElementById("search").value;
    var remove = b.split(" ").join("")

    var result = Object.keys(mobile[a])
    var c = result.indexOf(remove);
    var d = mobile[a][remove];
    var e = "Search Not Found";

    if (c !== -1) {
        main.appendChild(generateHtml(d.Name, d.Price, d.Colour, d.Camera));
    }
    else {
        main.appendChild(notfound(e));
    }


}
