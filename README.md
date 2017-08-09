# react-fetching
A `fetch` component for designers.

## Example
```js
<ReactFetching
  url="https://some-url.com"
  ok={json =>
    <div>
      {json.someProperty}
    </div>}
  error={status =>
    <div>
      {status.statusText}
    </div>}
/>
```
