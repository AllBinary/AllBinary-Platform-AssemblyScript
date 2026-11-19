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
// import org.allbinary.game.resource.ResourceLoadingLevel
// import org.allbinary.game.resource.ResourceLoadingLevelFactory
// import org.allbinary.logic.util.event.AllBinaryEventObject

@global export class GameInitializedEvent extends AllBinaryEventObject {

    jclassName(): string {
        return "org.allbinary.game.configuration.event.GameInitializedEvent";
    }
    resourceLoadingLevel: ResourceLoadingLevel | null = null;
    level: i32 = 0;

    jfields_GameInitializedEvent(): void {
    this.resourceLoadingLevel = ResourceLoadingLevelFactory.getInstance()!.LEVEL;
    this.level = 0;
    }
    

    jinit_GameInitializedEvent_1(anyType: Object | null): GameInitializedEvent {
        super.jinit_AllBinaryEventObject_1(anyType);
        this.jfields_GameInitializedEvent();
        return this;
    }
    

    setLevel(level: i32): void {
        this.level = level;
        this.resourceLoadingLevel = ResourceLoadingLevelFactory.getInstance()!.LEVEL; if (JThrowable.pending !== null) return;
    }
    

    getLevel(): i32 {
        return this.level;
    }
    

    setResourceLoadingLevel(resourceLoadingLevel: ResourceLoadingLevel | null): void {
        this.resourceLoadingLevel = resourceLoadingLevel;
        this.level = this.resourceLoadingLevel!.getLevel(); if (JThrowable.pending !== null) return;
    }
    

    getResourceLoadingLevel(): ResourceLoadingLevel | null {
        return this.resourceLoadingLevel;
    }
}

