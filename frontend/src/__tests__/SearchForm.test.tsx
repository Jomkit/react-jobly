import { fireEvent, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SearchForm from "../components/SearchForm";
import { FAKEDATA } from "./_testCommon";
import JoblyApi from "../api.ts";

vi.mock("../api.ts");
JoblyApi.getCompanies = vi.fn().mockResolvedValue(FAKEDATA);

const mockSetData = vi.fn();

it('should render without crashing', () => { 
    render(
        <MemoryRouter>
            <SearchForm setCompaniesData={mockSetData} />
        </MemoryRouter>
    )
})

it('should match snapshot', () => { 
    const { asFragment } = render(
        <MemoryRouter>
            <SearchForm setCompaniesData={mockSetData} />
        </MemoryRouter>
    )

    expect(asFragment()).toMatchSnapshot();
})

it('should call JoblyApi.getCompanies when search submit button pressed', () => { 
    const { getByText, getByLabelText } = render(
        <MemoryRouter>
            <SearchForm setCompaniesData={mockSetData} />
        </MemoryRouter>
    )

    const submitBtn = getByText("Search");
    const nameInput = getByLabelText("Name");
    fireEvent.change(nameInput, { target: { value: "test company 1" } });
    fireEvent.click(submitBtn);
    expect(JoblyApi.getCompanies).toHaveBeenCalled();
})