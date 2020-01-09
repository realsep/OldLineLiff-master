window.onload = function(e) {
    liff.init(function(data) {
        initializeApp(data);
    });
};

function initializeApp(data) {
    document.getElementById('sendmessagebutton').addEventListener('click', function() {
        var msg = document.getElementById('bchcode').value;
        request.open('GET', 'https://stormy-spire-09445.herokuapp.com/liff', true)

        request.onload = function () {
            var xxx = request.responseText;
        }



        liff.sendMessages([{
            type: 'text',
            text: msg
        }]).then(function() {
            liff.closeWindow();
        }).catch(function(error) {
            window.alert("Error sending message: " + error);
        });
    });
}
