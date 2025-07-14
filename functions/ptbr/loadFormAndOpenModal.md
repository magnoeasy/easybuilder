# Documentação de Uso: `this.parent.loadFormAndOpenModal`

---

## Método  
```ts
loadFormAndOpenModal(
  options: {
    FormId: string | number;
    FormKey?: any;
    [key: string]: any;
  }
): Promise<DialogInstance>
```

---

## Propósito  
Carrega um formulário especificado dentro de um diálogo modal, permitindo que os usuários interajam com o formulário sem sair da página atual.

---

## Opções  
- **`FormId`** (`string | number`)  
  Identificador ou chave do formulário a ser carregado.  
- **`FormKey?`** (`any`, opcional)  
  Uma chave primária ou identificador passado para o formulário para pré-preenchimento ou filtragem de dados.  
- **Opções adicionais**  
  Quaisquer outros parâmetros suportados pelo serviço de carregamento de modal.

---

## Valor de Retorno  
Uma `Promise<DialogInstance>` que é resolvida quando o modal é aberto.  
O `DialogInstance` geralmente fornece:  
- **`result`**: Uma `Promise` que é resolvida quando o modal é fechado.  
- **`type`**: Indicador do modo do modal (ex.: `"edit"` ou `"create"`).  
- **`close()`**: Método para fechar o modal programaticamente.

---

## Comportamento  
1. Recupera a definição do formulário para `FormId` do serviço de formulários em runtime.  
2. Inicializa um container de diálogo modal.  
3. Renderiza o formulário dentro do modal.  
4. Passa qualquer `FormKey` ou opções adicionais para o contexto do formulário.  
5. Retorna o `DialogInstance` resultante para manipulação posterior.

---

## Exemplos  

### 1. Abrindo um Modal de Formulário sem Chave  
```js
this.parent.loadFormAndOpenModal({ FormId: "Add_Deal_Product_Modal" })
  .then(dialoger => {
    // Armazena a instância do diálogo para uso posterior
    window.SelectDealProductModalScope.dialogInstance = dialoger;
    // Reage ao fechamento do modal
    dialoger.result.then(() => {
      console.log("Modal fechado");
    });
  });
```

---

### 2. Abrindo um Modal de Formulário com Chave Primária  
```js
this.parent.loadFormAndOpenModal({ 
  FormId: 55765, 
  FormKey: primaryKey 
})
.then(dialoger => {
  // Após abrir o modal, atualiza dados relacionados
  ProfProfile.getField('Repeater')[0].fetchData();
});
```

---

## Notas  
- Sempre manipule a promise retornada para saber quando o modal estiver pronto.  
- Use `dialoger.result` para executar lógica quando o usuário fechar ou enviar o modal.  
- A estrutura exata do `DialogInstance` depende da implementação do seu serviço de modal (ex.: SweetAlert2, Angular Material).  
