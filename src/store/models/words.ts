import axios from "axios";
import { action, Action, thunk, Thunk } from "easy-peasy";


export interface IWordData{
    id: number;
    word: string;
    pos: string;
}
export interface IWord {
    setWords: Action<IWord, IWordData[]>
    fetchWords: Thunk<this>
    todos: IWordData[];
 }
async function getWords(): Promise<IWordData[]>{
    const url = 'http://localhost:8000/api/words';
    const response = await axios.get<IWordData[]>(url);
    return response.data;
 }
const Words: IWord = {
    todos: [],
    fetchWords: thunk(async (actions) => {
     const words =  await getWords().then((response)=>actions.setWords(response));
     console.log(words)
    }),
    setWords: action((state, payload) => {
        state.todos = payload
  })
}
export default Words