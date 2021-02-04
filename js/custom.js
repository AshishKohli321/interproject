// Small naviagation
 function showSmallNav(){
 	document.getElementById('small_nav').style.display = "block";
 	document.querySelector('.open_small_nv').style.display = 'none';
 	document.querySelector('.close_small_nv').style.display = 'block';
 	document.querySelector('.showPage').style.top = "60%";
 }
 function hideSmallNav(){
 	document.getElementById('small_nav').style.display = "none";
 	document.querySelector('.close_small_nv').style.display = 'none';
 	document.querySelector('.open_small_nv').style.display = 'block';
 	document.querySelector('.showPage').style.top = "16%";
 }
// Small naviagation

// Fixed naviagtion bar onscroll ///////
var main_nav = document.getElementById('main_nav');
var small_nav = document.getElementById('small_nav');


window.onscroll = function(){
	if(window.pageYOffset > 50){
		main_nav.style.position='fixed';
		small_nav.style.position='fixed';

		main_nav.style.zIndex='9999';
		main_nav.style.background='white';
		main_nav.style.top='0';
		main_nav.style.transition='all .5s ease';
	}else{
		main_nav.style.position='relative';
		main_nav.style.zIndex='9999';
		main_nav.style.background='white';
		main_nav.style.top='';
		main_nav.style.background='white';
	}

	if(window.pageYOffset > 600){
		main_nav.style.background='#ccc';
	}
}
// Fixed naviagtion bar onscroll ///////


///////////////////// custom sliders///////////////////////////////////
const slider = document.querySelector(".slider_items").children;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let index = 0;
const totalSlides = slider.length;

prev.addEventListener('click',function(){
	slide('prev');
});

next.addEventListener('click',function(){
	slide('next');
});

function slide(direction){

	if(direction == 'next'){
		if(index == totalSlides-1){
			index = 0;
		}else{
			index++;
		}
		
	}
	if(direction == 'prev'){
		if(index == 0){
			index = totalSlides-1;
		}else{
			index--
		}
		
	}

	for(let i = 0 ; i < slider.length;i++){
		slider[i].classList.remove('active');
	}
	slider[index].classList.add('active');
}

function autoslide(){
	slide('next');
}

setInterval(autoslide,4000);
// ////////////////////////custom slider /////////////////////

// /////////pop up form///////////////////
let close = document.querySelector('.close_form');
let open = document.querySelector('.pop_up_form');
let form = document.querySelector('.form_box');
	setTimeout(()=>{
	open.style.display="block";
	},3000);
close.addEventListener('click',function(){
	open.style.display="none";
});

// /////////pop up form///////////////////

///////////////////////// form_enquiry_section index.html //////////////////
function formSubmit(){
	
	
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var phone = document.getElementById('phone').value;
	var state = document.getElementById('state').value;
	var course = document.getElementById('course').value;
	var address = document.getElementById('address').value;

	// validate Name ///
	if(name==""){
		document.getElementById('errMsg1').style.display='block';
		document.getElementById('errMsg1').innerHTML='Fields Are Required';
		return false;
	}else if( (name.length <=3) || (name.length>15) ) {
		document.getElementById('errMsg1').style.display='block';
		document.getElementById('errMsg1').innerHTML=' Name must be between 3 or 15 Charecter';
		return false;
	}
	else if(!isNaN(name) ) {
		document.getElementById('errMsg1').style.display='block';
		document.getElementById('errMsg1').innerHTML='Numbers are not allowed';
		return false;
	}
	// validate Name End ///

	// validate email ///
	if(email==""){
		document.getElementById('errMsg2').style.display='block';
		document.getElementById('errMsg2').innerHTML='Fields Are Required';
		return false;
	}else if(email.indexOf('@') <=0){
		document.getElementById('errMsg2').style.display='block';
		document.getElementById('errMsg2').innerHTML='@ position invalid';
		return false;
	}
	// validate email ///

	// validate phone ///
	if(phone==""){
		document.getElementById('errMsg3').style.display='block';
		document.getElementById('errMsg3').innerHTML='Fields Are Required';
		return false;
	}else if(isNaN(phone)){
		document.getElementById('errMsg3').style.display='block';
		document.getElementById('errMsg3').innerHTML='Only number are allowed';
		return false;
	}else if((phone.length < 10) || (phone.length > 10)){
		document.getElementById('errMsg3').style.display='block';
		document.getElementById('errMsg3').innerHTML='mobile number must be 10 digit';
		return false;
	}
	// validate phone ///

	// validate state
	if(state==""){
		document.getElementById('errMsg4').style.display='block';
		document.getElementById('errMsg4').innerHTML='Fields Are Required';
		return false;
	}
	// validate state

	// validate course
	if(course==""){
		document.getElementById('errMsg5').style.display='block';
		document.getElementById('errMsg5').innerHTML='Fields Are Required';
		return false;
	}
	// validate course


	// validate address
	if(address==""){
		document.getElementById('errMsg6').style.display='block';
		document.getElementById('errMsg6').innerHTML='Fields Are Required';
		return false;
	}
	if((address.length<5) || (address.length>20)){
		document.getElementById('errMsg6').style.display='block';
		document.getElementById('errMsg6').innerHTML='Address should be 5 to 20 Charecters';
		return false;
	}
	// validate address


	
}
////////////////////////// form_enquiry_section index.html //////////////////


// Model form validation //////////////////////////////////////
function model_form_submit(){
	var Sname = document.getElementById('Sname').value;
	var Semail = document.getElementById('Semail').value;
	var Sphone = document.getElementById('Sphone').value;
	var Saddress = document.getElementById('Saddress').value;


// Sname validate//
	if(Sname == ''){
		document.getElementById('Msg1').style.display='block';
		document.getElementById('Msg1').innerHTML='Fields Are Required *';
		return false;
	}else if( (Sname.length<3) || (Sname.length>20) ){
		document.getElementById('Msg1').style.display='block';
		document.getElementById('Msg1').innerHTML='Name must be between 3 or 20 Charecters *';
		return false;
	}else if(!isNaN(Sname)){
		document.getElementById('Msg1').style.display='block';
		document.getElementById('Msg1').innerHTML='Numbers are not allowed *';
		return false;
	}
// Sname validate End//

// SEmail validate//
	if(Semail == ''){
		document.getElementById('Msg2').style.display='block';
		document.getElementById('Msg2').innerHTML='Fields Are Required *';
		return false;
	}else if(Semail.indexOf('@')<=0){
		document.getElementById('Msg2').style.display='block';
		document.getElementById('Msg2').innerHTML='Invalid @ position *';
		return false;
	}
// SEmail validate End//

// Sphone validate//
	if(Sphone == ''){
		document.getElementById('Msg3').style.display='block';
		document.getElementById('Msg3').innerHTML='Fields Are Required *';
		return false;
	}else if(isNaN(Sphone)){
		document.getElementById('Msg3').style.display='block';
		document.getElementById('Msg3').innerHTML='Charecters are not allowd *';
		return false;
	}else if( (Sphone.length < 10) || (Sphone.length > 10)  ){
		document.getElementById('Msg3').style.display='block';
		document.getElementById('Msg3').innerHTML='Mobile number Olny 10 digits *';
		return false;
	}
// Sphone validate End//

// Saddress validate//
	if(Saddress == ''){
		document.getElementById('Msg4').style.display='block';
		document.getElementById('Msg4').innerHTML='Fields Are Required *';
		return false;
	}else if( (Saddress.length < 10) || (Saddress.length > 20)  ){
		document.getElementById('Msg4').style.display='block';
		document.getElementById('Msg4').innerHTML='Address should be 5 to 20 Charecters *';
		return false;
	}
// Saddress validate//


}

// Model form validation //////////////////////////////////////



// owl carousel /// Student Achievements////////////
	$(document).ready(function(){
  		$(".owl-carousel").owlCarousel({
  			loop : true,
  			nav : true,
  			autoplay :true,
  			autoplayTimeout:4000,
  			responsive:{
		        0:{
		            items:1,
		            nav:true
		        },
		        550:{
		            items:2,
		            nav:true
		        },
		        768:{
		            items:2,
		            nav:true
		        },
		        1000:{
		            items:3,
		            nav:true,
		            loop:false
		        }
		    }
  		});
	});
// owl carousel /// Student Achievements////////////
	



