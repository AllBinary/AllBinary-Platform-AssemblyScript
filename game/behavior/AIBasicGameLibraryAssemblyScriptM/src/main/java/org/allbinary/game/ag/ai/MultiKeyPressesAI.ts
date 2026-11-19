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
// package org.allbinary.game.ag.ai
// import org.allbinary.game.input.GameInput
// import org.allbinary.layer.AllBinaryLayer
// import org.allbinary.layer.AllBinaryLayerManager
// import org.allbinary.time.GameTickTimeDelayHelper
// import org.allbinary.time.GameTickTimeDelayHelperFactory
// import org.allbinary.time.TimeDelayHelper
// import org.allbinary.util.ABHashtable

@global export class MultiKeyPressesAI extends KeyPressesAI {

    jclassName(): string {
        return "org.allbinary.game.ag.ai.MultiKeyPressesAI";
    }
    toggleTimeHelper: TimeDelayHelper | null = null;
    gameTickTimeDelayHelper: GameTickTimeDelayHelper | null = null;

    jfields_MultiKeyPressesAI(): void {
    this.toggleTimeHelper = new TimeDelayHelper().jinit_TimeDelayHelper_1(600);
    this.gameTickTimeDelayHelper = GameTickTimeDelayHelperFactory.getInstance();
    }
    

    jinit_MultiKeyPressesAI_3(hashtable: ABHashtable | null, ownerLayerInterface: AllBinaryLayer | null, gameInput: GameInput | null): MultiKeyPressesAI {
        super.jinit_KeyPressesAI_3(hashtable, ownerLayerInterface, gameInput);
        this.jfields_MultiKeyPressesAI();
        this.update(); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    processAI(allBinaryLayerManager: AllBinaryLayerManager | null): void {
    }
    

    update(): void {
        let gameInput: GameInput | null = this.getGameInput(); if (JThrowable.pending !== null) return;
        let keys: StaticArray<JInteger | null> | null = this.keys;
        let size: i32 = keys!.length;
        if (this.isOn()) {
            for (let index: i32 = 0; index < size; index++) {
                let key: i32 = keys![index]!.intValue(); if (JThrowable.pending !== null) return;
                if (key != -1) {
                    gameInput!.add(this.gameKeyEventFactory!.getInstanceForKey(this, key)); if (JThrowable.pending !== null) return;
                } if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } else {
            for (let index: i32 = 0; index < size; index++) {
                let key: i32 = keys![index]!.intValue(); if (JThrowable.pending !== null) return;
                if (key != -1) {
                    gameInput!.addForRemoval(this.gameKeyEventFactory!.getInstanceForKey(this, key)); if (JThrowable.pending !== null) return;
                } if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    toggle(): void {
        if (this.toggleTimeHelper!.isTime(this.gameTickTimeDelayHelper!.startTime)) {
            super.toggle(); if (JThrowable.pending !== null) return;
            this.update(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    disable(): void {
        if (this.toggleTimeHelper!.isTime(this.gameTickTimeDelayHelper!.startTime)) {
            super.disable(); if (JThrowable.pending !== null) return;
            this.update(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    enable(): void {
        if (this.toggleTimeHelper!.isTime(this.gameTickTimeDelayHelper!.startTime)) {
            super.enable(); if (JThrowable.pending !== null) return;
            this.update(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

