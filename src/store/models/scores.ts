import axios from "axios";
import { action, Action, thunk, Thunk } from "easy-peasy";

export interface IRank{
    setRank: Action<IRank, number>
    setScore: Action<this, number>
    fetchRank: Thunk<this,number>
    todos: number;
    score: number;
}

async function getRank(score:number){  
    return axios.post('http://localhost:8000/api/scores', {
        score
    })
}

 const Rank: IRank = {
    todos: 0,
    score:0,
    fetchRank:thunk(async (actions, score: number) => {
        getRank(score).then((rank)=> {
            actions.setRank(rank.data);
            console.log(rank,'todos');
        })
      }),
    setScore: action((state, payload)=>{
        state.score = payload 
    }),
    setRank: action((state, payload) => {
        state.todos = payload
    })
}
export default Rank