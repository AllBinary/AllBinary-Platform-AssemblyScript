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
// import org.allbinary.logic.NullUtil

@global export class PlatformKeyFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.input.PlatformKeyFactory";
    }
    @lazy static jv_instance: Object | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): Object | null {
        if (!PlatformKeyFactory.js_instance) {
            PlatformKeyFactory.js_instance = true;
            PlatformKeyFactory.jv_instance = NullUtil.getInstance()!.NULL_OBJECT;
        }
        return PlatformKeyFactory.jv_instance;
    }
    static set instance(value: Object | null) {
        PlatformKeyFactory.js_instance = true;
        PlatformKeyFactory.jv_instance = value;
    }

    jinit_PlatformKeyFactory_0(): PlatformKeyFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): PlatformKeyFactory | null {
        if (PlatformKeyFactory.instance == NullUtil.getInstance()!.NULL_OBJECT) {
            PlatformKeyFactory.instance = new PlatformKeyFactory().jinit_PlatformKeyFactory_0(); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return changetype<PlatformKeyFactory | null>(PlatformKeyFactory.instance);
    }
    

    getString(keyCode: i32): string | null {
        return PCGameKey.getString(keyCode);
    }
    

    isSubmission(input: Input | null): bool {
        return PCKeyFactory.getInstance()!.isSubmission(input);
    }
    

    isDelete(input: Input | null): bool {
        return PCKeyFactory.getInstance()!.isDelete(input);
    }
    

    isBackSpace(input: Input | null): bool {
        return PCKeyFactory.getInstance()!.isBackSpace(input);
    }
    

    isUp(input: Input | null): bool {
        return PCKeyFactory.getInstance()!.isUp(input);
    }
    

    isDown(input: Input | null): bool {
        return PCKeyFactory.getInstance()!.isDown(input);
    }
    

    isEnter(input: Input | null): bool {
        return PCKeyFactory.getInstance()!.isEnter(input);
    }
    

    isLeft(input: Input | null): bool {
        return PCKeyFactory.getInstance()!.isLeft(input);
    }
    

    isRight(input: Input | null): bool {
        return PCKeyFactory.getInstance()!.isRight(input);
    }
}

