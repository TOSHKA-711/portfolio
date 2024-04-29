<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Email information
    $to = "aliovich711@gmail.com"; // Change this to your email address
    $subject = "New Contact Form portfolio";
    $body = "Name: $name\nEmail: $email\nMessage: $message";

    // Send email
    if (mail($to, $subject, $body)) {
        echo "Your message has been sent successfully!";
    } else {
        echo "Oops! Something went wrong.";
    }
}

?>
