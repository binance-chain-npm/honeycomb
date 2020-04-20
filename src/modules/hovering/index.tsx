import { useState, useMemo } from 'react';
import { useSpring, config } from 'react-spring';

export interface Params {
  onMouseEnter?: React.AllHTMLAttributes<HTMLElement>['onMouseEnter'];
  onMouseLeave?: React.AllHTMLAttributes<HTMLElement>['onMouseLeave'];
}

export const useHoverSpring = ({ onMouseEnter, onMouseLeave }: Params = {}) => {
  const [hovering, setHovering] = useState(false);
  const style = useSpring({
    config: config.wobbly,
    transform: hovering ? 'scale(0.75)' : 'scale(1)',
  });

  const mouseEnter = useMemo(
    () => (evt: React.MouseEvent<HTMLElement, MouseEvent>) => {
      setHovering(true);
      if (!onMouseEnter) return;
      onMouseEnter(evt);
    },
    [setHovering, onMouseEnter],
  );

  const mouseLeave = useMemo(
    () => (evt: React.MouseEvent<HTMLElement, MouseEvent>) => {
      setHovering(false);
      if (!onMouseLeave) return;
      onMouseLeave(evt);
    },
    [setHovering, onMouseLeave],
  );

  return useMemo(() => ({ mouseEnter, mouseLeave, style }), [mouseEnter, mouseLeave, style]);
};
