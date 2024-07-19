import axios, { AxiosError } from "axios";
import { userInterface } from "./types";

const BASE_URL = process.env.React_APP_BASE_URL || import.meta.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

export default class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token: string | null;

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
    console.log("RES HERE", res);
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
  // for user to register themselves
  static async register(newUser: userInterface) {
    let res = await this.request("auth/register", { ...newUser }, "post");
    this.token = res.token;
    return res;
  }
  
  // for user to login
  static async login(username: string, password: string) {
    let res = await this.request("auth/token", { username, password }, "post");
    console.log("inside api.ts,", res);
    this.token = res.token;
    return res;
  }
  
  static async getUser(username: string) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  static async updateUser({ username, firstName, lastName, email }: userInterface) {
    let res = await this.request(`users/${username}`, { firstName, lastName, email }, "patch");
    return res.user;
  }
  static async applyToJob(username: string, jobId: number) {
    let res = await this.request(`users/${username}/jobs/${jobId}`, {}, "post");
    return res;
  }
}