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
// package org.allbinary.input.motion
// import org.allbinary.input.motion.button.TouchButtonRecognizer

@global export class OnlyTouchButtonRecognizer extends MotionRecognizer {

    jclassName(): string {
        return "org.allbinary.input.motion.OnlyTouchButtonRecognizer";
    }
    touchButtonRecognizer: TouchButtonRecognizer | null = null;
    touchButtonProcessing: bool = false;

    jfields_OnlyTouchButtonRecognizer(): void {
    
    this.touchButtonProcessing = false;
    }
    

    jinit_OnlyTouchButtonRecognizer_0(): OnlyTouchButtonRecognizer {
        super.jinit_MotionRecognizer_0();
        this.jfields_OnlyTouchButtonRecognizer();
        this.touchButtonRecognizer = new TouchButtonRecognizer().jinit_TouchButtonRecognizer_0(); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    processStartMotionEvent(x: i32, y: i32, deviceId: i32, modifiers: i32): void {
        if (this.touchButtonRecognizer!.pressTouchButtonInput(x, y, deviceId)) {
            this.touchButtonProcessing = true;
        } if (JThrowable.pending !== null) return;
    }
    

    processEndMotionEvent(x: i32, y: i32, deviceId: i32, modifiers: i32): void {
        if (this.touchButtonProcessing) {
            this.touchButtonProcessing = false;
        }
        if (this.touchButtonRecognizer!.releaseTouchButtonInput(x, y, deviceId)) {
            return;
        } if (JThrowable.pending !== null) return;
    }
    

    processDraggedMotionEvent(x: i32, y: i32, deviceId: i32, modifiers: i32): void {
        if (this.touchButtonProcessing) {
            this.touchButtonRecognizer!.pressTouchButtonInput(x, y, deviceId); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

