import React, {useEffect, useState} from 'react';
import "./Thread.css"
import {Link, useParams} from "react-router-dom";

const UseThread = ({id, title, body}) => {

    let linked = "https://lolz.guru/threads/" + id + "/"

    return (
        <div className={"thread-content"}>
            <div className={"thread-id"}> id: <a href={linked} className={"disabled-link"}> {id} </a> </div>
            <div className={"thread-title"}> {title} </div> <br/>
            <div dangerouslySetInnerHTML={{__html: body}} className={"thread-body"}/> <br/>
        </div>
    );
};

export default UseThread;