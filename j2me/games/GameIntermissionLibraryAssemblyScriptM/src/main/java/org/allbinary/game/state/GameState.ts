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
// package org.allbinary.game.state

@global export class GameState extends JObject {

    jclassName(): string {
        return "org.allbinary.game.state.GameState";
    }
    name: string | null = null;

    jfields_GameState(): void {
    
    }
    

    jinit_GameState_2(name: string | null, state: i32): GameState {
        super.jinit_JObject_0();
        this.jfields_GameState();
        this.name = name;
        return this;
    }
    

    toString(): string | null {
        return this.name;
    }
}

