import {Row, Container, Col} from 'react-bootstrap';


function Footer(){
    return(
        <footer className="footer">
            <Container>
                <Row>
                    <Col className="footer-col">
                        <p>&copy; Jennifer Li 2026</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;