Projects = new Mongo.Collection('projects');

Projects.allow({
  insert: function(){
    return true;
  },
  update: function(){
    return true;
  },
  remove: function(){
    return true;
  }
})

Projects.helpers({

});

Projects.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});
