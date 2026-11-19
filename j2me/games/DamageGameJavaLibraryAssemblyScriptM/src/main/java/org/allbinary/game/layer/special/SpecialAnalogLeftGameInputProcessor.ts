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
// import org.allbinary.game.input.event.GameKeyEvent
// import org.allbinary.layer.AllBinaryLayerManager

@global export class SpecialAnalogLeftGameInputProcessor extends SpecialGameInputProcessor {

    jclassName(): string {
        return "org.allbinary.game.layer.special.SpecialAnalogLeftGameInputProcessor";
    }
    

    jinit_SpecialAnalogLeftGameInputProcessor_1(collidableDestroyableDamageableLayer: CollidableDestroyableDamageableLayer | null): SpecialAnalogLeftGameInputProcessor {
        super.jinit_SpecialGameInputProcessor_1(collidableDestroyableDamageableLayer);
        return this;
    }
    

    processAnalog(allbinaryLayerManager: AllBinaryLayerManager | null, gameKeyEvent: GameKeyEvent | null, xAnalogValue: i32): void {
        this.collidableDestroyableDamageableLayer!.leftAnalog(xAnalogValue); if (JThrowable.pending !== null) return;
    }
}

