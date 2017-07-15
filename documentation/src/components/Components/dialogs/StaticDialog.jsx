import React from 'react';
import Dialog from 'react-md/lib/Dialogs/Dialog';
import FontIcon from 'react-md/lib/FontIcons';

import './_styles.scss';

const StaticDialog = () => (
  <div className="dialogs__static">
    <FontIcon>idonut_large</FontIcon>
    <Dialog id="static-dialog" containFocus={false} aria-labelledby="static-dialog-title" className="md-background--card">
      <h2 id="static-dialog-title">Hello!</h2>
      <p>Any content can really go in here. The badge example is a better idea than this simple one.</p>
    </Dialog>
  </div>
);
export default StaticDialog;