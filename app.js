Posts = new Mongo.Collection('posts');
Comments = new Mongo.Collection('comments');

if(Meteor.isServer) {
  Meteor.publish('getPosts', function() {
    return Posts.find();
  });
}


if(Meteor.isClient) {
  Meteor.subscribe('getPosts');
  
  Template.posts.helpers({
    getPosts: function() {
      return Posts.find();
    }
  });

  Template.singlePost.helpers({
    getComments: function() {
      return this.comments || [];
    }
  });
}