/// <reference types="react" />
interface IProps {
    height: number;
    images: string[];
    enableGestureSwipe?: boolean;
}
export default function index({ height, images, enableGestureSwipe, }: IProps): JSX.Element;
export {};
