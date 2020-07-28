<?php
if(isset($_POST['email'])) {
 
    // EDIT THE 2 LINES BELOW AS REQUIRED	
    $email_to1 = "postbox@pointonepromotions.com.test-google-a.com";
    $email_subject = "Contact Information from ".$_POST['name'];
 
    function died($error) {
        // your error code can go here
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br /><br />";
        echo $error."<br /><br />";
        echo "Please go back and fix these errors.<br /><br />";
        die();
    }
 
 
    // validation expected data exists
    if(!isset($_POST['name']) ||
        !isset($_POST['email']) ||
        !isset($_POST['contact']) ||
        !isset($_POST['message'])) {
        died('We are sorry, but there appears to be a problem with the form you submitted.');       
    }
 
     
    $first_name = $_POST['name']; // required
    
    $email_from = $_POST['email']; // required

    $comments = $_POST['message']; // required
    
    
    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
 
  if(!preg_match($email_exp,$email_from)) {
    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
  }
 
    $string_exp = "/^[A-Za-z .'-]+$/";
 
  if(!preg_match($string_exp,$first_name)) {
    $error_message .= 'The First Name you entered does not appear to be valid.<br />';
  }
 
  
 
  if(strlen($comments) < 2) {
    $error_message .= 'The Comments you entered do not appear to be valid.<br />';
  }
 
  if(strlen($error_message) > 0) {
    died($error_message);
  }
 
    $html= '<html>
    <body style="width:100%; font-family:Arial; font-size:13px; line-height:22px; background:#fff;  position:relative;color:#555555; margin:0px; padding:0px;">    
    <div style="margin:0 auto; width:600px;">
            <div style="background:#fff; width:594px; float:left; padding:0px 3px 3px 3px;">
              <div style="padding:27px; width:540px; float:left;text-align:center;">
                    <a href="https://pointonepromotions.com" target="_blank">
                        <img src="https://pointonepromotions.com/assets/images/POPGradient-logol.png" alt="POP logo"/ style="width:100px">
                    </a>
                </div>
                <div style="background:#fff; padding:44px 34px; width:526px; float:left;">
                    <h1 style="color:#482154; font-size:24px; font-family:Arial; font-weight:normal; margin-bottom:20px;">
                    Contact Form Details   
                    </h1>
                    <table cellpadding="0" cellspacing="0" class="tab p2" style="width:100%; float:left; background:#fff; padding:20px;color:#000;">
                       <tr style="margin-bottom:5px; width:100%; float:left; border-bottom:#fff 1px solid;">
                          <td style="padding:5px; width:120px;float:left;"><b>Name</b></td>
                            <td style=" float:left; padding:5px;">&nbsp; '.$_POST['name'].'</td>
                        </tr>
        
                        <tr style="margin-bottom:5px; width:100%; float:left; border-bottom:#fff 1px solid;">
                          <td style=" padding:5px; width:120px;float:left;"><b>Email</b></td>
                            <td style="  float:left; padding:5px;text-decoration:none;color:#000;">&nbsp; '.$_POST['email'].'</td>
                        </tr>

                        <tr style="margin-bottom:5px; width:100%; float:left; border-bottom:#fff 1px solid;">
                          <td style=" padding:5px; width:120px;float:left;"><b>Phone</b></td>
                            <td style="  float:left; padding:5px;text-decoration:none;color:#000;">&nbsp; '.$_POST['contact'].'</td>
                        </tr>
                        <tr style="width:100%; float:left;">
                          <td style=" padding:5px; width:120px;float:left;"><b>Message</b></td>
                            <td style="float:left; padding:4px;">&nbsp; '.$_POST['message'].'</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        </body>
        </html>';
    $message = $html;
    
      $headers = "from:".$_POST['name']."<".$email_to1.">\r\n";
      $headers.="Reply-To".$email_to1."\r\n";
      $headers.= "\nMIME-Version: 1.0\n" ;	
      $headers = "Content-Type: text/html; charset-utf-8";
      $success= mail($email_to1, $email_subject, $message, $headers);  
      if(!$success){
        echo ("<SCRIPT LANGUAGE='JavaScript'>
	      window.alert('Something went wrong...')
        window.location.href='/contact'
        </SCRIPT>");
      }
      else{
        echo ("<SCRIPT LANGUAGE='JavaScript'>
        window.alert('Your email has been send successfully...')
        window.location.href='/contact'
        </SCRIPT>");
      }   
  }
?>
 
