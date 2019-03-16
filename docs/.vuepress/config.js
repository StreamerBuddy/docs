module.exports = {
  title: 'StreamAss Docs',
  description: 'Streaming Assistant Documentation',
  plugins: ['@vuepress/medium-zoom', '@vuepress/back-to-top'],
  base: '',
  host: 'localhost',
  port: 7070,
  locales: {
    '/': {
      lang: 'en-US'
    },
    '/de/': {
      lang: 'de-DE'
    }
  },
  themeConfig: {
    locales: {
      '/': {
        // text for the language dropdown
        selectText: 'Languages',
        // label for this locale in the language dropdown
        label: 'English',
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guides', link: '/guides/' },
          { text: 'Documentation', link: '/documentation/' }
        ],
        sidebar: {
          '/guides/': [
            ''
          ],
          '/documentation/': [
            ''
          ]
        }
      },
      '/de/': {
        // text for the language dropdown
        selectText: 'Sprachen',
        // label for this locale in the language dropdown
        label: 'Deutsch',
        nav: [
          { text: 'Home', link: '/de/' },
          { text: 'Guides', link: '/de/guides/' },
          { text: 'Dokumentationen', link: '/de/documentation/' }
        ],
        sidebar: {
          '/de/guides/': [
            ''
          ],
          '/de/documentation/': [
            ''
          ]
        }
      }
    }
  }
}