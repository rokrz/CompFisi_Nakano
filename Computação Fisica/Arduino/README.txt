Carrinho Controlado pela Twitch

Componentes de Hardware:
  - 1 Placa de rede Node MCU (esp8266-12e v1.0);
  - 1 Módulo de motor L298N;
  - 20 Jumpers (male to male);
  - 20 Jumpers (male to female);
  - 1 Protoboard de 170 pts;
  - 1 Cabo micro USB;
  - 1 suporte de 4 pilhas;
  - 2 kit de rodinhas;
  
  
Ferramentas de Software:
  - Arduino IDE 1.8.10 (Download: https://www.arduino.cc/en/Main/Software)

Bibliotecas:
  - Liquid Crystal (Download https://drive.google.com/open?id=14CpOZPTgmPcHedB1oDqeTVFI4eMwMcf7)
  - RTClib (Download https://drive.google.com/open?id=1AxQfcdvPMK37FLtGTzzdTTGBCBBH58mX)
  - Wire (Download https://drive.google.com/open?id=1Ej-R75OikJAlHrj275zYvKNzDN3cm0zi)
 
 * Depois de baixar essas bibliotecas, na Arduino IDE, ir em Sketch-> Include Libraries-> Add .zip Libraries
 
 Conexão dos circuitos:
  - Conectar o pino ENA do L298N com o pino D5 da placa NodeMCU
  - Conectar o pino ENB do L298N com o pino D6 da placa NodeMCU
  - Conectar o pino IN1 do L298N com o pino D8 da placa NodeMCU
  - Conectar o pino IN2 do L298N com o pino D7 da placa NodeMCU
  - Conectar o pino IN3 do L298N com o pino D4 da placa NodeMCU
  - Conectar o pino IN4 do L298N com o pino D3 da placa NodeMCU
  - Conectar o pino GND do L298N com o pino GND da placa NodeMCU
  - Conectar o pino VCC do L298N com o pino Vin da placa NodeMCU
  
  Código:
  
    Inicialmente, importamos a biblioteca de WiFi da placa ESP8266 e definimos as constantes que serão utilizadas no código, relacionadas à WiFi(ssid e password), as instâncias de conexão(WiFiClient e WiFiServer),
  a variável que armazena os comandos recebidos(data) e as portas(pinos) a serem utilizadas (leftMotorForward, rightMotorForward, leftMotorBackward, righMotorBackward, leftMotorENB e rightMotorENB).
    No nosso método de setup, que é o primeiro método a ser executado, inicializamos os pinos de controle de motor e de habilitar os motores como saídas de comando. Depois disso, configuramos o serial da nossa placa, 
  e conectamos na rede WiFi com o método connectWiFi. Por fim, iniciamos o servidor do carro, com o método server.begin().
    O método connectWiFi é responsável por utilizar as credenciais de rede (ssid e password) para conectar na rede WiFi. Ao conectar, ele imprime o IP do carro no Serial.
    Em nosso método loop, definimos o ciclo de execução do carro. A primeira etapa é a de verificar se a conexão ainda está ativa e armazenar os comandos recebidos pelo método checkClient(). Com base no comando, 
  executamos a sequência de comandos para a movimentação do carro, alterando a direção que as rodas giram.
    O método de checkClient aguarda comandos recebidos por métodos GET http. Enquanto o servidor está disponível, ele aguarda a chegada de comandos, e faz o tratamento dessa entrada.
    Além desses métodos, temos os métodos que são chamados no loop, para controlar a direção do carrinho. Cada método é responsável por controlar se o carro avança, recua, vira para a direita ou para a esquerda.
  Esse controle é realizado através do sinal emitido pela placa para os motores das rodas, controlando a direção em que cada um gira com base no movimento desejado.
  
  
  Execução do Código:
  
    Antes de subir o código no NodeMCU, nos campos relacionados à conexão WiFi, ssid e password, com o nome da rede e a senha.
    Com o carro conectado no computador via USB, abra a janela do Serial na IDE do Arduino(Lupa no canto superior direito), e inicie o código.
  Anote o endereço IP que for impresso no Serial.
