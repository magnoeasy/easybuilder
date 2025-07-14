# Documentação: `this.parent.$translate.instant()`

---

## Método  
```js
this.parent.$translate.instant(key, [interpolateParams])
```

---

## Visão Geral  
Recupera sincronamente o(s) valor(es) traduzido(s) para a(s) chave(s) de tradução fornecida(s). Retorna imediatamente (sem Observable), então você deve garantir que seus arquivos de tradução já estejam carregados antes de chamá-lo.

---

## Sintaxe  
```ts
instant(
  key: string | string[], 
  interpolateParams?: { [param: string]: any }
): string | { [key: string]: string }
```

---

## Parâmetros  
- **`key`**  
  - *Tipo*: `string` | `string[]`  
  - A chave de tradução (ou array de chaves) que você deseja consultar.  
- **`interpolateParams`** *(opcional)*  
  - *Tipo*: `object`  
  - Um mapa de nomes de placeholders para valores, para tokens como `{{username}}` dentro de suas strings de tradução.

---

## Valor de Retorno  
- Se `key` for uma string única, retorna o texto traduzido (`string`).  
- Se `key` for um array, retorna um objeto que mapeia cada chave para seu texto traduzido (`{ [key: string]: string }`).  
- Se a tradução não for encontrada (ou ainda não carregada), retorna a própria chave (a menos que você tenha configurado um fallback).

---

## Comportamento e Cuidados  
- **Síncrono**: Diferente de `.get()` ou `.stream()`, `.instant()` **não** espera o carregamento dos arquivos de tradução.  
- **Considerações sobre Loader**: O carregador padrão de tradução é assíncrono. Você é responsável por chamar `.instant()` apenas após as traduções terem sido carregadas (ex.: em um callback depois de `.use()` ou por pré-carregamento). Se chamar muito cedo, ele simplesmente retornará a chave em vez da string localizada.

---

## Exemplos  

1. **Consulta de chave única**  
   ```js
   const title = this.parent.$translate.instant('HOME.TITLE');
   // => "Bem-vindo ao Nosso Site"
   ```

2. **Consulta de múltiplas chaves**  
   ```js
   const labels = this.parent.$translate.instant(['BTN.OK', 'BTN.CANCEL']);
   // => { BTN.OK: "OK", BTN.CANCEL: "Cancelar" }
   ```

3. **Com parâmetros de interpolação**  
   ```js
   // string de tradução: "Olá, {{name}}!"
   const greeting = this.parent.$translate.instant('GREETING', { name: 'Alice' });
   // => "Olá, Alice!"
   ```

---

## Melhores Práticas  
- **Pré-carregue as Traduções**: Chame `.use()` (ou `.loadTranslations()`) durante o bootstrap do app e espere sua promise ser resolvida antes de usar `.instant()`.  
- **Fallbacks**: Configure `setDefaultLang()` para cobrir chaves faltantes de forma elegante.  
- **Quando Estiver em Dúvida, Use `.get()`**: Se não tiver certeza sobre o tempo de carregamento, `.get(key)` retorna um Observable que resolve assim que a tradução estiver pronta.
