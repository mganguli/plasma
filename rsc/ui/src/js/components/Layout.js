import React from "react";
import DetailDisplay from "./home/DetailDisplay";
import Home from "./home/Home";

const Layout = React.createClass({

  getInitialState: function() {
    return {
      homeDisplay: "inline-block",
      detailDisplay: "none",
      detailData: ""
    };
  },

  displayHome: function() {
    this.setState({
      homeDisplay: "inline-block",
      detailDisplay: "none",
      detailData: ""
    });
  },

  displayDetail: function(item) {
    this.setState({
      homeDisplay: "none",
      detailDisplay: "inline-block",
      detailData: JSON.stringify(item)
    });
  },

  render: function() {
    return (
      <div class="container">
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="#">Rack Scale Design</a>
            </div>
            <div id="navbar" class="navbar-collapse collapse">
              <ul class="nav navbar-nav">
                <li class="active"><a href="#">Home</a></li>
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Configure <span class="caret"></span></a>
                  <ul class="dropdown-menu">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" class="divider"></li>
                    <li class="dropdown-header">Nav header</li>
                    <li><a href="#">Separated link</a></li>
                    <li><a href="#">One more separated link</a></li>
                  </ul>
                </li>
                <li><a href="#">Support</a></li>
                <li><a href="#">About</a></li>
              </ul>
              <ul class="nav navbar-nav navbar-right">
                <li class="active"><a href="./">Login<span class="sr-only">(current)</span></a></li>
              </ul>
            </div>
          </div>
        </nav>

        <Home display={this.state.homeDisplay} onShowDetail={this.displayDetail} />
        <DetailDisplay display={this.state.detailDisplay} data={this.state.detailData} onHideDetail={this.displayHome} />

        <footer class="footer navbar-fixed-bottom">
          <div class="container">
            <p class="text-muted">Version: 0.1</p>
          </div>
        </footer>
      </div>
    );
  }
});

export default Layout;