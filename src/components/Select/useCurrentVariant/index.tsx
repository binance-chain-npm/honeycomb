import { useWindowSize } from '../../internal/useWindowSize';
import { Variant } from '../component';

export const useCurrentVariant = ({ variant }: { variant: Variant }) => {
  const { isSm } = useWindowSize();

  if (variant === 'responsive') return isSm ? 'modal' : 'dropdown';

  return variant;
};
