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
// import org.allbinary.game.input.Input
// import org.allbinary.game.input.InputFactory
// import org.allbinary.input.motion.gesture.MotionGestureInput
// import org.allbinary.input.motion.gesture.TouchMotionGestureFactory
// import org.allbinary.logic.util.event.AllBinaryEventObject
// import org.allbinary.logic.util.event.AllBinaryEventObjectFactoryInterface

@global export class MotionEventFactory extends JObject implements AllBinaryEventObjectFactoryInterface {

    jclassName(): string {
        return "org.allbinary.input.motion.gesture.observer.MotionEventFactory";
    }
    @lazy static index: i32 = 0;
    source: Object | null = null;
    id: i32 = 0;

    jfields_MotionEventFactory(): void {
    
    
    }
    

    jinit_MotionEventFactory_2(source: Object | null, id: i32): MotionEventFactory {
        super.jinit_JObject_0();
        this.jfields_MotionEventFactory();
        this.source = source;
        this.id = id;
        MotionEventFactory.index = TouchMotionGestureFactory.getInstance()!.LAST_MOTION!.getId(); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    getInstance(): AllBinaryEventObject | null {
        let inputFactory: InputFactory | null = InputFactory.getInstance(); if (JThrowable.pending !== null) return null;
        let input: Input | null = inputFactory!.getInstanceById(MotionEventFactory.index++); if (JThrowable.pending !== null) return null;
        if (input == inputFactory!.NO_INPUT) {
            return new MotionGestureEvent().jinit_MotionGestureEvent_3(this.source, this.id, changetype<MotionGestureInput | null>(TouchMotionGestureFactory.getInstance()!.NO_MOTION));
        } else {
            return new MotionGestureEvent().jinit_MotionGestureEvent_3(this.source, this.id, changetype<MotionGestureInput | null>(input));
        } if (JThrowable.pending !== null) return null;
        return null;
    }
}

