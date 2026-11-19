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
// package org.allbinary.game.ag.ai.tactical
// import javax.microedition.lcdui.Canvas
// import org.allbinary.game.ai.BasicAI
// import org.allbinary.game.ag.ai.InputProbability
// import org.allbinary.game.input.GameInput
// import org.allbinary.game.rand.MyRandomFactory
// import org.allbinary.layer.AllBinaryLayer
// import org.allbinary.layer.AllBinaryLayerManager
// import org.allbinary.logic.util.visitor.Visitor
// import org.allbinary.time.GameTickTimeDelayHelperFactory

@global export class BasicRandomAI extends BasicAI {

    jclassName(): string {
        return "org.allbinary.game.ag.ai.tactical.BasicRandomAI";
    }
    i_random: i32 = 0;
    inputProbability: InputProbability | null = null;
    visitor: Visitor | null = null;
    keyArray: StaticArray<i32> | null = null;
    myRandomFactory: MyRandomFactory | null = null;

    jfields_BasicRandomAI(): void {
    this.i_random = 0;
    
    
    this.keyArray = StaticArray.fromArray<i32>([Canvas.UP, Canvas.DOWN, Canvas.LEFT, Canvas.RIGHT, Canvas.KEY_NUM1, Canvas.KEY_NUM7, Canvas.KEY_NUM9]);
    this.myRandomFactory = MyRandomFactory.getInstance();
    }
    

    jinit_BasicRandomAI_4(ownerLayerInterface: AllBinaryLayer | null, gameInput: GameInput | null, inputProbability: InputProbability | null, visitor: Visitor | null): BasicRandomAI {
        super.jinit_BasicAI_2(ownerLayerInterface, gameInput);
        this.jfields_BasicRandomAI();
        this.inputProbability = inputProbability;
        this.visitor = visitor;
        return this;
    }
    

    processAI(allBinaryLayerManager: AllBinaryLayerManager | null): void {
        if (this.inputProbability!.getTimeDelayHelper()!.isTime(GameTickTimeDelayHelperFactory.getInstance()!.startTime)) {
            this.i_random = this.myRandomFactory!.getAbsoluteNextInt(this.inputProbability!.getMax()); if (JThrowable.pending !== null) return;
            let repeat: bool = false;
            let repeatLikelyhoodIntegerArray: StaticArray<JInteger | null> | null = this.inputProbability!.getRepeatLikelyhoodIntegerArray(); if (JThrowable.pending !== null) return;
            if (this.getLastKey() != -1 && repeatLikelyhoodIntegerArray![this.getLastKey()]!.intValue() >= this.i_random) {
                repeat = true;
            } if (JThrowable.pending !== null) return;
            if (!repeat) {
                let likelyhoodIntegerArray: StaticArray<StaticArray<JInteger | null> | null> | null = this.inputProbability!.getLikelyhoodIntegerArray(); if (JThrowable.pending !== null) return;
                this.i_random = this.myRandomFactory!.getAbsoluteNextInt(this.inputProbability!.getMax()); if (JThrowable.pending !== null) return;
                let size: i32 = this.keyArray!.length;
                let likelyhoodIntegerKeyArray: StaticArray<JInteger | null> | null = null;
                for (let index: i32 = 0; index < size; index++) {
                    let key: i32 = this.keyArray![index];
                    likelyhoodIntegerKeyArray = likelyhoodIntegerArray![key];
                    if (likelyhoodIntegerArray!.length >= key && likelyhoodIntegerKeyArray![0] != null) {
                        if (this.i_random >= likelyhoodIntegerKeyArray![0]!.intValue() && this.i_random < likelyhoodIntegerKeyArray![1]!.intValue()) {
                            this.setLastKey(key); if (JThrowable.pending !== null) return;
                            break;
                        } if (JThrowable.pending !== null) return;
                    } if (JThrowable.pending !== null) return;
                } if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
            this.visitor!.visit(this); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

