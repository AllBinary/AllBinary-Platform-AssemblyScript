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

@global export class AllMotionRecognizer extends JObject {

    jclassName(): string {
        return "org.allbinary.input.motion.AllMotionRecognizer";
    }
    @lazy static index: i32 = 0;
    id: i32 = 0;

    jfields_AllMotionRecognizer(): void {
    
    }
    

    jinit_AllMotionRecognizer_0(): AllMotionRecognizer {
        super.jinit_JObject_0();
        this.jfields_AllMotionRecognizer();
        this.id = AllMotionRecognizer.index++;
        return this;
    }
    

    processStartMotionEvent(x: i32, y: i32, deviceId: i32, modifiers: i32): void {
    }
    

    processEndMotionEvent(x: i32, y: i32, deviceId: i32, modifiers: i32): void {
    }
    

    processDraggedMotionEvent(x: i32, y: i32, deviceId: i32, modifiers: i32): void {
    }
    

    processMovedMotionEvent(x: i32, y: i32, deviceId: i32, modifiers: i32): void {
    }
    

    processScrolledMotionEvent(x: i32, y: i32, deviceId: i32, modifiers: i32): void {
    }
    

    getId(): i32 {
        return this.id;
    }
}

