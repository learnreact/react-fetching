import React from "react"
import ReactJSONFetch from "react-json-fetch"

class ReactFetching extends React.Component {
  constructor(props) {
    super(props)
    this.shouldComponentUpdate = props.shouldComponentUpdate
  }

  render() {
    const { url, ...props } = this.props

    return (
      <ReactJSONFetch
        {...props}
        url={
          Object.entries(props.query).length
            ? url +
              "?" +
              Object.entries(props.query).map(el => el.join("=")).join("&")
            : url
        }
      >
        {({ status, json }) => {
          if (status && status.ok) {
            return typeof this.props.ok === "function"
              ? React.Children.only(this.props.ok(json))
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
  error: <div>error</div>,
  loading: <div>loading...</div>,
  ok: <div>ok</div>,
  query: {},
}

export default ReactFetching
