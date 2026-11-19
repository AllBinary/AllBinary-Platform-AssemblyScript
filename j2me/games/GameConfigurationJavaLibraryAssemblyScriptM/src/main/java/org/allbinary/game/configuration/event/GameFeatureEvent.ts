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
// package org.allbinary.game.configuration.event
// import org.allbinary.logic.util.event.AllBinaryEventObject

@global export class GameFeatureEvent extends AllBinaryEventObject {

    jclassName(): string {
        return "org.allbinary.game.configuration.event.GameFeatureEvent";
    }
    whatChanged: string | null = null;

    jfields_GameFeatureEvent(): void {
    
    }
    

    jinit_GameFeatureEvent_2(anyType: Object | null, whatChanged: string | null): GameFeatureEvent {
        super.jinit_AllBinaryEventObject_1(anyType);
        this.jfields_GameFeatureEvent();
        this.whatChanged = whatChanged;
        return this;
    }
    

    getWhatChanged(): string | null {
        return this.whatChanged;
    }
    

    getGameOption(): Object | null {
        return this.getSource();
    }
}

