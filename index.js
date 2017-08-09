import React from "react"
import ReactJSONFetch from "react-json-fetch"

class Fetcher extends React.Component {
  constructor(props) {
    super(props)
    this.shouldComponentUpdate = props.shouldComponentUpdate
  }

  render() {
    const { _url, ...props } = this.props

    const url = Object.entries(props.query).length
      ? _url +
        "?" +
        Object.entries(props.query).map(el => el.join("=")).join("&")
      : _url

    return (
      <ReactJSONFetch {...props} url={url}>
        {({ status, json }) => {
          if (status && status.ok) {
            return typeof this.props.ok === "function"
              ? React.Chidren.only(this.props.ok(json))
              : React.Chidren.only(this.props.ok)
          }

          if (status && !status.ok) {
            return typeof this.props.error === "function"
              ? React.Chidren.only(this.props.error(status))
              : React.Chidren.only(this.props.error)
          }

          return React.Chidren.only(this.props.loading)
        }}
      </ReactJSONFetch>
    )
  }
}
Fetcher.defaultProps = {
  error: <div>error</div>,
  loading: <div>loading...</div>,
  ok: <div>ok</div>,
  query: {},
}

export default Fetcher
