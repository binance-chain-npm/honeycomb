import React from 'react';
import styled from 'styled-components';
import { em } from 'polished';

import { decorators } from '../../modules/decorators';
import { Sections } from '../../modules/sections';
import { Icon } from '../Icon';
import { Tooltip } from '../Tooltip';

export default {
  component: Icon,
  decorators,
  title: `${Sections.Elements}/Icon`,
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  > *:not(:last-child) {
    margin-bottom: ${({ theme }) => em(theme.honeycomb.size.normal)};
  }
`;

const Group = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Wrapper = styled.div`
  margin: 1em;
`;

const payment = ['MastercardColor', 'VisaColor'];

const social = [
  'CMC',
  'Facebook',
  'Instagram',
  'Reddit',
  'Telegram',
  'Twitter',
  'VK',
  'Weibo',
  'YouTube',
];

const Component = ({ iconName, component }: { iconName: string; component: React.ReactNode }) => (
  <Wrapper key={iconName}>
    <Tooltip content={iconName} arrow variant="accent" padding="tiny" placement="bottom">
      {component}
    </Tooltip>
  </Wrapper>
);

export const Default = () => (
  <Container>
    <Group>
      {Object.keys(Icon)
        .filter((iconName) => {
          return !payment.includes(iconName) && !social.includes(iconName);
        })
        .map((iconName) => {
          const Svg = Icon[iconName as keyof typeof Icon];

          return <Component iconName={iconName} component={<Svg />} />;
        })}
    </Group>

    <Group>
      {payment.map((iconName) => {
        const Svg = Icon[iconName as keyof typeof Icon];

        return <Component iconName={iconName} component={<Svg />} />;
      })}
    </Group>

    <Group>
      {social.map((iconName) => {
        const Svg = Icon[iconName as keyof typeof Icon];

        return <Component iconName={iconName} component={<Svg />} />;
      })}
    </Group>
  </Container>
);
