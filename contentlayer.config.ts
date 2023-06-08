import { defineDocumentType, makeSource, type ComputedFields } from "@contentlayer/source-files";
import { remarkCodeHike } from "@code-hike/mdx";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const theme = require("shiki/themes/nord.json");

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
        tags: { type: 'list', of: { type: 'string' }, required: false },
        image: { type: 'string', required: false, default: 'https://www.loliapi.com/acg/pc/' },
    },
    computedFields: {
        url: {
            type: 'string',
            resolve: (article) => `/${article._raw.flattenedPath}`
        },
        image: {
            type: 'string',
            resolve: (article) => article.image = article.image + "?r=" + Math.random(),
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
    documentTypes: [Article, Page],
    mdx: {
        remarkPlugins: [
            [remarkCodeHike,
                {
                    showCopyButton: true,
                    theme: theme,
                    lineNumbers: true,
                }
            ]
        ]
    }
})