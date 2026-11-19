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
// package org.allbinary.logic.java.character

@global export class CharArrayFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.java.character.CharArrayFactory";
    }
    @lazy static jv_instance: CharArrayFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): CharArrayFactory | null {
        if (!CharArrayFactory.js_instance) {
            CharArrayFactory.js_instance = true;
            CharArrayFactory.jv_instance = new CharArrayFactory().jinit_CharArrayFactory_0();
        }
        return CharArrayFactory.jv_instance;
    }
    static set instance(value: CharArrayFactory | null) {
        CharArrayFactory.js_instance = true;
        CharArrayFactory.jv_instance = value;
    }
    zeroCharArray: StaticArray<u16> | null = null;

    jfields_CharArrayFactory(): void {
    this.zeroCharArray = new StaticArray<u16>(0);
    }

    jinit_CharArrayFactory_0(): CharArrayFactory {
        super.jinit_JObject_0();
        this.jfields_CharArrayFactory();
        return this;
    }
    

    static getInstance(): CharArrayFactory | null {
        return CharArrayFactory.instance;
    }
    

    getZeroCharArray(): StaticArray<u16> | null {
        return this.zeroCharArray;
    }
}

