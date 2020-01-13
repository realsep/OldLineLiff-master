window.onload = function(e) {
    // liff.init(function(data) {
    initializeApp();
    // });
};

function initializeApp() {
    document.getElementById('sendmessagebutton').addEventListener('click', function() {
        var x = ('1');
        var msg = document.getElementById('bchcode').value;

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    x = this.responseText;
                liff.sendMessages([{
                type: 'text',
                text: x
            }]).then(function() {
                liff.closeWindow();
            }).catch(function(error) {
                window.alert("Error sending message: " + error);
            });
                    

                };
                xhttp.open("POST", "https://stormy-spire-09445.herokuapp.com/liff", true);
                xhttp.setRequestHeader("Content-Type", "application/json");
                xhttp.send();
                return x;

            }
//             liff.sendMessages([{
//                 type: 'text',
//                 text: x
//             }]).then(function() {
//                 liff.closeWindow();
//             }).catch(function(error) {
//                 window.alert("Error sending message: " + error);
//             });
    });
