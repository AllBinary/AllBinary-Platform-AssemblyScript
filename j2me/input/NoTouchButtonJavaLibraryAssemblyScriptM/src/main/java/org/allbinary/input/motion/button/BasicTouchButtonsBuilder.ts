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
// package org.allbinary.input.motion.button
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.string.CommonStrings
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD
// import org.allbinary.util.BasicArrayListUtil

@global export class BasicTouchButtonsBuilder extends BaseTouchInput {

    jclassName(): string {
        return "org.allbinary.input.motion.button.BasicTouchButtonsBuilder";
    }
    @lazy static jv_SINGLETON: BasicTouchButtonsBuilder | null = null;
    @lazy static js_SINGLETON: bool = false;
    static get SINGLETON(): BasicTouchButtonsBuilder | null {
        if (!BasicTouchButtonsBuilder.js_SINGLETON) {
            BasicTouchButtonsBuilder.js_SINGLETON = true;
            BasicTouchButtonsBuilder.jv_SINGLETON = new BasicTouchButtonsBuilder().jinit_BasicTouchButtonsBuilder_0();
        }
        return BasicTouchButtonsBuilder.jv_SINGLETON;
    }
    static set SINGLETON(value: BasicTouchButtonsBuilder | null) {
        BasicTouchButtonsBuilder.js_SINGLETON = true;
        BasicTouchButtonsBuilder.jv_SINGLETON = value;
    }
    logUtil: LogUtil | null = null;

    jfields_BasicTouchButtonsBuilder(): void {
    this.logUtil = LogUtil.getInstance();
    }

    jinit_BasicTouchButtonsBuilder_0(): BasicTouchButtonsBuilder {
        super.jinit_BaseTouchInput_0();
        this.jfields_BasicTouchButtonsBuilder();
        return this;
    }
    

    static getInstance(): BaseTouchInput | null {
        return BasicTouchButtonsBuilder.SINGLETON;
    }
    

    getList(): BasicArrayList | null {
        do {
            this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.GET_LIST); if (JThrowable.pending !== null) break;
            let list: BasicArrayList | null = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) break;
            return list;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.GET_LIST, e); if (JThrowable.pending !== null) return null;
            return BasicArrayListUtil.getInstance()!.getImmutableInstance();
        } if (JThrowable.pending !== null) return null;
        return null;
    }
}

