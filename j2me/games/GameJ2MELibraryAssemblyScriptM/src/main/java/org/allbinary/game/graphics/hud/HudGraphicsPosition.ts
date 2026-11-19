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
// package org.allbinary.game.graphics.hud
// import org.allbinary.graphics.GPoint
// import org.allbinary.graphics.PointFactory

@global export class HudGraphicsPosition extends JObject {

    jclassName(): string {
        return "org.allbinary.game.graphics.hud.HudGraphicsPosition";
    }
    @lazy static jv_NULL_HUD_GRAPHICS_POSITION: HudGraphicsPosition | null = null;
    @lazy static js_NULL_HUD_GRAPHICS_POSITION: bool = false;
    static get NULL_HUD_GRAPHICS_POSITION(): HudGraphicsPosition | null {
        if (!HudGraphicsPosition.js_NULL_HUD_GRAPHICS_POSITION) {
            HudGraphicsPosition.js_NULL_HUD_GRAPHICS_POSITION = true;
            HudGraphicsPosition.jv_NULL_HUD_GRAPHICS_POSITION = new HudGraphicsPosition().jinit_HudGraphicsPosition_2(PointFactory.getInstance()!.ZERO_ZERO, 9);
        }
        return HudGraphicsPosition.jv_NULL_HUD_GRAPHICS_POSITION;
    }
    static set NULL_HUD_GRAPHICS_POSITION(value: HudGraphicsPosition | null) {
        HudGraphicsPosition.js_NULL_HUD_GRAPHICS_POSITION = true;
        HudGraphicsPosition.jv_NULL_HUD_GRAPHICS_POSITION = value;
    }
    anchor: i32 = 0;
    point: GPoint | null = null;

    jfields_HudGraphicsPosition(): void {
    this.anchor = 0;
    this.point = PointFactory.getInstance()!.ZERO_ZERO;
    }
    

    jinit_HudGraphicsPosition_2(point: GPoint | null, anchor: i32): HudGraphicsPosition {
        super.jinit_JObject_0();
        this.jfields_HudGraphicsPosition();
        this.setAnchor(anchor); if (JThrowable.pending !== null) return this;
        this.setPoint(point); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    getAnchor(): i32 {
        return this.anchor;
    }
    

    setAnchor(anchor: i32): void {
        this.anchor = anchor;
    }
    

    getPoint(): GPoint | null {
        return this.point;
    }
    

    setPoint(point: GPoint | null): void {
        this.point = point;
    }
}

