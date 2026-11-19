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

@global export class SpecialDownGameInputProcessor extends SpecialGameInputProcessor {

    jclassName(): string {
        return "org.allbinary.game.layer.special.SpecialDownGameInputProcessor";
    }
    

    jinit_SpecialDownGameInputProcessor_1(collidableDestroyableDamageableLayer: CollidableDestroyableDamageableLayer | null): SpecialDownGameInputProcessor {
        super.jinit_SpecialGameInputProcessor_1(collidableDestroyableDamageableLayer);
        return this;
    }
    

    processEvent(allbinaryLayerManager: AllBinaryLayerManager | null, gameKeyEvent: GameKeyEvent | null): void {
        this.collidableDestroyableDamageableLayer!.down(); if (JThrowable.pending !== null) return;
    }
}

