import {useState,useEffect} from "react";
import axios from "axios";

const Customer=()=>{
    const [data,setData]=useState([])
    useEffect(()=>{
     axios.get("https://assessment.api.vweb.app/users")
     .then((response)=>{
        setData(response.data);
        
     })
    },[])
    return data
};


const Products=()=>{
    const [data,setData]=useState([])
    useEffect(()=>{
     axios.get("https://assessment.api.vweb.app/products")
     .then((response)=>{
        setData(response.data);
        
     })
    },[])
    return data
};


const Orders=()=>{
    const [data,setData]=useState([])
    useEffect(()=>{
     axios.get("https://assessment.api.vweb.app/orders")
     .then((response)=>{
        setData(response.data);
        
     })
    },[])
    return data
};



export {Customer,Products,Orders};