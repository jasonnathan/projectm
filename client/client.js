Meteor.startup(function() {
    var sys = arbor.ParticleSystem(1000, 600, 1);
//    sys.parameters({gravity: true});
    sys.renderer = Renderer("#viewport");
    var data = {
        nodes: {
            sourceguru: {color: '#00AEFF', shape: 'dot', label: 'SourceGuru'},
            about: {color: 'crimson', shape: 'dot', label: 'About'},
            contact: {color: 'crimson', shape: 'dot', label: 'Contact'}
        },
        edges: {
            sourceguru: {about: {}, contact: {}}
        }
    };
    sys.graft(data);

    setTimeout(function() {
        var postLoadData = {
            nodes: {
                user: {'color': 'crimson', 'shape': 'dot', 'label': 'User'},
                dashboard: {'color': '#aaaaaa', 'shape': 'dot', 'label': 'Dashboard'},
                settings: {'color': '#aaaaaa', 'shape': 'dot', 'label': 'Settings'}
            },
            edges: {
                user: {dashboard: {}, settings: {}},
                sourceguru: {user: {}}
            }
        };
        sys.graft(postLoadData);
    }, 1000);

});

