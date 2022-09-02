import React, {useEffect, useState} from 'react';
import "./Threads.css"
import {Link} from "react-router-dom";
import {default as axios} from "axios"
import UseThread from "../Thread/UseThread";

const Threads = ({full, page, token}) => {

    const [posts, setPosts] = useState([{}])
    const [reloaded, setReloaded] = useState(false)

    function getData() {
        axios.get("https://api.lolz.guru/threads?forum_id=8&sticky=0&page=" + page,
            {
                headers: {
                    "Authorization": "Bearer " + token
                }
            }).then((resp) => {
            let new_posts = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [],]
            for (let i = 0; i < 20; i++) {

                new_posts[i]['thread_id'] = resp.data['threads'][i]['thread_id']
                new_posts[i]['thread_body'] = resp.data['threads'][i]['first_post']['post_body_html']
                new_posts[i]['thread_title'] = resp.data['threads'][i]['thread_title']

            }
            setPosts(new_posts)
            return resp.data
        }).catch((err) => {
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

    useEffect(getData, [token, page])

    // let linked = "https://lolz.guru/threads/" + post['thread_id']

    return (
        <div className={"thread-content"}>

            {posts.map((post) => {
                return(
                    <UseThread key={post.thread_id} id={post.thread_id} title={post.thread_title} full={full} body={post.thread_body}/>
                )
            })}

            {/*<div className={"thread-id"}> id: <a className={"disabled-link"} href={linked}> {post['thread_id']} </a> </div>*/}
            {/*<div className={"thread-title"}> {post['thread_title']} </div> <br/>*/}
            {/*<div dangerouslySetInnerHTML={{__html: post['thread_body']}} className={"thread-body"}/> <br/>*/}
            {/*<Link to={""} style={{color: "#fff", textDecoration: "none", marginBottom: 10}}>Назад</Link>*/}
        </div>
    );
};

export default Threads;