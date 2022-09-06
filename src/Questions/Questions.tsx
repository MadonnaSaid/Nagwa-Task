import { useEffect } from "react";
import { useStoreState, useStoreActions } from "../store/hooks";
import QuestionCard from "./QuestionCard";
import Button from "@mui/material/Button";
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';

const Questions = () => {
    const wordsList = useStoreState((store) => store.Words.todos)
    const fetchWords = useStoreActions((action) => action.Words.fetchWords);
    const score = useStoreState((state)=>state.Rank.score)
    const fetchRank = useStoreActions((action)=>action.Rank.fetchRank)
    const Rank = useStoreState((state)=> state.Rank.todos)

 useEffect(()=>{
    fetchWords();
    fetchRank(score)
    },[]);
    return ( <div>
        {wordsList.map((item) => <QuestionCard word={item.word} pos={item.pos}/> )}
        <div className="p-20 text-right"><Button onClick={()=>alert("your final rank is " + Rank)} startIcon={<DoneOutlineIcon/>} color='success' variant='outlined' style={{width: '20%'}}>Submit All</Button></div>
    </div> );
}

export default Questions;