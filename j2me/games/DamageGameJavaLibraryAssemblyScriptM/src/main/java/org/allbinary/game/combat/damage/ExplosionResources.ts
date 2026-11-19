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
// package org.allbinary.game.combat.damage

@global export class ExplosionResources extends JObject {

    jclassName(): string {
        return "org.allbinary.game.combat.damage.ExplosionResources";
    }
    @lazy static jv_instance: ExplosionResources | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): ExplosionResources | null {
        if (!ExplosionResources.js_instance) {
            ExplosionResources.js_instance = true;
            ExplosionResources.jv_instance = new ExplosionResources().jinit_ExplosionResources_0();
        }
        return ExplosionResources.jv_instance;
    }
    static set instance(value: ExplosionResources | null) {
        ExplosionResources.js_instance = true;
        ExplosionResources.jv_instance = value;
    }
    EXPLOSION_90_RESOURCE: string | null = null;
    EXPLOSION_60_RESOURCE: string | null = null;
    HALF_EXPLOSION_RESOURCE: string | null = null;
    THIRD_EXPLOSION_RESOURCE: string | null = null;

    jfields_ExplosionResources(): void {
    this.EXPLOSION_90_RESOURCE = "/explosion_sprite_90_by_90.png";
    this.EXPLOSION_60_RESOURCE = "/explosion_sprite_60_by_60.png";
    this.HALF_EXPLOSION_RESOURCE = "/explosion_sprite_30_by_30.png";
    this.THIRD_EXPLOSION_RESOURCE = "/explosion_sprite_15_by_15.png";
    }
    

    static getInstance(): ExplosionResources | null {
        return ExplosionResources.instance;
    }
    

    jinit_ExplosionResources_0(): ExplosionResources {
        super.jinit_JObject_0();
        this.jfields_ExplosionResources();
        return this;
    }
}

