import React from 'react';
import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const UpdateTicket = ({ msg, handleOnChange, handleOnSubmit }) => {
    return (
        <Form onSubmit={handleOnSubmit}>
            <Form.Label>Reply</Form.Label>
            <br />
            <Form.Text>Please type or update your reply here.</Form.Text>
            <Form.Control 
            name=""
            value={msg}
            onChange={handleOnChange}
            as="textarea"
            row="5"
            name="detail"
            />
            <div className="text-end mt-3 mb-3">
                <Button variant="info" type="submit">Reply</Button>
            </div>
        </Form>
    )
}

UpdateTicket.propTypes = {
    msg : PropTypes.string.isRequired,
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired
}