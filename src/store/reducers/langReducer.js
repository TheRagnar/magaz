import { SELECT_LANG } from '../types/langTypes';
import RU from '../../lang/RU';
import EN from '../../lang/EN';

const initState = {
  currentLang: 'RU',
  data: RU
}



const lang = (state = initState, action)=>{
  return state;
}

export default lang