var React = require('react');
var ReactDOM = require('react-dom');
import $ from 'jquery';
window.jQuery = $;

var cookieValue;
function getCookie(name) {

    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(
                  cookie.substring(name.length + 1)
                  );
                break;
            }
        }
    }
    return cookieValue;
}
const csrftoken = cookieValue;

export class DjangoCSRFToken extends React.Component {
    render() {
        return (
            <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken} />
        )
    }
}
