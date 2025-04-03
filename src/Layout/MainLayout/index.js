import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Col, Container, Row } from "react-bootstrap";
import Reports from "../../Reports";

export default function Layout() {
    return (
        <Container fluid style={{height:"100%"}}>
            <Row >
                <Header />
            </Row>
            <Row style={{ minHeight: "90%", margin:"10px 0px" }}>
                <Col>
                    <div style={{height:"100%",width:"65%",margin:"auto" ,border:"1px solid black"}}>
                        <Reports />
                    </div>
                </Col>
            </Row>
            <Row>
                <Footer />
            </Row>
        </Container>
    );
}
