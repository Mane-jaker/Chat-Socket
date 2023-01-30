const net = require('net');

const server = net.createServer();

server.on('connection', (socket)=>{
    socket.on('data', (data)=>{
        console.log('mensaje recibido desde el cliente:' + data)
        socket.write('Recibido')
    });

    socket.on('close', ()=>{
        console.log('comunicacion finalizada')
    })

    socket.on('error', (err)=>{
        console.log(err.message)
    })
});

server.listen(4000, () =>{
    console.log('El server escucha en la puerta', server.address().port);
});