export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'image',
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLenght: 96,
      },
    },
    {
      title: 'Publish date',
      name: 'publishdate',
      type: 'datetime',
    },
    {
      title: 'Description',
      name: 'desc',
      type: 'text',
    },
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug',
      media: 'image',
    },
    prepare({title = 'No title', slug, media}) {
      const path = `/project/${slug.current}/`
      return {
        title,
        media,
        subtitle: path,
      }
    },
  },
}
