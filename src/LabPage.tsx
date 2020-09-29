import React from 'react';
import { Typography } from '@material-ui/core';

const LabPage: React.FC = () => {
  return (
    <div style={{height: '100vh'}}>
      <Typography variant='h2'>
        DSA Preview Lab
      </Typography>
      <iframe
        title='turtle trinket'
        src="https://trinket.io/embed/python/265d7b8bac?showInstructions=true"
        width="100%"
        height="100%"
        frameBorder="0" 
        marginWidth={0}
        marginHeight={0}
        allowFullScreen
      />
    </div>
  );
};

export default LabPage;
