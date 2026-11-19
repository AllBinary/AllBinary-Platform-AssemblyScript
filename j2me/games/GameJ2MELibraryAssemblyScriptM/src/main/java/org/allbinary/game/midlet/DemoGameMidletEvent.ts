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
// package org.allbinary.game.midlet
// import org.allbinary.logic.util.event.AllBinaryEventObject

@global export class DemoGameMidletEvent extends AllBinaryEventObject {

    jclassName(): string {
        return "org.allbinary.game.midlet.DemoGameMidletEvent";
    }
    demoGameMidletState: DemoGameMidletState | null = null;

    jfields_DemoGameMidletEvent(): void {
    
    }
    

    jinit_DemoGameMidletEvent_2(anyType: Object | null, demoGameMidletState: DemoGameMidletState | null): DemoGameMidletEvent {
        super.jinit_AllBinaryEventObject_1(anyType);
        this.jfields_DemoGameMidletEvent();
        this.demoGameMidletState = demoGameMidletState;
        return this;
    }
    

    init(anyType: Object | null): void {
        this.setSource(anyType); if (JThrowable.pending !== null) return;
    }
    

    setDemoGameMidletState(demoGameMidletState: DemoGameMidletState | null): void {
        this.demoGameMidletState = demoGameMidletState;
    }
    

    getDemoGameMidletState(): DemoGameMidletState | null {
        return this.demoGameMidletState;
    }
}

