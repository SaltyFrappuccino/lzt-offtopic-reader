import React, {useState} from 'react';
import Threads from "../../components/Threads/Threads";
import "./Index.css"

const Index = () => {

    const [full, setFull] = useState(false)
    const [page, setPage] = useState(0)
    const [token, setToken] = useState("627bf6906b2ea9fe26fecfd83f30c71027a32fe0")
    let toggle = false;

    function handleChange() {
        if(full === false) {
            setFull(true)
        }
        else {
            setFull(false)
        }
    }

    const pageP = () => {
        setPage(page + 1)
        console.log(page)
    }
    const pageM = () => {
        if(page >= 0) {
            setPage(page - 1)
            console.log(page)
        }
    }

    return (
        <div className="App">
            <span style={{fontSize: 48}}>LZT Offtopic Reader</span>
            <br/>
            By <a className={"disabled-link"} href={"https://lolz.guru/members/3842515/"}>Moruga</a> <br/>
            <input style={{margin: 10}} className={"token"} placeholder={"Enter your API token here"} onChange={e => {setToken(e.target.value);}}/> <br/>
            {/*<input onChange={handleChange} className={"fullCheckbox"} type="checkbox"/> */}
            <span className={"disabled-link"} onClick={handleChange}>Показывать сообщение поста полностью</span>
            <Threads token={token} page={page} full={full}/>
            <div className={"back"} onClick={pageM} style={{color: "#add8e6", fontSize: 24, marginBottom: 20, cursor: "pointer"}}>Назад</div>
            <div className={"back"} onClick={pageP} style={{color: "#add8e6", fontSize: 24, marginBottom: 20, cursor: "pointer"}}>Вперёд</div>
        </div>
    );
};

export default Index;