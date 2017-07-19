const negociacao = new Negociacao(new Date(), 1, 100);

const controller = new NegociacaoController();
document
    $('.form').submit(controller.adiciona.bind(controller));

