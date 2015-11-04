/**
 * Created by Reo on 2015-10-30.
 */
Sugang = new Mongo.Collection('Sugang');

if (Meteor.isServer) {
    Meteor.publish('Sugang', function() {
        return Users.find(this.userId);
    })
}

if (Meteor.isClient) {

    Template.btn1.events({
        'click button': function () {
            // increment the counter when button is clicked
            console.log(Meteor.userId());
            Sugang.insert({name: "English", usr: Meteor.userId() });
        }
    });

    Template.btn2.events({
        'click button': function () {
            // increment the counter when button is clicked
            console.log(Meteor.userId());
            Sugang.insert({name: "IT", usr: Meteor.userId() });

        }
    });

}