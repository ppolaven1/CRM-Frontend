import React from 'react';
import { Jumbotron, Form, Row, Col, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './add-ticket-form.style.css';

export const AddTicketForm = ({ handleOnSubmit, handleOnChange, frmDt, frmErr }) => {
    console.log(frmDt);
    return (
        <Jumbotron className="mt-3 add-new-ticket bg-light">
            <h1 className="text-info text-center">Add New Ticket</h1>
            <hr />
            <Form autoComplete="off" onSubmit={handleOnSubmit}>
                    <Form.Group as={Row}>
                        <Form.Label column sm={3}>Subject</Form.Label>
                        <Col>
                        <Form.Control
								name="subject"
								placeholder="Subject"
                                onChange={handleOnChange}
                                value={frmDt.subject}						
						/>
                        <Form.Text className="text-danger">{frmErr.subject && "subject is required."}</Form.Text>
                        </Col>
                    </Form.Group>
                    <br />
                    <Form.Group as={Row}>
							<Form.Label column sm={3}>Issue Found</Form.Label>
                            <Col sm={9}>
							<Form.Control
								type="date"
								name="issueDate"
                                value={frmDt.issueDate}
                                onChange={handleOnChange}
                                required								
							/>
                            </Col>
					</Form.Group>
                    <br />
                    <Form.Group>
							<Form.Label>Password</Form.Label>
							<Form.Control
								as="textarea"
								name="detail"
                                rows={5}
                                value={frmDt.detail}
                                onChange={handleOnChange}
                                required								
							/>
					</Form.Group>
                    <br />
                    <Button type="submit" variant="info" className="col-12">Login</Button>
                </Form>
        </Jumbotron>
    )
}

AddTicketForm.propTypes = {
   handleOnSubmit: PropTypes.func.isRequired,
   handleOnChange: PropTypes.func.isRequired,
   frmDt: PropTypes.object.isRequired,
   frmErr: PropTypes.object.isRequired
};
