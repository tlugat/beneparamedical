import {NavLink} from "react-router-dom"


const PodoOrtheseNav = () => {
  return (
    <ul>
      <li><NavLink to="/orthopedie-generale/membres-superieurs">Membres supérieurs</NavLink></li>
      <li><NavLink to="/orthopedie-generale/cervicales">Les cervicales</NavLink></li>
      <li><NavLink to="/orthopedie-generale/dos">Le dos</NavLink></li>
      <li><NavLink to="/orthopedie-generale/abdomen">L'abdomen</NavLink></li>
      <li><NavLink to="/orthopedie-generale/hanche">La hanche</NavLink></li>
      <li><NavLink to="/orthopedie-generale/membres-inferieurs">Membres inférieurs</NavLink></li>
      <li><NavLink to="/orthopedie-generale/contention-veineuse">Contention veineuse</NavLink></li>
    </ul>
  )
}

export  default PodoOrtheseNav