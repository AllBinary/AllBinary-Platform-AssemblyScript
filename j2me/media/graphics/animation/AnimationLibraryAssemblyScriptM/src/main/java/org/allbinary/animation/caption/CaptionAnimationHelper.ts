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
// package org.allbinary.animation.caption
// import javax.microedition.lcdui.Graphics
// import org.allbinary.animation.Animation
// import org.allbinary.animation.AnimationBehavior
// import org.allbinary.animation.NullAnimationFactory
// import org.allbinary.animation.text.TextAnimation
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.time.GameTickTimeDelayHelperFactory
// import org.allbinary.time.TimeDelayHelper

@global export class CaptionAnimationHelper extends CaptionAnimationHelperBase {

    jclassName(): string {
        return "org.allbinary.animation.caption.CaptionAnimationHelper";
    }
    timeHelper: TimeDelayHelper | null = null;
    textAnimation: TextAnimation | null = null;
    captionAnimation: Animation | null = null;
    animation: Animation | null = null;

    jfields_CaptionAnimationHelper(): void {
    this.timeHelper = new TimeDelayHelper().jinit_TimeDelayHelper_1(620);
    this.textAnimation = new TextAnimation().jinit_TextAnimation_2(StringUtil.getInstance()!.EMPTY_STRING, AnimationBehavior.getInstance());
    
    this.animation = NullAnimationFactory.getFactoryInstance()!.getInstance1(0);
    }
    

    jinit_CaptionAnimationHelper_5(captionAnimation: Animation | null, captionDx: i32, captionDy: i32, dx: i32, dy: i32): CaptionAnimationHelper {
        super.jinit_CaptionAnimationHelperBase_0();
        this.jfields_CaptionAnimationHelper();
        this.captionAnimation = new CaptionAnimation().jinit_CaptionAnimation_6(captionAnimation, this.textAnimation, captionDx, captionDy, dx, dy); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    isShowing(): bool {
        if (this.animation == this.captionAnimation) {
            return true;
        } else {
            return false;
        }
        return false;
    }
    

    tick(): void {
        if (this.timeHelper!.isTime(GameTickTimeDelayHelperFactory.getInstance()!.startTime)) {
            this.animation = NullAnimationFactory.getFactoryInstance()!.getInstance1(0); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    update(message: string | null, basicColor: BasicColor | null): void {
        this.textAnimation!.setBasicColorP(basicColor); if (JThrowable.pending !== null) return;
        this.textAnimation!.setText(message); if (JThrowable.pending !== null) return;
        this.animation = this.captionAnimation;
        this.timeHelper!.setStartTimeTNT(); if (JThrowable.pending !== null) return;
    }
    

    paintXY(graphics: Graphics | null, x: i32, y: i32): void {
        this.animation!.paintXY(graphics, x, y); if (JThrowable.pending !== null) return;
    }
}

