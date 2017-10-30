window.onload = function CreateTableFromJSON() {
        var newObj = [
    {
        "id" : "1",
        "name": "Mamat",
        "wilayah": "Kebayoran Lama",
        "telp": "021",
        "Shift": "1"
    },
    {
        "id" : "2",
        "name": "Joni",
        "wilayah": "Palmerah",
        "telp": "089",
        "Shift": "2"
    },
    {
        "id" : "3",
        "name": "Saipul",
        "wilayah": "Kebon Keruk",
        "telp": "070",
        "Shift": "3"
    },
    {
        "id" : "4",
        "name": "Opi",
        "wilayah": "Kemanggisan",
        "telp": "001",
        "Shift": "2"
    },
    {
        "id" : "5",
        "name": "Udin",
        "wilayah": "Tanjung Duren",
        "telp": "054",
        "Shift": "3"
        
    },
    {
        "id" : "6",
        "name": "Dudung",
        "wilayah": "Grogol",
        "telp": "099",
        "Shift": "1"
    },
    {
        "id" : "7",
        "name": "Si Baru",
        "wilayah": "Kuningan",
        "telp": "101",
        "Shift": "2"
    },

    
]

        // dapat value head. 
        var col = [];
        for (var i = 0; i < newObj.length; i++) 
        {
            for (var key in newObj[i]) 
            {
                if (col.indexOf(key) === -1) 
                {
                    col.push(key);
                }
            }
        }

        // bikin table.
        var table = document.createElement("table");

        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.
        var tr = table.insertRow(-1);                   // row tabel.

        for (var i = 0; i < col.length; i++) 
        {
            var th = document.createElement("th");      // header table.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // json to row.
        for (var i = 0; i < newObj.length; i++) 
        {
            tr = table.insertRow(-1);

            // tabCell = Element.outerHTML = "<button>edit</button>";
            //tabCell = Element.outerHTML = "<button>remove</button>";
            for (var j = 0; j < col.length; j++) 
            {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = newObj[i][col[j]]
            }
        }
        //act
        
        //ikin button dari panjang json
        for (var i =0; i<newObj.length; i++)
        {
            var tombol;
            tombol = tr.insertCell(-1);
            tombol.outerHTML = "<button>EDIT</button>";  
        }

        // container.
        var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
 }
