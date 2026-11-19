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
// package org.allbinary.business.init
// import java.util.HashMap
// import org.allbinary.logic.StdUtil
// import org.allbinary.logic.communication.log.PreLogUtil
// import org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory
// import org.allbinary.logic.communication.log.config.type.LogConfigTypes
// import org.allbinary.logic.io.path.AbPath
// import org.allbinary.logic.java.bool.BooleanUtil
// import org.allbinary.logic.string.StringUtil

@global export class InitInfo extends JObject {

    jclassName(): string {
        return "org.allbinary.business.init.InitInfo";
    }
    @lazy static jv_instance: InitInfo | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): InitInfo | null {
        if (!InitInfo.js_instance) {
            InitInfo.js_instance = true;
            InitInfo.jv_instance = new InitInfo().jinit_InitInfo_0();
        }
        return InitInfo.jv_instance;
    }
    static set instance(value: InitInfo | null) {
        InitInfo.js_instance = true;
        InitInfo.jv_instance = value;
    }
    TESTING: string | null = null;
    MAINPATH: string | null = null;
    TESTHTMLPATH: string | null = null;
    testing: string | null = null;
    mainPath: AbPath | null = null;
    testHtmlPath: AbPath | null = null;
    hasRead: bool = false;

    jfields_InitInfo(): void {
    this.TESTING = "TESTING";
    this.MAINPATH = "MAINPATH";
    this.TESTHTMLPATH = "TESTHTMLPATH";
    this.testing = null;
    this.mainPath = null;
    this.testHtmlPath = null;
    this.hasRead = false;
    }
    

    static getInstance(): InitInfo | null {
        return InitInfo.instance;
    }
    

    jinit_InitInfo_0(): InitInfo {
        super.jinit_JObject_0();
        this.jfields_InitInfo();
        return this;
    }
    

    set_0(): void {
        do {
            let initInfoEntity: InitInfoEntity | null = new InitInfoEntity().jinit_InitInfoEntity_0(); if (JThrowable.pending !== null) break;
            if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.PRELOADER)) {
                PreLogUtil.put("created entity", "InitInfo", "set()"); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            if (!initInfoEntity!.is()) {
                if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.PRELOADER)) {
                    PreLogUtil.put("adding", "InitInfo", "set()"); if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
                initInfoEntity!.add(); if (JThrowable.pending !== null) break;
            } else {
                if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.PRELOADER)) {
                    PreLogUtil.put("update", "InitInfo", "set()"); if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
                initInfoEntity!.update(); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            this.hasRead = false;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.PRELOADERERROR)) {
                PreLogUtil.putOE("error", "InitInfo", "set()", e); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    set_1(hashMap: JHashMap | null): void {
        do {
            this.testing = changetype<string | null>(hashMap!.get(this.TESTING)); if (JThrowable.pending !== null) break;
            this.mainPath = new AbPath().jinit_AbPath_2(changetype<string | null>(hashMap!.get(this.MAINPATH)), StringUtil.getInstance()!.EMPTY_STRING); if (JThrowable.pending !== null) break;
            this.testHtmlPath = new AbPath().jinit_AbPath_2(changetype<string | null>(hashMap!.get(this.TESTHTMLPATH)), StringUtil.getInstance()!.EMPTY_STRING); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.PRELOADERERROR)) {
                PreLogUtil.putOE("error", "InitInfo", "set()", e); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    get(): void {
        do {
            this.testing = null;
            this.mainPath = null;
            this.testHtmlPath = null;
            let initInfoEntity: InitInfoEntity | null = new InitInfoEntity().jinit_InitInfoEntity_0(); if (JThrowable.pending !== null) break;
            initInfoEntity!.get(); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.PRELOADERERROR)) {
                PreLogUtil.putOE("error", "InitInfo", "set()", e); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
            return;
        } if (JThrowable.pending !== null) return;
    }
    

    setHasRead(value: bool): void {
        this.hasRead = value;
    }
    

    updateIfNeeded(): void {
        do {
            if (!this.hasRead) {
                this.hasRead = true;
                this.get(); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.PRELOADERERROR)) {
                PreLogUtil.putOE("error", "InitInfo", "updateIfNeeded()", e); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
            return;
        } if (JThrowable.pending !== null) return;
    }
    

    isTesting(): bool {
        do {
            this.updateIfNeeded(); if (JThrowable.pending !== null) break;
            return BooleanUtil.getInstance()!.getFromString(this.testing);
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.PRELOADERERROR)) {
                PreLogUtil.putOE("error", "InitInfo", "updateIfNeeded()", e); if (JThrowable.pending !== null) return false;
            } if (JThrowable.pending !== null) return false;
            return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    getTesting(): string | null {
        this.updateIfNeeded(); if (JThrowable.pending !== null) return null;
        return this.testing;
    }
    

    getTestHtmlPath(): string | null {
        this.updateIfNeeded(); if (JThrowable.pending !== null) return null;
        if (this.testHtmlPath != null) {
            return JObject.jtoString(this.testHtmlPath);
        } else {
            return null;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    getMainPath(): string | null {
        this.updateIfNeeded(); if (JThrowable.pending !== null) return null;
        if (this.mainPath != null) {
            return JObject.jtoString(this.mainPath);
        } else {
            return null;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    setTesting(value: string | null): void {
        this.testing = value;
    }
    

    setTestHtmlPath(value: AbPath | null): void {
        this.testHtmlPath = value;
    }
    

    setMainPath(value: AbPath | null): void {
        this.mainPath = value;
    }
    

    isMainPathValid(abPath: AbPath | null): bool {
        return true;
    }
    

    isTestHtmlPathValid(abPath: AbPath | null): bool {
        return true;
    }
    

    isTestingValid(testing: string | null): bool {
        return BooleanUtil.getInstance()!.isStringBoolean(testing);
    }
    

    toHashMap(): JHashMap | null {
        let hashMap: JHashMap | null = StdUtil.getInstance()!.createHashMap(); if (JThrowable.pending !== null) return null;
        hashMap!.put(this.TESTING, this.getTesting()); if (JThrowable.pending !== null) return null;
        hashMap!.put(this.MAINPATH, this.getMainPath()); if (JThrowable.pending !== null) return null;
        hashMap!.put(this.TESTHTMLPATH, this.getTestHtmlPath()); if (JThrowable.pending !== null) return null;
        return hashMap;
    }
}

