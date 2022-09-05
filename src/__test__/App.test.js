import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Person from "../components/Person";



test('Loads and displays starter data', async () => {
    render(<Person />);

    const name = await waitFor(() => screen.findByTestId('name'));
    expect(name).toHaveTextContent('malek');

    const age = await waitFor(() => screen.findByTestId('age'));
    expect(age).toHaveTextContent(25)

    const gender = await waitFor(() => screen.findByTestId('gender'));
    expect(gender).toHaveTextContent('male')
})

test('Can change the name', async () => {
    render(<Person />);
    const inputName = screen.getByTestId('name-input');
    const name = screen.getByTestId('name');
    fireEvent.change(inputName, { target: { value: "Malek Jamal" } });
    expect(name).toHaveTextContent('Malek Jamal');
});

test('Can change the age', async () => {
    render(<Person />);
    const inputAge = screen.getByTestId('age-input');
    const age = screen.getByTestId('age');
    fireEvent.change(inputAge, { target: { value: 25 } });
    expect(age).toHaveTextContent(25);
});

test('Can change the gender', async () => {
    render(<Person />);
    const inputGender = screen.getByTestId('gender-input');
    const gender = screen.getByTestId('gender');
    fireEvent.change(inputGender, { target: { value: 'male' } });
    expect(gender).toHaveTextContent('male');
});