import React, { useState } from 'react';
import Unity, { UnityContent } from 'react-unity-webgl';

const GamePage: React.FC = () => {
  const [unityContent] = useState(new UnityContent(
    "build/WebGL.json",
    "build/UnityLoader.js"
  ));

  return (
    <Unity unityContent={unityContent} />
  );
};

export default GamePage;
