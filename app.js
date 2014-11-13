Posts = new Mongo.Collection('posts');
Comments = new Mongo.Collection('comments');

if(Meteor.isServer) {
  Meteor.publish('getSinglePost', function(id) {
    
  });
}

if(Meteor.isClient) {
  Meteor.subscribe('getSinglePost', 'one');
  
  Template.posts.helpers({
    getPosts: function() {
      return Posts.find();
    }
  });

  Template.singlePost.helpers({
    getComments: function() {
      return Comments.find({postId: this._id});
    }
  });
}