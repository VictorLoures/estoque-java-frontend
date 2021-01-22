import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_CONFIG } from "../config/api.config";
import { ProdutosDTO } from "../models/produtosdto";

@Injectable()
export class ProdutosService{

    id: number;

    constructor( public http: HttpClient ){

    }

    findAll() : Observable<ProdutosDTO[]> {
        return this.http.get<ProdutosDTO[]>(`${API_CONFIG.baseurl}/produtos`);
    }

    findOne(id : number) : Observable<ProdutosDTO> {
        return this.http.get<ProdutosDTO>(`${API_CONFIG.baseurl}/produtos/${id}`);
    }

    inserir(id : number, prod : ProdutosDTO){
        return this.http.post(`${API_CONFIG.baseurl}/produtos/${id}`, prod,
        {
            observe : 'response',
            responseType: 'text'
        })
    }

    deletar(id : number){
       return this.http.delete(`${API_CONFIG.baseurl}/produtos/delete/${id}`,
        {
            observe : 'response',
            responseType: 'text'
        })
        
    }

    update(prod : ProdutosDTO){
        console.log(prod);
        return this.http.put(`${API_CONFIG.baseurl}/produtos`, prod, 
        {
            observe : 'response',
            responseType: 'text'
        })
    }

    setId(cod: number){
        this.id = cod;
    }

    getId(){
        return this.id;
    }

}