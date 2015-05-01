Router.route('/', {
  name: 'home'
});

Router.route('/dashboard', {
  name: 'dashboard'
});

Router.route('/customers', {
  name: 'customers',
  layoutTemplate:'appLayout'
});

Router.route('/archives', {
  name: 'archives',
  layoutTemplate:'appLayout'
});

Router.route('/roles', {
  name: 'roles',
  layoutTemplate:'appLayout'
});

Router.plugin('ensureSignedIn', {
  only: ['dashboard']
});
