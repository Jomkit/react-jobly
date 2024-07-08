import { render } from "@testing-library/react"
import Jobs from "../components/Jobs";
import { TESTJOBS } from "./_testCommon.ts";

describe("Jobs page", () => {
    it('should render without crashing', () => { 
        render(<Jobs />);
     })

})