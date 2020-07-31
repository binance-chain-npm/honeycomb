// import React from 'react';

// import { Sections } from '../../../../modules/sections';
// import { Icon } from '../../../Icon';

// // @ts-ignore
// import pic from './pic.png';

// import { ModalSelect } from '.';

// export default {
//   title: `${Sections.Elements}/ModalSelect`,
// };

// const data: Array<{ label: string; icon: typeof Icon.Add }> = [
//   {
//     label: 'Add',
//     icon: Icon.Add,
//   },
//   {
//     label: 'ArrowTopRight',
//     icon: Icon.ArrowTopRight,
//   },
//   {
//     label: 'EyeBlocked',
//     icon: Icon.EyeBlocked,
//   },
//   {
//     label: 'Globe',
//     icon: Icon.Globe,
//   },
// ];

// export const Default = () => {
//   return (
//     <ModalSelect open={true} data-testid="MyModal" title="A title">
//       {data.map((it, index) => (
//         <ModalSelect.Item searchAs={it.label} isSelected={index === 0} data-testid={`${index}`}>
//           <it.icon />
//           &nbsp;<span>{it.label}</span>
//         </ModalSelect.Item>
//       ))}
//       <ModalSelect.Item searchAs={['my photo', 'A crazy item']} data-testid="photo">
//         <img src={pic} alt="" style={{ maxHeight: '100%' }} />
//       </ModalSelect.Item>
//     </ModalSelect>
//   );
// };
