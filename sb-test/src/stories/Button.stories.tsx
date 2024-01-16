import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta = {
  title: '光光光/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    backgrounds: {
      values: [
        { name: '红红红', value: '#f00' },
        { name: '蓝', value: 'blue' },
      ],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'text' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};

export const Guang: Story = {
  args: {
    label: '光光光',
    size: 'large',
    backgroundColor: 'green'
  },
  render(args, meta) {
    const list = meta.loaded.list;

    return <div>
      <div>{list.join(',')}</div>
      <Button {...args}/>
    </div>
  },
  loaders: [
    async () => {
      await '假装 fetch'
      return {
        list: [
          111,
          222,
          333
        ]
      }
    },
  ],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const btn = await canvas.getByRole('button', {
      name: /光光光/i,
    });
    await userEvent.click(btn);

    await expect(btn.textContent).toEqual('光光光');

    // await expect(btn.style.backgroundColor).toEqual('blue');
  },
}

