import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Color from './Color';

const blank_color = {
    color: "",
    code: { hex : ""},
    id: ""
}
const has_color = {
    color: "yellow",
    code: { hex : "#1111"},
    id: Date.now()
}

test("Renders without errors with blank color passed into component", () => {
    render(<Color color={blank_color}/>)
});
  
test("Renders the color passed into component", () => {
    render(<Color color={has_color} />)
});

test("Executes handleDelete and toggleEdit property when the 'x' icon is clicked", () => {
    render(<Color color={has_color} />)
    const button = screen.queryByText('x')
});

test("Executes setEditColor and toggleEdit property when color div is clicked", () => {
    
});