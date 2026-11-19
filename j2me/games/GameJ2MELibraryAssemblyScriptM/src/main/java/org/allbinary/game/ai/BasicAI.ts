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
// package org.allbinary.game.ai
// import org.allbinary.ai.ArtificialIntelligence
// import org.allbinary.game.displayable.canvas.CanvasUtil
// import org.allbinary.game.input.GameInput
// import org.allbinary.game.input.GameKeyEventSourceInterface
// import org.allbinary.game.input.event.GameKeyEventFactory
// import org.allbinary.layer.AllBinaryLayer
// import org.allbinary.layer.AllBinaryLayerManager
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.math.SmallIntegerSingletonFactory
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.string.CommonSeps
// import org.allbinary.string.CommonStrings

@global export class BasicAI extends ArtificialIntelligence implements GameKeyEventSourceInterface {

    jclassName(): string {
        return "org.allbinary.game.ai.BasicAI";
    }
    @lazy static jv_AI_VISITOR: JInteger | null = null;
    @lazy static js_AI_VISITOR: bool = false;
    static get AI_VISITOR(): JInteger | null {
        if (!BasicAI.js_AI_VISITOR) {
            BasicAI.js_AI_VISITOR = true;
            BasicAI.jv_AI_VISITOR = SmallIntegerSingletonFactory.getInstance()!.getAt(2);
        }
        return BasicAI.jv_AI_VISITOR;
    }
    static set AI_VISITOR(value: JInteger | null) {
        BasicAI.js_AI_VISITOR = true;
        BasicAI.jv_AI_VISITOR = value;
    }
    @lazy static jv_ID: JInteger | null = null;
    @lazy static js_ID: bool = false;
    static get ID(): JInteger | null {
        if (!BasicAI.js_ID) {
            BasicAI.js_ID = true;
            BasicAI.jv_ID = SmallIntegerSingletonFactory.getInstance()!.getAt(1);
        }
        return BasicAI.jv_ID;
    }
    static set ID(value: JInteger | null) {
        BasicAI.js_ID = true;
        BasicAI.jv_ID = value;
    }
    logUtil: LogUtil | null = null;
    commonStrings: CommonStrings | null = null;
    gameKeyEventFactory: GameKeyEventFactory | null = null;
    ownerLayerInterface: AllBinaryLayer | null = null;
    gameInput: GameInput | null = null;
    lastKey: i32 = 0;

    jfields_BasicAI(): void {
    this.logUtil = LogUtil.getInstance();
    this.commonStrings = CommonStrings.getInstance();
    this.gameKeyEventFactory = GameKeyEventFactory.getInstance();
    
    
    this.lastKey = -1;
    }
    

    jinit_BasicAI_2(ownerLayerInterface: AllBinaryLayer | null, gameInput: GameInput | null): BasicAI {
        super.jinit_ArtificialIntelligence_0();
        this.jfields_BasicAI();
        this.ownerLayerInterface = ownerLayerInterface;
        this.gameInput = gameInput;
        return this;
    }
    

    processAI(allBinaryLayerManager: AllBinaryLayerManager | null): void {
        { JThrowable.raise(new JException().jinit_JException_1(this.commonStrings!.NOT_IMPLEMENTED)); return; }
    }
    

    processKeyAI(key: i32): void {
        if (key != -1) {
            this.gameInput!.add(this.gameKeyEventFactory!.getInstanceForKey(this, key)); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    setLastKey(lastKey: i32): void {
        this.lastKey = lastKey;
    }
    

    getLastKey(): i32 {
        return this.lastKey;
    }
    

    getOwnerLayerInterface(): AllBinaryLayer | null {
        return this.ownerLayerInterface;
    }
    

    getGameInput(): GameInput | null {
        return this.gameInput;
    }
    

    getName(): string | null {
        return JObject.jclassOf(this)!.getName();
    }
    

    toString(): string | null {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(CommonSeps.getInstance()!.NEW_LINE); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.getName()); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(" LastKey: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(CanvasUtil.getKeyName(this.getLastKey())); if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
    

    getSourceId(): i32 {
        return 1;
    }
}

