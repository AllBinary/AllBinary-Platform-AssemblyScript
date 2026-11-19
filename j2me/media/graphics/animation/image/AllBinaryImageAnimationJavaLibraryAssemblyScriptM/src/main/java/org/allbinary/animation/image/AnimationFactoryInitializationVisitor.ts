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
// package org.allbinary.animation.image
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.math.PositionStrings
// import org.allbinary.string.CommonLabels
// import org.allbinary.string.CommonSeps

@global export class AnimationFactoryInitializationVisitor extends JObject {

    jclassName(): string {
        return "org.allbinary.animation.image.AnimationFactoryInitializationVisitor";
    }
    width: i32 = 0;
    height: i32 = 0;
    dx: i32 = 0;
    dy: i32 = 0;
    originalDx: i32 = 0;
    originalDy: i32 = 0;

    jfields_AnimationFactoryInitializationVisitor(): void {
    this.width = 0;
    this.height = 0;
    this.dx = 0;
    this.dy = 0;
    this.originalDx = 0;
    this.originalDy = 0;
    }

    jinit_AnimationFactoryInitializationVisitor_0(): AnimationFactoryInitializationVisitor {
        super.jinit_JObject_0();
        this.jfields_AnimationFactoryInitializationVisitor();
        return this;
    }
    

    visit(): void {
    }
    

    toString(): string | null {
        let commonSeps: CommonSeps | null = CommonSeps.getInstance(); if (JThrowable.pending !== null) return null;
        let commonLabels: CommonLabels | null = CommonLabels.getInstance(); if (JThrowable.pending !== null) return null;
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(PositionStrings.getInstance()!.DX_LABEL)!.appendfloat((<f32>(this.dx))); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(PositionStrings.getInstance()!.DY_LABEL)!.appendfloat((<f32>(this.dy))); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(commonLabels!.WIDTH_LABEL); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint(this.width); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(commonSeps!.SPACE); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(commonLabels!.HEIGHT_LABEL); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint(this.height); if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
}

