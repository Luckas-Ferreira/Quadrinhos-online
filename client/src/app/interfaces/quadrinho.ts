export interface Quadrinho {
    ok: boolean;
    message: string;
    quantDispo: number;
    quantPaginas: number
    tipo: number;
    valor: number;
    nome: string;
    foto: string;
    quadrinho_id: number;
    quadrinhos: [];
    quadrinho: {
        quantDispo: number;
        quantPaginas: number
        tipo: number;
        valor: number;
        nome: string;
        foto: string;
        quadrinho_id: number;
    };
}
