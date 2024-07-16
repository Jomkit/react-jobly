import { render } from "@testing-library/react";
import JobList from "../Features/Job/JobList";
import { TESTJOBS } from "./_testCommon";
import { MemoryRouter } from "react-router-dom";

it('should render without crashing', () => { 
    render(
        <MemoryRouter>
            <JobList data={TESTJOBS} setData={vi.fn()} />
        </MemoryRouter>
    );
})

it('should render a list of jobs with title, salary, equity, and company', () => { 
    const {} = render(
        <MemoryRouter>
            <JobList data={TESTJOBS} setData={vi.fn()} />
        </MemoryRouter>
    )
})