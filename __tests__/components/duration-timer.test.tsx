import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import DurationTimer from '../../components/duration-timer';


jest.mock("../../utils", () => ({
    reformatTime: () => "reformattedTime",
    convertTimeToMilliSeconds: jest.fn(),
    getTimeDetails: jest.fn()
}))

describe('Duration Timer Component', () => {
    const mockOnZero = jest.fn();

    let renderedComponent: any;

    beforeEach(() => {
        renderedComponent = render(<DurationTimer onZero={mockOnZero} time={1} />)
    })

    it('time gets reformatted', () => {
        const text = screen.getByText("reformattedTime");
        expect(text).toBeInTheDocument()
    })

    it('matches snapshot', () => {
        expect(renderedComponent).toMatchSnapshot()
    })
})