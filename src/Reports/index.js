import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BasicTable from "./ReportsTable/BasicTable";


export default function  Reports(){

    return(
        <Container fluid>
            <Row style={{padding:"10px 0px"}} className="justify-content-between">
                <Col xs={4}>
                    <h4 style={{color:"#0a76a8"}}>Reports</h4>
                </Col>
                <Col xs={3}>
                    <button style={{borderRadius:18,padding:"5px 20px",backgroundColor:"#0894d4",color:"white",boxSizing:"border-box"}}>EXPORT CSV</button>
                </Col>

            </Row>
            <Row className="justify-content-between">
                <Col xs={4}>
                    <h4 style={{color:"#0a76a8"}}>25519 Tokens</h4>
                </Col>
                <Col xs={4}>
                
                </Col>

            </Row>
            <Row>
                <Col>
                    <BasicTable />
                </Col>
            </Row>
        </Container>
    );

}