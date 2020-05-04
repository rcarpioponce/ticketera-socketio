var socket = io();
        
        
socket.on('connect', function(){
    console.log('conectado al servidor');
});

socket.on('disconnect', function(){
    console.log('Perdimos conexión con el servidor');
});

//enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Renzo',
    mensaje: 'Hola Mundo'
}, function(response){
    console.log('respuesta del server:', response);
});

// esucha informacion
socket.on('enviarMensaje', function(response){
    console.log('Servidor:', response);
});
