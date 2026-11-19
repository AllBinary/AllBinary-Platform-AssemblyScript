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
// package org.allbinary.game.terrain
// import org.allbinary.logic.NullUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.util.event.AllBinaryEventObject

@global export class TerrainEvent extends AllBinaryEventObject {

    jclassName(): string {
        return "org.allbinary.game.terrain.TerrainEvent";
    }
    basicTerrainInfo: BasicTerrainInfo | null = null;

    jfields_TerrainEvent(): void {
    this.basicTerrainInfo = BasicTerrainInfo.NULL_BASIC_TERRAIN_INFO;
    }
    

    jinit_TerrainEvent_1(basicTerrainInfo: Object | null): TerrainEvent {
        super.jinit_AllBinaryEventObject_1(basicTerrainInfo);
        this.jfields_TerrainEvent();
        this.setBasicTerrainInfo(this.basicTerrainInfo); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    toString(): string | null {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        stringBuffer!.append("TerrainEvent: \n"); if (JThrowable.pending !== null) return null;
        stringBuffer!.append("LayerInterface: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(JObject.jtoString(this.basicTerrainInfo)); if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
    

    getBasicTerrainInfo(): BasicTerrainInfo | null {
        return this.basicTerrainInfo;
    }
    

    setBasicTerrainInfo(basicTerrainInfo: BasicTerrainInfo | null): void {
        this.basicTerrainInfo = basicTerrainInfo;
    }
    

    setBasicTerrainInfoForCircularStaticPool(basicTerrainInfo: BasicTerrainInfo | null): void {
        this.basicTerrainInfo = basicTerrainInfo;
    }
}

