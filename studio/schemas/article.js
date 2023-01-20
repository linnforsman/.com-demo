export default {
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLenght: 96,
      },
    },
    {
      name: 'publishdate',
      type: 'datetime',
      title: 'Publish date',
    },
    {
      name: 'body',
      type: 'portableText',
      title: 'Body text',
    },
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug',
      media: 'image',
    },
    prepare({title = 'No title', slug, media}) {
      const path = `/article/${slug.current}/`
      return {
        title,
        media,
        subtitle: path,
      }
    },
  },
}
