import { render, screen } from '@testing-library/react'
import { useState } from 'react';
import '@testing-library/jest-dom'
import StageThree from '../../components/stage-three';

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: jest.fn()
}))

describe('Stage Three Component', () => {

    beforeEach(() => {
        useState.mockImplementation(jest.requireActual('react').useState);
    })

    const mockSetDuration = jest.fn();
    const mockSetStage = jest.fn();
    const mockHandleTextInput = jest.fn();
    const mockSetStart = jest.fn();
    const mockText = 'Hello World';


    describe("when start state is false", () => {
        let renderedComponent: any;

        beforeEach(() => {
            useState.mockImplementation(() => [false, mockSetStart])
            renderedComponent = render(<StageThree handleTextInput={mockHandleTextInput} setDuration={mockSetDuration} setStage={mockSetStage} presentStage={2} text={mockText} duration={5} />)
        })

        it('shows text to start challenge to pick text', () => {
            const text = screen.getByText("Start Challenge");
            expect(text).toBeInTheDocument()
        })

        it('matches snapshot', () => {
            expect(renderedComponent).toMatchSnapshot()
        })

    })

    describe("when presentStage is not set to previous stage", () => {
        let renderedComponent: any;

        beforeEach(() => {
            useState.mockImplementation(() => [true, () => { }])
            renderedComponent = render(<StageThree handleTextInput={mockHandleTextInput} setDuration={mockSetDuration} setStage={mockSetStage} presentStage={3} text={mockText} duration={5} />)
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
            useState.mockImplementation(() => [true, mockSetStart])

            renderedComponent = render(<StageThree handleTextInput={mockHandleTextInput} setDuration={mockSetDuration} setStage={mockSetStage} presentStage={2} text={mockText} duration={5} />)
        })


        it('shows Instructions', () => {
            const textInstructions = screen.getByText("Type Highlighted Text In the Green Box Below");
            expect(textInstructions).toBeInTheDocument();
        });

        it('shows text to type', () => {
            const textToType = screen.getByText(mockText);
            expect(textToType).toBeInTheDocument();
        })

        it('matches snapshot', () => {
            expect(renderedComponent).toMatchSnapshot()
        });

    })
});





