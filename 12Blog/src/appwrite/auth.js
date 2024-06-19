import conf from "../conf/conf";
import {Client, Account, ID} from "appwrite"

export class AuthService{
    //make 2 properties
    Client = new Client();   //ahiya setclient ne evu km na banavyu to we want k whenever obj is made then it will execurte so we make in constructor
    account;   

    constructor() {
        this.Client
            .setEndpoint(conf.appwriteUrl)  
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.Client);
    }

    //apwrite ni badhi services use kari chhe
    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique, email, password, name);

            if(userAccount){
                //call another method beacuse id userAccount is there then we will ask for login to ther user
                return this.login({email, password});
            }
            else{
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login(email, password){
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Apperite serive :: getCurrentUser :: error", error);
        }
        return null;
    }

    async logout() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log("Apperite serive :: logout :: error", error)
        }
    }
}

const authService = new AuthService();    //this is object so that agar jkahi pe appwrite class ko uase karna ho to direct hi obj call ho sakta he use alag se ibj banan ki need nahi hai


export default AuthService;


