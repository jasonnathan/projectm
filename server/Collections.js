var Pages = new Meteor.Collection('pages');
//Pages.remove({});

if (!Pages.findOne()) {
    _.each([
        {name: 'Top 1', slug: 'top-1', path: '/page/top-1', parent: null},
        {name: 'Top 2', slug: 'top-2', path: '/page/top-2', parent: null},
        {name: 'Top 3', slug: 'top-3', path: '/page/top-3', parent: null},
        {name: 'Child 1.1', slug: 'child-1-1', path: '/page/child-1-1', parent: {name: 'Top 1', slug: 'top-1', path: '/page/top-1'}},
        {name: 'Child 1.2', slug: 'child-1-2', path: '/page/child-1-2', parent: {name: 'Top 1', slug: 'top-1', path: '/page/top-1'}},
        {name: 'Child 2.1', slug: 'child-2-1', path: '/page/child-2-1', parent: {name: 'Top 2', slug: 'top-2', path: '/page/top-2'}},
        {name: 'Child 3.1', slug: 'child-3-1', path: '/page/child-3-1', parent: {name: 'Top 3', slug: 'top-3', path: '/page/top-3'}}
    ], function(i) {
        Pages.insert(i);
    });
}


Meteor.publish('PagesList', function() {
    return Pages.find();
});

Meteor.methods({
    pageChildren: function(slug) {
        return Pages.find({'parent.slug': slug}).fetch();
    }
});

