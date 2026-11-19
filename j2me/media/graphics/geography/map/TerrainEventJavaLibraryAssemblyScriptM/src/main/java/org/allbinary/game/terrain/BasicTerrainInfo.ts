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
// import org.allbinary.math.Angle
// import org.allbinary.math.AngleFactory

@global export class BasicTerrainInfo extends JObject {

    jclassName(): string {
        return "org.allbinary.game.terrain.BasicTerrainInfo";
    }
    @lazy static jv_NULL_BASIC_TERRAIN_INFO: BasicTerrainInfo | null = null;
    @lazy static js_NULL_BASIC_TERRAIN_INFO: bool = false;
    static get NULL_BASIC_TERRAIN_INFO(): BasicTerrainInfo | null {
        if (!BasicTerrainInfo.js_NULL_BASIC_TERRAIN_INFO) {
            BasicTerrainInfo.js_NULL_BASIC_TERRAIN_INFO = true;
            BasicTerrainInfo.jv_NULL_BASIC_TERRAIN_INFO = new BasicTerrainInfo().jinit_BasicTerrainInfo_1(AngleFactory.getInstance()!.NOT_ANGLE);
        }
        return BasicTerrainInfo.jv_NULL_BASIC_TERRAIN_INFO;
    }
    static set NULL_BASIC_TERRAIN_INFO(value: BasicTerrainInfo | null) {
        BasicTerrainInfo.js_NULL_BASIC_TERRAIN_INFO = true;
        BasicTerrainInfo.jv_NULL_BASIC_TERRAIN_INFO = value;
    }
    angle: Angle | null = null;

    jfields_BasicTerrainInfo(): void {
    
    }
    

    jinit_BasicTerrainInfo_1(angle: Angle | null): BasicTerrainInfo {
        super.jinit_JObject_0();
        this.jfields_BasicTerrainInfo();
        this.angle = angle;
        return this;
    }
    

    getAngle(): Angle | null {
        return this.angle;
    }
    

    setAngle(angle: Angle | null): void {
        this.angle = angle;
    }
}

