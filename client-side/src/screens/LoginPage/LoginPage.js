import { useState, useEffect } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './LoginPage.css'
import { Tabs } from 'react-bootstrap'
import { Tab } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

const LoginPage = () => {

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
