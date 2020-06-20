![Decklytics](logo.png)

[WIP](https://github.com/EHavel/decklytics/issues?q=is%3Aopen+is%3Aissue+label%3Awip)

## O Projeto ##
Site de criação e analise de deck e suas características para varios jogos.

## Decklytics.pro ##

## Configuração ##

https://imagemagick.org/script/download.php

Instalar dependencias do python:
``` bash
$ pip3 install utils
$ pip3 install requests
$ pip3 install pexpect
$ pip3 install keyboard
$ pip3 install progress
$ brew install imagemagick
```

### Design ###
[figma.com/file/5AtjHZtcVGIjLSMTjp01w6/Decklytics](https://www.figma.com/file/5AtjHZtcVGIjLSMTjp01w6/Decklytics)

### Projeto v1 - Integração com LOR ###
- [ ] Suporte para vários idiomas
- [x] Listagem de cartas com filtros (por região, tipo e raridade)
- [ ] Detalhes da carta
- [ ] Detalhes do deck com exportar e gerador de imagem para compartilhar
- [ ] Importar deck

## Línguas suportadas ##

| CODE  |	LANGUAGE                    |
| ----- | ----------------------------- |
| pt_br |   Português (Brazil)          |
| de_de |   German (Germany)            |
| en_us |   English (United States)     |
| es_es |	Spanish (Spain)             |
| fr_fr |	French (France)             |
| it_it |	Italian (Italy)             |
| ja_jp |	Japanese (Japan)            |
| ko_kr |	Korean (Korea)              |

## Script de atualização de pacotes ##
Desenvolvido para fazer as integrações de forma automática com as produtoras dos jogos. Ele baixa os pacotes atualizados de cada jogo, otimiza e organiza para ser utilizado na nossa aplicação.

Comando para atualizar pacote do LOR, ele deve ser realizado na raiz do projeto
``` bash
$ yarn deploy
```

## Integração com Legends of Runeterra ##

Documentação para desenvolvedores

[developer.riotgames.com/docs/lor](https://developer.riotgames.com/docs/lor)

### Core Bundles ###
Os pacotes principais contêm ativos e dados fundamentais que são compartilhados entre cartões em todos os conjuntos. Isso inclui informações como regiões, ícones, filas, regras, etc. Os pacotes principais estão disponíveis na Internet nos seguintes URLs:

#### Latest ####
* https://dd.b.pvp.net/latest/core-en_us.zip

#### Versioned ####
* https://dd.b.pvp.net/1_0_0/core-en_us.zip

### Set Bundles ###
Os pacotes configuráveis ​​contêm ativos e dados para cartões liberados em um conjunto específico. Pacotes configuráveis ​​estão disponíveis em duas versões; completo e leve. O pacote completo contém a arte do cartão, a arte alternativa e as ilustrações em tamanho real de cada cartão. A versão Lite contém apenas a arte do cartão e a arte alternativa, tornando a versão Lite significativamente menor em tamanho. Pacotes configuráveis ​​estão disponíveis na Internet nos seguintes URLs:

#### Latest ####
* [set1 full] https://dd.b.pvp.net/latest/set1-en_us.zip
* [set1 lite] https://dd.b.pvp.net/latest/set1-lite-en_us.zip
* [set2 full] https://dd.b.pvp.net/latest/set2-en_us.zip
* [set2 lite] https://dd.b.pvp.net/latest/set2-lite-en_us.zip

#### Versioned ####
* [set1 full] https://dd.b.pvp.net/1_0_0/set1-en_us.zip
* [set1 lite] https://dd.b.pvp.net/1_0_0/set1-lite-en_us.zip
* [set2 full] https://dd.b.pvp.net/1_0_0/set2-en_us.zip
* [set2 lite] https://dd.b.pvp.net/1_0_0/set2-lite-en_us.zip

#### Gerar Deck ID ####
* https://github.com/SwitchbladeBot/runeterra

### Banco de icons ###
* https://leagueoflegends.fandom.com/wiki

https://leagueoflegends.fandom.com/wiki/Card_Back_(Legends_of_Runeterra)
