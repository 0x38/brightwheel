/**
 * brightwheel
 *
 * Copyright © 2016 Allen Smith &lt;loranallensmith@github.com&gt;. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { expect } from 'chai';
import WindowContent from '../src/window-content';
import PaneGroup from '../src/pane-group';

describe('WindowContentContent', () => {

  describe('render method', () => {

    it('should create the right element', () => {
      let myWindowContent = new WindowContent({}, []);
      expect(myWindowContent.element.tagName).to.equal('DIV');
    });

    it('should render the correct class', () => {
      let myWindowContent = new WindowContent({}, []);
      expect(myWindowContent.element.className).to.include('window-content');
    });

    it('should include extra classes', () => {
      let myWindowContent = new WindowContent({ classNames:['extra-class', 'another-class'] }, []);
      expect(myWindowContent.element.className).to.contain('extra-class another-class');
    });

    it('should render children', () => {
      let myPaneGroup = new PaneGroup({}, [])
      let myWindowContent = new WindowContent({}, [myPaneGroup]);
      expect(myWindowContent.children[0].element.className).to.include('pane-group');
    });

  });

});
