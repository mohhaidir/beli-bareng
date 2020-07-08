import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

// --- NAVBAR TITLE ---
test("Should Render Navbar with Title", () => {
  const { getByText } = render(<App />);
  const displayHome = getByText(/TODO's App/i);
  expect(displayHome).toBeInTheDocument();
});

// --- HOME BUTTON ---
test("~> Should Display Home Button and Display Home Page", () => {
  const { getByTestId } = render(<App />);
  const linkToHome = getByTestId("home-btn");
  fireEvent.click(linkToHome);
});

test("~> Should display home page after clicked home button", () => {
  const { getByTestId } = render(<App />);
  const displayHomePage = getByTestId("home-page");
  expect(displayHomePage).toBeInTheDocument();
});

// --- TODOS BUTTON ---
test("~> Should Display Todos Button and Display All Todos Page", () => {
  const { getByTestId } = render(<App />);
  const linkToTodosPage = getByTestId("todos-btn");
  fireEvent.click(linkToTodosPage);
});

test("~> Should Display Todos Page after clicked Todos Button", () => {
  const { getByTestId } = render(<App />);
  const displayTodosPage = getByTestId("todos-page");
  expect(displayTodosPage).toBeInTheDocument();
});

// --- ADD TODO BUTTON ---
test("~> Should Display Add Todo Button and Display Add Todo's Form", () => {
  const { getByTestId } = render(<App />);
  const linkToAddTodoForm = getByTestId("add-todo-btn");
  fireEvent.click(linkToAddTodoForm);
});

test("~> Should Display Add Todo's Form Page after clicked Add Todo's Button", () => {
  const { getByTestId } = render(<App />);
  const displayAddFormPage = getByTestId("add-form-page");
  expect(displayAddFormPage).toBeInTheDocument();
});
