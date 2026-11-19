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
// package org.allbinary.time

@global export class NoTimeDelayHelper extends TimeDelayHelper {

    jclassName(): string {
        return "org.allbinary.time.NoTimeDelayHelper";
    }
    @lazy static jv_SINGLETON: NoTimeDelayHelper | null = null;
    @lazy static js_SINGLETON: bool = false;
    static get SINGLETON(): NoTimeDelayHelper | null {
        if (!NoTimeDelayHelper.js_SINGLETON) {
            NoTimeDelayHelper.js_SINGLETON = true;
            NoTimeDelayHelper.jv_SINGLETON = new NoTimeDelayHelper().jinit_NoTimeDelayHelper_0();
        }
        return NoTimeDelayHelper.jv_SINGLETON;
    }
    static set SINGLETON(value: NoTimeDelayHelper | null) {
        NoTimeDelayHelper.js_SINGLETON = true;
        NoTimeDelayHelper.jv_SINGLETON = value;
    }
    

    jinit_NoTimeDelayHelper_0(): NoTimeDelayHelper {
        super.jinit_TimeDelayHelper_1(0);
        return this;
    }
    

    isTimeTNT(): bool {
        return true;
    }
    

    isTimeSinceTNT(delay: i32): bool {
        return true;
    }
    

    isTime(currentTime: i64): bool {
        return true;
    }
    

    isTimeSince(delay: i32, currentTime: i64): bool {
        return true;
    }
}

