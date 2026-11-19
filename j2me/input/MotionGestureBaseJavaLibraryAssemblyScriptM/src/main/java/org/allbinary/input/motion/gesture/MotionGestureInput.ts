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
// import org.allbinary.game.input.Input
// import org.allbinary.game.input.InputFactory

@global export class MotionGestureInput extends Input {

    jclassName(): string {
        return "org.allbinary.input.motion.gesture.MotionGestureInput";
    }
    

    jinit_MotionGestureInput_2(id: i32, name: string | null): MotionGestureInput {
        super.jinit_Input_2(id, name);
        let inputFactory: InputFactory | null = InputFactory.getInstance(); if (JThrowable.pending !== null) return this;
        inputFactory!.add(this.getId(), this); if (JThrowable.pending !== null) return this;
        return this;
    }
}

