import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import CustomDuration from '../../components/custom-duration';

describe('Custom Duration Component', () => {
    const mockHandleDurationPick = jest.fn();

    describe("when showCustomDuration is set to  true", () => {
        let renderedComponent: any;

        beforeEach(() => {
            renderedComponent = render(<CustomDuration showCustomDuration={true} handleDurationPick={mockHandleDurationPick} />)
        })

        it('renders a text', () => {
            const text = screen.getByText("Fill In Custom (in mins)");
            expect(text).toBeInTheDocument()
        })

        it('has a link to set duration', () => {
            const button = screen.getByText('Set').closest('button');

            fireEvent.click(button)

            expect(mockHandleDurationPick).toHaveBeenCalledTimes(1);
        })

        it('matches snapshot', () => {
            expect(renderedComponent).toMatchSnapshot()
        })
    })


    describe("when showCustomDuration is set to false", () => {
        let renderedComponent: any;

        beforeEach(() => {
            renderedComponent = render(<CustomDuration showCustomDuration={false} handleDurationPick={mockHandleDurationPick} />)
        })

        it('does not renders a text', () => {
            expect(renderedComponent.container).toBeEmptyDOMElement();
        })

        it('matches snapshot', () => {
            expect(renderedComponent).toMatchSnapshot()
        })
    })
})