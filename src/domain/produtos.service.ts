import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_CONFIG } from "../config/api.config";
import { ProdutosDTO } from "../models/produtosdto";
import { ProdutosBaixaDTO } from "../models/produtosdtoBaixa";

@Injectable()
export class ProdutosService{

    id: number;
    idc: number;
    cond : string;

    constructor( public http: HttpClient ){

    }

    findAll() : Observable<ProdutosDTO[]> {
        return this.http.get<ProdutosDTO[]>(`${API_CONFIG.baseurl}/produtos`);
    }
    findONome() : Observable<ProdutosDTO[]> {
        return this.http.get<ProdutosDTO[]>(`${API_CONFIG.baseurl}/produtos/nome`);
    }
    findOCod() : Observable<ProdutosDTO[]> {
        return this.http.get<ProdutosDTO[]>(`${API_CONFIG.baseurl}/produtos/codigo`);
    }

    findOne(id : number) : Observable<ProdutosDTO> {
        return this.http.get<ProdutosDTO>(`${API_CONFIG.baseurl}/produtos/${id}`);
    }

    findByNome(nome : string) : Observable<ProdutosDTO> {
        return this.http.get<ProdutosDTO>(`${API_CONFIG.baseurl}/produtos/nome/${nome}`);
    }

    inserir(id : number, prod : ProdutosDTO){
        return this.http.post(`${API_CONFIG.baseurl}/produtos/${id}`, prod,
        {
            observe : 'response',
            responseType: 'text'
        })
    }

    guarda(prod : ProdutosBaixaDTO){
        return this.http.post(`${API_CONFIG.baseurl}/produtos/guarda`, prod,
        {
            observe : 'response',
            responseType: 'text'
        })
    }

    getProds() : Observable<ProdutosBaixaDTO[]> {
        return this.http.get<ProdutosBaixaDTO[]>(`${API_CONFIG.baseurl}/produtos/getProds`)
    }

    removeProds(){
        return this.http.get(`${API_CONFIG.baseurl}/produtos/removeProds`);
    }

    deletar(id : number){
       return this.http.delete(`${API_CONFIG.baseurl}/produtos/delete/${id}`,
        {
            observe : 'response',
            responseType: 'text'
        })
        
    }

    update(prod : ProdutosBaixaDTO[], id : number){
        return this.http.put(`${API_CONFIG.baseurl}/produtos/${id}`, prod, 
        {
            observe : 'response',
            responseType: 'text'
        })
    }

    updateList(prod : ProdutosBaixaDTO[]){
        return this.http.put(`${API_CONFIG.baseurl}/produtos/list`, prod, 
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

    setIdc(cod: number){
        this.idc = cod;
    }

    getIdc(){
        return this.idc;
    }

    setCond(cond: string){
        this.cond = cond;
    }

    getCond(){
        return this.cond;
    }

    findProds() : Observable<ProdutosDTO[]> {
        return this.http.get<ProdutosDTO[]>(`${API_CONFIG.baseurl}/produtos/cats/${this.getIdc()}`);
    }

}