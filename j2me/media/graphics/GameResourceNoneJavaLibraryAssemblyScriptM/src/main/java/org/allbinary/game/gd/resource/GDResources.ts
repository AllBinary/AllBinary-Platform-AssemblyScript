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
// package org.allbinary.game.gd.resource

@global export class GDResources extends JObject {

    jclassName(): string {
        return "org.allbinary.game.gd.resource.GDResources";
    }
    @lazy static jv_instance: GDResources | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): GDResources | null {
        if (!GDResources.js_instance) {
            GDResources.js_instance = true;
            GDResources.jv_instance = new GDResources().jinit_GDResources_0();
        }
        return GDResources.jv_instance;
    }
    static set instance(value: GDResources | null) {
        GDResources.js_instance = true;
        GDResources.jv_instance = value;
    }
    resourceStringArray: StaticArray<string | null> | null = null;
    currentLayoutRequiredTotal: i32 = 0;

    jfields_GDResources(): void {
    this.resourceStringArray = StaticArray.fromArray<string | null>([]);
    this.currentLayoutRequiredTotal = 0;
    }

    jinit_GDResources_0(): GDResources {
        super.jinit_JObject_0();
        this.jfields_GDResources();
        return this;
    }
    

    static getInstance(): GDResources | null {
        return GDResources.instance;
    }
}

