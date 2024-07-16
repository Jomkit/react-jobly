import { render } from "@testing-library/react"
import Jobs from "../Features/Job/Jobs";

describe("Jobs page", () => {
    it('should render without crashing', () => { 
        render(<Jobs />);
     })

})