import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_CONFIG } from "../config/api.config";
import { UsuarioDTO } from "../models/usuariodto";

@Injectable()
export class UsuarioService{

 username : string;

    constructor( public http: HttpClient ){

    }

    findAll() : Observable<UsuarioDTO[]> {
        return this.http.get<UsuarioDTO[]>(`${API_CONFIG.baseurl}/usuario`);
    }

    acharPeloNome(nome : string) : Observable<UsuarioDTO>{
        return this.http.get<UsuarioDTO>(`${API_CONFIG.baseurl}/usuario/${nome}`);
    }

    userLogado() : Observable<UsuarioDTO>{
        return this.http.get<UsuarioDTO>(`${API_CONFIG.baseurl}/usuario/usuariologado`);
    }

    setUsername(name : string){
        this.username = name;
        console.log(this.username);
    }

    getUsername(){
        console.log(this.username);
        return this.username;
    }



}