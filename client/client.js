const net = require('net');
const rl = require('readline-sync')

const options = {
    port: 4000,
    host: '127.0.0.1'
}

const cliente = net.createConnection(options);

cliente.on('connect', ()=>{
    console.log('Conexion exitosa')
    sendline()
})

cliente.on('data', (data)=>{
    console.log('tu mama dice:' + data)
    sendline();
})

cliente.on('error', (err)=>{
    console.log(err.message)
})

function sendline(){
    let line = rl.question('\ndigite algo\t')
    if(line == "0"){
        cliente.end();
    }else{
        cliente.write(line)
    }
}