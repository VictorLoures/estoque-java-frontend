import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/RX";
import { API_CONFIG } from "../config/api.config";
import { CategoriaDTO } from "../models/CategoriaDTO";

@Injectable()
export class CategoriaService{

    id : number;
     
    constructor( public http: HttpClient ){

    }

    findAll() : Observable<CategoriaDTO[]> {
        return this.http.get<CategoriaDTO[]>(`${API_CONFIG.baseurl}/categorias`);
    }

    findById(id : number) : Observable<CategoriaDTO> {
        return this.http.get<CategoriaDTO>(`${API_CONFIG.baseurl}/categorias/${id}`);
    }

    delete(id : number){
        return this.http.delete(`${API_CONFIG.baseurl}/categorias/delete/${id}`);
    }

    update(catDto : CategoriaDTO){
        return this.http.put(`${API_CONFIG.baseurl}/categorias`, catDto, 
        {
            observe : 'response',
            responseType: 'text'
        });
    }

    insert(catDto : CategoriaDTO){
        return this.http.post(`${API_CONFIG.baseurl}/categorias`, catDto,{
            observe : 'response',
            responseType: 'text'
        });
    }

    getId(){
        return this.id;
    }

    setId(cod: number){
        this.id = cod;
    }

} 