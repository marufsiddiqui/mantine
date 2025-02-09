import React from 'react';
import { Button, ElementsGroup } from '@mantine/core';
import { ExternalLinkIcon } from '@modulz/radix-icons';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Button, ElementsGroup } from '@mantine/core';

function Demo() {
  return (
    <ElementsGroup position="center">
      <Button onClick={() => console.log('Hello')}>Regular button</Button>
      
      <Button
        component="a"
        href="https://mantine.dev"
        target="_blank"
        variant="outline"
        leftIcon={<ExternalLinkIcon />}
      >
        Mantine docs
      </Button>
    </ElementsGroup>
  );
}`;

export function ButtonComponentsDemo() {
  return (
    <CodeDemo code={code} language="tsx">
      <ElementsGroup position="center">
        <Button>Regular button</Button>
        <Button
          component="a"
          href="https://mantine.dev"
          target="_blank"
          variant="outline"
          leftIcon={<ExternalLinkIcon />}
        >
          Mantine docs
        </Button>
      </ElementsGroup>
    </CodeDemo>
  );
}
