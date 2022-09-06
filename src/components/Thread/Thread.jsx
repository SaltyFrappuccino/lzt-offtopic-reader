import React, {useEffect, useState} from 'react';
import "./Thread.css"
import {Link, useParams} from "react-router-dom";
import {default as axios} from "axios"

const Thread = () => {

    let {id} = useParams();

    const [post, setPost] = useState([])
    const [reloaded, setReloaded] = useState(false)
    const [token, setToken] = useState("627bf6906b2ea9fe26fecfd83f30c71027a32fe0")


    function getData() {
        axios.get("https://api.lolz.guru/threads/" + id,
            {
                headers: {
                    "Authorization": "Bearer " + token
                }
            }).then((resp) => {
                const new_post = [];
                new_post["thread_id"] = resp.data["thread"]["thread_id"];
                new_post["thread_title"] = resp.data["thread"]["thread_title"];
                new_post["thread_body"] = resp.data["thread"]["first_post"]["post_body_html"];
                setPost(new_post);
                return resp.data
            }
        )
            .catch((err) => {
                if(err['request']['status'] === 429 && reloaded === false) {
                    setTimeout(getData, 5000)
                    setReloaded(true)
                }
        })

    }

    // function postSet() {
    //     setResponse(getData)
    //     console.log(response)
    //     const new_post = [];
    //     new_post["thread_id"] = response["thread"]["thread_id"]
    //     new_post["thread_title"] = response["thread"]["thread_title"]
    //     new_post["thread_body"] = response["thread"]["first_post"]["post_body"]
    //     console.log(2)
    //     console.log(new_post)
    //     setPost(new_post)
    // }

    useEffect(getData, [token])

    let linked = "https://lolz.guru/threads/" + post['thread_id']

    return (
        <div className={"thread-content"}>
            <input className={"token"} style={{margin: 10}} placeholder={"Enter your API token here"} onChange={e => {setToken(e.target.value);}}/> <br/>
            <div className={"thread-id"}> id: <a className={"disabled-link"} href={linked}> {post['thread_id']} </a> </div>
            <div className={"thread-title"}> {post['thread_title']} </div> <br/>
            <div dangerouslySetInnerHTML={{__html: post['thread_body']}} className={"thread-body"}/> <br/>
            <Link to={""} className={"back"} style={{color: "#fff", textDecoration: "none", marginBottom: 10, fontSize: 24}}>Назад</Link>
        </div>
    );
};

export default Thread;