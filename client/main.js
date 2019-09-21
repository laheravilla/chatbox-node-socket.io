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
    document.getElementById('msgs').innerHTML = html;
}