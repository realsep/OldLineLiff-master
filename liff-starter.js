window.onload = function(e) {
    liff.init(function(data) {
        initializeApp(data);
    });
};

function initializeApp(data) {
    document.getElementById('sendmessagebutton').addEventListener('click', function() {
        var msg_code = document.getElementById('bchcode').value;
        var msg_start = document.getElementById('date_start').value;
        var msg_stop = document.getElementById('date_stop').value;




        liff.sendMessages([{
            type: 'text',
            text: msg_code,
            text: msg_start,
            text: msg_stop
        }]).then(function() {
            liff.closeWindow();
        }).catch(function(error) {
            window.alert("Error sending message: " + error);
        });
    });
}
