# Documentação da API getField

## Visão Geral

A função `getField` fornece uma interface unificada para interagir com campos de formulário em seus scripts de página ou formulário. Ela retorna um objeto **FieldAPI** para campos de valor único ou um array de **RepeaterManagerType** para campos repetidores, dependendo do tipo do campo.

---

## Assinatura

```javascript
// Campos de valor único:
const fieldAPI = this.getField('FieldTitle');

// Campos repetidores:
const repeaterAPIs = this.getField('RepeaterFieldTitle'); // Array de gerenciadores
```

---

## 1. Campos Repeater

**Métodos/propriedades do RepeaterManagerType:**

| Propriedade / Método      | Descrição                               |
|--------------------------|---------------------------------------|
| `value`                  | Itens atuais do repeater (array de objetos). |
| `dataSource`             | Fonte de dados bruta antes do mapeamento. |
| `parentValues`           | Valores do contexto pai.               |
| `fetchData(): Promise`   | Carrega ou recarrega dados do repeater. |
| `loadMore(): Promise`    | Carrega o próximo lote/página de dados. |
| `setValue(vals: any[])`  | Substitui todos os itens do repeater. |
| `detectChanges()`        | Atualiza a UI para esse repeater.     |
| `setVisible(flag)`       | Mostra ou esconde o repeater.          |

```javascript
// Acessa o primeiro gerenciador do repeater
const productsRep = this.getField('Products')[0];

// Adiciona um novo item
const newItem = { ProductId: 123, Quantity: 2 };
productsRep.setValue(productsRep.value.concat(newItem));

// Ou substitui todos os itens de uma vez
productsRep.setValue([
  { ProductId: 101, Quantity: 5 },
  newItem
]);

// Carrega dados remotos e atualiza a UI
productsRep.fetchData().then(() => {
  productsRep.detectChanges();
});

// Lê os itens atuais
const items = productsRep.value;
```

---

## 2. Campos Dropdown / DropdownDB

**Métodos/propriedades do DropdownAPI:**

| Propriedade / Método     | Descrição                                |
|-------------------------|------------------------------------------|
| `options`               | Array de opções `{ Id, Description }`.  |
| `value`                 | Valor selecionado atual.                 |
| `fetchData(): Promise`  | Carrega opções do servidor (baseado em BD). |
| `setValue(val)`         | Seleciona um valor.                      |
| `setOptions(opts)`      | Substitui o array de opções.             |
| `setVisible(flag)`      | Mostra ou esconde o dropdown.             |
| `setDisabled(flag)`     | Habilita ou desabilita o dropdown.       |
| `detectChanges()`       | Atualiza a UI.                           |

```javascript
const countryField = this.getField('Country');

// Carrega opções dinâmicas
countryField.fetchData().then(() => {
  // Substitui opções se necessário
  countryField.setOptions([
    { Id: 'BR', Description: 'Brasil' },
    { Id: 'US', Description: 'Estados Unidos' }
  ]);
  // Seleciona um valor
  countryField.setValue('BR');
  // Atualiza a UI
  countryField.detectChanges();
});
```

---

## 3. Campos AutoComplete

**Métodos/propriedades do AutoCompleteAPI:**

| Propriedade / Método     | Descrição                              |
|-------------------------|--------------------------------------|
| `options`               | Lista de sugestões (array de valores). |
| `value`                 | Entrada ou seleção atual.             |
| `fetchData(): Promise`  | Carrega dados de sugestão.            |
| `setValue(val)`         | Define o valor do input.              |
| `setVisible(flag)`      | Mostra ou esconde o controle.         |
| `setDisabled(flag)`     | Habilita ou desabilita o controle.    |
| `detectChanges()`       | Atualiza a UI.                       |

```javascript
const tagField = this.getField('SearchTags');

// Busca sugestões e define um valor
tagField.fetchData().then(() => {
  tagField.setValue('Importante');
  tagField.detectChanges();
});

// Lê sugestões atuais
const suggestions = tagField.options;
```

---

## 4. Campos OneToMany

**Métodos/propriedades do OneToManyAPI:**

| Propriedade / Método   | Descrição                             |
|-----------------------|-------------------------------------|
| `value`               | Valores atuais da lista (array).    |
| `add(item)`           | Adiciona uma nova linha/item.       |
| `setValue(vals)`      | Substitui a lista inteira.          |
| `detectChanges()`     | Atualiza a UI.                      |

```javascript
const itemsField = this.getField('OrderItems');

// Adiciona uma nova linha
itemsField.add({ ProductId: 10, Quantity: 1 });

// Substitui a lista inteira
itemsField.setValue([{ ProductId: 10, Quantity: 1 }]);

// Atualiza a UI
itemsField.detectChanges();
```

---

## 5. Campos Chat

**Métodos/propriedades do ChatAPI:**

| Propriedade / Método   | Descrição                            |
|-----------------------|------------------------------------|
| `messages`            | Histórico de mensagens (array).    |
| `sendMessage(msg)`    | Envia uma nova mensagem.           |
| `setMessage(msg)`     | Define o texto da mensagem rascunho.|
| `value`               | Valor atual do campo de chat.       |
| `setVisible(flag)`    | Mostrar/ocultar chat.               |
| `setDisabled(flag)`   | Habilitar/desabilitar input de chat.|
| `detectChanges()`     | Atualiza a UI.                     |

```javascript
const chatAPI = this.getField('SupportChat');

// Define e envia uma mensagem
chatAPI.setMessage('Olá!');
chatAPI.sendMessage('Olá!');

// Lê histórico de chat
const history = chatAPI.messages;

// Atualiza UI se necessário
chatAPI.detectChanges();
```

---

## 6. Campos PageView

**Métodos/propriedades do PageViewAPI:**

| Propriedade / Método   | Descrição                           |
|-----------------------|-----------------------------------|
| `value`               | Valor atual do campo.              |
| `setPageView(name)`   | Carrega/troca para outro formulário/visão pelo nome. |
| `setVisible(flag)`    | Mostra ou oculta o container da visão. |
| `setDisabled(flag)`   | Habilita ou desabilita a interação. |
| `detectChanges()`     | Atualiza a UI.                    |

```javascript
const detailsView = this.getField('DetailsView');

// Troca para outro formulário
detailsView.setPageView('AnotherForm').then(() => {
  detailsView.detectChanges();
});
```

---

## 7. Campos RenderContainer

**Métodos/propriedades do RenderContainerAPI:**

| Propriedade / Método  | Descrição                         |
|----------------------|---------------------------------|
| `reload(): Promise`  | Recarrega o conteúdo do container. |
| `setVisible(flag)`   | Mostra ou oculta o container.    |
| `setDisabled(flag)`  | Habilita ou desabilita o container. |
| `detectChanges()`    | Atualiza a UI.                  |

```javascript
const containerAPI = this.getField('CustomContainer');

// Recarrega e atualiza a UI
containerAPI.reload().then(() => {
  containerAPI.detectChanges();
});
```

---

## 8. Campos Wizard

**Métodos/propriedades do WizardAPI:**

| Propriedade / Método | Descrição                        |
|---------------------|--------------------------------|
| `nextStep()`        | Avança para o próximo passo.   |
| `previousStep()`    | Volta para o passo anterior.   |
| `setVisible(flag)`  | Mostra ou oculta o wizard.     |
| `setDisabled(flag)` | Habilita ou desabilita controles do wizard. |
| `detectChanges()`   | Atualiza a UI.                 |

```javascript
const wizardAPI = this.getField('SetupWizard');

// Navega pelos passos do wizard
wizardAPI.nextStep();
wizardAPI.previousStep();
wizardAPI.detectChanges();
```

---

## Melhores Práticas

- **Verificação de Existência**: Sempre verifique se `this.getField('Key')` retorna um resultado válido.  
- **Índice para Repeaters**: Use `[0]` (ou índice correto) para campos repetidores antes de invocar métodos.  
- **Detecção de Mudanças**: Chame `detectChanges()` após atualizações para atualizar a UI imediatamente.  
- **Dados Assíncronos**: Aguarde `fetchData()` antes de ler valores ou opções.
