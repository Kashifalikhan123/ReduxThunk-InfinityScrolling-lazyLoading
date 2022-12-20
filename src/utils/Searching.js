import API,{headers} from '../Constant/Api';
import { toast } from "react-toastify";
import axios from 'axios';
export default async function Searching(data) {
   const results = await axios.get(`${API.SEARCH}?q=Apple&from=${data.date}&countries=${data.country}&page_size=${data.pageSize}`,{headers})
    .then(response =>  { return response})
    .catch(error => {
        toast.error(error)
        console.error('There was an error!', error);
    });
    return results.data
}

