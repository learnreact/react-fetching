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

## Fake status
This tool is intended for designers.
So it needs a way of faking all request statuses.

`__status` takes a request code and will override the requested
`url` when used.

It uses [httpstat.us](http://httpstat.us/) to get the proper
response.

```js
<ReactJSONFetch
  url="https://some-url.com"
  __status={500}
>
  {/* ... */}
</ReactJSONFetch>

// => fetch("http://httstat.us/500", {})
```

This gives you a nice way to design for status codes that are
hard to simulate.
