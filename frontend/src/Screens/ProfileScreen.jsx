import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Row,
  Col,
  Form,
  ListGroup,
  image,
  Button,
  Card,
} from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import Message from "../Components/Message";
import { useDispatch, useSelector } from "react-redux";

const ProfileScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  return (
    <div>
      <Row>
        <Col md={8}>
          <h1 style={{ marginBottom: "20px" }}>Profile Page</h1>
          {cartItems.length === 0 ? (
            <Message>
              Your Cart is Empty
              <Link to="/">Go Back</Link>
            </Message>
          ) : (
            <ListGroup variant="flush">Items </ListGroup>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default ProfileScreen;
