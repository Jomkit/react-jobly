import { render, waitFor } from "@testing-library/react";
import CompanyList from "../components/CompanyList";
import { MemoryRouter } from "react-router-dom";
import JoblyApi from "../api.ts";
import { FAKEDATA } from "./_testCommon.ts";

vi.mock('../api.ts');
JoblyApi.getCompanies = vi.fn().mockResolvedValue(FAKEDATA);

it('should render without crashing', () => { 
    render(
        <MemoryRouter>
            <CompanyList data={FAKEDATA} setData={vi.fn()} />
        </MemoryRouter>
    );
})

it('should display a list of companies', async () => { 
    const { getAllByRole } = render(
        <MemoryRouter>
            <CompanyList data={FAKEDATA} setData={vi.fn()} />
        </MemoryRouter>
    );

    expect(JoblyApi.getCompanies).toHaveBeenCalled();

    await waitFor(() => {
        const companyList = getAllByRole('listitem');
        expect(companyList).toHaveLength(2);
        expect(companyList[0]).toHaveTextContent(FAKEDATA[0].name);
        expect(companyList[1]).toHaveTextContent(FAKEDATA[1].name);
    })
 })