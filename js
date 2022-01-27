<script>

    $(document).on('keyup', '.passworduser', function() {
      var txtInput = $(this).val();
      var regPass = "^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[#?!@$%^&*-_]).{8,}$";
      var color = "black";
      if (txtInput.length > 7) {
        if (!txtInput.match(regPass)) {
          $('#password_strength').html("Include a special character and at least one capital letter");
          $("#password_strength").css("color", color);
    
        } else {
          $('#password_strength').html("");
    
        }
      } else {
        $('#password_strength').html("Password to be a minimum of 8 characters");
        $("#password_strength").css("color", color);
    
      }
    });
    
            function test(event)
            {
                let code=event.which;
                if(code>47&&code<58)
                return false;
                else
                return true;
            }
            email.onkeydown=function()
           {
           
            const regex1=/^([a-z0-9\.-]+)@([a-z0-9]+)\.([a-z]{2,3})$/;
            const regex2= /^([a-z0-9\.-]+)@([a-z0-9]+)\.([a-z]{1,20})\.([a-z]{2,3})$/;
           if(regex1.test(email.value)||regex2.test(email.value))
               {
               span[0].innerText="Your Email is Valid";
               span[0].style.color="lime"; } else{
               span[0].innerText="Invalid Email Id";
               span[0].style.color="black"; }
           
           }
         number.onkeydown=function()
           {
              const regnum=/^[0-9]{10}$/;
             
              if(regnum.test(number.value)) {
                span[1].innerText="Your Number is Valid";
                span[1].style.color="lime";   }
                else {       
               span[1].innerText="Invalid Phone Number";
               span[1].style.color="black"; }
           }
    
            function validate()
            {
               var username=document.getElementById("uname");
               var password=document.getElementById("pass");
               var number=document.getElementById('number');
               var email=document.getElementById('email');
               var span=document.getElementsByTagName('span');
              
                
               if(username.value.trim()=="")
               {
                   alert("Blank Username");
                   document.getElementById("lbuser").style.visibility="visible";
                   return false;
               }
               else if(password.value.trim()=="")
               {
                   alert("Blank Password");
                   return false;
               }
               else if(password.value.trim().length<8)
               {
                   alert("Password is too short");
                   return false;
               }
    
               $(form).submit(function(){
        $('.alert-success').show();
        event.preventDefault(); // if you want to send data only, do not reload page.
    });
    
            }
        </script>
