import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import StageOne from '../../components/stage-one';

jest.mock("../../resources/text", () => ({
    texts: ["TextOne", "TextTwo", "TextThree"]
}))

describe('Stage One Component', () => {

    const mockSetText = jest.fn();
    const mockSetStage = jest.fn();

    describe("when presentStage is not set to previous stage", () => {
        let renderedComponent: any;

        beforeEach(() => {
            renderedComponent = render(<StageOne setText={mockSetText} setStage={mockSetStage} presentStage={1} />)
        })

        it('does not renders a text', () => {
            expect(renderedComponent.container).toBeEmptyDOMElement();
        })

        it('matches snapshot', () => {
            expect(renderedComponent).toMatchSnapshot()
        })

    })

    describe("when presentStage is set to previous stage", () => {
        let renderedComponent: any;

        beforeEach(() => {
            renderedComponent = render(<StageOne setText={mockSetText} setStage={mockSetStage} presentStage={0} />)
        })

        it('shows title to pick text', () => {
            const text = screen.getByText("Pick Text");
            expect(text).toBeInTheDocument()
        })


        it('shows list of texts', () => {
            const textOne = screen.getByText("TextOne");
            const textTwo = screen.getByText("TextTwo");
            const textThree = screen.getByText("TextThree");
            expect(textOne).toBeInTheDocument();
            expect(textTwo).toBeInTheDocument();
            expect(textThree).toBeInTheDocument();
        })

        it('matches snapshot', () => {
            expect(renderedComponent).toMatchSnapshot()
        });

    })
});





