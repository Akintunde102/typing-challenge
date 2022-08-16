import { showStage } from "../../utils";

describe("showStage", () => {

    test.each`
     presentStage | pageStage  | expected
     ${0}         | ${1}       | ${true}
     ${1}         | ${2}       | ${true}
     ${1}         | ${0}       | ${false}
  `("should return $expected when presentStage is $presentStage and pageStage is $pageStage",
        ({ presentStage, pageStage, expected }: any) => {
            expect(showStage(presentStage, pageStage)).toBe(expected);
        }
    )
});
