let fname=document.getElementById('fname');
let uname=document.getElementById('uname');
let email=document.getElementById('email');
let phone=document.getElementById('phone');
let pass=document.getElementById('pass');
let cpass=document.getElementById('cpass');
let check=document.getElementById('check');
let form=document.querySelector('form');
form.addEventListener('submit',(e)=>{home    
    e.preventDefault();
    validate();
})
function validate(){
    //Name validation
    let name_valid=true;
    let name_pattern=/^[a-zA-Z]{3,20}$/;
    if(fname.value==""){
        name_valid=false;
        setError(fname,"Name is required");
    }
    else if(fname.length<3){
        name_valid=false;
        setError(fname,"Name length should atleast 3");
    }
    else if(!name_pattern.test(fname.value)){
        name_valid=false;
        setError(fname,"Name should containt only alphabets");
    }
    else{
        setSuccess(fname);
    }
    //Username validation
    let uname_valid=true;
    let uname_pattern=/^(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d@.#$!%*?&]*{8,30}$/; 
    if(uname.value==""){
        name_valid=false;
        setError(uname,"User Name is required");
    }
    else if(!uname_pattern.test(uname.value)){
        uname_valid=false;
        setError(uname,"User Name pattern is not matches");
    }
    else{
        setSuccess(uname);
    }
    //Email validation
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
    //Phone number validation
    let phone_valid=true;
    let phone_pattern=/^[6-9][0-9]{9}$/;
    if(phone.value==""){
        phone_valid=false;
        setError(phone,"Phone number is required");
    }
    else if(!phone_pattern.test(phone.value)){
        phone_valid=false;
        setError(phone,"Phone number is not valid");
    }
    else{
        setSuccess(phone_valid);
    }
    //Password Validation
    let pass_valid=true;
    let pass_pattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/; 
    if(pass.value==''){
        setError(pass,"Password is required");
        pass_valid=false;
    }
    else if(!pass_pattern.test(pass.value)){
        setError(pass,"Password pattern is not matched");
        pass_valid=false;
    }
    else{
        setSuccess(pass)
    }
    //Confirm password validation
    let cpass_valid=true;
    if(cpass.value==""){
        cpass_valid=false;
        setError(cpass,"Password is required");
    }
    else if(cpass.value!=pass.value){
        cpass_valid=false;
        setError(cpass,"Password is not matched");
    }
    else{
        setSuccess(cpass);
    }
    //checkbox validation
   let check_valid=true;
    if(check.checked){
        setSuccess(check);
    }
    else{
        check_valid=false;
        setError(check,"This field is required");
    }
    if(name_valid && uname_valid && email_valid && phone_valid && pass_valid && pass_valid && check_valid){
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