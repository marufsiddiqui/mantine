import React from 'react';
import { NumberInput, useMantineTheme } from '@mantine/core';
import Configurator from '../../../../components/Configurator/Configurator';

const codeTemplate = (props: string) => `<NumberInput
  defaultValue={18}
 ${props}
/>`;

export function NumberInputConfigurator() {
  const theme = useMantineTheme();

  return (
    <Configurator
      component={(props: any) => <NumberInput {...props} defaultValue={18} />}
      codeTemplate={codeTemplate}
      multiline
      previewBackground={theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white}
      props={[
        { name: 'placeholder', type: 'string', initialValue: 'Your age' },
        {
          name: 'label',
          type: 'string',
          initialValue: 'Your age',
        },
        {
          name: 'description',
          type: 'string',
          initialValue: '',
        },
        {
          name: 'error',
          type: 'string',
          initialValue: '',
        },
        {
          name: 'variant',
          type: 'select',
          data: [
            { label: 'default', value: 'default' },
            { label: 'filled', value: 'filled' },
            { label: 'unstyled', value: 'unstyled' },
          ],
          initialValue: 'default',
          defaultValue: 'default',
        },
        { name: 'radius', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
        { name: 'disabled', type: 'boolean', initialValue: false, defaultValue: false },
        {
          name: 'required',
          type: 'boolean',
          initialValue: true,
          defaultValue: false,
        },
        {
          name: 'hideControls',
          type: 'boolean',
          initialValue: false,
          defaultValue: false,
        },
      ]}
    />
  );
}
