let req = new XMLHttpRequest();
let version 
let temp
let nota
let nombre
let apellidos 
let total, acer, valor, err
req.onreadystatechange = () => {
  if (req.readyState == XMLHttpRequest.DONE) {
    version = JSON.parse(req.responseText).metaData.versionCount;
    actualizar()
    document.getElementById("cargando").innerHTML = ""
    
  }
};

req.open("GET", "https://api.jsonbin.io/v3/b/62973c20402a5b3802181d77/versions/count", true);
req.setRequestHeader("X-Master-Key", "$2b$10$08kr1zw8pyt38TIEkj930.TtpFG2qL65UaJFRk1.2HOxexHjTGds2");
req.send();


function actualizar() {
    fetch("https://api.jsonbin.io/b/62973c20402a5b3802181d77/"+version)
    .then(response => response.json())
    .then(data => printear(data))

    function printear(data) {
        temp = data
        document.getElementById("tabla").innerHTML = ""
        tabla = '<table class="table table-striped "><thead><th>Nombre Apellidos</th><th>Nota</th></thead>'
        for (a of data) {
            console.log(a);
            tabla += `<tr>
            <td>${a.nombre} ${a.apellidos}</td>
            <td>${a.nota}</td>
            </tr>`

        }
        tabla += "</table>"
        document.getElementById("tabla").innerHTML = tabla
    }
}

       function calcular(){
         total=document.getElementById("total").value;
         acer=document.getElementById("acertadas").value;
         valor=document.getElementById("valor").value;
         err=document.getElementById("erradas").value;
        var pen=document.getElementById("pen").value;
        nombre = document.getElementById("nombre").value;
        apellidos = document.getElementById("apellidos").value;
        if (err == "") {
            err = 0;
        }
        if (acer == "") {
            acer = 0;
        }

        if(total<0 || acer<0 || valor<0 || err<0 || pen<0 || (parseInt(total)<(parseInt(acer)+parseInt(err)))){
            document.getElementById("respuesta").innerHTML="";
            document.getElementById("respuesta").innerHTML+='No has introducido los datos correctamente';
        }else{
            let max=(total*valor);
            nota=((acer*valor)-(err*pen));
            document.getElementById("respuesta").innerHTML="";
            document.getElementById("respuesta").innerHTML+='<p>Tu nota en el test ha sido de '+nota+' puntos sobre '+max+'</p>';
            document.getElementById("respuesta").innerHTML+='<p>'+textoNota(nota,max)+'</p>'
            crear();
        temp[temp.length] = {
            "id": parseInt(temp[temp.length - 1].id) + 1,
            "nombre": nombre,
            "apellidos": apellidos,
            "nota": nota
        }
        let req1 = new XMLHttpRequest();

req1.onreadystatechange = () => {
  if (req1.readyState == XMLHttpRequest.DONE) {
    actualizar()
  }
};
        req1.open("PUT", "https://api.jsonbin.io/v3/b/62973c20402a5b3802181d77", true);
        req1.setRequestHeader("Content-Type", "application/json");
        req1.setRequestHeader("X-Master-Key", "$2b$10$08kr1zw8pyt38TIEkj930.TtpFG2qL65UaJFRk1.2HOxexHjTGds2");
        req1.send(JSON.stringify(temp));
        }
        
        

        }
    function textoNota(nota,max){
        var por=(nota*100)/max
        if(por<30){
            return "Muy mal, tienes que mejorar"
        }else if(por>=30 && por<50){
            return "No has aprobado, pero sigue esforzandote"
        }else if(por>=50 && por<60){
            return "Aprobado justito, seguro que puedes más"
        }else if(por>=60 && por<70){
           return  "Un bien, no está mal"
        }else if(por>=70 && por<90){
            return "Notable, así me gusta"
        }else if(por>=90){
            return "Sobresaliente, el trabajo se vio recompensado"
        }
    }
    function crear(){
        var boton=document.getElementById("boton");
        boton.innerHTML='<input class="btn btn-outline-secondary" type="button" value="Mostrar Creditos" onclick="creditos()">';
    }
    function creditos(){
        boton.innerHTML=
        `<p>Javier Martín Arroyo</p>
        <p>Desarrollador de Aplicaciones Multiplataforma</p>
        <p>Correo Electrónico: marroyojavier@gmail.com</p>
        <p>Teléfono:633957979</p>
        <p><a href="https://www.infojobs.net/candidate/cv/view/index.xhtml?dgv=8791302244575683916" target="blank">Infojobs</a></p>
        <p><a href="https://github.com/JaviMartinA" target="blank">Github</a></p>
        <p><a href="https://www.linkedin.com/in/javier-mart%C3%ADn-arroyo-387960225/" target="blank">Linkedin</a></p>`
        boton.innerHTML+='<input class="btn btn-outline-secondary" type="button" value="Borrar Creditos" onclick="borrar()">';
    }
    function borrar(){
        boton.innerHTML='<input class="btn btn-outline-secondary" type="button" value="Mostrar Creditos" onclick="creditos()">';
    }

    function resetear() {
        let req2 = new XMLHttpRequest();

req2.onreadystatechange = () => {
  if (req2.readyState == XMLHttpRequest.DONE) {
    actualizar()
  }
};
        req2.open("PUT", "https://api.jsonbin.io/v3/b/62973c20402a5b3802181d77", true);
        req2.setRequestHeader("Content-Type", "application/json");
        req2.setRequestHeader("X-Master-Key", "$2b$10$08kr1zw8pyt38TIEkj930.TtpFG2qL65UaJFRk1.2HOxexHjTGds2");
        req2.send('[{"id":0,"nombre":"Ivan","apellidos":"Gonzalez","nota":"6.5"}]');
    }
    
