import React from "react";
import { Button } from 'react-bootstrap';

export default function Saludar (props) {
    const { userInfo, saludarFn} = props;
    const { name = "" } =userInfo

    console.log (userInfo)
    return (
        <div>
           <Button variant="outline-dark" onClick={() => saludarFn(name)}>Saludar</Button>
        </div>
    )
}