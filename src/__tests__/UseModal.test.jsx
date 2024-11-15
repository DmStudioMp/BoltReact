import { renderHook, act } from "@testing-library/react-hooks";
import useModal from "../Components/UseModal";

describe("useModal Hook", () => {
  test("should initialize with modal closed", () => {
    const { result } = renderHook(() => useModal());
    expect(result.current.isOpen).toBe(false);
  });

  test("should open the modal", () => {
    const { result } = renderHook(() => useModal());

    act(() => {
      result.current.openModal();
    });

    expect(result.current.isOpen).toBe(true);
  });

  test("should close the modal", () => {
    const { result } = renderHook(() => useModal());

    act(() => {
      result.current.openModal();
    });

    act(() => {
      result.current.closeModal();
    });

    expect(result.current.isOpen).toBe(false);
  });
});
