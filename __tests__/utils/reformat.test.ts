import { reformatTime } from "../../utils";

describe("reformatTime", () => {
    test("should return '00:00' when hours is 0 and minutes is 0", () => {
        expect(reformatTime({ hours: 0, minutes: 0, seconds: 0 })).toBe("00:00");
    })

    test("should return '01:00:02' when hours is 1, minutes is 0 seconds is 2", () => {
        expect(reformatTime({ hours: 1, minutes: 0, seconds: 2 })).toBe("01:00:02");
    });
});
