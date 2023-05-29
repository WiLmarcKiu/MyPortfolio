<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

if (isset($_POST['kirim_email'])) {
    $nama = $_POST['nama'];
    $email = $_POST['email'];
    $subjek = $_POST['subjek'];
    $pesan = $_POST['pesan'];


    try {
        $mail = new PHPMailer(true);

        // SMTP Settings
        $mail->SMTPDebug = 2;
        $mail->isSMTP();
        $mail->Host = "smtp.gmail.com";
        $mail->SMTPAuth = true;
        $mail->Username = "kiuwilmarc@gmail.com";
        $mail->Password = "isvyvczodxgilevs";
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587; //465
        // $mail->SMTPSecure = "ssl"; //tls

        // EMAIL Settings
        // $mail->setFrom("kiuwilmarc@gmail.com");
        $mail->setFrom($email, $nama);
        $mail->addAddress("kiuwilmarc@gmail.com");
        $mail->isHTML(true);
        $mail->Subject = $subjek;
        $mail->Body = "<h5>Nama : $nama <br>Email : $email<br> Pesan : $pesan</h5>";

        $mail->send();
        echo "<script>alert('Terima kasih sudah menghubungi saya.');</script>";
        echo '<script>location="index.php"</script>';
    } catch (Exception $e) {
        echo "<script>alert('Ada yang salah! Silakan coba lagi.');</script>";
    }
}
