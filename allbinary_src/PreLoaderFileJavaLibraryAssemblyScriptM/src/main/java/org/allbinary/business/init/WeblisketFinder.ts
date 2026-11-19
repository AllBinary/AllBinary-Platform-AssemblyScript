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
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory
// import org.allbinary.logic.communication.log.config.type.LogConfigTypes
// import org.allbinary.logic.io.file.AbFile
// import org.allbinary.logic.io.file.directory.SubDirectory
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.string.CommonStrings
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class WeblisketFinder extends JObject {

    jclassName(): string {
        return "org.allbinary.business.init.WeblisketFinder";
    }
    @lazy static jv_instance: WeblisketFinder | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): WeblisketFinder | null {
        if (!WeblisketFinder.js_instance) {
            WeblisketFinder.js_instance = true;
            WeblisketFinder.jv_instance = new WeblisketFinder().jinit_WeblisketFinder_0();
        }
        return WeblisketFinder.jv_instance;
    }
    static set instance(value: WeblisketFinder | null) {
        WeblisketFinder.js_instance = true;
        WeblisketFinder.jv_instance = value;
    }
    @lazy static readonly KEY: string | null = "installerdata.dat";
    logUtil: LogUtil | null = null;
    commonStrings: CommonStrings | null = null;
    subDirectory: SubDirectory | null = null;

    jfields_WeblisketFinder(): void {
    this.logUtil = LogUtil.getInstance();
    this.commonStrings = CommonStrings.getInstance();
    this.subDirectory = SubDirectory.getInstance();
    }
    

    static getInstance(): WeblisketFinder | null {
        return WeblisketFinder.instance;
    }
    

    jinit_WeblisketFinder_0(): WeblisketFinder {
        super.jinit_JObject_0();
        this.jfields_WeblisketFinder();
        return this;
    }
    

    findAll(path: string | null): BasicArrayList | null {
        do {
            this.logUtil!.putF(this.commonStrings!.START, this, "findAll"); if (JThrowable.pending !== null) break;
            return this.subDirectory!.search_2_StringAbFile(WeblisketFinder.KEY, AbFile.createAbFile(path));
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "findAll", e); if (JThrowable.pending !== null) return null;
            if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.PRELOADERERROR)) {
                this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "findAll", e); if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
            return null;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    getInstallationPath(file: AbFile | null): string | null {
        do {
            let filePath: string | null = file!.getPath(); if (JThrowable.pending !== null) break;
            let end: i32 = JString.indexOf1(filePath, WeblisketFinder.KEY); if (JThrowable.pending !== null) break;
            if (end < 0) {
                return null;
            }
            return JString.substring2(filePath, 0, end);
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.PRELOADERERROR)) {
                this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "getInstallationPath", e); if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
            return null;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    static main(args: StaticArray<string | null> | null): void {
        let stringUtil: StringUtil | null = StringUtil.getInstance(); if (JThrowable.pending !== null) return;
        let vector: BasicArrayList | null = WeblisketFinder.getInstance()!.findAll(stringUtil!.EMPTY_STRING); if (JThrowable.pending !== null) return;
        JSystem.println(jstr(vector!.size())); if (JThrowable.pending !== null) return;
    }
}

