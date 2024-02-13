export interface Quadrinho {
    ok: boolean;
    message: string;
    quantDispo: number;
    quantPaginas: number
    tipo: number;
    valor: number;
    nome: string;
    foto: string;
    quadrinhos: []
}
