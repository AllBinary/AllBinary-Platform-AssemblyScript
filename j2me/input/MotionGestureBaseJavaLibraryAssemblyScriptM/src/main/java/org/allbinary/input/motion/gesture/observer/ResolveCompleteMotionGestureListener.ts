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
// import org.allbinary.game.input.CompleteMotionGestureInputEventHandler
// import org.allbinary.game.input.motion.action.GameKeyCompleteMotionGestureInputEvent
// import org.allbinary.game.input.motion.action.GameKeyFromMotionGestureEventListener
// import org.allbinary.input.motion.gesture.MotionGestureToMotionGestureActionAssociation
// import org.allbinary.input.motion.gesture.configuration.MotionGestureConfiguration
// import org.allbinary.input.motion.gesture.configuration.MotionGestureConfigurationFactory
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.string.CommonStrings
// import org.allbinary.util.BasicArrayList

@global export class ResolveCompleteMotionGestureListener extends JObject implements CompleteMotionGestureListenerInterface {

    jclassName(): string {
        return "org.allbinary.input.motion.gesture.observer.ResolveCompleteMotionGestureListener";
    }
    logUtil: LogUtil | null = null;

    jfields_ResolveCompleteMotionGestureListener(): void {
    this.logUtil = LogUtil.getInstance();
    }
    

    jinit_ResolveCompleteMotionGestureListener_0(): ResolveCompleteMotionGestureListener {
        super.jinit_JObject_0();
        this.jfields_ResolveCompleteMotionGestureListener();
        let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return this;
        this.logUtil!.putF("MotionGesture to CompleteMotionGesture Reciever", this, commonStrings!.CONSTRUCTOR); if (JThrowable.pending !== null) return this;
        CompleteMotionGestureInputEventHandler.getInstance()!.addListener(new GameKeyFromMotionGestureEventListener().jinit_GameKeyFromMotionGestureEventListener_0()); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    onMotionGestureCompleted(list: BasicArrayList | null): void {
        let configuration: MotionGestureConfiguration | null = MotionGestureConfigurationFactory.getInstance(); if (JThrowable.pending !== null) return;
        let commandActionsList: BasicArrayList | null = configuration!.getAssociateCommandActionsList(); if (JThrowable.pending !== null) return;
        let size: i32 = commandActionsList!.size(); if (JThrowable.pending !== null) return;
        for (let index: i32 = size - 1; index >= 0; index--) {
            let association: MotionGestureToMotionGestureActionAssociation | null = changetype<MotionGestureToMotionGestureActionAssociation | null>(commandActionsList!.objectArray![index]);
            if (association!.isMotionGestureArrayEquals(list) == true) {
                let completeMotionGestureInputEvent: GameKeyCompleteMotionGestureInputEvent | null = changetype<GameKeyCompleteMotionGestureInputEvent | null>(association!.getCommandAction()); if (JThrowable.pending !== null) return;
                CompleteMotionGestureInputEventHandler.getInstance()!.fireEvent(completeMotionGestureInputEvent); if (JThrowable.pending !== null) return;
                break;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

