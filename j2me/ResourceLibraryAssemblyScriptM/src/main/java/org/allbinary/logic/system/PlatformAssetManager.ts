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
// package org.allbinary.logic.system
// import java.io.InputStream
// import org.allbinary.data.resource.ResourceUtil

@global export class PlatformAssetManager extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.system.PlatformAssetManager";
    }
    @lazy static jv_instance: PlatformAssetManager | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): PlatformAssetManager | null {
        if (!PlatformAssetManager.js_instance) {
            PlatformAssetManager.js_instance = true;
            PlatformAssetManager.jv_instance = new PlatformAssetManager().jinit_PlatformAssetManager_0();
        }
        return PlatformAssetManager.jv_instance;
    }
    static set instance(value: PlatformAssetManager | null) {
        PlatformAssetManager.js_instance = true;
        PlatformAssetManager.jv_instance = value;
    }

    jinit_PlatformAssetManager_0(): PlatformAssetManager {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): PlatformAssetManager | null {
        return PlatformAssetManager.instance;
    }
    

    getResourceAsStream(resource: string | null): JInputStream | null {
        let resourceUtil: ResourceUtil | null = ResourceUtil.getInstance(); if (JThrowable.pending !== null) return null;
        let inputStream: JInputStream | null = resourceUtil!.getResourceAsStream(resource); if (JThrowable.pending !== null) return null;
        return inputStream;
    }
}

