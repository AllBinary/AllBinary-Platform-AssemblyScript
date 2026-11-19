// Generated Code Do Not Modify
// package org.allbinary.animation
// import org.allbinary.math.AngleFactory
// import org.allbinary.math.AngleInfo
// import org.allbinary.util.CircularIndexUtil

@global export class NullRotationAnimation extends RotationAnimation {

    jclassName(): string {
        return "org.allbinary.animation.NullRotationAnimation";
    }
    

    static createTotalAngle(angleInfo: AngleInfo | null, totalAngle: i16, animationBehavior: AnimationBehavior | null): NullRotationAnimation | null {
        return new NullRotationAnimation().jinit_NullRotationAnimation_3(angleInfo, CircularIndexUtil.createInstance(totalAngle / angleInfo!.getAngleIncrementInfo()!.getAngleIncrement()), animationBehavior);
    }
    

    static createQuarter(animationBehavior: AnimationBehavior | null): NullRotationAnimation | null {
        return new NullRotationAnimation().jinit_NullRotationAnimation_3(AngleInfo.getInstance1(AngleFactory.getInstance()!.QUARTER_TOTAL_ANGLE), CircularIndexUtil.createInstance(4), animationBehavior);
    }
    

    jinit_NullRotationAnimation_3(angleInfo: AngleInfo | null, circularIndexUtil: CircularIndexUtil | null, animationBehavior: AnimationBehavior | null): NullRotationAnimation {
        super.jinit_RotationAnimation_3(angleInfo, circularIndexUtil, animationBehavior);
        return this;
    }
    

    getAnimationSize(): i32 {
        return 0;
    }
}

