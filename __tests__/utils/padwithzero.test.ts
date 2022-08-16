import { padWithZero } from "../../utils";

describe("padWithZero", () => {
    test("should return '01' when num is 1", () => {
        expect(padWithZero(1)).toBe("01");
    })

    test("should return '00' when num is 0", () => {
        expect(padWithZero(0)).toBe("00");
    })

    test("should return '14' when num is 14", () => {
        expect(padWithZero(14)).toBe("14");
    });
})