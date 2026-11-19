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
// package org.allbinary.game.layer.special
// import org.allbinary.game.input.GameInputProcessor

@global export class SpecialGameInputInterfaceProcessor extends GameInputProcessor {

    jclassName(): string {
        return "org.allbinary.game.layer.special.SpecialGameInputInterfaceProcessor";
    }
    specialGameInputInterface: SpecialGameInputInterface | null = null;

    jfields_SpecialGameInputInterfaceProcessor(): void {
    
    }
    

    jinit_SpecialGameInputInterfaceProcessor_1(collidableDestroyableDamageableLayer: SpecialGameInputInterface | null): SpecialGameInputInterfaceProcessor {
        super.jinit_GameInputProcessor_0();
        this.jfields_SpecialGameInputInterfaceProcessor();
        this.specialGameInputInterface = collidableDestroyableDamageableLayer;
        return this;
    }
}

