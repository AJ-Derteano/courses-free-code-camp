import { useState } from 'react';
import './MarkdownEditor.css';
const { VscMarkdown } = require('react-icons/vsc')
const { CgMaximizeAlt, CgMinimize } = require('react-icons/cg')

const MarkdownEditor = (props) => {

  const { markdown, setMarkdown } = props;

  const [maximized, setMaximized] = useState(false);

  const handleChange = (e) => {
    setMarkdown(e.target.value)
  }

  return (
    <div className='div__editor'>
      <div className='editor__header'>
        <span><VscMarkdown /> Markdown Editor</span>
        <span className='span__btn' onClick={() => { setMaximized(!maximized) }}>
          {!maximized ? <CgMaximizeAlt /> : <CgMinimize />}
        </span>
      </div>
      <textarea id='editor' type='text' className={`editor ${maximized ? 'maximized' : ''}`} onChange={(e) => { handleChange(e) }} value={markdown} />
    </div>
  )
}

export default MarkdownEditor