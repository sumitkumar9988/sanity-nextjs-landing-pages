export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61dd5761c259a9e5da6f3e83',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-5nhkbytu',
                  apiId: '33fb2597-4a02-4cc7-b7b2-46a23f375692'
                },
                {
                  buildHookId: '61dd5761567114e487fa7e7b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-4hb6fey1',
                  apiId: 'd0666948-3234-4443-8665-c9fd2f81fb21'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sumitkumar9988/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-4hb6fey1.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
