import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/RX";
import { API_CONFIG } from "../config/api.config";
import { CategoriaDTO } from "../models/CategoriaDTO";

@Injectable()
export class CategoriaService{

    constructor( public http: HttpClient ){

    }

    findAll() : Observable<CategoriaDTO[]> {
        return this.http.get<CategoriaDTO[]>(`${API_CONFIG.baseurl}/categorias`);
    }

} 