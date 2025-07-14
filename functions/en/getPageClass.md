# getPageClass API Documentation

## Overview

The `getPageClass` function provides an interface for performing CRUD operations (such as `save` and `delete`) on a backend resource ("Page Class") from within your form or page script. Use this to create, update, or delete records (e.g., leads, filters, shopping cart items) in your platform.

---

## Signature

```typescript
getPageClass(alias: string): PageClassAPI | undefined
```

- **alias**: `string` — Name/alias of the resource (e.g., `"Lead"`, `"ShoppingCartItems"`, case-insensitive).
- **Returns**: `PageClassAPI` object with CRUD methods if found, otherwise `undefined`.

---

## Returned API Methods

### save

```typescript
async save(
  values: EditValuesType | EditValuesType[],
  options: { showNotification: boolean, showLoading: boolean, isNew: boolean }
): Promise<GetPageClassResponse | GetPageClassResponse[]>
```

- **Description**: Saves (creates or updates) one or more records to the Page Class.
- **Parameters**:
  - `values`: Object or array of objects with the fields and values to save.
  - `options`:
    - `showNotification`: Show a notification on completion.
    - `showLoading`: Show a loading spinner while saving.
    - `isNew`: `true` to create new records.
- **Returns**: Promise resolving to a response or array of responses with `id`, `status`, and `values`.

---

### delete

```typescript
async delete(
  pk: string | string[],
  options: { showLoading?: boolean, showNotification?: boolean, showConfirmation?: boolean }
): Promise<GetPageClassResponse | GetPageClassResponse[]>
```

- **Description**: Deletes one or more records by primary key.
- **Parameters**:
  - `pk`: Primary key or array of primary keys to delete.
  - `options`:
    - `showLoading`: Show a loading spinner.
    - `showNotification`: Show a notification after deletion.
    - `showConfirmation`: Ask user for confirmation before deleting.
- **Returns**: Promise resolving to a response or array of responses with `id` and `status`.

---

## Usage Examples

### Save a single record

```javascript
await this.getPageClass('Lead').save(
  { LeadId: "123", FirstName: "John" },
  { showNotification: true, showLoading: true, isNew: true }
);
```

### Delete multiple records

```javascript
await this.getPageClass('Lead').delete(
  ["123", "456"],
  { showLoading: true, showNotification: true, showConfirmation: true }
);
```

---

## Error Handling

- If `alias` does not match any resource, an error is logged and `undefined` is returned.
- Always check for `undefined` before using the result.

---

## Best Practices

- Always check if `getPageClass` returns an object before calling its methods.
- Use `showLoading` and `showNotification` options for better user feedback.
- Use `showConfirmation` for destructive actions (like bulk delete).

---

## Full Example

```javascript
const leadApi = this.getPageClass('Lead');
if (leadApi) {
  // Save a new lead
  await leadApi.save(
    { FirstName: "Jane", LastName: "Doe" },
    { showNotification: true, showLoading: true, isNew: true }
  );
  // Delete an existing lead
  await leadApi.delete(
    "some-lead-id",
    { showLoading: true, showNotification: true, showConfirmation: true }
  );
}
```

---

## Response Types

**GetPageClassResponse**  
```typescript
{
  id: string;       // Primary key value of the record
  status: boolean;  // Success status
  values?: any;     // Saved values (on save)
}
```

---

## Notes

- This function is specific to your platform or low-code framework and not a native JavaScript API.
- Useful for performing dynamic data operations directly from your page or form scripts.
