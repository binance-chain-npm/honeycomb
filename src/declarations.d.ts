declare module '*.svg' {
  const value: string;
  export default value;
  export const ReactComponent: React.StatelessComponent<React.SVGAttributes<SVGElement>>;
}

declare module '*.css' {
  const value: string;
  export default value;
}
