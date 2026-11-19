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
// package org.allbinary.game.ag.ai.scroller
// import javax.microedition.lcdui.Canvas
// import org.allbinary.game.input.GameInput
// import org.allbinary.game.rand.MyRandomFactory
// import org.allbinary.layer.AllBinaryLayer
// import org.allbinary.layer.AllBinaryLayerManager
// import org.allbinary.util.ABHashtable

@global export class RandomPatrolAI extends BasePatrolAI {

    jclassName(): string {
        return "org.allbinary.game.ag.ai.scroller.RandomPatrolAI";
    }
    changedDirection: bool = false;

    jfields_RandomPatrolAI(): void {
    this.changedDirection = true;
    }
    

    jinit_RandomPatrolAI_3(hashtable: ABHashtable | null, ownerLayerInterface: AllBinaryLayer | null, gameInput: GameInput | null): RandomPatrolAI {
        super.jinit_BasePatrolAI_3(hashtable, ownerLayerInterface, gameInput);
        this.jfields_RandomPatrolAI();
        this.updateRandomDistance(); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    updateRandomDistance(): void {
        this.currentDistance = MyRandomFactory.getInstance()!.getAbsoluteNextInt(this.maxDistance!.intValue()); if (JThrowable.pending !== null) return;
    }
    

    processAI(allBinaryLayerManager: AllBinaryLayerManager | null): void {
        super.update(); if (JThrowable.pending !== null) return;
        super.processKeyAI(this.keyDirection); if (JThrowable.pending !== null) return;
        if (this.changedDirection) {
            super.processKeyAI(Canvas.KEY_NUM1); if (JThrowable.pending !== null) return;
            this.updateRandomDistance(); if (JThrowable.pending !== null) return;
            this.changedDirection = false;
        } if (JThrowable.pending !== null) return;
    }
    

    nextDirection(): void {
        super.nextDirection(); if (JThrowable.pending !== null) return;
        this.changedDirection = true;
    }
}

