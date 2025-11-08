import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { MyCounterApp } from "./MyCounterApp";

describe("MyCounterApp", () => {
  test("mostrar el componente con los valores por defecto", () => {
    render(<MyCounterApp />);

    screen.debug();

    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      `counter :5`
    );

    expect(screen.getByRole("button", { name: `+1` })).toBeDefined();
    expect(screen.getByRole("button", { name: `-1` })).toBeDefined();
    expect(screen.getByRole("button", { name: `reiniciar` })).toBeDefined();
  });

  test("mostrar incrementar el contador", () => {
    render(<MyCounterApp />);

    const labelH1 = screen.getByRole("heading", { level: 1 });
    const button = screen.getByRole("button", { name: `+1` });

    fireEvent.click(button);
    expect(labelH1.innerHTML).toContain(`counter :6`);
  });


    test("mostrar decrementar el contador", () => {
    render(<MyCounterApp />);

    const labelH1 = screen.getByRole("heading", { level: 1 });
    const button = screen.getByRole("button", { name: `-1` });

    fireEvent.click(button);
    expect(labelH1.innerHTML).toContain(`counter :4`);
  });
});
