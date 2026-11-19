/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2022 AllBinary 
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
// import org.allbinary.graphics.color.BasicColor

@global export class CaptionAnimationHelperBase extends Animation {

    jclassName(): string {
        return "org.allbinary.animation.caption.CaptionAnimationHelperBase";
    }
    @lazy static jv_INSTANCE: CaptionAnimationHelperBase | null = null;
    @lazy static js_INSTANCE: bool = false;
    static get INSTANCE(): CaptionAnimationHelperBase | null {
        if (!CaptionAnimationHelperBase.js_INSTANCE) {
            CaptionAnimationHelperBase.js_INSTANCE = true;
            CaptionAnimationHelperBase.jv_INSTANCE = new CaptionAnimationHelperBase().jinit_CaptionAnimationHelperBase_0();
        }
        return CaptionAnimationHelperBase.jv_INSTANCE;
    }
    static set INSTANCE(value: CaptionAnimationHelperBase | null) {
        CaptionAnimationHelperBase.js_INSTANCE = true;
        CaptionAnimationHelperBase.jv_INSTANCE = value;
    }

    jinit_CaptionAnimationHelperBase_0(): CaptionAnimationHelperBase {
        super.jinit_Animation_0();
        return this;
    }
    

    isShowing(): bool {
        return false;
    }
    

    tick(): void {
    }
    

    update(message: string | null, basicColor: BasicColor | null): void {
    }
    

    paintXY(graphics: Graphics | null, x: i32, y: i32): void {
    }
}

