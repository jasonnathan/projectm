##Project M 
an experimental hierarchical approach to Project Management specifically targeted at applications with multiple screens / pages. The top level of this hierarchy comprises the main navigation in an application. The second level thereafter consists of its *child-items*. For example:

* Home `<= Top Level Navigation`

* User  `<= Top Level Navigation`

    * Dashboard `<= Second Level (subpage)`

    * Settings `<= Second Level (subpage)`

...etc

Of course, each *child-item* on the second level will likely need more levels. These include its required modules, widgets, forms (including wizards) and so on. The idea is to establish a relationship between pages &  modules and in doing so - maintaining context. This is especially useful for less tech-savvy people in an organisation.

The magic happens in each *child-item* where one can:

* Read an overview of the purpose and functionality of this page.

* Contribute to an on-going discussion between team members.

* View or Upload mockups, screenshots and other related media.

* View a hierarchical list of issues that are further organised by tags:

    * Issues are modular, meaning the top level of an issue is an item tagged `section` which represent modules (described above) and its children are tasks, ideas or problems tagged `feature`, `review` or `bug` respectively.

    * Each issue has a status of `open`, `closed` or `wontfix`. `wontfix` means that an issue is abandoned either because it is irrelevant or not constructive.

    * The above tags can and should be complemented by other unique tags that describe the each module further so a search can be more specific.
    
* See a timeline of each page that can be further broken down to see targets set on per-issue basis (if applicable)

    * These timelines are organised by milestones, likely indicative of a scheduled release that are named and versioned. For example `Alpha 1`, `Beta 2`, `RC 1` etc. Each milestone also has a description of what must be accomplished so everyone in a team in never out-of-the-loop, in a manner of speaking.

* Finally, one can see the people involved including their roles, assignments and delegated tasks.



**Navigation & Organisation (Front-End / UI)**

* Entering the site presents a **Login** screen as each project is assumed private.

* Once authenticated, a user is presented with a list of top level **Pages** with each item expandable to reveal its *child-item* (second level).

* Clicking on a *child-item* brings a user to another page where his/her navigational options are:

    * An **Overview** page complemented by an on-going discussion. 

    * An **Issues** page comprising of this *child-item*'s issues.

        * Issues are presented in a searchable list with each item expanding to reveal it's discussion.

    * A **Milestones** page comprising set timelines organised by a milestone (release).

    * A **People** page with a list of related people.
     
    * At all times, uploaded media is made available to peruse via 'clickable' **Thumbnails** - along with ability to upload new media or delete outdated ones.

    * A global **Search** page.

    * A simple **Profile** page including limited edit options. This will also serve as an *Account* page where people with administrative access can manage other users in a project.


**Internal Functionality (Backend)**

* Authentication provider will be a Google Apps account. (currently)

* Simple roles management.

* Email Notifications

* Each project is co-related to a Github Project with the same name.

* Issues created on this Application automatically create Issues on Github. Updates are reflected both ways.

**Future Considerations**

* A WYSIWYG text editor to edit content.

* A complementary mobile app.

* The ability to create new project - very important addition.

* Portability of the application.


**Motivation for this project**

Well, quite frankly, I have been meaning to build something like this because it simply does not exist and it should. Since this is going to be created on Meteor, it gives me the opportunity to get a deeper understanding of the framework and potential gotchas in using it.

This will not only serve us internally as our project management tool, it's heavily commented source code and perhaps some planned tutorials will allow everyone in the team to learn the guts of Meteor quickly. More importantly, how a Meteor app is structured and organised.
