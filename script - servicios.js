// mostrar texto al pasar por la imagen
let descripcion = document.getElementsByTagName('p');

for (let index = 0; index < 9; index++) {
  descripcion[index].style.display = 'none' 
}

const ver = (indice,d)=>{
  descripcion[indice].style.display = d; 
}

// mostrar texto al pasar por la imagen
let aviso = document.getElementsByTagName('h4');
aviso[0].innerHTML = '*Para ver la información poner el mouse sobre la imagen*';
setTimeout(function() {
  aviso[0].innerHTML = '';
}, 4000);

