import { CustomHeader } from "./CustomHeader";
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";

describe("Testing para CustomHeader", () => {
  const title = "Hola Mundo";
  const description = "descripcion de prueba, holaaa :D";

  test("renderizar el titulo correcto", () => {
    render(<CustomHeader title={title} />);
    expect(screen.getByText(title)).toBeTruthy();
  });

  test("renderizar la descripcion correcta", () => {
    render(<CustomHeader title={title} description={description} />);
    expect(screen.getAllByText(description)).toBeTruthy();

    screen.debug();
  });

  test("No renderizar descripcion si no hay", () => {
    const { container } = render(<CustomHeader title={title} description="" />);

    const divElement = container.querySelector(".content-center");

    const h1 = divElement?.querySelector("h1");
    expect(h1?.innerHTML).toBe(title);

    const p = divElement?.querySelector("p");
    expect(p).toBeNull();

    screen.debug();
  });
});
