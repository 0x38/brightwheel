/**
 * brightwheel
 *
 * Copyright © 2016 Allen Smith &lt;loranallensmith@github.com&gt;. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

 /** @jsx etch.dom */

import etch from 'etch';
import classNames from 'classnames';
import EtchComponent from './etch-component';

class Table extends EtchComponent {

  render() {
    let classes = classNames(
      {
        'table-striped' : this.properties.striped === true
      },
      this.properties.classNames
    );

    // Get table headers using the keys of the first object in the array
    let headers = Object.keys(this.children[0]);

    // Generate table headers in JSX
    let headerRow =
      <thead>
        <tr>
          {headers.map(function(header) {
            return <th>{header}</th>
          })}
        </tr>
      </thead>


    return (
      <table {...this.properties.attributes} className={classes}>
        {headerRow}
        <tbody>
          {this.children.map(function(child) {
            return (
              <tr>
                {Object.keys(child).map(function(key) {
                  return <td>{child[key]}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>);
  }

}

export default Table;
