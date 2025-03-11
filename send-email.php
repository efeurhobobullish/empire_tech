<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
?>

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $phone = htmlspecialchars($_POST["phone"]);
    $subject = htmlspecialchars($_POST["subject"]);
    $message = htmlspecialchars($_POST["message"]);

    $to = "efeurhobobullish@gmail.com";  // Replace with your email
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $fullMessage = "Name: $name\nEmail: $email\nPhone: $phone\nSubject: $subject\n\nMessage:\n$message";

    if (mail($to, $subject, $fullMessage, $headers)) {
        echo "<script>alert('Message sent successfully!'); window.location.href='index.html';</script>";
    } else {
        echo "<script>alert('Failed to send message. Please check your hosting email settings.'); window.location.href='index.html';</script>";
    }
} else {
    echo "<script>alert('Invalid Request!'); window.location.href='index.html';</script>";
}
?>