import React, { useState } from 'react';
import Unity, { UnityContent } from 'react-unity-webgl';

const GamePage: React.FC = () => {
  const [unityContent] = useState(new UnityContent(
    "build/WebGL.json",
    "build/UnityLoader.js"
  ));

  return (
    <div style={{height: '100vh'}}>
      <Unity unityContent={unityContent} />
    </div>
  );
};

export default GamePage;
