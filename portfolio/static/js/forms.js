var React = require('react');
var ReactDOM = require('react-dom');
import {DjangoCSRFToken, csrftoken} from '../js/token.js'

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
      function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
        return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
    }
    $.ajaxSetup({
        beforeSend: function(xhr, settings) {
            if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
                xhr.setRequestHeader("X-CSRFToken", { csrftoken });
            }
        }
    });
    var postData = $('#contact-form').serialize();
    event.preventDefault();
    $.post('/contact-submit/', postData)
        .done(function (data) {
          if (data.result == 'error') {
            $('error-message').show();
          } else if (data.result == 'success') {
            $('success-message').show();
          }
        })
        .fail(function () {

        })
  }

  render() {
    return (
        <div className="form-container">
          <form id="contact-form" onSubmit={this.submitForm.bind(this)}>
              <DjangoCSRFToken />
            <p>Contact Me</p>
            <div className="form-group">
                <input type="email" name="from_email" className="form-control" id="input-email" placeholder="Email" />
            </div>
            <textarea className="form-control" name="message" rows="5" placeholder="Leave a message" id="contact-text" value={this.state.value} onChange={this.handleChange} />
            <input className="submit-button" type="submit" value="SEND"/>
              <div className="success-message">yay</div>
          </form>
        </div>
    );
  }
}