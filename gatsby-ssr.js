const React = require("react")
exports.onRenderBody = ({
  setHeadComponents,
  setPreBodyComponents,
  setPostBodyComponents,
}) => {
  setHeadComponents([
    <script
      key="1"
      type="text/javascript"
      src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"
    />,
  ])
  setPreBodyComponents([
    <script
      key="2"
      type="text/javascript"
      src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/core.js"
    />,
  ])
  setPostBodyComponents([
    <script
      key="3"
      src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.slim.js"
    />,
  ])
}