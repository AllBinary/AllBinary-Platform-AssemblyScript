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
// import javax.microedition.lcdui.Canvas
// import org.allbinary.game.ai.BasicAI
// import org.allbinary.game.input.GameInput
// import org.allbinary.layer.AllBinaryLayer
// import org.allbinary.layer.AllBinaryLayerManager

@global export class SpinnerAI extends BasicAI {

    jclassName(): string {
        return "org.allbinary.game.ag.ai.SpinnerAI";
    }
    isEven: bool = false;
    direction: StaticArray<i32> | null = null;

    jfields_SpinnerAI(): void {
    this.isEven = false;
    
    }
    

    jinit_SpinnerAI_3(direction: StaticArray<i32> | null, ownerLayerInterface: AllBinaryLayer | null, gameInput: GameInput | null): SpinnerAI {
        super.jinit_BasicAI_2(ownerLayerInterface, gameInput);
        this.jfields_SpinnerAI();
        this.direction = direction;
        return this;
    }
    

    processAI(allBinaryLayerManager: AllBinaryLayerManager | null): void {
        if (this.isEven) {
            super.processKeyAI(this.direction![0]); if (JThrowable.pending !== null) return;
            this.isEven = false;
        } else {
            super.processKeyAI(Canvas.KEY_NUM1); if (JThrowable.pending !== null) return;
            this.isEven = true;
        } if (JThrowable.pending !== null) return;
    }
}

