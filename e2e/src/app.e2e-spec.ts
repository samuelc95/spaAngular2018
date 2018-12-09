import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display produto title', () => {
    page.navigateToProduto();
    expect(page.getTitleText()).toEqual('Listagem Produtos');
  });

  it('should display restricao title', () => {
    page.navigateToRestricao();
    expect(page.getTitleText()).toEqual('Listagem Restrições');
  });

  it('should display categoria title', () => {
    page.navigateToCategoria();
    expect(page.getTitleText()).toEqual('Listagem Categorias');
  });

  it('should display material title', () => {
    page.navigateToMaterial();
    expect(page.getTitleText()).toEqual('Listagem Materiais');
  });

  it('should display acabamento title', () => {
    page.navigateToAcabamento();
    expect(page.getTitleText()).toEqual('Listagem Acabamentos');
  });

  it('should display agregacao title', () => {
    page.navigateToAgregacao();
    expect(page.getTitleText()).toEqual('Listagem Agregações');
  });

  it('should display Mat/Acabamento title', () => {
    page.navigateToMatAcabamento();
    expect(page.getTitleText()).toEqual('Listagem Materiais/Acabamentos');
  });

  it('should display dimensao title', () => {
    page.navigateToDimensao();
    expect(page.getTitleText()).toEqual('Listagem Dimensões');
  });

  it('should display ItemProduto title', () => {
    page.navigateToItemProduto();
    expect(page.getTitleText()).toEqual('Listagem Itens Produto');
  });

  it('should display encomenda title', () => {
    page.navigateToEncomenda();
    expect(page.getTitleText()).toEqual('Listagem Encomendas');
  });

});
