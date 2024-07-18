import { render } from "@testing-library/react"
import Jobs from "../Jobs";
import { userContext } from "../../../components/contexts/userContext";
import { MemoryRouter } from "react-router-dom";
import { TESTJOBS, TESTUSER } from "../../../__tests__/_testCommon";
import JoblyApi from "../../../api.ts";

vi.mock('../../../api.ts')
JoblyApi.getJobs = vi.fn().mockResolvedValue(TESTJOBS);

const TestJobs = () => {
    return (
        <MemoryRouter>
            <userContext.Provider value={TESTUSER}>
                <Jobs />
            </userContext.Provider>
        </MemoryRouter>
    )
}

describe("Jobs page", () => {
    it('should render without crashing', () => { 
        render(<TestJobs />);
     })
})