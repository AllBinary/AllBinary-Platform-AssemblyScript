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
// package org.allbinary.graphics.canvas.transition.progress
// import javax.microedition.lcdui.CommandListener
// import javax.microedition.lcdui.Font
// import javax.microedition.lcdui.Graphics
// import javax.microedition.lcdui.NullCanvas
// import javax.microedition.lcdui.NullCommandListener
// import org.allbinary.canvas.Processor
// import org.allbinary.canvas.RunnableCanvas
// import org.allbinary.game.commands.GameCommandsFactory
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.graphics.displayable.CanvasStrings
// import org.allbinary.graphics.font.MyFontProcessor
// import org.allbinary.graphics.font.UpdateMyFontInterface
// import org.allbinary.graphics.font.UpdateMyFontProcessor
// import org.allbinary.graphics.form.item.ABCustomGaugeItem
// import org.allbinary.graphics.paint.NullPaintable
// import org.allbinary.graphics.paint.Paintable
// import org.allbinary.graphics.paint.PaintableInterface
// import org.allbinary.logic.communication.log.PreLogUtil
// import org.allbinary.logic.math.SmallIntegerSingletonFactory
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.midlet.AllBinaryMidlet
// import org.allbinary.thread.PathFindingThreadPool
// import org.allbinary.thread.ThreadPool

@global export class ProgressCanvas extends RunnableCanvas implements PaintableInterface, UpdateMyFontInterface {

    jclassName(): string {
        return "org.allbinary.graphics.canvas.transition.progress.ProgressCanvas";
    }
    hasPainted: bool = false;
    backgroundBasicColor: BasicColor | null = null;
    GAUGE_PAINTABLE: Paintable | null = null;
    maxValue: f32 = 0.0;
    gauge: ABCustomGaugeItem | null = null;
    TEXT: string | null = null;
    updateMyFontProcessor: MyFontProcessor | null = null;
    myFontProcessor: MyFontProcessor | null = null;
    allbinaryMidlet: AllBinaryMidlet | null = null;
    value: f32 = 0.0;
    text: string | null = null;
    background: bool = false;
    paintable: PaintableInterface | null = null;
    inProgress: bool = false;
    IN_GAME_PROCESSOR: Processor | null = null;
    inGameProcessor: Processor | null = null;
    progressEndListener: ProgressEndListener | null = null;
    backgroundLabel: string | null = null;
    START_BACKGROUND: string | null = null;
    ADD_PORTION: string | null = null;
    ADD_EARLY_PORTION: string | null = null;

    jfields_ProgressCanvas(): void {
    this.hasPainted = false;
    
    this.GAUGE_PAINTABLE = new ProgressPaintable().jinit_ProgressPaintable_1(this);
    this.maxValue = (<f32>100.0);
    
    this.TEXT = this.commonStrings!.LOADING;
    this.updateMyFontProcessor = new UpdateMyFontProcessor().jinit_UpdateMyFontProcessor_1(this);
    this.myFontProcessor = this.updateMyFontProcessor;
    this.allbinaryMidlet = AllBinaryMidlet.getNullInstance();
    this.value = 0.0;
    this.text = this.TEXT;
    this.background = true;
    this.paintable = this.GAUGE_PAINTABLE;
    this.inProgress = false;
    this.IN_GAME_PROCESSOR = changetype<Processor | null>(0) /* Java anonymous class: not converted
        this.pathFindingThreadPool = PathFindingThreadPool.getInstance();
        

        process(): void {
            this.pathFindingThreadPool!.runAPriorityTask();
        } */;
    this.inGameProcessor = Processor.getInstance();
    this.progressEndListener = ProgressEndListener.instance;
    this.backgroundLabel = "Background AI Game Loading...";
    this.START_BACKGROUND = "startBackground";
    this.ADD_PORTION = "addPortion";
    this.ADD_EARLY_PORTION = "addEarlyPortion";
    }
    

    jinit_ProgressCanvas_3(title: string | null, backgroundBasicColor: BasicColor | null, foregroundBasicColor: BasicColor | null): ProgressCanvas {
        super.jinit_RunnableCanvas_3(NullCommandListener.NULL_COMMAND_LISTENER, CanvasStrings.getInstance()!.EMPTY_CHILD_NAME_LIST, false);
        this.jfields_ProgressCanvas();
        this.backgroundBasicColor = backgroundBasicColor;
        this.gauge = new ABCustomGaugeItem().jinit_ABCustomGaugeItem_5(StringUtil.getInstance()!.EMPTY_STRING, JMath.toInt(this.maxValue), 0, backgroundBasicColor, foregroundBasicColor); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    updateMeasurement(graphics: Graphics | null): void {
        let font: Font | null = graphics!.getFont(); if (JThrowable.pending !== null) return;
        this.gauge!.setHeight(font!.getHeight() + 2); if (JThrowable.pending !== null) return;
        this.myFontProcessor = MyFontProcessor.getInstance(); if (JThrowable.pending !== null) return;
    }
    

    init(gameMidlet: AllBinaryMidlet | null): void {
        this.allbinaryMidlet = gameMidlet;
    }
    

    update(graphics: Graphics | null): void {
    }
    

    initCommands(cmdListener: CommandListener | null): void {
    }
    

    getMaxValue(): f32 {
        return this.maxValue;
    }
    

    start(): void {
        this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.START_METHOD_NAME); if (JThrowable.pending !== null) return;
        this.setBackground(true); if (JThrowable.pending !== null) return;
        this.gauge!.setHeight(30); if (JThrowable.pending !== null) return;
        this.gauge!.setLabel(this.commonStrings!.PLEASE_WAIT); if (JThrowable.pending !== null) return;
        this.setText(this.TEXT); if (JThrowable.pending !== null) return;
        this.setValue(0); if (JThrowable.pending !== null) return;
        this.inGameProcessor = Processor.getInstance(); if (JThrowable.pending !== null) return;
        this.paintable = this.GAUGE_PAINTABLE;
        this.inProgress = true;
    }
    

    startBackground(background: bool): void {
        this.logUtil!.putF(this.commonStrings!.START, this, this.START_BACKGROUND); if (JThrowable.pending !== null) return;
        this.setBackground(background); if (JThrowable.pending !== null) return;
        this.myFontProcessor = this.updateMyFontProcessor;
        this.gauge!.setLabel(this.backgroundLabel); if (JThrowable.pending !== null) return;
        this.setText(this.TEXT); if (JThrowable.pending !== null) return;
        this.setValue(0); if (JThrowable.pending !== null) return;
        this.inGameProcessor = Processor.getInstance(); if (JThrowable.pending !== null) return;
        this.paintable = this.GAUGE_PAINTABLE;
    }
    

    endActual(): void {
        this.allbinaryMidlet!.commandAction(GameCommandsFactory.getInstance()!.SHOW_GAME_CANVAS, NullCanvas.NULL_CANVAS); if (JThrowable.pending !== null) return;
        this.inProgress = false;
        this.inGame(); if (JThrowable.pending !== null) return;
    }
    

    inGame(): void {
        this.progressEndListener!.onEndEvent(); if (JThrowable.pending !== null) return;
        this.inGameProcessor = this.IN_GAME_PROCESSOR;
    }
    

    end(): void {
        this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.END_METHOD_NAME); if (JThrowable.pending !== null) return;
        this.gauge!.setValue(this.getMaxValue()); if (JThrowable.pending !== null) return;
        this.endActual(); if (JThrowable.pending !== null) return;
        this.paintable = NullPaintable.getInstance(); if (JThrowable.pending !== null) return;
    }
    

    endFromInitialLazyLoadingComplete(): void {
        this.progressEndListener!.onEndEvent(); if (JThrowable.pending !== null) return;
        this.gauge!.setValue(this.getMaxValue()); if (JThrowable.pending !== null) return;
        this.inGameProcessor = this.IN_GAME_PROCESSOR;
    }
    

    isInGame(): bool {
        if (this.inGameProcessor == this.IN_GAME_PROCESSOR) {
            return true;
        }
        return false;
    }
    

    endIfPaintedSinceStart(): void {
    }
    

    addEarlyPortion(value: i32, text: string | null, index: i32): void {
        this.setText(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(text)!.append(JObject.jtoString(SmallIntegerSingletonFactory.getInstance()!.getAt(index))))); if (JThrowable.pending !== null) return;
        this.gauge!.setValue(this.gauge!.getValue() + this.getMaxValue() / (<f32>(value))); if (JThrowable.pending !== null) return;
    }
    

    addPortion(value: i32, text: string | null, index: i32): void {
        this.setText(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(text)!.append(JObject.jtoString(SmallIntegerSingletonFactory.getInstance()!.getAt(index))))); if (JThrowable.pending !== null) return;
        PreLogUtil.put(this.text, this, this.ADD_PORTION); if (JThrowable.pending !== null) return;
        this.gauge!.setValue(this.gauge!.getValue() + this.getMaxValue() / (<f32>(value))); if (JThrowable.pending !== null) return;
    }
    

    addNormalPortion(value: i32, text: string | null): void {
        if (this.text != text) {
            PreLogUtil.put(text, this, this.ADD_PORTION); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        this.setText(text); if (JThrowable.pending !== null) return;
        this.gauge!.setValue(this.gauge!.getValue() + this.getMaxValue() / (<f32>(value))); if (JThrowable.pending !== null) return;
    }
    

    setValue(value: i32): void {
        this.value = (<f32>(value));
        this.gauge!.setValue((<f32>(value))); if (JThrowable.pending !== null) return;
    }
    

    paint(graphics: Graphics | null): void {
        this.paintable!.paint(graphics); if (JThrowable.pending !== null) return;
    }
    

    paint2(graphics: Graphics | null): void {
        this.myFontProcessor!.process(graphics); if (JThrowable.pending !== null) return;
        graphics!.setColor(this.backgroundBasicColor!.intValue()); if (JThrowable.pending !== null) return;
        graphics!.fillRect(0, 0, this.displayInfo!.getLastWidth(), this.displayInfo!.getLastHeight()); if (JThrowable.pending !== null) return;
        this.gauge!.paintXY(graphics, 0, 0); if (JThrowable.pending !== null) return;
        this.hasPainted = true;
    }
    

    paintThreed(graphics: Graphics | null): void {
    }
    

    getValue(): f32 {
        return this.value;
    }
    

    setText(text: string | null): void {
        this.text = text;
    }
    

    getText(): string | null {
        return this.text;
    }
    

    setBackground(background: bool): void {
        this.background = background;
    }
    

    isBackground(): bool {
        return this.background;
    }
}

