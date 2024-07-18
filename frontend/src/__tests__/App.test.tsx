import { render } from '@testing-library/react';
import App from '../App';
import { MemoryRouter } from 'react-router-dom';

it("should display welcome message", () => {
    const { queryByText } = render(
        <MemoryRouter>
            <App />
        </MemoryRouter>
    );
    const msg = queryByText("All the jobs in one, convenient place", {exact: false});
    expect(msg).toBeInTheDocument();
})