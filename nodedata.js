const https=require('https');
// const external_api='https://jsonplaceholder.typicode.com/posts';
// const external_api='https://www.google.com';
//const external_api='https://www.linkedin.com';
// const external_api='https://chat.openai.com';
  //const external_api='https://www.instagram.com/';
  //const external_api='https://openai.com/blog/chatgpt';
  const external_api='https://www.youtube.com/';

const callfromHttp=(callback)=>{
    https.get(external_api,(resp)=>{
        let data='';
        resp.on('data',(chunk)=>{
            data+=chunk
        })

        resp.on('end',()=>{
            return callback(data)
        })
    }).on('error',(err)=>{
        console.log(err);
    })
}

module.exports.callApi=callfromHttp