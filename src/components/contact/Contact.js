import {NavLink, Route} from 'react-router-dom';

import Form from './form/ContactForm';
import Banner from '../ui components/banner/Banner';
import CentreInfos from './centre-infos/CentreInfos';

import styles from './Contact.module.scss';

const Contact = ({match}) => {
  
  return (
    <div className={styles.contact} >
      <Banner match={match}/>
      <div>
        <NavLink to="/contact/beneparamedical-centre">BENEPARAMEDICAL CENTRE</NavLink>
        <NavLink to="/contact/atpo-pays-de-loire">ATPO PAYS DE LOIRE</NavLink>
      </div>
      <Route path="/contact/beneparamedical-centre" component={CentreInfos}></Route>
      <Route path="/contact/atpo-pays-de-loire" component={CentreInfos}></Route>
      <Form/>
    </div>
    
  )
}

export default Contact