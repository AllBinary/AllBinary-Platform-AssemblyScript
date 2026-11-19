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
// package org.allbinary.input.motion.gesture
// import org.allbinary.game.input.InputFactory
// import org.allbinary.logic.NullUtil

@global export class TrackballMotionGestureFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.input.motion.gesture.TrackballMotionGestureFactory";
    }
    @lazy static jv_instance: Object | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): Object | null {
        if (!TrackballMotionGestureFactory.js_instance) {
            TrackballMotionGestureFactory.js_instance = true;
            TrackballMotionGestureFactory.jv_instance = NullUtil.getInstance()!.NULL_OBJECT;
        }
        return TrackballMotionGestureFactory.jv_instance;
    }
    static set instance(value: Object | null) {
        TrackballMotionGestureFactory.js_instance = true;
        TrackballMotionGestureFactory.jv_instance = value;
    }
    LEFT: MotionGestureInput | null = null;
    RIGHT: MotionGestureInput | null = null;
    UP: MotionGestureInput | null = null;
    DOWN: MotionGestureInput | null = null;

    jfields_TrackballMotionGestureFactory(): void {
    
    
    
    
    }
    

    static getInstance(): TrackballMotionGestureFactory | null {
        if (TrackballMotionGestureFactory.instance == changetype<Object | null>(NullUtil.getInstance()!.NULL_OBJECT)) {
            TrackballMotionGestureFactory.instance = new TrackballMotionGestureFactory().jinit_TrackballMotionGestureFactory_0(); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return changetype<TrackballMotionGestureFactory | null>(TrackballMotionGestureFactory.instance);
    }
    

    jinit_TrackballMotionGestureFactory_0(): TrackballMotionGestureFactory {
        super.jinit_JObject_0();
        this.jfields_TrackballMotionGestureFactory();
        let MAX: i32 = InputFactory.getInstance()!.MAX; if (JThrowable.pending !== null) return this;
        this.LEFT = new MotionGestureInput().jinit_MotionGestureInput_2(MAX - 26, "L Trackball"); if (JThrowable.pending !== null) return this;
        this.RIGHT = new MotionGestureInput().jinit_MotionGestureInput_2(MAX - 27, "R Trackball"); if (JThrowable.pending !== null) return this;
        this.UP = new MotionGestureInput().jinit_MotionGestureInput_2(MAX - 28, "Up Trackball"); if (JThrowable.pending !== null) return this;
        this.DOWN = new MotionGestureInput().jinit_MotionGestureInput_2(MAX - 29, "D Trackball"); if (JThrowable.pending !== null) return this;
        return this;
    }
}

