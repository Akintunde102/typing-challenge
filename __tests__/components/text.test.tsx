import { fireEvent, render, screen } from '@testing-library/react'
import Text from '../../components/text'
import '@testing-library/jest-dom'

describe('Text Component', () => {
    const mockHandleTextPick = jest.fn();
    const testText = 'text';
    let renderedComponent: any;

    beforeEach(() => {
        renderedComponent = render(<Text text={testText} handleTextPick={mockHandleTextPick} />)
    })

    it('renders a text', () => {
        const text = screen.getByText(testText);
        expect(text).toBeInTheDocument()
    })

    it('has a link a', () => {
        const button = screen.getByText('Choose Text').closest('button');

        fireEvent.click(button)

        expect(mockHandleTextPick).toHaveBeenCalledTimes(1);
    })

    it('matches snapshot', () => {
        expect(renderedComponent).toMatchSnapshot()
    })
})