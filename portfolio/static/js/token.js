var React = require('react');
var ReactDOM = require('react-dom');
import $ from 'jquery';
window.jQuery = $;

function getCookie(name) {
    var cookieValue;
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

export const csrftoken = getCookie('csrftoken');

export class DjangoCSRFToken extends React.Component {
    render(){
        var csrftoken = getCookie('csrftoken');
        return (<input type="hidden" name="csrfmiddlewaretoken" value={ csrftoken }/>);
    }
}

