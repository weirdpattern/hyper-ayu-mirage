/**
 * MIT License
 *
 * Copyright (c) 2017 WeirdPattern
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

'use strict';

const BACKGROUND = '#212733';
const FOREGROUND = '#D9D7CE';

const RED = '#ff3333';
const GREEN = '#BAE67E';
const YELLOW = '#FFD580';
const BLUE = '#5CCFE6';
const MAGENTA = '#D4BFFF';
const LIGHT_GRAY = '#3D4752';
const DARK_GRAY = '#3E4B59';
const WHITE = '#FFFFFF';

const CURSOR_COLOR = YELLOW;
const BORDER_COLOR = BACKGROUND;

let TAB_BORDER_COLOR = '#343D4A';
const TAB_TEXT_COLOR = FOREGROUND;
const TAB_BORDER_ACTIVE_COLOR = '#FFAE57';

const colors = {
  black: BACKGROUND,
  red: RED,
  green: GREEN,
  yellow: YELLOW,
  blue: BLUE,
  magenta: MAGENTA,
  cyan: BLUE,
  white: LIGHT_GRAY,
  lightBlack: DARK_GRAY,
  lightRed: RED,
  lightGreen: GREEN,
  lightYellow: YELLOW,
  lightBlue: BLUE,
  lightMagenta: MAGENTA,
  lightCyan: BLUE,
  colorCubes: WHITE,
  grayscale: FOREGROUND
};

exports.decorateConfig = (config) => {
  let windowControlsCSS;

  if (config.showWindowControls) {
    windowControlsCSS = '.list_2902 { margin-left: 0 !important; }';
  }

  if (config.ayu && config.ayu.noBorder) {
    TAB_BORDER_COLOR = BACKGROUND;
  }

  return Object.assign({}, config, {
    foregroundColor: FOREGROUND,
    backgroundColor: BACKGROUND,
    borderColor: BORDER_COLOR,
    cursorColor: CURSOR_COLOR,
    colors,
    termCSS: `
      .cursor-node[focus=true]:not([moving]) {
        animation: blink 1s ease infinite;
      }
      @keyframes blink {
        0%, 40% { opacity: 0 }
        50%, 90% { opacity: 1 }
      }
    `,
    css: `
      ${config.css || ''}
      .cursor-node {
        background-color: ${MAGENTA} !important;
        border-color: ${MAGENTA} !important;
      }
      .hyper_main {
        border: none !important;
      }
      .header_header {
        border-bottom: 1px solid ${TAB_BORDER_COLOR};
        background: ${BACKGROUND} !important;
      }
      .splitpane_divider {
        background-color: rgba(130, 128, 184, 0.5) !important;
      }
      .tabs_title {
        color: ${TAB_TEXT_COLOR};
        font-weight: 600;
      }
      .tab_tab {
        border: 0;
        border-left: 1px solid ${TAB_BORDER_COLOR} !important;
        background-color: ${BACKGROUND};
      }
      .tab_text {
        color: ${TAB_TEXT_COLOR};
        font-weight: normal;
      }
      .tab_textActive {
        color: ${TAB_TEXT_COLOR};
        font-weight: 600;
        background-color: ${BACKGROUND};
        border-bottom: 1px solid ${TAB_BORDER_ACTIVE_COLOR} !important;
      }
      .tab_icon {
        color: ${TAB_TEXT_COLOR};
        font-weight: 600;
      }
      .tab_icon:hover {
        color: ${TAB_TEXT_COLOR};
        font-weight: 600;
      }
      ${windowControlsCSS}
    `
  })
};
