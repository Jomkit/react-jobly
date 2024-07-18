import { MemoryRouter } from "react-router-dom";
import { sharedMethodsContext } from "../../../components/contexts/sharedMethodsContext";
import LoginForm from "../LoginForm";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

const TestLoginForm = () => {
    return (
        <MemoryRouter initialEntries={['/']}>
            <sharedMethodsContext.Provider value={{signup, login, logout}}>
                <LoginForm />
            </sharedMethodsContext.Provider>
        </MemoryRouter>
    )
}

it('should render without crashing', () => { 
    render(<TestLoginForm />);
})

it('should match snapshot', () => {
    const { asFragment } = render(<TestLoginForm />);

    expect(asFragment()).toMatchSnapshot();
})

it('should update name field on change', async () => { 
    const { getByLabelText, user } = setup(<TestLoginForm />);

    const nameInput = getByLabelText('Username');
    await user.type(nameInput, 'foo');
    expect(nameInput).toHaveValue('foo');
})

it('should redirect to home page on successful submit', async () => {
    const { getByLabelText, getByText, user } = setup(<TestLoginForm />);

    const userNameInput = getByLabelText('Username');
    const passwordInput = getByLabelText('Password');
    const submitBtn = getByText('Submit');

    await user.type(userNameInput, TESTUSER2.username);
    await user.type(passwordInput, TESTUSER2.password);
    
    await user.click(submitBtn);

    expect(login).toHaveBeenCalled();
    expect(login).toHaveBeenCalledWith({username: TESTUSER2.username, password: TESTUSER2.password});
})