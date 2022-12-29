/// <reference types="react" />
interface IProps {
    item: string[];
    pageRef: any;
    scrollOffsetAnimatedValue: any;
    positionAnimatedValue: any;
    currentPosition: (value: number) => void;
    initialPage: number;
    allBorder: boolean;
    onMomentScroll: (value?: boolean) => void;
    leftBorderOnly: boolean;
    borderRadius: number;
    gestureEnable: boolean;
    noBorder: boolean;
}
declare const ViewPager: ({ item, pageRef, scrollOffsetAnimatedValue, positionAnimatedValue, currentPosition, initialPage, allBorder, onMomentScroll, borderRadius, gestureEnable, noBorder, }: IProps) => JSX.Element;
export default ViewPager;
