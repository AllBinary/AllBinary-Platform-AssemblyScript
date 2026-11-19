/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2022 AllBinary 
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
// package org.allbinary

@global export class ThreedResources extends JObject {

    jclassName(): string {
        return "org.allbinary.ThreedResources";
    }
    @lazy static jv_threedResources: ThreedResources | null = null;
    @lazy static js_threedResources: bool = false;
    static get threedResources(): ThreedResources | null {
        if (!ThreedResources.js_threedResources) {
            ThreedResources.js_threedResources = true;
            ThreedResources.jv_threedResources = new ThreedResources().jinit_ThreedResources_0();
        }
        return ThreedResources.jv_threedResources;
    }
    static set threedResources(value: ThreedResources | null) {
        ThreedResources.js_threedResources = true;
        ThreedResources.jv_threedResources = value;
    }

    jinit_ThreedResources_0(): ThreedResources {
        super.jinit_JObject_0();
        return this;
    }
    

    static getThreedResources(): ThreedResources | null {
        return ThreedResources.threedResources;
    }
    

    add(): void {
    }
}

