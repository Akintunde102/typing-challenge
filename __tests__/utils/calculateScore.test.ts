import { calculateScore } from "../../utils";

describe("calculateScores", () => {

    test("should correct speed and points", () => {
        const expectedResult = { points: 1, speed: 1 };
        const result = calculateScore("hello", "hello", 1);
        expect(result).toEqual(expectedResult);
    });

    test("should zero point and speed when input is fully wrong", () => {
        const expectedResult = { points: 0, speed: 0 };
        const result = calculateScore("hello here", "hellop ere", 1);
        expect(result).toEqual(expectedResult);
    });
});

