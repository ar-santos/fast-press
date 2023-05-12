export function carregaDescricaoIphone() {
    let product = [
      {
        "category": "celular",
        "brand": "Apple",
        "model": "iPhone 14",
        "description": "Apple iPhone 14 (256 GB) – Cinza-Escuro",
        "nameFrabricante": "Fast Press",
        "nameTransportadora": "Fast Press",
        "nameVendedora": "Vendido por",
        "nameEntregar": "Entregue por",
        "memory": "64GB",
        "price": "R$ " +  4999.00,
        "promotion": "R$ " +  3249.00,
        "subTotal": "Subtotal: R$ " + 3249.00,
        "ContinuarComprar": 3249.00,
        "stock": 5,
        "rating": 4.5
      },
      {},
      {},
    ];
    
    const produto = product[0]; 
    
    const descricaoIphone = document.getElementById('descriptioIphone');
    const namefabricante = document.getElementById('nomeFabricante');
    const nameTransportadora = document.getElementById('NomeTransportadora');
    const nomeVendedora = document.getElementById('nomeVendedora');
    const nomeEntregar = document.getElementById('nomeEntregar');
    const priceIphone = document.getElementById('price');
    const promotionIphone = document.getElementById('promotion');
    const subTotalComprar = document.getElementById('subTotal');

    if (product) {
      descricaoIphone.textContent = produto.description;
      namefabricante.textContent = produto.nameFrabricante;
      nameTransportadora.textContent = produto.nameTransportadora;
      nomeVendedora.textContent = produto.nameVendedora;
      nomeEntregar.textContent = produto.nameEntregar;
      nomeEntregar.textContent = produto.nameEntregar;
      priceIphone.textContent = produto.price;
      promotionIphone.textContent = produto.promotion
      subTotalComprar.textContent = produto.subTotal
    }
}