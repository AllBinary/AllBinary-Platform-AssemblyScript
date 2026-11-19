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
// import org.allbinary.game.input.mapping.PersistentInputMapping
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.string.CommonStrings

@global export class PlatformInputMappingFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.input.PlatformInputMappingFactory";
    }
    @lazy static jv_instance: PlatformInputMappingFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): PlatformInputMappingFactory | null {
        if (!PlatformInputMappingFactory.js_instance) {
            PlatformInputMappingFactory.js_instance = true;
            PlatformInputMappingFactory.jv_instance = new PlatformInputMappingFactory().jinit_PlatformInputMappingFactory_0();
        }
        return PlatformInputMappingFactory.jv_instance;
    }
    static set instance(value: PlatformInputMappingFactory | null) {
        PlatformInputMappingFactory.js_instance = true;
        PlatformInputMappingFactory.jv_instance = value;
    }
    logUtil: LogUtil | null = null;
    inputToGameKeyMapping: PersistentInputMapping | null = null;

    jfields_PlatformInputMappingFactory(): void {
    this.logUtil = LogUtil.getInstance();
    this.inputToGameKeyMapping = PersistentInputMapping.getNullInstance();
    }

    jinit_PlatformInputMappingFactory_0(): PlatformInputMappingFactory {
        super.jinit_JObject_0();
        this.jfields_PlatformInputMappingFactory();
        return this;
    }
    

    static getInstance(): PlatformInputMappingFactory | null {
        return PlatformInputMappingFactory.instance;
    }
    

    getPersistentInputMappingInstance(): PersistentInputMapping | null {
        do {
            if (this.inputToGameKeyMapping == PersistentInputMapping.getNullInstance()) {
                this.inputToGameKeyMapping = new MotionLaptopGameInputMapping().jinit_MotionLaptopGameInputMapping_0(); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return null;
            this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.GET_INSTANCE, e); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return this.inputToGameKeyMapping;
    }
}

