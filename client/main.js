// Forzar conexion a url de mi socket
var socket = io.connect('http://192.168.0.47:6677', {'forceNew':true}); 

socket.on('messages', function (data) {
    console.log(data);
    render(data);
});

function render (data) {
    var html = data.map(function (message, index) {
        return (`
            <div class='msg'>
                <strong>${message.nickname}</strong>
                <p>${message.text}</p>
            </div>
        `);
    }).join(' ');
    var divMsgs = document.getElementById('msgs');
    divMsgs.innerHTML = html;
    divMsgs.scrollTop = divMsgs.scrollHeight; // Fijar foco sobre ultimo mensaje
}

function addMessage(e) {
    var nickname = document.getElementById('nickname');
    var text = document.getElementById('text');

    var message = {
        nickname: nickname.value,
        text: text.value
    };

    nickname.style.display = 'none';
    socket.emit('add-message', message);

    return false; // To drop execution
}