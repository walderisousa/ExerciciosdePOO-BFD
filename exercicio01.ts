class Aluno {
  nome: string;
  dataNascimento: Date;
  peso: number;
  altura: number;

  constructor(nome: string, dataNascimento: string, peso: number, altura: number) {
    this.nome = nome;
    this.dataNascimento = new Date(dataNascimento);
    this.peso = peso;
    this.altura = altura;
    }
  calcularIdade(): number {
    let idade = 2025 - this.dataNascimento.getFullYear();

    return idade;
    }
}
