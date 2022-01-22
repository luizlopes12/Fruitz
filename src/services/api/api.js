import axios from 'axios';
const url = 'https://www.fruityvice.com/api/fruit/all'
const getData = () =>{
    axios.get(url)
    .then(response =>{
    return(
        response
        )
    }).catch(error => console.log(error))
}


export default getData;
