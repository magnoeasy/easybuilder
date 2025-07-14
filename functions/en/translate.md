# Documentation: `this.parent.$translate.instant()`

---

## Method  
```js
this.parent.$translate.instant(key, [interpolateParams])
```

---

## Overview  
Synchronously retrieves the translated value(s) for the given translation key(s). Returns immediately (no Observable), so you must ensure your translation files are already loaded before calling it.

---

## Syntax  
```ts
instant(
  key: string | string[], 
  interpolateParams?: { [param: string]: any }
): string | { [key: string]: string }
```

---

## Parameters  
- **`key`**  
  - *Type*: `string` | `string[]`  
  - The translation key (or array of keys) you wish to look up.  
- **`interpolateParams`** *(optional)*  
  - *Type*: `object`  
  - A map of placeholder names to values, for tokens like `{{username}}` inside your translation strings.

---

## Return Value  
- If `key` is a single string, returns the translated text (`string`).  
- If `key` is an array, returns an object mapping each key to its translated text (`{ [key: string]: string }`).  
- If a translation isn’t found (or not yet loaded), returns the key itself (unless you’ve configured a fallback).

---

## Behavior & Caution  
- **Synchronous**: Unlike `.get()` or `.stream()`, `.instant()` does **not** wait for translation files to load.  
- **Loader Considerations**: The default translation loader is asynchronous. You’re responsible for calling `.instant()` only after your translations have been fetched (e.g., in a callback after `.use()` or by preloading). If you call it too early, it will simply return the key rather than the localized string.

---

## Examples  

1. **Single-key lookup**  
   ```js
   const title = this.parent.$translate.instant('HOME.TITLE');
   // => "Welcome to Our Site"
   ```

2. **Multiple-key lookup**  
   ```js
   const labels = this.parent.$translate.instant(['BTN.OK', 'BTN.CANCEL']);
   // => { BTN.OK: "OK", BTN.CANCEL: "Cancel" }
   ```

3. **With interpolation parameters**  
   ```js
   // translation string: "Hello, {{name}}!"
   const greeting = this.parent.$translate.instant('GREETING', { name: 'Alice' });
   // => "Hello, Alice!"
   ```

---

## Best Practices  
- **Preload Translations**: Call `.use()` (or `.loadTranslations()`) during app bootstrap and wait for its promise to resolve before relying on `.instant()`.  
- **Fallbacks**: Configure `setDefaultLang()` to cover missing keys gracefully.  
- **When in Doubt, Use `.get()`**: If you’re unsure about load timing, `.get(key)` returns an Observable that resolves once the translation is ready.

---
