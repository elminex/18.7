let Contact = React.createClass({
  displayName: "Contact",
  propTypes: {
    item: React.PropTypes.object.isRequired
  },
  render: function () {
    return React.createElement("div", {
      className: 'contactItem'
    }, React.createElement("img", {
      className: 'contactImage',
      src: 'http://icons.veryicon.com/png/Application/iOS8%20Cirtangle%20Concept/Contacts.png'
    }), React.createElement("p", {
      className: 'contactLabel'
    }, "Imi\u0119: ", this.props.item.firstName), React.createElement("p", {
      className: 'contactLabel'
    }, "Nazwisko: ", this.props.item.lastName), React.createElement("a", {
      className: 'contactEmail',
      href: 'mailto:' + this.props.item.email
    }, this.props.item.email));
  }
});