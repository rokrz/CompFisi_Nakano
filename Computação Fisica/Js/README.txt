Conexão com a twitch


Software dependente:

 -Node v16.13.2 (Download do instalador https://nodejs.org/en/download/current/);

Bibliotecas:

  Com o Node instalado, instalar as seguintes bibliotecas:
  - twitch-auth-tmi (npm install twitch-auth-tmi);
  - request-promise (npm install request-promise);
  - twitch-auth (npm install twitch-auth);
  
  *Os comandos de npm install devem ser executados via linha de comando.
  **Ao puxar a pasta com as dependencias, o usuário também pode optar por executar um npm install na linha de comando, sem parâmetros. 


Código:

  Nosso código se inicia definindo um Dictionary com as palavras-chave e os comandos que elas representam.
  Após isso, recebemos o endereço de IP do carrinho e o atribuímos a uma variável URL.
  Então criamos um objeto de conexão com a Twitch, utilizando a biblioteca de autenticação da Twitch.
  Após criar esse objeto, realizamos a conexão, e então estabelecemos um listener, que é responsável por receber as mensagens enviadas. Para cada mensagem enviada, se ela estiver cadastrada em nosso Dictionary, ela executa a função enviamovimento.
  A função enviamovimento é responsável por realizar o GET request, enviando nosso comando para o carrinho.
 

Execuçao do codigo:

  Primeiramente, precisamos pegar dois códigos importantes, que permitem a conexão com a twitch.
  O primeiro deles, é o nosso nome de usuário. Para isso, precisamos criar uma extensão personalizada, que permite a twitch se conectar com nosso local host. Então, entramos no site https://dev.twitch.tv/ , e vamos na sessão de criar extensão.
 Nela, preencheremos o campo de URL de Redirecionamento com http://localhost, e classificamos essa extensão como ChatBot. Ao concluir esse processo, conseguimos um ID de autorização. Essa extensão pode ser nomeada da forma que desejar.
  O segundo, é nosso TMI, e para conseguí-lo, basta acessar o site http://twitchapps.com/tmi/ e realizar login com sua conta da twitch. Ao final desse processo, voce consegue o codigo de autorização, removendo o "oauth:" que vem no início do código.
  Após conseguir os códigos, basta substituí-los nos campos client e auth com, respectivamente, o nome de usuário e o TMI.
  Para executar o programa, basta rodar o comando npm start na linha de comando. Feito isso, o código ira se conectar à Twitch, e aguardará o endereço de IP do carrinho, que é recebido na execução do programa no robô.
