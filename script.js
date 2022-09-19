function SendMail() {
    var params = {
        from_name : document.getElementById("Fullname").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value,
        number : document.getElementById("number").value
    }
    emailjs.send("service_i8dh3eg","template_67v7x5d", params).then(function(response) 
    {
        console.log('SUCCESS!', response.status, response.text);
     }, function(error) {
        console.log('FAILED...', error);
     });

}