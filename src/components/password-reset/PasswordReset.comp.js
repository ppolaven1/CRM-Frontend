import React from 'react';
import PropTypes from 'prop-types';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';

export const PasswordReset = ({ handleOnChange, email, handleOnResetSubmit, formSwitcher}) => {
    return (
        <Container className="bg-white">
            <Row>
                <Col>
                <h1 className="text-info text-center">Reset Password</h1>
                <hr />
                <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
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
                    <br />
                    <Button type="submit">Reset Password</Button>
                </Form>
                <hr />
                </Col>
            </Row>
            <Row>
                <Col>
                    <a href="#!" onClick={()=>formSwitcher('login')}>Login Now</a>
                </Col>
            </Row>
        </Container>
    )
}

PasswordReset.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    handleOnResetSubmit: PropTypes.func.isRequired
}
