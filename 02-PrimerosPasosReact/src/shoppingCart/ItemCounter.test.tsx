import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import ItemCounter from "./ItemCounter";

describe("Prueba ItemCounter", () => {
  test("mostrar titulo de producto por defecto", () => {
    const name = "Control de nintendo";
    render(<ItemCounter name={name} isActive={true} availableQuantity={2} />);

    expect(screen.getByText(name)).toBeDefined();

    //screen.debug()
  });

  test("mostrar el valor inical del producto por defecto", () => {
    const availableQuantity = 10;
    const name = "Control de nintendo2";
    render(<ItemCounter name={name} isActive={true} availableQuantity={10} />);

    expect(screen.getByText(availableQuantity.toString())).toBeDefined();

    //screen.debug()
  });

  {
    /* Testear botones de incrementacion*/
  }
  test("mostrar 4 al momento de darle al boton de -1", () => {
    render(
      <ItemCounter
        name={"test boton +1"}
        isActive={true}
        availableQuantity={1}
      />
    );
    screen.debug();

    const [buttonSubtract] = screen.getAllByRole("button");
    fireEvent.click(buttonSubtract);

    screen.debug();

    expect(screen.getByText("4")).toBeDefined();
  });

  test("mostrar 6 al momento de darle al boton de +1", () => {
    render(
      <ItemCounter
        name={"test boton +1"}
        isActive={true}
        availableQuantity={1}
      />
    );
    screen.debug();

    const button = screen.getAllByRole("button");
    const buttonAdd = button[1];
    fireEvent.click(buttonAdd);

    screen.debug();

    expect(screen.getByText("6")).toBeDefined();
  });

  test("NO permitir que baje de la cantidad de 1", () => {
    const availableQuantity = 1;
    render(
      <ItemCounter
        name={"test boton  no pasar de 1"}
        isActive={true}
        availableQuantity={availableQuantity}
      />
    );
    screen.debug();

    const [buttonSubtract] = screen.getAllByRole("button");
    fireEvent.click(buttonSubtract);
    fireEvent.click(buttonSubtract);
    fireEvent.click(buttonSubtract);
    fireEvent.click(buttonSubtract);
    fireEvent.click(buttonSubtract);
    fireEvent.click(buttonSubtract);
    screen.debug();

    expect(screen.getByTestId("valor")).toBeDefined();
  });
});
