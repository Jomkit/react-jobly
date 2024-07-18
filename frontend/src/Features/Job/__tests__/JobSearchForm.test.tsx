import { fireEvent, render } from "@testing-library/react"
import JobSearchForm from "../JobSearchForm"
import JoblyApi from "../../../api.ts";
import { MemoryRouter } from "react-router-dom";

// Mock api
vi.mock("../../../api.ts");
JoblyApi.getJobs = vi.fn();
const mockSetData = vi.fn();

const TestJobSearchForm = () => {
    return (
    <MemoryRouter>
        <JobSearchForm setData={mockSetData} />
    </MemoryRouter>
    )
}

describe("Job Search Form", () => {
    it('should render without crashing', () => { 
        render(<TestJobSearchForm />);
    });

    it('should match snapshot', () => { 
        const { asFragment } = render(<TestJobSearchForm />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should call JoblyApi.getJobs when search submit button pressed', () => { 
        const { getByText, getByLabelText } = render(<TestJobSearchForm />);

        const submitBtn = getByText("Search");
        const nameInput = getByLabelText("Job Title");
        fireEvent.change(nameInput, { target: { value: "test job 1" } });
        fireEvent.click(submitBtn);

        expect(JoblyApi.getJobs).toHaveBeenCalled();
        expect(JoblyApi.getJobs).toHaveBeenCalledWith({
            title: "test job 1", 
            minSalary: 0,
            hasEquity: false
        });
    })
})