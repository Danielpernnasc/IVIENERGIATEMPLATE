export class ListaTitle {
    tiluloSH6 = ['Modulo Projeto', ];
    // 'Modulo Preparação','Modulo de Construção'
    tituloForm = 'Pré-Projeto';
    spansForm = ['ID Pré-Projeto', 'Status', 'Última Atualização', 'Projeto (Dev.Reference)', 'Desenvolvedor', 'Projeto(IVI Referencia)', 'Estado', 'Cidade', 'Distribuidora',
       'Instal Capacity(kWack)', 'Instal Capacity(kWdc)', 'Ter uma opnião sobre acesso?'];
    subTituloFila = ['Verificação de Duplicidade Pré Cad (10)', 'Validação de Projeto Pendente (2)'];
  
    // Função para retornar um array que contém as propriedades
    getPropriedades(): string[] {
      return [...this.tiluloSH6, ...this.spansForm, ...this.subTituloFila];
    }
  }
  

