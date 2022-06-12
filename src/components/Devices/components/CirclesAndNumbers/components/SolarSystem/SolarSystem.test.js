import { render,screen } from "@testing-library/react";
import SolarSystem from "./SolarSystem";

describe('SolarSystem Component', ()=>{
    test("Renders a div with id 'solarsystem'",()=>{
        const {container} = render(<SolarSystem numberOfDevice={{deviceArray: []}}/>);
        expect(container.getElementsByTagName('div').length).not.toBe(0);
    })
})