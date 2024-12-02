 // Data login untuk validasi (bisa diubah sesuai kebutuhan)
 const validUsername = "admin";
 const validPassword = "123";

 function login() {
     const username = document.getElementById("username").value;
     const password = document.getElementById("password").value;
     const errorMessage = document.getElementById("error-message");

     // Cek username dan password
     if (username === validUsername && password === validPassword) {
         alert("Login berhasil!");
         window.location.href = "index.html"; // Alihkan ke halaman lain
     } else {
         errorMessage.style.display = "block"; // Tampilkan pesan error
     }
 }