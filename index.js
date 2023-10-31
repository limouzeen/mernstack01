const http = require('http');

const PORT = 3000


//creat web server
const server = http.createServer((request, response)=>{
    if(request.url == '/'){
        response.writeHead(200,{'content-type' : 'text/html'})
        response.write('<h1> Home Page </h1> Hello')
        response.end()
    }else if(request.url == '/product'){
        response.writeHead(200,{'content-type' : 'text/html'})
        response.write('<h1> Product Page </h1> Product')
        response.end()
    }else if(request.url == '/about'){
        response.writeHead(200,{'content-type' : 'text/html'})
        response.write('<h1> About Page </h1> About')
        response.end()
    }else{
        response.writeHead(200,{'content-type' : 'text/html'})
        response.write('<h1> File not found </h1> =..=;;;')
        response.end()
    }
})

//สั่ง Server  Start และคอยรับ request จาก user พร้อมกับแสดงสถานะการทำงาน server
server.listen(PORT, ()=>{
    console.log('Server running on port 3000.......^O^');
})