export const variants = ['success', 'warning', 'danger'] as const;

export type Variant = typeof variants[number];
