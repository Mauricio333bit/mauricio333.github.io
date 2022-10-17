

let titulocomand= document.getElementById('hijo1')
let bottn= document.getElementById('btnCambioUsr');


let img=document.querySelector('img')
img.setAttribute('src','/images/imgn1.jpg')
img.onclick= function(){
   
    let src= img.getAttribute('src');

    if (src==="/images/imgn1.jpg" ){
        
        img.setAttribute('src','/images/imgn2.jpg');
    }else{
        img.setAttribute('src','/images/imgn1.jpg');
    }

}

function estableceNombreUsuario() {
    let miNombre = prompt('Introduzca su nombre.');
    if(!miNombre) {
      estableceNombreUsuario();
    } else {
      localStorage.setItem('nombre', miNombre);
      titulocomand.innerHTML = 'Mozilla is genial, ' + miNombre;
    }
  }

if(!localStorage.getItem('nombre')){
    estableceNombreUsuario();
}else{
   let nombreGuardado= localStorage.getItem('nombre');
    titulocomand.textContent = 'Mozilla es genial,' + nombreGuardado; 


}
bottn.onclick= function(){
    estableceNombreUsuario();
}







let comanda= new Array(8);

comanda[0]={ nroItm:1 , producto: "Pure", precio: 300 }
comanda[1]={ nroItm:2 , producto: "Bife a la criolla", precio: 1000 }
comanda[2]={ nroItm:3 , producto: "Mixta", precio: 200 }
comanda[3]={ nroItm:4 , producto: "Fritas", precio: 300 }
comanda[4]={ nroItm:5 , producto: "Flan", precio: 600 }
comanda[5]={ nroItm:6 , producto: "Queso y dulce", precio: 400 }
comanda[6]={ nroItm:7 , producto: "Cafe", precio: 400 }



let tabla= document.getElementById("tableCom");
let bodyTable= document.createElement("tbody");

comanda.forEach(p=> {
    let fila= document.createElement("tr");

    let td= document.createElement("td");
    td.innerText= p.nroItm;
    fila.appendChild("td")

    td= document.createElement("td");
    td.innerText= p.producto;
    fila.appendChild("td")
    td= document.createElement("td");
    td.innerText= p.precio;
    fila.appendChild("td")

    bodyTable.appendChild("fila");
    

})
tabla.appendChild(bodyTable);
