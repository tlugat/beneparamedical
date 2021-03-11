import logo from '../../../assets/logo/podo-orthese/realisation/realisation-logo-small.svg';

const Realisation = () => {
  return (
    <div>
      <img src={logo} alt="a doctor surrounded by small graphs"/>
    <div>
      <h2>Réalisation</h2>
      <p> Prescription en main, sur rendez-vous avec un podo-orthésiste dans l’un de nos établissements,  des prises de mesures et moulages nécessaires a la fabrication de vos chaussures seront réalisés.
        <br/><br/>
        Le choix du modèle dépend de  vos pathologies et de vos pieds. Un dépassement peut être demandé pour des raisons esthétiques.
        <br/><br/>
        Il sera suivi d’un deuxième rendez-vous pour un 1er essayage 2 à 4 semaines environ après la prise de mesure, si besoin d’un 2e (ce rendez-vous n’est pas obligatoire pour un adulte lors d’un renouvellement).
        <br/><br/>
        La livraison interviendra entre 2 et 4 semaines après essayage.
      </p>
    </div>
    <div>
      <h2>Renouvellement (hors modifications capitales)</h2>
      <p> Pour un renouvellement, une prescription d’un médecin généraliste suffira.
          <br/><br/>
          En cas de renouvellement, vos chaussures seront livrés sous 6 semaines environ.
      </p>
    </div>
    <div>Prise en charge</div>
    </div>
    
  )
}

export default Realisation