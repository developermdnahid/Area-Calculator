/**
 * Alert function
 */

 const setAlert = (msg, type = 'danger') => {
  return `<p class="alert alert-${type} d-flex justify-content-between">${msg} <button data-bs-dismiss="alert" class="btn-close"></button></p>`;
}

//      Check value is number or not

const numberCheck = (num) => {
  
  let agePattern = /^[0-9]{1,3}$/;

  return agePattern.test(num);

}


//      Marriage Age Calculator


const marriageAgeCheck = (name, age, gender) => {
  if(gender == 'Male'){
    let marriage_age = 21;
    if(age >= marriage_age){
      return setAlert(`Hi ${name} vhaiya, Your marriage age is okey.` , 'success');
    }else{
      return setAlert(`Hi ${name} vhaiya, Your marriage age is not okey. You have to wait ${marriage_age - age} years`);
    }

  }else{
    let marriage_age = 18;
    if(age >= marriage_age){
      return setAlert(`Hi ${name} Apo, Your marriage age is okey.` , 'success');
    }else{
      return setAlert(`Hi ${name} Apo, Your marriage age is not okey. You have to wait ${marriage_age - age} years`);
    }

  }

};



//      Area Calculator


const areaCal = ( type , val1 , val2 = null ) => {

  if( type == 'Rectangle' ){
    return setAlert(`The area of a Rectangle is ${ val1 * val2 }` , 'success');
  }else if( type == 'Square' ){
    return setAlert(`The area of a Square is ${ val1 * val1 }` , 'success');
  }else if( type == 'Triangle' ){
    return setAlert(`The area of a Triangle is ${ .5 * val1 * val2 }` , 'success');
  }else if( type == 'Circle' ){
    return setAlert(`The area of a Circle is ${ 3.1416 * ( val1 * val1 ) }` , 'success');
  }



}