import React, {useEffect, useState} from 'react';
import "./Thread.css"
import {Link, useParams} from "react-router-dom";

const UseThread = ({id, title, body, full}) => {

    let linked = "https://lolz.guru/threads/" + id + "/"
    let post = "/thread/" + id;



    if(full === false && body) {
            body = body.slice(0, 100);
            }

    return (
        <div className={"thread-content"}>
            <hr></hr>
            <div className={"thread-id"}> id: <a href={linked} className={"disabled-link"}> {id} </a> </div>
            <div className={"thread-title"}> "{title}" </div> <br/>
            <div dangerouslySetInnerHTML={{__html: body}} className={"thread-body"}/> <br/>
            <Link style={{color: "#add8e6", float: "right"}} to={post}>Читать полностью</Link> <br/>

        </div>
    );
};

export default UseThread;