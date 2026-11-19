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
// package org.allbinary.input
// import org.allbinary.android.input.motion.AnalogLocationInputProcessor
// import org.allbinary.game.input.GameInputProcessor
// import org.allbinary.game.input.GameKeyEventSourceInterface
// import org.allbinary.game.input.GameKeyFactory
// import org.allbinary.game.input.analog.AnalogLocationInput
// import org.allbinary.game.input.event.GameKeyEvent
// import org.allbinary.game.input.event.GameKeyEventFactory
// import org.allbinary.graphics.CustomGPoint
// import org.allbinary.layer.AllBinaryLayerManager
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.string.CommonStrings

@global export class DirectionalAnalogLocationInputProcessor extends AnalogLocationInputProcessor implements GameKeyEventSourceInterface {

    jclassName(): string {
        return "org.allbinary.input.DirectionalAnalogLocationInputProcessor";
    }
    logUtil: LogUtil | null = null;
    inputProcessorArray: StaticArray<GameInputProcessor | null> | null = null;
    gameKeyFactory: GameKeyFactory | null = null;
    leftGameKeyEvent: GameKeyEvent | null = null;
    rightGameKeyEvent: GameKeyEvent | null = null;
    upGameKeyEvent: GameKeyEvent | null = null;
    downGameKeyEvent: GameKeyEvent | null = null;
    leftTriggerGameKeyEvent: GameKeyEvent | null = null;
    rightTriggerGameKeyEvent: GameKeyEvent | null = null;

    jfields_DirectionalAnalogLocationInputProcessor(): void {
    this.logUtil = LogUtil.getInstance();
    
    this.gameKeyFactory = GameKeyFactory.getInstance();
    this.leftGameKeyEvent = GameKeyEvent.NONE;
    this.rightGameKeyEvent = GameKeyEvent.NONE;
    this.upGameKeyEvent = GameKeyEvent.NONE;
    this.downGameKeyEvent = GameKeyEvent.NONE;
    this.leftTriggerGameKeyEvent = GameKeyEvent.NONE;
    this.rightTriggerGameKeyEvent = GameKeyEvent.NONE;
    }
    

    jinit_DirectionalAnalogLocationInputProcessor_1(inputProcessorArray: StaticArray<GameInputProcessor | null> | null): DirectionalAnalogLocationInputProcessor {
        super.jinit_AnalogLocationInputProcessor_0();
        this.jfields_DirectionalAnalogLocationInputProcessor();
        this.inputProcessorArray = inputProcessorArray;
        do {
            this.leftGameKeyEvent = GameKeyEventFactory.getInstance()!.getInstanceForInput(this, this.gameKeyFactory!.LEFT); if (JThrowable.pending !== null) break;
            this.rightGameKeyEvent = GameKeyEventFactory.getInstance()!.getInstanceForInput(this, this.gameKeyFactory!.RIGHT); if (JThrowable.pending !== null) break;
            this.upGameKeyEvent = GameKeyEventFactory.getInstance()!.getInstanceForInput(this, this.gameKeyFactory!.UP); if (JThrowable.pending !== null) break;
            this.downGameKeyEvent = GameKeyEventFactory.getInstance()!.getInstanceForInput(this, this.gameKeyFactory!.DOWN); if (JThrowable.pending !== null) break;
            this.leftTriggerGameKeyEvent = GameKeyEventFactory.getInstance()!.getInstanceForInput(this, this.gameKeyFactory!.KEY_NUM0); if (JThrowable.pending !== null) break;
            this.rightTriggerGameKeyEvent = GameKeyEventFactory.getInstance()!.getInstanceForInput(this, this.gameKeyFactory!.KEY_NUM5); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return this;
            this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.CONSTRUCTOR, e); if (JThrowable.pending !== null) return this;
        } if (JThrowable.pending !== null) return this;
        return this;
    }
    

    process(allbinaryLayerManager: AllBinaryLayerManager | null, analogLocationInput: AnalogLocationInput | null): void {
        do {
            let customGPoint: CustomGPoint | null = null;
            customGPoint = analogLocationInput!.getCustomGPoint(); if (JThrowable.pending !== null) break;
            let x: i32 = customGPoint!.getX(); if (JThrowable.pending !== null) break;
            let y: i32 = customGPoint!.getY(); if (JThrowable.pending !== null) break;
            let leftTrigger: i32 = analogLocationInput!.getLeftTrigger(); if (JThrowable.pending !== null) break;
            let rightTrigger: i32 = analogLocationInput!.getRightTrigger(); if (JThrowable.pending !== null) break;
            if (x < 0) {
                this.inputProcessorArray![this.leftGameKeyEvent!.getKey()]!.processAnalog(allbinaryLayerManager, this.leftGameKeyEvent, x); if (JThrowable.pending !== null) break;
            } else if (x > 0) {
                this.inputProcessorArray![this.rightGameKeyEvent!.getKey()]!.processAnalog(allbinaryLayerManager, this.rightGameKeyEvent, x); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            if (y < 0) {
                this.inputProcessorArray![this.downGameKeyEvent!.getKey()]!.processAnalog(allbinaryLayerManager, this.downGameKeyEvent, y); if (JThrowable.pending !== null) break;
            } else if (y > 0) {
                this.inputProcessorArray![this.upGameKeyEvent!.getKey()]!.processAnalog(allbinaryLayerManager, this.upGameKeyEvent, y); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            if (leftTrigger > 0) {
                this.inputProcessorArray![this.leftTriggerGameKeyEvent!.getKey()]!.processAnalog(allbinaryLayerManager, this.leftTriggerGameKeyEvent, leftTrigger); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            if (rightTrigger > 0) {
                this.inputProcessorArray![this.rightTriggerGameKeyEvent!.getKey()]!.processAnalog(allbinaryLayerManager, this.rightTriggerGameKeyEvent, rightTrigger); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return;
            this.logUtil!.put("Unable to process analog input", this, commonStrings!.PROCESS, e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    getSourceId(): i32 {
        return 0;
    }
}

