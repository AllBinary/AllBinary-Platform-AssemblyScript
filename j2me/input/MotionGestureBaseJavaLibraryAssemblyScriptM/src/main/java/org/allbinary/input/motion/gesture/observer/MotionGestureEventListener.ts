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
// package org.allbinary.input.motion.gesture.observer

@global export interface MotionGestureEventListener extends BaseMotionGestureEventListener {
    

    onPressedMotionGestureEvent(ev: MotionGestureEvent | null): void;
    

    onUpMotionGestureEvent(ev: MotionGestureEvent | null): void;
    

    onDownMotionGestureEvent(ev: MotionGestureEvent | null): void;
    

    onLeftMotionGestureEvent(ev: MotionGestureEvent | null): void;
    

    onRightMotionGestureEvent(ev: MotionGestureEvent | null): void;
    

    onDiagonalDownRightMotionGestureEvent(ev: MotionGestureEvent | null): void;
    

    onDiagonalDownLeftMotionGestureEvent(ev: MotionGestureEvent | null): void;
    

    onDiagonalUpRightMotionGestureEvent(ev: MotionGestureEvent | null): void;
    

    onDiagonalUpLeftMotionGestureEvent(ev: MotionGestureEvent | null): void;
    

    released(ev: MotionGestureEvent | null): void;
}

