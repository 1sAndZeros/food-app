'use client';

import Avatar from '@/components/Avatar';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Message from '@/components/Message';

const Components = () => {
  return (
    <section>
      <h1>Components</h1>
      <div>
        <h2>Buttons</h2>
        <div style={{ display: 'flex', gap: '20px' }}>
          <Button>Primary Button</Button>
          <Button variant='secondary'>Secondary Button</Button>
          <Button
            variant='warning'
            onClick={() => console.log('button clicked')}
          >
            Warning Button
          </Button>
          <Button variant='danger'>Danger Button</Button>
        </div>
      </div>
      <div>
        <h2>Avatars</h2>
        <div style={{ display: 'flex', gap: '20px' }}>
          <Avatar size='xlarge' />
          <Avatar size='large' />
          <Avatar />
          <Avatar size='small' />
        </div>
      </div>
      <div>
        <h2>Inputs</h2>
        <div style={{ display: 'flex', gap: '20px' }}>
          <Input variant='primary' placeholder='Primary' />
          <Input variant='secondary' placeholder='Secondary' />
          <Input variant='warning' placeholder='Warning' />
          <Input variant='danger' placeholder='Danger' />
        </div>
      </div>
      <div>
        <h2>Message</h2>
        <div style={{ display: 'flex', gap: '20px' }}>
          <Message>
            <h2>This is the header</h2>
            <p>Hello, how are you?</p>
          </Message>
          <Message variant='danger'>
            <p>Danger Message</p>
          </Message>
        </div>
      </div>
    </section>
  );
};

export default Components;
