import { fireEvent, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SearchForm from "../SearchForm.tsx";
import { FAKEDATA } from "../../../__tests__/_testCommon.ts";
import JoblyApi from "../../../api.ts";

vi.mock("../../../api.ts");
JoblyApi.getCompanies = vi.fn().mockResolvedValue(FAKEDATA);

const mockSetData = vi.fn();

const TestSearchForm = () => {
    return (
        <MemoryRouter>
            <SearchForm setData={mockSetData} />
        </MemoryRouter>
    )
}

it('should render without crashing', () => { 
    render(<TestSearchForm />);
})

it('should match snapshot', () => { 
    const { asFragment } = render(<TestSearchForm />);

    expect(asFragment()).toMatchSnapshot();
})

it('should call JoblyApi.getCompanies when search submit button pressed', () => { 
    const { getByText, getByLabelText } = render(<TestSearchForm />);

    const submitBtn = getByText("Search");
    const nameInput = getByLabelText("Name");
    fireEvent.change(nameInput, { target: { value: "test company 1" } });
    fireEvent.click(submitBtn);
    expect(JoblyApi.getCompanies).toHaveBeenCalled();
})