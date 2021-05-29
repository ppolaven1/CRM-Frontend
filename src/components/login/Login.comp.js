import React from 'react';
import PropTypes from 'prop-types';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';

export const LoginForm = ({ handleOnChange, email, pass, handleOnSubmit, formSwitcher }) => {
    return (
        <Container className="bg-white">
            <Row>
                <Col>
                <h1 className="text-info text-center">Client Login</h1>
                <hr />
                <Form autoComplete="off" onSubmit={handleOnSubmit}>
                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
								type="email"
								name="email"
								placeholder="Enter Email"
                                onChange={handleOnChange}
                                value={email}
                                required						
						/>
                    </Form.Group>
                    <br />
                    <Form.Group>
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								name="password"
								placeholder="password"
                                value={pass}
                                onChange={handleOnChange}
                                required								
							/>
					</Form.Group>
                    <br />
                    <Button type="submit">Login</Button>
                </Form>
                <hr />
                </Col>
            </Row>
            <Row>
                <Col>
                    <a href="#!" onClick={()=>formSwitcher('reset')}>Forget Password?</a>
                </Col>
            </Row>
        </Container>
    )
}

LoginForm.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    pass: PropTypes.string.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired
}
