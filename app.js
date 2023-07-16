const callfromHttp=require('./nodedata')
const callfromRequest=require('./request')

const http=require('http')

http.createServer((req,res)=>{
    if(req.url==='/request'){
        callfromRequest.callApi(function(response){
            res.write(JSON.stringify(response))
            res.end()
        })
    }
    else if(req.url==='/node'){
        callfromHttp.callApi(function(response){
            res.write(response);
            res.end()
        })
    }
}).listen(4500,()=>{
    console.log('server is listening');
})