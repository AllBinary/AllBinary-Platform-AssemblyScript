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
// package org.allbinary.game.ag.layer.hud.basic

@global export class HudResources extends JObject {

    jclassName(): string {
        return "org.allbinary.game.ag.layer.hud.basic.HudResources";
    }
    @lazy static jv_instance: HudResources | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): HudResources | null {
        if (!HudResources.js_instance) {
            HudResources.js_instance = true;
            HudResources.jv_instance = new HudResources().jinit_HudResources_0();
        }
        return HudResources.jv_instance;
    }
    static set instance(value: HudResources | null) {
        HudResources.js_instance = true;
        HudResources.jv_instance = value;
    }
    RESOURCE_LIFE: string | null = null;
    RESOURCE_HEALTH: string | null = null;

    jfields_HudResources(): void {
    this.RESOURCE_LIFE = "/hud_life_10_by_10.png";
    this.RESOURCE_HEALTH = "/hud_health_10_by_10.png";
    }
    

    static getInstance(): HudResources | null {
        return HudResources.instance;
    }
    

    jinit_HudResources_0(): HudResources {
        super.jinit_JObject_0();
        this.jfields_HudResources();
        return this;
    }
}

