import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { sharedMethodsContext } from "../../../components/contexts/sharedMethodsContext";
import { render } from "@testing-library/react";
import LogoutForm from "../LogoutForm";

function setup(tsx: React.ReactNode) {
    return {
        user: userEvent.setup(),
        ...render(tsx)
    }
}

const signup = vi.fn();
const login = vi.fn();
const logout = vi.fn();

const TestLogoutForm = () => {
    return (
        <MemoryRouter initialEntries={["/"]}>
            <sharedMethodsContext.Provider value={{signup, login, logout}} >
                <LogoutForm />
            </sharedMethodsContext.Provider>
        </MemoryRouter>
    )
}

it('should should render without crashing', () => { 
    render(<TestLogoutForm />);
})

it('should match snapshot', () => { 
    const { asFragment } = render(<TestLogoutForm />);
    expect(asFragment()).toMatchSnapshot();
})

it('should call logout function when logout button clicked', async () => { 
    const { user, getByText } = setup(<TestLogoutForm/>);

    const logoutBtn = getByText("Logout");

    await user.click(logoutBtn);
    expect(logout).toHaveBeenCalled();
})
