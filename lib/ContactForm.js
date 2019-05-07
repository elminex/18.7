let ContactForm = React.createClass({
  displayName: "ContactForm",
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },
  render: function () {
    return React.createElement("form", {
      className: 'contactForm',
      onSubmit: this.handleSubmit
    }, React.createElement("input", {
      type: 'text',
      name: "firstName",
      placeholder: 'Imię',
      value: this.props.contact.firstName
    }), React.createElement("input", {
      type: 'text',
      name: "lastName",
      placeholder: 'Nazwisko',
      value: this.props.contact.lastName
    }), React.createElement("input", {
      type: 'text',
      name: "email",
      placeholder: 'Email',
      value: this.props.contact.email
    }), React.createElement("button", {
      type: 'submit'
    }, "Dodaj kontakt"));
  }
});