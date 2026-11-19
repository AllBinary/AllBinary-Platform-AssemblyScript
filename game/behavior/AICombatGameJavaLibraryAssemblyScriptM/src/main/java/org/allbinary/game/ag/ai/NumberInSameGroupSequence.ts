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
// import org.allbinary.logic.math.SmallIntegerSingletonFactory

@global export class NumberInSameGroupSequence extends JObject {

    jclassName(): string {
        return "org.allbinary.game.ag.ai.NumberInSameGroupSequence";
    }
    NUMBER_ON_SAME_TEAM_SEQUENCE_ZERO: JInteger | null = null;
    NUMBER_ON_SAME_TEAM_SEQUENCE_ONE: JInteger | null = null;
    NUMBER_ON_SAME_TEAM_SEQUENCE_TWO: JInteger | null = null;
    NUMBER_ON_SAME_TEAM_SEQUENCE_THREE: JInteger | null = null;
    NUMBER_ON_SAME_TEAM_SEQUENCE_FOUR: JInteger | null = null;
    NUMBER_ON_SAME_TEAM_SEQUENCE_FIVE: JInteger | null = null;
    NUMBER_ON_SAME_TEAM_SEQUENCE_SIX: JInteger | null = null;
    NUMBER_ON_SAME_TEAM_SEQUENCE_SEVEN: JInteger | null = null;
    NUMBER_ON_SAME_TEAM_SEQUENCE_EIGHT: JInteger | null = null;
    NUMBER_ON_SAME_TEAM_SEQUENCE_NINE: JInteger | null = null;
    NUMBER_ON_SAME_TEAM_SEQUENCE: StaticArray<JInteger | null> | null = null;

    jfields_NumberInSameGroupSequence(): void {
    
    
    
    
    
    
    
    
    
    
    
    }
    

    static getInstance(): NumberInSameGroupSequence | null {
        return new NumberInSameGroupSequence().jinit_NumberInSameGroupSequence_0();
    }
    

    jinit_NumberInSameGroupSequence_0(): NumberInSameGroupSequence {
        super.jinit_JObject_0();
        this.jfields_NumberInSameGroupSequence();
        let smallIntegerSingletonFactory: SmallIntegerSingletonFactory | null = SmallIntegerSingletonFactory.getInstance(); if (JThrowable.pending !== null) return this;
        this.NUMBER_ON_SAME_TEAM_SEQUENCE_ZERO = smallIntegerSingletonFactory!.getAt(100); if (JThrowable.pending !== null) return this;
        this.NUMBER_ON_SAME_TEAM_SEQUENCE_ONE = smallIntegerSingletonFactory!.getAt(101); if (JThrowable.pending !== null) return this;
        this.NUMBER_ON_SAME_TEAM_SEQUENCE_TWO = smallIntegerSingletonFactory!.getAt(102); if (JThrowable.pending !== null) return this;
        this.NUMBER_ON_SAME_TEAM_SEQUENCE_THREE = smallIntegerSingletonFactory!.getAt(103); if (JThrowable.pending !== null) return this;
        this.NUMBER_ON_SAME_TEAM_SEQUENCE_FOUR = smallIntegerSingletonFactory!.getAt(104); if (JThrowable.pending !== null) return this;
        this.NUMBER_ON_SAME_TEAM_SEQUENCE_FIVE = smallIntegerSingletonFactory!.getAt(105); if (JThrowable.pending !== null) return this;
        this.NUMBER_ON_SAME_TEAM_SEQUENCE_SIX = smallIntegerSingletonFactory!.getAt(106); if (JThrowable.pending !== null) return this;
        this.NUMBER_ON_SAME_TEAM_SEQUENCE_SEVEN = smallIntegerSingletonFactory!.getAt(107); if (JThrowable.pending !== null) return this;
        this.NUMBER_ON_SAME_TEAM_SEQUENCE_EIGHT = smallIntegerSingletonFactory!.getAt(108); if (JThrowable.pending !== null) return this;
        this.NUMBER_ON_SAME_TEAM_SEQUENCE_NINE = smallIntegerSingletonFactory!.getAt(109); if (JThrowable.pending !== null) return this;
        this.NUMBER_ON_SAME_TEAM_SEQUENCE = StaticArray.fromArray<JInteger | null>([this.NUMBER_ON_SAME_TEAM_SEQUENCE_ZERO, this.NUMBER_ON_SAME_TEAM_SEQUENCE_ONE, this.NUMBER_ON_SAME_TEAM_SEQUENCE_THREE, this.NUMBER_ON_SAME_TEAM_SEQUENCE_FOUR, this.NUMBER_ON_SAME_TEAM_SEQUENCE_FIVE, this.NUMBER_ON_SAME_TEAM_SEQUENCE_SIX, this.NUMBER_ON_SAME_TEAM_SEQUENCE_SEVEN, this.NUMBER_ON_SAME_TEAM_SEQUENCE_EIGHT, this.NUMBER_ON_SAME_TEAM_SEQUENCE_NINE]);
        return this;
    }
}

