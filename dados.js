let questoesData = [
    {
    "assunto": "AWS para Certificação Solutions Architect",
    "questoes": [
      {
        "tipo": "VF",
        "pergunta": "O Amazon S3 é um serviço de armazenamento de blocos.",
        "resposta": "F",
        "resolucao": "A afirmação é falsa. O Amazon S3 (Simple Storage Service) é um serviço de armazenamento de objetos, não de blocos. Ele é utilizado para armazenar e recuperar qualquer quantidade de dados a qualquer momento na nuvem."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual serviço AWS é ideal para gerenciar e automatizar a criação de instâncias EC2 com base em políticas de escalabilidade?",
        "resposta": "D",
        "alternativaA": "Amazon S3",
        "alternativaB": "Amazon RDS",
        "alternativaC": "Amazon VPC",
        "alternativaD": "Amazon EC2 Auto Scaling",
        "alternativaE": "Amazon CloudWatch",
        "resolucao": "O 'Amazon EC2 Auto Scaling' é ideal para gerenciar e automatizar a criação de instâncias EC2 com base em políticas de escalabilidade, garantindo que a aplicação tenha a capacidade necessária para lidar com a demanda."
      },
      {
        "tipo": "VF",
        "pergunta": "O Amazon Route 53 é um serviço de banco de dados gerenciado da AWS.",
        "resposta": "F",
        "resolucao": "A afirmação é falsa. O Amazon Route 53 é um serviço de DNS (Domain Name System) gerenciado que ajuda a rotear o tráfego de usuários finais para endpoints de aplicação na AWS e fora dela, não um serviço de banco de dados."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual dos seguintes serviços AWS pode ser usado para criar uma rede privada virtual (VPC)?",
        "resposta": "A",
        "alternativaA": "Amazon VPC",
        "alternativaB": "Amazon EC2",
        "alternativaC": "Amazon RDS",
        "alternativaD": "Amazon Lambda",
        "alternativaE": "Amazon CloudFront",
        "resolucao": "O 'Amazon VPC' (Virtual Private Cloud) é o serviço utilizado para criar uma rede privada virtual na AWS, onde você pode definir a topologia de rede e controlar o acesso aos recursos da nuvem."
      },
      {
        "tipo": "VF",
        "pergunta": "O AWS CloudFormation é utilizado para monitorar a performance de recursos na AWS.",
        "resposta": "F",
        "resolucao": "A afirmação é falsa. O AWS CloudFormation é um serviço que permite criar e gerenciar recursos da AWS usando arquivos de modelo. Para monitorar a performance de recursos, o serviço apropriado é o Amazon CloudWatch."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual é a principal vantagem do uso de um Load Balancer na AWS?",
        "resposta": "B",
        "alternativaA": "Reduzir o custo dos serviços de armazenamento",
        "alternativaB": "Distribuir o tráfego de entrada entre múltiplas instâncias de aplicação",
        "alternativaC": "Gerenciar os backups dos dados de aplicações",
        "alternativaD": "Aumentar a largura de banda de uma conexão de rede",
        "alternativaE": "Provisionar automaticamente novos recursos de computação",
        "resolucao": "A principal vantagem do uso de um 'Load Balancer' (Balanceador de Carga) na AWS é distribuir o tráfego de entrada entre múltiplas instâncias de aplicação, o que ajuda a garantir alta disponibilidade e escalabilidade da aplicação."
      },
	  {
        "tipo": "VF",
        "pergunta": "O Amazon DynamoDB é um serviço de banco de dados relacional da AWS.",
        "resposta": "F",
        "resolucao": "A afirmação é falsa. O Amazon DynamoDB é um serviço de banco de dados NoSQL gerenciado pela AWS, que fornece desempenho rápido e previsível com escalabilidade contínua, não é um banco de dados relacional."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual serviço da AWS deve ser usado para garantir que dados sensíveis em trânsito sejam criptografados?",
        "resposta": "C",
        "alternativaA": "Amazon RDS",
        "alternativaB": "Amazon S3",
        "alternativaC": "AWS Key Management Service (KMS)",
        "alternativaD": "AWS CloudTrail",
        "alternativaE": "Amazon CloudWatch",
        "resolucao": "O 'AWS Key Management Service (KMS)' é usado para criar e gerenciar chaves de criptografia que garantem que os dados sensíveis em trânsito sejam criptografados, aumentando a segurança dos dados."
      },
      {
        "tipo": "VF",
        "pergunta": "O Amazon S3 Glacier é projetado para armazenamento de dados que precisam de acesso frequente e rápido.",
        "resposta": "F",
        "resolucao": "A afirmação é falsa. O Amazon S3 Glacier é um serviço de armazenamento de dados de baixo custo para arquivamento e backup, projetado para dados que são acessados raramente e que podem tolerar um tempo de recuperação mais longo."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual serviço AWS é utilizado para criar e gerenciar instâncias de banco de dados relacionais na nuvem?",
        "resposta": "A",
        "alternativaA": "Amazon RDS",
        "alternativaB": "Amazon DynamoDB",
        "alternativaC": "Amazon Redshift",
        "alternativaD": "Amazon Aurora",
        "alternativaE": "Amazon Neptune",
        "resolucao": "O 'Amazon RDS' (Relational Database Service) é utilizado para criar e gerenciar instâncias de banco de dados relacionais na nuvem, incluindo suporte para vários motores de banco de dados como MySQL, PostgreSQL, e Oracle."
      },
      {
        "tipo": "VF",
        "pergunta": "O AWS IAM (Identity and Access Management) permite criar e gerenciar permissões e políticas para usuários e serviços da AWS.",
        "resposta": "V",
        "resolucao": "A afirmação é verdadeira. O AWS IAM (Identity and Access Management) permite criar e gerenciar permissões e políticas de acesso para usuários e serviços, controlando quem pode acessar recursos e o que eles podem fazer com esses recursos."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual é a principal vantagem do uso de Amazon CloudFront em uma arquitetura de aplicação?",
        "resposta": "B",
        "alternativaA": "Gerenciar a escalabilidade de instâncias EC2",
        "alternativaB": "Distribuir conteúdo para usuários finais com baixa latência",
        "alternativaC": "Armazenar dados em blocos",
        "alternativaD": "Executar código sem servidor",
        "alternativaE": "Monitorar recursos da AWS",
        "resolucao": "A principal vantagem do uso de 'Amazon CloudFront' é distribuir conteúdo para usuários finais com baixa latência, melhorando a performance da entrega de dados por meio de uma rede de distribuição de conteúdo (CDN)."
      }
    ]
  },
  {
    "assunto": "Banco de dados para Certificação OCP",
    "questoes": [
      {
        "tipo": "VF",
        "pergunta": "A SQL cláusula 'GROUP BY' é utilizada para agrupar registros que possuem valores em comum.",
        "resposta": "V",
        "resolucao": "A cláusula 'GROUP BY' é usada para agrupar registros que têm valores semelhantes em uma ou mais colunas, permitindo aplicar funções de agregação como COUNT, SUM, AVG, etc."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual comando SQL é utilizado para modificar dados já existentes em uma tabela?",
        "resposta": "C",
        "alternativaA": "INSERT",
        "alternativaB": "CREATE",
        "alternativaC": "UPDATE",
        "alternativaD": "ALTER",
        "alternativaE": "SELECT",
        "resolucao": "O comando 'UPDATE' é usado para modificar dados já existentes em uma tabela SQL."
      },
      {
        "tipo": "VF",
        "pergunta": "O comando 'TRUNCATE' remove todas as linhas de uma tabela e pode ser revertido com um 'ROLLBACK'.",
        "resposta": "F",
        "resolucao": "A afirmação é falsa. O comando 'TRUNCATE' remove todas as linhas de uma tabela, mas, diferentemente de 'DELETE', ele não pode ser revertido com 'ROLLBACK', pois é um comando DDL (Data Definition Language) e não registra transações."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual das seguintes funções SQL retorna o número total de linhas em uma tabela?",
        "resposta": "A",
        "alternativaA": "COUNT()",
        "alternativaB": "SUM()",
        "alternativaC": "AVG()",
        "alternativaD": "MAX()",
        "alternativaE": "MIN()",
        "resolucao": "A função 'COUNT()' retorna o número total de linhas em uma tabela, podendo contar todas as linhas ou apenas aquelas que não possuem valores nulos em uma coluna específica."
      },
      {
        "tipo": "VF",
        "pergunta": "A criação de índices em uma tabela pode melhorar o desempenho de consultas que utilizam a cláusula WHERE.",
        "resposta": "V",
        "resolucao": "A criação de índices em colunas pode melhorar significativamente o desempenho de consultas que usam a cláusula WHERE, reduzindo o tempo de busca no banco de dados."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual comando é usado para conceder privilégios a um usuário em um banco de dados Oracle?",
        "resposta": "D",
        "alternativaA": "ALTER",
        "alternativaB": "GRANT",
        "alternativaC": "INSERT",
        "alternativaD": "GRANT",
        "alternativaE": "REVOKE",
        "resolucao": "O comando 'GRANT' é utilizado para conceder privilégios a um usuário em um banco de dados Oracle, permitindo que ele execute ações específicas, como SELECT, INSERT, UPDATE, etc."
      },
	   {
        "tipo": "VF",
        "pergunta": "A função 'NVL()' em Oracle permite substituir valores nulos por um valor especificado.",
        "resposta": "V",
        "resolucao": "A função 'NVL()' é usada para substituir valores nulos em uma coluna por um valor especificado, garantindo que os resultados não contenham valores nulos quando necessário."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual das seguintes opções é a forma correta de criar um índice único em uma tabela?",
        "resposta": "B",
        "alternativaA": "CREATE UNIQUE INDEX idx_name ON table_name (column1, column2)",
        "alternativaB": "CREATE UNIQUE INDEX idx_name ON table_name (column1)",
        "alternativaC": "CREATE INDEX idx_name ON table_name UNIQUE (column1)",
        "alternativaD": "CREATE INDEX table_name UNIQUE idx_name (column1)",
        "alternativaE": "CREATE UNIQUE idx_name ON table_name (column1)",
        "resolucao": "A opção correta é 'CREATE UNIQUE INDEX idx_name ON table_name (column1)', pois define um índice único em uma coluna específica."
      },
      {
        "tipo": "VF",
        "pergunta": "Em Oracle, o comando 'ALTER TABLE' pode ser usado para adicionar, modificar ou remover colunas de uma tabela existente.",
        "resposta": "V",
        "resolucao": "A afirmação é verdadeira. O comando 'ALTER TABLE' permite adicionar, modificar ou remover colunas em uma tabela, bem como alterar restrições ou propriedades da tabela."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual das seguintes opções é usada para criar uma chave estrangeira em uma tabela?",
        "resposta": "C",
        "alternativaA": "ALTER TABLE ... ADD CONSTRAINT PRIMARY KEY ...",
        "alternativaB": "ALTER TABLE ... ADD CONSTRAINT UNIQUE ...",
        "alternativaC": "ALTER TABLE ... ADD CONSTRAINT FOREIGN KEY ...",
        "alternativaD": "CREATE TABLE ... PRIMARY KEY ...",
        "alternativaE": "CREATE TABLE ... UNIQUE ...",
        "resolucao": "A cláusula correta para criar uma chave estrangeira é 'ALTER TABLE ... ADD CONSTRAINT FOREIGN KEY ...', que cria a restrição de integridade referencial entre duas tabelas."
      },
      {
        "tipo": "VF",
        "pergunta": "A função 'ROWNUM' retorna o número da linha em que um registro aparece no resultado de uma consulta.",
        "resposta": "V",
        "resolucao": "A função 'ROWNUM' é usada em Oracle para atribuir um número a cada linha retornada por uma consulta, de acordo com a ordem em que os dados são exibidos."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual comando é usado para remover uma tabela do banco de dados Oracle?",
        "resposta": "A",
        "alternativaA": "DROP TABLE",
        "alternativaB": "DELETE TABLE",
        "alternativaC": "REMOVE TABLE",
        "alternativaD": "TRUNCATE TABLE",
        "alternativaE": "ERASE TABLE",
        "resolucao": "O comando correto para remover uma tabela de um banco de dados Oracle é 'DROP TABLE', que apaga a tabela e todos os seus dados permanentemente."
      }
    ]
  },
  {
    "assunto": "Data Warehouses, BI e Data Mining para concursos públicos",
    "questoes": [
      {
        "tipo": "VF",
        "pergunta": "Data Warehousing é uma técnica usada para coletar, armazenar e gerenciar grandes volumes de dados históricos para análise e relatórios.",
        "resposta": "V",
        "resolucao": "A afirmação é verdadeira. Data Warehousing envolve a coleta e armazenamento de grandes volumes de dados históricos para análise e geração de relatórios."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual dos seguintes conceitos é central para o processo de Business Intelligence (BI)?",
        "resposta": "B",
        "alternativaA": "Data Entry",
        "alternativaB": "Data Analysis",
        "alternativaC": "Data Migration",
        "alternativaD": "Data Cleansing",
        "alternativaE": "Data Collection",
        "resolucao": "A análise de dados (Data Analysis) é central para o Business Intelligence (BI), pois envolve o processo de transformar dados em informações úteis para tomada de decisões."
      },
      {
        "tipo": "VF",
        "pergunta": "O processo de Data Mining envolve a descoberta de padrões e relacionamentos significativos dentro de grandes conjuntos de dados.",
        "resposta": "V",
        "resolucao": "A afirmação é verdadeira. Data Mining é o processo de explorar grandes conjuntos de dados para descobrir padrões e relacionamentos que podem ser úteis para a análise e tomada de decisões."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual das seguintes ferramentas é comumente usada para criar e gerenciar Data Warehouses?",
        "resposta": "D",
        "alternativaA": "Photoshop",
        "alternativaB": "Microsoft Word",
        "alternativaC": "Excel",
        "alternativaD": "Oracle Database",
        "alternativaE": "Notepad",
        "resolucao": "O Oracle Database é uma ferramenta comum para criar e gerenciar Data Warehouses, oferecendo suporte para o armazenamento e análise de grandes volumes de dados."
      },
      {
        "tipo": "VF",
        "pergunta": "O OLAP (Online Analytical Processing) é uma tecnologia que permite a análise rápida de dados multidimensionais para suportar decisões empresariais.",
        "resposta": "V",
        "resolucao": "A afirmação é verdadeira. OLAP é uma tecnologia que facilita a análise rápida de dados multidimensionais, ajudando na tomada de decisões empresariais."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual é o principal objetivo de um Data Warehouse?",
        "resposta": "A",
        "alternativaA": "Centralizar e integrar dados de diferentes fontes para análise",
        "alternativaB": "Armazenar dados temporários para processamento rápido",
        "alternativaC": "Realizar backups regulares dos dados do sistema",
        "alternativaD": "Gerenciar a segurança de dados em tempo real",
        "alternativaE": "Efetuar o controle de versões de arquivos",
        "resolucao": "O principal objetivo de um Data Warehouse é centralizar e integrar dados provenientes de diferentes fontes, facilitando a análise e relatórios detalhados."
      },
	  {
        "tipo": "VF",
        "pergunta": "No contexto de Data Warehousing, o termo 'ETL' refere-se a Extração, Transformação e Carga de dados.",
        "resposta": "V",
        "resolucao": "A afirmação é verdadeira. ETL é um processo que envolve a extração de dados de fontes diversas, transformação desses dados para adequação e a carga desses dados em um Data Warehouse."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual dos seguintes é um exemplo de ferramenta de BI usada para visualização de dados?",
        "resposta": "C",
        "alternativaA": "MySQL",
        "alternativaB": "SQL Server",
        "alternativaC": "Tableau",
        "alternativaD": "Apache Hadoop",
        "alternativaE": "MongoDB",
        "resolucao": "Tableau é uma ferramenta de Business Intelligence amplamente utilizada para visualização de dados, permitindo criar dashboards e relatórios interativos."
      },
      {
        "tipo": "VF",
        "pergunta": "No Data Mining, a técnica de clustering é usada para categorizar dados em grupos com base em características similares.",
        "resposta": "V",
        "resolucao": "A afirmação é verdadeira. Clustering é uma técnica de Data Mining que agrupa dados semelhantes em clusters para identificar padrões e relações dentro dos dados."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual é o propósito principal da análise de dados de 'Big Data'?",
        "resposta": "E",
        "alternativaA": "Armazenar grandes volumes de dados temporariamente",
        "alternativaB": "Executar transações rápidas em dados pequenos",
        "alternativaC": "Gerenciar dados em tempo real",
        "alternativaD": "Criar backups regulares de dados",
        "alternativaE": "Analisar grandes volumes de dados para descobrir padrões e insights",
        "resolucao": "O propósito principal da análise de dados de 'Big Data' é examinar grandes volumes de dados para descobrir padrões, insights e tendências que podem informar decisões estratégicas."
      },
      {
        "tipo": "VF",
        "pergunta": "Business Intelligence é uma disciplina que abrange a análise de dados, mas não inclui a visualização de dados.",
        "resposta": "F",
        "resolucao": "A afirmação é falsa. Business Intelligence inclui a análise de dados, mas também envolve a visualização de dados para ajudar a interpretar e comunicar insights de forma eficaz."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual das seguintes funções é realizada pelo componente 'Data Mart' dentro de um Data Warehouse?",
        "resposta": "A",
        "alternativaA": "Fornecer uma visão detalhada e específica de um segmento de dados",
        "alternativaB": "Gerenciar transações de dados em tempo real",
        "alternativaC": "Armazenar dados em cache para acesso rápido",
        "alternativaD": "Executar operações de backup e recuperação de dados",
        "alternativaE": "Desenvolver algoritmos de mineração de dados",
        "resolucao": "O componente 'Data Mart' é projetado para fornecer uma visão detalhada e específica de um segmento de dados dentro de um Data Warehouse, facilitando a análise em áreas de interesse específicas."
      }
    ]
  },
	{
    "assunto": "Direito Constitucional para concursos públicos",
    "questoes": [
      {
        "tipo": "VF",
        "pergunta": "O direito à vida é garantido pela Constituição Federal de 1988 e pode ser limitado em casos de legítima defesa.",
        "resposta": "V",
        "resolucao": "A afirmação é verdadeira. O Art. 5º, caput, da Constituição Federal de 1988 garante o direito à vida. No entanto, o Código Penal Brasileiro permite a limitação desse direito em situações de legítima defesa, conforme previsto no Art. 25 do Código Penal."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual dos seguintes direitos é considerado um direito social na Constituição Federal de 1988?",
        "resposta": "C",
        "alternativaA": "Liberdade de expressão",
        "alternativaB": "Direito à propriedade",
        "alternativaC": "Direito à educação",
        "alternativaD": "Liberdade religiosa",
        "alternativaE": "Direito à vida privada",
        "resolucao": "De acordo com o Art. 6º da Constituição Federal de 1988, o direito à educação é um dos direitos sociais, ao lado de outros como saúde e trabalho. Os direitos sociais visam garantir condições mínimas de bem-estar para todos os cidadãos."
      },
      {
        "tipo": "VF",
        "pergunta": "A Constituição Federal de 1988 permite a criação de leis estaduais que infrinjam os direitos e garantias fundamentais.",
        "resposta": "F",
        "resolucao": "A afirmação é falsa. A Constituição Federal estabelece, no Art. 60, que as emendas à Constituição não podem abolir os direitos e garantias fundamentais. As leis estaduais devem respeitar e não infringir os direitos e garantias estabelecidos pela Constituição Federal."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual é o prazo máximo para o exercício do direito de greve dos servidores públicos, conforme a Constituição Federal de 1988?",
        "resposta": "A",
        "alternativaA": "Não há prazo máximo estabelecido",
        "alternativaB": "30 dias",
        "alternativaC": "60 dias",
        "alternativaD": "90 dias",
        "alternativaE": "120 dias",
        "resolucao": "A Constituição Federal de 1988 não estabelece um prazo máximo específico para o exercício do direito de greve dos servidores públicos. No entanto, a regulamentação do direito de greve é feita por leis específicas que podem definir aspectos do exercício desse direito."
      },
      {
        "tipo": "VF",
        "pergunta": "O princípio da separação dos Poderes, conforme a Constituição Federal de 1988, proíbe a atuação do Judiciário sobre matérias legislativas.",
        "resposta": "F",
        "resolucao": "A afirmação é falsa. O princípio da separação dos Poderes, conforme o Art. 2º da Constituição Federal de 1988, estabelece a independência entre os Poderes Executivo, Legislativo e Judiciário. No entanto, o Judiciário pode atuar sobre matérias legislativas em casos de controle de constitucionalidade, como estabelecido no Art. 102 da Constituição."
      },
      {
        "tipo": "AE",
        "pergunta": "O controle de constitucionalidade das leis pode ser exercido por qual das seguintes instituições, conforme a Constituição Federal de 1988?",
        "resposta": "D",
        "alternativaA": "Presidência da República",
        "alternativaB": "Assembleia Legislativa",
        "alternativaC": "Tribunal de Contas da União",
        "alternativaD": "Supremo Tribunal Federal",
        "alternativaE": "Ministério Público",
        "resolucao": "Conforme o Art. 102 da Constituição Federal de 1988, o controle de constitucionalidade das leis é exercido pelo Supremo Tribunal Federal (STF), que tem a competência para julgar a constitucionalidade das normas e assegurar que elas estejam em conformidade com a Constituição."
      },
	  {
        "tipo": "VF",
        "pergunta": "O Brasil adota o sistema presidencialista de governo, conforme a Constituição Federal de 1988.",
        "resposta": "V",
        "resolucao": "A afirmação é verdadeira. O Art. 1º, parágrafo único, da Constituição Federal de 1988 estabelece que o Brasil é uma República Federativa Presidencialista. O sistema presidencialista atribui ao Presidente da República a função de chefe de Estado e chefe de governo."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual é a principal função do Senado Federal, conforme a Constituição Federal de 1988?",
        "resposta": "B",
        "alternativaA": "Elaborar o orçamento federal",
        "alternativaB": "Julgar e aprovar leis federais",
        "alternativaC": "Nomear ministros de Estado",
        "alternativaD": "Representar os Estados na Federação",
        "alternativaE": "Definir políticas de comércio exterior",
        "resolucao": "Conforme o Art. 52 da Constituição Federal de 1988, o Senado Federal tem a função de representar os Estados da Federação, julgar a constitucionalidade das leis, e também é responsável por aprovar leis federais e outras funções específicas."
      },
      {
        "tipo": "VF",
        "pergunta": "O controle de convencionalidade é um controle exercido pelos tribunais para verificar a conformidade das leis com tratados internacionais.",
        "resposta": "V",
        "resolucao": "A afirmação é verdadeira. O controle de convencionalidade verifica se as leis internas estão em conformidade com os tratados e convenções internacionais ratificados pelo Brasil, garantindo que a legislação nacional respeite os compromissos internacionais assumidos."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual dos seguintes direitos é garantido pela Constituição Federal de 1988 como um direito individual e coletivo?",
        "resposta": "A",
        "alternativaA": "Direito de reunião",
        "alternativaB": "Direito à saúde",
        "alternativaC": "Direito à educação",
        "alternativaD": "Direito ao trabalho",
        "alternativaE": "Direito à moradia",
        "resolucao": "De acordo com o Art. 5º, inciso XVI, da Constituição Federal de 1988, o direito de reunião é garantido tanto individualmente quanto coletivamente, desde que não haja alteração da ordem pública."
      },
      {
        "tipo": "VF",
        "pergunta": "O mandato dos Deputados Federais e Senadores é de 4 anos, conforme a Constituição Federal de 1988.",
        "resposta": "F",
        "resolucao": "A afirmação é falsa. Conforme o Art. 45 e Art. 46 da Constituição Federal de 1988, o mandato dos Deputados Federais é de 4 anos, enquanto o mandato dos Senadores é de 8 anos."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual é o prazo para que o Presidente da República sancione ou vete um projeto de lei aprovado pelo Congresso Nacional, conforme a Constituição Federal de 1988?",
        "resposta": "C",
        "alternativaA": "10 dias",
        "alternativaB": "15 dias",
        "alternativaC": "15 dias úteis",
        "alternativaD": "20 dias",
        "alternativaE": "30 dias",
        "resolucao": "Conforme o Art. 66 da Constituição Federal de 1988, o Presidente da República tem 15 dias úteis para sancionar ou vetar um projeto de lei aprovado pelo Congresso Nacional, a partir da data de recebimento."
      }
    ]
  },
  {
    "assunto": "Engenharia de Software para concursos públicos",
    "questoes": [
      {
        "tipo": "VF",
        "pergunta": "O ciclo de vida de desenvolvimento de software tradicionalmente inclui as fases de análise, design, implementação, testes e manutenção.",
        "resposta": "V",
        "resolucao": "A afirmação é verdadeira. O ciclo de vida de desenvolvimento de software normalmente segue essas fases, que são essenciais para a criação e manutenção de sistemas de software."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual das seguintes é uma abordagem ágil de desenvolvimento de software que enfatiza a entrega incremental e a colaboração constante com o cliente?",
        "resposta": "D",
        "alternativaA": "Modelo em Cascata",
        "alternativaB": "Modelo Espiral",
        "alternativaC": "Modelo de Prototipagem",
        "alternativaD": "Scrum",
        "alternativaE": "Modelo V",
        "resolucao": "Scrum é uma abordagem ágil que foca na entrega incremental de software e na colaboração contínua com o cliente, facilitando a adaptação às mudanças durante o desenvolvimento."
      },
      {
        "tipo": "VF",
        "pergunta": "O modelo em cascata é um modelo de desenvolvimento linear onde cada fase do projeto deve ser concluída antes do início da próxima fase.",
        "resposta": "V",
        "resolucao": "A afirmação é verdadeira. O modelo em cascata é um modelo de desenvolvimento sequencial onde cada fase deve ser finalizada antes que a próxima fase comece."
      },
      {
        "tipo": "AE",
        "pergunta": "No processo de engenharia de software, qual documento é utilizado para definir detalhadamente as funcionalidades e requisitos que o sistema deve atender?",
        "resposta": "C",
        "alternativaA": "Plano de Projeto",
        "alternativaB": "Diagrama de Casos de Uso",
        "alternativaC": "Documento de Requisitos",
        "alternativaD": "Relatório de Testes",
        "alternativaE": "Plano de Qualidade",
        "resolucao": "O Documento de Requisitos é o que define detalhadamente as funcionalidades e requisitos que o sistema deve atender, servindo como base para o design e desenvolvimento."
      },
      {
        "tipo": "VF",
        "pergunta": "Os testes de unidade são realizados para verificar se componentes individuais do software funcionam corretamente de forma isolada.",
        "resposta": "V",
        "resolucao": "A afirmação é verdadeira. Testes de unidade focam na verificação do funcionamento correto de componentes ou módulos isolados do software."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual é o objetivo principal do gerenciamento de configuração de software?",
        "resposta": "B",
        "alternativaA": "Reduzir o tempo de desenvolvimento",
        "alternativaB": "Controlar e rastrear mudanças no software",
        "alternativaC": "Desenvolver novos requisitos",
        "alternativaD": "Aumentar a cobertura de testes",
        "alternativaE": "Gerenciar a documentação do projeto",
        "resolucao": "O gerenciamento de configuração de software tem como objetivo principal controlar e rastrear mudanças no software, garantindo a integridade e consistência das versões do software ao longo do tempo."
      },
	   {
        "tipo": "VF",
        "pergunta": "O diagrama de classes é utilizado para modelar a estrutura estática de um sistema, representando suas classes e os relacionamentos entre elas.",
        "resposta": "V",
        "resolucao": "A afirmação é verdadeira. O diagrama de classes é um tipo de diagrama UML que descreve a estrutura estática de um sistema, mostrando classes e os relacionamentos entre elas."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual das seguintes práticas faz parte do processo de engenharia de software ágil?",
        "resposta": "E",
        "alternativaA": "Desenvolvimento em cascata",
        "alternativaB": "Documentação extensiva",
        "alternativaC": "Planejamento rígido",
        "alternativaD": "Implementação sem iterações",
        "alternativaE": "Entrega contínua",
        "resolucao": "Entrega contínua é uma prática ágil que envolve liberar versões do software de forma frequente e incremental, permitindo feedback rápido e ajustes contínuos."
      },
      {
        "tipo": "VF",
        "pergunta": "O método de prototipagem é utilizado para criar uma versão inicial do software que pode ser testada e refinada com base no feedback dos usuários.",
        "resposta": "V",
        "resolucao": "A afirmação é verdadeira. O método de prototipagem cria uma versão inicial do software para coletar feedback dos usuários e refinar o produto com base nesse feedback."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual é o objetivo principal da modelagem de processos de negócio (BPM) na engenharia de software?",
        "resposta": "C",
        "alternativaA": "Gerar código automaticamente",
        "alternativaB": "Testar funcionalidades do software",
        "alternativaC": "Melhorar a eficiência e a eficácia dos processos de negócio",
        "alternativaD": "Controlar a configuração do software",
        "alternativaE": "Desenvolver a documentação técnica",
        "resolucao": "A modelagem de processos de negócio (BPM) visa melhorar a eficiência e a eficácia dos processos de negócio, ajudando a entender e otimizar as operações empresariais."
      },
      {
        "tipo": "VF",
        "pergunta": "O modelo de desenvolvimento incremental permite que partes do sistema sejam desenvolvidas e entregues em etapas, com feedback contínuo e melhorias ao longo do processo.",
        "resposta": "V",
        "resolucao": "A afirmação é verdadeira. O modelo incremental permite o desenvolvimento e a entrega de partes do sistema em etapas, permitindo ajustes e melhorias com base no feedback contínuo."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual das seguintes abordagens é utilizada para gerenciar riscos durante o desenvolvimento de software?",
        "resposta": "A",
        "alternativaA": "Análise de riscos",
        "alternativaB": "Controle de versão",
        "alternativaC": "Design de interface",
        "alternativaD": "Revisão de código",
        "alternativaE": "Teste de unidade",
        "resolucao": "A análise de riscos é a abordagem utilizada para identificar, avaliar e gerenciar riscos durante o desenvolvimento de software, ajudando a mitigar problemas potenciais."
      }
    ]
  },
  {
    "assunto": "Gerenciamento de Projetos para Certificação PMP",
    "questoes": [
      {
        "tipo": "VF",
        "pergunta": "O gerente de projetos é responsável por criar o plano de gerenciamento de projetos e garantir que o projeto seja concluído dentro do prazo e orçamento estabelecidos.",
        "resposta": "V",
        "resolucao": "A afirmação é verdadeira. Segundo o PMBOK (Project Management Body of Knowledge), o gerente de projetos é responsável pela criação do plano de gerenciamento e por assegurar que o projeto seja concluído conforme o cronograma e o orçamento definidos."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual das seguintes é uma das áreas de conhecimento do PMBOK?",
        "resposta": "D",
        "alternativaA": "Gestão de Stakeholders",
        "alternativaB": "Gestão de Recursos Humanos",
        "alternativaC": "Gestão de Vendas",
        "alternativaD": "Gestão de Risco",
        "alternativaE": "Gestão de Processos",
        "resolucao": "De acordo com o PMBOK, a Gestão de Risco é uma das áreas de conhecimento, e trata da identificação, análise e resposta aos riscos do projeto."
      },
      {
        "tipo": "VF",
        "pergunta": "O ciclo de vida de um projeto pode ser definido como a série de fases que um projeto atravessa desde o início até o término.",
        "resposta": "V",
        "resolucao": "A afirmação é verdadeira. O ciclo de vida do projeto descreve as fases que um projeto passa, desde o início até o término, e pode incluir fases como iniciação, planejamento, execução, monitoramento e controle, e encerramento."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual documento é usado para formalizar a aceitação dos entregáveis do projeto pelo cliente?",
        "resposta": "A",
        "alternativaA": "Termo de Aceitação",
        "alternativaB": "Plano de Gerenciamento de Projeto",
        "alternativaC": "Declaração de Trabalho",
        "alternativaD": "Relatório de Progresso",
        "alternativaE": "Contrato de Projeto",
        "resolucao": "O Termo de Aceitação é o documento usado para formalizar a aceitação dos entregáveis do projeto pelo cliente, conforme o PMBOK."
      },
      {
        "tipo": "VF",
        "pergunta": "O processo de gerenciamento de mudanças deve ser realizado apenas no início do projeto.",
        "resposta": "F",
        "resolucao": "A afirmação é falsa. O gerenciamento de mudanças é um processo contínuo que ocorre ao longo de todo o ciclo de vida do projeto para garantir que as alterações sejam devidamente registradas e avaliadas."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual dos seguintes processos está incluído na área de conhecimento de Gerenciamento de Tempo do PMBOK?",
        "resposta": "B",
        "alternativaA": "Desenvolver o Termo de Abertura do Projeto",
        "alternativaB": "Definir Atividades",
        "alternativaC": "Realizar a Análise de Risco",
        "alternativaD": "Desenvolver o Plano de Gerenciamento de Escopo",
        "alternativaE": "Gerenciar a Comunicação do Projeto",
        "resolucao": "O processo de 'Definir Atividades' está incluído na área de conhecimento de Gerenciamento de Tempo e envolve identificar e documentar as atividades específicas necessárias para concluir o projeto."
      },
	  {
        "tipo": "VF",
        "pergunta": "O plano de gerenciamento de projeto deve ser revisado e atualizado continuamente ao longo do ciclo de vida do projeto.",
        "resposta": "V",
        "resolucao": "A afirmação é verdadeira. O plano de gerenciamento de projeto é um documento dinâmico que deve ser revisado e atualizado conforme o projeto avança e mudanças ocorrem."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual das seguintes é uma técnica de estimativa de duração de atividades?",
        "resposta": "C",
        "alternativaA": "Análise SWOT",
        "alternativaB": "Análise de Valor Agregado",
        "alternativaC": "Estimativa de Três Pontos",
        "alternativaD": "Matriz de Riscos",
        "alternativaE": "Diagrama de Pareto",
        "resolucao": "A técnica de 'Estimativa de Três Pontos' é usada para estimar a duração das atividades considerando três estimativas: otimista, pessimista e mais provável, e é uma técnica de estimativa recomendada no PMBOK."
      },
      {
        "tipo": "VF",
        "pergunta": "O gerenciamento de stakeholders é uma área de conhecimento do PMBOK que envolve identificar, analisar e engajar os stakeholders do projeto.",
        "resposta": "V",
        "resolucao": "A afirmação é verdadeira. O gerenciamento de stakeholders é uma área de conhecimento do PMBOK que se concentra na identificação, análise e estratégias para engajar os stakeholders do projeto de forma eficaz."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual é o principal objetivo do processo de 'Controlar o Cronograma'?",
        "resposta": "B",
        "alternativaA": "Desenvolver o cronograma detalhado do projeto",
        "alternativaB": "Monitorar e controlar o progresso das atividades para garantir que o cronograma seja cumprido",
        "alternativaC": "Realizar o planejamento das atividades do projeto",
        "alternativaD": "Definir a linha de base do cronograma",
        "alternativaE": "Aprovar as alterações no cronograma",
        "resolucao": "O principal objetivo do processo de 'Controlar o Cronograma' é monitorar e controlar o progresso das atividades do projeto para garantir que o cronograma planejado seja cumprido."
      },
      {
        "tipo": "VF",
        "pergunta": "O diagrama de causa e efeito é uma ferramenta usada para identificar e analisar riscos no gerenciamento de projetos.",
        "resposta": "F",
        "resolucao": "A afirmação é falsa. O diagrama de causa e efeito é geralmente utilizado para análise de problemas e identificação de causas, enquanto a análise de riscos usa outras ferramentas, como a análise de probabilidade e impacto e o diagrama de árvore de decisão."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual dos seguintes documentos descreve como os recursos serão alocados ao longo do projeto?",
        "resposta": "A",
        "alternativaA": "Plano de Gerenciamento de Recursos",
        "alternativaB": "Termo de Abertura do Projeto",
        "alternativaC": "Plano de Gerenciamento de Risco",
        "alternativaD": "Plano de Gerenciamento de Escopo",
        "alternativaE": "Relatório de Status do Projeto",
        "resolucao": "O 'Plano de Gerenciamento de Recursos' descreve como os recursos, incluindo equipe, equipamentos e materiais, serão alocados e gerenciados ao longo do projeto."
      }
    ]
  },
  {
    "assunto": "Informática Básica para concursos públicos",
    "questoes": [
      {
        "tipo": "VF",
        "pergunta": "O Microsoft Word é um software de planilhas eletrônicas.",
        "resposta": "F",
        "resolucao": "A afirmação é falsa. O Microsoft Word é um processador de texto, enquanto o Microsoft Excel é o software de planilhas eletrônicas da Microsoft."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual das seguintes opções é um sistema operacional?",
        "resposta": "C",
        "alternativaA": "Microsoft Word",
        "alternativaB": "Mozilla Firefox",
        "alternativaC": "Windows 10",
        "alternativaD": "Adobe Photoshop",
        "alternativaE": "Google Chrome",
        "resolucao": "Windows 10 é um sistema operacional, responsável por gerenciar os recursos de hardware e software de um computador."
      },
      {
        "tipo": "VF",
        "pergunta": "A função do antivírus é apenas detectar ameaças, não eliminá-las.",
        "resposta": "F",
        "resolucao": "A função do antivírus é tanto detectar quanto eliminar ameaças, como vírus, malwares e outras formas de software malicioso."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual dos seguintes dispositivos é considerado uma unidade de entrada?",
        "resposta": "A",
        "alternativaA": "Teclado",
        "alternativaB": "Monitor",
        "alternativaC": "Impressora",
        "alternativaD": "Caixa de som",
        "alternativaE": "Pendrive",
        "resolucao": "O teclado é um dispositivo de entrada, usado para inserir dados no computador."
      },
      {
        "tipo": "VF",
        "pergunta": "O armazenamento em nuvem permite que arquivos sejam acessados de qualquer lugar com conexão à internet.",
        "resposta": "V",
        "resolucao": "A afirmação é verdadeira. O armazenamento em nuvem permite que arquivos sejam salvos remotamente e acessados a partir de qualquer dispositivo com internet."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual é o atalho de teclado para copiar um arquivo ou texto no Windows?",
        "resposta": "D",
        "alternativaA": "Ctrl + V",
        "alternativaB": "Ctrl + Z",
        "alternativaC": "Ctrl + A",
        "alternativaD": "Ctrl + C",
        "alternativaE": "Ctrl + X",
        "resolucao": "O atalho 'Ctrl + C' é usado para copiar um arquivo ou texto no sistema Windows."
      },
	   {
        "tipo": "VF",
        "pergunta": "A função principal do sistema operacional é gerenciar os recursos de hardware e software do computador.",
        "resposta": "V",
        "resolucao": "A afirmação é verdadeira. O sistema operacional gerencia o hardware, a memória, os processos e os recursos de software do computador, permitindo a interação entre o usuário e a máquina."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual das seguintes opções não é considerada um software de navegação na internet (navegador)?",
        "resposta": "D",
        "alternativaA": "Google Chrome",
        "alternativaB": "Mozilla Firefox",
        "alternativaC": "Microsoft Edge",
        "alternativaD": "Adobe Acrobat Reader",
        "alternativaE": "Opera",
        "resolucao": "O Adobe Acrobat Reader é um software de visualização de arquivos PDF, não um navegador. Os demais são navegadores de internet."
      },
      {
        "tipo": "VF",
        "pergunta": "O protocolo HTTPS é mais seguro que o protocolo HTTP, pois utiliza criptografia para transmitir dados.",
        "resposta": "V",
        "resolucao": "A afirmação é verdadeira. O protocolo HTTPS (HyperText Transfer Protocol Secure) utiliza criptografia SSL/TLS para proteger a transmissão de dados, tornando-o mais seguro que o HTTP."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual das seguintes opções é um exemplo de memória volátil?",
        "resposta": "C",
        "alternativaA": "Disco rígido",
        "alternativaB": "Pendrive",
        "alternativaC": "RAM",
        "alternativaD": "SSD",
        "alternativaE": "CD-ROM",
        "resolucao": "A memória RAM é volátil, pois seus dados são apagados quando o computador é desligado. As demais são formas de armazenamento não volátil."
      },
      {
        "tipo": "VF",
        "pergunta": "O sistema operacional Linux é um software proprietário, ao contrário do Windows, que é de código aberto.",
        "resposta": "F",
        "resolucao": "A afirmação é falsa. O Linux é um sistema operacional de código aberto, enquanto o Windows é um software proprietário desenvolvido pela Microsoft."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual comando de atalho é usado para colar um item copiado ou recortado no Windows?",
        "resposta": "B",
        "alternativaA": "Ctrl + X",
        "alternativaB": "Ctrl + V",
        "alternativaC": "Ctrl + C",
        "alternativaD": "Ctrl + A",
        "alternativaE": "Ctrl + Z",
        "resolucao": "O comando 'Ctrl + V' é usado para colar um item que foi previamente copiado ou recortado no sistema Windows."
      }
    ]
  },
	{
    "assunto": "Java para Certificação Java Programmer",
    "questoes": [
      {
        "tipo": "VF",
        "pergunta": "Em Java, uma interface pode conter métodos concretos.",
        "resposta": "F",
        "resolucao": "A afirmação é falsa. Em versões anteriores ao Java 8, as interfaces não podiam conter métodos concretos. A partir do Java 8, interfaces podem ter métodos concretos desde que sejam 'default' ou 'static'."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual dos seguintes modificadores de acesso permite que um método seja acessado apenas dentro do mesmo pacote e por subclasses?",
        "resposta": "C",
        "alternativaA": "private",
        "alternativaB": "public",
        "alternativaC": "protected",
        "alternativaD": "default",
        "alternativaE": "final",
        "resolucao": "O modificador 'protected' permite que um método seja acessado dentro do mesmo pacote e por subclasses, conforme a regra de encapsulamento do Java."
      },
      {
        "tipo": "VF",
        "pergunta": "A palavra-chave 'this' em Java é usada para acessar membros da classe atual.",
        "resposta": "V",
        "resolucao": "A afirmação é verdadeira. A palavra-chave 'this' em Java é usada para referenciar variáveis e métodos da instância atual da classe."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual é o resultado da seguinte expressão: `5 + 2 * 3`?",
        "resposta": "B",
        "alternativaA": "21",
        "alternativaB": "11",
        "alternativaC": "15",
        "alternativaD": "10",
        "alternativaE": "8",
        "resolucao": "De acordo com a ordem de precedência de operadores em Java, a multiplicação é executada antes da adição. Portanto, o resultado é `5 + (2 * 3) = 5 + 6 = 11`."
      },
      {
        "tipo": "VF",
        "pergunta": "Um método estático pode acessar diretamente variáveis de instância da classe.",
        "resposta": "F",
        "resolucao": "A afirmação é falsa. Métodos estáticos não podem acessar diretamente variáveis de instância, pois pertencem à classe e não a instâncias específicas."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual das seguintes opções é usada para declarar uma constante em Java?",
        "resposta": "D",
        "alternativaA": "var",
        "alternativaB": "final static",
        "alternativaC": "const",
        "alternativaD": "static final",
        "alternativaE": "immutable",
        "resolucao": "Em Java, a combinação de 'static final' é usada para declarar constantes. A palavra-chave 'final' torna o valor imutável, e 'static' permite que seja acessível sem instanciar a classe."
      },
	  {
        "tipo": "VF",
        "pergunta": "Em Java, arrays são objetos e podem ser clonados usando o método 'clone()'.",
        "resposta": "V",
        "resolucao": "A afirmação é verdadeira. Em Java, arrays são considerados objetos e podem ser clonados através do método 'clone()', que retorna uma cópia do array original."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual será o resultado da seguinte comparação: `'hello'.equals('Hello')`?",
        "resposta": "B",
        "alternativaA": "true",
        "alternativaB": "false",
        "alternativaC": "Compilação falha",
        "alternativaD": "Lança uma exceção",
        "alternativaE": "O resultado é imprevisível",
        "resolucao": "O método 'equals()' em Java faz uma comparação sensível a maiúsculas e minúsculas. Portanto, a string 'hello' não é igual a 'Hello', e o resultado será 'false'."
      },
      {
        "tipo": "VF",
        "pergunta": "Um bloco 'try' deve ser sempre seguido por pelo menos um bloco 'catch' ou 'finally'.",
        "resposta": "V",
        "resolucao": "A afirmação é verdadeira. Em Java, todo bloco 'try' deve ser seguido por pelo menos um bloco 'catch' ou 'finally' para capturar ou finalizar exceções."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual das seguintes exceções é verificada em tempo de compilação?",
        "resposta": "C",
        "alternativaA": "NullPointerException",
        "alternativaB": "ArrayIndexOutOfBoundsException",
        "alternativaC": "IOException",
        "alternativaD": "ArithmeticException",
        "alternativaE": "ClassCastException",
        "resolucao": "A 'IOException' é uma exceção verificada em tempo de compilação, o que significa que o compilador exige que seja tratada ou declarada. As outras opções são exceções não verificadas."
      },
      {
        "tipo": "VF", 
        "pergunta": "Classes abstratas em Java podem conter métodos concretos e abstratos.",
        "resposta": "V",
        "resolucao": "A afirmação é verdadeira. Em Java, classes abstratas podem ter tanto métodos abstratos (sem implementação) quanto métodos concretos (com implementação)."
      },
      {
        "tipo": "AE",
        "pergunta": "O que acontece se um método não tratar uma exceção verificada?",
        "resposta": "D",
        "alternativaA": "A exceção é ignorada",
        "alternativaB": "O programa é encerrado",
        "alternativaC": "A exceção é convertida para uma exceção não verificada",
        "alternativaD": "O compilador emite um erro",
        "alternativaE": "O método é automaticamente encerrado",
        "resolucao": "Se um método não tratar uma exceção verificada e também não declará-la usando 'throws', o compilador emitirá um erro, pois exceções verificadas devem ser tratadas ou declaradas."
      }
    ]
  },
  {
    "assunto": "Lei 8.112/90 para concursos públicos",
    "questoes": [
      {
        "tipo": "VF",
        "pergunta": "A Lei 8.112/90 aplica-se exclusivamente aos servidores públicos federais.",
        "resposta": "V",
        "resolucao": "A afirmação é verdadeira. A Lei 8.112/90, conforme o Art. 1º, aplica-se aos servidores da União, suas autarquias e fundações públicas."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual é o prazo para que o servidor tome posse após a nomeação, conforme a Lei 8.112/90?",
        "resposta": "B",
        "alternativaA": "10 dias",
        "alternativaB": "30 dias",
        "alternativaC": "15 dias",
        "alternativaD": "20 dias",
        "alternativaE": "60 dias",
        "resolucao": "O Art. 13 da Lei 8.112/90 estabelece que o prazo para o servidor tomar posse é de 30 dias, contados da publicação do ato de nomeação."
      },
      {
        "tipo": "VF",
        "pergunta": "O servidor em estágio probatório pode ser exonerado a qualquer tempo, sem direito à defesa.",
        "resposta": "F",
        "resolucao": "A afirmação é falsa. O Art. 20 da Lei 8.112/90 prevê que o servidor em estágio probatório tem o direito de defesa antes de uma eventual exoneração, sendo submetido à avaliação de desempenho."
      },
      {
        "tipo": "AE",
        "pergunta": "De acordo com a Lei 8.112/90, qual é o período de férias anuais a que o servidor tem direito?",
        "resposta": "A",
        "alternativaA": "30 dias",
        "alternativaB": "45 dias",
        "alternativaC": "20 dias",
        "alternativaD": "15 dias",
        "alternativaE": "60 dias",
        "resolucao": "Conforme o Art. 77 da Lei 8.112/90, o servidor terá direito a 30 dias de férias anuais, que podem ser acumuladas por até dois períodos, em caso de necessidade do serviço."
      },
	        {
        "tipo": "VF",
        "pergunta": "O servidor público federal pode ser penalizado com suspensão por até 90 dias.",
        "resposta": "F",
        "resolucao": "A afirmação é falsa. Conforme o Art. 130 da Lei 8.112/90, a penalidade de suspensão pode ser aplicada por no máximo 90 dias, mas o limite usual é de até 30 dias."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual a consequência para o servidor que, sem justificativa, faltar ao serviço por mais de 30 dias consecutivos?",
        "resposta": "C",
        "alternativaA": "Advertência",
        "alternativaB": "Suspensão",
        "alternativaC": "Demissão",
        "alternativaD": "Afastamento temporário",
        "alternativaE": "Redução salarial",
        "resolucao": "De acordo com o Art. 132 da Lei 8.112/90, a ausência injustificada ao serviço por mais de 30 dias consecutivos resulta na penalidade de demissão."
      },
      {
        "tipo": "VF",
        "pergunta": "O servidor pode perder a remuneração proporcionalmente ao número de dias que faltar sem justificativa.",
        "resposta": "V",
        "resolucao": "A afirmação é verdadeira. Conforme o Art. 44 da Lei 8.112/90, o servidor perderá a remuneração correspondente aos dias de ausência injustificada."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual é o prazo máximo de licença por motivo de saúde, sem que o servidor seja submetido a uma junta médica oficial?",
        "resposta": "A",
        "alternativaA": "15 dias consecutivos",
        "alternativaB": "30 dias consecutivos",
        "alternativaC": "10 dias consecutivos",
        "alternativaD": "20 dias consecutivos",
        "alternativaE": "45 dias consecutivos",
        "resolucao": "Conforme o Art. 202 da Lei 8.112/90, o servidor poderá ser licenciado por até 15 dias consecutivos por motivo de saúde, sem a necessidade de ser avaliado por junta médica oficial."
      },
      {
        "tipo": "VF",
        "pergunta": "O servidor aposentado por invalidez pode ser convocado para realizar novas perícias médicas a qualquer momento.",
        "resposta": "V",
        "resolucao": "A afirmação é verdadeira. O Art. 188, §1º da Lei 8.112/90, prevê que o servidor aposentado por invalidez pode ser convocado para novas perícias médicas a fim de verificar a permanência das condições que justificaram sua aposentadoria."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual o prazo para o servidor público em exercício no exterior retornar ao país, após ser removido?",
        "resposta": "B",
        "alternativaA": "30 dias",
        "alternativaB": "60 dias",
        "alternativaC": "90 dias",
        "alternativaD": "45 dias",
        "alternativaE": "120 dias",
        "resolucao": "De acordo com o Art. 18 da Lei 8.112/90, o servidor removido do exterior terá o prazo de 60 dias para retornar ao Brasil e se apresentar ao novo local de exercício."
      }
    ]
  },
  {
    "assunto": "Raciocínio Lógico para concursos públicos",
    "questoes": [
      {
        "tipo": "VF",
        "pergunta": "Se a proposição 'Todos os alunos passaram na prova' for verdadeira, então a proposição 'Alguns alunos passaram na prova' também é verdadeira.",
        "resposta": "V",
        "resolucao": "A afirmação é verdadeira. Se todos os alunos passaram na prova, então, consequentemente, é verdade que alguns alunos também passaram. A proposição particular é verdadeira quando a proposição universal é verdadeira."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual o valor lógico da proposição: 'Se eu estudo, então eu passo no concurso', sabendo que eu estudei e passei no concurso?",
        "resposta": "A",
        "alternativaA": "Verdadeiro",
        "alternativaB": "Falso",
        "alternativaC": "Indeterminado",
        "alternativaD": "Verdadeiro e falso",
        "alternativaE": "Nenhuma das anteriores",
        "resolucao": "A proposição 'Se eu estudo, então eu passo no concurso' é uma implicação (condicional). Se a condição inicial (eu estudo) é verdadeira e o resultado (eu passo no concurso) também é verdadeiro, então a proposição como um todo é verdadeira."
      },
      {
        "tipo": "VF",
        "pergunta": "A negação da proposição 'Alguns políticos são honestos' é 'Nenhum político é honesto'.",
        "resposta": "F",
        "resolucao": "A afirmação é falsa. A negação correta de 'Alguns políticos são honestos' é 'Nenhum político é honesto', ou seja, não é verdade que alguns políticos sejam honestos. 'Nenhum político é honesto' é uma proposição universal negativa, não a negação direta."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual é o valor lógico da proposição composta 'p ∨ q' se p for falsa e q for verdadeira?",
        "resposta": "B",
        "alternativaA": "Falsa",
        "alternativaB": "Verdadeira",
        "alternativaC": "Indeterminado",
        "alternativaD": "Nenhuma das anteriores",
        "resolucao": "A disjunção (p ∨ q) será verdadeira se pelo menos uma das proposições p ou q for verdadeira. Como q é verdadeira, a proposição composta será verdadeira."
      },
      {
        "tipo": "VF",
        "pergunta": "A contrarrecíproca da proposição 'Se João estuda, então ele passa' é 'Se João não passa, então ele não estuda'.",
        "resposta": "V",
        "resolucao": "A afirmação é verdadeira. A contrarrecíproca de uma proposição condicional 'Se A, então B' é 'Se não B, então não A'. Assim, a contrarrecíproca de 'Se João estuda, então ele passa' é 'Se João não passa, então ele não estuda'."
      },
      {
        "tipo": "AE",
        "pergunta": "Em uma fila de 5 pessoas, de quantas maneiras diferentes essas pessoas podem ser organizadas?",
        "resposta": "E",
        "alternativaA": "10",
        "alternativaB": "15",
        "alternativaC": "20",
        "alternativaD": "50",
        "alternativaE": "120",
        "resolucao": "O número de maneiras de organizar 5 pessoas é dado pelo fatorial de 5 (5!). Portanto, 5! = 5 × 4 × 3 × 2 × 1 = 120."
      },
	  {
        "tipo": "VF",
        "pergunta": "A negação da proposição 'Se estudo, então passo' é 'Estudo e não passo'.",
        "resposta": "V",
        "resolucao": "A negação de uma proposição condicional 'Se A, então B' é 'A e não B'. Portanto, a negação de 'Se estudo, então passo' é 'Estudo e não passo'."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual das seguintes formas lógicas representa corretamente a negação da proposição 'Todos os estudantes são dedicados'?",
        "resposta": "C",
        "alternativaA": "Nenhum estudante é dedicado",
        "alternativaB": "Alguns estudantes são dedicados",
        "alternativaC": "Alguns estudantes não são dedicados",
        "alternativaD": "Todos os estudantes não são dedicados",
        "alternativaE": "Nenhuma das alternativas",
        "resolucao": "A negação de uma proposição universal 'Todos os estudantes são dedicados' é 'Alguns estudantes não são dedicados'."
      },
      {
        "tipo": "VF",
        "pergunta": "A proposição 'A e B' é verdadeira se, e somente se, tanto A quanto B forem verdadeiras.",
        "resposta": "V",
        "resolucao": "A proposição 'A e B' é verdadeira apenas quando ambas as proposições A e B são verdadeiras. Caso contrário, a proposição composta será falsa."
      },
      {
        "tipo": "AE",
        "pergunta": "Quantas combinações diferentes podem ser formadas ao escolher 3 pessoas de um grupo de 7?",
        "resposta": "B",
        "alternativaA": "35",
        "alternativaB": "21",
        "alternativaC": "14",
        "alternativaD": "28",
        "alternativaE": "10",
        "resolucao": "O número de combinações possíveis de 3 pessoas escolhidas de um grupo de 7 é dado por C(7,3) = 7! / [3!(7-3)!] = 35."
      },
      {
        "tipo": "VF",
        "pergunta": "Se 'p' é verdadeira e 'q' é falsa, a proposição composta 'p ⇒ q' (implicação) é falsa.",
        "resposta": "V",
        "resolucao": "A implicação 'p ⇒ q' é falsa somente quando a primeira proposição (p) é verdadeira e a segunda proposição (q) é falsa, o que é o caso aqui."
      },
      {
        "tipo": "AE",
        "pergunta": "Em uma permutação de 4 pessoas, qual é o número total de maneiras de organizar essas 4 pessoas?",
        "resposta": "D",
        "alternativaA": "4",
        "alternativaB": "8",
        "alternativaC": "12",
        "alternativaD": "24",
        "alternativaE": "16",
        "resolucao": "O número total de maneiras de organizar 4 pessoas é dado por 4! (fatorial de 4), ou seja, 4! = 4 × 3 × 2 × 1 = 24."
      }
    ]
  },
  {
    "assunto": "Redes para a Certificação CCNA",
    "questoes": [
      {
        "tipo": "VF",
        "pergunta": "O protocolo ARP é usado para traduzir endereços IP em endereços MAC em uma rede local.",
        "resposta": "V",
        "resolucao": "A afirmação é verdadeira. O protocolo ARP (Address Resolution Protocol) é responsável por mapear endereços IP para endereços MAC em uma rede local, facilitando a comunicação entre dispositivos."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual dos seguintes protocolos é utilizado para a transferência de arquivos entre computadores em uma rede?",
        "resposta": "C",
        "alternativaA": "HTTP",
        "alternativaB": "SMTP",
        "alternativaC": "FTP",
        "alternativaD": "DNS",
        "alternativaE": "SNMP",
        "resolucao": "O 'FTP' (File Transfer Protocol) é utilizado para a transferência de arquivos entre computadores em uma rede. HTTP é para a transferência de páginas web, SMTP para e-mails, DNS para resolução de nomes e SNMP para gerenciamento de redes."
      },
      {
        "tipo": "VF",
        "pergunta": "O protocolo OSPF é um protocolo de roteamento baseado em vetor de distância.",
        "resposta": "F",
        "resolucao": "A afirmação é falsa. OSPF (Open Shortest Path First) é um protocolo de roteamento baseado em estado de link, não em vetor de distância. Ele usa uma abordagem diferente para calcular as rotas na rede."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual é a principal função do protocolo DHCP em uma rede?",
        "resposta": "A",
        "alternativaA": "Atribuir endereços IP automaticamente para dispositivos na rede",
        "alternativaB": "Gerenciar o tráfego de e-mails",
        "alternativaC": "Fornecer segurança para as comunicações de rede",
        "alternativaD": "Resolver nomes de domínio em endereços IP",
        "alternativaE": "Encaminhar pacotes entre redes diferentes",
        "resolucao": "A principal função do 'DHCP' (Dynamic Host Configuration Protocol) é atribuir endereços IP automaticamente para dispositivos na rede, facilitando a configuração de rede para novos dispositivos."
      },
      {
        "tipo": "VF",
        "pergunta": "No modelo OSI, o protocolo TCP opera na camada de Aplicação.",
        "resposta": "F",
        "resolucao": "A afirmação é falsa. No modelo OSI, o protocolo TCP (Transmission Control Protocol) opera na camada de Transporte, não na camada de Aplicação. A camada de Aplicação é onde protocolos como HTTP e FTP operam."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual das seguintes é uma característica do protocolo IPv6 em comparação com o IPv4?",
        "resposta": "D",
        "alternativaA": "Endereços IP de 32 bits",
        "alternativaB": "Utiliza NAT para tradução de endereços",
        "alternativaC": "Número limitado de endereços disponíveis",
        "alternativaD": "Endereços IP de 128 bits",
        "alternativaE": "Menor complexidade de configuração",
        "resolucao": "O 'IPv6' utiliza endereços IP de 128 bits, proporcionando um número muito maior de endereços disponíveis em comparação com o 'IPv4', que usa endereços de 32 bits."
      },
	  {
        "tipo": "VF",
        "pergunta": "O protocolo Spanning Tree Protocol (STP) é usado para prevenir loops de broadcast em uma rede com múltiplos switches.",
        "resposta": "V",
        "resolucao": "A afirmação é verdadeira. O Spanning Tree Protocol (STP) é utilizado para prevenir loops de broadcast em redes de switches, garantindo que haja uma topologia livre de loops para tráfego de dados."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual comando é usado para verificar a tabela de roteamento em um roteador Cisco?",
        "resposta": "A",
        "alternativaA": "show ip route",
        "alternativaB": "show interfaces",
        "alternativaC": "show running-config",
        "alternativaD": "show arp",
        "alternativaE": "show vlan",
        "resolucao": "O comando 'show ip route' é utilizado para verificar a tabela de roteamento em um roteador Cisco, mostrando todas as rotas conhecidas pelo roteador."
      },
      {
        "tipo": "VF",
        "pergunta": "O protocolo BGP é um protocolo de roteamento interno usado para troca de informações de roteamento entre roteadores em uma única organização.",
        "resposta": "F",
        "resolucao": "A afirmação é falsa. O BGP (Border Gateway Protocol) é um protocolo de roteamento externo usado para troca de informações de roteamento entre diferentes sistemas autônomos na Internet. Para roteamento interno, utiliza-se o protocolo OSPF ou EIGRP."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual é o propósito principal do protocolo RIP na rede?",
        "resposta": "B",
        "alternativaA": "Gerenciar a alocação de endereços IP",
        "alternativaB": "Trocar informações de roteamento entre roteadores",
        "alternativaC": "Estabelecer conexões seguras entre redes",
        "alternativaD": "Encaminhar pacotes de dados entre switches",
        "alternativaE": "Resolver nomes de domínio em endereços IP",
        "resolucao": "O principal propósito do protocolo RIP (Routing Information Protocol) é trocar informações de roteamento entre roteadores para que eles possam construir e atualizar suas tabelas de roteamento."
      },
      {
        "tipo": "VF",
        "pergunta": "No modelo OSI, a camada de Rede é responsável pelo roteamento de pacotes entre diferentes redes.",
        "resposta": "V",
        "resolucao": "A afirmação é verdadeira. No modelo OSI, a camada de Rede é responsável pelo roteamento de pacotes entre diferentes redes, utilizando protocolos como o IP para essa função."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual dos seguintes endereços IP é um endereço de loopback padrão em uma rede IPv4?",
        "resposta": "A",
        "alternativaA": "127.0.0.1",
        "alternativaB": "192.168.1.1",
        "alternativaC": "10.0.0.1",
        "alternativaD": "172.16.0.1",
        "alternativaE": "255.255.255.0",
        "resolucao": "O endereço '127.0.0.1' é o endereço de loopback padrão em uma rede IPv4, utilizado para testar a pilha de rede no próprio dispositivo."
      }
    ]
  },
  {
    "assunto": "Redes - Protocolos TCP/IP para concursos públicos",
    "questoes": [
      {
        "tipo": "VF",
        "pergunta": "O protocolo TCP é responsável por garantir a entrega confiável de dados entre dois hosts, realizando o controle de fluxo e a correção de erros.",
        "resposta": "V",
        "resolucao": "A afirmação é verdadeira. O TCP (Transmission Control Protocol) é um protocolo de transporte que assegura a entrega confiável de dados, controlando o fluxo e corrigindo erros."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual protocolo é utilizado para a comunicação entre aplicações web e servidores, garantindo a integridade dos dados através de criptografia?",
        "resposta": "C",
        "alternativaA": "HTTP",
        "alternativaB": "FTP",
        "alternativaC": "HTTPS",
        "alternativaD": "SMTP",
        "alternativaE": "IMAP",
        "resolucao": "O HTTPS (HyperText Transfer Protocol Secure) é a versão segura do HTTP, utilizando criptografia para garantir a integridade e a confidencialidade dos dados durante a comunicação entre aplicações web e servidores."
      },
      {
        "tipo": "VF",
        "pergunta": "O protocolo UDP não garante a entrega dos pacotes, nem realiza o controle de fluxo, sendo utilizado em aplicações que precisam de menor latência.",
        "resposta": "V",
        "resolucao": "A afirmação é verdadeira. O UDP (User Datagram Protocol) é um protocolo de transporte que não garante a entrega dos pacotes e não realiza controle de fluxo, sendo ideal para aplicações que precisam de menor latência, como streaming e jogos online."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual dos seguintes protocolos opera na camada de aplicação do modelo OSI e é usado para a transferência de arquivos entre clientes e servidores?",
        "resposta": "A",
        "alternativaA": "FTP",
        "alternativaB": "IP",
        "alternativaC": "ICMP",
        "alternativaD": "TCP",
        "alternativaE": "UDP",
        "resolucao": "O FTP (File Transfer Protocol) é um protocolo da camada de aplicação utilizado para a transferência de arquivos entre clientes e servidores na rede."
      },
      {
        "tipo": "VF",
        "pergunta": "O protocolo ICMP é utilizado para gerenciar e controlar mensagens de erro e informações operacionais na comunicação entre hosts.",
        "resposta": "V",
        "resolucao": "A afirmação é verdadeira. O ICMP (Internet Control Message Protocol) é utilizado para enviar mensagens de erro e informações operacionais sobre o status da comunicação entre hosts na rede."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual protocolo é responsável pela resolução de nomes de domínio em endereços IP?",
        "resposta": "E",
        "alternativaA": "ARP",
        "alternativaB": "RARP",
        "alternativaC": "DNS",
        "alternativaD": "ICMP",
        "alternativaE": "DNS",
        "resolucao": "O DNS (Domain Name System) é responsável pela resolução de nomes de domínio em endereços IP, facilitando a navegação na internet."
      },
	  {
        "tipo": "VF",
        "pergunta": "O protocolo IP é responsável apenas pelo roteamento dos pacotes de dados, mas não garante a entrega ou a ordem correta dos pacotes.",
        "resposta": "V",
        "resolucao": "A afirmação é verdadeira. O IP (Internet Protocol) é responsável pelo roteamento dos pacotes de dados entre redes, mas não garante a entrega ou a ordem correta dos pacotes, tarefa que é realizada pelo TCP."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual protocolo é utilizado para envio de e-mails entre servidores de correio eletrônico?",
        "resposta": "B",
        "alternativaA": "POP3",
        "alternativaB": "SMTP",
        "alternativaC": "IMAP",
        "alternativaD": "FTP",
        "alternativaE": "HTTP",
        "resolucao": "O SMTP (Simple Mail Transfer Protocol) é utilizado para o envio de e-mails entre servidores de correio eletrônico."
      },
      {
        "tipo": "VF",
        "pergunta": "O protocolo ARP é utilizado para resolver endereços IP em endereços MAC em uma rede local.",
        "resposta": "V",
        "resolucao": "A afirmação é verdadeira. O ARP (Address Resolution Protocol) é utilizado para mapear endereços IP em endereços MAC dentro de uma rede local, facilitando a comunicação entre dispositivos."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual é a principal função do protocolo DHCP em uma rede?",
        "resposta": "D",
        "alternativaA": "Fornecer uma resolução de nomes de domínio para endereços IP",
        "alternativaB": "Encaminhar pacotes entre diferentes redes",
        "alternativaC": "Estabelecer uma conexão segura para comunicação",
        "alternativaD": "Atribuir endereços IP automaticamente aos dispositivos",
        "alternativaE": "Verificar a integridade dos pacotes de dados",
        "resolucao": "O DHCP (Dynamic Host Configuration Protocol) é responsável por atribuir endereços IP automaticamente aos dispositivos em uma rede, facilitando a configuração da rede."
      },
      {
        "tipo": "VF",
        "pergunta": "O protocolo HTTP é utilizado para transmissão de dados em aplicações web e opera sobre o protocolo TCP na camada de transporte.",
        "resposta": "V",
        "resolucao": "A afirmação é verdadeira. O HTTP (HyperText Transfer Protocol) é utilizado para transmissão de dados na web e opera sobre o protocolo TCP, garantindo a entrega confiável dos dados."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual protocolo é utilizado para realizar a transferência de arquivos entre um cliente e um servidor de forma segura, com criptografia?",
        "resposta": "E",
        "alternativaA": "FTP",
        "alternativaB": "SFTP",
        "alternativaC": "TFTP",
        "alternativaD": "HTTP",
        "alternativaE": "SFTP",
        "resolucao": "O SFTP (Secure File Transfer Protocol) é uma versão segura do FTP, que utiliza criptografia para proteger a transferência de arquivos entre cliente e servidor."
      }
    ]
  },
  {
    "assunto": "Scrum para a certificação CSM",
    "questoes": [
      {
        "tipo": "VF",
        "pergunta": "No Scrum, o Product Owner é responsável por maximizar o valor do produto resultante do trabalho do Scrum Team.",
        "resposta": "V",
        "resolucao": "A afirmação é verdadeira. De acordo com o Guia Scrum, o Product Owner é o único responsável por maximizar o valor do produto e do trabalho da equipe de desenvolvimento. Ele gerencia o Product Backlog e assegura que o time de desenvolvimento esteja sempre trabalhando nas prioridades mais importantes."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual é a duração recomendada para um Sprint em Scrum?",
        "resposta": "A",
        "alternativaA": "De 1 a 4 semanas",
        "alternativaB": "2 meses",
        "alternativaC": "6 semanas",
        "alternativaD": "5 dias",
        "alternativaE": "3 meses",
        "resolucao": "Conforme o Guia Scrum, um Sprint deve durar entre 1 e 4 semanas, sendo o intervalo mais curto o preferível, para permitir uma maior flexibilidade e feedback rápido."
      },
      {
        "tipo": "VF",
        "pergunta": "No Scrum, a Daily Scrum deve durar no máximo 30 minutos.",
        "resposta": "F",
        "resolucao": "A afirmação é falsa. Segundo o Guia Scrum, a Daily Scrum tem uma duração fixa de 15 minutos, não podendo exceder esse tempo. O objetivo é manter o foco e a produtividade."
      },
      {
        "tipo": "AE",
        "pergunta": "Quem é responsável por garantir que o Scrum seja compreendido e seguido por todos no Scrum Team?",
        "resposta": "B",
        "alternativaA": "Product Owner",
        "alternativaB": "Scrum Master",
        "alternativaC": "Equipe de Desenvolvimento",
        "alternativaD": "Gerente de Projeto",
        "alternativaE": "Time de Produto",
        "resolucao": "De acordo com o Guia Scrum, o Scrum Master é responsável por garantir que o Scrum seja compreendido e aplicado corretamente, além de facilitar as interações entre os membros do time e remover impedimentos."
      },
      {
        "tipo": "VF",
        "pergunta": "Uma Sprint pode ser cancelada pelo Scrum Master caso o objetivo da Sprint se torne obsoleto.",
        "resposta": "F",
        "resolucao": "A afirmação é falsa. Conforme o Guia Scrum, apenas o Product Owner tem a autoridade para cancelar uma Sprint, e isso deve ocorrer se o objetivo da Sprint se tornar obsoleto ou não fizer mais sentido."
      },
      {
        "tipo": "AE",
        "pergunta": "Durante a Sprint Planning, quais são os dois principais tópicos discutidos?",
        "resposta": "C",
        "alternativaA": "Revisão do Sprint anterior e Planejamento de Riscos",
        "alternativaB": "Definição de recursos e Metas do Produto",
        "alternativaC": "O que será feito e como será feito",
        "alternativaD": "Estimativa de Esforço e Definição do Roadmap",
        "alternativaE": "Identificação de Impedimentos e Revisão do Backlog",
        "resolucao": "Segundo o Guia Scrum, a Sprint Planning foca em dois tópicos principais: o que pode ser entregue no Sprint (o que será feito) e como o trabalho necessário para entregar o incremento será alcançado (como será feito)."
      },
	  {
        "tipo": "VF",
        "pergunta": "O Incremento no Scrum deve ser uma versão funcional e utilizável do produto.",
        "resposta": "V",
        "resolucao": "A afirmação é verdadeira. Segundo o Guia Scrum, o Incremento é a soma de todos os itens do Product Backlog concluídos durante o Sprint, além dos incrementos de todos os Sprints anteriores, e deve ser um produto utilizável e que atenda à definição de 'Pronto'."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual evento Scrum é focado em inspecionar o incremento e adaptar o Product Backlog?",
        "resposta": "D",
        "alternativaA": "Sprint Retrospective",
        "alternativaB": "Sprint Planning",
        "alternativaC": "Daily Scrum",
        "alternativaD": "Sprint Review",
        "alternativaE": "Backlog Refinement",
        "resolucao": "De acordo com o Guia Scrum, a Sprint Review é o evento onde o Incremento é inspecionado e o Product Backlog é adaptado, se necessário. Este evento permite feedback e ajustes no projeto."
      },
      {
        "tipo": "VF",
        "pergunta": "No Scrum, o time de desenvolvimento é autogerido e não tem um líder designado.",
        "resposta": "V",
        "resolucao": "A afirmação é verdadeira. Segundo o Guia Scrum, o time de desenvolvimento é autônomo e autogerido, sendo responsável por organizar e executar o trabalho sem a necessidade de um líder formal."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual das seguintes atividades NÃO é responsabilidade do Scrum Master?",
        "resposta": "B",
        "alternativaA": "Garantir que eventos Scrum ocorram e sejam produtivos",
        "alternativaB": "Gerenciar diretamente o time de desenvolvimento",
        "alternativaC": "Ajudar o time a remover impedimentos",
        "alternativaD": "Orientar o Product Owner na manutenção do Product Backlog",
        "alternativaE": "Treinar o time no uso do Scrum",
        "resolucao": "De acordo com o Guia Scrum, o Scrum Master não gerencia diretamente o time de desenvolvimento, pois o Scrum Team é autogerido. O Scrum Master facilita o processo, mas não exerce controle sobre o time."
      },
      {
        "tipo": "VF",
        "pergunta": "No Scrum, o Definition of Done (Definição de Pronto) pode variar de um Sprint para outro.",
        "resposta": "F",
        "resolucao": "A afirmação é falsa. Conforme o Guia Scrum, a Definição de Pronto deve ser uma referência constante para o time de desenvolvimento e não deve mudar de Sprint para Sprint, pois define a qualidade mínima que cada incremento deve atingir."
      },
      {
        "tipo": "AE",
        "pergunta": "O que NÃO faz parte das responsabilidades do Product Owner?",
        "resposta": "C",
        "alternativaA": "Maximizar o valor do produto",
        "alternativaB": "Gerenciar o Product Backlog",
        "alternativaC": "Definir a estimativa de esforço do time de desenvolvimento",
        "alternativaD": "Assegurar que o Product Backlog esteja visível e compreendido",
        "alternativaE": "Definir claramente os itens do Product Backlog",
        "resolucao": "De acordo com o Guia Scrum, o Product Owner não define a estimativa de esforço do time de desenvolvimento. Esta responsabilidade cabe ao próprio time, que é autônomo na determinação de suas estimativas."
      }
    ]
  },
  {
    "assunto": "Segurança da Informação para Certificação CISSP",
    "questoes": [
      {
        "tipo": "VF",
        "pergunta": "O princípio da confidencialidade garante que a informação seja acessível apenas para usuários autorizados.",
        "resposta": "V",
        "resolucao": "A afirmação é verdadeira. O princípio da confidencialidade garante que a informação seja acessível apenas para aqueles que têm autorização para acessá-la, protegendo contra acesso não autorizado."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual dos seguintes controles é uma forma de controle físico de segurança?",
        "resposta": "C",
        "alternativaA": "Políticas de segurança",
        "alternativaB": "Criptografia de dados",
        "alternativaC": "Câmeras de vigilância",
        "alternativaD": "Firewall",
        "alternativaE": "Sistema de detecção de intrusões",
        "resolucao": "As 'Câmeras de vigilância' são um exemplo de controle físico de segurança. Eles ajudam a proteger os recursos físicos, monitorando e registrando atividades em áreas sensíveis."
      },
      {
        "tipo": "VF",
        "pergunta": "A autenticação de dois fatores (2FA) envolve a verificação da identidade de um usuário com dois tipos diferentes de credenciais.",
        "resposta": "V",
        "resolucao": "A afirmação é verdadeira. A autenticação de dois fatores (2FA) usa dois tipos diferentes de credenciais para verificar a identidade de um usuário, geralmente uma combinação de algo que o usuário sabe (senha) e algo que o usuário tem (token, smartphone)."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual é o propósito principal do modelo de segurança de Camada de Defesa (Defense in Depth)?",
        "resposta": "A",
        "alternativaA": "Adicionar múltiplas camadas de segurança para proteger sistemas e dados",
        "alternativaB": "Criptografar dados em trânsito e em repouso",
        "alternativaC": "Gerenciar permissões de acesso dos usuários",
        "alternativaD": "Monitorar e registrar atividades de rede",
        "alternativaE": "Implementar políticas de segurança para controle de acesso",
        "resolucao": "O propósito principal do modelo de 'Camada de Defesa' é adicionar múltiplas camadas de segurança para proteger sistemas e dados, garantindo que se uma camada for comprometida, outras camadas ainda fornecerão proteção."
      },
      {
        "tipo": "VF",
        "pergunta": "A gestão de riscos é responsável por identificar, avaliar e implementar controles para mitigar riscos à segurança da informação.",
        "resposta": "V",
        "resolucao": "A afirmação é verdadeira. A gestão de riscos envolve identificar, avaliar e implementar controles para mitigar riscos que podem afetar a segurança da informação e os ativos da organização."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual dos seguintes conceitos descreve a técnica de dividir um sistema em partes menores para isolar e proteger dados sensíveis?",
        "resposta": "B",
        "alternativaA": "Segregação de Funções",
        "alternativaB": "Segmentação de Rede",
        "alternativaC": "Criptografia de Dados",
        "alternativaD": "Controle de Acesso Baseado em Função",
        "alternativaE": "Auditoria de Sistema",
        "resolucao": "A 'Segmentação de Rede' é a técnica de dividir um sistema em partes menores para isolar e proteger dados sensíveis, ajudando a reduzir o risco de acesso não autorizado e comprometimento de dados."
      },
	  {
        "tipo": "VF",
        "pergunta": "A Política de Segurança da Informação define os requisitos para proteger a confidencialidade, integridade e disponibilidade da informação.",
        "resposta": "V",
        "resolucao": "A afirmação é verdadeira. A Política de Segurança da Informação estabelece diretrizes e requisitos para proteger a confidencialidade, integridade e disponibilidade das informações, alinhando-se aos objetivos de segurança da organização."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual técnica é usada para garantir que os dados sejam recuperáveis em caso de perda ou corrupção?",
        "resposta": "D",
        "alternativaA": "Controle de Acesso",
        "alternativaB": "Criptografia",
        "alternativaC": "Autenticação Multifatorial",
        "alternativaD": "Backup e Recuperação",
        "alternativaE": "Monitoramento de Rede",
        "resolucao": "A técnica de 'Backup e Recuperação' é usada para garantir que os dados possam ser recuperados em caso de perda ou corrupção, assegurando a continuidade dos negócios e a integridade dos dados."
      },
      {
        "tipo": "VF",
        "pergunta": "A segregação de funções é uma técnica que pode ajudar a prevenir fraudes e erros ao dividir tarefas críticas entre diferentes indivíduos.",
        "resposta": "V",
        "resolucao": "A afirmação é verdadeira. A 'Segregação de Funções' é uma técnica de controle interno que divide tarefas críticas entre diferentes indivíduos para reduzir o risco de fraudes e erros, garantindo que uma única pessoa não tenha controle total sobre uma transação ou processo."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual é o objetivo principal do conceito de 'Least Privilege' (Menor Privilégio) na gestão de acesso?",
        "resposta": "A",
        "alternativaA": "Garantir que os usuários tenham apenas as permissões necessárias para realizar suas funções",
        "alternativaB": "Permitir que todos os usuários tenham acesso total aos recursos da organização",
        "alternativaC": "Monitorar a atividade dos usuários em tempo real",
        "alternativaD": "Segregar funções para prevenir fraudes",
        "alternativaE": "Realizar backups regulares dos dados",
        "resolucao": "O objetivo principal do conceito de 'Least Privilege' é garantir que os usuários tenham apenas as permissões necessárias para realizar suas funções, minimizando o risco de acesso não autorizado e proteção contra possíveis abusos."
      },
      {
        "tipo": "VF",
        "pergunta": "O conceito de 'Defense in Depth' (Camada de Defesa) envolve usar múltiplas camadas de segurança para proteger um sistema contra ameaças e vulnerabilidades.",
        "resposta": "V",
        "resolucao": "A afirmação é verdadeira. 'Defense in Depth' é uma abordagem que utiliza várias camadas de segurança para proteger um sistema, garantindo que a falha em uma camada não comprometa completamente a segurança do sistema, proporcionando proteção adicional."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual é o principal objetivo do processo de 'Vulnerability Assessment' (Avaliação de Vulnerabilidades)?",
        "resposta": "B",
        "alternativaA": "Garantir que os dados sejam criptografados",
        "alternativaB": "Identificar e avaliar vulnerabilidades em sistemas e aplicações",
        "alternativaC": "Gerenciar o acesso dos usuários a recursos",
        "alternativaD": "Monitorar a integridade dos sistemas",
        "alternativaE": "Realizar auditorias de conformidade",
        "resolucao": "O principal objetivo do processo de 'Vulnerability Assessment' é identificar e avaliar vulnerabilidades em sistemas e aplicações para melhorar a segurança e reduzir o risco de exploração por atacantes."
      }
    ]
  },
  {
    "assunto": "Segurança da Informação - Ataques e Malwares para concursos públicos",
    "questoes": [
      {
        "tipo": "VF",
        "pergunta": "Phishing é uma técnica de ataque que visa enganar usuários para que eles forneçam informações confidenciais, como senhas ou dados bancários.",
        "resposta": "V",
        "resolucao": "A afirmação é verdadeira. Phishing é uma técnica em que o atacante finge ser uma entidade confiável para enganar a vítima e obter dados sensíveis."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual das seguintes opções é um exemplo de malware que sequestra dados e exige pagamento de resgate?",
        "resposta": "C",
        "alternativaA": "Spyware",
        "alternativaB": "Trojan",
        "alternativaC": "Ransomware",
        "alternativaD": "Adware",
        "alternativaE": "Worm",
        "resolucao": "Ransomware é um tipo de malware que criptografa os dados da vítima e exige um pagamento para liberar o acesso a eles."
      },
      {
        "tipo": "VF",
        "pergunta": "Um ataque de negação de serviço (DoS) visa sobrecarregar um sistema com tráfego excessivo, tornando-o indisponível para os usuários legítimos.",
        "resposta": "V",
        "resolucao": "A afirmação é verdadeira. O ataque de negação de serviço (DoS) sobrecarrega os recursos de um sistema, impedindo que ele funcione corretamente."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual tipo de malware é projetado para se replicar automaticamente em outros computadores sem a necessidade de interação humana?",
        "resposta": "B",
        "alternativaA": "Trojan",
        "alternativaB": "Worm",
        "alternativaC": "Ransomware",
        "alternativaD": "Spyware",
        "alternativaE": "Adware",
        "resolucao": "O worm é um malware que se replica automaticamente em outros computadores, espalhando-se rapidamente por redes e sistemas."
      },
      {
        "tipo": "VF",
        "pergunta": "O spyware é um tipo de malware que coleta informações pessoais e atividades do usuário sem o seu conhecimento.",
        "resposta": "V",
        "resolucao": "A afirmação é verdadeira. O spyware coleta informações sobre o usuário, como hábitos de navegação, senhas e dados pessoais, sem o seu consentimento."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual dos seguintes é um ataque em que o invasor intercepta e possivelmente altera a comunicação entre duas partes sem que elas saibam?",
        "resposta": "D",
        "alternativaA": "DDoS",
        "alternativaB": "Phishing",
        "alternativaC": "Ransomware",
        "alternativaD": "Man-in-the-middle",
        "alternativaE": "SQL Injection",
        "resolucao": "O ataque man-in-the-middle ocorre quando o invasor intercepta e possivelmente altera as comunicações entre duas partes sem que elas percebam."
      },
	  {
        "tipo": "VF",
        "pergunta": "SQL Injection é um ataque que explora vulnerabilidades em sistemas que utilizam bancos de dados e permite a execução de comandos maliciosos.",
        "resposta": "V",
        "resolucao": "A afirmação é verdadeira. SQL Injection é uma técnica usada por atacantes para injetar comandos SQL em formulários ou entradas de dados vulneráveis, possibilitando o acesso ou manipulação de dados do banco."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual técnica de segurança é usada para garantir que os dados enviados por uma parte sejam autenticados e não modificados durante a transmissão?",
        "resposta": "C",
        "alternativaA": "Firewall",
        "alternativaB": "Antivírus",
        "alternativaC": "Criptografia",
        "alternativaD": "Backup",
        "alternativaE": "Phishing",
        "resolucao": "Criptografia é a técnica usada para garantir a autenticidade e a integridade dos dados durante a transmissão, impedindo que sejam modificados ou interceptados."
      },
      {
        "tipo": "VF",
        "pergunta": "Um Trojan Horse é um tipo de malware que, aparentemente inofensivo, esconde uma ameaça maliciosa que pode comprometer a segurança do sistema.",
        "resposta": "V",
        "resolucao": "A afirmação é verdadeira. O Trojan Horse (Cavalo de Troia) se disfarça como um software legítimo, mas, quando executado, pode causar danos ao sistema ou dar acesso ao invasor."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual dos seguintes é um ataque onde múltiplos sistemas comprometidos são usados para sobrecarregar um alvo com tráfego?",
        "resposta": "D",
        "alternativaA": "SQL Injection",
        "alternativaB": "Phishing",
        "alternativaC": "Ransomware",
        "alternativaD": "DDoS",
        "alternativaE": "Man-in-the-middle",
        "resolucao": "O ataque DDoS (Distributed Denial of Service) envolve o uso de vários sistemas comprometidos para gerar uma quantidade excessiva de tráfego, tornando o alvo inacessível."
      },
      {
        "tipo": "VF",
        "pergunta": "Um ataque de engenharia social depende exclusivamente de vulnerabilidades tecnológicas para ser bem-sucedido.",
        "resposta": "F",
        "resolucao": "A afirmação é falsa. A engenharia social explora falhas humanas, como a confiança ou o descuido, para obter informações confidenciais ou acesso ao sistema, e não necessariamente vulnerabilidades tecnológicas."
      },
      {
        "tipo": "AE",
        "pergunta": "Qual técnica é usada para proteger uma rede interna contra acessos não autorizados a partir da internet?",
        "resposta": "A",
        "alternativaA": "Firewall",
        "alternativaB": "Criptografia",
        "alternativaC": "DDoS",
        "alternativaD": "Phishing",
        "alternativaE": "Backdoor",
        "resolucao": "O firewall é uma barreira de segurança que filtra o tráfego entre redes, impedindo acessos não autorizados à rede interna."
      }
    ]
  }
];
