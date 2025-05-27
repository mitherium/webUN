import Blockly from 'blockly';
import 'blockly/javascript';
import { useEffect, useRef } from 'react';

export default function BlocklyEditor() {
  const blocklyDiv = useRef(null);
  const toolbox = {
    "kind": "flyoutToolbox",
    "contents": [
      { "kind": "block", "type": "controls_if" },
      { "kind": "block", "type": "logic_compare" },
      { "kind": "block", "type": "math_number" },
      { "kind": "block", "type": "text" }
    ]
  };

  useEffect(() => {
    if (blocklyDiv.current) {
      Blockly.inject(blocklyDiv.current, { toolbox });
    }
  }, []);

  return <div ref={blocklyDiv} style={{ height: '400px', width: '100%' }} />;
}