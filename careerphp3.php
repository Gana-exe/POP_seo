<?php
	error_reporting(E_ERROR);
	
	if(isset($_POST['tech_submit3'])) 
	{
        
    
        $email_from = $_POST['tech_email3']; // required
        
        
		$tech_file=$_POST['tech_file3'];
		
		$upload_file=$_FILES['tech_file3']['name'];
	 	$files=$_FILES['tech_file3']['tmp_name'];
	 
	 $from = "Pointonepromotions";
			
			$headers = "From: $from";	
		$id = 'careers@pointonepromotions.com.test-google-a.com';
$html = '<html>
<body style="width:100%; font-family:Arial; font-size:13px; line-height:22px; background:#fff;  position:relative;color:#555555; margin:0px; padding:0px;">    
<div style="margin:0 auto; width:600px;">
        <div style="background:#fff; width:594px; float:left; padding:0px 3px 3px 3px;">
          <div style="padding:27px; width:540px; float:left;text-align:center;">
                <a href="https://pointonepromotions.com/" target="_blank">
                     <img src="https://raw.githubusercontent.com/Gana-exe/popasset/master/images/POPGradient-logo.webp" alt="POP logo"/ style="width:100px" >
                </a>
            </div>
            <div style="background:#fff; padding:44px 34px; width:526px; float:left;">
                
                    <tr style="margin-bottom:5px; width:100%; float:left; border-bottom:#fff 1px solid;">
                      <td style=" padding:5px; width:120px;float:left;"><b>Email</b></td>
                        <td style="  float:left; padding:5px;text-decoration:none;color:#000;">&nbsp; '.$_POST['tech_email3'].'</td>
                    </tr>
    
                </table>
            </div>
        </div>
    </div>
    </body>
    </html>';
               
        
$email = $id;
$subject = "Spendthrift Contact Form";
$message = $html;


// boundary
			$time = md5(time());
			$boundary = "==Multipart_Boundary_x{$time}x";

			// headers used for send attachment with email
			$headers .= "\nMIME-Version: 1.0\n" . "Content-Type: multipart/mixed;\n" . " boundary=\"{$boundary}\"";

			// multipart boundary
			$message = "--{$boundary}\n" . "Content-Type: text/html; charset=\"iso-8859-1\"\n" . "Content-Transfer-Encoding: 7bit\n\n" . $message . "\n\n";
			$message .= "--{$boundary}\n";

			// attach the attachments to the message
			//for($x=0; $x<$count_tmpfile; $x++){
				$file = fopen($files,"r");
				$content = fread($file,filesize($files));
				fclose($file);
				if(filesize($files) > 0)
				{
				$content = chunk_split(base64_encode($content));
				$message .= "Content-Type: {\"application/octet-stream\"};\n" . " name=\"$files\"\n" .
					"Content-Disposition: attachment;\n" . " filename=\"$upload_file\"\n" .
					"Content-Transfer-Encoding: base64\n\n" . $content . "\n\n";
				$message .= "--{$boundary}\n";
				}



$mailsent = mail($email,$subject,$message,$headers);
		if($mailsent)
				{
				echo ("<SCRIPT LANGUAGE='JavaScript'>
	window.alert('Your email has been send successfully...')
    window.location.href='/careers'
    </SCRIPT>");
    }
	}
	?>