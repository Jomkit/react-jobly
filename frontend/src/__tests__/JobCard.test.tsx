import { render } from "@testing-library/react"
import { TESTJOBS } from "./_testCommon";
import JobCard from "../components/JobCard";
import { MemoryRouter } from "react-router-dom";

const { id, title, salary, equity, companyName } = TESTJOBS[0];

it('should render without crashing', () => { 
    render(
        <MemoryRouter>
            <JobCard key={id} title={title} salary={salary} equity={equity} companyName={companyName } />
        </MemoryRouter>
    );
})

