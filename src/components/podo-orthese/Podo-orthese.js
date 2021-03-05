// import styles from '../podo-orthese/Podo-orthese.module.scss';
import Banner from '../ui components/banner/Banner';
import SubList from '../sub-list/SubList';
// import {Route} from 'react-router-dom';


const PodoOrthese = ({match}) => {
  return (
    <div>
      <Banner match={match}/>
      <SubList match={match}/>
    </div>
   
  )
}

export default PodoOrthese