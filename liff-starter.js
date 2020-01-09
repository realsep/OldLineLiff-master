window.onload = function(e) {
    liff.init(function(data) {
        initializeApp(data);
    });
};

function initializeApp(data) {
    document.getElementById('sendmessagebutton').addEventListener('click', function() {
        var x;
        var msg = document.getElementById('bchcode').value;
        // /////////////////////////////////////////////////
        // var xhttp = new XMLHttpRequest();
        // //         var x = xhttp.responseText;
        // //         var jsonResponse = JSON.parse(x);
        // // var resultText = XMLHttpRequest.responseText;

        // xhttp.onreadystatechange = function() {
        //     if (this.readyState == 4 && this.status == 200) {
        //         //   x = xhttp.responseText;
        // //           document.getElementById('regisbox').innerHTML = this.responseText;
        //         var x = xhttp.responseText;
        //         var jsonResponse = JSON.parse(x);
        // //                 x = this.responseText; //เปลี่ยนจาก aleart เป็นรับค่าตัวแปรมา
        //         x = xhttp.responseText;
        //     }
        // };
        // xhttp.open("POST", "https://stormy-spire-09445.herokuapp.com/liff", true);
        // //         xhttp.responseType = ('json');

        // xhttp.setRequestHeader("Content-Type", "application/json");
        // xhttp.send(null)
        // console.log(request.getResponseHeader('content-type'));

        var req = new XMLHttpRequest();
        req.onreadystatechange = function(e) {
            if (req.readyState == req.DONE && req.status == 200) {
                x = console.log(JSON.parse(this.responseText));
            }
        };
        req.open("POST", "https://stormy-spire-09445.herokuapp.com/liff");
        req.send();



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
