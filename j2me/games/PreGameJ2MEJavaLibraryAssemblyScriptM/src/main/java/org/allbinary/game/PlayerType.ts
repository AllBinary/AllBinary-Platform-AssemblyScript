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
// package org.allbinary.game
// import org.allbinary.logic.string.StringUtil

@global export class PlayerType extends JObject {

    jclassName(): string {
        return "org.allbinary.game.PlayerType";
    }
    id: i32 = 0;
    name: string | null = null;

    jfields_PlayerType(): void {
    
    this.name = StringUtil.getInstance()!.EMPTY_STRING;
    }
    

    jinit_PlayerType_2(name: string | null, value: i32): PlayerType {
        super.jinit_JObject_0();
        this.jfields_PlayerType();
        this.name = name;
        this.id = value;
        return this;
    }
    

    getId(): i32 {
        return this.id;
    }
    

    getName(): string | null {
        return this.name;
    }
    

    toString(): string | null {
        return this.getName();
    }
}

