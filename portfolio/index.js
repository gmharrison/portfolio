import './static/css/portfolio.css'

var React = require('react')
var ReactDOM = require('react-dom')

var tabList = [
    { 'id': 1, 'name': 'About', 'url': '/about' },
    { 'id': 2, 'name': 'Work', 'url': '/work' }
];

var Tab = React.createClass({
    handleClick: function(e){
        e.preventDefault();
        this.props.handleClick();
    },

    render: function(){
        return (
            <li className={this.props.isCurrent ? 'current' : null}>
                <a onClick={this.handleClick} href={this.props.url}>
                    {this.props.name}
                </a>
            </li>
        );
    }
});

var Tabs = React.createClass({
    handleClick: function(tab){
        this.props.changeTab(tab);
    },

    render: function(){
        return (
            <div className="col-md-12">
                <nav>
                    <ul>
                    {this.props.tabList.map(function(tab) {
                        return (
                            <Tab
                                handleClick={this.handleClick.bind(this, tab)}
                                key={tab.id}
                                url={tab.url}
                                name={tab.name}
                                isCurrent={(this.props.currentTab === tab.id)}
                             />
                        );
                    }.bind(this))}
                    </ul>
                </nav>
            </div>
        );
    }
});

var Content = React.createClass({
    render: function(){
        return(
            <div className="content col-md-10">
                {this.props.currentTab === 1 ?
                <div className="about">
                    <p>hello this is dog</p>
                </div>
                :null}

                {this.props.currentTab === 2 ?
                <div className="work">
                    <p>hello this is cat</p>
                </div>
                :null}
            </div>
        );
    }
});

var App = React.createClass({
    getInitialState: function () {
        return {
            tabList: tabList,
            currentTab: 1
        };
    },

    changeTab: function(tab) {
        this.setState({ currentTab: tab.id });
    },

    render: function(){
        return(
            <div className="background-gradient">
                <div className="container">
                    <div className="row">
                        <Tabs
                            currentTab={this.state.currentTab}
                            tabList={this.state.tabList}
                            changeTab={this.changeTab}
                        />
                        <Content currentTab={this.state.currentTab} />
                    </div>
                </div>
            </div>
        );
    }
});

ReactDOM.render(<App />, document.getElementById('container'))


// import './portfolio.css'
// var Tab = require('react-bootstrap').Tab;
// var Tabs = require('react-bootstrap').Tabs;
//
// var React = require('react')
// var ReactDOM = require('react-dom')
//
// const tabsInstance = (
//   <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
//     <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>
//     <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
//   </Tabs>
// );
//
// ReactDOM.render(tabsInstance, document.getElementById('container'))