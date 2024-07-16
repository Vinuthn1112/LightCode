//FLOATING LABELS
const inputs = document.querySelectorAll('.input');



function focusFunc(){
    let parent = this.parentNode.parentNode;
    parent.classList.add('focus');
}

function blurFunc(){
    let parent = this.parentNode.parentNode;
    if(this.value == "")
    {
        parent.classList.remove('focus');
    }
}
   

inputs.forEach(input => {
    input.addEventListener('focus',focusFunc);
    input.addEventListener('blur',blurFunc);
});
//Validation
let email=document.getElementById('email');
let form=document.querySelector('form');
let password=document.getElementById('pass');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validate();
})
function validate()
{
    let email_valid=true;
    let email_pattern=/^[a-zA-Z]+[0-9]*@gmail.com$/;
    if(email.value==''){
        setError(email,"Email is required");
        email_valid=false;
    }
    else if(!email_pattern.test(email.value)){
        setError(email,"Email pattern is not matched");
        email_valid=false;
    }
    else{
        setSuccess(email)
    }
    let pass_valid=true;
    if(password.value==''){
        setError(password,"Password is required");
        pass_valid=false;
    }
    else{
        setSuccess(password)
    }
    if(pass_valid && email_valid){
        let submit_form=Object.getPrototypeOf(form).submit;
        submit_form.call(form);
    }
}
function setError(input,msg){
    let parent=input.parentElement;
    let small=parent.querySelector('small');
    small.innerText=msg;
    small.style.color="red";
}
function setSuccess(input){
    let parent=input.parentElement;
    let small=parent.querySelector('small');
    small.style.visibility="hidden";
    small.classList.add('small');
}
