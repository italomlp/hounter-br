<p align="center">
  <img src="./logo.png" alt="logo" width="320">
</p>

O **hounter-br** é um site para calcular o número de horas trabalhadas por um
programador PJ, seguindo a legislação trabalhista. Nasceu de uma necessidade
pessoal minha, e resolvi compartilhar com outras pessoas.

## **H**OURS + C**OUNTER**

O nome **HOUNTER** vem do **H** de *hours* e do **OUNTER** de *counter*, resultando
em uma nomenclatura que remete a um contador de horas.

## Como é feito o cálculo

Basicamente, pelo artigo 64 da [CLT (Consolidação das Leis de Trabalho)](http://www.planalto.gov.br/ccivil_03/Decreto-Lei/Del5452.htm):

> O salário-hora normal, no caso de empregado mensalista, será obtido dividindo-se o salário mensal correspondente à duração do trabalho, a que se refere o art. 58, por 30 (trinta) vezes o número de horas dessa duração.

Em outras palavras, se um empregado trabalha 44 horas semanais, sendo 8 de segunda a 
sexta e mais 4 ao sábado, ele totaliza:

    44 / 6 = 7,333...

Média de 7,3 horas por dia. De acordo com a CLT, multiplicamos esse valor por 30 dias. Logo:

    7,333... * 30 = 220

Sendo assim, temos 220 horas mensais para aquele empregado.

O que fiz entao foi abstrair esse cáculo, para que o usuário informe apenas o número de horas trabalhadas semanalmente, juntamente com o valor hora que pretende cobrar (ou o salário final que quer receber), e obtenha o número de horas mensais totais, juntamente com o salário final (ou o valor/hora que deve cobrar).

Isso facilita, principalmente para quem é MEI ou outro tipo de PJ
e vai receber por horas trabalhadas, a fazer a conta certa, já que se for para a ponta do lápis, e fazer as contas sem levar em consideração os dados acima, o programador pode
chegar num número perto de 160 horas mensais, o que não está totalmente certo (eu mesmo já trabalhei recebendo menos por conta desse cálculo feito erroneamente).

## Críticas e sugestões

Quaisquer críticas e/ou sugestões são bem vindas. Abra uma issue para compartilhar sua opinião!