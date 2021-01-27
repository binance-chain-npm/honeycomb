import React from 'react';

import { Sections } from '../../modules/sections';
import { Button } from '../Button';
import { Toast } from '../Toast';

import { Toaster, toast } from './';

export default {
  component: Toaster,
  title: `${Sections.Elements}/Toaster`,
};

export const Default = () => (
  <>
    <Button
      variant="primary"
      onClick={() => toast(<Toast icon={<Toast.Icon.Success />}>Some content...</Toast>)}
    >
      Make a toast
    </Button>
    <Toaster autoClose={false} />
  </>
);
