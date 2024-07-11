import { fireEvent, render } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom"
import SignUpForm from "../components/SignUpForm"
import React from "react"

function setup(tsx: React.ReactNode) {
    return {
        user: userEvent.setup(),
        ...render(tsx)
    }
}

it('should render without crashing', () => { 
    render(
        <MemoryRouter>
            <SignUpForm />
        </MemoryRouter>
    )
})

it('should render form component', () => { 
    const { queryByText } = render(
        <MemoryRouter>
            <SignUpForm />
        </MemoryRouter>
    )
    const submitBtn = queryByText("Submit", {exact: false});
    expect(submitBtn).toBeVisible();
})

it('should update name field on change', async () => { 
    const { queryByText, getByLabelText } = render(
        <MemoryRouter>
            <SignUpForm />
        </MemoryRouter>
    )
    const { user } = setup(<SignUpForm />);

    const nameInput = getByLabelText('Username');
    await user.type(nameInput, 'foo');
    expect(nameInput).toHaveValue('foo');
})