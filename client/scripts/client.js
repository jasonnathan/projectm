Meteor.startup(function() {

});

Template.page.events({
    'click #showLeft' : function(){
        $('.cbp-spmenu').toggleClass('cbp-spmenu-open');
    }
});

