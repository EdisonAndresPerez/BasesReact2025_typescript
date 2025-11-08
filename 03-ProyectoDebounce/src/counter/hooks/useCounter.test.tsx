import { act, renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { useCounter } from "./useCounter";

describe("prueba para useCounter", () => {
  test("debe de inicializar el valor por defecto que es 10", () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.counter).toBe(10);
  });

  test("debe de incrementar el counter cuando se llame la función handleAdd", () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.handleAdd();
    });
    expect(result.current.counter).toBe(11);
  });

  test("debe de restar el counter cuando se llame la funcion handleSubtract", () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.handleSubtract();
    });

    expect(result.current.counter).toBe(9);
  });

  test("debe de reiniciar  el counter cuando se llame la funcion handleReset y devolver el valor inicial que es 10", () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.handleSubtract();
    });

    act(() => {
      result.current.handleSubtract();
    });

    act(() => {
      result.current.handleReset();
    });

    expect(result.current.counter).toBe(10);
  });
});
