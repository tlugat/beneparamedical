import styles from './CentreInfos.module.scss';

const CentreInfos = ({match}) => {
  let test;
  let googleMaps;
  if(match.url === "/contact/beneparamedical-centre") {
    test = require('../../../json/contact-centres/beneparamedical-centre.json');
    googleMaps = <iframe title="google-maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2677.5304733925022!2d1.9130933157295433!3d47.84868877921596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e4e4404eb5bc2f%3A0xab0b8e215831ff28!2s412%20Rue%20de%20la%20Juine%2C%2045160%20Olivet!5e0!3m2!1sfr!2sfr!4v1614941138937!5m2!1sfr!2sfr" width="400" height="300" allowFullScreen={true} loading="lazy"></iframe>;
  } else if(match.url === "/contact/atpo-pays-de-loire") {
    test = require('../../../json/contact-centres/atpo-pays-de-loire.json');
    googleMaps = <iframe title="google-maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2671.1040914062355!2d0.16760581573301522!3d47.97304627058469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e28f6310072637%3A0x6d8a73075226c5c0!2s32%20Rue%20Pierre%20Martin%2C%2072100%20Le%20Mans!5e0!3m2!1sfr!2sfr!4v1614951864955!5m2!1sfr!2sfr" width="400" height="300" allowFullScreen={true} loading="lazy"></iframe>
  }

  return (
    <div classame={styles.centreInfos}>
      {googleMaps}
      <div className={styles.centreInfos__address}>
        <h3>Adresse</h3>
        <p>{test.address.address}</p>
        <p>{`Tel : ${test.address.tel}`}</p>
        <p>{`Fax : ${test.address.fax}`}</p>
      </div>
      <div className={styles.centreInfos__hours}>
        <h3>Horaires d'ouverture</h3>
        <ul>
          {test.hours.map((day, index) => <li key={index}>{day}</li>)}
        </ul>
      </div>
      <div className={styles.centreInfos__offices}>
        <h3>Cabinets secondaires (sur rendez-vous)</h3>
        <ul>
          {test.offices.map((office, i) => (
            <>
              <li key={i}>{office.county}</li>
              <ul>{office.address.map((address, i) => <li key={i}>{address}</li>)}</ul>
            </>
          ))}
        </ul>
      </div>
    </div>
    
    )
}

export default CentreInfos