Pages = new Meteor.Collection('pages');



Router.configure({
    layoutTemplate: 'layout',
//    loadingTemplate: 'loading',
//    notFoundTemplate: 'not_found',
    yieldTemplates: {
        topbar: {to: 'topbar'},
        breadcrumbs: {to: 'breadcrumbs'}
    }
});

PagesController = RouteController.extend({
    template: 'pages',
    waitOn: function() {
        return Meteor.subscribe('PagesList')
    },
    action: function() {
        Session.set('crumbs', null);
        this.render();
    },
    data: {
        pages: function() {
            var pages = Pages.find().fetch();
            //return pages

            _.each(pages, function(page, index) {
                if (page.parent) {
                    var parent = _.findWhere(pages, {slug: page.parent.slug}),
                    parentIndex = pages.indexOf(parent);
                    if (!parent.children) {
                        parent.children = [];
                    }
                    parent.children.push(page);
                    delete pages[index];
                    pages[parentIndex] = parent;
                }
            });
            return pages;
        }
    }
});


Router.map(function() {
    /**
     * The route's name is "home"
     * The route's template is also "home"
     * The default action will render the home template
     */
    this.route('home', {
        path: '/',
        controller: PagesController
    });

    this.route('page', {
        path: '/page/:slug',
        template: 'page',
        waitOn: function() {
            return Meteor.subscribe('PagesList')
        },
        data: function() {
            return Pages.findOne({slug: this.params.slug});
        },
        action: function() {
            var page = this.getData(), c = [];
            if (typeof page === 'object') {
                if (page.parent) {
                    c.push(page.parent);
                }
                c.push(page);
            }
            Session.set('crumbs', c);
            this.render();
        }
    });
});