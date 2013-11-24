/**
 * Callback when layout template is rendered
 *
 * @returns {void}
 */
Template.layout.rendered = function() {

    // click handler attached to whole document to close all open menus
    $(document).on('click', function(e) {
        // stop the event from bubbling up the DOM tree
        e.stopPropagation();
        var t = $(this);
        // make sure we didn't click on elements that actually open the menu
        if (!t.hasClass('fixed-right') || t.attr('id') !== 'showLeft') {
            // close right menu
            $('.fixed-right .dropdown').removeClass('cbp-spmenu-open');
            // close left menu
            $('.cbp-spmenu').removeClass('cbp-spmenu-open');
        }
    });
};

// Topbar events
Template.topbar.events({
    // when account div is click, show the right menu
    'click .fixed-right': function(e) {
        // prevent default link action
        e.preventDefault();
        // make sure it doesn't bubble or the document click handler above will
        // fire
        e.stopPropagation();
        $(e.currentTarget).find('.dropdown').toggleClass('cbp-spmenu-open');
    },
    // Just in case, close the menu when a menu-item is clicked
    'click .fixed-right .dropdown > li > a': function(e) {
        // prevent default link action
        e.preventDefault();
        // make sure it doesn't bubble or the document click handler above will
        // fire
        e.stopPropagation();
        $(e.currentTarget).closest('.dropdown').toggleClass('cbp-spmenu-open');
    }
});

Template.breadcrumbs.crumbs = function() {
    return Session.get('crumbs');
};

// Sub item events
Template.page.events({
    // when left menu button is click, show the left menu
    'click #showLeft': function(e) {
        // prevent default link action
        e.preventDefault();
        // make sure it doesn't bubble or the document click handler above will
        // fire
        e.stopPropagation();
        $('.cbp-spmenu').toggleClass('cbp-spmenu-open');
    },
    // Just in case, close the menu when a menu-item is clicked
    'click .cbp-spmenu > a': function(e) {
        // prevent default link action
        e.preventDefault();
        // make sure it doesn't bubble or the document click handler above will
        // fire
        e.stopPropagation();
        $('.cbp-spmenu').toggleClass('cbp-spmenu-open');
    }
});
