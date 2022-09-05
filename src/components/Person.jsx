import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import swal from "sweetalert";

const Person = (props) => {
  const [name, setName] = useState("malek");
  const [age, setAge] = useState(25);
  const [gender, setGender] = useState("male");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = {
      user: {
        name: name,
        age: age,
        gender: gender,
      },
    };
    const resData = await axios.post(
      `${process.env.REACT_APP_HEROKU_SERVER}/person`,
      data
    );
    console.log(resData.data);
    swal({
      title: "Data Sent!",
      text: `Your Age After 5 Years is: (${resData.data.age})`,
      icon: "success",
      button: "Done!",
    });
  };

  return (
    <div style={{ padding: "60px", width: "100%" }}>
      <h4
        data-testid="name"
        style={{
          border: "3px solid black",
          padding: "8px",
          margin: "10px",
          borderRadius: "10px",
        }}
      >
        Name: {name}
      </h4>
      <h4
        data-testid="age"
        style={{
          border: "3px solid black",
          padding: "8px",
          margin: "10px",
          borderRadius: "10px",
        }}
      >
        Age: {age}
      </h4>
      <h4
        data-testid="gender"
        style={{
          border: "3px solid black",
          padding: "8px",
          margin: "10px",
          borderRadius: "10px",
        }}
      >
        Gender: {gender}
      </h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="name">Enter Your Name</Form.Label>
          <Form.Control
            type="text"
            data-testid="name-input"
            name="name"
            id="name"
            placeholder="Ahmad"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="age">Enter Your Age</Form.Label>
          <Form.Control
            type="number"
            min={12}
            max={65}
            name="age"
            data-testid="age-input"
            id="age"
            
            placeholder="12"
            onChange={(e) => setAge(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Select Your Gender</Form.Label>
          <br />
          <Form.Check
            inline
            data-testid="gender-input"
            label="Male"
            type="radio"
            name="gender"
            value={"male"}
            onChange={() => {
              setGender("Male");
            }}
          />
          <Form.Check
            inline
            label="Female"
            name="gender"
            type="radio"
            value={"female"}
            onChange={() => {
              setGender("Female");
            }}
          />
        </Form.Group>
        <Button
          variant="dark"
          type="submit"
          style={{ margin: "8px", padding: "8px", width: "50%" }}
        >
          Submit
        </Button>
        <Button
          variant="dark"
          type="reset"
          style={{ margin: "8px", padding: "8px", width: "50%" }}
        >
          Reset
        </Button>
      </Form>
    </div>
  );
};

export default Person;
