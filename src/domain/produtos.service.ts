import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_CONFIG } from "../config/api.config";
import { ProdutosDTO } from "../models/produtosdto";

@Injectable()
export class ProdutosService{

    constructor( public http: HttpClient ){

    }

    findAll() : Observable<ProdutosDTO[]> {
        return this.http.get<ProdutosDTO[]>(`${API_CONFIG.baseurl}/produtos`);
    }

}