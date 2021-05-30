import React, {useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AddTicketForm } from '../../components/add-ticket-form/AddTicketForm.comp';
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp';
import { shortText } from '../../utils/Validation';

const initialFrmDt = {
    subject: "",
    issueDate: "",
    detail: "",
};

const initialFrmErrData = {
    subject: false,
    issueDate: false,
    detail: false,
};
export const AddTicket = () => {
    const [frmData, setFrmData] = useState(initialFrmDt);
    const [frmDataError, setFrmDataError] = useState(initialFrmErrData);

    useEffect(() => {}, [frmData, frmDataError]);

    const handleOnChange = (e) => {
        const{ name, value } = e.target;
        setFrmData({
            ...frmData,
            [name] : value
        });
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        setFrmDataError(initialFrmErrData);
        const isSubjectValid = await shortText(frmData.subject);

        setFrmDataError({
            ...initialFrmErrData, subject: !isSubjectValid
        })

        console.log("Form submit request received.", frmData);
    }
    return (
        <Container>
            <Row>
                <Col>
                    <PageBreadcrumb page="New Ticket" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <AddTicketForm handleOnSubmit={handleOnSubmit} handleOnChange={handleOnChange} frmDt={frmData} frmErr={frmDataError} />
                </Col>
            </Row>
        </Container>
    )
}
