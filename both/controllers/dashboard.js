DashboardController = AppController.extend({
  waitOn: function() {
    return this.subscribe('projects');
  },
  data: {
    projects: Projects.find({})
  },
  onAfterAction: function () {
    Meta.setTitle('Dashboard');
  }
});

DashboardController.events({
  'click [data-action=doSomething]': function (event, template) {
    event.preventDefault();
  },
  'keyup input[type=text]':function(event, template){
    if(event.which === 27 || event.which === 13){

      var projectName = template.find('#projectNameEnter').value;

      //Meteor.call('saveProject',project);
      Meteor.call('saveProject',projectName);

    }
  }
});
