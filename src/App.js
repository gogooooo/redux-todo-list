import React from "react";
import { Container } from "react-bootstrap";
import AddTask from "./components/AddTask/AddTask";
import ListTask from "./components/ListTask/ListTask";
const App = () => {
  return (
    <Container>
      <AddTask />
      <ListTask />
    </Container>
  );
};

export default App;
