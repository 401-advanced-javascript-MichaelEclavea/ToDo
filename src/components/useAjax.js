import Axios from 'axios';
import { useState } from 'react';


function useAjax(url){
    
    const [data, setData] = useState([]);

    async function fetchData(){
        let response = await Axios.get(url);
        setData(response.data.results);
    }
    return[
        data, 
        fetchData,
    ]
}

export default useAjax;