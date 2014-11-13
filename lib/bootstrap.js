if(Meteor.isServer) {
  Meteor.methods({
    addComment: function(postId, text) {
      Posts.update(postId, {$push: {
        comments: {text: text}
      }});
      Comments.insert({postId: postId, text: text});
    }
  });

  Meteor.startup(function() {

    if(!Posts.findOne()) {
      Posts.insert({
        _id: "one",
        title: "BulletProof Meteor is Here!"
      });

      Meteor.call('addComment', 'one', "Wow! It seems good");
      Meteor.call('addComment', 'one', "These contents are amazing");
      Meteor.call('addComment', 'one', "I learnt a lot of new things");

      Posts.insert({
        _id: "two",
        title: "Another Blog Post"
      });
    }

  });
}

if(Meteor.isClient) {
  AddComment = function(text) {
    Meteor.call('addComment', 'one', text, function() {
      console.log("comment added!");
    });
  };
}