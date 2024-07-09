
interface companiesInterface {
    handle: string;
    name: string;
    description: string;
    numEmployees: number;
    logoUrl: string;
}

interface jobsInterface {
  id?: number;
  title: string;
  salary: number;
  equity: number;
  companyName: string;
  companyHandle?: string;
}
interface propsListInterface {
  data: companiesInterface[] | jobsInterface[] | null;
  setData: Function;
}

export type { companiesInterface, jobsInterface, propsListInterface }