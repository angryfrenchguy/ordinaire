<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require '../vendor/autoload.php';

$json = json_decode($_POST[data], true);

// echo $json_a['a'];
// echo $json['email'];

$doc = $json['pdf'];
$courriel = $json['email'];
$contrat = $json['contrat'];
$titre = $json['titre'];

$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
try {
    //Server settings
    $mail->SMTPDebug = 2;                                 // Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'mail.net-c.com';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'general@netc.fr';                 // SMTP username
    $mail->Password = 'bTaxbfkj3cdBt9ApABNZ';                           // SMTP password
    $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 587;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('general@netc.fr', 'Autobus');
    $mail->addAddress($courriel);     // Add a recipient
    // $mail->addAddress('ellen@example.com');               // Name is optional
    $mail->addReplyTo('general@netc.fr', 'email du boss');
    // $mail->addCC('cc@example.com');
    // $mail->addBCC('bcc@example.com');

    //Attachments
    $base = explode('data:application/pdf;base64,', $_POST['data']);
    $base = base64_decode($base[1]);
    $mail->addStringAttachment($base, 'autorisation.pdf');
    // $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = $titre . ' ' . $contrat;
    $mail->Body    = $titre;
    $mail->AltBody = $titre;

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
  };
