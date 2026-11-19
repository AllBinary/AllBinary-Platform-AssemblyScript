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
// import org.allbinary.logic.math.SmallIntegerSingletonFactory
// import org.allbinary.time.NoTimeDelayHelper
// import org.allbinary.util.ABHashtable

@global export class BasicProbabilityAIDataFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.ag.ai.BasicProbabilityAIDataFactory";
    }

    jinit_BasicProbabilityAIDataFactory_0(): BasicProbabilityAIDataFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    getInstance(): ABHashtable | null {
        let likelyhoodIntegerArray: StaticArray<StaticArray<JInteger | null> | null> | null = JArrays.new2<JInteger | null>(Canvas.KEY_NUM9 + 1, 2);
        let smallIntegerSingletonFactory: SmallIntegerSingletonFactory | null = SmallIntegerSingletonFactory.getInstance(); if (JThrowable.pending !== null) return null;
        likelyhoodIntegerArray![Canvas.UP]![0] = smallIntegerSingletonFactory!.getAt(0); if (JThrowable.pending !== null) return null;
        likelyhoodIntegerArray![Canvas.UP]![1] = smallIntegerSingletonFactory!.getAt(10); if (JThrowable.pending !== null) return null;
        likelyhoodIntegerArray![Canvas.DOWN]![0] = smallIntegerSingletonFactory!.getAt(10); if (JThrowable.pending !== null) return null;
        likelyhoodIntegerArray![Canvas.DOWN]![1] = smallIntegerSingletonFactory!.getAt(14); if (JThrowable.pending !== null) return null;
        likelyhoodIntegerArray![Canvas.LEFT]![0] = smallIntegerSingletonFactory!.getAt(14); if (JThrowable.pending !== null) return null;
        likelyhoodIntegerArray![Canvas.LEFT]![1] = smallIntegerSingletonFactory!.getAt(18); if (JThrowable.pending !== null) return null;
        likelyhoodIntegerArray![Canvas.RIGHT]![0] = smallIntegerSingletonFactory!.getAt(18); if (JThrowable.pending !== null) return null;
        likelyhoodIntegerArray![Canvas.RIGHT]![1] = smallIntegerSingletonFactory!.getAt(22); if (JThrowable.pending !== null) return null;
        likelyhoodIntegerArray![Canvas.KEY_NUM7]![0] = smallIntegerSingletonFactory!.getAt(22); if (JThrowable.pending !== null) return null;
        likelyhoodIntegerArray![Canvas.KEY_NUM7]![1] = smallIntegerSingletonFactory!.getAt(26); if (JThrowable.pending !== null) return null;
        likelyhoodIntegerArray![Canvas.KEY_NUM9]![0] = smallIntegerSingletonFactory!.getAt(26); if (JThrowable.pending !== null) return null;
        likelyhoodIntegerArray![Canvas.KEY_NUM9]![1] = smallIntegerSingletonFactory!.getAt(30); if (JThrowable.pending !== null) return null;
        likelyhoodIntegerArray![Canvas.KEY_NUM1]![0] = smallIntegerSingletonFactory!.getAt(30); if (JThrowable.pending !== null) return null;
        likelyhoodIntegerArray![Canvas.KEY_NUM1]![1] = smallIntegerSingletonFactory!.getAt(40); if (JThrowable.pending !== null) return null;
        let repeatLikelyhoodIntegerArray: StaticArray<JInteger | null> | null = new StaticArray<JInteger | null>(Canvas.KEY_NUM9 + 1);
        repeatLikelyhoodIntegerArray![Canvas.UP] = smallIntegerSingletonFactory!.getAt(0); if (JThrowable.pending !== null) return null;
        repeatLikelyhoodIntegerArray![Canvas.DOWN] = smallIntegerSingletonFactory!.getAt(0); if (JThrowable.pending !== null) return null;
        repeatLikelyhoodIntegerArray![Canvas.LEFT] = smallIntegerSingletonFactory!.getAt(0); if (JThrowable.pending !== null) return null;
        repeatLikelyhoodIntegerArray![Canvas.RIGHT] = smallIntegerSingletonFactory!.getAt(0); if (JThrowable.pending !== null) return null;
        repeatLikelyhoodIntegerArray![Canvas.KEY_NUM7] = smallIntegerSingletonFactory!.getAt(0); if (JThrowable.pending !== null) return null;
        repeatLikelyhoodIntegerArray![Canvas.KEY_NUM9] = smallIntegerSingletonFactory!.getAt(0); if (JThrowable.pending !== null) return null;
        repeatLikelyhoodIntegerArray![Canvas.KEY_NUM1] = smallIntegerSingletonFactory!.getAt(10); if (JThrowable.pending !== null) return null;
        let inputProbability: InputProbability | null = new InputProbability().jinit_InputProbability_4(likelyhoodIntegerArray, repeatLikelyhoodIntegerArray, 42, NoTimeDelayHelper.SINGLETON); if (JThrowable.pending !== null) return null;
        return inputProbability!.toHashtable();
    }
}

