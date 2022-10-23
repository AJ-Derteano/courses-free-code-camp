import './MarkdownPreview.css'

import { marked } from 'marked'
import { useState } from 'react';
const { AiOutlineRead } = require('react-icons/ai')
const { CgMaximizeAlt, CgMinimize } = require('react-icons/cg')

const MarkdownPreview = (props) => {
  const { markdown } = props;

  const [maximized, setMaximized] = useState(false);
  const renderer = new marked.Renderer();
  renderer.link = function (href, title, text) {
    return `<a target="_blank" href="${href}">${text}</a>`;
  };

  marked.setOptions({
    gfm: true,
    tables: true,
    breaks: true,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    highlight: function (code) {
      return require('highlight.js').highlightAuto(code).value;
    },
  });

  return (
    <div className={`div__preview ${maximized ? 'maximized' : ''}`}>
      <div className='preview__header'>
        <span><AiOutlineRead /> Markdown Previewer</span>
        <span className='span__btn' onClick={() => { setMaximized(!maximized) }}>
          {!maximized ? <CgMaximizeAlt /> : <CgMinimize />}
        </span>
      </div>
      <div
        id='preview'
        className='preview'
        dangerouslySetInnerHTML={{
          __html: marked(markdown, { renderer })
        }} />
    </div>
  )
}

export default MarkdownPreview