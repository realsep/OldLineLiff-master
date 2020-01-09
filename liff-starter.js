window.onload = function(e) {
    liff.init(function(data) {
        initializeApp(data);
    });
};

function initializeApp(data) {
    document.getElementById('sendmessagebutton').addEventListener('click', function() {
        var msg = document.getElementById('bchcode').value;
        // /////////////////////////////////////////////////
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    alert(this.responseText);
                }
            };
            // var x = 
            xhttp.open("POST", "https://stormy-spire-09445.herokuapp.com/liff", true);
            xhttp.setRequestHeader("Content-Type", "application/json");
            xhttp.send("test")
        

        liff.sendMessages([{
            type: 'text',
            text: xhttp
        }]).then(function() {
            liff.closeWindow();
        }).catch(function(error) {
            window.alert("Error sending message: " + error);
        });
    });
}
