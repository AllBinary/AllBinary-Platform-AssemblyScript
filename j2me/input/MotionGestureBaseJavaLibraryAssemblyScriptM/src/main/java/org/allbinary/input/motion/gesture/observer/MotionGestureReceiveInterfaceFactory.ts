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
// import org.allbinary.input.motion.gesture.configuration.MotionGestureConfiguration
// import org.allbinary.input.motion.gesture.configuration.MotionGestureConfigurationFactory

@global export class MotionGestureReceiveInterfaceFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.input.motion.gesture.observer.MotionGestureReceiveInterfaceFactory";
    }

    jinit_MotionGestureReceiveInterfaceFactory_0(): MotionGestureReceiveInterfaceFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): CompleteMotionGestureListenerInterface | null {
        let configuration: MotionGestureConfiguration | null = MotionGestureConfigurationFactory.getInstance(); if (JThrowable.pending !== null) return null;
        if (!configuration!.isExecutingActionsAllowed()) {
            return new NullCompleteMotionGestureReceiver().jinit_NullCompleteMotionGestureReceiver_0();
        } else {
            return new ResolveCompleteMotionGestureListener().jinit_ResolveCompleteMotionGestureListener_0();
        } if (JThrowable.pending !== null) return null;
        return null;
    }
}

