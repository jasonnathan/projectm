Meteor.startup(function() {

});

Template.page.events({
    'click #showRight' : function(){
        $('.cbp-spmenu').toggleClass('cbp-spmenu-open');
    }
});

