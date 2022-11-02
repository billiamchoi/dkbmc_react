import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import styles from  './styles/QuestionPage.module.css';

export default function QuestionPage() {

    return (
        <Container>
            <Stack className="headerStack mt-3" direction="horizontal" gap={3}>
                <div className="bg-light border">
                    <Button variant="primary">질문 등록하기</Button>
                </div>
                <div className="bg-light border ms-auto">
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </div>
            </Stack>

        </Container>
    )
}
