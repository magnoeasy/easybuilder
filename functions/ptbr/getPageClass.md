# Documentação da API getPageClass

## Visão Geral

A função `getPageClass` fornece uma interface para realizar operações CRUD (como `save` e `delete`) em um recurso backend ("Page Class") diretamente do seu script de formulário ou página. Use-a para criar, atualizar ou deletar registros (ex.: leads, filtros, itens de carrinho) na sua plataforma.

---

## Assinatura

```typescript
getPageClass(alias: string): PageClassAPI | undefined
```

- **alias**: `string` — Nome/apelido do recurso (ex.: `"Lead"`, `"ShoppingCartItems"`, case-insensitive).  
- **Retorna**: objeto `PageClassAPI` com métodos CRUD se encontrado, caso contrário `undefined`.

---

## Métodos da API retornada

### save

```typescript
async save(
  values: EditValuesType | EditValuesType[],
  options: { showNotification: boolean, showLoading: boolean, isNew: boolean }
): Promise<GetPageClassResponse | GetPageClassResponse[]>
```

- **Descrição**: Salva (cria ou atualiza) um ou mais registros na Page Class.  
- **Parâmetros**:  
  - `values`: objeto ou array de objetos com os campos e valores a salvar.  
  - `options`:  
    - `showNotification`: mostra notificação ao concluir.  
    - `showLoading`: mostra indicador de carregamento durante o salvamento.  
    - `isNew`: `true` para criar novos registros.  
- **Retorna**: Promise que resolve para uma resposta ou array de respostas com `id`, `status` e `values`.

---

### delete

```typescript
async delete(
  pk: string | string[],
  options: { showLoading?: boolean, showNotification?: boolean, showConfirmation?: boolean }
): Promise<GetPageClassResponse | GetPageClassResponse[]>
```

- **Descrição**: Deleta um ou mais registros pela chave primária.  
- **Parâmetros**:  
  - `pk`: chave primária ou array de chaves para deletar.  
  - `options`:  
    - `showLoading`: mostra indicador de carregamento.  
    - `showNotification`: mostra notificação após a exclusão.  
    - `showConfirmation`: pede confirmação do usuário antes de deletar.  
- **Retorna**: Promise que resolve para uma resposta ou array de respostas com `id` e `status`.

---

## Exemplos de Uso

### Salvar um único registro

```javascript
await this.getPageClass('Lead').save(
  { LeadId: "123", FirstName: "John" },
  { showNotification: true, showLoading: true, isNew: true }
);
```

### Deletar múltiplos registros

```javascript
await this.getPageClass('Lead').delete(
  ["123", "456"],
  { showLoading: true, showNotification: true, showConfirmation: true }
);
```

---

## Tratamento de Erros

- Se `alias` não corresponder a nenhum recurso, um erro é registrado e `undefined` é retornado.  
- Sempre verifique se o resultado não é `undefined` antes de usar.

---

## Boas Práticas

- Sempre verifique se `getPageClass` retorna um objeto antes de chamar seus métodos.  
- Use opções `showLoading` e `showNotification` para melhor feedback ao usuário.  
- Use `showConfirmation` para ações destrutivas (como exclusão em massa).

---

## Exemplo Completo

```javascript
const leadApi = this.getPageClass('Lead');
if (leadApi) {
  // Salvar um novo lead
  await leadApi.save(
    { FirstName: "Jane", LastName: "Doe" },
    { showNotification: true, showLoading: true, isNew: true }
  );
  // Deletar um lead existente
  await leadApi.delete(
    "some-lead-id",
    { showLoading: true, showNotification: true, showConfirmation: true }
  );
}
```

---

## Tipos de Resposta

**GetPageClassResponse**  
```typescript
{
  id: string;       // Valor da chave primária do registro
  status: boolean;  // Status de sucesso
  values?: any;     // Valores salvos (no save)
}
```

---

## Notas

- Esta função é específica da sua plataforma ou framework low-code, não é uma API JavaScript nativa.  
- Útil para realizar operações dinâmicas de dados diretamente dos seus scripts de página ou formulário.
