import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_CONFIG } from "../config/api.config";
import { CredenciaisDTO } from "../models/credenciaisdto";

@Injectable()
export class AuthService{

    username : string;

    constructor(public http: HttpClient){

    }

    authenticate(creds : CredenciaisDTO){
        this.setUsername(creds.nome);
        return this.http.post(`${API_CONFIG.baseurl}/login`, creds,
        {
            observe : 'response',
            responseType: 'text'
        });
        
    }

    public setUsername(name : string){
        this.username = name;
    }

    public getUsername(){
        return this.username;
    }

    recuperarSenha(email : string){
        return this.http.get(`${API_CONFIG.baseurl}/usuario/senha/${email}`,
        {
            observe : 'response',
            responseType: 'text'
        });
    }

}