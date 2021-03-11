import Pathologies from './pathologies/Pathologies';

const Item = ({match}) => {
 
  let pathologiesList;
  let accroche;
  switch(match.url) {
    case '/podo-orthese/chaussures-orthopediques':
      pathologiesList = true;
      accroche = require('../../../json/podo-orthese/chaussures-orthopediques.json');
      break;
    case '/podo-orthese/appareil-podo-jambier':
      pathologiesList = true;
      accroche = require('../../../json/podo-orthese/appareil-podo-jambier.json');
      break;
    case '/podo-orthese/chaussures-therapeutiques':
      pathologiesList = true;
      accroche = require('../../../json/podo-orthese/chaussures-therapeutiques.json')
      break;
    case '/podo-orthese/ortheses-plantaires':
      accroche = require('../../../json/podo-orthese/ortheses-plantaires.json');
      break;
    case '/podo-orthese/reparations':
      accroche = require('../../../json/podo-orthese/reparation.json');
      break;
    case '/podo-orthese/pneumaflex':
      accroche = require('../../../json/podo-orthese/centre-de-competence-pneumaflex.json');
      break;
    case '/podo-orthese/outils-diagnostic-et-production':
      accroche = null;
      break;
    default: 
      pathologiesList = false;
      accroche = null;
      break;
  }
  return (
    <div>
      {accroche && <p>{accroche.accroche}</p>}
      {pathologiesList && <Pathologies url={match.url} />}
    </div>
  )
}

const OrthesePlantaireTemplate = () => {
  return (
    <div>
      <p>Après un bilan podologique, nous fabriquons:</p>
      <p>Des orthoplasties pour tous les patients ayant des zones de conflits dans leurs chaussures.</p>
      <p>Des semelles orthopédiques pour tous les patients présentant une pathologie de la statique des pieds, trouble des appuis, cutané.</p>
      <p>Avec examen de vos pieds.</p>
    </div>
    
  )
}

export default Item