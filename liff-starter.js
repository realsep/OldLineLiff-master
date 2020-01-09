window.onload = function(e) {
    liff.init(function(data) {
        initializeApp(data);
    });
};

function initializeApp(data) {
    document.getElementById('sendmessagebutton').addEventListener('click', function() {
        var msg = document.getElementById('bchcode').value;
        var msg1 = document.getElementById('date_start').value;
        var msg2 = document.getElementById('date_stop').value;




        liff.sendMessages([{
            type: 'text',
            text: msg,
            type: 'text',
            text: 'msg1',
            type: 'text',
            text: 'msg2'
        }]).then(function() {
            liff.closeWindow();
        }).catch(function(error) {
            window.alert("Error sending message: " + error);
        });
    });
}
