import React from "react";
import { Container } from "react-bootstrap";
import Header from "./Components/Header";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h1>WELCOME TO OPEITUM PATIENTS ADVOCACY</h1>
        </Container>
      </main>
    </>
  );
};

export default App;
