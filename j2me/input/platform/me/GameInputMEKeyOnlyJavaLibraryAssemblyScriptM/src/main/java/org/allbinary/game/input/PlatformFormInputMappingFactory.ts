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
// import org.allbinary.game.input.mapping.InputToGameKeyMapping
// import org.allbinary.logic.NullUtil
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.string.CommonStrings

@global export class PlatformFormInputMappingFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.input.PlatformFormInputMappingFactory";
    }
    @lazy static jv_instance: Object | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): Object | null {
        if (!PlatformFormInputMappingFactory.js_instance) {
            PlatformFormInputMappingFactory.js_instance = true;
            PlatformFormInputMappingFactory.jv_instance = NullUtil.getInstance()!.NULL_OBJECT;
        }
        return PlatformFormInputMappingFactory.jv_instance;
    }
    static set instance(value: Object | null) {
        PlatformFormInputMappingFactory.js_instance = true;
        PlatformFormInputMappingFactory.jv_instance = value;
    }
    logUtil: LogUtil | null = null;
    inputToGameKeyMapping: InputToGameKeyMapping | null = null;

    jfields_PlatformFormInputMappingFactory(): void {
    this.logUtil = LogUtil.getInstance();
    this.inputToGameKeyMapping = InputToGameKeyMapping.getNullInstance();
    }

    jinit_PlatformFormInputMappingFactory_0(): PlatformFormInputMappingFactory {
        super.jinit_JObject_0();
        this.jfields_PlatformFormInputMappingFactory();
        return this;
    }
    

    static getInstance(): PlatformFormInputMappingFactory | null {
        if (PlatformFormInputMappingFactory.instance == changetype<Object | null>(NullUtil.getInstance()!.NULL_OBJECT)) {
            PlatformFormInputMappingFactory.instance = new PlatformFormInputMappingFactory().jinit_PlatformFormInputMappingFactory_0(); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return changetype<PlatformFormInputMappingFactory | null>(PlatformFormInputMappingFactory.instance);
    }
    

    getOrCreate(): InputToGameKeyMapping | null {
        do {
            if (this.inputToGameKeyMapping == InputToGameKeyMapping.getNullInstance()) {
                let inputToGameKeyMapping: InputToGameKeyMapping | null = new InputToGameKeyMapping().jinit_InputToGameKeyMapping_0(); if (JThrowable.pending !== null) break;
                let gameKeyFactory: GameKeyFactory | null = GameKeyFactory.getInstance(); if (JThrowable.pending !== null) break;
                inputToGameKeyMapping!.add(gameKeyFactory!.UP, gameKeyFactory!.UP); if (JThrowable.pending !== null) break;
                inputToGameKeyMapping!.add(gameKeyFactory!.DOWN, gameKeyFactory!.DOWN); if (JThrowable.pending !== null) break;
                inputToGameKeyMapping!.add(gameKeyFactory!.LEFT, gameKeyFactory!.LEFT); if (JThrowable.pending !== null) break;
                inputToGameKeyMapping!.add(gameKeyFactory!.RIGHT, gameKeyFactory!.RIGHT); if (JThrowable.pending !== null) break;
                inputToGameKeyMapping!.add(gameKeyFactory!.KEY_NUM1, gameKeyFactory!.GAME_A); if (JThrowable.pending !== null) break;
                this.inputToGameKeyMapping = inputToGameKeyMapping;
            } if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return null;
            this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.GET_INSTANCE, e); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return this.inputToGameKeyMapping;
    }
}

