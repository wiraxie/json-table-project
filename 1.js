var newObj = 
[
    {
        "ID" : "1",
        "Nama": "Mamat",
        "Wilayah": "Kebayoran Lama",
        "Telp": "021",
        "Shift": "1"
    },
    {
        "ID" : "2",
        "Nama": "Joni",
        "Wilayah": "Palmerah",
        "Telp": "089",
        "Shift": "2"
    },
    {
        "ID" : "3",
        "Nama": "Saipul",
        "Wilayah": "Kebon Keruk",
        "Telp": "070",
        "Shift": "3"
    },
    {
        "ID" : "4",
        "Nama": "Opi",
        "Wilayah": "Kemanggisan",
        "Telp": "001",
        "Shift": "2"
    },
    {
        "ID" : "5",
        "Nama": "Udin",
        "Wilayah": "Tanjung Duren",
        "Telp": "054",
        "Shift": "3"
        
    },
    {
        "ID" : "6",
        "Nama": "Dudung",
        "Wilayah": "Grogol",
        "Telp": "099",
        "Shift": "1"
    },
    {
        "ID" : "7",
        "Nama": "Si Baru",
        "Wilayah": "Kuningan",
        "Telp": "101",
        "Shift": "2"
    },
]

window.onload = function tablejson() 
{
        //dapat value head.//
        var col = [];
        for (var i = 0; i < newObj.length; i++) 
        {
            for (var key in newObj[i]) 
            {
                if (col.indexOf(key) === -1)  // EXTRACT VALUE FOR HTML HEADER. 
                {
                    col.push(key); 
                    console.log(key);
                }
            }  
        }
        console.log(newObj);

        //bikin table.//
        var table = document.createElement("table");
        table.setAttribute("id","table");
        table.setAttribute("class", "table table-bordered");

        //bikin html row.//
        var tr = table.insertRow(-1);                   //row tabel.

        for (var i = 0; i < col.length; i++) 
        {
            var th = document.createElement("th");      //header table.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        //json masuk row.//
        for (var i = 0; i < newObj.length; i++) 
        {
            tr = table.insertRow(-1);
            tr.setAttribute("id", "row"+i);
            console.log(tr);
            // tabCell = Element.outerHTML = "<button>edit</button>";
            // tabCell = Element.outerHTML = "<button>remove</button>";
            
            //cell tabel
            for (var j = 0; j < col.length; j++) 
            {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = newObj[i][col[j]];
            }
            //cell loop end

            //tombol ubah
            ubah = tr.insertCell(-1);
            ubah.innerHTML = "<button onclick='klik()'>Ubah</button>";
            
              function klik()
              {
                document.getElementById("formDiv").style.display = "block";
              }

            //tombol hapus
            hapus = tr.insertCell(-1);
            hapus.innerHTML = "<button>Hapus</button>"; 
            
        }

        // container.
        var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
}