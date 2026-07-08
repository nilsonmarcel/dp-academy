import { Program, Plan, Testimonial, BlogPost, FAQItem } from "./types";

export const PROGRAMS_DATA: Program[] = [
  {
    id: "jiu-jitsu-adulto",
    title: "Jiu-Jitsu Adulto (Iniciante ao Avançado)",
    description: "Treinamento técnico de Brazilian Jiu-Jitsu focado em evolução constante, autodefesa e condicionamento de elite.",
    benefits: [
      "Aumento drástico do condicionamento físico e queima calórica (até 1.000 kcal/aula).",
      "Desenvolvimento de disciplina mental, controle emocional e foco sob pressão.",
      "Defesa pessoal prática e realista para situações do dia a dia.",
      "Graduação oficial reconhecida pelas principais federações (CBJJ / IBJJF)."
    ],
    schedule: "Segunda e quarta: 19:00 | terça e quinta: 10:00, 17:00 e 19:30 | Sexta: 17:00(No gi)| Sábado: 09:00",
    targetAudience: "Homens e mulheres de 16 a 60+ anos, do absoluto iniciante ao atleta de competição.",
    image: "https://images.unsplash.com/photo-1742863067822-7719483acb63?q=80"
  },
  {
    id: "jiu-jitsu-infantil",
    title: "Jiu-Jitsu Kids (Disciplina e Caráter)",
    description: "Muito além de um esporte. O Jiu-Jitsu Kids da DP Academy foi desenvolvido para fortalecer o corpo, a mente e o caráter das crianças. Em um ambiente seguro e familiar, nossos alunos aprendem disciplina, respeito, autocontrole e confiança enquanto se divertem e evoluem a cada treino.",
    benefits: [
      "Desenvolve disciplina e responsabilidade através da rotina esportiva.",
      "Ensina respeito, autocontrole e inteligência emocional..",
      "Melhora a coordenação motora, equilíbrio, agilidade e concentração.",
      "Promove socialização, trabalho em equipe e novas amizades."
    ],
    schedule: "Segunda e Quarta: 18:30 | Sábado: 11:00",
    targetAudience: "Crianças e adolescentes de 10 a 15 anos.",
    image: "https://images.unsplash.com/photo-1616447285757-3d0084ebd43b?q=80"
  },
  {
    id: "jiu-jitsu-infantil-II",
    title: "Jiu-Jitsu infantil (Disciplina e Caráter)",
    description: "Ambiente lúdico, seguro e altamente estruturado para ensinar valores éticos, combater o bullying e desenvolver a coordenação.",
    benefits: [
      "Combate ao sedentarismo infantil e melhora notável da coordenação motora.",
      "Construção de autoconfiança sólida e respeito mútuo (hierarquia e disciplina).",
      "Ensino antibullying focado em inteligência emocional e resolução não-violenta.",
      "Socialização saudável em um ambiente familiar focado no desenvolvimento."
    ],
    schedule: "Terça e Quinta: 18:30 | Sábado: 11:00",
    targetAudience: "Crianças de 4 a 9 anos.",
    image: "https://images.unsplash.com/photo-1616447285757-3d0084ebd43b?q=80"
  },
  {
    id: "defesa-pessoal-feminina",
    title: "Jiu-Jitsu Feminino & Empoderamento",
    description: "Técnicas realistas baseadas em alavancas para neutralizar oponentes maiores e mais fortes, gerando confiança absoluta.",
    benefits: [
      "Técnicas adaptadas para neutralização rápida de agressões comuns.",
      "Desenvolvimento de postura preventiva e conscientização situacional.",
      "Ganho exponencial de autoestima, segurança e controle emocional.",
      "Ambiente de apoio mútuo, acolhedor e focado na união feminina."
    ],
    schedule: "Quarta: 19:30 ",
    targetAudience: "Mulheres de todas as idades que buscam segurança, preparo físico e autoconfiança.",
    image: "https://images.unsplash.com/photo-1644594570314-775ad32be5d9?q=80"
  },
  {
    id: "musculacao-preparacao",
    title: "Musculação & Preparação Física Integrada",
    description: "Área de musculação integrada ao seu plano, com foco em hipertrofia, emagrecimento e performance nos tatames.",
    benefits: [
      "Equipamentos ergonômicos modernos para treinamento de força otimizado.",
      "Prescrição de treinos focados na prevenção de lesões e fortalecimento de core.",
      "Acompanhamento personalizado para objetivos específicos (estética, saúde ou performance).",
      "Preparação física ideal para complementar e potencializar o seu Jiu-Jitsu."
    ],
    schedule: "Segunda a Sexta: 06:00 às 22:00 | Sábado: 08:00 às 12:00",
    targetAudience: "Todos os matriculados que buscam excelente forma física, ganho de massa magra e saúde geral.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80"
  }
];

export const PLANS_DATA: Plan[] = [
  {
    id: "plano-essencial",
    name: "Plano Classic (Musculação)",
    price: "119",
    period: "mês",
    features: [
      "Acesso ilimitado à área de Musculação",
      "Avaliação física e prescrição de treino individualizada",
      "Instrutores qualificados sempre presentes na sala",
      "Sem taxa de adesão ou taxas surpresas",
      "Ideal para estética, emagrecimento e saúde"
    ],
    popular: false,
    ctaText: "Começar Musculação"
  },
  {
    id: "plano-alliance-elite",
    name: "Combo Platinum (Jiu-Jitsu + Musculação)",
    price: "270",
    period: "mês",
    features: [
      "Acesso TOTAL a todas as aulas de Jiu-Jitsu (Sem limites)",
      "Acesso livre e ilimitado à Musculação integrada",
      "Avaliação física e treino de força personalizado",
    ],
    popular: true,
    ctaText: "Garantir Vaga Premium"
  },
  {
    id: "plano-kids",
    name: "Plano Kids Inclusivo",
    price: "149",
    period: "mês",
    features: [
      "Até 3 aulas de Jiu-Jitsu Infantil por semana",
      "Metodologia anti-bullying integrada",
      "Participação em exames de faixa festivos",
      "Ambiente familiar, seguro e acolhedor"
    ],
    popular: false,
    ctaText: "Matricular meu Filho"
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "dep-1",
    name: "Mariana Alencar",
    role: "Mãe do Theo (7 anos, espectro autista)",
    content: "O Theo tinha muita dificuldade de interação e coordenação motora. Na DP Academy, encontramos professores pacientes, amorosos e uma estrutura inclusiva incrível. Em 4 meses, o foco dele na escola melhorou e ele adora as aulas. O Jiu-Jitsu transformou nossa dinâmica familiar!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "dep-2",
    name: "Rodrigo Mendes",
    role: "Empresário e Praticante de Jiu-Jitsu",
    content: "O ritmo do meu trabalho me deixava muito estressado. Encontrei na DP Academy um ambiente familiar fantástico e uma técnica sem igual. O jiu-jitsu me trouxe foco mental e a musculação integrada me deu o condicionamento que eu precisava. Perdi 12kg e ganhei uma nova família.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "dep-3",
    name: "Beatriz Franco",
    role: "Advogada, Aluna de Defesa Pessoal",
    content: "Como mulher, sempre tive receio de andar sozinha à noite. O curso de Defesa Pessoal da DP Academy abriu meus olhos. Aprendi técnicas que dependem de jeito, não de força bruta, e melhorei muito minha postura preventiva. Hoje me sinto infinitamente mais segura e confiante.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
  }
];

export const BLOG_POSTS_DATA: BlogPost[] = [
  {
    id: "post-1",
    title: "Como o Jiu-Jitsu Desenvolve Foco, Autocontrole e Sociabilidade em Crianças com Autismo",
    slug: "jiu-jitsu-para-criancas-com-autismo",
    excerpt: "Descubra como os estímulos propriocetivos, a rotina de rituais e o acolhimento técnico auxiliam no desenvolvimento neurológico e social de crianças atípicas.",
    content: `
O jiu-jitsu é muito mais do que uma arte marcial: é uma ferramenta pedagógica e terapêutica de altíssimo impacto. Para crianças com transtornos do desenvolvimento, como o Transtorno do Espectro Autista (TEA) ou TDAH, a prática de atividades físicas estruturadas pode ser um grande desafio, mas o Jiu-Jitsu se destaca de forma única.

### 1. Estimulação Sensorial e Proprioceptiva
Muitas crianças no espectro autista apresentam disfunções de processamento sensorial. O Jiu-Jitsu, por envolver contato físico constante, pressão controlada e consciência corporal (propriocepção), atua diretamente no sistema vestibular e somatossensorial. O ato de rolar, fazer pegadas e o peso do colega ajudam a acalmar o sistema nervoso, gerando regulação e segurança corporal.

### 2. A Previsibilidade dos Rituais e Regras
Crianças atípicas se beneficiam imensamente de rotinas estruturadas. No Dojo da DP Academy, cada aula segue um protocolo rigoroso e acolhedor: a saudação inicial (Rei), o aquecimento sequencial, a explicação minuciosa das técnicas e a saudação final. Essa previsibilidade reduz a ansiedade e gera um ambiente seguro, onde a criança sabe exatamente o que esperar.

### 3. Sociabilidade e Inclusão Sem Julgamentos
Diferente de esportes coletivos onde a exclusão pode acontecer de forma sutil, no Jiu-Jitsu a parceria é essencial. Para aplicar qualquer técnica, é necessário cooperar com o colega. Na nossa metodologia inclusiva, focamos na cooperação e no acolhimento mútuo. As crianças aprendem a decifrar expressões corporais, a respeitar o limite físico do outro (com o 'tapinha' de desistência) e a celebrar as pequenas vitórias em grupo.

Na DP Academy, o projeto **Forjando Campeões** é nossa maior honra. Não ensinamos apenas luta; oferecemos um refúgio acolhedor de desenvolvimento físico, neurológico e social para cada guerreiro atípico.
    `,
    category: "Projeto Social",
    readTime: "5 min de leitura",
    date: "02 de Julho, 2026",
    author: {
      name: "Prof. Diego Prá",
      role: "Faixa Preta 4º Grau & Coordenador Técnico",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
    },
    image: "https://images.unsplash.com/photo-1635962005741-a9c4904d110b?q=80"
  },
  {
    id: "post-2",
    title: "A Combinação Perfeita: Jiu-Jitsu e Musculação para Emagrecimento e Definição",
    slug: "jiu-jitsu-e-musculacao-emagrecimento",
    excerpt: "Combinar o treino cardiovascular e de alta intensidade dos tatames com a musculação otimiza a queima de gordura e previne lesões.",
    content: `
Se o seu objetivo é emagrecer, definir o corpo e ter um condicionamento físico invejável, talvez você já tenha tentado horas intermináveis na esteira e se entediado. A resposta definitiva para uma transformação física duradoura e divertida está na sinergia entre o **Jiu-Jitsu** e a **Musculação**.

### 1. O Gasto Calórico Absurdo do Jiu-Jitsu
Uma única aula de Jiu-Jitsu pode queimar de 700 a 1.000 calorias. Trata-se de um treinamento de intervalos de alta intensidade (HIIT) natural, onde você alterna momentos de força explosiva com movimentos de resistência isométrica. O corpo continua queimando calorias por muitas horas após o término do treino devido ao efeito EPOC (excesso de consumo de oxigênio pós-exercício).

### 2. A Musculação como Motor Metabólico
Enquanto o Jiu-Jitsu drena suas reservas de glicogênio, a musculação reconstrói suas fibras musculares. Quanto mais massa muscular magra seu corpo possui, maior se torna sua taxa metabólica basal (TMB). Ou seja, você passa a queimar mais calorias mesmo em repouso. 

### 3. Blindagem Articular e Prevenção de Lesões
O Jiu-Jitsu exige flexibilidade, força de core e estabilidade das articulações (joelhos, ombros, pescoço). Treinar musculação com foco funcional fortalece os tendões, ligamentos e músculos estabilizadores, blindando seu corpo contra lesões comuns das lutas e do cotidiano.

Na DP Academy, possuímos uma estrutura onde você faz seu treino de Jiu-Jitsu e, logo ao lado, realiza sua preparação de musculação com acompanhamento profissional qualificado. Sem precisar pagar duas mensalidades e com planos otimizados para sua rotina!
    `,
    category: "Performance",
    readTime: "4 min de leitura",
    date: "28 de Junho, 2026",
    author: {
      name: "Rodrigo Nogueira",
      role: "Preparador Físico DP Academy",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
    },
    image: "https://images.unsplash.com/photo-1644594570314-775ad32be5d9?q=80"
  },
  {
    id: "post-3",
    title: "Defesa Pessoal Feminina: Por Que Toda Mulher Deveria Conhecer os Fundamentos do Jiu-Jitsu",
    slug: "defesa-pessoal-feminina-importancia",
    excerpt: "Mais do que técnicas de luta, a defesa pessoal desenvolve a consciência situacional, postura confiante e neutralização por alavancas.",
    content: `
A segurança pública é uma preocupação real para todas as mulheres. Estatísticas mostram que a maioria das situações de violência ou importunação contra as mulheres acontece em cenários onde há proximidade física e diferença de força muscular. É exatamente aí que o Jiu-Jitsu se torna a arma de defesa pessoal mais eficaz do mundo.

### 1. A Ciência das Alavancas sobre a Força Bruta
O Jiu-Jitsu foi aperfeiçoado para permitir que uma pessoa menor e fisicamente mais fraca consiga se defender e neutralizar um agressor muito maior. Ao utilizar alavancas anatômicas, posicionamento estratégico e o peso do próprio agressor a seu favor, o Jiu-Jitsu elimina a vantagem de força bruta dele. Técnicas de escape de montada, livrar-se de agarre de cabelo, estrangulamentos ou chaves de braço são aprendidas e repetidas até se tornarem reflexos automáticos.

### 2. Consciência Situacional e Prevenção
O primeiro pilar da defesa pessoal não é a luta física, mas sim a prevenção. Nas aulas da DP Academy, as alunas aprendem a analisar o ambiente, identificar comportamentos suspeitos à distância, manter distâncias seguras de segurança e adotar uma linguagem corporal firme e confiante. Agressores procuram alvos que parecem vulneráveis; uma postura altiva e atenta por si só evita a grande maioria das abordagens indesejadas.

### 3. Autoconfiança e Controle sob Estresse
A simulação de situações reais em ambiente controlado ensina a mente e o corpo a não congelarem diante do medo. O estresse induzido nos treinos ajuda a controlar a descarga de adrenalina, permitindo que a mulher raciocine de forma fria e tome a decisão correta: gritar por socorro, esquivar-se, imobilizar o agressor ou correr com segurança.

A DP Academy oferece turmas acolhedoras e exclusivas focadas em Defesa Pessoal Feminina. Nosso objetivo é construir uma comunidade de mulheres unidas, fortes, saudáveis e blindadas contra qualquer perigo.
    `,
    category: "Defesa Pessoal",
    readTime: "6 min de leitura",
    date: "15 de Junho, 2026",
    author: {
      name: "Dra. Patrícia Silva",
      role: "Faixa Preta & Psicóloga Desportiva",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
    },
    image: "https://images.unsplash.com/photo-1542937307-e90d0cc07237?q=80"
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "Nunca treinei nenhuma arte marcial e estou fora de forma. Posso começar?",
    answer: "Com certeza! Cerca de 80% dos nossos novos alunos começam do absoluto zero. Nossos professores são altamente qualificados para adaptar a intensidade de cada exercício ao seu nível de condicionamento atual. Você irá evoluir gradualmente, no seu próprio ritmo, respeitando os limites do seu corpo.",
    category: "Iniciantes"
  },
  {
    id: "faq-2",
    question: "Como funciona a musculação na DP Academy?",
    answer: "Diferente de academias tradicionais onde você paga pacotes separados, na DP Academy criamos combos unificados. No Plano Combo Premium, você tem acesso livre tanto às aulas de Jiu-Jitsu quanto à nossa área de musculação, com treinos de força personalizados e prescritos para seus objetivos específicos.",
    category: "Musculação"
  },
  {
    id: "faq-3",
    question: "Como funciona o projeto social para crianças atípicas?",
    answer: "Mais do que ensinar técnicas, o projeto busca fortalecer valores essenciais como disciplina, respeito, confiança e superação, sempre respeitando o tempo e as necessidades individuais de cada criança. Com acompanhamento próximo e atenção dedicada, as aulas auxiliam no desenvolvimento.",
    category: "Projeto Social"
  },
  {
    id: "faq-4",
    question: "Preciso comprar kimono logo no primeiro dia?",
    answer: "Não! Para a sua primeira aula experimental gratuita, nós fornecemos um kimono higienizado para você experimentar a modalidade com total conforto. Caso decida se matricular, nossa recepção oferece kimonos oficiais de alta qualidade com preços e condições facilitadas.",
    category: "Aulas"
  },
  {
    id: "faq-5",
    question: "Onde fica localizada a DP Academy em Salto-SP?",
    answer: "Estamos localizados próxima à área central de Salto-SP, de fácil acesso, salas amplas e monitorado por câmeras para a máxima segurança de sua família.",
    category: "Estrutura"
  },
  {
    id: "faq-6",
    question: "Existe plano familiar para treinar com meus filhos?",
    answer: "Sim! Acreditamos piamente no jiu-jitsu como união familiar. Por isso, oferecemos descontos progressivos altamente vantajosos para matrículas conjuntas de pais e filhos ou casais. Consulte nossa recepção via WhatsApp para uma proposta personalizada.",
    category: "Planos"
  }
];
