import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { FirstStepsApp } from "./FirstStepsApp";



describe("Prueba de componente FirstStepsApp", () => {
  test('hacer un match con el shanpshot', () => {
    const  {container} = render(<FirstStepsApp/>);
    expect(container).toMatchSnapshot();

    screen.debug();


  })
} )