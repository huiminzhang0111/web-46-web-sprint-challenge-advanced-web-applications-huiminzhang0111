import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen, waitFor} from "@testing-library/react";
import ColorList from './ColorList';

const empty_colors = []
const test_colors = [
    {
      color: "aliceblue",
      code: {
        hex: "#f0f8ff",
      },
      id: 1,
    },
    {
      color: "limegreen",
      code: {
        hex: "#99ddbc",
      },
      id: 2,}
]

test("Renders an empty list of colors without errors", () => {
    render(<ColorList colors={empty_colors} />)
});

test("Renders a list of colors without errors", () => {
    render(<ColorList colors={test_colors} />) 
});

test("Renders the EditForm when editing = true and does not render EditForm when editing = false", async() => {
    render(<ColorList colors={test_colors} editing={true} />)
    
});
