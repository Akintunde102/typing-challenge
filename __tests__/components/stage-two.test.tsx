import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import StageTwo from '../../components/stage-two';

describe('Stage Two Component', () => {

    const mockSetDuration = jest.fn();
    const mockSetStage = jest.fn();

    describe("when presentStage is not set to previous stage", () => {
        let renderedComponent: any;

        beforeEach(() => {
            renderedComponent = render(<StageTwo setDuration={mockSetDuration} setStage={mockSetStage} presentStage={2} />)
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
            renderedComponent = render(<StageTwo setDuration={mockSetDuration} setStage={mockSetStage} presentStage={1} />)
        })

        it('shows title to pick text', () => {
            const text = screen.getByText("Pick Duration");
            expect(text).toBeInTheDocument()
        })


        it('shows Durations', () => {
            const textOne = screen.getByText("1min");
            const textTwo = screen.getByText("2mins");
            const textThree = screen.getByText("5mins");
            const textFour = screen.getByText("Set Custom Duration");
            expect(textOne).toBeInTheDocument();
            expect(textTwo).toBeInTheDocument();
            expect(textThree).toBeInTheDocument();
            expect(textFour).toBeInTheDocument();
        })

        it('matches snapshot', () => {
            expect(renderedComponent).toMatchSnapshot()
        });

    })
});





