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
// package org.allbinary.input.motion.button
// import org.allbinary.game.input.CompleteMotionGestureInputEvent
// import org.allbinary.game.input.CompleteMotionGestureInputEventHandler
// import org.allbinary.game.input.CompleteMotionGestureInputEventListenerInterface
// import org.allbinary.game.input.GameKey
// import org.allbinary.game.input.mapping.InputMappingInterface
// import org.allbinary.game.input.motion.action.GameKeyCompleteMotionGestureInputEvent
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.graphics.paint.ProcessPaintable
// import org.allbinary.input.motion.gesture.MotionGestureInput
// import org.allbinary.input.motion.gesture.TouchMotionGestureFactory
// import org.allbinary.logic.communication.log.ForcedLogUtil
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.logic.util.event.AllBinaryEventObject
// import org.allbinary.logic.util.event.EventStrings
// import org.allbinary.string.CommonStrings
// import org.allbinary.time.TimeDelayHelper

@global export class TouchButtonsPaintableComposite extends ProcessPaintable implements CompleteMotionGestureInputEventListenerInterface {

    jclassName(): string {
        return "org.allbinary.input.motion.button.TouchButtonsPaintableComposite";
    }
    logUtil: LogUtil | null = null;
    commonStrings: CommonStrings | null = null;
    inputMappingInterface: InputMappingInterface | null = null;
    touchButtonsPaintable: TouchButtonsMappingPaintable | null = null;
    timeHelper: TimeDelayHelper | null = null;
    released: bool = false;
    METHOD_NAME: string | null = null;
    RELEASE: string | null = null;
    FAST_REPEAT: string | null = null;
    IGNORE: string | null = null;

    jfields_TouchButtonsPaintableComposite(): void {
    this.logUtil = LogUtil.getInstance();
    this.commonStrings = CommonStrings.getInstance();
    
    
    this.timeHelper = new TimeDelayHelper().jinit_TimeDelayHelper_1(250);
    this.released = true;
    this.METHOD_NAME = "onCompleteMotionGestureInputEvent";
    this.RELEASE = "Ignoring: MotionGestureInput Release";
    this.FAST_REPEAT = "Ignoring: MotionGestureInput Repeated To Quickly";
    this.IGNORE = "Ignoring: Until Released";
    }
    

    jinit_TouchButtonsPaintableComposite_2(inputMappingInterface: InputMappingInterface | null, basicColor: BasicColor | null): TouchButtonsPaintableComposite {
        super.jinit_ProcessPaintable_0();
        this.jfields_TouchButtonsPaintableComposite();
        this.inputMappingInterface = inputMappingInterface;
        CompleteMotionGestureInputEventHandler.getInstance()!.addListenerInterface(this); if (JThrowable.pending !== null) return this;
        this.touchButtonsPaintable = new TouchButtonsMappingPaintable().jinit_TouchButtonsMappingPaintable_1(basicColor); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    onEvent(eventObject: AllBinaryEventObject | null): void {
        ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this); if (JThrowable.pending !== null) return;
    }
    

    onCompleteMotionGestureInputEvent(completeMotionGestureInputEvent: CompleteMotionGestureInputEvent | null): void {
        do {
            this.logUtil!.putF(this.commonStrings!.START, this, "onCompleteMotionGestureInputEvent"); if (JThrowable.pending !== null) break;
            let touchMotionGestureFactory: TouchMotionGestureFactory | null = TouchMotionGestureFactory.getInstance(); if (JThrowable.pending !== null) break;
            let gameKeyCompleteMotionGestureInputEvent: GameKeyCompleteMotionGestureInputEvent | null = changetype<GameKeyCompleteMotionGestureInputEvent | null>(completeMotionGestureInputEvent);
            let gameKey: GameKey | null = gameKeyCompleteMotionGestureInputEvent!.getGameKey(); if (JThrowable.pending !== null) break;
            let motionGestureInput: MotionGestureInput | null = completeMotionGestureInputEvent!.getMotionGestureInput(); if (JThrowable.pending !== null) break;
            if (motionGestureInput == touchMotionGestureFactory!.RELEASED) {
                this.logUtil!.putF(this.RELEASE, this, this.METHOD_NAME); if (JThrowable.pending !== null) break;
                this.released = true;
                return;
            } if (JThrowable.pending !== null) break;
            if (motionGestureInput == TouchMotionGestureFactory.getInstance()!.NO_MOTION && !this.timeHelper!.isTimeTNT()) {
                this.logUtil!.putF(this.FAST_REPEAT, this, this.METHOD_NAME); if (JThrowable.pending !== null) break;
                return;
            } if (JThrowable.pending !== null) break;
            if (!this.released) {
                this.logUtil!.putF(this.IGNORE, this, this.METHOD_NAME); if (JThrowable.pending !== null) break;
                return;
            } if (JThrowable.pending !== null) break;
            this.released = false;
            this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append("GameKey: ")!.append(StringUtil.getInstance()!.toString1(gameKey))!.append(" MotionGestureInput: ")!.append(StringUtil.getInstance()!.toString1(motionGestureInput))), this, this.METHOD_NAME); if (JThrowable.pending !== null) break;
            this.inputMappingInterface!.processInputMapping(gameKey, motionGestureInput); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.METHOD_NAME, e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    process(): void {
        CompleteMotionGestureInputEventHandler.getInstance()!.removeListener(this); if (JThrowable.pending !== null) return;
    }
}

