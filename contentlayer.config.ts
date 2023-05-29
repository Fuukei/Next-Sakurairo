import { defineDocumentType, makeSource, type ComputedFields } from '@contentlayer/source-files'

const computedFields: ComputedFields = {
    slug: {
        type: 'string',
        resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/'),
    }
}

export const Article = defineDocumentType(() => ({
    name: 'Article',
    filePathPattern: `articles/**/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: { type: 'string', required: true },
        date: { type: 'date', required: true },
    },
    computedFields: {
        url: {
            type: 'string',
            resolve: (article) => `/${article._raw.flattenedPath}`
        },
        ...computedFields,
    },
}))

export const Page = defineDocumentType(() => ({
    name: 'Page',
    filePathPattern: `pages/**/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: { type: 'string', required: true },
    },
    computedFields: {
        url: {
            type: 'string',
            resolve: (page) => `/${page._raw.flattenedPath}`
        },
        ...computedFields,
    }
}))

export default makeSource({
    contentDirPath: './content',
    documentTypes: [Article, Page]
})