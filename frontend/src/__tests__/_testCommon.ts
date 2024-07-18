import { userInterface } from "../types";

const TESTTOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
"SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
"FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

const TESTUSER: userInterface = {
    username: "testuser",
    password: "password",
    firstName: "first",
    lastName: "last",
    email: "test@gmail.com",
    applications: []
}
const TESTUSER2: userInterface = {
    username: "testman",
    password: "password123",
    firstName: "first",
    lastName: "last",
    email: "test@gmail.com",
    applications: []
}

const FAKEDATA = [
    {
        handle: "test1",
        name: "test company 1",
        description: "this is a test",
        numEmployees: 3,
        logoUrl: "test logo"
    },
    {
        handle: "test2",
        name: "test company 2",
        description: "this is a test",  
        numEmployees: 3,
        logoUrl: "test logo"
    }
];

const TESTJOBS = [
    {
        id: 1,
        title: "test job 1",
        salary: 1000,
        equity: 0.1,
        companyName: "test company 1",
        companyHandle: "test1"
    },
    {
        id: 2,
        title: "test job 2",
        salary: 2000,
        equity: 0.2,
        companyName: "test company 2",
        companyHandle: "test2"
    }
]

export { FAKEDATA, TESTJOBS, TESTTOKEN, TESTUSER, TESTUSER2 };