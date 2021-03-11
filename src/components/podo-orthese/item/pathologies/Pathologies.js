const Pathologies = ({url}) => {
  let pathologies;
  
  switch(url) {
    case '/podo-orthese/chaussures-orthopediques':
      pathologies = require('../../../../json/podo-orthese/chaussures-orthopediques.json');
      break;
    case '/podo-orthese/appareil-podo-jambier':
      pathologies = require('../../../../json/podo-orthese/appareil-podo-jambier.json');
      break;
    case '/podo-orthese/chaussures-therapeutiques':
      pathologies = require('../../../../json/podo-orthese/chaussures-therapeutiques.json');
      break;
    default: 
      pathologies = null;
      break;
  }

  return (
    <div>
      <p>Principales pathologies traitées: </p>
      <ul>
        {pathologies && (
          pathologies.pathologies.map((pathologie, i) => <li key={i}>{`- ${pathologie}`}</li>)
        )}
      </ul>
    </div>
    
  )
}

export default Pathologies