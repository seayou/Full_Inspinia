(function(){
Template.__checkName("tabsPanels");
Template["tabsPanels"] = new Template("Template.tabsPanels", (function() {
  var view = this;
  return [ HTML.Raw("<!-- Page heading -->\n    "), Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Panels"),
      category: Spacebars.call("UI Elements")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeading"));
  }), "\n\n    ", HTML.DIV({
    "class": "wrapper wrapper-content animated fadeIn"
  }, "\n        ", HTML.DIV({
    "class": "row"
  }, "\n            ", HTML.DIV({
    "class": "col-lg-12"
  }, "\n                ", HTML.DIV({
    "class": "ibox float-e-margins"
  }, "\n                    ", HTML.DIV({
    "class": "ibox-title"
  }, "\n                        ", HTML.Raw('<h5>Basic IN+ Panel <small class="m-l-sm">This is custom panel</small></h5>'), "\n                        ", Spacebars.include(view.lookupTemplate("iboxTools")), "\n                    "), "\n                    ", HTML.Raw('<div class="ibox-content">\n                        <h2>\n                            This is standard IN+ Panel<br>\n                        </h2>\n                        <p>\n                            <strong>Lorem ipsum dolor</strong>\n                            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. </p>\n                        <p>\n                            <small>\n                                Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.\n                            </small>\n                        </p>\n                    </div>'), "\n                    ", HTML.Raw('<div class="ibox-footer">\n                        <span class="pull-right">\n                          The righ side of the footer\n                    </span>\n                        This is simple footer example\n                    </div>'), "\n                "), "\n            "), "\n            ", HTML.DIV({
    "class": "col-lg-12"
  }, "\n                ", HTML.DIV({
    "class": "ibox collapsed"
  }, "\n                    ", HTML.DIV({
    "class": "ibox-title"
  }, "\n                        ", HTML.Raw("<h5>Example of <small>initial</small> collapsed panel</h5>"), "\n                        ", Spacebars.include(view.lookupTemplate("iboxTools")), "\n                    "), "\n                    ", HTML.Raw('<div class="ibox-content">\n\n                        <p>\n                            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. </p>\n                        <p>\n                            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.\n                        </p>\n                    </div>'), "\n                "), "\n            "), "\n            ", HTML.DIV({
    "class": "col-lg-12"
  }, "\n                ", HTML.DIV({
    "class": "ibox"
  }, "\n                    ", HTML.DIV({
    "class": "ibox-title"
  }, "\n                        ", HTML.Raw("<h5>Example with fullscreen option</h5>"), "\n                        ", Blaze._TemplateWith(function() {
    return {
      fullScreen: Spacebars.call(true)
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("iboxTools"));
  }), "\n                    "), "\n                    ", HTML.Raw('<div class="ibox-content">\n\n                        <p>\n                            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. </p>\n                        <p>\n                            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.\n                        </p>\n                    </div>'), "\n                "), "\n            "), "\n            ", HTML.DIV({
    "class": "col-lg-12"
  }, "\n                ", HTML.DIV({
    "class": "ibox"
  }, "\n                    ", HTML.DIV({
    "class": "ibox-title"
  }, "\n                        ", HTML.Raw("<h5>Example of constant height with scroll</h5>"), "\n                        ", Spacebars.include(view.lookupTemplate("iboxTools")), "\n                    "), "\n                    ", HTML.Raw('<div class="ibox-content">\n                        <div class="scroll_content">\n                            <p>\n                                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis\n                                dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,\n                                pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.\n                                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis\n                                dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,\n                                pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.\n                                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis\n                                dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,\n                                pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.\n                            </p>\n\n                            <p>\n                                Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,\n                                rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis\n                                pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.\n                                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis\n                                dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,\n                                pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.\n                                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis\n                                dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,\n                                pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.\n                                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis\n                                dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,\n                                pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.\n                            </p>\n                            <p>\n                                Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,\n                                rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis\n                                pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.\n                            </p>\n                            <p>\n                                Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,\n                                rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis\n                                pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.\n                            </p>\n                        </div>\n                    </div>'), "\n                "), "\n            "), "\n        "), "\n\n\n        ", HTML.Raw('<div class="row">\n            <div class="col-lg-12">\n                <div class="ibox">\n                    <div class="ibox-title">\n                        <h5>Bootstrap Panels <small>Custom background colors.</small></h5>\n                    </div>\n                    <div class="ibox-content">\n\n                        <div class="row">\n                            <div class="col-lg-4">\n                                <div class="panel panel-default">\n                                    <div class="panel-heading">\n                                        Default Panel\n                                    </div>\n                                    <div class="panel-body">\n                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>\n                                    </div>\n\n                                </div>\n                            </div>\n                            <div class="col-lg-4">\n                                <div class="panel panel-primary">\n                                    <div class="panel-heading">\n                                        Primary Panel\n                                    </div>\n                                    <div class="panel-body">\n                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="col-lg-4">\n                                <div class="panel panel-success">\n                                    <div class="panel-heading">\n                                        Success Panel\n                                    </div>\n                                    <div class="panel-body">\n                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="row">\n                            <div class="col-lg-4">\n                                <div class="panel panel-info">\n                                    <div class="panel-heading">\n                                        <i class="fa fa-info-circle"></i> Info Panel\n                                    </div>\n                                    <div class="panel-body">\n                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>\n                                    </div>\n\n                                </div>\n                            </div>\n                            <div class="col-lg-4">\n                                <div class="panel panel-warning">\n                                    <div class="panel-heading">\n                                        <i class="fa fa-warning"></i> Warning Panel\n                                    </div>\n                                    <div class="panel-body">\n                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="col-lg-4">\n                                <div class="panel panel-danger">\n                                    <div class="panel-heading">\n                                        Danger Panel with Footer\n                                    </div>\n                                    <div class="panel-body">\n                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>\n                                    </div>\n                                    <div class="panel-footer">\n                                        Panel Footer\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n        </div>'), "\n\n        ", HTML.DIV({
    "class": "row"
  }, "\n            ", HTML.DIV({
    "class": "col-lg-6"
  }, "\n                ", HTML.DIV({
    "class": "ibox float-e-margins"
  }, "\n                    ", HTML.DIV({
    "class": "ibox-title"
  }, "\n                        ", HTML.Raw("<h5>Collaps panels</h5>"), "\n                        ", Spacebars.include(view.lookupTemplate("iboxTools")), "\n                    "), "\n                    ", HTML.Raw('<div class="ibox-content">\n                        <div class="panel-body">\n                            <div class="panel-group" id="accordion">\n                                <div class="panel panel-default">\n                                    <div class="panel-heading">\n                                        <h5 class="panel-title">\n                                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">Collapsible Group Item #1</a>\n                                        </h5>\n                                    </div>\n                                    <div id="collapseOne" class="panel-collapse collapse in">\n                                        <div class="panel-body">\n                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class="panel panel-default">\n                                    <div class="panel-heading">\n                                        <h4 class="panel-title">\n                                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">Collapsible Group Item #2</a>\n                                        </h4>\n                                    </div>\n                                    <div id="collapseTwo" class="panel-collapse collapse">\n                                        <div class="panel-body">\n                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class="panel panel-default">\n                                    <div class="panel-heading">\n                                        <h4 class="panel-title">\n                                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree">Collapsible Group Item #3</a>\n                                        </h4>\n                                    </div>\n                                    <div id="collapseThree" class="panel-collapse collapse">\n                                        <div class="panel-body">\n                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>'), "\n                "), "\n            "), "\n            ", HTML.Raw('<div class="col-lg-6">\n                <div class="jumbotron">\n                    <h1>Jumbotron</h1>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n                    <p><a role="button" class="btn btn-primary btn-lg">Learn more</a>\n                    </p>\n                </div>\n            </div>'), "\n        "), "\n    ") ];
}));

}).call(this);
