import { Routes,Route } from "react-router-dom";
// import DocumentTitle from "react-document-title";
import Reports from "./screens/TokenReports";


export default function Approutes(){
    return(
        <Routes >
            <Route path="/" element={<Reports />}
                // <DocumentTitle title="UAS Trust - Reports">
                    
                // </DocumentTitle>} 
                />
                <Route path="/reports" element={<Reports />}
                // <DocumentTitle title="UAS Trust - Reports">
                //     <Reports />
                // </DocumentTitle>} 
                />
        </Routes>
    )
}