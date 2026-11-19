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
// package org.allbinary.logic.string.regex.replace
// import java.util.HashMap
// import org.allbinary.J2SEUtil
// import org.allbinary.globals.AppUrlGlobals
// import org.allbinary.globals.URLGLOBALS
// import org.allbinary.logic.StdUtil
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.logic.communication.log.config.type.LogConfigTypes
// import org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory

@global export class Replace extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.string.regex.replace.Replace";
    }
    logUtil: LogUtil | null = null;
    j2seUtil: J2SEUtil | null = null;
    REPLACERS_: string | null = null;
    ALL: string | null = null;
    FOUND_KEY: string | null = null;
    hashMap: JHashMap | null = null;

    jfields_Replace(): void {
    this.logUtil = LogUtil.getInstance();
    this.j2seUtil = J2SEUtil.getInstance();
    this.REPLACERS_ = "Replacers: ";
    this.ALL = "all";
    this.FOUND_KEY = "found key total: ";
    
    }
    

    jinit_Replace_2_StringString(key: string | null, value: string | null): Replace {
        super.jinit_JObject_0();
        this.jfields_Replace();
        this.hashMap = StdUtil.getInstance()!.createHashMap(); if (JThrowable.pending !== null) return this;
        this.hashMap!.put(StaticArray.fromArray<string | null>([key]), StaticArray.fromArray<string | null>([value])); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    jinit_Replace_2_StringAStringA(keys: StaticArray<string | null> | null, values: StaticArray<string | null> | null): Replace {
        super.jinit_JObject_0();
        this.jfields_Replace();
        this.hashMap = StdUtil.getInstance()!.createHashMap(); if (JThrowable.pending !== null) return this;
        this.hashMap!.put(keys, values); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    jinit_Replace_1(hashMap: JHashMap | null): Replace {
        super.jinit_JObject_0();
        this.jfields_Replace();
        this.hashMap = hashMap;
        return this;
    }
    

    all(replace: string | null): string | null {
        return this.upTo(replace, JInteger.MIN_VALUE);
    }
    

    upTo(replace: string | null, total: i32): string | null {
        let newStringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        let totalNumberOfReplaces: i32 = 0;
        let keys: StaticArray<string | null> | null = null;
        let values: StaticArray<string | null> | null = null;
        let keyArray: StaticArray<Object | null> | null = this.j2seUtil!.getHashMapAsArray(this.hashMap); if (JThrowable.pending !== null) return null;
        let size: i32 = keyArray!.length;
        for (let index2: i32 = 0; index2 < size; index2++) {
            keys = changetype<StaticArray<string | null> | null>(keyArray![index2]);
            values = changetype<StaticArray<string | null> | null>(this.hashMap!.get(keys)); if (JThrowable.pending !== null) return null;
            let foundTotal: i64 = (<i64>0);
            let index: i32 = 0;
            let nextKey: string | null = null;
            let end: i32 = 0;
            let nextSecondKey: string | null = null;
            let begin2: i32 = 0;
            while (index < JString.length0(replace)) {
                let begin: i32 = JString.indexOf2(replace, keys![0], index); if (JThrowable.pending !== null) return null;
                if (begin != -1) {
                    foundTotal++;
                    if (foundTotal % (<i64>100) == (<i64>0)) {
                        JSystem.println(jstr(jstr(this.FOUND_KEY) + jstr(foundTotal))); if (JThrowable.pending !== null) return null;
                    } if (JThrowable.pending !== null) return null;
                    nextKey = keys![0];
                    end = begin + JString.length0(nextKey); if (JThrowable.pending !== null) return null;
                    newStringBuffer!.delete_(0, newStringBuffer!.length()); if (JThrowable.pending !== null) return null;
                    newStringBuffer!.append(JString.substring2(replace, 0, begin)); if (JThrowable.pending !== null) return null;
                    newStringBuffer!.append(values![0]); if (JThrowable.pending !== null) return null;
                    index = newStringBuffer!.length(); if (JThrowable.pending !== null) return null;
                    newStringBuffer!.append(JString.substring2(replace, end, JString.length0(replace))); if (JThrowable.pending !== null) return null;
                    replace = JObject.jtoString(newStringBuffer); if (JThrowable.pending !== null) return null;
                    if (keys!.length > 1) {
                        nextSecondKey = keys![1];
                        begin2 = JString.indexOf2(replace, nextSecondKey, index); if (JThrowable.pending !== null) return null;
                        if (begin2 != -1) {
                            let end2: i32 = begin2 + JString.length0(nextSecondKey); if (JThrowable.pending !== null) return null;
                            newStringBuffer!.delete_(0, newStringBuffer!.length()); if (JThrowable.pending !== null) return null;
                            newStringBuffer!.append(JString.substring2(replace, 0, begin2)); if (JThrowable.pending !== null) return null;
                            newStringBuffer!.append(values![1]); if (JThrowable.pending !== null) return null;
                            index = newStringBuffer!.length(); if (JThrowable.pending !== null) return null;
                            newStringBuffer!.append(JString.substring2(replace, end2, JString.length0(replace))); if (JThrowable.pending !== null) return null;
                            replace = JObject.jtoString(newStringBuffer); if (JThrowable.pending !== null) return null;
                        } if (JThrowable.pending !== null) return null;
                    } if (JThrowable.pending !== null) return null;
                    totalNumberOfReplaces++;
                    if (total != JInteger.MIN_VALUE && totalNumberOfReplaces >= total) {
                        break;
                    }
                } else {
                    break;
                } if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        if (totalNumberOfReplaces > 0) {
            if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.REPLACE)) {
                this.logUtil!.putF(jstr("Total Number Of Replaces: ") + jstr(totalNumberOfReplaces), this, this.ALL); if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return replace;
    }
    

    line(replace: string | null): string | null {
        let newStringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        let totalNumberOfReplaces: i32 = 0;
        let key: string | null = null;
        let value: string | null = null;
        let keyArray: StaticArray<Object | null> | null = this.j2seUtil!.getHashMapAsArray(this.hashMap); if (JThrowable.pending !== null) return null;
        let size: i32 = keyArray!.length;
        for (let index2: i32 = 0; index2 < size; index2++) {
            key = changetype<string | null>(keyArray![index2]);
            value = changetype<string | null>(this.hashMap!.get(key)); if (JThrowable.pending !== null) return null;
            let index: i32 = 0;
            while (index < JString.length0(replace)) {
                newStringBuffer!.delete_(0, newStringBuffer!.length()); if (JThrowable.pending !== null) return null;
                let begin: i32 = JString.indexOf2(replace, key, index); if (JThrowable.pending !== null) return null;
                if (begin != -1) {
                    JSystem.println(jstr(this.FOUND_KEY)); if (JThrowable.pending !== null) return null;
                    let end: i32 = JString.indexOf2(replace, (<u16>0x0A), begin + JString.length0(key)) + 1; if (JThrowable.pending !== null) return null;
                    if (end >= 0) {
                        newStringBuffer!.append(JString.substring2(replace, 0, begin)); if (JThrowable.pending !== null) return null;
                        index = newStringBuffer!.length(); if (JThrowable.pending !== null) return null;
                        newStringBuffer!.append(JString.substring2(replace, end, JString.length0(replace))); if (JThrowable.pending !== null) return null;
                        replace = JObject.jtoString(newStringBuffer); if (JThrowable.pending !== null) return null;
                        totalNumberOfReplaces++;
                    } if (JThrowable.pending !== null) return null;
                } else {
                    break;
                } if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.REPLACE)) {
            this.logUtil!.putF(jstr("Total Number Of Replaces: ") + jstr(totalNumberOfReplaces), this, this.ALL); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return replace;
    }
    

    static main(args: StaticArray<string | null> | null): void {
        do {
            let stringUtil: StringUtil | null = StringUtil.getInstance(); if (JThrowable.pending !== null) break;
            let appUrlGlobals: AppUrlGlobals | null = new AppUrlGlobals().jinit_AppUrlGlobals_0(); if (JThrowable.pending !== null) break;
            appUrlGlobals!.setWebappPath("G:/mnt/bc/mydev/work/allbinary_src/ToolsJavaLibrary/tools"); if (JThrowable.pending !== null) break;
            URLGLOBALS.init(appUrlGlobals); if (JThrowable.pending !== null) break;
            let testString: string | null = "\"super gun\" big tank \"goodgunriflegun";
            let replace: Replace | null = new Replace().jinit_Replace_2_StringString("gun", "abcdefghijklmnopqrstuxwxyzabcdefghijklmnopqrstuxwxyz"); if (JThrowable.pending !== null) break;
            JSystem.println(jstr(jstr("Old String: ") + jstr(testString))); if (JThrowable.pending !== null) break;
            testString = replace!.all(testString); if (JThrowable.pending !== null) break;
            JSystem.println(jstr(jstr("New String: ") + jstr(testString))); if (JThrowable.pending !== null) break;
            let replaceCat: Replace | null = new Replace().jinit_Replace_2_StringString("abcdefghijklmnopqrstuxwxyzabcdefghijklmnopqrstuxwxyz", stringUtil!.EMPTY_STRING); if (JThrowable.pending !== null) break;
            testString = replaceCat!.all(testString); if (JThrowable.pending !== null) break;
            JSystem.println(jstr(jstr("New String: ") + jstr(testString))); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
        } if (JThrowable.pending !== null) return;
    }
}

