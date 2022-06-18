
let filas = 4
let columnas = 5 
let global
let temp
function tabla() {
    document.getElementById("tabla").innerHTML = ""
    tabla = ""
    for (let i = 0; i < filas; i++) {
        tabla+= "<tr>"
        for (let u = 0; u < columnas; u++) {
            tabla+= '<td id="f'+i+u+'"></td>'
        }
        tabla += "</tr>"
    }
    document.getElementById("tabla").innerHTML = tabla
}



function buscar() {
    pal = document.getElementById("buscar").value
    fetch("https://pixabay.com/api/?key=27620180-1e79cb5f5f61e3aa727bcb024&q="+pal+"&image_type=photo&pretty=true")
    .then(response => response.json())
    .then(data => bus(data))

    function bus(data) {
        nfoto = 0
        total = 0
       

        if (temp != global) {
            for (let i = 0; i < filas; i++) {
            for (let u = 0; u < columnas; u++) {
                document.getElementById("f"+i+u).innerHTML = ''
            }
            }
        }
        for (let i = 0; i < filas; i++) {
            for (let u = 0; u < columnas; u++) {
                if (data.hits[nfoto]) {
                    if (global <= total) { 
                        break
                    }
                    document.getElementById("f"+i+u).innerHTML = '<img src="' + data.hits[nfoto++].previewURL + '">'
                    total++
                }
                if (global <= total) { 
                    break
                }
                // else{
                //     document.getElementById("f"+i+u).innerHTML = "No hay fotos de esto."
                // }
                 
            }
            // if (global <= total) {
            //     console.log("maximo")
            //     break
            // }



        }

        temp = global
    }

}

function cambiarn() {
    global = document.getElementById("nfotos").value
    buscar()
}


