import React from 'react';

export class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  submitForm(event) {
    var postData = $('#contact-form').serialize();
    event.preventDefault();
    $.post('/contact-submit/', postData)
        .done(function (data) {
            if (data.result == 'success') {
                $('.success-message').show();
                $('.error-message').hide();
          } else if (data.result == 'error') {
                $('.error-message').show();
            }
        })
        .fail(function () {

        })
  }

  render() {
    let csrft = document.getElementById('csrftoken').value;
    return (
        <div className="form-container">
          <form id="contact-form" onSubmit={this.submitForm.bind(this)}>
              <input type="hidden" value={csrft} name="csrfmiddlewaretoken" />
            <p>Contact Me</p>
            <div className="form-group">
                <input type="email" name="from_email" className="form-control" id="input-email" placeholder="Email" />
            </div>
            <textarea className="form-control" name="message" rows="5" placeholder="Leave a message" id="contact-text" value={this.state.value} onChange={this.handleChange} />
            <div className="error-message">Please fill out both fields</div>
            <div className="success-message">Thanks for the message!</div>
            <div className="submit-button-container">
                <input className="submit-button button" type="submit" value="SEND"/>
            </div>
          </form>
        </div>
    );
  }
}