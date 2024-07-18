import { render } from "@testing-library/react"
import { TESTJOBS, TESTUSER } from "../../../__tests__/_testCommon";
import JobCard from "../JobCard";
import { MemoryRouter } from "react-router-dom";
import { userContext } from "../../../components/contexts/userContext";

const { id, title, salary, equity, companyName } = TESTJOBS[0];

const TestJobCard = () => {
    return (
        <MemoryRouter>
            < userContext.Provider value={TESTUSER}>
                <JobCard key={id} id={id} title={title} salary={salary} equity={equity} companyName={companyName } />
            </userContext.Provider>
        </MemoryRouter>
    )
}

it('should render without crashing', () => { 
    render(<TestJobCard />);
})

it('should match snapshot', () => { 
    const { asFragment } = render(<TestJobCard />);
    expect(asFragment()).toMatchSnapshot();
 })
