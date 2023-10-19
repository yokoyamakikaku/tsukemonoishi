import React, { FC } from 'react'
import { marked } from 'marked'

const renderer = new marked.Renderer()

renderer.heading = (text, level) => {
  const size = ['text-4xl', 'text-3xl', 'text-2xl', 'text-xl', 'text-lg', 'text-base'][level - 1];
  return `<h${level} class="${size} font-bold mt-4 mb-2">${text}</h${level}>`;
};

renderer.paragraph = (text) => {
  return `<p class="mt-3 text-base">${text}</p>`;
};

renderer.link = (href, title, text) => {
  return `<a href="${href}" title="${title}" class="text-blue-500 hover:underline">${text}</a>`;
};

renderer.image = (href, title, text) => {
  return `<img src="${href}" title="${title}" alt="${text}" class="mx-auto my-4" />`;
};

renderer.code = (code, infostring, escaped) => {
  return `<pre class="bg-gray-800 p-4 text-white rounded"><code>${escaped ? code : escape(code)}</code></pre>`;
};

renderer.list = (body, ordered, start) => {
  const type = ordered ? 'ol' : 'ul';
  return `<${type} class="list-disc list-inside ml-5">${body}</${type}>`;
};

renderer.listitem = (text) => {
  return `<li>${text}</li>`;
};

renderer.em = (text) => {
  return `<em class="italic">${text}</em>`;
};

renderer.strong = (text) => {
  return `<strong class="font-bold">${text}</strong>`;
};

renderer.blockquote = (quote) => {
  return `<blockquote class="border-l-4 border-blue-500 pl-4 text-gray-600">${quote}</blockquote>`;
};

const markedOptions = {
  renderer: renderer
}

const MarkdownRenderer:FC<{ markdown: string}> = ({ markdown }) => {
  const html = marked(markdown, markedOptions)
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}

export default MarkdownRenderer
