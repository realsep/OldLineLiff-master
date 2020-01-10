window.onload = function(e) {
    liff.init(function(data) {
        initializeApp(data);
    });
};

function initializeApp(data) {
    document.getElementById('sendmessagebutton').addEventListener('click', function() {
        var msg = document.getElementById('bchcode').value;

        var HttpClient = function () {
            this.get = function (aUrl, aCallback) {
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (xhttp.readyState == 4 && xhttp.status == 200)
                    aCallback(xhttp.responseText);

                }
                xhttp.open("POST", aUrl, true);
                xhttp.send(null)
            }
        }
        var theurl = 'https://stormy-spire-09445.herokuapp.com/liff';
        var client = new HttpClient();
        client.get(theurl, function (res){
            var x = JSON.parse(res);
        });






//////////////////////////////////////////////////////
    //     var xhttp = new XMLHttpRequest();
    //     var resultText = XMLHttpRequest.responseText;
    //     this.post = function(aUrl, aCallback){
    //     xhttp.onreadystatechange = function() {
        
    //         if (this.readyState == 4 && this.status == 200) {
    //             aCallback(xhttp.responseText);
    //             // var jsonResponse = JSON.parse(x);
    //             // x = (res).responseText;
    //             // return x;

    //         };
    //         xhttp.open("POST", "https://stormy-spire-09445.herokuapp.com/liff", true);
    //         xhttp.setRequestHeader("Content-Type", "application/json");
    //         xhttp.send(null);
    //     }
    // }

        // var x;
        // var msg = document.getElementById('bchcode').value;
        // // /////////////////////////////////////////////////
        // var xhttp = new XMLHttpRequest();
        // //         var x = xhttp.responseText;
        //          var jsonResponse = JSON.parse(res);
        // // var resultText = XMLHttpRequest.responseText;

        // xhttp.onreadystatechange = function() {
        //     if (this.readyState == 4 && this.status == 200) {
        //         //   x = xhttp.responseText;
        //         //           document.getElementById('regisbox').innerHTML = this.responseText;
        //         var x = xhttp.responseText;
        //         var jsonResponse = JSON.parse(x);
        //         //                 x = this.responseText; //เปลี่ยนจาก aleart เป็นรับค่าตัวแปรมา
        //         x = xhttp.responseText;
        //     }
        // };
        // xhttp.open("POST", "https://stormy-spire-09445.herokuapp.com/liff", true);
        // //         xhttp.responseType = ('json');

        // xhttp.setRequestHeader("Content-Type", "application/json");
        // xhttp.send(null)
        // console.log(request.getResponseHeader('content-type'));


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
