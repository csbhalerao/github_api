import axios from 'axios';

export function loadProfile(){
    return (dipatch) => {
         return axios.get("https://api.github.com/users/csbhalerao").then((response) => {
             /* //const content = response.json()
             const content = JSON.parse(response)
             console.dir(content) */
             console.log("at action:"+response.data)
             dipatch(profileSuccess(response.data))
         })   
    }
}

export function profileSuccess(data){
    return {
        type: "profile_success",
        data: data
    }
}