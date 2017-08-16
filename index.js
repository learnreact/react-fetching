import React from "react"
import ReactJSONFetch from "react-json-fetch"

class ReactFetching extends React.Component {
  constructor(props) {
    super(props)
    this.shouldComponentUpdate = props.shouldComponentUpdate
  }

  render() {
    const { formatter, url, __status, ...props } = this.props

    return (
      <ReactJSONFetch
        {...props}
        url={
          this.props.__status
            ? `http://httpstat.us/${this.props.__status}`
            : Object.entries(props.query).length
              ? url +
                "?" +
                Object.entries(props.query).map(el => el.join("=")).join("&")
              : url
        }
      >
        {({ status, json }) => {
          if (status && status.ok) {
            return typeof this.props.ok === "function"
              ? React.Children.only(this.props.ok(formatter(json)))
              : React.Children.only(this.props.ok)
          }

          if (status && !status.ok) {
            return typeof this.props.error === "function"
              ? React.Children.only(this.props.error(status))
              : React.Children.only(this.props.error)
          }

          return React.Children.only(this.props.loading)
        }}
      </ReactJSONFetch>
    )
  }
}
ReactFetching.defaultProps = {
  error: error =>
    <div>
      {error.status}: {error.statusText}
    </div>,
  formatter: json => json,
  loading: <div>loading...</div>,
  ok: json =>
    <pre>
      <code>
        {JSON.stringify(json, null, 2)}
      </code>
    </pre>,
  query: {},
}

export default ReactFetching
