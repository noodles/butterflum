Meteor.methods({
  'Projects.insert': function (params) {
    Projects.insert(params);
  },
  saveProject : function (projectName) {

    check(projectName,String);

    var params = {
      name: projectName,
      userId: Meteor.userId(),
      dateEntered: new Date(),
      lastUpdate: new Date(),
      dateDue: new Date(),
      invited: {}

    }

    Projects.insert(params);

  }
});
