<?php
    $name=$_POST['name'];
    $email=$_POST['email'];
    $good_name=$_POST['good_name'];
    $to = "your email";
    $subject = "THeme";
    $message = "Your name is $name,Your email is $email, your good is $good_name!";
    mail ($to, $subject, $message);
    
    ?>