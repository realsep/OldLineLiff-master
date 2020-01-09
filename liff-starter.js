window.onload = function (e) {
    liff.init(function (data) {
        initializeApp(data);
    });
};

function initializeApp(data) {
    document.getElementById('sendmessagebutton').addEventListener('click', function () {
        var msg = document.getElementById('bchcode').value;
        
        
        
        
        liff.sendMessages([{
            type: 'text',
            text: msg
        }
          ]).then(function () {
            liff.closeWindow();
        }).catch(function (error) {
            window.alert("Error sending message: " + error);
        });
    });
}
