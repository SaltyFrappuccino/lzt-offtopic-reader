import React, {useState} from 'react';
import Threads from "../../components/Threads/Threads";

const Index = () => {

    const [full, setFull] = useState(false)
    const [page, setPage] = useState(0)

    const handleChange = event => {
        if (event.target.checked) {
            setFull(true)
        } else {
            setFull(false)
        }
    };

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
            <input onChange={handleChange} className={"fullCheckbox"} type="checkbox"/> Показывать сообщение поста полностью
            <Threads page={page} full={full}/>
            <div onClick={pageM} style={{color: "#add8e6", fontSize: 24, marginBottom: 20, cursor: "pointer"}}>Назад</div>
            <div onClick={pageP} style={{color: "#add8e6", fontSize: 24, marginBottom: 20, cursor: "pointer"}}>Вперёд</div>
        </div>
    );
};

export default Index;