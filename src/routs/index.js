import { BrowserRouter as Router, Routes, Route,Navigate   } from "react-router-dom";
import Home from "../pages/home/Home";

 export const RoutesPrincipal=()=>{
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
            </Routes>
        </Router>
    )
}
export default RoutesPrincipal