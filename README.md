# Framework desafio Angular

### Cenário
Construa uma aplicação Web que irá utilizar as listagens de uma API Rest.

Esta aplicação deve conter os menus e/ou páginas:
- POSTAGENS
- ALBUNS
- TO-DOs

A API a ser utilizada está publicada em https://jsonplaceholder.typicode.com/

Utilizar Angular 9 junto com Angular Material (https://material.angular.io/) para desenvolver a aplicação.

### Tecnologias 
- Angular 9.1+
- RxJS
- Material Design 


### Arquitetura
- src
    - app
        - core
            - components
                - menu
            - enums
            - interceptor
            - interfaces
            - services
            - utils
                - mask
                - regex
        - modules
            - albums
                - service
            - posts
                - service
            - todos
                - service
        - shared
            - service
- assets
- enviroments

### Executar aplicação

```
npm install
npm start
```
Acessar: http://localhost:4200/

