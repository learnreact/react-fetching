# react-fetching
A `fetch` component for designers.

## Why
Sometimes I just want the get the data and jump into a design.

This component is a quick and dirty way to fetch API data and focus immediately on designing the various states.

It's a great fit for anyone with a JSON API and works swimmingly on the web or in native apps.

## Why not
Well, you might need a more coordinated data-fetching effort.
You might not, but you might.

This is great for deferring questions about component design and
getting right into what it will look and feel like.

## Examples

### Defaults
With only the `url` prop, a successful request will render
the formatted JSON response:

```js
<ReactFetching url="http://pokeapi.co/api/v2/pokemon/1" />
```

In the event of a failed request, the component will render the
`status` code and `statusText`:

```js
<ReactFetching url="http://pokeapi.co/api/v2/pokemon/oops" />
```

These are obviously customizable.
Provide `error`, `ok`, and `loading` props to handle all cases.

```js
<ReactFetching
  url="http://pokeapi.co/api/v2/pokemon/1"
  ok={pokemon => <h1>{pokemon.name}</h1>}
  error={error => <strong>{error.status}</strong>}
  loading={<FidgetSpinner />}
/>
```

Go wild!

### Fake status
As a designer, it's hard (and dangerous) to simulate a `500`
response.

Use the `__status` prop to render with any response type you want. This feature
uses [httpstat.us](http://httpstat.us/) under the hood.

```js
<ReactFetching
  __status={500}
  error={error =>
    <strong>
      Well snot! Something went wrong.
    </strong>
  }
/>
```

### Error handling
Different Errors warrant different responses.
I use a switch for this.
You could is `if`s and `else`s, if you prefer.

```js
<ReactFetching
  __status={500}
  error={({ status }) => {
    switch (status) {
      case 404:
        return <div>Nope, can{"'"}t find that.</div>
      case 500:
        return <div>Something is a little screwy on our end.</div>
      default:
        return <div>Yeah, we have no idea what happened.</div>
    }
  }}
/>
```

## Installation
### Node
```bash
npm i --save-dev react-fetching
```

```js
import Fetch from "react-fetching"

const MyComponent = () =>
  <Fetch url="http://pokeapi.co/api/v2/pokemon/1" />
```

### Browser
```html
<script
  src="https://unpkg.com/react-fetching@0.0.7/dist/react-fetching.umd.js"
></script>

<script type="text/babel">
// exposed on window as ReactFetching

var MyComponent = function() {
  return <ReactFetching url="http://pokeapi.co/api/v2/pokemon/1" />;
}
</script>
```

## Related
This project uses a low-level component wrapper around `fetch`:

[react-json-fetch](https://github.com/learnreact/react-json-fetch)

## License
MIT
Copyright &copy; Michael Chan, 2017
