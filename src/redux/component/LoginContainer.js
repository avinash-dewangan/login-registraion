import React, { useState } from 'react'
import { Button, Form, Row, Container, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import { loginUser } from '../../redux'
import { Link } from 'react-router-dom';
function LoginContainer(props) {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch();
    const msg = useSelector(state => state.user.msg)
    return (
        <Container className="center">
            <Row>
                <Col>
                    <h1>LogIn</h1>
                    <p>{msg}</p>
                    <Form>
                        <Form.Group controlId="formUserName1">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type="text" defaultValue={props.username}
                                onChange={e => setUserName(e.target.value)}
                                placeholder="Enter user name" required />

                        </Form.Group>


                        <Form.Group controlId="formBasicPassword1">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="password"
                                defaultValue={props.password}
                                onChange={e => setPassword(e.target.value)}
                                required />
                        </Form.Group>

                        <p>If you new<Link to="/signup"> Create New Account</Link></p>
                        <Button variant="primary"
                            onClick={() => dispatch(loginUser(username, password))}>
                            Login</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default LoginContainer;
