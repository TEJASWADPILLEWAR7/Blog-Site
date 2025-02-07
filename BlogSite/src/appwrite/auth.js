// start with appwrite auth service

import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf.js";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount(email, password, name) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (!userAccount) throw new Error("Failed to create account");

      return this.login(email, password);
    } catch (error) {
      console.log("Error creating account:", error);
    }
  }
  async login({ email, password }) {
    try {
      return await this.account.createSession(email, password);
    } catch (error) {
      console.log("Error while login ", error);
    }
  }
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Error while get the user", error);
    }
  }
  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log("Error while logout", error);
    }
  }
}

const authService = new AuthService();

export default authService;
