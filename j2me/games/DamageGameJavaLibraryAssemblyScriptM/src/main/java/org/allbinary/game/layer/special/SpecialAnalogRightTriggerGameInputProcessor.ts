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

@global export class SpecialAnalogRightTriggerGameInputProcessor extends SpecialGameInputProcessor {

    jclassName(): string {
        return "org.allbinary.game.layer.special.SpecialAnalogRightTriggerGameInputProcessor";
    }
    

    jinit_SpecialAnalogRightTriggerGameInputProcessor_1(collidableDestroyableDamageableLayer: CollidableDestroyableDamageableLayer | null): SpecialAnalogRightTriggerGameInputProcessor {
        super.jinit_SpecialGameInputProcessor_1(collidableDestroyableDamageableLayer);
        return this;
    }
    

    processAnalog(allbinaryLayerManager: AllBinaryLayerManager | null, gameKeyEvent: GameKeyEvent | null, yAnalogValue: i32): void {
        this.collidableDestroyableDamageableLayer!.rightTrigger(allbinaryLayerManager, gameKeyEvent, yAnalogValue); if (JThrowable.pending !== null) return;
    }
}

