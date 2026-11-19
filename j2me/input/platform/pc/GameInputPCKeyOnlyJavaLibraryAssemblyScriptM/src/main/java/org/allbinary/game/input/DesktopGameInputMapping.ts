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

@global export class DesktopGameInputMapping extends PCGameInputMapping {

    jclassName(): string {
        return "org.allbinary.game.input.DesktopGameInputMapping";
    }

    jinit_DesktopGameInputMapping_0(): DesktopGameInputMapping {
        super.jinit_PCGameInputMapping_0();
        return this;
    }
    

    getDefault(): InputToGameKeyMapping | null {
        return new DesktopDefaultGameInputMapping().jinit_DesktopDefaultGameInputMapping_0()!.getInputMapping();
    }
}

