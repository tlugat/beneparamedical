import {Route} from 'react-router-dom';

// import styles from '../podo-orthese/Podo-orthese.module.scss';

import Banner from '../ui components/banner/Banner';
import SubList from '../sub-list/SubList';
import Realisation from './realisation/Realisation';
import Item from './item/Item';

const PodoOrthese = ({match}) => {
  return (
    <div>
      <Banner match={match}/>
      <SubList match={match}/>
      <Route path={match.url + '/chaussures-orthopediques'} component={Item}/>
      <Route path={match.url + '/ortheses-plantaires'} component={Item}/>
      <Route path={match.url + '/appareil-podo-jambier'} component={Item}/>
      <Route path={match.url + '/chaussures-therapeutiques'} component={Item}/>
      <Route path={match.url + '/reparations'} component={Item}/>
      <Route path={match.url + '/pneumaflex'} component={Item}/>
      <Route path={match.url + '/outils-diagnostic-et-production'} component={Item}/>
      <Realisation/>
    </div>
   
  )
}

export default PodoOrthese