# Documentação de Manipuladores de Eventos de Ciclo de Vida

## Visão Geral

Existem duas maneiras de construir a interface de usuário (UI) na plataforma:

1. **Páginas**  
   - Contêineres estáticos de UI que exibem campos que você adiciona.  
   - Sem CRUD integrado: adicionar um campo de texto em uma página apenas renderiza um input de texto, sem integração com o banco de dados.

2. **Formulários**  
   - Suporte completo à API de CRUD: adicionar um campo de texto em um formulário cria automaticamente uma coluna correspondente no banco de dados.  
   - Em tempo de execução, formulários incluem grades, botões e todas as operações (criar, ler, atualizar, excluir).

Com base nessa distinção, os seguintes manipuladores de eventos de ciclo de vida estão disponíveis:

---

## Eventos

| Evento         | Dispara Quando                   | Caso de Uso                                    |
|---------------|----------------------------------|-----------------------------------------------|
| `onLoadForm`  | Carregamento de página ou formulário | Inicialização geral, configuração da UI       |
| `onNewForm`   | Formulário aberto para **novo** registro | Definir valores padrão, gerar IDs           |
| `onEditForm`  | Formulário aberto para **edição**       | Pré-preencher campos, buscar dados relacionados, desabilitar campos |

## onLoadForm

- **Quando é disparado**: Sempre que uma **Página** ou **Formulário** é carregado no navegador.  
- **Objetivo**: Inicializar o estado da UI, importar scripts, anexar listeners globais, definir valores padrão de sessão ou de entidade.  
- **Assinatura**:
  ```javascript
  function onLoadForm() { /* ... */ }
  ```
- **Contexto**:
  - Em uma **Página**: executado uma vez quando a página é renderizada.  
  - Em um **Formulário**: executado antes de qualquer lógica de novo/edição, após o DOM da página estar pronto.

### Exemplo
```javascript
function onLoadForm() {
  // Torna `this` acessível globalmente para depuração
  window.this = this;

  // Registra informações da sessão
  console.log('Form/Page loaded. Current user:', this.session.UserId);

  // Importa script externo (por exemplo, SweetAlert2)
  importScripts();

  // Define um valor padrão em um campo
  this.getField('StartDate').setValue(new Date().toISOString());
}
```

---

## onNewForm

- **Quando é disparado**: Quando um **Formulário** é aberto especificamente para **criar um novo registro** (CRUD “Create”).  
- **Objetivo**: Gerar e atribuir valores iniciais (IDs, timestamps), definir padrões, configurar a UI para novas entradas.  
- **Assinatura**:
  ```javascript
  function onNewForm() { /* ... */ }
  ```
- **Contexto**: Apenas no modo de Formulário. Não é executado ao editar registros existentes.

### Exemplo
```javascript
function onNewForm() {
  // Gera IDs únicos para a nova entidade
  this.entity.NewRecordId = crypto.randomUUID();
  this.entity.RecordId = this.entity.NewRecordId;

  // Define o usuário atual como criador
  this.entity.CreatedBy = this.session.UserId;

  // Inicializa flags booleanas
  this.entity.IsActive = true;
}
```

---

## onEditForm

- **Quando é disparado**: Quando um **Formulário** é aberto para **editar um registro existente** (CRUD “Update”).  
- **Objetivo**: Pré-preencher campos, buscar dados relacionados, ajustar a UI com base no estado da entidade.  
- **Assinatura**:
  ```javascript
  function onEditForm() { /* ... */ }
  ```
- **Contexto**: Apenas no modo de Formulário ao editar; não é executado para novos registros.

### Exemplo
```javascript
function onEditForm() {
  // Torna `this` disponível globalmente para depuração
  window.this = this;

  // Registra o ID do registro que está sendo editado
  console.log('Editing record:', this.entity.RecordId);

  // Busca dados adicionais para um lookup
  this.getField('RelatedItems')[0].fetchData().then(() => {
    this.getField('RelatedItems')[0].detectChanges();
  });

  // Ajusta a UI: desabilita o campo ID
  this.getField('RecordId').setDisabled(true);
}
```

---

## Melhores Práticas

- **Diferencie Página de Formulário**  
  - Use **onLoadForm** em páginas para configuração de UI sem CRUD.  
  - Em formulários, onLoadForm ainda é disparado, mas você pode ramificar com base em `this.entity.RecordId` para detectar novo vs edição.

- **Verifique o Contexto**  
  - Se você precisar de lógica apenas para novo ou edição, use **onNewForm** / **onEditForm**, respectivamente.

- **Evite Manipuladores Duplicados**  
  - Não defina múltiplas funções `onNewForm` no mesmo escopo — apenas a última será executada.

- **Use `importScripts()`**  
  - Para carregar bibliotecas externas (por exemplo, SweetAlert), chame este helper dentro de onLoadForm.
