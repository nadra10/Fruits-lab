const React = require("react")
const DefaultLayout = require('../Layouts/Default');
class Show extends React.Component {
  render() {
    const vegetable = this.props.vegetable
    console.log(vegetable)
    return (
      <DefaultLayout title={"vegetables Show Page"}>
        The {vegetable.name} is {vegetable.color}.{" "}
        {vegetable.readyToEat
          ? "It is ready to eat"
          : "It is not ready to eat... Cant touch this"}
      <br/>
      <a href='/vegetables'>Home</a>
      </DefaultLayout>
    )
  }
}
module.exports = Show