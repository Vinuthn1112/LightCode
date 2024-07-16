<?php
    session_start();
    include("db.php");
    if($_SERVER['REQUEST_METHOD']=="POST"){
        $fname=$_POST['fname'];
        $uname=$_POST['uname'];
        $email=$_POST['email'];
        $phone=$_POST['phone'];
        $password=$_POST['password']; 
        $query="INSERT INTO `register` VALUES('$fname','$uname','$email','$phone','$password')";
        mysqli_query($connect,$query);
        header("location: se_home.php");
    }
?>
<html>
    <head>
        <title>LightCode's Registration form</title>
        <link rel="stylesheet" href="se_register.css">
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    </head>
    <body>
        <div class="wrapper">
            <form  method="post">
                <h1>Registration</h1>

                <div class="input-box">
                    <div class="input-field">
                        <input type="text" placeholder="FullName" name="fname" autocomplete="off" id="fname">
                        <i class='bx bxs-user' ></i>
                        <br>
                        <small></small>
                    </div>
                    <div class="input-field">
                        <input type="text" placeholder="Username"  name="uname" autocomplete="off" id="uname">
                        <i class='bx bxs-user' ></i>
                        <br>
                        <small></small>
                    </div>
                </div>

                <div class="input-box">
                    <div class="input-field">
                        <input type="email" placeholder="Email" name="email" autocomplete="off" id="email">
                        <i class='bx bxs-envelope' ></i>
                        <br>
                        <small></small>
                    </div>
                    <div class="input-field">
                        <input type="tel" placeholder="Phone Number" name="phone" autocomplete="off" id="phone">
                        <i class='bx bxs-phone' ></i>
                        <br>
                        <small></small>
                    </div>
                </div>

                <div class="input-box">
                    <div class="input-field">
                        <input type="password" placeholder="Password" name="password" autocomplete="off" id="pass">
                        <i class='bx bxs-lock-alt' ></i>
                        <br>
                        <small></small>
                    </div>
                    <div class="input-field">
                        <input type="password" placeholder="Confirm Password" name="cpassword" autocomplete="off" id="cpass">
                        <i class='bx bxs-lock-alt' ></i>
                        <br>
                        <small></small>
                    </div>
                </div><br><br>
                <div>
                    <input type="checkbox" id="check"> I hereby declare that the above informartion provided is true and correct<br>
                    <small></small>
                </div><br>
                <button type="submit" class="btn">Register</button>
            </form>
        </div>
       <script>
                let fname=document.getElementById('fname');
                let uname=document.getElementById('uname');
                let email=document.getElementById('email');
                let phone=document.getElementById('phone');
                let pass=document.getElementById('pass');
                let cpass=document.getElementById('cpass');
                let check=document.getElementById('check');
                let form=document.querySelector('form');
form.addEventListener('submit',(e)=>{  
    e.preventDefault();
    validate();
})
function validate(){
    //Name validation
    let name_valid=true;
    let name_pattern=/^[a-zA-Z\s]{3,20}$/;
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
    let uname_pattern=/^[a-zA-Z@#$%^&*_\s\d]{3,20}$/; 
    if(uname.value==""){
        uname_valid=false;
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
        setSuccess(email);
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
        setSuccess(phone);
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
        setSuccess(pass);
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
}
       </script>
    </body>
</html>