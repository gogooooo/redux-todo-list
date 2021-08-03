import React from "react";
import { Form, Button, Col } from "react-bootstrap";

import { useState } from "react";
import { addTask } from "../../action";
import { useDispatch } from "react-redux";

const AddTask = () => {
  const [formData, setFormData] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(formData));
    setFormData("");
  };

  return (
    <div>
      <Form
        className="align-items-center justify-content-center form-row"
        onSubmit={handleSubmit}
      >
        <Col xs="auto">
          <Form.Label htmlFor="inlineFormInput" srOnly>
            TODO Text
          </Form.Label>
          <Form.Control
            className="mb-2"
            id="inlineFormInput"
            placeholder="Enter Todo Text"
            value={formData}
            onChange={(e) => setFormData(e.target.value)}
          />
        </Col>

        <Col xs="auto">
          <Button type="submit" className="mb-2">
            ADD
          </Button>
        </Col>
      </Form>
    </div>
  );
};

export default AddTask;
