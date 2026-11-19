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
// package org.allbinary.logic.util.cache
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListUtil

@global export class KeylessBasicArrayListCache extends IndexedBasicArrayListCache {

    jclassName(): string {
        return "org.allbinary.logic.util.cache.KeylessBasicArrayListCache";
    }
    logUtil: LogUtil | null = null;
    basicArrayListUtil: BasicArrayListUtil | null = null;

    jfields_KeylessBasicArrayListCache(): void {
    this.logUtil = LogUtil.getInstance();
    this.basicArrayListUtil = BasicArrayListUtil.getInstance();
    }
    

    jinit_KeylessBasicArrayListCache_0(): KeylessBasicArrayListCache {
        super.jinit_IndexedBasicArrayListCache_0();
        this.jfields_KeylessBasicArrayListCache();
        return this;
    }
    

    get(): BasicArrayList | null {
        do {
            if (this.index >= this.list!.size()) {
                this.addDefault(); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            let list: BasicArrayList | null = changetype<BasicArrayList | null>(this.getAt(this.index++)); if (JThrowable.pending !== null) break;
            return list;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.GET, e); if (JThrowable.pending !== null) return null;
            return this.basicArrayListUtil!.getImmutableInstance();
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    clear(): void {
        super.clear(); if (JThrowable.pending !== null) return;
        let basicArrayList: BasicArrayList | null = null;
        for (let index: i32 = this.list!.size() - 1; index >= 0; index--) {
            basicArrayList = (changetype<BasicArrayList | null>(this.list!.objectArray![index]));
            basicArrayList!.clear(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    log(): string | null {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        stringBuffer!.append("S: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint(this.list!.size()); if (JThrowable.pending !== null) return null;
        let S_LABEL: string | null = " s: ";
        let basicArrayList: BasicArrayList | null = null;
        for (let index: i32 = this.list!.size() - 1; index >= 0; index--) {
            stringBuffer!.append(S_LABEL); if (JThrowable.pending !== null) return null;
            basicArrayList = (changetype<BasicArrayList | null>(this.list!.objectArray![index]));
            stringBuffer!.appendint(basicArrayList!.size()); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
}

