import { MemoryRouter } from "react-router-dom"
import Profile from "../Profile"
import { render } from "@testing-library/react"
import { userContext } from "../../../components/contexts/userContext"
import { TESTUSER } from "../../../__tests__/_testCommon"

const TestProfile = () => {
    return (
        <MemoryRouter>
            <userContext.Provider value={TESTUSER}>
                <Profile />
            </userContext.Provider>
        </MemoryRouter>
    )
}

it('should render without crashing', () => { 
    render(<TestProfile />);
})

it('should match snapshot', () => { 
    const { asFragment } = render(<TestProfile />);
    expect(asFragment()).toMatchSnapshot();  
})