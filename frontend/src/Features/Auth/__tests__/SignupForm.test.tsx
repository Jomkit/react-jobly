import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { sharedMethodsContext } from "../../../components/contexts/sharedMethodsContext";
import SignupForm from "../SignupForm";
import React from "react"
import { TESTUSER2 } from "../../../__tests__/_testCommon";

function setup(tsx: React.ReactNode) {
    return {
        user: userEvent.setup(),
        ...render(tsx)
    }
}

const signup = vi.fn();
const login = vi.fn();
const logout = vi.fn();

const TestSignupForm = () => {
    return (
        <MemoryRouter initialEntries={["/"]}>
            <sharedMethodsContext.Provider value={{signup, login, logout}} >
                <SignupForm />
            </sharedMethodsContext.Provider>
        </MemoryRouter>
    )
}

it('should render without crashing', () => { 
    render(<TestSignupForm />)
})

it('should match snapshot', () => { 
    const { asFragment } = render(<TestSignupForm />);
    expect(asFragment()).toMatchSnapshot();
})

it('should update name field on change', async () => { 
    const { getByLabelText, user } = setup(<TestSignupForm />);

    const nameInput = getByLabelText('Username');
    await user.type(nameInput, 'foo');
    expect(nameInput).toHaveValue('foo');
})

it('should redirect to home page on successful submit', async () => { 
    const { getByLabelText, getByText, user } = setup(<TestSignupForm />);

    const userNameInput = getByLabelText('Username');
    const passwordInput = getByLabelText('Password');
    const firstNameInput = getByLabelText('First Name');
    const lastNameInput = getByLabelText('Last Name');
    const emailInput = getByLabelText('Email');
    const submitBtn = getByText('Submit');

    await user.type(userNameInput, TESTUSER2.username);
    await user.type(passwordInput, TESTUSER2.password);
    await user.type(firstNameInput, TESTUSER2.firstName);
    await user.type(lastNameInput, TESTUSER2.lastName);
    await user.type(emailInput, TESTUSER2.email);
    
    await user.click(submitBtn);

    expect(signup).toHaveBeenCalled();
    expect(signup).toHaveBeenCalledWith(TESTUSER2);
})