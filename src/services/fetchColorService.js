import {axiosWithAuth} from '../helpers/axiosWithAuth';
import React, { useEffect } from "react";

const fetchColorService = () => {
    return axiosWithAuth().get("http://localhost:5000/api/colors")
}


export default fetchColorService;

//In `services/fetchColorServices.js`, build out fetchColorService function 
//to make a GET request to fetch the color data for your bubbles.