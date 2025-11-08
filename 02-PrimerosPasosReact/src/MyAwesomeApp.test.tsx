import { describe, expect, test } from "vitest";
import MyAwesomeApp from "./MyAwesomeApp";
import { render, screen } from "@testing-library/react";

describe("MyAwesomeApp", () => {
  test("Primera prueba de componente", () => {
    const { container } = render(<MyAwesomeApp />);
    // console.log(container.innerHTML)
    screen.debug();

    const h1 = container.querySelector("h1");
    expect(h1?.innerHTML).toContain("Edison");

    const h3 = container.querySelector("h3");
    expect(h3?.innerHTML).toContain("Andres");
    console.log({ h3 });

    // const p = container.querySelector('p');
    // expect(p ?.innerHTML).toBe('Zelda');
    //console.log(p)
  });
});

describe("MyAwesomeApp", () => {
  test("Segunda prueba de componente", () => {
    render(<MyAwesomeApp />);
    screen.debug();

    const h1 = screen.getByTestId("first-name-title");
    expect(h1.innerHTML).toContain("Edison");
  });

  test("Prueba con snapshot", () => {
    const { container } = render(<MyAwesomeApp />);
    expect(container).toMatchSnapshot();
  });
});
