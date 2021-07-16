import React from 'react';
import { FaTimes, FaRegCircle ,FaEarlybirds } from "react-icons/fa";


const Icons= (props) =>{

        switch(props.choice)
        {
            case "cross" : return <FaTimes className="icon"/>

            case "circle" : return <FaRegCircle className="icon"/>
            
            default:return <></>

        }
}

export default Icons;