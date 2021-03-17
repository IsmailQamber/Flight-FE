import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Redirect, useHistory, useParams } from "react-router";
import { booking } from "../store/actions/bookingActions";
import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import Icon from "@material-ui/core/Icon";
import { v4 as uuidv4 } from "uuid";
import { makeStyles } from "@material-ui/core/styles";
import Loading from "./Loading";
// Actions
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));
const Passengers = () => {
  const { flightId, pssnumber } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.authReducer.user);
  const airlines = useSelector((state) => state.airlineReducer.airlines);
  const flights = useSelector((state) => state.flightReducer.flights);
  const flight = flights.find((flight) => flight.id === +flightId);
  const airports = useSelector((state) => state.airportReducer.airports);

  const currentAirline = airlines.find((airline) => airline.userId === user.id);

  let airlineId;
  if (currentAirline) {
    airlineId = currentAirline.id;
  }

  // let i = 0;

  const classes = useStyles();
  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), firstName: "", lastName: "", passportNumber: "" },
  ]);

  // console.log("pssnumber", +pssnumber);

  // for (let i = 0; i === 2; i++) {
  //   console.log("i", i);
  //   // setInputFields([
  //   //   ...inputFields,
  //   //   { id: uuidv4(), firstName: "", lastName: "", passportNumber: "" },
  //   // ]);
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("InputFields", inputFields);
    // console.log("before", data);
    // if (user) {
    //   data = { ...data, userId: user.id };
    // } else {
    //   data = { ...data, userId: null };
    // }
    // console.log("after", data);
    // dispatch(booking(data));

    // history.push("/");
  };

  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setInputFields(newInputFields);
  };

  let i = 0;
  const handleAddFields = (i) => {
    if (i < pssnumber)
      setInputFields([
        ...inputFields,
        { id: uuidv4(), firstName: "", lastName: "", passportNumber: "" },
      ]);
    return i++;
  };

  const handleRemoveFields = (id) => {
    const values = [...inputFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputFields(values);
  };

  // const { handleSubmit, errors, register } = useForm({});

  const onSubmit = (data) => {
    console.log("before", data);
    if (user) {
      data = { ...data, userId: user.id };
    } else {
      data = { ...data, userId: null };
    }
    console.log("after", data);
    dispatch(booking(data));

    history.push("/airlineflights");
  };

  return (
    <Container>
      <h1>Add New Member</h1>
      <form className={classes.root} onSubmit={handleSubmit}>
        {inputFields.map((inputField) => (
          <div key={inputField.id}>
            <TextField
              name="firstName"
              label="First Name"
              variant="filled"
              value={inputField.firstName}
              onChange={(event) => handleChangeInput(inputField.id, event)}
            />
            <TextField
              name="lastName"
              label="Last Name"
              variant="filled"
              value={inputField.lastName}
              onChange={(event) => handleChangeInput(inputField.id, event)}
            />
            <TextField
              name="passportNumber"
              label="Passport Number"
              variant="filled"
              value={inputField.passportNumber}
              onChange={(event) => handleChangeInput(inputField.id, event)}
            />
            <IconButton
              disabled={inputFields.length === 1}
              onClick={() => handleRemoveFields(inputField.id)}
            >
              <RemoveIcon />
            </IconButton>
            <IconButton onClick={() => handleAddFields(i)}>
              <AddIcon />
            </IconButton>
          </div>
        ))}
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          type="submit"
          // endIcon={<Icon>send</Icon>}
          onClick={handleSubmit}
        >
          Send
        </Button>
      </form>
    </Container>
  );
};

export default Passengers;
