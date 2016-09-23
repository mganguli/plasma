import React from "react";
import ResourceList from "./ResourceList";

var config = require('../../config.js');
var util = require('../../util.js');

const SystemList = React.createClass({

  getInitialState() {
    return {systems: []};
  },

  componentWillMount() {
    this.getSystems();
    setInterval(this.getSystems, 2000);
  },

  getSystems() {
    var systems;
    var url = config.url + '/redfish/v1/Systems';
    $.ajax({
      url: url,
      type: 'GET',
      dataType: 'json',
      cache: false,
      success: function(resp) {
        systems = util.listMembers(resp);
        this.setData(systems);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(url, status, err.toString());
      }.bind(this)
    });
  },

  setData(systems) {
    this.setState({systems: systems});
  },

  render() {
    return (
      <ResourceList onShowDetail={this.props.onShowDetail} items={this.state.systems} header="SYSTEMS" />
    );
  }
});

export default SystemList