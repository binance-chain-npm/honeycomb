import { SIZES, useWindowSize } from '../../internal/useWindowSize';
import { Variant } from '../component';

export const useCurrentVariant = ({ variant }: { variant: Variant }) => {
  const { width } = useWindowSize();

  if (variant === 'responsive') return width < SIZES.md ? 'modal' : 'dropdown';

  return variant;
};
