import { Routes,Route } from "react-router-dom";
import DocumentTitle from "react-document-title";
import Reports from "./Reports";


export default function Approutes(){
    return(
        <Routes >
            <Route path="/" element={
                <DocumentTitle title="UAS Trust - Reports">
                    <Reports />
                </DocumentTitle>} />
                <Route path="/reports" element={
                <DocumentTitle title="UAS Trust - Reports">
                    <Reports />
                </DocumentTitle>} />
        </Routes>
    )
}