import { useContext } from 'react';

import { AuthContext } from '../../contexts/auth'
import SignUp from '../SignUp';

export default function Dashboard(){
  return(
    <div>
      <h1>PAGINA DASHBOARD</h1>
      <button onClick={( => signOut)}>Fazer logout</button>
    </div>
  )
}