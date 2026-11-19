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
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil

@global export class J2MEGameKey extends Input {

    jclassName(): string {
        return "org.allbinary.game.input.J2MEGameKey";
    }
    

    jinit_J2MEGameKey_2(key: i32, keyName: string | null): J2MEGameKey {
        super.jinit_Input_2(key, keyName);
        let id: i32 = this.getId(); if (JThrowable.pending !== null) return this;
        if (id >= 0) {
            let inputFactory: InputFactory | null = InputFactory.getInstance(); if (JThrowable.pending !== null) return this;
            inputFactory!.add(id, this); if (JThrowable.pending !== null) return this;
        } if (JThrowable.pending !== null) return this;
        return this;
    }
    

    toString(): string | null {
        return JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append("J2MEGameKey: ")!.append(super.toString()));
    }
    

    static getString(keyCode: i32): string | null {
        let input: Input | null = InputFactory.getInstance()!.getInstanceById(keyCode); if (JThrowable.pending !== null) return null;
        if (input != null) {
            return input!.getName();
        } else {
            return StringUtil.getInstance()!.EMPTY_STRING;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
}

