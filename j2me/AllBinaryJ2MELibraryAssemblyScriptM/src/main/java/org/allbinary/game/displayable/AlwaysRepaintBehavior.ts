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
// package org.allbinary.game.displayable
// import javax.microedition.lcdui.Canvas
// import org.allbinary.game.configuration.feature.Features
// import org.allbinary.graphics.displayable.DisplayInfoSingleton
// import org.allbinary.graphics.opengles.OpenGLFeatureFactory
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.string.CommonStrings
// import org.allbinary.thread.NullRunnable

@global export class AlwaysRepaintBehavior extends RepaintBehavior {

    jclassName(): string {
        return "org.allbinary.game.displayable.AlwaysRepaintBehavior";
    }
    @lazy static jv_instanceC: AlwaysRepaintBehavior | null = null;
    @lazy static js_instanceC: bool = false;
    static get instanceC(): AlwaysRepaintBehavior | null {
        if (!AlwaysRepaintBehavior.js_instanceC) {
            AlwaysRepaintBehavior.js_instanceC = true;
            AlwaysRepaintBehavior.jv_instanceC = new AlwaysRepaintBehavior().jinit_AlwaysRepaintBehavior_0();
        }
        return AlwaysRepaintBehavior.jv_instanceC;
    }
    static set instanceC(value: AlwaysRepaintBehavior | null) {
        AlwaysRepaintBehavior.js_instanceC = true;
        AlwaysRepaintBehavior.jv_instanceC = value;
    }
    NAME: string | null = null;

    jfields_AlwaysRepaintBehavior(): void {
    this.NAME = "AlwaysRepaintBehavior";
    }

    jinit_AlwaysRepaintBehavior_0(): AlwaysRepaintBehavior {
        super.jinit_RepaintBehavior_0();
        this.jfields_AlwaysRepaintBehavior();
        return this;
    }
    

    static getInstance(): AlwaysRepaintBehavior | null {
        return AlwaysRepaintBehavior.instanceC;
    }
    

    repaint(canvas: Canvas | null): void {
        let features: Features | null = Features.getInstance(); if (JThrowable.pending !== null) return;
        let openGLFeatureFactory: OpenGLFeatureFactory | null = OpenGLFeatureFactory.getInstance(); if (JThrowable.pending !== null) return;
        if (features!.isFeature(openGLFeatureFactory!.OPENGL)) {
            DisplayInfoSingleton.getInstance()!.process(); if (JThrowable.pending !== null) return;
        } else {
            let thread: JThread | null = new JThread().jinit_JThread_2(new RepaintRunnable().jinit_RepaintRunnable_1(canvas), this.NAME); if (JThrowable.pending !== null) return;
            thread!.start(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    onChangeRepaint(canvas: Canvas | null): void {
    }
}

