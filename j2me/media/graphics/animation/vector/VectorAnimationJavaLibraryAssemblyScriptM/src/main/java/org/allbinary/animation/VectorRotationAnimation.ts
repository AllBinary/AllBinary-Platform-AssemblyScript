/*
 *
 * AllBinary Open License Version 1
 * Copyright (c) 2011 AllBinary
 * 
 * By agreeing to this license you and any business entity you represent are
 * legally bound to the AllBinary Open License Version 1 legal agreement.
 * 
 * You may obtain the AllBinary Open License Version 1 legal agreement from
 * AllBinary or the root directory of AllBinary's AllBinary Platform repository.
 * 
 * Created By: Travis Berthelot
 *  
 */
// Generated Code Do Not Modify
// package org.allbinary.animation
// import org.allbinary.direction.Direction
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.math.Angle
// import org.allbinary.math.AngleFactory
// import org.allbinary.math.AngleInfo

@global export class VectorRotationAnimation extends VectorBaseRotationAnimation {

    jclassName(): string {
        return "org.allbinary.animation.VectorRotationAnimation";
    }
    

    jinit_VectorRotationAnimation_3(currentPoints: StaticArray<StaticArray<StaticArray<i32> | null> | null> | null, basicColor: BasicColor | null, animationBehavior: AnimationBehavior | null): VectorRotationAnimation {
        super.jinit_VectorBaseRotationAnimation_4(AngleInfo.getInstance1((<i16>(((<i32>(AngleFactory.getInstance()!.TOTAL_ANGLE)) / currentPoints!.length)))), currentPoints, basicColor, animationBehavior);
        this.angleInfo!.adjustAngle(this.getFrame()); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    setFrameByDirection(direction: Direction | null): void {
        let angle: Angle | null = this.directionUtil!.getFrameAngle(direction); if (JThrowable.pending !== null) return;
        this.adjustFrameToAngle(angle); if (JThrowable.pending !== null) return;
    }
    

    setFrameToAngle(angle: Angle | null): void {
        this.adjustFrameToAngle(angle); if (JThrowable.pending !== null) return;
    }
    

    setFrame(index: i32): void {
        super.setFrame(index); if (JThrowable.pending !== null) return;
        this.angleInfo!.adjustAngle(this.getFrame()); if (JThrowable.pending !== null) return;
    }
    

    adjustFrame(newAngle: i16): void {
        this.setFrame(this.frameUtil!.getFrameForAngle(newAngle, (<i32>(this.angleInfo!.getAngleIncrementInfo()!.getAngleIncrement())))); if (JThrowable.pending !== null) return;
    }
    

    adjustFrameToAngle(newAngle: Angle | null): void {
        this.adjustFrame(newAngle!.getValue()); if (JThrowable.pending !== null) return;
    }
}

