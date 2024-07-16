<?php
    session_start();
    include("db.php");
    if($_SERVER['REQUEST_METHOD']=="POST"){
        $email=$_POST['email'];
        $password=$_POST['password'];
      if(!empty($email) && !empty($password) && !is_numeric($email)){
        $query="SELECT * FROM `Register` WHERE `Email`='$email' LIMIT 1";
        $result=mysqli_query($connect,$query);
        if($result){
            if($result && mysqli_num_rows($result)>0){
              $user_data=mysqli_fetch_assoc($result);
              if($user_data['Password']==$password){
                header("location: se_home.php");
                exit();
              }
          }
        }
        echo "<script type='text/javascript'>alert('Password and Username are not correct');</script>";
      }
      else{
        echo "<script type='text/javascript'>alert('Password and Username are not correct');</script>"; 
      }
    }
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta http-equip="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/a81368914c.js"></script>
        <link rel="stylesheet" href="se_login.css">
        <title>Login page</title>
    </head>
    <body>
      <div class="login_img">
            <img src="login_img.png" height="650" width="600">
      </div>
      <div class="text" style="margin-top: 90px;">
        <small class="text_small" style="font-size: 20px;">welcome to our</small>
        <p class="text_p" style="font-size: 30px;">Learning Platform</p>
        <h4 class="text_h4" style="margin-bottom: 10px; font-size: 35px;">Masters the Art of Programming</h4>
      </div>
      <div class="login-container">
        <form method="POST">
          <img class="avatar" src="avatar.svg">
          <h3>LOGIN</h3>
          <div class="input-div one">
            <div class="i">
              <i class="fas fa-user"></i>
            </div>
            <div>
              <label>Email</label>
              <input class="input" type="email" name="email" id="email" autocomplete="off"><br><br>
              <small></small>
            </div>
          </div>
          <div class="input-div two">
            <div class="i">
              <i class="fas fa-lock"></i>
            </div>
            <div>
              <label>Password</label>
              <input class="input" type="password" name="password" id="pass" autocomplete="off"><br><br>
              
              <small></small>
            </div>
          </div><br>
          <input type="submit" class="btn btn-success" value="Login">
        </form>
      </div>
      <div style="margin-right:850px;">
        <pre style="color:white">&emsp;&emsp;&emsp;&emsp;&emsp;If you dont have an account then <a href="se_register.php" style="text-decoration:none;"><span style="color:aqua;font-size:18px">Sign Up</span></a></pre>
      </div>
      <script>
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
    let pass_pattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/; 
    if(password.value==''){
        setError(password,"Password is required");
        pass_valid=false;
    }
    else if(!pass_pattern.test(pass.value)){
        setError(pass,"Password pattern is not matched");
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

      </script>
    </body>    
</html>