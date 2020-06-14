import { CALIBER_MIN, CALIBER_MAX } from '../contants';

export const assertCaliberIsValid = ({ caliber }: { caliber: number }) => {
  if (process.env.NODE_ENV !== 'production') {
    if (caliber % 2 !== 1) {
      throw new Error(`"caliber" should never be an even number, but got "${caliber}"`);
    }

    if (caliber < CALIBER_MIN) {
      throw new Error(`"caliber" cannot be lower than ${CALIBER_MIN}, but got "${caliber}"`);
    }

    if (caliber > CALIBER_MAX) {
      throw new Error(`"caliber" cannot be lower than ${CALIBER_MAX}, but got "${caliber}"`);
    }
  }
};
