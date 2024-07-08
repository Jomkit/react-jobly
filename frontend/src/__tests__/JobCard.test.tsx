import { render } from "@testing-library/react"
import { TESTJOBS } from "./_testCommon";
import JobCard from "../components/JobCard";
import { MemoryRouter } from "react-router-dom";

const testJob = TESTJOBS[0];

it('should render without crashing', () => { 
    render(
        <MemoryRouter>
            <JobCard jobData={testJob} />
        </MemoryRouter>
    );
})

