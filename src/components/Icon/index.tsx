import { Src, sourceFor } from './source';
import { Styled } from './styled';

export const Icon = Styled as typeof Styled & { Src: typeof Src; sourceFor: typeof sourceFor };

Icon.Src = Src;
Icon.sourceFor = sourceFor;
