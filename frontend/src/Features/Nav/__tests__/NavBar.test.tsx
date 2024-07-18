import { render } from "@testing-library/react"
import NavBar from "../NavBar"
import { MemoryRouter } from "react-router-dom"

const TestNavBar = () => {
    return (
        <MemoryRouter>
            <NavBar />
        </MemoryRouter>
    )
}

it('should render without crashing', () => { 
    render(<TestNavBar />);
})

it('should match snapshot', () => { 
    const { asFragment } = render(<TestNavBar />);
    expect(asFragment()).toMatchSnapshot();  
})