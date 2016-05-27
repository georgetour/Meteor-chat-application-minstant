
Meteor.methods({
    beginChat: function(otherUserId) {
        chatId = Chats.insert({
            user1Id: Meteor.userId(),
            user2Id: otherUserId
        });
        return chatId;
    },
    updateChat: function(chat) {
        Chats.update(chat._id, chat);
        return;
    }
});
