import React from 'react';
import S from './index.less';

export default class extends React.Component {
  render() {
    return (
      <div className={S.textLayout}>
        <div className={S.textWord}>学而不思则罔，思而不学则殆。</div>
      </div>
    );
  }
}
