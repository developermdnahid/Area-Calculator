//      get elements


const area_type = document.getElementById('area_type');
const area_form = document.getElementById('area_form');
const rec = document.querySelector('.rec');
const squ = document.querySelector('.squ');
const tri = document.querySelector('.tri');
const cir = document.querySelector('.cir');
const details = document.querySelector('.details');





//      area type value

area_type.onchange = () => {
  if(area_type.value == 'Rectangle'){
    rec.style.display = 'block';
  }else{
    rec.style.display = '';
  }

  if(area_type.value == 'Square'){
    squ.style.display = 'block';
  }else{
    squ.style.display = '';
  }

  if(area_type.value == 'Triangle'){
    tri.style.display = 'block';
  }else{
    tri.style.display = '';
  }

  if(area_type.value == 'Circle'){
    cir.style.display = 'block';
  }else{
    cir.style.display = '';
  }

}


//      form submit


area_form.onsubmit = (e) => {
  e.preventDefault();

  if( area_type.value == 'Rectangle' ){

    let length  = area_form.querySelector('input[name="length"]').value;
    let width  = area_form.querySelector('input[name="width"]').value;

    details.innerHTML = areaCal( area_type.value , length , width );


  }else if( area_type.value == 'Square' ){
    let bahu  = area_form.querySelector('input[name="bahu"]').value;

    details.innerHTML = areaCal( area_type.value , bahu );
  }else if( area_type.value == 'Triangle' ){
    let base  = area_form.querySelector('input[name="base"]').value;
    let height  = area_form.querySelector('input[name="height"]').value;

    details.innerHTML = areaCal( area_type.value , base , height );
  }else if( area_type.value == 'Circle' ){
    let radius  = area_form.querySelector('input[name="radius"]').value;

    details.innerHTML = areaCal( area_type.value , radius );
  }






}
