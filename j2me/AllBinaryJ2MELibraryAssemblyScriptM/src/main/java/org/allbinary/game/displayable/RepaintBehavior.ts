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

@global export class RepaintBehavior extends JObject {

    jclassName(): string {
        return "org.allbinary.game.displayable.RepaintBehavior";
    }
    @lazy static jv_instance: RepaintBehavior | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): RepaintBehavior | null {
        if (!RepaintBehavior.js_instance) {
            RepaintBehavior.js_instance = true;
            RepaintBehavior.jv_instance = new RepaintBehavior().jinit_RepaintBehavior_0();
        }
        return RepaintBehavior.jv_instance;
    }
    static set instance(value: RepaintBehavior | null) {
        RepaintBehavior.js_instance = true;
        RepaintBehavior.jv_instance = value;
    }
    logUtil: LogUtil | null = null;
    NAME: string | null = null;

    jfields_RepaintBehavior(): void {
    this.logUtil = LogUtil.getInstance();
    this.NAME = "RepaintBehavior";
    }

    jinit_RepaintBehavior_0(): RepaintBehavior {
        super.jinit_JObject_0();
        this.jfields_RepaintBehavior();
        return this;
    }
    

    static getInstance(): RepaintBehavior | null {
        return RepaintBehavior.instance;
    }
    

    repaint(canvas: Canvas | null): void {
    }
    

    onChangeRepaint(canvas: Canvas | null): void {
        let features: Features | null = Features.getInstance(); if (JThrowable.pending !== null) return;
        let openGLFeatureFactory: OpenGLFeatureFactory | null = OpenGLFeatureFactory.getInstance(); if (JThrowable.pending !== null) return;
        if (features!.isFeature(openGLFeatureFactory!.OPENGL)) {
            DisplayInfoSingleton.getInstance()!.process(); if (JThrowable.pending !== null) return;
        } else {
            let thread: JThread | null = new JThread().jinit_JThread_2(new RepaintRunnable().jinit_RepaintRunnable_1(canvas), this.NAME); if (JThrowable.pending !== null) return;
            thread!.start(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

