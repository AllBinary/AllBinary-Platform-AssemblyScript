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
// import javax.microedition.lcdui.Command
// import javax.microedition.lcdui.CommandListener
// import javax.microedition.lcdui.Graphics
// import javax.microedition.lcdui.LcduiItem
// import org.allbinary.J2MEUtil
// import org.allbinary.animation.Animation
// import org.allbinary.animation.IndexedAnimationBehavior
// import org.allbinary.animation.special.SpecialAnimation
// import org.allbinary.business.advertisement.GameAdStateFactory
// import org.allbinary.canvas.BaseGameStatistics
// import org.allbinary.canvas.CustomGameMenuUtil
// import org.allbinary.canvas.FullScreenUtil
// import org.allbinary.canvas.GameStatisticsFactory
// import org.allbinary.canvas.RunnableCanvas
// import org.allbinary.game.GameAdState
// import org.allbinary.game.GameInfo
// import org.allbinary.game.commands.GameCommandsFactory
// import org.allbinary.game.configuration.event.ChangedGameFeatureListener
// import org.allbinary.game.configuration.feature.Features
// import org.allbinary.game.configuration.feature.GameFeatureFactory
// import org.allbinary.game.configuration.feature.InputFeatureFactory
// import org.allbinary.game.configuration.feature.MainFeatureFactory
// import org.allbinary.game.init.BasicBuildGameInitializerFactory
// import org.allbinary.game.init.GameInitializationUtil
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
// import org.allbinary.game.layer.AllBinaryGameLayerManager
// import org.allbinary.game.layer.SWTUtil
// import org.allbinary.game.midlet.DemoGameMidlet
// import org.allbinary.game.score.HighScoreCommands
// import org.allbinary.game.score.HighScores
// import org.allbinary.game.score.HighScoresFactoryInterface
// import org.allbinary.game.score.HighScoresHelper
// import org.allbinary.game.score.HighScoresHelperBase
// import org.allbinary.game.score.HighScoresPaintable
// import org.allbinary.game.score.NullHighScoresSingletonFactory
// import org.allbinary.game.state.GameState
// import org.allbinary.game.state.GameStateFactory
// import org.allbinary.graphics.Rectangle
// import org.allbinary.graphics.ResizableListenerHandler
// import org.allbinary.graphics.canvas.transition.progress.ProgressCanvas
// import org.allbinary.graphics.canvas.transition.progress.ProgressCanvasFactory
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.graphics.color.BasicColorFactory
// import org.allbinary.graphics.displayable.command.MyCommandsFactory
// import org.allbinary.graphics.displayable.event.DisplayChangeEvent
// import org.allbinary.graphics.displayable.event.DisplayChangeEventHandler
// import org.allbinary.graphics.displayable.event.DisplayChangeEventListener
// import org.allbinary.graphics.displayable.screen.FullScreenPaintableFactory
// import org.allbinary.graphics.form.CommandCurrentSelectionFormFactory
// import org.allbinary.graphics.form.FormType
// import org.allbinary.graphics.form.FormTypeFactory
// import org.allbinary.graphics.form.ScrollSelectionForm
// import org.allbinary.graphics.form.ScrollSelectionFormNoneFactory
// import org.allbinary.graphics.form.item.CommandTextItemArrayFactory
// import org.allbinary.graphics.form.item.ABCustomItem
// import org.allbinary.graphics.opengles.CurrentDisplayableFactory
// import org.allbinary.graphics.opengles.OpenGLFeatureFactory
// import org.allbinary.graphics.opengles.OpenGLFeatureUtil
// import org.allbinary.graphics.opengles.OpenGLThreadUtil
// import org.allbinary.graphics.paint.InitUpdatePaintable
// import org.allbinary.graphics.paint.NullPaintable
// import org.allbinary.graphics.paint.Paintable
// import org.allbinary.graphics.paint.PaintableInterface
// import org.allbinary.graphics.paint.StatePaintable
// import org.allbinary.graphics.paint.StatePaintableFactory
// import org.allbinary.input.motion.gesture.observer.BasicMotionGesturesHandler
// import org.allbinary.logic.communication.log.ForcedLogUtil
// import org.allbinary.logic.communication.log.PreLogUtil
// import org.allbinary.logic.math.SmallIntegerSingletonFactory
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.logic.system.os.OperatingSystemFactory
// import org.allbinary.logic.system.security.licensing.AbeClientInformationInterface
// import org.allbinary.logic.system.security.licensing.InApplicationPurchaseFactory
// import org.allbinary.logic.system.security.licensing.LockableFeature
// import org.allbinary.logic.system.security.licensing.LockableFeatureFactory
// import org.allbinary.logic.util.event.AllBinaryEventObject
// import org.allbinary.logic.util.event.EventStrings
// import org.allbinary.media.audio.AllBinaryMediaManager
// import org.allbinary.media.audio.EarlySoundsFactory
// import org.allbinary.media.audio.PrimaryPlayerQueueFactory
// import org.allbinary.media.audio.SecondaryPlayerQueueFactory
// import org.allbinary.string.CommonSeps
// import org.allbinary.thread.NullThread
// import org.allbinary.thread.ThreadFactoryUtil
// import org.allbinary.thread.ThreadUtil
// import org.allbinary.time.TimeDelayHelper
// import org.allbinary.util.ABHashtable
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class DemoCanvas extends RunnableCanvas implements GameCanvasRunnableInterface, MenuListener, DisplayChangeEventListener, DemoPaintableInterface {

    jclassName(): string {
        return "org.allbinary.game.displayable.canvas.DemoCanvas";
    }
    static readonly id: i32 = 0;
    @lazy static readonly BOT_GAME_STATS: string | null = "Bot Game Statistics: ";
    static readonly TYPE: i32 = 3;
    basicColorFactory: BasicColorFactory | null = null;
    myCommandsFactory: MyCommandsFactory | null = null;
    gameAdStateFactory: GameAdStateFactory | null = null;
    gameInputStrings: GameInputStrings | null = null;
    gameStateFactory: GameStateFactory | null = null;
    threadFactoryUtil: ThreadFactoryUtil | null = null;
    formUtil: FormUtil | null = null;
    fullscreenPaintable: Paintable | null = null;
    basicGameDemoPaintable: StatePaintable | null = null;
    specialAnimationInterface: SpecialAnimation | null = null;
    paintedSpecialAnimationInterface: Animation | null = null;
    fullScreenUtil: FullScreenUtil | null = null;
    gameCanvas: AllBinaryGameCanvas | null = null;
    highScoresHelper: HighScoresHelperBase | null = null;
    realHighScoresPaintable: HighScoresPaintable | null = null;
    highScoresPaintable: Paintable | null = null;
    state: i32 = 0;
    canvasThread: JThread | null = null;
    timeDelayHelper: TimeDelayHelper | null = null;
    basicColor: BasicColor | null = null;
    abeClientInformation: AbeClientInformationInterface | null = null;
    highScoresFactoryInterface: HighScoresFactoryInterface | null = null;
    menuInputProcessor: BasicMenuInputProcessor | null = null;
    menuForm: ScrollSelectionForm | null = null;
    gameInitializationInterfaceFactoryInterface: BasicBuildGameInitializerFactory | null = null;
    initialized: bool = false;
    demoGameRunnable: DemoGameStartupRunnable | null = null;
    defaultPaintableInterface: Paintable | null = null;
    paintableInterface: PaintableInterface | null = null;
    overlayPaintable: InitUpdatePaintable | null = null;
    progressPaintable: PaintableInterface | null = null;
    tempWait: i32 = 0;
    inputToGameKeyMapping: InputToGameKeyMapping | null = null;
    gameRunnable: GameRunnable | null = null;
    isSingleKeyRepeatableProcessing: bool = false;
    NONE: GameKey | null = null;
    gameKeyEventFactory: GameKeyEventFactory | null = null;
    lastKeyNotMapped: i32 = 0;
    SET_STATE: string | null = null;
    baseGameStatistics: BaseGameStatistics | null = null;

    jfields_DemoCanvas(): void {
    this.basicColorFactory = BasicColorFactory.getInstance();
    this.myCommandsFactory = MyCommandsFactory.getInstance();
    this.gameAdStateFactory = GameAdStateFactory.getInstance();
    this.gameInputStrings = GameInputStrings.getInstance();
    this.gameStateFactory = GameStateFactory.getInstance();
    this.threadFactoryUtil = ThreadFactoryUtil.getInstance();
    this.formUtil = FormUtil.getInstance();
    this.fullscreenPaintable = FullScreenPaintableFactory.getInstance()!.paintable;
    this.basicGameDemoPaintable = StatePaintableFactory.getInstance();
    this.specialAnimationInterface = SpecialAnimation.getInstance();
    this.paintedSpecialAnimationInterface = SpecialAnimation.getInstance();
    this.fullScreenUtil = FullScreenUtil.getInstance();
    this.gameCanvas = NullGameCanvas.getInstance();
    this.highScoresHelper = new HighScoresHelper().jinit_HighScoresHelper_0();
    this.realHighScoresPaintable = new HighScoresPaintable().jinit_HighScoresPaintable_0();
    this.highScoresPaintable = NullPaintable.getInstance();
    this.state = 0;
    this.canvasThread = NullThread.NULL_THREAD;
    this.timeDelayHelper = new TimeDelayHelper().jinit_TimeDelayHelper_1(6000);
    this.basicColor = this.basicColorFactory!.RED;
    
    
    this.menuInputProcessor = NoMenuInputProcessor.getInstance();
    this.menuForm = ScrollSelectionForm.getNullScrollSelectionForm();
    
    this.initialized = false;
    
    this.defaultPaintableInterface = NullPaintable.getInstance();
    this.paintableInterface = NullPaintable.getInstance();
    
    this.progressPaintable = ProgressCanvasFactory.getLazyInstance();
    this.tempWait = NullWaitGameRunnable.getInstance()!.WAIT;
    this.inputToGameKeyMapping = PlatformInputMappingFactory.getInstance()!.getPersistentInputMappingInstance()!.getInputMapping();
    this.gameRunnable = NullWaitGameRunnable.getInstance();
    this.isSingleKeyRepeatableProcessing = Features.getInstance()!.isFeature(InputFeatureFactory.getInstance()!.SINGLE_KEY_REPEAT_PRESS);
    this.NONE = GameKeyFactory.getInstance()!.NONE;
    this.gameKeyEventFactory = GameKeyEventFactory.getInstance();
    this.lastKeyNotMapped = -1;
    this.SET_STATE = "setState";
    this.baseGameStatistics = GameStatisticsFactory.getInstance();
    }
    

    jinit_DemoCanvas_7(abeClientInformation: AbeClientInformationInterface | null, commandListener: CommandListener | null, highScoresFactoryInterface: HighScoresFactoryInterface | null, paintable: Paintable | null, overlayPaintable: InitUpdatePaintable | null, gameInitializationInterfaceFactoryInterface: BasicBuildGameInitializerFactory | null, isContinue: bool): DemoCanvas {
        super.jinit_RunnableCanvas_3(commandListener, CurrentDisplayableFactory.getInstance()!.DEFAULT_CHILD_NAME_LIST, true);
        this.jfields_DemoCanvas();
        this.abeClientInformation = abeClientInformation;
        this.setWait(NullWaitGameRunnable.getInstance()!.WAIT); if (JThrowable.pending !== null) return this;
        this.gameInitializationInterfaceFactoryInterface = gameInitializationInterfaceFactoryInterface;
        GameInitializationUtil.getInstance()!.initDemo(abeClientInformation, this, gameInitializationInterfaceFactoryInterface); if (JThrowable.pending !== null) return this;
        ResizableListenerHandler.getInstance()!.fireEvent(false); if (JThrowable.pending !== null) return this;
        this.overlayPaintable = overlayPaintable;
        this.highScoresFactoryInterface = highScoresFactoryInterface;
        this.setDefaultPaintableInterface(paintable); if (JThrowable.pending !== null) return this;
        this.setPaintableInterface(this.getDefaultPaintableInterface()); if (JThrowable.pending !== null) return this;
        if (isContinue) {
            this.addCommand(GameCommandsFactory.getInstance()!.CONTINUE_COMMAND); if (JThrowable.pending !== null) return this;
        } if (JThrowable.pending !== null) return this;
        if (ChangedGameFeatureListener.getInstance()!.isChangedFeature(GameFeatureFactory.getInstance()!.SOUND)) {
            this.mediaInit(); if (JThrowable.pending !== null) return this;
        } if (JThrowable.pending !== null) return this;
        this.demoGameRunnable = new DemoGameStartupRunnable().jinit_DemoGameStartupRunnable_1(this); if (JThrowable.pending !== null) return this;
        DisplayChangeEventHandler.getInstance()!.addListenerInterface(this); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    onEvent(eventObject: AllBinaryEventObject | null): void {
        ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this); if (JThrowable.pending !== null) return;
    }
    

    onDisplayChangeEvent(displayChangeEvent: DisplayChangeEvent | null): void {
        do {
            this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(this.commonLabels!.START_LABEL)!.append(JObject.jtoString(this.displayInfo))), this, this.canvasStrings!.ON_DISPLAY_CHANGE_EVENT); if (JThrowable.pending !== null) break;
            let scrollSelectionForm: ScrollSelectionForm | null = this.getMenuForm(); if (JThrowable.pending !== null) break;
            if (scrollSelectionForm != null) {
                let formType: FormType | null = FormTypeFactory.getInstance()!.getFormType(); if (JThrowable.pending !== null) break;
                let rectangle: Rectangle | null = this.formUtil!.createFormRectangle(); if (JThrowable.pending !== null) break;
                scrollSelectionForm!.init(rectangle, formType); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            this.overlayPaintable!.init(); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.canvasStrings!.ON_DISPLAY_CHANGE_EVENT, e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    getCustomCommands(): StaticArray<Object | null> | null {
        let gameCommandsFactory: GameCommandsFactory | null = GameCommandsFactory.getInstance(); if (JThrowable.pending !== null) return null;
        if (J2MEUtil.isHTML()) {
            let commandArray: StaticArray<Object | null> | null = StaticArray.fromArray<Object | null>([gameCommandsFactory!.START_COMMAND, HighScoreCommands.getInstance()!.DISPLAY, GameInputMappingCanvas.DISPLAY, gameCommandsFactory!.DISPLAY_ABOUT]); if (JThrowable.pending !== null) return null;
            return commandArray;
        } else {
            let commandList: BasicArrayList | null = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) return null;
            commandList!.add(gameCommandsFactory!.START_COMMAND); if (JThrowable.pending !== null) return null;
            let inApplicationPurchaseFactory: InApplicationPurchaseFactory | null = InApplicationPurchaseFactory.getInstance(); if (JThrowable.pending !== null) return null;
            if (inApplicationPurchaseFactory!.isEnabled()) {
                let list: BasicArrayList | null = LockableFeatureFactory.getInstance()!.getList(); if (JThrowable.pending !== null) return null;
                if (list!.size() > 0 && !inApplicationPurchaseFactory!.isPurchased(changetype<LockableFeature | null>(list!.get(0)))) {
                    commandList!.add(gameCommandsFactory!.BUY_COMMAND); if (JThrowable.pending !== null) return null;
                } if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
            commandList!.add(HighScoreCommands.getInstance()!.DISPLAY); if (JThrowable.pending !== null) return null;
            do {
                let isOverScan: bool = OperatingSystemFactory.getInstance()!.getOperatingSystemInstance()!.isOverScan(); if (JThrowable.pending !== null) break;
                if (SWTUtil.isSWT) {
                    commandList!.add(GameInputMappingCanvas.DISPLAY); if (JThrowable.pending !== null) break;
                } else if (!isOverScan) {
                    commandList!.add(gameCommandsFactory!.DISPLAY_OPTIONS); if (JThrowable.pending !== null) break;
                    commandList!.add(gameCommandsFactory!.DISPLAY_LOAD_FORM); if (JThrowable.pending !== null) break;
                    commandList!.add(GameInputMappingCanvas.DISPLAY); if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
            } while (false); if (JThrowable.pending != null) {
                let e: JException | null = changetype<JException | null>(JThrowable.take());
            } if (JThrowable.pending !== null) return null;
            commandList!.add(gameCommandsFactory!.DISPLAY_ABOUT); if (JThrowable.pending !== null) return null;
            let commandArray: StaticArray<Object | null> | null = commandList!.toArray(); if (JThrowable.pending !== null) return null;
            return commandArray;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    initCommands(cmdListener: CommandListener | null): void {
        this.removeAllCommands(); if (JThrowable.pending !== null) return;
        let commandArray: StaticArray<Object | null> | null = this.getCustomCommands(); if (JThrowable.pending !== null) return;
        let size: i32 = commandArray!.length;
        for (let index: i32 = 0; index < size; index++) {
            this.addCommand(changetype<Command | null>(commandArray![index])); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        CustomGameMenuUtil.add(this); if (JThrowable.pending !== null) return;
        this.setCommandListener(cmdListener); if (JThrowable.pending !== null) return;
    }
    

    initPostPaint(): void {
    }
    

    mediaInit(): void {
        AllBinaryMediaManager.init(EarlySoundsFactory.getInstance()); if (JThrowable.pending !== null) return;
    }
    

    itemStateChanged(item: LcduiItem | null): void {
        ForcedLogUtil.log(this.commonStrings!.NOT_IMPLEMENTED, this); if (JThrowable.pending !== null) return;
    }
    

    initMenu(): void {
        this.close(); if (JThrowable.pending !== null) return;
        let commandTextItemArrayFactory: CommandTextItemArrayFactory | null = DemoLimitedCommandTextItemArrayFactory.getInstance()!.getCommandTextItemArrayFactory(); if (JThrowable.pending !== null) return;
        let items: StaticArray<ABCustomItem | null> | null = commandTextItemArrayFactory!.getInstance3(this.getCommandStack(), this.basicColorFactory!.BLACK, this.basicColorFactory!.WHITE); if (JThrowable.pending !== null) return;
        let formType: FormType | null = FormTypeFactory.getInstance()!.getFormType(); if (JThrowable.pending !== null) return;
        let rectangle: Rectangle | null = this.formUtil!.createFormRectangle(); if (JThrowable.pending !== null) return;
        PreLogUtil.put(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(this.commonLabels!.START_LABEL)!.append(JObject.jtoString(this.displayInfo))), this, "initMenu"); if (JThrowable.pending !== null) return;
        let scrollSelectionForm: ScrollSelectionForm | null = CommandCurrentSelectionFormFactory.getInstance8(StringUtil.getInstance()!.EMPTY_STRING, items, rectangle, formType, 15, true, this.basicColorFactory!.BLACK, this.basicColorFactory!.WHITE); if (JThrowable.pending !== null) return;
        this.setMenuForm(scrollSelectionForm); if (JThrowable.pending !== null) return;
        let formType2: FormType | null = FormTypeFactory.getInstance()!.getFormType(); if (JThrowable.pending !== null) return;
        let rectangle2: Rectangle | null = this.formUtil!.createFormRectangle(); if (JThrowable.pending !== null) return;
        scrollSelectionForm!.init(rectangle2, formType2); if (JThrowable.pending !== null) return;
        if (this.getMenuForm() != ScrollSelectionFormNoneFactory.getInstance()) {
            this.setMenuInputProcessor(new CommandFormInputProcessor().jinit_CommandFormInputProcessor_4(new BasicArrayListD().jinit_BasicArrayListD_0(), -1, this, this.getMenuForm())); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        this.open(); if (JThrowable.pending !== null) return;
    }
    

    open(): void {
        BasicMotionGesturesHandler.getInstance()!.addListenerInterface(this.getMenuInputProcessor()); if (JThrowable.pending !== null) return;
        GameKeyEventHandler.getInstance()!.addListener(this.getMenuInputProcessor()); if (JThrowable.pending !== null) return;
    }
    

    close(): void {
        BasicMotionGesturesHandler.getInstance()!.removeListener(this.getMenuInputProcessor()); if (JThrowable.pending !== null) return;
        GameKeyEventHandler.getInstance()!.removeListener(this.getMenuInputProcessor()); if (JThrowable.pending !== null) return;
    }
    

    getSourceId(): i32 {
        return DemoCanvas.id;
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
        this.addGameKeyEvent(keyCode, false); if (JThrowable.pending !== null) return;
    }
    

    keyReleasedByDevice(keyCode: i32, deviceId: i32): void {
        this.removeGameKeyEvent(keyCode, false); if (JThrowable.pending !== null) return;
    }
    

    keyRepeatedByDevice(keyCode: i32, deviceId: i32): void {
        if (this.isSingleKeyRepeatableProcessing) {
            this.addGameKeyEvent(keyCode, true); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    addGameKeyEvent(keyCode: i32, repeated: bool): void {
        do {
            let gameKey: GameKey | null = this.inputToGameKeyMapping!.getInstanceForCanvas(this, keyCode); if (JThrowable.pending !== null) break;
            if (gameKey != this.NONE) {
                let gameKeyEvent: GameKeyEvent | null = this.gameKeyEventFactory!.getInstanceForInput(this, gameKey); if (JThrowable.pending !== null) break;
                DownGameKeyEventHandler.getInstance()!.fireEvent(gameKeyEvent); if (JThrowable.pending !== null) break;
            } else {
                if (this.lastKeyNotMapped != keyCode) {
                    this.lastKeyNotMapped = keyCode;
                    this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(this.gameInputStrings!.NO_KEY)!.appendint(keyCode)), this, this.gameInputStrings!.ADD_KEY_EVENT); if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put("Key Event Error", this, this.gameInputStrings!.ADD_KEY_EVENT, e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    removeGameKeyEvent(keyCode: i32, repeated: bool): void {
        do {
            let gameKey: GameKey | null = this.inputToGameKeyMapping!.getInstanceForCanvas(this, keyCode); if (JThrowable.pending !== null) break;
            if (gameKey != this.NONE) {
                let gameKeyEvent: GameKeyEvent | null = this.gameKeyEventFactory!.getInstanceForInput(this, gameKey); if (JThrowable.pending !== null) break;
                UpGameKeyEventHandler.getInstance()!.fireEvent(gameKeyEvent); if (JThrowable.pending !== null) break;
            } else {
                this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(this.gameInputStrings!.NO_KEY)!.appendint(keyCode)), this, this.gameInputStrings!.REMOVE_KEY_EVENT); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put("Key Event Error", this, this.gameInputStrings!.REMOVE_KEY_EVENT, e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    pause(): void {
        this.close(); if (JThrowable.pending !== null) return;
        this.setPaused(true); if (JThrowable.pending !== null) return;
        this.gameRunnable = NullWaitGameRunnable.getInstance(); if (JThrowable.pending !== null) return;
        this.gameCanvas!.pause(); if (JThrowable.pending !== null) return;
    }
    

    unPause(): void {
        this.open(); if (JThrowable.pending !== null) return;
        this.gameCanvas!.unPause(); if (JThrowable.pending !== null) return;
        this.gameRunnable = this.gameCanvas!.gameRunnable;
        this.setPaused(false); if (JThrowable.pending !== null) return;
    }
    

    isPausable(): bool {
        if (CurrentDisplayableFactory.getInstance()!.getUsedRunnable() == NullWaitGameRunnable.getInstance()) {
            return true;
        } else {
            return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    isGameOver(): bool {
        this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(this.commonStrings!.NOT_IMPLEMENTED)!.append(" since not a game")), this, "isGameOver"); if (JThrowable.pending !== null) return false;
        return false;
    }
    

    setLoadStateHashtable(hashtable: ABHashtable | null): void {
        this.logUtil!.putF("Trying to continue a demo lol - only continue a game canvas not the demo", this, "setLoadStateHashtable"); if (JThrowable.pending !== null) return;
    }
    

    getLoadStateHashtable(): ABHashtable | null {
        this.logUtil!.putF("Trying to continue a demo lol - only continue a game canvas not the demo", this, "getLoadStateHashtable"); if (JThrowable.pending !== null) return null;
        return this.stdUtil!.NULL_TABLE;
    }
    

    getCurrentStateHashtable(): ABHashtable | null {
        this.logUtil!.putF("Trying to save the AI lol", this, "getCurrentStateHashtable"); if (JThrowable.pending !== null) return null;
        return this.stdUtil!.NULL_TABLE;
    }
    

    setHighScoreSubmitted(isNotUsed: bool): void {
    }
    

    paint(graphics: Graphics | null): void {
        this.paintableInterface!.paint(graphics); if (JThrowable.pending !== null) return;
        this.paintedSpecialAnimationInterface!.paintXY(graphics, 0, 0); if (JThrowable.pending !== null) return;
        this.highScoresPaintable!.paint(graphics); if (JThrowable.pending !== null) return;
        this.getBasicGameDemoPaintable()!.paint(graphics); if (JThrowable.pending !== null) return;
        this.overlayPaintable!.paint(graphics); if (JThrowable.pending !== null) return;
        this.fullscreenPaintable!.paint(graphics); if (JThrowable.pending !== null) return;
        this.progressPaintable!.paint(graphics); if (JThrowable.pending !== null) return;
    }
    

    paintThreed(graphics: Graphics | null): void {
        this.paintableInterface!.paintThreed(graphics); if (JThrowable.pending !== null) return;
        this.paintedSpecialAnimationInterface!.paintThreedXYZ(graphics, 0, 0, 0); if (JThrowable.pending !== null) return;
    }
    

    processGameOver(): void {
        this.logUtil!.putF("Not Implemented since not a game", this, "setGameOver"); if (JThrowable.pending !== null) return;
    }
    

    demoStateChange(): void {
        let newState: i32 = this.state + 1;
        if (newState > 2) {
            newState = 0;
        } else if (newState == 2) {
            if (!this.highScoresHelper!.isAnyHighScores()) {
                newState = 0;
            } else {
                let highScores: HighScores | null = this.highScoresHelper!.getNextHighScores(); if (JThrowable.pending !== null) return;
                if (highScores == NullHighScoresSingletonFactory.getInstance()) {
                    newState = 0;
                } else {
                    this.getRealHighScoresPaintable()!.setHighScores(highScores); if (JThrowable.pending !== null) return;
                } if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        this.setState(newState); if (JThrowable.pending !== null) return;
        this.updateDemoState(); if (JThrowable.pending !== null) return;
    }
    

    updateDemoState(): void {
        PreLogUtil.put(JObject.jtoString(SmallIntegerSingletonFactory.getInstance()!.createInstance(this.state)), this, this.SET_STATE); if (JThrowable.pending !== null) return;
        this.getBasicGameDemoPaintable()!.setState(this.state); if (JThrowable.pending !== null) return;
        if (this.state == 0) {
            this.highScoresPaintable = NullPaintable.getInstance(); if (JThrowable.pending !== null) return;
            this.paintedSpecialAnimationInterface = this.getSpecialAnimationInterface(); if (JThrowable.pending !== null) return;
            if (!this.demoGameRunnable!.isRunning() && this.gameCanvas!.isInitialized()) {
                this.getSpecialAnimationInterface()!.reset(); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } else if (this.state == 1) {
            this.paintedSpecialAnimationInterface = SpecialAnimation.getInstance(); if (JThrowable.pending !== null) return;
        } else if (this.state == 2) {
            this.highScoresPaintable = this.getRealHighScoresPaintable(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        let gameAdState: GameAdState | null = this.gameAdStateFactory!.getCurrentInstance(); if (JThrowable.pending !== null) return;
        gameAdState!.processPageAdState(); if (JThrowable.pending !== null) return;
    }
    

    getNextRandom(): i32 {
        { JThrowable.raise(new JException().jinit_JException_1(this.commonStrings!.NOT_IMPLEMENTED)); return 0; }
        return 0;
    }
    

    createGameLayerManager(randomValue: i32): AllBinaryGameLayerManager | null {
        { JThrowable.raise(new JException().jinit_JException_1(this.commonStrings!.NOT_IMPLEMENTED)); return null; }
        return null;
    }
    

    createRunnable(randomLevel: i32): GameCanvasRunnableInterface | null {
        { JThrowable.raise(new JException().jinit_JException_1(this.commonStrings!.NOT_IMPLEMENTED)); return null; }
        return null;
    }
    

    create(): void {
        PreLogUtil.put(this.commonStrings!.START, this, "create"); if (JThrowable.pending !== null) return;
        this.highScoresPaintable = NullPaintable.getInstance(); if (JThrowable.pending !== null) return;
        let randomLevel: i32 = this.getNextRandom(); if (JThrowable.pending !== null) return;
        this.gameCanvas = changetype<AllBinaryGameCanvas | null>(this.createRunnable(randomLevel)); if (JThrowable.pending !== null) return;
        this.basicColor = this.gameCanvas!.getLayerManager()!.getForegroundBasicColor(); if (JThrowable.pending !== null) return;
        this.getRealHighScoresPaintable()!.setBasicColorP(this.basicColor); if (JThrowable.pending !== null) return;
        this.gameCanvas!.setGameCanvasStartListener(this); if (JThrowable.pending !== null) return;
        let gameInfo: GameInfo | null = this.gameCanvas!.getLayerManager()!.getGameInfo(); if (JThrowable.pending !== null) return;
        this.getHighScoresFactoryInterface()!.fetchHighScores(gameInfo, this.highScoresHelper); if (JThrowable.pending !== null) return;
    }
    

    start(): void {
        let gameCanvas: AllBinaryGameCanvas | null = this.gameCanvas;
        PreLogUtil.put(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append("Game Thread in DemoCanvas: ")!.append(this.stringUtil!.toString1(gameCanvas))), this, this.commonStrings!.START); if (JThrowable.pending !== null) return;
        this.canvasThread = this.threadFactoryUtil!.getInstanceGameCanvasRunnable(gameCanvas); if (JThrowable.pending !== null) return;
        this.gameCanvas!.setThread(this.canvasThread); if (JThrowable.pending !== null) return;
        this.threadFactoryUtil!.start(this.canvasThread); if (JThrowable.pending !== null) return;
        if (this.getWait() == NullWaitGameRunnable.getInstance()!.WAIT) {
            this.setWait(this.getTempWait()); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    preDemoProcess(): void {
        if (!this.gameCanvas!.isInitialized() || this.gameCanvas!.getTitle() == NullGameCanvas.NO_GAME) {
            if (AllBinaryMediaManager.update()) {
                if (!PrimaryPlayerQueueFactory.getInstance()!.process()) {
                    SecondaryPlayerQueueFactory.getInstance()!.process(); if (JThrowable.pending !== null) return;
                } if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        this.overlayPaintable!.update(); if (JThrowable.pending !== null) return;
    }
    

    process(): void {
        super.process(); if (JThrowable.pending !== null) return;
        this.getMenuInputProcessor()!.processInputList(); if (JThrowable.pending !== null) return;
        this.preDemoProcess(); if (JThrowable.pending !== null) return;
        if (this.state == 0) {
            let indexedAnimationBehavior: IndexedAnimationBehavior | null = (changetype<IndexedAnimationBehavior | null>(this.getSpecialAnimationInterface()!.getAnimationBehavior())); if (JThrowable.pending !== null) return;
            if (indexedAnimationBehavior!.loopIndex < 1) {
                this.timeDelayHelper!.setStartTimeTNT(); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
            let demoGameMidlet: DemoGameMidlet | null = changetype<DemoGameMidlet | null>(this.getCustomCommandListener()); if (JThrowable.pending !== null) return;
            if (this.gameCanvas != NullGameCanvas.getInstance() && this.gameCanvas!.isGameOver()) {
                this.stopGameDemo(); if (JThrowable.pending !== null) return;
                let randomLevel: i32 = this.getNextRandom(); if (JThrowable.pending !== null) return;
                let gameInfo: GameInfo | null = this.gameCanvas!.getLayerManager()!.getGameInfo(); if (JThrowable.pending !== null) return;
                gameInfo!.setCurrentLevel(randomLevel); if (JThrowable.pending !== null) return;
                this.gameCanvas!.setGameOver(false); if (JThrowable.pending !== null) return;
                this.start(); if (JThrowable.pending !== null) return;
            } else if (this.gameCanvas == NullGameCanvas.getInstance() && demoGameMidlet!.isReady()) {
                if (!this.demoGameRunnable!.isRunning()) {
                    this.startDemoGame(); if (JThrowable.pending !== null) return;
                    this.demoGameRunnable!.setRunning(true); if (JThrowable.pending !== null) return;
                    let thread: JThread | null = this.threadFactoryUtil!.getInstanceForRunnable(this.demoGameRunnable); if (JThrowable.pending !== null) return;
                    this.demoGameRunnable!.setThread(thread); if (JThrowable.pending !== null) return;
                    this.threadFactoryUtil!.start(thread); if (JThrowable.pending !== null) return;
                } if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    startDemoGame(): void {
        DemoCanvasProgressUtil.showProgress(this); if (JThrowable.pending !== null) return;
    }
    

    stopGameDemo(): void {
        if (this.gameCanvas != NullGameCanvas.getInstance()) {
            this.logUtil!.putF("Set Running False", this, "stopGameDemo"); if (JThrowable.pending !== null) return;
            this.gameCanvas!.setRunning(false); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        ThreadUtil.getInstance()!.join(this.canvasThread); if (JThrowable.pending !== null) return;
    }
    

    showGamePaintable(): void {
        let METHOD_NAME: string | null = "showGamePaintable";
        PreLogUtil.put(this.commonStrings!.START, this, METHOD_NAME); if (JThrowable.pending !== null) return;
        let isDefault: bool = J2MEUtil.isHTML(); if (JThrowable.pending !== null) return;
        if (this.gameCanvas != NullGameCanvas.getInstance() && (this.gameCanvas!.isRunning() || isDefault || SWTUtil.isSWT) && !(this.gameCanvas!.getType() == NullGameCanvas.TYPE)) {
            this.gameRunnable = this.gameCanvas!.gameRunnable;
            PreLogUtil.put("Showing Game", this, METHOD_NAME); if (JThrowable.pending !== null) return;
            this.setPaintableInterface(this.gameCanvas); if (JThrowable.pending !== null) return;
        } else {
            this.gameRunnable = NullWaitGameRunnable.getInstance(); if (JThrowable.pending !== null) return;
            PreLogUtil.put("Not Showing Game", this, METHOD_NAME); if (JThrowable.pending !== null) return;
            this.setPaintableInterface(this.getDefaultPaintableInterface()); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    isReadyForStateChange(): bool {
        return !this.demoGameRunnable!.isRunning() && this.gameCanvas!.isInitialized();
    }
    

    processGame(): void {
        this.gameRunnable!.run(); if (JThrowable.pending !== null) return;
        if (!this.specialAnimationInterface!.isComplete() && this.isReadyForStateChange()) {
            this.specialAnimationInterface!.nextFrame(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        if (this.timeDelayHelper!.isTimeTNT() && this.isReadyForStateChange()) {
            this.demoStateChange(); if (JThrowable.pending !== null) return;
        } else {
            this.process(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    run(): void {
        this.logUtil!.putF(this.commonStrings!.START_RUNNABLE, this, this.commonStrings!.RUN); if (JThrowable.pending !== null) return;
        do {
            let progressCanvas: ProgressCanvas | null = ProgressCanvasFactory.getInstance(); if (JThrowable.pending !== null) break;
            let features: Features | null = Features.getInstance(); if (JThrowable.pending !== null) break;
            let openGLFeatureFactory: OpenGLFeatureFactory | null = OpenGLFeatureFactory.getInstance(); if (JThrowable.pending !== null) break;
            progressCanvas!.addNormalPortion(50, "Demo Thread"); if (JThrowable.pending !== null) break;
            this.setCurrentThread(); if (JThrowable.pending !== null) break;
            this.setRunning(true); if (JThrowable.pending !== null) break;
            if (features!.isFeature(MainFeatureFactory.getInstance()!.LOAD_ONDEMAND)) {
                progressCanvas!.end(); if (JThrowable.pending !== null) break;
            } else {
                progressCanvas!.addNormalPortion(50, "Demo Thread Running"); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            this.fullScreenUtil!.initOnRun(this, this.getCustomCommandListener()); if (JThrowable.pending !== null) break;
            this.initMenu(); if (JThrowable.pending !== null) break;
            this.initPostPaint(); if (JThrowable.pending !== null) break;
            this.updateDemoState(); if (JThrowable.pending !== null) break;
            if (features!.isDefault(openGLFeatureFactory!.OPENGL_AS_GAME_THREAD)) {
                while (this.gameCanvas == NullGameCanvas.getInstance() || !this.gameCanvas!.isInitialized()) {
                    this.loopTimeHelper!.setStartTimeTNT(); if (JThrowable.pending !== null) break;
                    this.processGame(); if (JThrowable.pending !== null) break;
                    this.processLoopSleep(); if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
                let demoGameRunnable: DemoGameRunnable | null = new DemoGameRunnable().jinit_DemoGameRunnable_1(this); if (JThrowable.pending !== null) break;
                let currentDisplayableFactory: CurrentDisplayableFactory | null = CurrentDisplayableFactory.getInstance(); if (JThrowable.pending !== null) break;
                currentDisplayableFactory!.setRunnable(demoGameRunnable); if (JThrowable.pending !== null) break;
                currentDisplayableFactory!.setMyCanvas(this); if (JThrowable.pending !== null) break;
                OpenGLThreadUtil.getInstance()!.onResume(); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            if (features!.isDefault(openGLFeatureFactory!.OPENGL_AS_GAME_THREAD) || J2MEUtil.isHTML()) {
                let demoGameRunnable: DemoGameRunnable | null = new DemoGameRunnable().jinit_DemoGameRunnable_1(this); if (JThrowable.pending !== null) break;
                let currentDisplayableFactory: CurrentDisplayableFactory | null = CurrentDisplayableFactory.getInstance(); if (JThrowable.pending !== null) break;
                currentDisplayableFactory!.setRunnable(demoGameRunnable); if (JThrowable.pending !== null) break;
                currentDisplayableFactory!.setMyCanvas(this); if (JThrowable.pending !== null) break;
            } else {
                while (this.isRunning()) {
                    this.run3(); if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
                this.end(); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.RUN, e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        this.logUtil!.putF(this.commonStrings!.END_RUNNABLE, this, this.commonStrings!.RUN); if (JThrowable.pending !== null) return;
    }
    

    run3(): void {
        this.loopTimeHelper!.setStartTimeTNT(); if (JThrowable.pending !== null) return;
        this.processGame(); if (JThrowable.pending !== null) return;
        this.processLoopSleep(); if (JThrowable.pending !== null) return;
    }
    

    setRunning(running: bool): void {
        super.setRunning(running); if (JThrowable.pending !== null) return;
        do {
            let features: Features | null = Features.getInstance(); if (JThrowable.pending !== null) break;
            let openGLFeatureFactory: OpenGLFeatureFactory | null = OpenGLFeatureFactory.getInstance(); if (JThrowable.pending !== null) break;
            if (running) {
            } else {
                if ((features!.isDefault(openGLFeatureFactory!.OPENGL) || J2MEUtil.isHTML()) || SWTUtil.isSWT) {
                    let currentDisplayableFactory: CurrentDisplayableFactory | null = CurrentDisplayableFactory.getInstance(); if (JThrowable.pending !== null) break;
                    currentDisplayableFactory!.clearRunnable(); if (JThrowable.pending !== null) break;
                    this.end(); if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.SET_RUNNING, e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    end(): void {
        let progressCanvas: ProgressCanvas | null = ProgressCanvasFactory.getInstance(); if (JThrowable.pending !== null) return;
        let features: Features | null = Features.getInstance(); if (JThrowable.pending !== null) return;
        this.baseGameStatistics!.add(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(DemoCanvas.BOT_GAME_STATS)!.append(JObject.jtoString(this.baseGameStatistics))!.append(CommonSeps.getInstance()!.NEW_LINE))); if (JThrowable.pending !== null) return;
        this.baseGameStatistics!.init(); if (JThrowable.pending !== null) return;
        if (features!.isFeature(MainFeatureFactory.getInstance()!.LOAD_ONDEMAND)) {
            progressCanvas!.start(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        this.logUtil!.putF("Demo End", this, this.commonStrings!.RUN); if (JThrowable.pending !== null) return;
        this.close(); if (JThrowable.pending !== null) return;
        DisplayChangeEventHandler.getInstance()!.removeListener(this); if (JThrowable.pending !== null) return;
        this.stopGameDemo(); if (JThrowable.pending !== null) return;
    }
    

    setGameState(gameState: GameState | null): void {
    }
    

    getGameState(): GameState | null {
        return this.gameStateFactory!.PLAYING_GAME_STATE;
    }
    

    getGameCanvasRunnableInterface(): AllBinaryGameCanvas | null {
        return this.gameCanvas;
    }
    

    isDemoLoading(): bool {
        let gameCanvas: AllBinaryGameCanvas | null = this.gameCanvas;
        if (gameCanvas == NullGameCanvas.getInstance()) {
            return true;
        } else if (gameCanvas!.isInitialized()) {
            return false;
        } if (JThrowable.pending !== null) return false;
        return true;
    }
    

    getState(): i32 {
        return this.state;
    }
    

    setState(state: i32): void {
        this.state = state;
    }
    

    isHighScoreSubmitted(): bool {
        this.logUtil!.putF("Wow the AI got a high score!", this, "isHighScoreSubmitted"); if (JThrowable.pending !== null) return false;
        return false;
    }
    

    getRealHighScoresPaintable(): HighScoresPaintable | null {
        return this.realHighScoresPaintable;
    }
    

    setSpecialAnimationInterface(specialAnimationInterface: SpecialAnimation | null): void {
        specialAnimationInterface!.setFrame(0); if (JThrowable.pending !== null) return;
        this.specialAnimationInterface = specialAnimationInterface;
    }
    

    getSpecialAnimationInterface(): SpecialAnimation | null {
        return this.specialAnimationInterface;
    }
    

    setPaintableInterface(paintableInterface: PaintableInterface | null): void {
        this.paintableInterface = paintableInterface;
    }
    

    getPaintableInterface(): PaintableInterface | null {
        return this.paintableInterface;
    }
    

    setDefaultPaintableInterface(defaultPaintableInterface: Paintable | null): void {
        this.defaultPaintableInterface = defaultPaintableInterface;
    }
    

    getDefaultPaintableInterface(): Paintable | null {
        return this.defaultPaintableInterface;
    }
    

    getHighScoresFactoryInterface(): HighScoresFactoryInterface | null {
        return this.highScoresFactoryInterface;
    }
    

    setMenuInputProcessor(menuInputProcessor: BasicMenuInputProcessor | null): void {
        this.menuInputProcessor = menuInputProcessor;
    }
    

    getMenuInputProcessor(): BasicMenuInputProcessor | null {
        return this.menuInputProcessor;
    }
    

    getMenuForm(): ScrollSelectionForm | null {
        return this.menuForm;
    }
    

    setMenuForm(menuForm: ScrollSelectionForm | null): void {
        this.menuForm = menuForm;
    }
    

    isInitialized(): bool {
        return this.initialized;
    }
    

    getOverlayPaintable(): Paintable | null {
        return this.overlayPaintable;
    }
    

    setBasicGameDemoPaintable(basicGameDemoPaintable: StatePaintable | null): void {
        this.basicGameDemoPaintable = basicGameDemoPaintable;
    }
    

    getBasicGameDemoPaintable(): StatePaintable | null {
        return this.basicGameDemoPaintable;
    }
    

    setTempWait(tempWait: i32): void {
        this.tempWait = tempWait;
    }
    

    getTempWait(): i32 {
        return this.tempWait;
    }
    

    isSingleThread(): bool {
        return OpenGLFeatureUtil.getInstance()!.isAnyThreed() || SWTUtil.isSWT;
    }
    

    isRunningInAnotherThread(): bool {
        let features: Features | null = Features.getInstance(); if (JThrowable.pending !== null) return false;
        let openGLFeatureFactory: OpenGLFeatureFactory | null = OpenGLFeatureFactory.getInstance(); if (JThrowable.pending !== null) return false;
        if (features!.isDefault(openGLFeatureFactory!.OPENGL_AS_GAME_THREAD)) {
            return true;
        } else {
            return this.isRunning();
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    getGameInitializationInterfaceFactoryInterface(): BasicBuildGameInitializerFactory | null {
        return this.gameInitializationInterfaceFactoryInterface;
    }
    

    getType(): i32 {
        return DemoCanvas.TYPE;
    }
    

    getTitle(): string | null {
        return super.getTitle();
    }
    

    isPaused(): bool {
        return super.isPaused();
    }
}

