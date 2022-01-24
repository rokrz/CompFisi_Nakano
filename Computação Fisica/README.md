# Twitch Car

Atividade desenvolvida em 2021 na disciplina Computação Física. Este documento foi escrito após a conclusão da atividade.

## Objetivo

1. Construir um carrinho controlado através de comandos enviados pelo chat da Twitch.
2. Construir e configurar todos os programas necessários para o envio, recepção e execução dos comandos. 

## Visão geral

É possível encontrar em alguns repositórios, por exemplo [neste pinterest](https://br.pinterest.com/pin/twitch--1034631714365131958/), indicações que, em algum momento, Twitch designava-se:

> Twitch is an interactive livestreaming service for content spanning gaming, entertainment, sports, music, and more. There’s something for everyone on Twitch.

Twitch permite que extensões sejam escritas usando sua API. Mais informação em https://dev.twitch.tv/. A extensão que foi criada neste projeto interpreta mensagens enviadas pelo chat da Twitch como comandos, converte-os para o protocolo compatível e os envia para o carrinho da Figura 1, abaixo.

![Figura 1 - Carrinho](Carrinho_1.jpeg)

O projeto do carrinho é inspirado [neste link que quebrou entre o início e o fim desta atividade](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjw6Mnj7Mr1AhVKq5UCHdNFAbIQtwJ6BAgEEAM&url=https%3A%2F%2Frees52.com%2Flearn%2F4905-make-an-iot-based-robotic-wi-fi-car-using-l298n-motor-driver-module-and-nodemcu-esp8266-12e-wi-fi-board-kt563&usg=AOvVaw1y_-E6ML47z2CN_GjWlkH_), mantido para registro do histórico da atividade.

Um projeto de carrinho similar, cujo link funciona em 24 de janeiro de 2022 é: https://create.arduino.cc/projecthub/diyprojectslab/make-wi-fi-controller-car-using-esp8266-297e49.

Na figura 2, abaixo, são apresentados os principais agentes de hardware e software, conexões físicas (num sentido amplo) e caminhos de dados. Os agentes são representados por blocos e imagens. As conexões são representadas por linhas pretas finas (num sentido amplo). Os caminhos de dados são representados por curvas coloridas.

![Figura 2 - TwitchCar-FisicoProcessosCompProtocolos](./TwitchCar-FisicoProcessosCompProtocolos.png)

