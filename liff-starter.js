window.onload = function(e) {
    liff.init(function(data) {
        initializeApp(data);
    });
};

function initializeApp(data) {
    document.getElementById('sendmessagebutton').addEventListener('click', function() {
        //         var x;
        var msg = document.getElementById('bchcode').value;
        // /////////////////////////////////////////////////
        var xhttp = new XMLHttpRequest();

        var resultText = XMLHttpRequest.responseText;
        var x;
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
//                 x = xhttp.responseText;
                x = this.responseText; //เปลี่ยนจาก aleart เป็นรับค่าตัวแปรมา
            }
        };
        xhttp.open("POST", "https://stormy-spire-09445.herokuapp.com/liff", true);

        xhttp.setRequestHeader("Content-Type", "application/json");
        xhttp.send()
        return x;


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
