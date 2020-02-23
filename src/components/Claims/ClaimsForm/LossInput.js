import React from "react";
import { Card, Form, FormGroup, Label, Input, Button } from "reactstrap";

const LossInput = () => {
  //   const dispatch = useDispatch();

  const [inputs, setInputs] = React.useState({
    category: "",
    type: "",
    description: ""
  });

  const handleChange = e => {
    let { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  //   const handleSubmit = e => {
  //     e.preventDefault();
  //     dispatch(addClaim(inputs));
  //   };

  return (
    <div>
      <Card color="light" className="m-3">
        <h3 className="mt-4 ml-2">
          Select the appropriate information below and enter a description for
          your loss.
        </h3>
        <Form className="mt-2 ml-2 mr-2">
          <FormGroup>
            <Label for="category">Select Loss Category:</Label>
            <Input
              type="select"
              name="category"
              value={inputs.category}
              onChange={handleChange}
              id="category"
            >
              <option disabled>Wind</option>
              <option disabled>Hail</option>
              <option disabled>Fire</option>
              <option>Burglary/Theft</option>
              <option>Other</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="type">Select Loss Type:</Label>
            <Input
              type="select"
              name="type"
              value={inputs.type}
              onChange={handleChange}
              id="type"
            >
              <option>Theft</option>
              <option>Lost and not found</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="description">Enter Description:</Label>
            <Input
              type="textarea"
              name="description"
              value={inputs.description}
              onChange={handleChange}
              id="description"
            />
          </FormGroup>
          <FormGroup className="text-center">
            <Button href="/form/step2" color="primary">
              Next
            </Button>
          </FormGroup>
        </Form>
      </Card>
    </div>
  );
};

export default LossInput;
