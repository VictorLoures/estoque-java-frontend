import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_CONFIG } from "../config/api.config";
import { ClienteDTO } from "../models/clienteDto";
import { ProdutosBaixaDTO } from "../models/produtosdtoBaixa";

@Injectable()
export class ClienteService{

    id : number;
     
    constructor( public http: HttpClient ){

    }

    findAll() : Observable<ClienteDTO[]> {
        return this.http.get<ClienteDTO[]>(`${API_CONFIG.baseurl}/clientes`);
    }

    findById(id : number) : Observable<ClienteDTO> {
        return this.http.get<ClienteDTO>(`${API_CONFIG.baseurl}/clientes/${id}`);
    }

    delete(id : number){
        return this.http.delete(`${API_CONFIG.baseurl}/clientes/delete/${id}`);
    }

    update(catDto : ClienteDTO){
        return this.http.put(`${API_CONFIG.baseurl}/clientes`, catDto, 
        {
            observe : 'response',
            responseType: 'text'
        });
    }

    insert(catDto : ClienteDTO){
        return this.http.post(`${API_CONFIG.baseurl}/clientes`, catDto,{
            observe : 'response',
            responseType: 'text'
        });
    }

    sendEmail(prods : ProdutosBaixaDTO[], email : string, qte : number ){
        return this.http.post(`${API_CONFIG.baseurl}/clientes/nota/${email}/${qte}`, prods,{
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