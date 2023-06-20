import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"
 
describe('pruebas de <GifExpertApp/>', () => { 
    test('debe aparecer el texto GifExpertApp', () => { 
        render(<GifExpertApp/>)
        expect(screen.getByText('GifExpertApp'))
     })
 
    test('no debe de añadir categoria', () => { 
        render(<GifExpertApp/>)
 
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')
 
        fireEvent.input(input, {target: { value: 'Alejandria'}})
        fireEvent.submit(form)

        expect(screen.queryByText('Alejandria')).toBeTruthy()
 
     })
 })