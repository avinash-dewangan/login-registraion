import React, { useState } from 'react'
import { Button, Form, Row, Container, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import { signupUser } from '../../redux'
import { Link } from 'react-router-dom';
function SignupContainer(props) {
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const dispatch = useDispatch();
    const msg = useSelector(state => state.user.msg)
    return (
        <Container className="center">
            <Row>

                <Col>
                    <h1>SignUp</h1>
                    <p>{msg}</p>
                    <Form>
                        <Form.Group controlId="formUserName">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type="text" defaultValue={props.username}
                                onChange={e => setUserName(e.target.value)}
                                placeholder="Enter user name" required />

                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email"
                                defaultValue={props.email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="Enter email" required />

                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"
                                defaultValue={props.password}
                                onChange={e => setPassword(e.target.value)}
                                required />
                        </Form.Group>
                        <Form.Group controlId="formConfirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password"
                                defaultValue={props.confirmPassword}
                                onChange={e => setConfirmPassword(e.target.value)}
                                required />
                        </Form.Group>
                        <p>Already have an account<Link to="/"> Login here</Link></p>
                        <Button variant="primary"
                            onClick={() => dispatch(signupUser(username, email, password, confirmPassword))}>
                            SingUp
  </Button>
                    </Form>
                </Col>
            </Row>

        </Container>
    )
}

export default SignupContainer;
