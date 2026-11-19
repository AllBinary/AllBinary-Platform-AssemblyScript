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
// package org.allbinary.game.input
// import org.allbinary.init.Init
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.math.SmallIntegerSingletonFactory

@global export class KeyFactoryInitializer extends Init {

    jclassName(): string {
        return "org.allbinary.game.input.KeyFactoryInitializer";
    }
    logUtil: LogUtil | null = null;

    jfields_KeyFactoryInitializer(): void {
    this.logUtil = LogUtil.getInstance();
    }

    jinit_KeyFactoryInitializer_0(): KeyFactoryInitializer {
        super.jinit_Init_0();
        this.jfields_KeyFactoryInitializer();
        return this;
    }
    

    init(): void {
        this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.INIT); if (JThrowable.pending !== null) return;
        SmallIntegerSingletonFactory.getInstance()!.initWithRange(0x2D0, 6); if (JThrowable.pending !== null) return;
    }
}

