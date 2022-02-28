//API
const api="UPUa8w6i2x8l2WBJDQY12apf287JW5KM";

const getCity=async(city)=>{
    const baseURL="http://dataservice.accuweather.com/locations/v1/cities/search";
    const query=`?apikey=${api}&q=${city}`;
    const response=await fetch(baseURL + query);
    const data =await response.json();   
    console.log(data); 
    return data[0];
}



const getWeather=async(id)=>{
    const baseURL="http://dataservice.accuweather.com/currentconditions/v1/";
    const query=`${id}?apikey=${api}`;
    const response=await fetch(baseURL + query);
    const data =await response.json();   
    console.log(data); 
    return data[0];
    
}
/*getCity('Lahore')
    .then(data=>{
        return getWeather(data.Key)

    }).then(data=>{
        console.log(data)
    }).catch(err=>console.log(err))*/

//export { getCity,getWeather };