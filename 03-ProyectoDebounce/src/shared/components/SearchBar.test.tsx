import { describe, test, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { SearchBar } from "./SearchBar";

describe("Testing para SearchBar, useEffect debounce", () => {
  test("debe llamar a onSearch después de 800ms al escribir", async () => {
    vi.useFakeTimers();

    const onSearchMock = vi.fn();
    render(<SearchBar onSearch={onSearchMock} />);

    const input = screen.getByPlaceholderText("Buscar gifss...");

    fireEvent.change(input, { target: { value: "ga" } });
    vi.advanceTimersByTime(400); // mitad del tiempo
    fireEvent.change(input, { target: { value: "gato" } }); // cambia antes de los 800m
   
    // Avanzamos 800ms del debounce
    vi.advanceTimersByTime(800);

    // Ahora sí debe haberse llamado con el valor "gato"
    expect(onSearchMock).toHaveBeenCalledTimes(1);
    expect(onSearchMock).toHaveBeenCalledWith("gato");

    vi.useRealTimers();
  });
});
