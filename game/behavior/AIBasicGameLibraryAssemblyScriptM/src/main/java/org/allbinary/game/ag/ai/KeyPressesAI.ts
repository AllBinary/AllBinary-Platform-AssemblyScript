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
// import org.allbinary.util.HashtableUtil
// import org.allbinary.game.ai.BasicAI
// import org.allbinary.util.ABHashtable

@global export class KeyPressesAI extends BasicAI {

    jclassName(): string {
        return "org.allbinary.game.ag.ai.KeyPressesAI";
    }
    on: bool = false;
    keys: StaticArray<JInteger | null> | null = null;

    jfields_KeyPressesAI(): void {
    this.on = true;
    
    }
    

    jinit_KeyPressesAI_3(hashtable: ABHashtable | null, ownerLayerInterface: AllBinaryLayer | null, gameInput: GameInput | null): KeyPressesAI {
        super.jinit_BasicAI_2(ownerLayerInterface, gameInput);
        this.jfields_KeyPressesAI();
        this.keys = new StaticArray<JInteger | null>(hashtable!.size()); if (JThrowable.pending !== null) return this;
        let objectArray: StaticArray<Object | null> | null = HashtableUtil.getInstance()!.getKeysAsArray(hashtable); if (JThrowable.pending !== null) return this;
        let size: i32 = objectArray!.length;
        for (let index: i32 = 0; index < size; index++) {
            this.keys![index] = changetype<JInteger | null>(hashtable!.get(changetype<Object | null>(objectArray![index]))); if (JThrowable.pending !== null) return this;
        } if (JThrowable.pending !== null) return this;
        return this;
    }
    

    processAI(allBinaryLayerManager: AllBinaryLayerManager | null): void {
        if (this.on) {
            for (let index: i32 = 0; index < this.keys!.length; index++) {
                super.processKeyAI(this.keys![index]!.intValue()); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    toggle(): void {
        if (this.isOn()) {
            this.setOn(false); if (JThrowable.pending !== null) return;
        } else {
            this.setOn(true); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    disable(): void {
        this.setOn(false); if (JThrowable.pending !== null) return;
    }
    

    enable(): void {
        this.setOn(true); if (JThrowable.pending !== null) return;
    }
    

    setOn(on: bool): void {
        this.on = on;
    }
    

    isOn(): bool {
        return this.on;
    }
}

