Meteor.publishComposite("projects", function() {
  return {
    find: function() {
      return Projects.find({});
    }
    // ,
    // children: [
    //   {
    //     find: function(item) {
    //       return [];
    //     }
    //   }
    // ]
  }
});
