function SendMail() {
    var params = {
        from_name : document.getElementById("Fullname").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_i8dh3eg","template_67v7x5d", params).then(function (res) {
        alert('Success',res.status);
      });

}