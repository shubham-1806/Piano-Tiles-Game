

nam = document.querySelector('#nameo');
dob=document.querySelector('#start')

var el =document.getElementById('sub');

el.addEventListener('click',()=>{
    if(nam.value!='' &&  dob.value!=''){
        localStorage.setItem('name',nam.value);
    }
})
