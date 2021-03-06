import React from 'react';
import { metaKeyName, } from '../../../utils/metaKey';

function KeyboardShortcutModal() {
  return (
    <div className="keyboard-shortcuts">
      <h3 className="keyboard-shortcuts__title">Code Editing</h3>
      <p className="keyboard-shortcuts__description">
        Code editing keyboard shortcuts follow <a href="https://shortcuts.design/toolspage-sublimetext.html" target="_blank" rel="noopener noreferrer">Sublime Text shortcuts</a>.
      </p>
      <ul className="keyboard-shortcuts__list">
        <li className="keyboard-shortcut-item">
          <span className="keyboard-shortcut__command">{'\u21E7'} + Tab</span>
          <span>Tidy</span>
        </li>
        <li className="keyboard-shortcut-item">
          <span className="keyboard-shortcut__command">
            {metaKeyName} + F
          </span>
          <span>Find Text</span>
        </li>
        <li className="keyboard-shortcut-item">
          <span className="keyboard-shortcut__command">
            {metaKeyName} + G
          </span>
          <span>Find Next Text Match</span>
        </li>
        <li className="keyboard-shortcut-item">
          <span className="keyboard-shortcut__command">
            {metaKeyName} + {'\u21E7'} + G
          </span>
          <span>Find Previous Text Match</span>
        </li>
        <li className="keyboard-shortcut-item">
          <span className="keyboard-shortcut__command">
            {metaKeyName} + [
          </span>
          <span>Indent Code Left</span>
        </li>
        <li className="keyboard-shortcut-item">
          <span className="keyboard-shortcut__command">
            {metaKeyName} + ]
          </span>
          <span>Indent Code Right</span>
        </li>
        <li className="keyboard-shortcut-item">
          <span className="keyboard-shortcut__command">
            {metaKeyName} + /
          </span>
          <span>Comment Line</span>
        </li>
      </ul>
      <h3 className="keyboard-shortcuts__title">General</h3>
      <ul className="keyboard-shortcuts__list">
        <li className="keyboard-shortcut-item">
          <span className="keyboard-shortcut__command">
            {metaKeyName} + S
          </span>
          <span>Save</span>
        </li>
        <li className="keyboard-shortcut-item">
          <span className="keyboard-shortcut__command">
            {metaKeyName} + Enter
          </span>
          <span>Start Sketch</span>
        </li>
        <li className="keyboard-shortcut-item">
          <span className="keyboard-shortcut__command">
            {metaKeyName} + {'\u21E7'} + Enter
          </span>
          <span>Stop Sketch</span>
        </li>
        <li className="keyboard-shortcut-item">
          <span className="keyboard-shortcut__command">
            {metaKeyName} + {'\u21E7'} + 1
          </span>
          <span>Turn on Accessible Output</span>
        </li>
        <li className="keyboard-shortcut-item">
          <span className="keyboard-shortcut__command">
            {metaKeyName} + {'\u21E7'} + 2
          </span>
          <span>Turn off Accessible Output</span>
        </li>
      </ul>
    </div>
  );
}

export default KeyboardShortcutModal;
