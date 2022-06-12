import { render,screen } from "@testing-library/react";
import Planet from "./Planet";

describe('Planet Component', ()=>{
    test("Renders a div with className 'planet'",()=>{
        const {container} = render(<Planet val = {{left: '10px',top: '10px'}}/>);
        expect(container.getElementsByClassName('planet').length).not.toBe(0);
    })
})