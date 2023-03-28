const nomeEmpresa = "Omma";
console.log("Nome da empresa:", nomeEmpresa);
const receitasDaOmma = [];

function cadastrarReceita(id, receita, dificuldade, ingredientes, instrucoes, vegana) {
    receitasDaOmma.push({
      id,
      receita,
      dificuldade,
      ingredientes,
      instrucoes,
      vegana,
    });
  }

  function exibirReceitas() {
    receitasDaOmma.forEach(receita => {
      console.log(receita.receita + ':');
      console.log('Dificuldade: ' + receita.dificuldade);
      console.log('Ingredientes: ' + receita.ingredientes.join(', '));
      console.log('Instruções: ' + receita.instrucoes.join(', '));
  
      if (receita.vegana) {
        console.log('Esta receita é vegana!');
      } else {
        console.log('Esta receita não é vegana.');
      }
      
      console.log('-------------------');
    });
  }
  function deletarReceitas(id) {
    const index = receitasDaOmma.findIndex(receita => receita.id === id);
    if (index !== -1) {
      receitasDaOmma.splice(index, 1);
      console.log(`Receita com id ${id} deletada com sucesso!`);
    } else {
      console.log(`Receita com id ${id} não encontrada.`);
    }
  }
  
cadastrarReceita(
  1, 
  'Bobó de camarão', 
  'Difícil', 
  ['1kg mandioca', '500gr camarão', '1 azeite de dendê', '1 leite de coco', '1 molho de tomate', 'pimentão'], 
  ['Lave os camarões', 'Cozinhe a mandioca com louro e cebola', 'Quando estiver mole adicione leite de coco', 'Bata no liquidificador', 'Esquente o azeite de oliva a cebola ralada', 'Frite os camarões', 'Adicione duas latas de extrato de tomate', 'Junte na mesma panela a mandioca batida no liquidificador', 'Outro vidro de leite de coco'], 
  true
);

cadastrarReceita(
  2,
  'Pizza de queijo',
  'Fácil',
  ['Massa', 'Queijo', 'Molho de tomate'],
  ['Passar o molho de tomate na massa e adicionar o queijo depois levar ao forno e está pronta'],
  false
);

cadastrarReceita(
  3, 
  'Feijoada', 
  'Média', 
  ['1kg feijão preto', '500g carne de porco', '500g linguiça', '1 cebola', '3 dentes de alho', '2 folhas de louro', 'Sal e pimenta a gosto'], 
  ['Deixe o feijão de molho por 12 horas', 'Cozinhe o feijão em água e sal por cerca de 1 hora', 'Em outra panela, refogue a cebola e o alho até dourarem', 'Adicione as carnes e deixe fritar até ficarem douradas', 'Adicione as carnes ao feijão, junte as folhas de louro e deixe cozinhar por mais 30 minutos'], 
  false
);
cadastrarReceita(
    4,
 'Ratatouille',
 'média',
['2 abobrinhas', '1 berinjela', '1 pimentão vermelho', '1 cebola', '2 dentes de alho', '2 tomates', 'azeite de oliva, sal e pimenta a gosto'],
['Corte os legumes em fatias finas', 'Refogue a cebola e o alho no azeite até dourarem', 'Adicione os legumes e deixe cozinhar por cerca de 15 minutos', 'Tempere com sal e pimenta a gosto'],
true)

cadastrarReceita(5,
 'Arroz à grega',
 'fácil',
['2 xícaras de arroz', '4 xícaras de água', '1 lata de ervilha', '1 lata de milho verde', '1 pimentão vermelho', '1 cenoura ralada', '1 cebola picada', '2 dentes de alho', 'azeite de oliva, sal e pimenta a gosto'],
['Refogue a cebola e o alho no azeite até dourarem', 'Adicione o arroz e refogue por mais alguns minutos', 'Adicione a água e cozinhe até que o arroz esteja cozido', 'Adicione os legumes e misture bem', 'Tempere com sal e pimenta a gosto'],
true)

cadastrarReceita(6,
 'Torta de frango',
 'média',
['2 xícaras de farinha de trigo', '1 xícara de leite', '1 ovo', '100g de manteiga', '1 colher de sopa de fermento em pó', '500g de peito de frango', '1 cebola', '2 dentes de alho', '1 pimentão verde', '1 lata de milho verde', '1 lata de ervilha', 'azeite de oliva, sal e pimenta a gosto'],
['Cozinhe o frango e desfie', 'Refogue a cebola e o alho'],
false)
console.log(receitasDaOmma)
exibirReceitas()
deletarReceitas(5);