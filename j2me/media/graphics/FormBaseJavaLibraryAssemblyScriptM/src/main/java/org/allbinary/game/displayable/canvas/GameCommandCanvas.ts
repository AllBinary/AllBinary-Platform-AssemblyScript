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
// import javax.microedition.lcdui.CommandListener
// import javax.microedition.lcdui.Font
// import javax.microedition.lcdui.Graphics
// import javax.microedition.lcdui.NullCommandListener
// import org.allbinary.canvas.Processor
// import org.allbinary.game.commands.GameCommandsFactory
// import org.allbinary.game.configuration.feature.Features
// import org.allbinary.game.configuration.feature.InputFeatureFactory
// import org.allbinary.game.displayable.RepaintBehavior
// import org.allbinary.game.input.GameInputStrings
// import org.allbinary.game.input.GameKey
// import org.allbinary.game.input.GameKeyFactory
// import org.allbinary.game.input.PlatformInputMappingFactory
// import org.allbinary.game.input.event.DownGameKeyEventHandler
// import org.allbinary.game.input.event.GameKeyEvent
// import org.allbinary.game.input.event.GameKeyEventFactory
// import org.allbinary.game.input.event.GameKeyEventHandler
// import org.allbinary.game.input.event.UpGameKeyEventHandler
// import org.allbinary.game.input.mapping.InputToGameKeyMapping
// import org.allbinary.graphics.PointFactory
// import org.allbinary.graphics.Rectangle
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.graphics.displayable.CanvasStrings
// import org.allbinary.graphics.displayable.DisplayInfoSingleton
// import org.allbinary.graphics.displayable.MyCanvas
// import org.allbinary.graphics.displayable.event.DisplayChangeEvent
// import org.allbinary.graphics.displayable.event.DisplayChangeEventHandler
// import org.allbinary.graphics.displayable.event.DisplayChangeEventListener
// import org.allbinary.graphics.displayable.screen.ScreenRepaintProcessorFactory
// import org.allbinary.graphics.font.MyFontProcessor
// import org.allbinary.graphics.font.UpdateMyFontInterface
// import org.allbinary.graphics.font.UpdateMyFontProcessor
// import org.allbinary.graphics.form.CommandCurrentSelectionFormFactory
// import org.allbinary.graphics.form.FormPaintable
// import org.allbinary.graphics.form.FormTypeFactory
// import org.allbinary.graphics.form.PaintableForm
// import org.allbinary.graphics.form.ScrollSelectionForm
// import org.allbinary.graphics.form.ScrollSelectionFormNoneFactory
// import org.allbinary.graphics.form.item.CommandTextItemArrayFactory
// import org.allbinary.graphics.form.item.ABCustomItem
// import org.allbinary.graphics.form.item.validation.AllCommandsVisitor
// import org.allbinary.graphics.paint.NullPaintable
// import org.allbinary.graphics.paint.Paintable
// import org.allbinary.input.motion.gesture.observer.BasicMotionGesturesHandler
// import org.allbinary.logic.communication.log.ForcedLogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.logic.util.event.AllBinaryEventObject
// import org.allbinary.logic.util.event.EventStrings
// import org.allbinary.string.CommonSeps
// import org.allbinary.util.BasicArrayListD

@global export class GameCommandCanvas extends MyCanvas implements MenuListener, DisplayChangeEventListener, UpdateMyFontInterface {

    jclassName(): string {
        return "org.allbinary.game.displayable.canvas.GameCommandCanvas";
    }
    static readonly id: i32 = 0;
    repaintProcessor: Processor | null = null;
    gameInputStrings: GameInputStrings | null = null;
    foregroundBasicColor: BasicColor | null = null;
    backgroundBasicColor: BasicColor | null = null;
    inputToGameKeyMapping: InputToGameKeyMapping | null = null;
    gameKeyFactory: GameKeyFactory | null = null;
    gameKeyEventFactory: GameKeyEventFactory | null = null;
    downGameKeyEventHandler: DownGameKeyEventHandler | null = null;
    upGameKeyEventHandler: UpGameKeyEventHandler | null = null;
    repaintBehavior: RepaintBehavior | null = null;
    updateMyFontProcessor: MyFontProcessor | null = null;
    myFontProcessor: MyFontProcessor | null = null;
    foregroundColor: i32 = 0;
    backgroundColor: i32 = 0;
    menuInputProcessor: BasicMenuInputProcessor | null = null;
    menuPaintable: Paintable | null = null;
    menuForm: PaintableForm | null = null;
    isSingleKeyRepeatableProcessing: bool = false;
    fontHeight: i32 = 0;

    jfields_GameCommandCanvas(): void {
    this.repaintProcessor = ScreenRepaintProcessorFactory.getInstance()!.create(this);
    this.gameInputStrings = GameInputStrings.getInstance();
    
    
    this.inputToGameKeyMapping = PlatformInputMappingFactory.getInstance()!.getPersistentInputMappingInstance()!.getInputMapping();
    this.gameKeyFactory = GameKeyFactory.getInstance();
    this.gameKeyEventFactory = GameKeyEventFactory.getInstance();
    this.downGameKeyEventHandler = DownGameKeyEventHandler.getInstance();
    this.upGameKeyEventHandler = UpGameKeyEventHandler.getInstance();
    
    this.updateMyFontProcessor = new UpdateMyFontProcessor().jinit_UpdateMyFontProcessor_1(this);
    this.myFontProcessor = this.updateMyFontProcessor;
    
    
    this.menuInputProcessor = NoMenuInputProcessor.getInstance();
    this.menuPaintable = NullPaintable.getInstance();
    this.menuForm = PaintableForm.getNullPaintableForm();
    this.isSingleKeyRepeatableProcessing = Features.getInstance()!.isFeature(InputFeatureFactory.getInstance()!.SINGLE_KEY_REPEAT_PRESS);
    this.fontHeight = 0;
    }
    

    jinit_GameCommandCanvas_4(cmdListener: CommandListener | null, name: string | null, backgroundBasicColor: BasicColor | null, foregroundBasicColor: BasicColor | null): GameCommandCanvas {
        super.jinit_MyCanvas_2(name, CanvasStrings.getInstance()!.EMPTY_CHILD_NAME_LIST);
        this.jfields_GameCommandCanvas();
        this.repaintBehavior = RepaintBehavior.getInstance(); if (JThrowable.pending !== null) return this;
        this.foregroundBasicColor = foregroundBasicColor;
        this.backgroundBasicColor = backgroundBasicColor;
        this.foregroundColor = this.foregroundBasicColor!.intValue(); if (JThrowable.pending !== null) return this;
        this.backgroundColor = this.backgroundBasicColor!.intValue(); if (JThrowable.pending !== null) return this;
        this.initCommands(cmdListener); if (JThrowable.pending !== null) return this;
        if (cmdListener != NullCommandListener.NULL_COMMAND_LISTENER) {
            do {
                this.initMenu(); if (JThrowable.pending !== null) break;
                this.repaintProcessor!.process(); if (JThrowable.pending !== null) break;
            } while (false); if (JThrowable.pending != null) {
                let e: JException | null = changetype<JException | null>(JThrowable.take());
                { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return this; }
            } if (JThrowable.pending !== null) return this;
        } if (JThrowable.pending !== null) return this;
        return this;
    }
    

    updateMeasurement(graphics: Graphics | null): void {
        do {
            let font: Font | null = graphics!.getFont(); if (JThrowable.pending !== null) break;
            this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(this.commonStrings!.START)!.append(this.canvasStrings!.FD_WIDTH)!.appendint(MyFontProcessor.defaultCharWidth(font))!.append(this.canvasStrings!.FD_HEIGHT)!.appendint(font!.getHeight())), this, this.canvasStrings!.UPDATE_MEASUREMENT); if (JThrowable.pending !== null) break;
            this.fontHeight = font!.getHeight(); if (JThrowable.pending !== null) break;
            let rectangle: Rectangle | null = this.createRectangle(this.menuForm!.size()); if (JThrowable.pending !== null) break;
            this.menuForm!.init(rectangle, FormTypeFactory.getInstance()!.VERTICAL_CENTER_FORM); if (JThrowable.pending !== null) break;
            this.update(); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.canvasStrings!.ON_DISPLAY_CHANGE_EVENT, e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        this.myFontProcessor = MyFontProcessor.getInstance(); if (JThrowable.pending !== null) return;
    }
    

    onEvent(eventObject: AllBinaryEventObject | null): void {
        ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this); if (JThrowable.pending !== null) return;
    }
    

    onDisplayChangeEvent(displayChangeEvent: DisplayChangeEvent | null): void {
        this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(this.commonStrings!.START)!.append(JObject.jtoString(DisplayInfoSingleton.getInstance()))), this, this.canvasStrings!.ON_DISPLAY_CHANGE_EVENT); if (JThrowable.pending !== null) return;
        this.myFontProcessor = this.updateMyFontProcessor;
    }
    

    initCommands(cmdListener: CommandListener | null): void {
        this.removeAllCommands(); if (JThrowable.pending !== null) return;
        this.addCommand(GameCommandsFactory.getInstance()!.CLOSE_AND_SHOW_GAME_CANVAS); if (JThrowable.pending !== null) return;
        this.setCommandListener(cmdListener); if (JThrowable.pending !== null) return;
    }
    

    initMenu(): void {
        let form: ScrollSelectionForm | null = this.createForm(); if (JThrowable.pending !== null) return;
        this.menuForm = form;
        if (form != ScrollSelectionFormNoneFactory.getInstance()) {
            this.setMenuInputProcessor(new ImmediateCommandFormInputProcessor().jinit_ImmediateCommandFormInputProcessor_4(new BasicArrayListD().jinit_BasicArrayListD_0(), -1, this, form)); if (JThrowable.pending !== null) return;
            this.menuPaintable = new FormPaintable().jinit_FormPaintable_1(form); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        this.repaintBehavior!.onChangeRepaint(this); if (JThrowable.pending !== null) return;
    }
    

    createForm(): ScrollSelectionForm | null {
        let items: StaticArray<ABCustomItem | null> | null = new CommandTextItemArrayFactory().jinit_CommandTextItemArrayFactory_1(new AllCommandsVisitor().jinit_AllCommandsVisitor_0())!.getInstance3(this.getCommandStack(), this.backgroundBasicColor, this.foregroundBasicColor); if (JThrowable.pending !== null) return null;
        let rectangle: Rectangle | null = this.createRectangle(items!.length); if (JThrowable.pending !== null) return null;
        return CommandCurrentSelectionFormFactory.getInstance8(StringUtil.getInstance()!.EMPTY_STRING, items, rectangle, FormTypeFactory.getInstance()!.VERTICAL_CENTER_FORM, 15, false, this.backgroundBasicColor, this.foregroundBasicColor);
    }
    

    createRectangle(size: i32): Rectangle | null {
        let height: i32 = size * this.fontHeight;
        let startY: i32 = (this.displayInfo!.getLastHeight() * 2 / 3) - height; if (JThrowable.pending !== null) return null;
        let pointFactory: PointFactory | null = PointFactory.getInstance(); if (JThrowable.pending !== null) return null;
        let rectangle: Rectangle | null = new Rectangle().jinit_Rectangle_3(pointFactory!.createXY(30, startY), this.displayInfo!.getLastWidth() - 30, startY); if (JThrowable.pending !== null) return null;
        return rectangle;
    }
    

    open(): void {
        this.logUtil!.putF(this.commonStrings!.START, this, "open"); if (JThrowable.pending !== null) return;
        BasicMotionGesturesHandler.getInstance()!.addListenerInterface(this.getMenuInputProcessor()); if (JThrowable.pending !== null) return;
        GameKeyEventHandler.getInstance()!.addListener(this.getMenuInputProcessor()); if (JThrowable.pending !== null) return;
        DisplayChangeEventHandler.getInstance()!.addListenerInterface(this); if (JThrowable.pending !== null) return;
    }
    

    close(): void {
        this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.CLOSE); if (JThrowable.pending !== null) return;
        BasicMotionGesturesHandler.getInstance()!.removeListener(this.getMenuInputProcessor()); if (JThrowable.pending !== null) return;
        GameKeyEventHandler.getInstance()!.removeListener(this.getMenuInputProcessor()); if (JThrowable.pending !== null) return;
        DisplayChangeEventHandler.getInstance()!.removeListener(this); if (JThrowable.pending !== null) return;
    }
    

    update(): void {
        this.repaintProcessor!.process(); if (JThrowable.pending !== null) return;
    }
    

    getSourceId(): i32 {
        return GameCommandCanvas.id;
    }
    

    keyPressed(keyCode: i32): void {
        this.keyPressedByDevice(keyCode, 0); if (JThrowable.pending !== null) return;
    }
    

    keyReleased(keyCode: i32): void {
        this.keyReleasedByDevice(keyCode, 0); if (JThrowable.pending !== null) return;
    }
    

    keyRepeated(keyCode: i32): void {
        this.keyRepeatedByDevice(keyCode, 0); if (JThrowable.pending !== null) return;
    }
    

    keyPressedByDevice(keyCode: i32, deviceId: i32): void {
        this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(CommonSeps.getInstance()!.SPACE)!.appendint(keyCode)), this, this.gameInputStrings!.KEY_PRESSED); if (JThrowable.pending !== null) return;
        this.addGameKeyEvent(keyCode, 0, false); if (JThrowable.pending !== null) return;
    }
    

    keyReleasedByDevice(keyCode: i32, deviceId: i32): void {
        this.removeGameKeyEvent(keyCode, deviceId, false); if (JThrowable.pending !== null) return;
    }
    

    keyRepeatedByDevice(keyCode: i32, deviceId: i32): void {
        if (this.isSingleKeyRepeatableProcessing) {
            this.addGameKeyEvent(keyCode, deviceId, true); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    addGameKeyEvent(keyCode: i32, deviceId: i32, repeated: bool): void {
        do {
            let gameKey: GameKey | null = this.inputToGameKeyMapping!.getInstanceForCanvas(this, keyCode); if (JThrowable.pending !== null) break;
            if (gameKey != this.gameKeyFactory!.NONE) {
                let gameKeyEvent: GameKeyEvent | null = this.gameKeyEventFactory!.getInstanceForInput(this, gameKey); if (JThrowable.pending !== null) break;
                this.downGameKeyEventHandler!.fireEvent(gameKeyEvent); if (JThrowable.pending !== null) break;
                this.downGameKeyEventHandler!.getInstanceForDevice(deviceId)!.fireEvent(gameKeyEvent); if (JThrowable.pending !== null) break;
            } else {
                this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(this.gameInputStrings!.NO_KEY)!.appendint(keyCode)), this, this.gameInputStrings!.ADD_KEY_EVENT); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put("Key Event Error", this, this.gameInputStrings!.ADD_KEY_EVENT, e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    removeGameKeyEvent(keyCode: i32, deviceId: i32, repeated: bool): void {
        do {
            let gameKey: GameKey | null = this.inputToGameKeyMapping!.getInstanceForCanvas(this, keyCode); if (JThrowable.pending !== null) break;
            if (gameKey != this.gameKeyFactory!.NONE) {
                let gameKeyEvent: GameKeyEvent | null = this.gameKeyEventFactory!.getInstanceForInput(this, gameKey); if (JThrowable.pending !== null) break;
                this.upGameKeyEventHandler!.fireEvent(gameKeyEvent); if (JThrowable.pending !== null) break;
                this.upGameKeyEventHandler!.getInstanceForDevice(deviceId)!.fireEvent(gameKeyEvent); if (JThrowable.pending !== null) break;
            } else {
                this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(this.gameInputStrings!.NO_KEY)!.appendint(keyCode)), this, this.gameInputStrings!.REMOVE_KEY_EVENT); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put("Key Event Error", this, this.gameInputStrings!.REMOVE_KEY_EVENT, e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    paint(graphics: Graphics | null): void {
        this.myFontProcessor!.process(graphics); if (JThrowable.pending !== null) return;
        this.menuPaintable!.paint(graphics); if (JThrowable.pending !== null) return;
        this.repaintBehavior!.repaint(this); if (JThrowable.pending !== null) return;
    }
    

    setMenuInputProcessor(menuInputProcessor: BasicMenuInputProcessor | null): void {
        this.menuInputProcessor = menuInputProcessor;
    }
    

    getMenuInputProcessor(): BasicMenuInputProcessor | null {
        return this.menuInputProcessor;
    }
}

