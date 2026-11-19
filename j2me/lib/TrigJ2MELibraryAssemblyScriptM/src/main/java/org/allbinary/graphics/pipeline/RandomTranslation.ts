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
// package org.allbinary.graphics.pipeline
// import org.allbinary.game.rand.MyRandomFactory
// import org.allbinary.util.BasicArrayList

@global export class RandomTranslation extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.pipeline.RandomTranslation";
    }

    jinit_RandomTranslation_0(): RandomTranslation {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance2(vector: BasicArrayList | null, howMuch: i32): BasicArrayList | null {
        let myRandomFactory: MyRandomFactory | null = MyRandomFactory.getInstance(); if (JThrowable.pending !== null) return null;
        let x: i32 = -myRandomFactory!.getNextInt(howMuch); if (JThrowable.pending !== null) return null;
        let y: i32 = myRandomFactory!.getNextInt(howMuch); if (JThrowable.pending !== null) return null;
        let graphicsPipe: BasicGraphicsPipeline | null = new BasicGraphicsPipeline().jinit_BasicGraphicsPipeline_1(vector); if (JThrowable.pending !== null) return null;
        graphicsPipe!.createMatrix(); if (JThrowable.pending !== null) return null;
        graphicsPipe!.translate(x, y); if (JThrowable.pending !== null) return null;
        return graphicsPipe!.getMatrix();
    }
}

