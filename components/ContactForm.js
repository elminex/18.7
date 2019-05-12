let ContactForm = React.createClass({
    propTypes: {
        contact: React.PropTypes.object.isRequired
    },
    render: function () {
        return (
            <form className="contactForm">
                <input type="text" name="firstName" placeholder="Imię" value={this.props.contact.firstName}/>
                <input type="text" name="lastName" placeholder="Nazwisko" value={this.props.contact.lastName} />
                <input type="text" name="email" placeholder="Email" value={this.props.contact.email} />
                <button type="submit">Dodaj kontakt</button>
            </form>
        )
    },
});