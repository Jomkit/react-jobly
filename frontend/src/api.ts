import axios, { AxiosError } from "axios";

const BASE_URL = import.meta.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

export default class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token: string;

  static async request(endpoint: string, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
        if(err instanceof AxiosError && err.response) {
        console.error("API Error:", err.response);
        let message = err.response.data.error.message;
        throw Array.isArray(message) ? message : [message];
      }
    }
  }

  // Individual API routes

  /************** COMPANIES **************/
  /** Get details on all companies */
  static async getCompanies(qParam: Object = {}) {
    let url = `companies/`;
    let isFirst: boolean = true;
    // if qParam is not empty, append it to the url
    for(const [key, value] of Object.entries(qParam)) {
      if(value && isFirst){
        url += `?${key}=${value}`;
        isFirst = false;
      }else if(value) {
        url += `&${key}=${value}`;
      }
    }

    let res = await this.request(url);
    return res.companies;
  }
  
  /** Get details on a company by handle. */
  static async getCompany(handle: string) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }
  
  /****************** JOBS ******************/
  static async getJobs(qParam: Object = {}) {
    let url = `jobs/`;
    let isFirst: boolean = true;
    // if qParam is not empty, append it to the url
    for(const [key, value] of Object.entries(qParam)) {
      if(value && isFirst){
        url += `?${key}=${value}`;
        isFirst = false;
      }else if(value) {
        url += `&${key}=${value}`;
      }
    }
    let res = await this.request(url);
    return res.jobs;
  }

  static async getJob(id: number) {
    let res = await this.request(`jobs/${id}`);
    return res.job;
  }

  /*************** USER ***************/
  static async register(username: string, password: string, firstName: string, lastName: string, email: string) {
    let res = await this.request("users", { username, password, firstName, lastName, email }, "post");
    return res;
  }
}

// for now, put token ("testuser" / "password" on class)
JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
    "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
    "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";
