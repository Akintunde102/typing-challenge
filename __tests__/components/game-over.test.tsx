import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import GameOver from '../../components/game-over';


describe('Game Over Component', () => {


    describe("when presentStage is not set to -1", () => {
        let renderedComponent: any;

        beforeEach(() => {
            renderedComponent = render(<GameOver scores={{ speed: 2, points: 20 }} presentStage={0} />)
        })

        it('does not renders a text', () => {
            expect(renderedComponent.container).toBeEmptyDOMElement();
        })

        it('matches snapshot', () => {
            expect(renderedComponent).toMatchSnapshot()
        })

    })


    describe("when presentStage is set to -1", () => {
        let renderedComponent: any;

        beforeEach(() => {
            renderedComponent = render(<GameOver scores={{ speed: 2, points: 20 }} presentStage={-1} />)
        })

        it('renders end of challenge', () => {
            const text = screen.getByText("Typing Challenge Has Ended");
            expect(text).toBeInTheDocument()
        })

        it('matches snapshot', () => {
            expect(renderedComponent).toMatchSnapshot()
        });
    });






})