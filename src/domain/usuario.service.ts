import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_CONFIG } from "../config/api.config";
import { UsuarioDTO } from "../models/usuariodto";

@Injectable()
export class UsuarioService{

    constructor( public http: HttpClient ){

    }

    findAll() : Observable<UsuarioDTO[]> {
        return this.http.get<UsuarioDTO[]>(`${API_CONFIG.baseurl}/usuario`);
    }

}