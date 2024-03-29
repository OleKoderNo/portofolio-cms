import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import schemaTypes from './schemas/index'

export default defineConfig({
  name: 'default',
  title: 'Portofolio CMS',

  projectId: 'h83pbmqu', 
  dataset: 'production',
  useCdn: false,

  plugins: [deskTool(), visionTool()],   

  schema: {
    types: schemaTypes,
  },
})
