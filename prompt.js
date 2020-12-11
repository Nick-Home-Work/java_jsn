"use strict" ;
window.onload = function e(){
	let degry = prompt('Переведите градусы в радианывведите градусы');
let error = degry;
let radian = (9 / 5) * degry + 32;
console.log( typeof radian);
 if( Number.isNaN(radian) === true){
   alert('Странные градусы ' + error + ' попробуйте еще раз!');
    e();
 } else{
 alert('Из Ваших градусов получилось ' + radian +' радиан' );}
}
