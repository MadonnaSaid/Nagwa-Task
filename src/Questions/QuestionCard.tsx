import Button from "@mui/material/Button";
import axios from "axios";
import { useEffect, useState } from "react";
import { useStoreActions,useStoreState } from "../store/hooks";

interface IWordProp {
    word: string;
    pos: string;
}

function QuestionCard({word = '', pos=''}:IWordProp) {
    const [selectedButton, setSelectedButton] = useState('') 
    const [disabled, setDisabled] = useState(false)
    const setScore = useStoreActions((action) => action.Rank.setScore);
    let score = useStoreState((state)=>state.Rank.score)
    let count = 0;
              

    let a = [{ id: 1, type:'adverb'  }, { id: 2, type:'adjective' }, { id: 3, type:'verb' }, { id: 4, type:'noun' }];
    function handleRegionClick(type: string){
        setSelectedButton(type)
        setDisabled(true)
        if(type == pos){
          setScore(score+10)
        } 
      }

    return ( 
    <div className="m-10 text-center text-3xl font-semibold">
        <h1>Which part of speech is the word "{`${word}`}"?</h1>
       { a.map((item, index) => {return <div className="p-8" key={index}><Button 
       style={{width: '20%', backgroundColor: item.type == selectedButton && selectedButton == pos ? 'green' : '' || item.type == selectedButton && selectedButton != pos ? 'red' : '' }} 
       variant="outlined" disabled={disabled} color='warning' onClick={() => handleRegionClick(item.type) }>{item.type}</Button></div>})} 
    </div> );
}

export default QuestionCard;