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
// import org.allbinary.logic.string.StringUtil

@global export class PCGameKey extends Input {

    jclassName(): string {
        return "org.allbinary.game.input.PCGameKey";
    }
    

    jinit_PCGameKey_2(keyCode: i32, name: string | null): PCGameKey {
        super.jinit_Input_2(keyCode, name);
        let id: i32 = this.getId(); if (JThrowable.pending !== null) return this;
        if (id >= 0) {
            InputFactory.getInstance()!.add(id, this); if (JThrowable.pending !== null) return this;
        } if (JThrowable.pending !== null) return this;
        return this;
    }
    

    toString(): string | null {
        return jstr("PCGameKey: ") + jstr(super.toString());
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

