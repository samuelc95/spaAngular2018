export class IitemProduto {
    _id: String;
    produtoPrincipal: Number;
    height: Number;
    width: Number;
    depth: Number;
    produtos: itemDeProduto[];
}

export class itemDeProduto {
    _id: String;
    produtoId: Number;
    nome: String;
    descricao: String;
    materialAcabamentoId: Number;
}