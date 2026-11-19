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
// import org.allbinary.game.input.CompleteMotionGestureInputEvent
// import org.allbinary.util.BasicArrayList

@global export class MotionGestureToMotionGestureActionAssociation extends JObject {

    jclassName(): string {
        return "org.allbinary.input.motion.gesture.MotionGestureToMotionGestureActionAssociation";
    }
    list: BasicArrayList | null = null;
    motionGestureAction: CompleteMotionGestureInputEvent | null = null;

    jfields_MotionGestureToMotionGestureActionAssociation(): void {
    
    
    }
    

    jinit_MotionGestureToMotionGestureActionAssociation_2(list: BasicArrayList | null, commandAction: CompleteMotionGestureInputEvent | null): MotionGestureToMotionGestureActionAssociation {
        super.jinit_JObject_0();
        this.jfields_MotionGestureToMotionGestureActionAssociation();
        this.list = list;
        this.motionGestureAction = commandAction;
        return this;
    }
    

    getMotionGesture(): BasicArrayList | null {
        return this.list;
    }
    

    setMotionGestures(list: BasicArrayList | null): void {
        this.list = list;
    }
    

    getCommandAction(): CompleteMotionGestureInputEvent | null {
        return this.motionGestureAction;
    }
    

    setMotionGestureAction(commandAction: CompleteMotionGestureInputEvent | null): void {
        this.motionGestureAction = commandAction;
    }
    

    isMotionGestureArrayEquals(aList: BasicArrayList | null): bool {
        let size: i32 = aList!.size(); if (JThrowable.pending !== null) return false;
        if (this.list!.size() != size) {
            return false;
        } if (JThrowable.pending !== null) return false;
        for (let i: i32 = size - 1; i >= 0; i--) {
            if (aList!.objectArray![i] != this.list!.objectArray![i]) {
                return false;
            }
        }
        return true;
    }
}

