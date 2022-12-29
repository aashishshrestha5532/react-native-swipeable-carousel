/// <reference types="react" />
interface IProps {
    indicatorStyleTwoHeight: number;
    item: string[];
    allBorder?: boolean;
    height: number;
    indicatorStyleTwo?: boolean;
    onMomentScroll?: () => void;
    gestureEnable: boolean;
    noBorder?: boolean;
}
declare const Slider: ({ indicatorStyleTwoHeight, item, allBorder, height, indicatorStyleTwo, onMomentScroll, gestureEnable, noBorder, }: IProps) => JSX.Element;
export default Slider;
