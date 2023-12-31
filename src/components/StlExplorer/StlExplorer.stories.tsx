import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import StlExplorer from './StlExplorer';

const meta: Meta<typeof StlExplorer> = {
  component: StlExplorer,
  title: 'StlExplorer',
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof StlExplorer>;

export const Primary: Story = (args) => <StlExplorer {...args} />;
Primary.args = {
  source: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Flange.stl',
  showViewCube: true,
  allowFullscreen: true,
  enableInteraction: true,
  enableDragAndDrop: true,
};
