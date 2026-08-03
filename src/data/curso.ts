export type FaseId =
  | "fundamentos"
  | "projeto-pessoal"
  | "ideacao"
  | "inambulacao"
  | "instauracao"
  | "inspecao"
  | "implementacao";

export type Fase = {
  id: FaseId;
  nome: string;
  numero: string;
  descricao: string;
  cor: string; // css var token name
  encontros: [number, number];
};

export const fases: Fase[] = [
  {
    id: "fundamentos",
    nome: "Fundamentos",
    numero: "00",
    descricao:
      "Abertura do laboratório: o conceito de interface, a metodologia 5I's, o uso crítico da Inteligência Artificial e os seminários de fundamentos, design visual, Figma e Design Systems.",
    cor: "var(--fase-fundamentos)",
    encontros: [1, 7],
  },
  {
    id: "projeto-pessoal",
    nome: "Projeto Pessoal",
    numero: "0*",
    descricao:
      "Projeto individual de nivelamento: escolha do problema, briefing, pesquisa exploratória, arquitetura, wireframes, protótipo e apresentação pública.",
    cor: "var(--fase-pessoal)",
    encontros: [8, 10],
  },
  {
    id: "ideacao",
    nome: "Ideação",
    numero: "I",
    descricao:
      "Compreensão do problema, geração de alternativas, organização das informações, pesquisa com usuários, personas e pesquisa de referências.",
    cor: "var(--fase-ideacao)",
    encontros: [11, 16],
  },
  {
    id: "inambulacao",
    nome: "Inambulação",
    numero: "II",
    descricao:
      "Caminhar e investigar: requisitos e funcionalidades, análises heurísticas, análises gráficas, tecnologias contemporâneas e síntese consolidada.",
    cor: "var(--fase-inambulacao)",
    encontros: [17, 21],
  },
  {
    id: "instauracao",
    nome: "Instauração",
    numero: "III",
    descricao:
      "Arquitetura da informação, rabiscoframes e wireframes, design de interação, design da informação, design sensorial e protótipo de alta fidelidade.",
    cor: "var(--fase-instauracao)",
    encontros: [22, 27],
  },
  {
    id: "inspecao",
    nome: "Inspeção",
    numero: "IV",
    descricao:
      "Testes com usuários, avaliação heurística, acessibilidade, iteração e refinamento da solução a partir das evidências.",
    cor: "var(--fase-inspecao)",
    encontros: [28, 29],
  },
  {
    id: "implementacao",
    nome: "Implementação",
    numero: "V",
    descricao:
      "Apresentação final pública, documentação completa das cinco fases, portfólio e reflexão crítica sobre o processo.",
    cor: "var(--fase-implementacao)",
    encontros: [30, 30],
  },
];

export type Encontro = {
  numero: number;
  titulo: string;
  tema?: string;
  fase: FaseId;
  objetivos?: string;
  conteudos?: string[];
  metodologia?: string[];
  atividades?: string[];
  entrega?: string[];
};

export const encontros: Encontro[] = [
  {
    numero: 1,
    titulo: "Apresentação da disciplina",
    tema: "O que é uma interface?",
    fase: "fundamentos",
    objetivos:
      "Apresentar a disciplina, conhecer os estudantes, discutir o conceito contemporâneo de interface e introduzir o funcionamento do Laboratório de Projeto de Interfaces.",
    conteudos: [
      "Plano de ensino",
      "Organização da disciplina",
      "O laboratório",
      "O papel do designer de interfaces",
      "Interface, interação e experiência",
    ],
    metodologia: [
      "Aula dialogada, dinâmica de apresentação e caminhada investigativa pelo campus para identificação de interfaces físicas e digitais presentes no cotidiano.",
    ],
    atividades: ["Registro fotográfico das interfaces encontradas."],
    entrega: ["Diário visual da caminhada."],
  },
  {
    numero: 2,
    titulo: "Metodologia 5I's",
    tema: "Aplicação da metodologia no projeto Papita Delícia",
    fase: "fundamentos",
    objetivos:
      "Compreender a estrutura metodológica 5I's e observar como cada fase se materializa em um projeto real de interface gamificada.",
    conteudos: [
      "Ideação",
      "Inambulação",
      "Instauração",
      "Inspeção",
      "Implementação",
      "Estudo de caso: Papita Delícia",
    ],
    metodologia: [
      "Apresentação dialogada da metodologia.",
      "Análise do estudo de caso Papita Delícia — interface gamificada de educação alimentar infantil.",
      "Construção coletiva do fluxo metodológico.",
    ],
    atividades: ["Mapa visual do processo de projeto.", "Identificação de entregas por fase no estudo de caso."],
    entrega: ["Mapa da metodologia aplicado ao projeto do semestre."],
  },
  {
    numero: 3,
    titulo: "Inteligência Artificial no design",
    fase: "fundamentos",
    objetivos: "Refletir criticamente sobre o uso da Inteligência Artificial no processo de projeto.",
    conteudos: ["Engenharia de prompts", "Ética", "Autoria", "Viés algorítmico", "IA Generativa"],
    metodologia: [
      "Oficina prática utilizando diferentes ferramentas de IA.",
      "Discussão crítica dos resultados produzidos.",
    ],
    atividades: ["Desenvolvimento de um mesmo problema utilizando diferentes sistemas de IA."],
    entrega: ["Relatório crítico comparando os resultados obtidos."],
  },
  {
    numero: 4,
    titulo: "Seminário: fundamentos de interfaces",
    fase: "fundamentos",
    conteudos: [
      "UX",
      "UI",
      "Design Centrado no Usuário",
      "Affordances",
      "Feedback",
      "Significantes",
      "Restrições",
    ],
    atividades: ["Análise coletiva de aplicativos.", "Oficina prática."],
  },
  {
    numero: 5,
    titulo: "Seminário: design visual",
    fase: "fundamentos",
    conteudos: [
      "Cor",
      "Tipografia",
      "Grid",
      "Hierarquia",
      "Composição",
      "Espaçamento",
      "Layout responsivo",
    ],
    atividades: ["Redesenho de interfaces existentes."],
  },
  {
    numero: 6,
    titulo: "Seminário: Figma",
    fase: "fundamentos",
    conteudos: ["Auto Layout", "Componentes", "Variantes", "Protótipos", "Bibliotecas", "Estilos"],
    atividades: ["Construção de componentes reutilizáveis."],
  },
  {
    numero: 7,
    titulo: "Seminário: Design Systems",
    fase: "fundamentos",
    conteudos: [
      "Tokens",
      "Componentes",
      "Escalas tipográficas",
      "Sistemas de cor",
      "Documentação",
      "Acessibilidade",
    ],
    atividades: ["Construção de um pequeno Design System."],
  },
  {
    numero: 8,
    titulo: "Projeto pessoal — investigação",
    fase: "projeto-pessoal",
    atividades: [
      "Escolha do problema.",
      "Elaboração do briefing.",
      "Pesquisa exploratória.",
      "Benchmark.",
      "Construção dos requisitos.",
      "Definição dos objetivos do projeto.",
    ],
  },
  {
    numero: 9,
    titulo: "Projeto pessoal — projetação",
    fase: "projeto-pessoal",
    atividades: [
      "Construção da arquitetura da informação.",
      "Wireframes.",
      "Protótipo inicial.",
      "Teste entre colegas.",
      "Iterações.",
    ],
  },
  {
    numero: 10,
    titulo: "Apresentação do projeto pessoal",
    fase: "projeto-pessoal",
    atividades: [
      "Apresentação pública.",
      "Discussão coletiva.",
      "Design Critique.",
      "Autoavaliação.",
      "Reflexão sobre o processo.",
    ],
  },
  {
    numero: 11,
    titulo: "Briefing",
    fase: "ideacao",
    objetivos:
      "Compreender o problema de projeto, delimitar o contexto de atuação, identificar stakeholders e estruturar o briefing que orientará o desenvolvimento da interface.",
    conteudos: [
      "Definição do problema",
      "Contextualização",
      "Objetivos do projeto",
      "Público-alvo",
      "Stakeholders",
      "Escopo",
      "Restrições",
      "Oportunidades",
    ],
    metodologia: [
      "Exposição dialogada, oficina de construção do briefing, discussão entre grupos e orientação coletiva.",
    ],
    atividades: ["Elaboração do briefing completo do projeto."],
    entrega: ["Briefing aprovado."],
  },
  {
    numero: 12,
    titulo: "Brainstorming",
    fase: "ideacao",
    objetivos: "Estimular a geração de alternativas para solução do problema.",
    conteudos: [
      "Brainstorming",
      "Brainwriting",
      "Crazy 8",
      "SCAMPER",
      "Uso da IA na geração de alternativas",
      "Seleção de ideias",
    ],
    metodologia: [
      "Dinâmicas em grupo, geração rápida de alternativas, discussão crítica e priorização das propostas.",
    ],
    atividades: ["Produção de diferentes possibilidades de solução."],
    entrega: ["Painel de ideias."],
  },
  {
    numero: 13,
    titulo: "Mapas mentais",
    fase: "ideacao",
    objetivos:
      "Organizar e estruturar visualmente as informações produzidas durante a etapa de ideação.",
    conteudos: [
      "Mapas mentais",
      "Organização da informação",
      "Relações conceituais",
      "Categorias",
      "Estruturação do problema",
    ],
    metodologia: ["Construção colaborativa de mapas mentais.", "Discussão entre grupos."],
    atividades: ["Produção do mapa conceitual do projeto."],
    entrega: ["Mapa mental completo."],
  },
  {
    numero: 14,
    titulo: "Pesquisa com usuários",
    fase: "ideacao",
    objetivos: "Conhecer o contexto real de utilização da futura interface.",
    conteudos: [
      "Pesquisa qualitativa",
      "Entrevistas",
      "Observação",
      "Questionários",
      "Diário de uso",
      "Registro dos dados",
    ],
    metodologia: [
      "Planejamento da pesquisa.",
      "Aplicação dos instrumentos.",
      "Discussão dos resultados.",
    ],
    atividades: ["Realização das entrevistas e observações."],
    entrega: ["Relatório de pesquisa."],
  },
  {
    numero: 15,
    titulo: "Personas e pontos de contato",
    fase: "ideacao",
    objetivos:
      "Sintetizar os dados obtidos na pesquisa e representar os principais perfis de usuários.",
    conteudos: [
      "Personas",
      "Cenários",
      "Jornada do usuário",
      "Touchpoints",
      "Necessidades",
      "Dores",
      "Oportunidades",
    ],
    metodologia: ["Construção colaborativa das personas.", "Mapeamento da jornada."],
    atividades: ["Elaboração das personas e do mapa de jornada."],
    entrega: ["Documento de personas."],
  },
  {
    numero: 16,
    titulo: "Atlas Mnemosyne e pesquisa de referências",
    fase: "ideacao",
    objetivos:
      "Investigar referências visuais, conceituais e formais para orientar a linguagem da interface.",
    conteudos: [
      "Atlas Mnemosyne",
      "Sobrevivência das formas",
      "Moodboards",
      "Benchmark visual",
      "Referências nacionais e internacionais",
    ],
    metodologia: ["Pesquisa visual.", "Discussão crítica.", "Construção de painéis."],
    atividades: ["Produção do painel visual do projeto."],
    entrega: ["Encerramento da Fase de Ideação.", "Apresentação da pesquisa."],
  },
  {
    numero: 17,
    titulo: "Requisitos e funcionalidades",
    fase: "inambulacao",
    objetivos: "Transformar os resultados da pesquisa em requisitos projetuais.",
    conteudos: [
      "Requisitos funcionais",
      "Requisitos não funcionais",
      "Funcionalidades",
      "Priorização",
      "MVP",
    ],
    metodologia: ["Oficina colaborativa.", "Construção da matriz de requisitos."],
    atividades: ["Definição das funcionalidades do sistema."],
    entrega: ["Documento de requisitos."],
  },
  {
    numero: 18,
    titulo: "Análises heurísticas",
    fase: "inambulacao",
    objetivos: "Avaliar interfaces existentes utilizando princípios de usabilidade.",
    conteudos: [
      "Feedback",
      "Linguagem do usuário",
      "Controle",
      "Consistência",
      "Prevenção de erros",
      "Reconhecimento",
      "Flexibilidade",
      "Simplicidade",
      "Mensagens de erro",
      "Ajuda",
      "Acessibilidade",
    ],
    metodologia: ["Avaliação heurística em grupos.", "Discussão dos resultados."],
    atividades: ["Análise comparativa de interfaces."],
    entrega: ["Relatório heurístico."],
  },
  {
    numero: 19,
    titulo: "Análises gráficas",
    fase: "inambulacao",
    objetivos: "Investigar soluções visuais utilizadas por interfaces de referência.",
    conteudos: [
      "Paleta cromática",
      "Grid",
      "Tipografia",
      "Ícones",
      "Elementos gráficos",
      "Sistemas visuais",
    ],
    metodologia: ["Benchmark gráfico.", "Análise coletiva."],
    atividades: ["Construção do painel comparativo."],
    entrega: ["Relatório gráfico."],
  },
  {
    numero: 20,
    titulo: "Tecnologias contemporâneas",
    fase: "inambulacao",
    objetivos: "Conhecer tecnologias emergentes que podem ampliar as possibilidades do projeto.",
    conteudos: [
      "Inteligência Artificial",
      "Interfaces Conversacionais",
      "IoT",
      "Realidade Aumentada",
      "Realidade Virtual",
      "Gamificação",
      "Sistemas inteligentes",
    ],
    metodologia: ["Seminários.", "Discussão.", "Experimentação."],
    atividades: ["Avaliação da aplicabilidade das tecnologias ao projeto."],
    entrega: ["Proposta tecnológica."],
  },
  {
    numero: 21,
    titulo: "Síntese da Inambulação",
    fase: "inambulacao",
    objetivos: "Consolidar todas as análises realizadas antes do início da fase projetual.",
    conteudos: [
      "Revisão dos requisitos",
      "Estratégia de projeto",
      "Validação do conceito",
      "Planejamento da próxima fase",
    ],
    metodologia: ["Banca intermediária.", "Discussão coletiva.", "Orientações."],
    atividades: ["Apresentação da fase."],
    entrega: ["Documento consolidado da Inambulação."],
  },
  {
    numero: 22,
    titulo: "Arquitetura da informação",
    fase: "instauracao",
    objetivos:
      "Organizar estruturalmente o sistema, definindo a relação entre conteúdos, funcionalidades e fluxos de navegação, garantindo que a informação seja apresentada de maneira lógica, intuitiva e centrada no usuário.",
    conteudos: [
      "Arquitetura da Informação",
      "Inventário de Conteúdo",
      "Organização hierárquica",
      "Card Sorting",
      "Sitemap",
      "Fluxos de navegação",
      "Estruturas de interação",
    ],
    metodologia: [
      "Exposição dialogada, oficina prática de arquitetura da informação, construção colaborativa dos mapas de navegação e orientação dos projetos.",
    ],
    atividades: [
      "Organização dos conteúdos do sistema;",
      "Construção do Inventário de Conteúdo;",
      "Desenvolvimento do Sitemap;",
      "Definição dos fluxos principais de navegação.",
    ],
    entrega: [
      "Arquitetura da Informação aprovada, composta por inventário de conteúdo, sitemap e fluxo geral do sistema.",
    ],
  },
  {
    numero: 23,
    titulo: "Rabiscoframes e wireframes",
    fase: "instauracao",
    objetivos:
      "Transformar a arquitetura da informação em soluções espaciais para a interface, explorando alternativas antes do refinamento visual.",
    conteudos: [
      "Rabiscoframes",
      "Wireframes de baixa fidelidade",
      "Layout",
      "Organização visual",
      "Hierarquia da informação",
      "Fluxos de interação",
    ],
    metodologia: [
      "Oficina prática com desenho manual e desenvolvimento digital no Figma.",
      "Sessões de crítica entre equipes.",
    ],
    atividades: [
      "Produção de diferentes alternativas de telas;",
      "Organização das estruturas de navegação;",
      "Revisão coletiva dos fluxos.",
    ],
    entrega: ["Conjunto completo de wireframes de baixa fidelidade."],
  },
  {
    numero: 24,
    titulo: "Design de interação",
    fase: "instauracao",
    objetivos:
      "Projetar o comportamento da interface, definindo a forma como o usuário interage com o sistema.",
    conteudos: [
      "Jornada do usuário",
      "Fluxos",
      "Botões de ação",
      "Navegação",
      "Estados dos componentes",
      "Feedback",
      "Formulários",
      "Mensagens de erro",
      "Microinterações",
    ],
    metodologia: [
      "Oficina prática.",
      "Análise crítica de interfaces existentes.",
      "Construção colaborativa dos fluxos.",
    ],
    atividades: [
      "Refinamento dos fluxos;",
      "Definição dos estados dos componentes;",
      "Desenvolvimento das principais interações.",
    ],
    entrega: ["Fluxo completo de interação do sistema."],
  },
  {
    numero: 25,
    titulo: "Design da informação",
    fase: "instauracao",
    objetivos: "Construir a identidade comunicacional da interface.",
    conteudos: [
      "Identidade Visual",
      "Sistemas cromáticos",
      "Tipografia",
      "Ícones",
      "Ilustrações",
      "Gráficos",
      "Personagens",
      "Microcopy",
      "Comunicação visual",
    ],
    metodologia: ["Oficina de linguagem visual.", "Sessão coletiva de Design Critique."],
    atividades: [
      "Desenvolvimento da identidade visual;",
      "Escolha dos elementos gráficos;",
      "Construção da linguagem visual do sistema.",
    ],
    entrega: ["Painel de identidade visual."],
  },
  {
    numero: 26,
    titulo: "Design sensorial",
    fase: "instauracao",
    objetivos:
      "Consolidar a linguagem gráfica do projeto, estabelecendo um sistema visual consistente.",
    conteudos: [
      "Estilo gráfico",
      "Paleta cromática",
      "Grid",
      "Tipografia",
      "Ritmo visual",
      "Espaçamentos",
      "Componentes",
      "Consistência visual",
    ],
    metodologia: [
      "Oficina prática utilizando Figma.",
      "Desenvolvimento colaborativo do Design System.",
    ],
    atividades: [
      "Organização dos componentes;",
      "Construção da biblioteca visual;",
      "Definição das regras de utilização.",
    ],
    entrega: ["Primeira versão do Design System."],
  },
  {
    numero: 27,
    titulo: "Protótipo de alta fidelidade",
    fase: "instauracao",
    objetivos: "Integrar todas as decisões projetuais em um protótipo navegável.",
    conteudos: [
      "Prototipação",
      "Componentes",
      "Variantes",
      "Auto Layout",
      "Interações",
      "Navegação",
      "Design System",
      "Guia de estilos",
    ],
    metodologia: [
      "Desenvolvimento em laboratório.",
      "Orientações individuais.",
      "Sessão de críticas coletivas.",
    ],
    atividades: [
      "Construção do protótipo navegável;",
      "Revisão do sistema visual;",
      "Preparação para os testes.",
    ],
    entrega: ["Protótipo de alta fidelidade."],
  },
  {
    numero: 28,
    titulo: "Testes com usuários",
    fase: "inspecao",
    objetivos:
      "Avaliar a solução desenvolvida junto aos usuários, identificando problemas de usabilidade, acessibilidade e compreensão da interface.",
    conteudos: [
      "Testes de Usabilidade",
      "Teste A/B",
      "Protocolos de observação",
      "Avaliação heurística",
      "Acessibilidade",
      "Registro das evidências",
    ],
    metodologia: [
      "Aplicação dos testes.",
      "Observação dos usuários.",
      "Registro audiovisual.",
      "Discussão dos resultados.",
    ],
    atividades: [
      "Aplicação dos testes;",
      "Registro das dificuldades encontradas;",
      "Priorização das melhorias.",
    ],
    entrega: ["Relatório de Testes contendo resultados, análises e recomendações."],
  },
  {
    numero: 29,
    titulo: "Avaliação e iteração",
    fase: "inspecao",
    objetivos: "Refinar o projeto a partir das evidências obtidas durante os testes.",
    conteudos: [
      "Avaliação crítica",
      "Iteração",
      "Correções",
      "Refinamento visual",
      "Refinamento funcional",
      "Documentação do processo",
    ],
    metodologia: ["Oficina de ajustes.", "Orientação individual.", "Design Critique final."],
    atividades: [
      "Implementação das melhorias;",
      "Organização da documentação final;",
      "Preparação da apresentação.",
    ],
    entrega: ["Versão final do protótipo."],
  },
  {
    numero: 30,
    titulo: "Apresentação final dos projetos",
    fase: "implementacao",
    objetivos:
      "Socializar os resultados obtidos durante o semestre, apresentar o processo metodológico desenvolvido e refletir criticamente sobre as decisões projetuais.",
    conteudos: [
      "Apresentação dos projetos",
      "Avaliação coletiva",
      "Discussão metodológica",
      "Reflexão sobre o processo",
      "Perspectivas futuras",
    ],
    metodologia: [
      "Sessão pública de apresentação.",
      "Banca avaliadora.",
      "Discussão coletiva.",
      "Autoavaliação.",
      "Avaliação entre pares.",
    ],
    atividades: [
      "Cada equipe deverá apresentar o percurso completo do projeto, evidenciando as decisões tomadas em cada uma das fases da metodologia 5I's, os resultados obtidos, as dificuldades enfrentadas, os testes realizados e as melhorias implementadas.",
    ],
    entrega: ["Entrega final do portfólio completo — ver a página Entregas."],
  },
];

export const getEncontro = (numero: number) => encontros.find((e) => e.numero === numero);
export const getFase = (id: FaseId) => fases.find((f) => f.id === id)!;

export const movimentos = [
  {
    nome: "Caminhar",
    texto: "Observação direta de ambientes, serviços e sistemas de interação da cidade e do cotidiano.",
  },
  { nome: "Ouvir", texto: "Escuta ativa de usuários, podcasts, colegas e críticas coletivas." },
  { nome: "Ler", texto: "Leituras orientadas, artigos científicos, estudos de caso e referências." },
  { nome: "Criar", texto: "Experimentação, prototipação, testes e documentação contínua do processo." },
];

export const avaliacao = [
  {
    titulo: "Participação e envolvimento nas atividades do laboratório",
    peso: 20,
    texto:
      "Serão considerados frequência, participação nas discussões, contribuições durante as críticas coletivas, organização do diário de projeto, participação nas oficinas, seminários e atividades colaborativas.",
  },
  {
    titulo: "Projeto Individual de Nivelamento",
    peso: 20,
    texto:
      "Será avaliada a capacidade de aplicar os conteúdos iniciais da disciplina no desenvolvimento de uma pequena interface digital, considerando processo, organização, clareza da solução e apresentação.",
  },
  {
    titulo: "Projeto Principal",
    peso: 40,
    texto:
      "Serão avaliadas todas as etapas da metodologia 5I's, incluindo pesquisa, análises, arquitetura da informação, design de interação, design visual, prototipação, testes com usuários, documentação e refinamento da solução.",
  },
  {
    titulo: "Portfólio e Apresentação Final",
    peso: 20,
    texto:
      "O estudante deverá apresentar toda a documentação do processo projetual, evidenciando a evolução do projeto, justificativas das decisões, resultados obtidos, limitações encontradas e perspectivas futuras.",
  },
];

export const entregasFinais = [
  "Portfólio completo do projeto",
  "Documentação das cinco fases da metodologia 5I's",
  "Briefing",
  "Brainstorming",
  "Mapas mentais",
  "Pesquisa com usuários",
  "Personas",
  "Pontos de contato",
  "Atlas Mnemosyne",
  "Pesquisa de referências",
  "Requisitos e funcionalidades",
  "Análises heurísticas",
  "Análises gráficas",
  "Arquitetura da informação",
  "Sitemap",
  "Rabiscoframes",
  "Wireframes",
  "Fluxos de navegação",
  "Protótipo navegável de alta fidelidade",
  "Relatório de testes com usuários",
  "Guia de estilos",
  "Design System",
  "Registro do uso da Inteligência Artificial durante o processo, incluindo os prompts utilizados, análise crítica das respostas geradas e justificativa das decisões adotadas pela equipe",
];

export const bibliografiaBasica = [
  { autor: "GARRETT, Jesse James", obra: "The Elements of User Experience." },
  { autor: "NORMAN, Donald", obra: "Design Emocional." },
  { autor: "NORMAN, Donald", obra: "O Design do Dia a Dia." },
  { autor: "LOWDERMILK, Travis", obra: "Design Centrado no Usuário." },
  { autor: "KRUG, Steve", obra: "Não Me Faça Pensar." },
  { autor: "TEIXEIRA, Fabrício", obra: "Introdução e Boas Práticas em UX Design." },
  {
    autor: "GASPARETTO, Débora Aita",
    obra: "Metodologia 5I's na projetação do aplicativo Baloo.",
  },
];

export const bibliografiaComplementar = [
  { autor: "LIDWELL, Holden e Butler", obra: "Princípios Universais do Design." },
  { autor: "NIELSEN, Jakob", obra: "" },
  { autor: "MORVILLE, Peter", obra: "" },
  { autor: "ROSENFELD, Louis", obra: "" },
  { autor: "COOPER, Alan", obra: "" },
  { autor: "BROWN, Tim", obra: "" },
  { autor: "BONSIEPE, Gui", obra: "" },
  { autor: "MUNARI, Bruno", obra: "" },
];

export const objetivosEspecificos = [
  "compreender o processo de desenvolvimento de interfaces digitais centradas no usuário;",
  "aplicar a metodologia 5I's em todas as etapas do projeto;",
  "realizar pesquisas qualitativas e quantitativas com usuários;",
  "identificar problemas e oportunidades de projeto;",
  "elaborar briefings e requisitos de projeto;",
  "construir personas e jornadas de usuários;",
  "realizar análises heurísticas e análises gráficas de interfaces digitais;",
  "desenvolver arquiteturas de informação;",
  "elaborar fluxos de navegação;",
  "produzir wireframes e protótipos de baixa e alta fidelidade;",
  "desenvolver sistemas visuais coerentes;",
  "aplicar princípios de design de interação;",
  "considerar critérios de acessibilidade e usabilidade;",
  "conduzir testes com usuários;",
  "documentar adequadamente todas as etapas do processo projetual;",
  "utilizar ferramentas digitais e Inteligência Artificial de forma ética e crítica;",
  "comunicar e defender soluções projetuais em apresentações públicas.",
];

export const dadosDisciplina = [
  { rotulo: "Universidade", valor: "Universidade Federal de Santa Maria" },
  { rotulo: "Curso", valor: "Desenho Industrial" },
  { rotulo: "Disciplina", valor: "Laboratório de Projeto de Interfaces" },
  { rotulo: "Carga horária", valor: "120 horas" },
  { rotulo: "Créditos", valor: "08" },
  { rotulo: "Oferta", valor: "2º semestre" },
  { rotulo: "Regime", valor: "Presencial" },
  { rotulo: "Ano/Semestre", valor: "2026/2" },
];
