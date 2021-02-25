import {NavLink} from "react-router-dom"

const PodoOrtheseNav = () => {
  return (
    <ul>
      <li><NavLink to="/podo-orthese/chaussures-orthopediques">Chaussures orthopédiques</NavLink></li>
      <li><NavLink to="/podo-orthese/prothèses-plantaires">Prothèses plantaires</NavLink></li>
      <li><NavLink to="/podo-orthese/appareils-podo-jambier">Appareils podo-jambiers</NavLink></li>
      <li><NavLink to="/podo-orthese/chaussures-therapeutiques">Chaussures thérapeutiques</NavLink></li>
      <li><NavLink to="/podo-orthese/reparation">Réparation</NavLink></li>
      <li><NavLink to="/podo-orthese/outils-de-diagnostic-et-production">Outils de diagnostic et production</NavLink></li>
      <li><NavLink to="/podo-orthese/centre-de-compétences-pneumaflex">Centre de compétences Pneumaflex</NavLink></li>
    </ul>
  )
}

export  default PodoOrtheseNav