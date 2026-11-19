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
// import org.allbinary.logic.StdUtil
// import org.allbinary.logic.math.SmallIntegerSingletonFactory
// import org.allbinary.time.TimeDelayHelper
// import org.allbinary.util.ABHashtable

@global export class InputProbability extends JObject {

    jclassName(): string {
        return "org.allbinary.game.ag.ai.InputProbability";
    }
    @lazy static jv_INPUT_PROBABILITY: JInteger | null = null;
    @lazy static js_INPUT_PROBABILITY: bool = false;
    static get INPUT_PROBABILITY(): JInteger | null {
        if (!InputProbability.js_INPUT_PROBABILITY) {
            InputProbability.js_INPUT_PROBABILITY = true;
            InputProbability.jv_INPUT_PROBABILITY = SmallIntegerSingletonFactory.getInstance()!.getAt(0);
        }
        return InputProbability.jv_INPUT_PROBABILITY;
    }
    static set INPUT_PROBABILITY(value: JInteger | null) {
        InputProbability.js_INPUT_PROBABILITY = true;
        InputProbability.jv_INPUT_PROBABILITY = value;
    }
    likelyhoodIntegerArray: StaticArray<StaticArray<JInteger | null> | null> | null = null;
    repeatLikelyhoodIntegerArray: StaticArray<JInteger | null> | null = null;
    max: i32 = 0;
    timeDelayHelper: TimeDelayHelper | null = null;

    jfields_InputProbability(): void {
    
    
    
    
    }
    

    jinit_InputProbability_4(likelyhoodIntegerArray: StaticArray<StaticArray<JInteger | null> | null> | null, repeatLikelyhoodIntegerArray: StaticArray<JInteger | null> | null, max: i32, timeDelayHelper: TimeDelayHelper | null): InputProbability {
        super.jinit_JObject_0();
        this.jfields_InputProbability();
        this.likelyhoodIntegerArray = likelyhoodIntegerArray;
        this.repeatLikelyhoodIntegerArray = repeatLikelyhoodIntegerArray;
        this.max = max;
        this.timeDelayHelper = timeDelayHelper;
        return this;
    }
    

    getLikelyhoodIntegerArray(): StaticArray<StaticArray<JInteger | null> | null> | null {
        return this.likelyhoodIntegerArray;
    }
    

    getRepeatLikelyhoodIntegerArray(): StaticArray<JInteger | null> | null {
        return this.repeatLikelyhoodIntegerArray;
    }
    

    getMax(): i32 {
        return this.max;
    }
    

    getTimeDelayHelper(): TimeDelayHelper | null {
        return this.timeDelayHelper;
    }
    

    toHashtable(): ABHashtable | null {
        let hashtable: ABHashtable | null = StdUtil.getInstance()!.createHashtable(); if (JThrowable.pending !== null) return null;
        hashtable!.put(InputProbability.INPUT_PROBABILITY, this); if (JThrowable.pending !== null) return null;
        return hashtable;
    }
}

