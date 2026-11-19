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

@global export class TouchMotionGestureFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.input.motion.gesture.TouchMotionGestureFactory";
    }
    @lazy static jv_instance: Object | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): Object | null {
        if (!TouchMotionGestureFactory.js_instance) {
            TouchMotionGestureFactory.js_instance = true;
            TouchMotionGestureFactory.jv_instance = NullUtil.getInstance()!.NULL_OBJECT;
        }
        return TouchMotionGestureFactory.jv_instance;
    }
    static set instance(value: Object | null) {
        TouchMotionGestureFactory.js_instance = true;
        TouchMotionGestureFactory.jv_instance = value;
    }
    LEFT: MotionGestureInput | null = null;
    RIGHT: MotionGestureInput | null = null;
    UP: MotionGestureInput | null = null;
    DOWN: MotionGestureInput | null = null;
    PRESSED: MotionGestureInput | null = null;
    RELEASED: MotionGestureInput | null = null;
    DIAGONAL_DOWN_RIGHT: MotionGestureInput | null = null;
    DIAGONAL_DOWN_LEFT: MotionGestureInput | null = null;
    DIAGONAL_UP_RIGHT: MotionGestureInput | null = null;
    DIAGONAL_UP_LEFT: MotionGestureInput | null = null;
    SCROLL_UP: MotionGestureInput | null = null;
    SCROLL_DOWN: MotionGestureInput | null = null;
    NO_MOTION: MotionGestureInput | null = null;
    LAST_MOTION: MotionGestureInput | null = null;

    jfields_TouchMotionGestureFactory(): void {
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    }
    

    static getInstance(): TouchMotionGestureFactory | null {
        if (TouchMotionGestureFactory.instance == changetype<Object | null>(NullUtil.getInstance()!.NULL_OBJECT)) {
            TouchMotionGestureFactory.instance = new TouchMotionGestureFactory().jinit_TouchMotionGestureFactory_0(); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return changetype<TouchMotionGestureFactory | null>(TouchMotionGestureFactory.instance);
    }
    

    jinit_TouchMotionGestureFactory_0(): TouchMotionGestureFactory {
        super.jinit_JObject_0();
        this.jfields_TouchMotionGestureFactory();
        let MAX: i32 = InputFactory.getInstance()!.MAX; if (JThrowable.pending !== null) return this;
        this.LEFT = new MotionGestureInput().jinit_MotionGestureInput_2(MAX - 3, "Left Touch"); if (JThrowable.pending !== null) return this;
        this.RIGHT = new MotionGestureInput().jinit_MotionGestureInput_2(MAX - 4, "Right Touch"); if (JThrowable.pending !== null) return this;
        this.UP = new MotionGestureInput().jinit_MotionGestureInput_2(MAX - 5, "Up Touch"); if (JThrowable.pending !== null) return this;
        this.DOWN = new MotionGestureInput().jinit_MotionGestureInput_2(MAX - 6, "Down Touch"); if (JThrowable.pending !== null) return this;
        this.PRESSED = new MotionGestureInput().jinit_MotionGestureInput_2(MAX - 7, "Screen Press"); if (JThrowable.pending !== null) return this;
        this.RELEASED = new MotionGestureInput().jinit_MotionGestureInput_2(MAX - 8, "Released"); if (JThrowable.pending !== null) return this;
        this.DIAGONAL_DOWN_RIGHT = new MotionGestureInput().jinit_MotionGestureInput_2(MAX - 9, "Diagonal Dn R"); if (JThrowable.pending !== null) return this;
        this.DIAGONAL_DOWN_LEFT = new MotionGestureInput().jinit_MotionGestureInput_2(MAX - 10, "Diagonal Dn L"); if (JThrowable.pending !== null) return this;
        this.DIAGONAL_UP_RIGHT = new MotionGestureInput().jinit_MotionGestureInput_2(MAX - 11, "Diagonal Up R"); if (JThrowable.pending !== null) return this;
        this.DIAGONAL_UP_LEFT = new MotionGestureInput().jinit_MotionGestureInput_2(MAX - 12, "Diagonal Up L"); if (JThrowable.pending !== null) return this;
        this.SCROLL_UP = new MotionGestureInput().jinit_MotionGestureInput_2(MAX - 13, "Scroll Up"); if (JThrowable.pending !== null) return this;
        this.SCROLL_DOWN = new MotionGestureInput().jinit_MotionGestureInput_2(MAX - 14, "Scroll Down"); if (JThrowable.pending !== null) return this;
        this.NO_MOTION = new MotionGestureInput().jinit_MotionGestureInput_2(MAX - 2, "No Motion"); if (JThrowable.pending !== null) return this;
        this.LAST_MOTION = new MotionGestureInput().jinit_MotionGestureInput_2(MAX - 19, "Last Motion"); if (JThrowable.pending !== null) return this;
        return this;
    }
}

