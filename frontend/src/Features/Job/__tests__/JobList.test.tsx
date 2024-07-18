import { render, waitFor } from "@testing-library/react";
import JobList from "../JobList";
import JoblyApi from "../../../api";
import { TESTJOBS, TESTUSER } from "../../../__tests__/_testCommon";
import { MemoryRouter } from "react-router-dom";
import { userContext } from "../../../components/contexts/userContext";

vi.mock('../../../api.ts');
JoblyApi.getJobs = vi.fn().mockResolvedValue(TESTJOBS);
const mockSetJobs = vi.fn();
const TestApp = () => {
    return (
        <MemoryRouter>
            <userContext.Provider value={TESTUSER}>
                <JobList data={TESTJOBS} setData={mockSetJobs} />
            </userContext.Provider>
        </MemoryRouter>
    )
}

it('should render without crashing', () => { 
    render(
        <TestApp />
    );
})

it('should render a list of jobs with title, salary, equity, and company', async () => { 
    const { getAllByRole } = render(<TestApp />);

    expect(mockSetJobs).toHaveBeenCalled();
    
    await waitFor(() => {
        const jobList = getAllByRole('listitem');
        expect(jobList).toHaveLength(2);
    })
})