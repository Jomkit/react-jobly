import { render } from "@testing-library/react";
import CompanyCard from "../Features/Company/CompanyCard";
import { MemoryRouter } from "react-router-dom";
import { FAKEDATA } from "./_testCommon";

it('should render without crashing', () => { 
    let { handle, name, description, logoUrl } = FAKEDATA[0];
    render(
        <MemoryRouter>
            <CompanyCard key={handle} title={name} description={description} logoUrl={logoUrl} />
        </MemoryRouter>
    );
})

it('should match snapshot', () => { 
    let { handle, name, description, logoUrl } = FAKEDATA[0];
    const { asFragment } = render(
        <MemoryRouter>
            <CompanyCard key={handle} title={name} description={description} logoUrl={logoUrl} />
        </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
})