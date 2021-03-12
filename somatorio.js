// Somatorio

// Dado N, retorne a soma de todos os elementos de 0 até N.

// Procedural
function somatorio(N) {
  let soma = 0;
  for (let i = 1; i < N + 1; i++) {
    soma = soma + i;
  }
  return soma;
}
// somatorio(0); // 1
// somatorio(2); // 3
// somatorio(3); // 6

// Orientado a Objetos (OOP)
class Somatorio {
  constructor(n) {
    this.n = n;
  }

  run() {
    let soma = 0;
    for (let i = 1; i < this.n + 1; i++) {
      soma = soma + i;
    }
    return soma;
  }
}

// console.assert(new Somatorio(1).run() === 1, "Erro 1");
// console.assert(new Somatorio(2).run() === 3, "Erro 2");
// console.assert(new Somatorio(3).run() === 6, "Erro 3");
// console.log("Finalizado!");

// Functional
function somatorioFunctional(N) {
  // Sum(0) = 0
  // Sum(N) = N + Sum(N - 1)
  console.log(N);
  if (N == 0) {
    return 0;
  }
  return N + somatorioFunctional(N - 1);
}

// 5 + sum(4)
// 5 + 4 + sum(3)
// 5 + 4 + 3 + sum(2)
// 5 + 4 + 3 + 2 + sum(1)
// 5 + 4 + 3 + 2 + 1 + 0
// 5 + 4 + 3 + 2 + 1 + 0

// console.assert(somatorioFunctional(1) === 1, "Erro 1");
// console.assert(somatorioFunctional(2) === 3, "Erro 2");
// console.assert(somatorioFunctional(3) === 6, "Erro 3");

// somatorioFunctional(5);
// somatorioFunctional(10);
