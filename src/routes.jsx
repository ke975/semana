import {Route,Routes} from "react-router-dom";

import {Event} from './pages/Event'
import {Prueba} from './pages/prueba'



export function Router(){
    return(
<Routes>

  <Route path="/" element={<Event/>}/>
  <Route path="/event/lesson/:slug" element={<Event/>}/>
  <Route path="/event/prueba" element={<Prueba/>}/>
</Routes>
    )
}