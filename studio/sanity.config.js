import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Linn Forsman',
  projectId: '6akigqdh',
  dataset: 'production',
  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
