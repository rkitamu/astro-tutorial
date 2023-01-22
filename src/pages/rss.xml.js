import rss from '@astrojs/rss';

export async function get() {
  return rss({
    title: 'Astro Learner | Blog',
    description: 'My journey learning Astro',
    site: 'https://frolicking-faloodeh-eeff2d.netlify.app',
    items: import.meta.glob('./posts/*.md'),
    customData: `<language>en-us</language>`,
  });
}
