window.onload = function(e) {
    liff.init(function(data) {
        initializeApp(data);
    });
};

function initializeApp(data) {
    document.getElementById('sendmessagebutton').addEventListener('click', function() {
        var msg = document.getElementById('bchcode').value;
        // /////////////////////////////////////////////////
            function ReplyMessage() {
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        alert(this.responseText);
                    }
                };
                var x 
                xhttp.open("POST", "https://stormy-spire-09445.herokuapp.com/liff", true);
                xhttp.setRequestHeader("Content-Type", "application/json");
                xhttp.send('x':0000)
            }




        liff.sendMessages([{
            type: 'text',
            text: x
        }]).then(function() {
            liff.closeWindow();
        }).catch(function(error) {
            window.alert("Error sending message: " + error);
        });
    });
}
