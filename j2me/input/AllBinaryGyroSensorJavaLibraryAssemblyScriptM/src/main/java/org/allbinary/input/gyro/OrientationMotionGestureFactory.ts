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
// package org.allbinary.input.gyro
// import org.allbinary.game.input.InputFactory
// import org.allbinary.input.motion.gesture.MotionGestureInput
// import org.allbinary.logic.NullUtil

@global export class OrientationMotionGestureFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.input.gyro.OrientationMotionGestureFactory";
    }
    @lazy static jv_instance: Object | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): Object | null {
        if (!OrientationMotionGestureFactory.js_instance) {
            OrientationMotionGestureFactory.js_instance = true;
            OrientationMotionGestureFactory.jv_instance = NullUtil.getInstance()!.NULL_OBJECT;
        }
        return OrientationMotionGestureFactory.jv_instance;
    }
    static set instance(value: Object | null) {
        OrientationMotionGestureFactory.js_instance = true;
        OrientationMotionGestureFactory.jv_instance = value;
    }
    LEFT: MotionGestureInput | null = null;
    RIGHT: MotionGestureInput | null = null;
    UP: MotionGestureInput | null = null;
    DOWN: MotionGestureInput | null = null;
    ROLL_LEFT: MotionGestureInput | null = null;
    ROLL_RIGHT: MotionGestureInput | null = null;

    jfields_OrientationMotionGestureFactory(): void {
    
    
    
    
    
    
    }
    

    static getInstance(): OrientationMotionGestureFactory | null {
        if (OrientationMotionGestureFactory.instance == changetype<Object | null>(NullUtil.getInstance()!.NULL_OBJECT)) {
            OrientationMotionGestureFactory.instance = new OrientationMotionGestureFactory().jinit_OrientationMotionGestureFactory_0(); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return changetype<OrientationMotionGestureFactory | null>(OrientationMotionGestureFactory.instance);
    }
    

    jinit_OrientationMotionGestureFactory_0(): OrientationMotionGestureFactory {
        super.jinit_JObject_0();
        this.jfields_OrientationMotionGestureFactory();
        let MAX: i32 = InputFactory.getInstance()!.MAX; if (JThrowable.pending !== null) return this;
        this.LEFT = new MotionGestureInput().jinit_MotionGestureInput_2(MAX - 20, "Left Orient"); if (JThrowable.pending !== null) return this;
        this.RIGHT = new MotionGestureInput().jinit_MotionGestureInput_2(MAX - 21, "Right Orient"); if (JThrowable.pending !== null) return this;
        this.UP = new MotionGestureInput().jinit_MotionGestureInput_2(MAX - 22, "Up Orient"); if (JThrowable.pending !== null) return this;
        this.DOWN = new MotionGestureInput().jinit_MotionGestureInput_2(MAX - 23, "Down Orient"); if (JThrowable.pending !== null) return this;
        this.ROLL_LEFT = new MotionGestureInput().jinit_MotionGestureInput_2(MAX - 24, "Roll Left"); if (JThrowable.pending !== null) return this;
        this.ROLL_RIGHT = new MotionGestureInput().jinit_MotionGestureInput_2(MAX - 25, "Roll Right"); if (JThrowable.pending !== null) return this;
        return this;
    }
}

