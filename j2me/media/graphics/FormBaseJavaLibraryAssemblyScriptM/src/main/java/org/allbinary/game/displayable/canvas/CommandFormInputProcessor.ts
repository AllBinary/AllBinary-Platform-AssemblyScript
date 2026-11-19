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
// package org.allbinary.game.displayable.canvas
// import javax.microedition.lcdui.Canvas
// import javax.microedition.lcdui.Command
// import org.allbinary.game.commands.GameCommandsFactory
// import org.allbinary.game.configuration.feature.Features
// import org.allbinary.game.configuration.feature.InputFeatureFactory
// import org.allbinary.game.input.event.GameKeyEvent
// import org.allbinary.game.input.event.GameKeyEventFactory
// import org.allbinary.game.layer.SWTUtil
// import org.allbinary.graphics.GPoint
// import org.allbinary.graphics.displayable.MyCanvas
// import org.allbinary.graphics.form.CommandCurrentSelectionForm
// import org.allbinary.graphics.form.ScrollSelectionForm
// import org.allbinary.graphics.opengles.OpenGLFeatureFactory
// import org.allbinary.input.motion.gesture.MotionGestureInput
// import org.allbinary.input.motion.gesture.TouchMotionGestureFactory
// import org.allbinary.input.motion.gesture.observer.MotionGestureEvent
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.media.audio.PrimaryPlayerQueueFactory
// import org.allbinary.media.audio.SelectSound
// import org.allbinary.thread.PrimaryThreadPool
// import org.allbinary.time.TimeDelayHelper
// import org.allbinary.util.BasicArrayList

//In general allow scrolling of the menu and selection the center item
@global export class CommandFormInputProcessor extends BasicMenuInputProcessor {

    jclassName(): string {
        return "org.allbinary.game.displayable.canvas.CommandFormInputProcessor";
    }
    MOTION_GESTURE_SOURCE_ID: i32 = 0;
    CLICK_DELAY: i32 = 0;
    clickTimeHelper: TimeDelayHelper | null = null;
    DOUBLE_CLICK_DELAY: i32 = 0;
    doubleClickTimeHelper: TimeDelayHelper | null = null;
    isSingleKeyProcessing: bool = false;
    form: ScrollSelectionForm | null = null;
    hasPressed: bool = false;
    PROCESS_COMMAND: string | null = null;
    NAME_LABEL: string | null = null;

    jfields_CommandFormInputProcessor(): void {
    this.MOTION_GESTURE_SOURCE_ID = GameKeyEventFactory.getInstance()!.MOTION_GESTURE_SOURCE_ID;
    this.CLICK_DELAY = 150;
    this.clickTimeHelper = new TimeDelayHelper().jinit_TimeDelayHelper_1(this.CLICK_DELAY);
    this.DOUBLE_CLICK_DELAY = 1200;
    this.doubleClickTimeHelper = new TimeDelayHelper().jinit_TimeDelayHelper_1(this.DOUBLE_CLICK_DELAY);
    this.isSingleKeyProcessing = InputFeatureFactory.getInstance()!.isSingleKeyProcessing();
    
    this.hasPressed = false;
    this.PROCESS_COMMAND = "processCommand";
    this.NAME_LABEL = " ScrollSelectionForm: ";
    }
    

    jinit_CommandFormInputProcessor_4(gameKeyEventList: BasicArrayList | null, playerInputId: i32, gameCanvas: MyCanvas | null, form: ScrollSelectionForm | null): CommandFormInputProcessor {
        super.jinit_BasicMenuInputProcessor_3(gameKeyEventList, playerInputId, gameCanvas);
        this.jfields_CommandFormInputProcessor();
        this.form = form;
        return this;
    }
    

    processInput(key: i32): i32 {
        if (key == Canvas.LEFT || key == Canvas.RIGHT || key == Canvas.UP || key == Canvas.DOWN) {
            PrimaryPlayerQueueFactory.getInstance()!.add(SelectSound.getInstance()); if (JThrowable.pending !== null) return 0;
            this.form!.processInputKey(key); if (JThrowable.pending !== null) return 0;
            return 1;
        } else if (key == Canvas.FIRE) {
            PrimaryPlayerQueueFactory.getInstance()!.add(SelectSound.getInstance()); if (JThrowable.pending !== null) return 0;
            return this.processCommand();
        } if (JThrowable.pending !== null) return 0;
        return 0;
    }
    

    processCommand(): i32 {
        let commandCurrentSelectionForm: CommandCurrentSelectionForm | null = changetype<CommandCurrentSelectionForm | null>(this.form);
        let command: Command | null = commandCurrentSelectionForm!.getSelectedCommand(); if (JThrowable.pending !== null) return 0;
        this.logUtil!.putF(JObject.jtoString(command), this, this.PROCESS_COMMAND); if (JThrowable.pending !== null) return 0;
        let features: Features | null = Features.getInstance(); if (JThrowable.pending !== null) return 0;
        let openGLFeatureFactory: OpenGLFeatureFactory | null = OpenGLFeatureFactory.getInstance(); if (JThrowable.pending !== null) return 0;
        if (SWTUtil.isSWT && features!.isFeature(openGLFeatureFactory!.OPENGL) && command != GameCommandsFactory.getInstance()!.EXIT_COMMAND) {
            new CommandRunnable().jinit_CommandRunnable_2(this, command)!.run(); if (JThrowable.pending !== null) return 0;
        } else {
            PrimaryThreadPool.getInstance()!.runTask(new CommandRunnable().jinit_CommandRunnable_2(this, command)); if (JThrowable.pending !== null) return 0;
        } if (JThrowable.pending !== null) return 0;
        if (command == GameCommandsFactory.getInstance()!.QUIT_COMMAND) {
            return -1;
        } else {
            return 1;
        } if (JThrowable.pending !== null) return 0;
        return 0;
    }
    

    processInputList(): i32 {
        do {
            let motionInputsIndex: i32 = this.processMotionInputs(); if (JThrowable.pending !== null) break;
            let list: BasicArrayList | null = this.getGameKeyEventList(); if (JThrowable.pending !== null) break;
            let size: i32 = list!.size(); if (JThrowable.pending !== null) break;
            let key: i32 = 0;
            let gameKeyEvent: GameKeyEvent | null = null;
            for (let index: i32 = 0; index < size; index++) {
                gameKeyEvent = changetype<GameKeyEvent | null>(list!.objectArray![index]);
                key = gameKeyEvent!.getKey(); if (JThrowable.pending !== null) break;
                if (gameKeyEvent!.getSourceId() != this.MOTION_GESTURE_SOURCE_ID) {
                    if (this.processInput(key) == 1) {
                        break;
                    } if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            this.clear(); if (JThrowable.pending !== null) break;
            if (size > 0 || motionInputsIndex >= 0) {
                return 1;
            } else {
                return -1;
            }
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.gameInputStrings!.PROCESS_INPUT, e); if (JThrowable.pending !== null) return 0;
            return -1;
        } if (JThrowable.pending !== null) return 0;
        return 0;
    }
    

    processMotionInputs(): i32 {
        let lastIndex: i32 = this.motionGestureEventList!.size() - 1; if (JThrowable.pending !== null) return 0;
        if (lastIndex >= 0) {
            let motionGestureEvent: MotionGestureEvent | null = changetype<MotionGestureEvent | null>(this.motionGestureEventList!.objectArray![lastIndex]);
            this.processMotionInput(motionGestureEvent); if (JThrowable.pending !== null) return 0;
        } if (JThrowable.pending !== null) return 0;
        this.motionGestureEventList!.clear(); if (JThrowable.pending !== null) return 0;
        return lastIndex;
    }
    

    processMotionInput(motionGestureEvent: MotionGestureEvent | null): void {
        let touchMotionGestureFactory: TouchMotionGestureFactory | null = TouchMotionGestureFactory.getInstance(); if (JThrowable.pending !== null) return;
        let motionGestureInput: MotionGestureInput | null = motionGestureEvent!.getMotionGesture(); if (JThrowable.pending !== null) return;
        if (motionGestureInput == touchMotionGestureFactory!.RELEASED) {
            let point: GPoint | null = motionGestureEvent!.getCurrentPoint(); if (JThrowable.pending !== null) return;
            if (this.form!.isInForm(point)) {
                let index: i32 = this.form!.getSelectedIndexForPoint(point); if (JThrowable.pending !== null) return;
                if (index != -1) {
                    PrimaryPlayerQueueFactory.getInstance()!.add(SelectSound.getInstance()); if (JThrowable.pending !== null) return;
                    if (index == this.form!.getSelectedIndex()) {
                        if (this.clickTimeHelper!.isTimeTNT()) {
                            this.processCommand(); if (JThrowable.pending !== null) return;
                        } if (JThrowable.pending !== null) return;
                    } else {
                        this.form!.setSelectedIndex(index); if (JThrowable.pending !== null) return;
                    } if (JThrowable.pending !== null) return;
                } else {
                } if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
            if (this.hasPressed) {
                if (!this.doubleClickTimeHelper!.isTimeTNT()) {
                    this.logUtil!.putF("Double Press", this, this.gameInputStrings!.PROCESS_MOTION_INPUT); if (JThrowable.pending !== null) return;
                    this.processCommand(); if (JThrowable.pending !== null) return;
                } if (JThrowable.pending !== null) return;
                this.doubleClickTimeHelper!.delay = this.DOUBLE_CLICK_DELAY;
                this.doubleClickTimeHelper!.setStartTimeTNT(); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
            this.hasPressed = false;
        } else if (motionGestureInput == touchMotionGestureFactory!.PRESSED) {
            this.doubleClickTimeHelper!.delay = 0;
            this.hasPressed = true;
        } if (JThrowable.pending !== null) return;
    }
    

    toString(): string | null {
        return JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(super.toString())!.append(this.NAME_LABEL)!.append(JObject.jtoString(this.form)));
    }
}

