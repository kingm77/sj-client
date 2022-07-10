import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import {
    Welcome
} from "../pages";


export default function Router() {
    return (
      <BrowserRouter>
        <Routes>
  
          <Route path='/' element={<Welcome/>} />
  
        </Routes>
      </BrowserRouter>
    )
}