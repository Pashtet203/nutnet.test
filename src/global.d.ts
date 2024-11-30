declare module '*.scss';
declare module '*.css';
declare module "*.png"
declare module "*.svg"
declare module "*.jpg"

declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}