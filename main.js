function validation(){
    let form = document.getElementById('form');
    let email = document.getElementById('emails').value;
    let text = document.getElementById('text'); 
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let button = document.getElementById('subbutton');

 

    if(email.match(pattern)){
form.classList.add("valid");
form.classList.remove("invalid"); 
text.innerHTML ="Your email is valid";
text.style.color = '#00ff00';
    } else{
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = 'Please enter a valid email';
        text.style.color = '#ff0000'
    };
    
    }






  
    

    


