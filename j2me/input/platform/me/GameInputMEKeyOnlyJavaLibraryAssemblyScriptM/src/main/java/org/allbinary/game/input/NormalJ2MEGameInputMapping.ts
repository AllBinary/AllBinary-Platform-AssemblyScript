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

@global export class NormalJ2MEGameInputMapping extends J2MEGameInputMapping {

    jclassName(): string {
        return "org.allbinary.game.input.NormalJ2MEGameInputMapping";
    }

    jinit_NormalJ2MEGameInputMapping_0(): NormalJ2MEGameInputMapping {
        super.jinit_J2MEGameInputMapping_0();
        return this;
    }
    

    getDefault(): InputToGameKeyMapping | null {
        return new NormalJ2MEDefaultGameInputMapping().jinit_NormalJ2MEDefaultGameInputMapping_0()!.getInputMapping();
    }
}

