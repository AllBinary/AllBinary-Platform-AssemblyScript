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
// import javax.microedition.lcdui.Graphics
// import org.allbinary.math.AngleFactory
// import org.allbinary.math.AngleInfo
// import org.allbinary.util.CircularIndexUtil

@global export class NullRotationAnimation2 extends NullRotationAnimation {

    jclassName(): string {
        return "org.allbinary.animation.NullRotationAnimation2";
    }
    

    jinit_NullRotationAnimation2_0(): NullRotationAnimation2 {
        super.jinit_NullRotationAnimation_3(AngleInfo.getInstance1(AngleFactory.getInstance()!.QUARTER_TOTAL_ANGLE), CircularIndexUtil.createInstance(4), new IndexedAnimationBehavior().jinit_IndexedAnimationBehavior_2(1, 250));
        return this;
    }
    

    paintXY(graphics: Graphics | null, x: i32, y: i32): void {
    }
}

