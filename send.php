<?php 
if(isset($_POST['submit'])){
    $to = "sebastiantyda@gmail.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $name = $_POST['name'];
    $subject = "Formularz";
    $subject2 = "Kopia formularza";
    $message = $name . " napisał/a:" . "\n\n" . $_POST['message'];
    $message2 = "Kopia twojej wiadomości: " . $name . "\n\n" . $_POST['message'];

    $headers = "Od:" . $from;
    $headers2 = "Od:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    echo "Wiadomość wysłana. " . $name . ", wkróce się odezwę.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    // You cannot use header and echo together. It's one or the other.
    }
?>