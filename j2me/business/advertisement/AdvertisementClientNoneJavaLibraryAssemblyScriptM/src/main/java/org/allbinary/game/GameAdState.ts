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
// package org.allbinary.game
// import org.allbinary.business.advertisement.GameAdStateBase
// import org.allbinary.business.advertisement.AdConfiguration
// import org.allbinary.input.event.VirtualKeyboardEvent
// import org.allbinary.input.event.VirtualKeyboardEventHandler
// import org.allbinary.input.event.VirtualKeyboardEventListenerInterface
// import org.allbinary.logic.util.event.AllBinaryEventObject

@global export class GameAdState extends GameAdStateBase implements VirtualKeyboardEventListenerInterface {

    jclassName(): string {
        return "org.allbinary.game.GameAdState";
    }
    

    jinit_GameAdState_1(adConfiguration: AdConfiguration | null): GameAdState {
        super.jinit_GameAdStateBase_1(adConfiguration);
        VirtualKeyboardEventHandler.getInstance()!.addListenerInterface(this); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    onVirtualKeyboardEvent(virtualKeyboardEvent: VirtualKeyboardEvent | null): void {
    }
    

    onEvent(eventObject: AllBinaryEventObject | null): void {
        super.onEvent(eventObject); if (JThrowable.pending !== null) return;
    }
}

