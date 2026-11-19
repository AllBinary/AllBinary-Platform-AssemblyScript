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
// import org.allbinary.ai.ArtificialIntelligenceInterface
// import org.allbinary.game.input.GameInput
// import org.allbinary.layer.AllBinaryLayer
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.string.CommonStrings
// import org.allbinary.util.ABHashtable
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class NumberOnOwnGroupSequenceAIFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.ag.ai.NumberOnOwnGroupSequenceAIFactory";
    }
    logUtil: LogUtil | null = null;

    jfields_NumberOnOwnGroupSequenceAIFactory(): void {
    this.logUtil = LogUtil.getInstance();
    }

    jinit_NumberOnOwnGroupSequenceAIFactory_0(): NumberOnOwnGroupSequenceAIFactory {
        super.jinit_JObject_0();
        this.jfields_NumberOnOwnGroupSequenceAIFactory();
        return this;
    }
    

    getInstance4(hashtable: ABHashtable | null, artificialIntelligenceInterface: StaticArray<ArtificialIntelligenceInterface | null> | null, ownerLayerInterface: AllBinaryLayer | null, gameInput: GameInput | null): ArtificialIntelligenceInterface | null {
        let integerArray: StaticArray<JInteger | null> | null = NumberInSameGroupSequence.getInstance()!.NUMBER_ON_SAME_TEAM_SEQUENCE; if (JThrowable.pending !== null) return null;
        let list: BasicArrayList | null = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) return null;
        for (let index: i32 = 0; index < integerArray!.length; index++) {
            let integerCanBeNull: Object | null = hashtable!.get(changetype<Object | null>(integerArray![index])); if (JThrowable.pending !== null) return null;
            if (integerCanBeNull == null) {
                break;
            }
            list!.add(integerCanBeNull); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        stringBuffer!.append("Total AI Properties: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint(list!.size()); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(" == Total AI: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint(artificialIntelligenceInterface!.length); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(" + 1"); if (JThrowable.pending !== null) return null;
        let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return null;
        this.logUtil!.putF(JObject.jtoString(stringBuffer), this, commonStrings!.GET_INSTANCE); if (JThrowable.pending !== null) return null;
        if (artificialIntelligenceInterface!.length - 1 > list!.size()) {
            { JThrowable.raise(new JException().jinit_JException_1("Not enough AI properties.")); return null; }
        } if (JThrowable.pending !== null) return null;
        if (artificialIntelligenceInterface!.length - 1 < list!.size()) {
            { JThrowable.raise(new JException().jinit_JException_1("Too Many AI properties.")); return null; }
        } if (JThrowable.pending !== null) return null;
        let numberOnSameTeam: StaticArray<JInteger | null> | null = new StaticArray<JInteger | null>(list!.size()); if (JThrowable.pending !== null) return null;
        for (let index: i32 = 0; index < numberOnSameTeam!.length; index++) {
            numberOnSameTeam![index] = changetype<JInteger | null>(list!.objectArray![index]);
        }
        return new NumberOnOwnGroupSequenceAI().jinit_NumberOnOwnGroupSequenceAI_4(numberOnSameTeam, artificialIntelligenceInterface, ownerLayerInterface, gameInput);
    }
}

