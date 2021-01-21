import { CategoriaDTO } from "./CategoriaDTO";

export interface ProdutosDTO{
    id: string;
    nome : string;
    preco : number;
    total : number;
    categoria: CategoriaDTO;
}