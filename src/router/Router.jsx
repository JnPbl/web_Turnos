import { BrowserRouter,Routes,Route } from "react-router-dom";
import App from "../componentes/App.jsx";
import NotFound from "../componentes/notFound/NotFound.jsx";

const Router = ()=>{
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element= {<App/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Router;