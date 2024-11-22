import { renderHook, act } from "@testing-library/react-hooks";
import { useModal } from "../Components/Modal/UseModal";

describe("useModal hook", () => {
  it("should toggle modal visibility", () => {
    const { result } = renderHook(() => useModal());

    act(() => {
      result.current.openModal();
    });
    expect(result.current.isOpen).toBe(true);

    act(() => {
      result.current.closeModal();
    });
    expect(result.current.isOpen).toBe(false);
  });
});
