/** @jsx jsx */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect, useRef } from 'react';
import { jsx } from '@emotion/core';
import { useTranslation } from 'react-i18next';
import { EditorState, RichUtils, convertToRaw, convertFromRaw } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import createToolbarPlugin from 'draft-js-static-toolbar-plugin';
import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
  HeadlineOneButton,
  HeadlineTwoButton,
  HeadlineThreeButton,
  UnorderedListButton,
  OrderedListButton,
} from 'draft-js-buttons';
import { draftToMarkdown, markdownToDraft } from 'markdown-draft-js';
import { pipe } from 'ramda';
import PropTypes from 'prop-types';

import { IS_CLIENT } from 'config/constants';

import styles from './Editor.styles';

const staticToolbarPlugin = createToolbarPlugin();
const { Toolbar } = staticToolbarPlugin;
const plugins = [staticToolbarPlugin];

const RichTextEditor = ({ slug, value, required, onChange, onBlur }) => {
  if (!IS_CLIENT) return '';

  // eslint-disable-next-line
  const { t } = useTranslation();

  const contentState = convertFromRaw(markdownToDraft(value));

  // eslint-disable-next-line
  const editor = useRef(null);

  // eslint-disable-next-line
  const [draft, setDraft] = useState(
    EditorState.createWithContent(contentState)
  );

  // eslint-disable-next-line
  useEffect(() => {
    const content = pipe(
      convertToRaw,
      draftToMarkdown
    )(draft.getCurrentContent());

    onChange(content);
  }, [draft]);

  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) setDraft(newState);
  };

  return (
    // eslint-disable-next-line
    <div>
      <label
        htmlFor={slug}
        css={tw('block cursor-pointer mb-1')}
        onClick={() => editor && editor.current.focus()}
      >
        {t(`form.${slug}`)}
        {required && <sup css={tw('text-xs')}>*</sup>}
      </label>

      <div css={styles} id={slug}>
        <div css={tw('w-full absolute top-0 left-0')}>
          <Toolbar>
            {externalProps => (
              <>
                <HeadlineOneButton {...externalProps} />
                <HeadlineTwoButton {...externalProps} />
                <HeadlineThreeButton {...externalProps} />
                <BoldButton {...externalProps} />
                <ItalicButton {...externalProps} />
                <UnderlineButton {...externalProps} />
                <UnorderedListButton {...externalProps} />
                <OrderedListButton {...externalProps} />
              </>
            )}
          </Toolbar>
        </div>

        <Editor
          ref={editor}
          editorState={draft}
          onChange={setDraft}
          handleKeyCommand={handleKeyCommand}
          plugins={plugins}
          onBlur={onBlur}
        />
      </div>
    </div>
  );
};

RichTextEditor.propTypes = {
  slug: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  onBlur: PropTypes.func,
};

RichTextEditor.defaultProps = {
  onChange: md => console.log(md),
};

export default RichTextEditor;
