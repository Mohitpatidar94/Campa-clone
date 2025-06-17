<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "mohitpatidar6360@gmail.com";
    $subject = "New Contact Form Submission";
    $name = $_POST["name"];
    $email = $_POST["email"];
    $number = $_POST["number"];
    $message = "Name: $name\nEmail: $email\nNumber: $number";
    $headers = "From: $email";

    mail($to, $subject, $message, $headers);
    header("Location: thank-you.html");
    exit();
}
?>