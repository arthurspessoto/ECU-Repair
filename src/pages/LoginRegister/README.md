# Proposta para autenticação:

## Renderização condicional com base no estado do componente


Pseudocódigo:
```javascript
estado = "componente que deve ser exibido"


se componente for igual a login:
    exibe login

se componente for igual a registro: 
    exibe registro
```

## Separação de responsabilidades: (Abstração de dados)

Proposta: abtrair lógica dos componentes (views) para um controller capaz de compartilhar o estado entre rotas e componentes

```javascript
<Controller>
    <Auth>
</Controller>
```