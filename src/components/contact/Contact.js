import Form from './form/ContactForm';
import Banner from '../ui components/banner/Banner';

import styles from './Contact.module.scss';

const Contact = ({match}) => {
  
  return (
    <div className={styles.contact} >
      <Banner match={match}/>
      <Form/>
    </div>
    
  )
}

export default Contact