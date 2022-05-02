import { Container } from 'react-bootstrap'
import './LoginPage.css'
import { Tabs } from 'react-bootstrap'
import { Tab } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

const LoginPage = () => {

    // seperate 2 forms in seperate files to maintain and control state and request
    const tabCard = (
        <Card>
            <Tabs defaultActiveKey="Login" className="mb-3">
                <Tab eventKey="Login" title="Login">
                    <LoginForm/>
                </Tab>
                <Tab eventKey="Register" title="Register">
                    <RegisterForm/>
                </Tab>
            </Tabs>
        </Card> 
    );

    return (
        <>
            <Container id="login" className="my-5 mx-auto center w-50">
                {tabCard}
            </Container>
        </>
    )
}

export default LoginPage
