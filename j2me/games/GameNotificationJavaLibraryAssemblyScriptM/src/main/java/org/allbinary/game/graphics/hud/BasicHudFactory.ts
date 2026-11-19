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

@global export class BasicHudFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.graphics.hud.BasicHudFactory";
    }
    @lazy static jv_instance: BasicHudFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): BasicHudFactory | null {
        if (!BasicHudFactory.js_instance) {
            BasicHudFactory.js_instance = true;
            BasicHudFactory.jv_instance = new BasicHudFactory().jinit_BasicHudFactory_0();
        }
        return BasicHudFactory.jv_instance;
    }
    static set instance(value: BasicHudFactory | null) {
        BasicHudFactory.js_instance = true;
        BasicHudFactory.jv_instance = value;
    }
    DIRECTION_EXCEPTION: string | null = null;
    VERTICAL: i32 = 0;
    HORIZONTAL: i32 = 0;
    BOTTOMLEFT: i32 = 0;
    BOTTOMRIGHT: i32 = 0;
    TOPLEFT: i32 = 0;
    TOPRIGHT: i32 = 0;
    BOTTOMCENTER: i32 = 0;
    TOPCENTER: i32 = 0;
    ABSOLUTE: i32 = 0;

    jfields_BasicHudFactory(): void {
    this.DIRECTION_EXCEPTION = "Only Horizontal Direction is Allowed Currently";
    this.VERTICAL = 0;
    this.HORIZONTAL = 1;
    this.BOTTOMLEFT = 0;
    this.BOTTOMRIGHT = 1;
    this.TOPLEFT = 2;
    this.TOPRIGHT = 3;
    this.BOTTOMCENTER = 4;
    this.TOPCENTER = 5;
    this.ABSOLUTE = 6;
    }
    

    static getInstance(): BasicHudFactory | null {
        return BasicHudFactory.instance;
    }
    

    jinit_BasicHudFactory_0(): BasicHudFactory {
        super.jinit_JObject_0();
        this.jfields_BasicHudFactory();
        return this;
    }
}

