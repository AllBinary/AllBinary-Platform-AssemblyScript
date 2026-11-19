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
// package org.allbinary.logic.system.security.licensing

@global export class LockedResources extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.system.security.licensing.LockedResources";
    }
    @lazy static jv_instance: LockedResources | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): LockedResources | null {
        if (!LockedResources.js_instance) {
            LockedResources.js_instance = true;
            LockedResources.jv_instance = new LockedResources().jinit_LockedResources_0();
        }
        return LockedResources.jv_instance;
    }
    static set instance(value: LockedResources | null) {
        LockedResources.js_instance = true;
        LockedResources.jv_instance = value;
    }
    LOCKED_DEMO_GAME_FEATURE_RESOURCE: string | null = null;

    jfields_LockedResources(): void {
    this.LOCKED_DEMO_GAME_FEATURE_RESOURCE = "/locked_demo_game_feature_64_by_64.png";
    }

    jinit_LockedResources_0(): LockedResources {
        super.jinit_JObject_0();
        this.jfields_LockedResources();
        return this;
    }
    

    static getInstance(): LockedResources | null {
        return LockedResources.instance;
    }
}

