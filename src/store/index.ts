import Rank, { IRank } from "./models/scores"
import Words, {IWord} from "./models/words"
export interface IStoreModel {
    Words: IWord
    Rank:IRank
}

const storeModel:IStoreModel ={
    Words,
    Rank
}


export default storeModel