var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Declaro variables//

const indicadorDeColor = document.getElementById('indicador-de-color')
const paleta = document.getElementById('paleta');
const grillaPixeles = document.getElementById('grilla-pixeles');
const botonBorrar = $("#borrar");
let colorSeleccionado;
let nuevoPixel;
let nuevoDiv;
let colorActual;
let botonApretado = false;

// loop nombreColores+agrega div por color //

const recorrerColores = () => {
  nombreColores.forEach((color, indice) => {
    const nuevoDiv = document.createElement('div');
    nuevoDiv.style.backgroundColor = color;
    nuevoDiv.className = 'color-paleta';
    paleta.appendChild(nuevoDiv);
    nuevoDiv.addEventListener('click', () => {
    indicadorDeColor.style.backgroundColor = color
    colorSeleccionado = color;
    })
  })
  grillaPixeles.addEventListener('click', function (e) {
    e.target.style.backgroundColor = colorSeleccionado
  })
}


// decreto booleanos sobre el botonapretado//

function mouseDown(){
  botonApretado = true;
}
function mouseUp(){
  botonApretado = false;
}

// Agrega los pixeles a la grilla//

const agregarPixelesDiv = () => {
  let i = 0;
  while (i <= 1749) {
    nuevoPixel = document.createElement('div')
    grillaPixeles.appendChild(nuevoPixel)
    i++
  }
}

// Agrego eventos para pintarcontinuo

grillaPixeles.addEventListener('mousedown', mouseDown)
grillaPixeles.addEventListener('mouseup' , mouseUp)
grillaPixeles.addEventListener('mousemove' , function(e){
  if (botonApretado){
  e.target.style.backgroundColor = colorSeleccionado
  }
})

// Variable para guardar el elemento 'color-personalizado'

const colorPersonalizado = document.getElementById('color-personalizado');
  colorPersonalizado.addEventListener('change', () => {
  colorSeleccionado = colorPersonalizado.value
  colorPersonalizado.style.backgroundColor = colorSeleccionado;
})
grillaPixeles.addEventListener('click', function (e) {
  e.target.style.backgroundColor = colorSeleccionado
})

// Borrar Todo

$(document).ready(function(){

const borrarTodo = () => {
  let pixelesParaBorrado = $("#grilla-pixeles div");
  $(botonBorrar).click(() => {
    pixelesParaBorrado.each(function () {
      $(this).animate({
        backgroundColor: "#FFF"
        }, 1000)
      })
    }
  )
}


// Selector de superheroe //

const ejecutaFuncionSuperheroe = () => {
  $("#batman").click(() => cargarSuperheroe(batman)).css('cursor', 'pointer')
  $("#wonder").click(() => cargarSuperheroe(wonder)).css('cursor', 'pointer')
  $("#flash").click(() => cargarSuperheroe(flash)).css('cursor', 'pointer')
  $("#invisible").click(() => cargarSuperheroe(invisible)).css('cursor', 'pointer')
}

// Guarda mi pixel art//

const ejecutaFuncionGuardado = () => {
  $('#guardar').click(() => guardarPixelArt())
}


// Ejecuto todas las funciones//

ejecutaFuncionSuperheroe()
ejecutaFuncionGuardado()
agregarPixelesDiv()
recorrerColores()
borrarTodo()

})

// Preferi utilizar mas el DOM que jquery para tratar de ir entendiendo todo mejor, 
//y hacerlo mas manual por asi decirlo.

