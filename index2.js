const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000


//creat web server
const server = http.createServer((request, response)=>{
    if(request.url == '/'){
        getPage(response, 'home.html')
    }else if(request.url == '/product'){
        getPage(response, 'product.html')
    }else if(request.url == '/about'){
        getPage(response, 'about.html')
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



// สร้าง function ในการเรีนกหน้าเพจขึ้นมา

function getPage(respond, pageFile){

    respond.writeHead(200, {'context-type' : 'text/html'})

        fs.readFile(
            path.join(__dirname,'views', pageFile),
            function(err, data){
                if (err) throw err
                respond.write(data)
                respond.end()
            }
            
            
            )
    }

