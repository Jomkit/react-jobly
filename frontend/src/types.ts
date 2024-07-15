
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

interface userInterface {
  username: string;
  password: string; 
  firstName: string;
  lastName: string;
  email: string;
}

interface propsListInterface {
  data: companiesInterface[] | jobsInterface[] | null;
  setData: Function;
}

interface companyFormInterface {
  name: string;
  minEmployees: number;
  maxEmployees: number;
}

interface jobsFormInterface {
  title: string;
  minSalary: number;
  hasEquity: boolean;
}

interface authInterface {
  signup: Function;
  login: Function;
  logout: Function;
}

interface textInputInterface {
  label: string;
  id?: string;
  name?: string;
  type: string;
}

export type { companiesInterface, jobsInterface, userInterface, propsListInterface, companyFormInterface, jobsFormInterface, authInterface, textInputInterface }