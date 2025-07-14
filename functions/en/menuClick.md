# Usage Summary: `this.parent.menuClick`

### 1. Navigate by Container and Resource with Query Parameters
```js
this.parent.menuClick({ 
  Container: 'OrdersContainerField',  // Field name of type "Container"
  Resource: 'OrderListForm',           // The form to open inside the container
  QueryParameters: { status: 'pending', page: 2 } 
});
```
- `Container` is the field name of type "Container" where the form will be rendered.
- `Resource` represents the form to open.
- Uses `QueryParameters` to filter or customize the container view (e.g., filter orders by status and paginate).

---

### 2. Load or Reload Form by FormId with Query Parameters
```js
this.parent.menuClick({ 
  FormId: 123, 
  SideForm: false, 
  QueryParameters: { userId: 456, mode: 'edit' } 
});
```
- Loads the form with ID 123.
- Passes `QueryParameters` to influence form behavior or prefill data (e.g., edit mode for a specific user).
- Supports loading as a side form if `SideForm` is true.

---

### Notes:
- `QueryParameters` is an object that your routing system will append as URL query strings or use internally.
- Additional flags (`Home`, `Workflow`, `ReportId`, `Logoff`, etc.) control other navigation cases.
- `builderWindowParameterMappings` can be passed as a second argument for advanced parameter handling.
