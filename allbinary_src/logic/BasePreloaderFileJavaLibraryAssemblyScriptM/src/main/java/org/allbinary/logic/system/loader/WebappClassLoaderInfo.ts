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
// package org.allbinary.logic.system.loader
// import org.allbinary.logic.NullUtil

@global export class WebappClassLoaderInfo extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.system.loader.WebappClassLoaderInfo";
    }
    @lazy static jv_classLoader: Object | null = null;
    @lazy static js_classLoader: bool = false;
    static get classLoader(): Object | null {
        if (!WebappClassLoaderInfo.js_classLoader) {
            WebappClassLoaderInfo.js_classLoader = true;
            WebappClassLoaderInfo.jv_classLoader = NullUtil.getInstance()!.NULL_OBJECT;
        }
        return WebappClassLoaderInfo.jv_classLoader;
    }
    static set classLoader(value: Object | null) {
        WebappClassLoaderInfo.js_classLoader = true;
        WebappClassLoaderInfo.jv_classLoader = value;
    }
    

    jinit_WebappClassLoaderInfo_0(): WebappClassLoaderInfo {
        super.jinit_JObject_0();
        return this;
    }
    

    static setLoader(classLoader: JClassLoader | null): void {
        WebappClassLoaderInfo.classLoader = classLoader;
    }
    

    static getLoader(): JClassLoader | null {
        return changetype<JClassLoader | null>(WebappClassLoaderInfo.classLoader);
    }
}

