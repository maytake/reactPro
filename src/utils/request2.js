import fetch from 'dva/fetch';


function checkStatus(response) {
  // 如果http状态码正常，则直接返回数据
    if (response && (response.status >= 200 && response.status < 300)) {
        var type = response.headers.get('Content-Type').split(";")[0];
        switch (type) {  
            case 'text/html':  
                return response.text();  
                break  
            case 'application/json':  
                return response.json();  
                break  
            default:  
        }  
        // return response.data
    }
    if(response && response.status===401){
    

    }
    // 异常状态下，把错误信息返回去
    return {
        status: -404,
        msg: '网络异常'
    }

}
function checkCode(res) {
    // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户 
    return res
}
export function $post(url, params) {
    return  fetch(url,{
        credentials: 'include',
        method: 'POST',
        body:JSON.stringify(params),
        mode:'cors',
        cache: 'default',
        timeout: 20000,
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        }
    }).then(
        (response) => {
            return checkStatus(response)
        }).catch(
        (res) => {
            return checkCode()
        })
      
}
export function $get(url, params) {
    if(params){
        var body="";
        var index=0;
        var len=Object.keys(params).length;
        for(let i in params){
            if(len-1==index){
                body+=i+'='+encodeURIComponent(params[i])
            }else{
                body+=i+'='+encodeURIComponent(params[i])+'&'
            }
            index++
        }
        url=url+'?'+body
    }
    return  fetch(url,{
        credentials: 'include',
        method: 'GET',
        mode: "cors",
        cache: 'default',
        timeout: 20000,
    }).then(
        (response) => {
            return checkStatus(response)
        }).catch(
        (res) => {
            return checkCode()
        })
    
}
