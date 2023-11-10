import React, { useState, useEffect } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { convertToHTML } from 'draft-convert';
import DOMPurify from 'dompurify';

import Sidebar from '../Sidebar/Sidebar';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './App.css';

function App() {
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  ); // стейт для текста редактора rtf

  const [convertedContent, setConvertedContent] = useState(null); //стей для конверированного текста html

  useEffect(() => {
    let html = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(html);
  }, [editorState]);

  /**
   *Фенкция для безопасной вставки html текста
   * @param {*} html
   * @returns объект с одним полем __html
   */
  function createMarkup(html) {
    return {
      __html: DOMPurify.sanitize(html)
    }
  }

  return (
    <div className="App">
      <header className="header">
        Rich Text Editor Example
      </header>
      <Sidebar/>
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
        // toolbar={{
        //   inline: { inDropdown: true },
        //   list: { inDropdown: true },
        //   textAlign: { inDropdown: true },
        //   link: { inDropdown: true },
        //   history: { inDropdown: true },
        // }}
        hashtag={{
          separator: ' ',
          trigger: '#',
        }}
        mention={{
          separator: ' ',
          trigger: '@',
          suggestions: [
            { text: 'JavaScript', value: 'javascript', url: 'js' },
            { text: 'Golang', value: 'golang', url: 'go' },
          ],
        }}
      />
      {/* <div
        className="preview"
        dangerouslySetInnerHTML={createMarkup(convertedContent)}>
      </div> */}
      <footer className="footer">
        Rich Text Editor Example
      </footer>
    </div>
  )
}

export default App;
