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
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListUtil

@global export class NoButtonsBuilder extends BaseTouchInput {

    jclassName(): string {
        return "org.allbinary.input.motion.button.NoButtonsBuilder";
    }
    logUtil: LogUtil | null = null;

    jfields_NoButtonsBuilder(): void {
    this.logUtil = LogUtil.getInstance();
    }

    jinit_NoButtonsBuilder_0(): NoButtonsBuilder {
        super.jinit_BaseTouchInput_0();
        this.jfields_NoButtonsBuilder();
        return this;
    }
    

    getList(): BasicArrayList | null {
        do {
            this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR); if (JThrowable.pending !== null) break;
            let list: BasicArrayList | null = BasicArrayListUtil.getInstance()!.getImmutableInstance(); if (JThrowable.pending !== null) break;
            return list;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.GET_LIST, e); if (JThrowable.pending !== null) return null;
            return BasicArrayListUtil.getInstance()!.getImmutableInstance();
        } if (JThrowable.pending !== null) return null;
        return null;
    }
}

