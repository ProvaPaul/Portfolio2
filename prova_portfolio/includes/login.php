<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Panel Login</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
        }
        .login-container {
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            width: 300px;
        }

        .login-container h2 {
            text-align: center;
            color: #333;
        }
        

        form {
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            width: 300px;
            margin: auto; /* Center the form */
        }

        label {
            display: block;
            margin-bottom: 8px;
            color: #555;
        }

        input {
            width: 100%;
            padding: 8px;
            box-sizing: border-box;
            border: 1px solid #ccc;
            border-radius: 4px;
            margin-bottom: 15px;
        }

        input[type="submit"] {
            width: 100%;
            padding: 10px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
    </style>
</head>
<body>
<div class="login-container">

    <h2>Admin Panel Login</h2>
    <form method="post" action="admin_panel.php">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
        
        <input type="submit" name="login" value="Login">
    </form>
    </div>
</body>
</html>

<?php
session_start(); // Start the session

// Check if form is submitted
if (isset($_POST['login'])) {
    // Check if email and password match
    if ($_POST['email'] === 'prova123@gmail.com' && $_POST['password'] === '123') {
        // Set session variable to indicate user is logged in
        $_SESSION['loggedin'] = true;

        // Set cookies for email and password
        $email = $_POST['email'];
        $password = $_POST['password'];
        setcookie('user_email', $email, time() + (86400 * 30), "/"); // Cookie lasts for 30 days
        setcookie('user_password', $password, time() + (86400 * 30), "/"); // Cookie lasts for 30 days

        // Redirect to CRUD page
        header('Location: admin_panel.php');
        exit;
    } else {
        // Display error message
        echo "Invalid email or password. Please try again.";
    }
}
?>
