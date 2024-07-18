import { render } from "@testing-library/react";
import CompanyCard from "../CompanyCard";
import { MemoryRouter } from "react-router-dom";
import { FAKEDATA } from "../../../__tests__/_testCommon";

it('should render without crashing', () => { 
    const { handle, name, description, logoUrl } = FAKEDATA[0];
    render(
        <MemoryRouter>
            <CompanyCard key={handle} handle={handle} title={name} description={description} logoUrl={logoUrl} />
        </MemoryRouter>
    );
})

it('should match snapshot', () => { 
    let { handle, name, description, logoUrl } = FAKEDATA[0];
    const { asFragment } = render(
        <MemoryRouter>
            <CompanyCard key={handle} handle={handle} title={name} description={description} logoUrl={logoUrl} />
        </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
})