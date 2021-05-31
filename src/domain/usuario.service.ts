import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_CONFIG } from "../config/api.config";
import { UsuarioDTO } from "../models/usuariodto";
import { UsuarioSenhaDTO } from "../models/usuariodtosSneha";

@Injectable()
export class UsuarioService{

 username : string;
 id :number

    constructor( public http: HttpClient ){

    }

    findAll() : Observable<UsuarioDTO[]> {
        return this.http.get<UsuarioDTO[]>(`${API_CONFIG.baseurl}/usuario`);
    }

    findOne(id : number) : Observable<UsuarioDTO> {
        return this.http.get<UsuarioDTO>(`${API_CONFIG.baseurl}/usuario/${id}`);
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

    setId(id : number){
        this.id = id;
    }

    getId(){
        return this.id;
    }

    delete(id : number) {
        return this.http.delete(`${API_CONFIG.baseurl}/usuario/delete/${id}`);
    }

    insert(user : UsuarioSenhaDTO){
        return this.http.post(`${API_CONFIG.baseurl}/usuario`, user,
        {
            observe : 'response',
            responseType: 'text'
        })
    }

    update(user : UsuarioDTO){
        return this.http.put(`${API_CONFIG.baseurl}/usuario`, user,
        {
            observe : 'response',
            responseType: 'text'
        })
    }



}