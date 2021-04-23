import React from 'react';
import styled from 'styled-components';
import { em } from 'polished';
import { ArgsTable, Subtitle } from '@storybook/addon-docs/blocks';

import { Button } from '../../Button';
import { Code } from '../../internal/Docs';
import { Table } from '../../Table';
import { Tooltip } from '../../Tooltip';

import { DefaultTargetDocs } from './DefaultTarget';

export const Container = styled.div`
  display: flex;
`;

export const StyledDefaultTarget = styled(Tooltip.DefaultTarget)`
  font-weight: 600;
`;

const TooltipWithTable = () => {
  const data = new Array(3).fill(null).map(
    (_) =>
      ({
        col1: 'Hello',
        col2: 'World',
      } as const),
  );

  const columns = [
    {
      Header: 'Column 1',
      accessor: 'col1',
    } as const,
    {
      Header: 'Column 2',
      accessor: 'col2',
    } as const,
  ];

  return (
    <Tooltip
      arrow
      interactive
      placement="bottom"
      content={<Table data={data} columns={columns} interactive />}
    >
      <StyledDefaultTarget shape="fit">&nbsp; table &nbsp;</StyledDefaultTarget>
    </Tooltip>
  );
};

const TooltipWithFlexItem = () => {
  const StyledButton = styled(Button)`
    margin-top: ${({ theme }) => em(theme.honeycomb.size.tiny)};
  `;

  return (
    <Tooltip
      arrow
      interactive
      placement="bottom"
      content={
        <>
          Remember to add the <Code>interactive</Code> prop to the tooltip if you want to hover and
          click inside the content without it closing.
          <StyledButton variant="primary" size="increased" shape="fit">
            Button
          </StyledButton>
        </>
      }
    >
      <StyledDefaultTarget shape="fit">&nbsp; flex item</StyledDefaultTarget>
    </Tooltip>
  );
};

export const docs = {
  page: () => (
    <>
      <Subtitle>
        The tooltip component is used for showing information when a user moves the mouse pointer
        over a target element.
      </Subtitle>
      <ArgsTable of={Tooltip} />

      <Container>
        With some styling, tooltips can have any content inside, like a
        <TooltipWithTable />
        or a
        <TooltipWithFlexItem />.
      </Container>

      <DefaultTargetDocs />
    </>
  ),
};
