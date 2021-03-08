const initialState = {
  flights: [
    {
      name: "AirLine",
      date: "1/10/2010",
      time: " AnyTime",
      destination: "NoWhere",
    },
    {
      name: "AirLine",
      date: "2/10/2010",
      time: " AnyTime",
      destination: "NoWhere",
    },
    {
      name: "AirLine",
      date: "3/10/2010",
      time: " AnyTime",
      destination: "NoWhere",
    },
  ], //Flights Dummy Data,
};

const flightReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default flightReducer;
