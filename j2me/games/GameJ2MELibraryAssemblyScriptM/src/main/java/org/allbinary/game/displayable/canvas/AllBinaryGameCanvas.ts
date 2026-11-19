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
// import javax.microedition.lcdui.ChoiceGroup
// import javax.microedition.lcdui.CommandListener
// import javax.microedition.lcdui.Font
// import javax.microedition.lcdui.Graphics
// import javax.microedition.lcdui.LcduiItem
// import javax.microedition.lcdui.NullCommandListener
// import org.allbinary.AndroidUtil
// import org.allbinary.J2MEUtil
// import org.allbinary.business.advertisement.GameAdStateFactory
// import org.allbinary.canvas.BaseGameStatistics
// import org.allbinary.canvas.GameStatisticsFactory
// import org.allbinary.canvas.Processor
// import org.allbinary.canvas.RunnableCanvas
// import org.allbinary.debug.DebugFactory
// import org.allbinary.debug.NoDebug
// import org.allbinary.game.GameAdState
// import org.allbinary.game.GameInfo
// import org.allbinary.game.GameStrings
// import org.allbinary.game.GameTypeFactory
// import org.allbinary.game.Intermission
// import org.allbinary.game.IntermissionCompositeInterface
// import org.allbinary.game.IntermissionEnableListenerInterface
// import org.allbinary.game.IntermissionInterface
// import org.allbinary.game.PlayerTypesFactory
// import org.allbinary.game.commands.GameCommandsFactory
// import org.allbinary.game.configuration.InGameFeatures
// import org.allbinary.game.configuration.InGameOptionsForm
// import org.allbinary.game.configuration.event.ChangedGameFeatureListener
// import org.allbinary.game.configuration.event.GameInitializedEvent
// import org.allbinary.game.configuration.event.GameInitializedEventHandler
// import org.allbinary.game.configuration.feature.Features
// import org.allbinary.game.configuration.feature.GameFeatureFactory
// import org.allbinary.game.configuration.feature.GameFeatureUtil
// import org.allbinary.game.configuration.feature.InputFeatureFactory
// import org.allbinary.game.configuration.feature.MainFeatureFactory
// import org.allbinary.game.configuration.feature.SensorFeatureFactory
// import org.allbinary.game.configuration.feature.TouchFeatureFactory
// import org.allbinary.game.displayable.GameLevelDisplayChangeEventListenersFactory
// import org.allbinary.game.init.BasicBuildGameInitializerFactory
// import org.allbinary.game.init.GameInitializationUtil
// import org.allbinary.game.input.GameInputStrings
// import org.allbinary.game.input.InputProcessor
// import org.allbinary.game.input.NoPlayerGameInput
// import org.allbinary.game.input.PlayerGameInput
// import org.allbinary.game.input.event.GameKeyEventHandler
// import org.allbinary.game.layer.AllBinaryGameLayerManager
// import org.allbinary.game.layer.SWTUtil
// import org.allbinary.game.paint.ColorFillBasePaintable
// import org.allbinary.game.paint.ColorFillPaintableFactory
// import org.allbinary.game.resource.ResourceLoadingLevel
// import org.allbinary.game.resource.ResourceLoadingLevelFactory
// import org.allbinary.game.score.HighScore
// import org.allbinary.game.score.HighScoresHelperBaseInterface
// import org.allbinary.game.score.HighScoresFactoryInterface
// import org.allbinary.game.score.HighScoresPaintable
// import org.allbinary.game.score.NullHighScoresSingletonFactory
// import org.allbinary.game.score.displayable.HighScoreTextBox
// import org.allbinary.game.state.GameState
// import org.allbinary.game.state.GameStateFactory
// import org.allbinary.graphics.GraphicsStrings
// import org.allbinary.graphics.Rectangle
// import org.allbinary.graphics.ScreenCapture
// import org.allbinary.graphics.ScreenCaptureFactory
// import org.allbinary.graphics.canvas.transition.progress.ProgressCanvas
// import org.allbinary.graphics.canvas.transition.progress.ProgressCanvasFactory
// import org.allbinary.graphics.color.BasicColorFactory
// import org.allbinary.graphics.color.BasicColorSetUtil
// import org.allbinary.graphics.displayable.CanvasStrings
// import org.allbinary.graphics.displayable.DisplayInfoSingleton
// import org.allbinary.graphics.displayable.GameTickDisplayInfoSingleton
// import org.allbinary.graphics.displayable.command.MyCommandsFactory
// import org.allbinary.graphics.displayable.event.DisplayChangeEvent
// import org.allbinary.graphics.displayable.event.DisplayChangeEventHandler
// import org.allbinary.graphics.displayable.event.DisplayChangeEventListener
// import org.allbinary.graphics.font.MyFontProcessor
// import org.allbinary.graphics.font.UpdateMyFontInterface
// import org.allbinary.graphics.font.UpdateMyFontProcessor
// import org.allbinary.graphics.form.CommandCurrentSelectionFormFactory
// import org.allbinary.graphics.form.FormPaintable
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
// import org.allbinary.graphics.paint.NullInitUpdatePaintable
// import org.allbinary.graphics.paint.NullPaintable
// import org.allbinary.graphics.paint.Paintable
// import org.allbinary.graphics.paint.PaintableInterface
// import org.allbinary.image.opengles.OpenGLImageSpecificFactory
// import org.allbinary.input.gyro.SensorGameUpdateProcessor
// import org.allbinary.input.gyro.SingleSensorGameUpdateProcessor
// import org.allbinary.input.motion.button.BaseTouchInput
// import org.allbinary.input.motion.button.NoButtonsTouchInputFactory
// import org.allbinary.input.motion.button.TouchButtonFactory
// import org.allbinary.input.motion.button.TouchButtonsPaintableFactory
// import org.allbinary.input.motion.button.TouchScreenFactory
// import org.allbinary.input.motion.gesture.observer.BasicMotionGesturesHandler
// import org.allbinary.logic.ABSystemWrapper
// import org.allbinary.logic.communication.log.ForcedLogUtil
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.communication.log.PreLogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.logic.system.os.OperatingSystemFactory
// import org.allbinary.logic.system.security.licensing.AbeClientInformationInterface
// import org.allbinary.logic.util.event.AllBinaryEventObject
// import org.allbinary.logic.util.event.EventStrings
// import org.allbinary.media.audio.AllBinaryMediaManager
// import org.allbinary.media.audio.PlayerQueue
// import org.allbinary.media.audio.PrimaryPlayerQueueFactory
// import org.allbinary.media.audio.SecondaryPlayerQueueFactory
// import org.allbinary.media.audio.SelectSound
// import org.allbinary.string.CommonSeps
// import org.allbinary.string.CommonStrings
// import org.allbinary.thread.SecondaryThreadPool
// import org.allbinary.time.GameTickTimeDelayHelper
// import org.allbinary.time.GameTickTimeDelayHelperFactory
// import org.allbinary.time.TimeDelayHelper
// import org.allbinary.util.ABHashtable
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD
// import org.allbinary.util.BasicArrayListUtil

@global export class AllBinaryGameCanvas extends RunnableCanvas implements AllBinaryGameCanvasInterface, GameCanvasRunnableInterface, MenuListener, IntermissionCompositeInterface, IntermissionEnableListenerInterface, PopupMenuInterface, DisplayChangeEventListener, UpdateMyFontInterface {

    jclassName(): string {
        return "org.allbinary.game.displayable.canvas.AllBinaryGameCanvas";
    }
    static readonly id: i32 = 0;
    static readonly TYPE: i32 = 2;
    basicColorFactory: BasicColorFactory | null = null;
    basicSetColorUtil: BasicColorSetUtil | null = null;
    touchFeatureFactory: TouchFeatureFactory | null = null;
    openGLFeatureFactory: OpenGLFeatureFactory | null = null;
    touchButtonFactory: TouchButtonFactory | null = null;
    gameAdStateFactory: GameAdStateFactory | null = null;
    gameStrings: GameStrings | null = null;
    gameInputStrings: GameInputStrings | null = null;
    gameStateFactory: GameStateFactory | null = null;
    gameTickTimeDelayHelper: GameTickTimeDelayHelper | null = null;
    gameTickDisplayInfoSingleton: GameTickDisplayInfoSingleton | null = null;
    gameRunnable: GameCanvasRunnable | null = null;
    gamePauseRunnable: GameCanvasPauseRunnable | null = null;
    formUtil: FormUtil | null = null;
    myFormUtil: MyFormUtil | null = null;
    updateMyFontProcessor: MyFontProcessor | null = null;
    myFontProcessor: MyFontProcessor | null = null;
    gameSpecificPaintable: Paintable | null = null;
    sensorGameUpdateProcessor: SensorGameUpdateProcessor | null = null;
    endGameInfo: EndGameInfo | null = null;
    startIntermissionInterface: IntermissionInterface | null = null;
    endLevelIntermissionInterface: IntermissionInterface | null = null;
    gameLayerManager: AllBinaryGameLayerManager | null = null;
    gameState: GameState | null = null;
    gameOver: bool = false;
    initialized: bool = false;
    gameStateTimeHelper: TimeDelayHelper | null = null;
    highScoresHelper: HighScoresHelperBaseInterface | null = null;
    highScoreSubmitted: bool = false;
    realHighScoresPaintable: HighScoresPaintable | null = null;
    highScoresPaintable: Paintable | null = null;
    localPlayerGameInputList: BasicArrayList | null = null;
    isCheating: bool = false;
    hashtable: ABHashtable | null = null;
    isSingleKeyRepeatableProcessing: bool = false;
    gameInitializationInterfaceFactoryInterface: BasicBuildGameInitializerFactory | null = null;
    touchButtonsPaintable: Paintable | null = null;
    touchPaintable: Paintable | null = null;
    cheatProcessor: PlayerGameInput | null = null;
    gameInputProcessor: Processor | null = null;
    endGameProcessor: Processor | null = null;
    realEndGameProcessor: Processor | null = null;
    startIntermissionProcessor: Processor | null = null;
    realStartIntermissionProcessor: Processor | null = null;
    endGamePaintable: Paintable | null = null;
    endGameStatePaintable: Paintable | null = null;
    nonBotPaintable: Paintable | null = null;
    intermissionPaintable: Paintable | null = null;
    startIntermissionPaintable: InitUpdatePaintable | null = null;
    mainStateProcessor: Processor | null = null;
    processGameProcessor: Processor | null = null;
    highScoresFactoryInterface: HighScoresFactoryInterface | null = null;
    startLevel: i32 = 0;
    mainMenuInputProcessor: BasicMenuInputProcessor | null = null;
    popupMenuInputProcessor: BasicMenuInputProcessor | null = null;
    menuInputProcessor: BasicMenuInputProcessor | null = null;
    menuForm: ScrollSelectionForm | null = null;
    formPaintable: Paintable | null = null;
    openMenuPaintable: Paintable | null = null;
    menuPaintable: Paintable | null = null;
    currentTouchInputFactory: BaseTouchInput | null = null;
    colorFillPaintable: ColorFillBasePaintable | null = null;
    baseGameStatistics: BaseGameStatistics | null = null;
    primaryPlayerQueue: PlayerQueue | null = null;
    secondaryPlayerQueue: PlayerQueue | null = null;
    BUILD_GAME: string | null = null;
    gameTypeFactory: GameTypeFactory | null = null;
    screenCapture: ScreenCapture | null = null;
    basicMotionGesturesHandler: BasicMotionGesturesHandler | null = null;
    gameKeyEventHandler: GameKeyEventHandler | null = null;
    gameBehavior: DemoGameBehavior | null = null;
    menuBehavior: BaseMenuBehavior | null = null;
    progressPaintable: PaintableInterface | null = null;
    fontHeightP: i32 = 0;
    gameCanvasStartListener: DemoPaintableInterface | null = null;
    rawGameInputProcessor: InputProcessor | null = null;
    rawInputProcessor: InputProcessor | null = null;
    inputProcessor: InputProcessor | null = null;
    YIELD_SLEEP: i64 = 0;

    jfields_AllBinaryGameCanvas(): void {
    this.basicColorFactory = BasicColorFactory.getInstance();
    this.basicSetColorUtil = BasicColorSetUtil.getInstance();
    this.touchFeatureFactory = TouchFeatureFactory.getInstance();
    this.openGLFeatureFactory = OpenGLFeatureFactory.getInstance();
    this.touchButtonFactory = TouchButtonFactory.getInstance();
    this.gameAdStateFactory = GameAdStateFactory.getInstance();
    this.gameStrings = GameStrings.getInstance();
    this.gameInputStrings = GameInputStrings.getInstance();
    this.gameStateFactory = GameStateFactory.getInstance();
    this.gameTickTimeDelayHelper = GameTickTimeDelayHelperFactory.getInstance();
    this.gameTickDisplayInfoSingleton = GameTickDisplayInfoSingleton.getInstance();
    this.gameRunnable = new GameCanvasRunnable().jinit_GameCanvasRunnable_1(this);
    this.gamePauseRunnable = new GameCanvasPauseRunnable().jinit_GameCanvasPauseRunnable_1(this);
    this.formUtil = FormUtil.getInstance();
    this.myFormUtil = MyFormUtil.getInstance();
    this.updateMyFontProcessor = new UpdateMyFontProcessor().jinit_UpdateMyFontProcessor_1(this);
    this.myFontProcessor = this.updateMyFontProcessor;
    this.gameSpecificPaintable = NullPaintable.getInstance();
    this.sensorGameUpdateProcessor = new SingleSensorGameUpdateProcessor().jinit_SingleSensorGameUpdateProcessor_0();
    this.endGameInfo = new EndGameInfo().jinit_EndGameInfo_0();
    this.startIntermissionInterface = new Intermission().jinit_Intermission_0();
    this.endLevelIntermissionInterface = new Intermission().jinit_Intermission_0();
    this.gameLayerManager = AllBinaryGameLayerManager.getNullInstance();
    this.gameState = this.gameStateFactory!.NO_GAME_STATE;
    this.gameOver = false;
    this.initialized = false;
    this.gameStateTimeHelper = new TimeDelayHelper().jinit_TimeDelayHelper_1(0);
    
    this.highScoreSubmitted = false;
    this.realHighScoresPaintable = new HighScoresPaintable().jinit_HighScoresPaintable_0();
    this.highScoresPaintable = NullPaintable.getInstance();
    this.localPlayerGameInputList = new BasicArrayListD().jinit_BasicArrayListD_0();
    this.isCheating = false;
    this.hashtable = this.stdUtil!.NULL_TABLE;
    this.isSingleKeyRepeatableProcessing = false;
    this.gameInitializationInterfaceFactoryInterface = BasicBuildGameInitializerFactory.NULL_BASE_BUILD_GMAE_INITIALIZER_FACTORY;
    this.touchButtonsPaintable = NullPaintable.getInstance();
    this.touchPaintable = NullPaintable.getInstance();
    this.cheatProcessor = NoPlayerGameInput.getInstance();
    this.gameInputProcessor = Processor.getInstance();
    this.endGameProcessor = Processor.getInstance();
    this.realEndGameProcessor = Processor.getInstance();
    this.startIntermissionProcessor = Processor.getInstance();
    this.realStartIntermissionProcessor = Processor.getInstance();
    this.endGamePaintable = NullPaintable.getInstance();
    this.endGameStatePaintable = NullPaintable.getInstance();
    this.nonBotPaintable = NullPaintable.getInstance();
    this.intermissionPaintable = NullPaintable.getInstance();
    this.startIntermissionPaintable = NullInitUpdatePaintable.getInstance();
    this.mainStateProcessor = Processor.getInstance();
    this.processGameProcessor = Processor.getInstance();
    
    this.startLevel = 0;
    this.mainMenuInputProcessor = NoMenuInputProcessor.getInstance();
    this.popupMenuInputProcessor = NoMenuInputProcessor.getInstance();
    this.menuInputProcessor = NoMenuInputProcessor.getInstance();
    this.menuForm = ScrollSelectionForm.getNullScrollSelectionForm();
    this.formPaintable = NullPaintable.getInstance();
    this.openMenuPaintable = NullPaintable.getInstance();
    this.menuPaintable = NullPaintable.getInstance();
    this.currentTouchInputFactory = NoButtonsTouchInputFactory.getInstance();
    this.colorFillPaintable = ColorFillPaintableFactory.getInstance()!.getInstance2(this.basicColorFactory!.BLACK, true);
    this.baseGameStatistics = GameStatisticsFactory.getInstance();
    this.primaryPlayerQueue = PrimaryPlayerQueueFactory.getInstance();
    this.secondaryPlayerQueue = SecondaryPlayerQueueFactory.getInstance();
    this.BUILD_GAME = "buildGame";
    this.gameTypeFactory = GameTypeFactory.getInstance();
    this.screenCapture = ScreenCaptureFactory.getInstance();
    this.basicMotionGesturesHandler = BasicMotionGesturesHandler.getInstance();
    this.gameKeyEventHandler = GameKeyEventHandler.getInstance();
    this.gameBehavior = null;
    this.menuBehavior = null;
    this.progressPaintable = ProgressCanvasFactory.getLazyInstance();
    this.fontHeightP = 0;
    this.gameCanvasStartListener = NullDemoPaintable.NULL_DEMO_PAINTABLE;
    this.rawGameInputProcessor = new GameCanvasInputProcessor().jinit_GameCanvasInputProcessor_1(this);
    this.rawInputProcessor = new FormInputProcessor().jinit_FormInputProcessor_1(this);
    this.inputProcessor = this.getRawGameInputProcessor();
    this.YIELD_SLEEP = (<i64>100);
    }
    

    jinit_AllBinaryGameCanvas_5(commandListener: CommandListener | null, gameLayerManager: AllBinaryGameLayerManager | null, highScoresFactoryInterface: HighScoresFactoryInterface | null, gameInitializationInterfaceFactoryInterface: BasicBuildGameInitializerFactory | null, buffered: bool): AllBinaryGameCanvas {
        super.jinit_RunnableCanvas_3(commandListener, CanvasStrings.getInstance()!.EMPTY_CHILD_NAME_LIST, true);
        this.jfields_AllBinaryGameCanvas();
        this.highScoresHelper = highScoresFactoryInterface!.createHighScoresHelper(); if (JThrowable.pending !== null) return this;
        this.gameInitializationInterfaceFactoryInterface = gameInitializationInterfaceFactoryInterface;
        this.init(gameLayerManager, buffered); if (JThrowable.pending !== null) return this;
        this.highScoresFactoryInterface = highScoresFactoryInterface;
        if (this.gameLayerManager!.getGameInfo()!.getGameType() == this.gameTypeFactory!.BOT || this.gameLayerManager!.getGameInfo()!.getGameType() == this.gameTypeFactory!.NONE) {
            this.gameBehavior = DemoGameBehavior.getInstance(); if (JThrowable.pending !== null) return this;
            this.menuBehavior = BaseMenuBehavior.getInstance(); if (JThrowable.pending !== null) return this;
        } else {
            this.gameBehavior = BaseGameBehavior.getInstance(); if (JThrowable.pending !== null) return this;
            this.menuBehavior = this.getInGameMenuBehavior(); if (JThrowable.pending !== null) return this;
        } if (JThrowable.pending !== null) return this;
        this.initPopupMenu(); if (JThrowable.pending !== null) return this;
        this.initMenu(); if (JThrowable.pending !== null) return this;
        this.initSpecialPaint(); if (JThrowable.pending !== null) return this;
        DisplayChangeEventHandler.getInstance()!.addListenerInterface(this); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    updateMeasurement(graphics: Graphics | null): void {
        do {
            let font: Font | null = graphics!.getFont(); if (JThrowable.pending !== null) break;
            this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(this.commonStrings!.START)!.append(this.canvasStrings!.FD_WIDTH)!.appendint(MyFontProcessor.defaultCharWidth(font))!.append(this.canvasStrings!.FD_HEIGHT)!.appendint(font!.getHeight())), this, this.canvasStrings!.UPDATE_MEASUREMENT); if (JThrowable.pending !== null) break;
            this.fontHeightP = font!.getHeight(); if (JThrowable.pending !== null) break;
            this.myFormUtil!.updateMeasurement(graphics); if (JThrowable.pending !== null) break;
            let popupMenuRectangle: Rectangle | null = this.myFormUtil!.getPopupMenuRectangle(); if (JThrowable.pending !== null) break;
            let basicPopupMenuPaintable: BasicPopupMenuPaintable | null = (changetype<BasicPopupMenuPaintable | null>(this.getOpenMenuPaintable())); if (JThrowable.pending !== null) break;
            basicPopupMenuPaintable!.init(popupMenuRectangle); if (JThrowable.pending !== null) break;
            if (this.getPopupMenuInputProcessor() != NoMenuInputProcessor.getInstance()) {
                let popupMenuInputProcessor: PopupMenuInputProcessor | null = (changetype<PopupMenuInputProcessor | null>(this.getPopupMenuInputProcessor())); if (JThrowable.pending !== null) break;
                popupMenuInputProcessor!.init(popupMenuRectangle); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            this.myFontProcessor = MyFontProcessor.getInstance(); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.canvasStrings!.ON_DISPLAY_CHANGE_EVENT, e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    getInGameMenuBehavior(): BaseMenuBehavior | null {
        return InGameMenuBehavior.getInstance();
    }
    

    setCurrentThread(): void {
        if (J2MEUtil.isHTML()) {
            super.setCurrentThreadFake(); if (JThrowable.pending !== null) return;
        } else {
            super.setCurrentThread(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    onEvent(eventObject: AllBinaryEventObject | null): void {
        ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this); if (JThrowable.pending !== null) return;
    }
    

    onDisplayChangeEvent(displayChangeEvent: DisplayChangeEvent | null): void {
        do {
            this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(this.commonStrings!.START)!.append(JObject.jtoString(DisplayInfoSingleton.getInstance()))), this, this.canvasStrings!.UPDATE_MEASUREMENT); if (JThrowable.pending !== null) break;
            this.myFontProcessor = this.updateMyFontProcessor;
            this.menuBehavior!.onDisplayChangeEvent(this, displayChangeEvent); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.canvasStrings!.ON_DISPLAY_CHANGE_EVENT, e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    updateMenuFromEvent(displayChangeEvent: DisplayChangeEvent | null): void {
        let formType: FormType | null = FormTypeFactory.getInstance()!.getFormType(); if (JThrowable.pending !== null) return;
        let rectangle: Rectangle | null = this.formUtil!.createFormRectangle(); if (JThrowable.pending !== null) return;
        this.menuForm!.init(rectangle, formType); if (JThrowable.pending !== null) return;
        if (this.currentTouchInputFactory != NoButtonsTouchInputFactory.getInstance()) {
            this.touchButtonFactory!.toggle(this.isPaused(), this.currentTouchInputFactory!.getList()); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        this.myFontProcessor = this.updateMyFontProcessor;
    }
    

    processSleep(): void {
        super.processSleep(); if (JThrowable.pending !== null) return;
        if (AllBinaryMediaManager.update()) {
            if (!this.primaryPlayerQueue!.process()) {
                this.secondaryPlayerQueue!.process(); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        if (this.menuInputProcessor!.processInputList() != -1) {
            this.runnableCanvasRefreshHelper!.process(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    initPopupMenu(): void {
        if (this.popupMenuInputProcessor == NoMenuInputProcessor.getInstance()) {
            let features: Features | null = Features.getInstance(); if (JThrowable.pending !== null) return;
            let popupMenuRectangle: Rectangle | null = this.myFormUtil!.getPopupMenuRectangle(); if (JThrowable.pending !== null) return;
            if (features!.isFeature(this.touchFeatureFactory!.TOUCH_ENABLED)) {
                this.setOpenMenuPaintable(new BasicPopupMenuPaintable().jinit_BasicPopupMenuPaintable_3(popupMenuRectangle, this.gameLayerManager!.getBackgroundBasicColor(), this.gameLayerManager!.getForegroundBasicColor())); if (JThrowable.pending !== null) return;
                this.setPopupMenuInputProcessor(new PopupMenuInputProcessor().jinit_PopupMenuInputProcessor_4(new BasicArrayListD().jinit_BasicArrayListD_0(), -1, this, popupMenuRectangle)); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } else {
        } if (JThrowable.pending !== null) return;
    }
    

    initMenu(): void {
        do {
            this.menuBehavior!.initMenu(this); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "initMenu", e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    initMenu2(): void {
        this.closeMenu(); if (JThrowable.pending !== null) return;
        let formType: FormType | null = FormTypeFactory.getInstance()!.getFormType(); if (JThrowable.pending !== null) return;
        let gameLimitedCommandTextItemArrayFactory: GameLimitedCommandTextItemArrayFactory | null = GameLimitedCommandTextItemArrayFactory.getInstance(); if (JThrowable.pending !== null) return;
        let commandTextItemArrayFactory: CommandTextItemArrayFactory | null = gameLimitedCommandTextItemArrayFactory!.getCommandTextItemArrayFactory(); if (JThrowable.pending !== null) return;
        let items: StaticArray<ABCustomItem | null> | null = commandTextItemArrayFactory!.getInstance3(this.getCommandStack(), this.gameLayerManager!.getBackgroundBasicColor(), this.gameLayerManager!.getForegroundBasicColor()); if (JThrowable.pending !== null) return;
        let rectangle: Rectangle | null = this.formUtil!.createFormRectangle(); if (JThrowable.pending !== null) return;
        this.setMenuForm(CommandCurrentSelectionFormFactory.getInstance8(StringUtil.getInstance()!.EMPTY_STRING, items, rectangle, formType, 25, false, this.gameLayerManager!.getBackgroundBasicColor(), this.gameLayerManager!.getForegroundBasicColor())); if (JThrowable.pending !== null) return;
        let scrollSelectionForm: ScrollSelectionForm | null = this.getMenuForm(); if (JThrowable.pending !== null) return;
        let features: Features | null = Features.getInstance(); if (JThrowable.pending !== null) return;
        if (features!.isFeature(this.touchFeatureFactory!.TOUCH_ENABLED)) {
            this.mainMenuInputProcessor = new PopupCommandFormInputProcessor().jinit_PopupCommandFormInputProcessor_5(new BasicArrayListD().jinit_BasicArrayListD_0(), -1, this, scrollSelectionForm, changetype<PopupMenuInputProcessor | null>(this.getPopupMenuInputProcessor())); if (JThrowable.pending !== null) return;
        } else {
        } if (JThrowable.pending !== null) return;
        this.setMenuInputProcessor(this.getPopupMenuInputProcessor()); if (JThrowable.pending !== null) return;
        if (scrollSelectionForm != ScrollSelectionFormNoneFactory.getInstance()) {
            this.setFormPaintable(new FormPaintable().jinit_FormPaintable_1(scrollSelectionForm)); if (JThrowable.pending !== null) return;
        } else {
        } if (JThrowable.pending !== null) return;
        this.closeMenu(); if (JThrowable.pending !== null) return;
    }
    

    updateMenu(): void {
        do {
            this.menuBehavior!.updateMenu(this); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "initMenu", e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    updateMenu2(): void {
        let scrollSelectionForm: ScrollSelectionForm | null = this.getMenuForm(); if (JThrowable.pending !== null) return;
        scrollSelectionForm!.deleteAll(); if (JThrowable.pending !== null) return;
        let gameLimitedCommandTextItemArrayFactory: GameLimitedCommandTextItemArrayFactory | null = GameLimitedCommandTextItemArrayFactory.getInstance(); if (JThrowable.pending !== null) return;
        let commandTextItemArrayFactory: CommandTextItemArrayFactory | null = gameLimitedCommandTextItemArrayFactory!.getCommandTextItemArrayFactory(); if (JThrowable.pending !== null) return;
        let items: StaticArray<ABCustomItem | null> | null = commandTextItemArrayFactory!.getInstance3(this.getCommandStack(), this.gameLayerManager!.getBackgroundBasicColor(), this.gameLayerManager!.getForegroundBasicColor()); if (JThrowable.pending !== null) return;
        let size: i32 = items!.length;
        for (let index: i32 = 0; index < size; index++) {
            scrollSelectionForm!.append(items![index]); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        let formType: FormType | null = FormTypeFactory.getInstance()!.getFormType(); if (JThrowable.pending !== null) return;
        let rectangle: Rectangle | null = this.formUtil!.createFormRectangle(); if (JThrowable.pending !== null) return;
        scrollSelectionForm!.init(rectangle, formType); if (JThrowable.pending !== null) return;
    }
    

    pause(): void {
        this.gameBehavior!.pause(this); if (JThrowable.pending !== null) return;
        this.closeMenu(); if (JThrowable.pending !== null) return;
        super.pause(); if (JThrowable.pending !== null) return;
        this.touchButtonFactory!.toggle(this.isPaused(), BasicArrayListUtil.getInstance()!.getImmutableInstance()); if (JThrowable.pending !== null) return;
        this.tsUtil!.gc(); if (JThrowable.pending !== null) return;
    }
    

    unPause(): void {
        this.logUtil!.putF(this.commonStrings!.START, this, this.gameStrings!.UNPAUSE); if (JThrowable.pending !== null) return;
        this.closeMenu(); if (JThrowable.pending !== null) return;
        this.tsUtil!.gc(); if (JThrowable.pending !== null) return;
        super.unPause(); if (JThrowable.pending !== null) return;
        this.touchButtonFactory!.toggle(this.isPaused(), BasicArrayListUtil.getInstance()!.getImmutableInstance()); if (JThrowable.pending !== null) return;
        this.gameBehavior!.unPause(this); if (JThrowable.pending !== null) return;
    }
    

    isPausable(): bool {
        if (CurrentDisplayableFactory.getInstance()!.getUsedRunnable() == NullWaitGameRunnable.getInstance()) {
            return true;
        } else {
            return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    popupMenu(): void {
        this.menuBehavior!.popupMenu(this); if (JThrowable.pending !== null) return;
    }
    

    popupMenu2(): void {
        this.primaryPlayerQueue!.add(SelectSound.getInstance()); if (JThrowable.pending !== null) return;
        this.setMenuPaintable(this.getFormPaintable()); if (JThrowable.pending !== null) return;
        this.setMenuInputProcessor(this.mainMenuInputProcessor); if (JThrowable.pending !== null) return;
        this.basicMotionGesturesHandler!.addListenerInterface(this.mainMenuInputProcessor); if (JThrowable.pending !== null) return;
        this.gameKeyEventHandler!.addListener(this.mainMenuInputProcessor); if (JThrowable.pending !== null) return;
    }
    

    toggleMenu(): void {
        this.logUtil!.putF(this.commonStrings!.START, this, this.gameStrings!.TOGGLE_MENU); if (JThrowable.pending !== null) return;
        if (this.getMenuPaintable() == this.getOpenMenuPaintable()) {
            this.pause(); if (JThrowable.pending !== null) return;
            this.updateMenu(); if (JThrowable.pending !== null) return;
            this.popupMenu(); if (JThrowable.pending !== null) return;
        } else if (this.getMenuPaintable() == this.getFormPaintable()) {
            this.primaryPlayerQueue!.add(SelectSound.getInstance()); if (JThrowable.pending !== null) return;
            this.unPause(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    closeMenu(): void {
        this.menuBehavior!.closeMenu(this); if (JThrowable.pending !== null) return;
    }
    

    closeMenu2(): void {
        this.setMenuPaintable(this.getOpenMenuPaintable()); if (JThrowable.pending !== null) return;
        this.basicMotionGesturesHandler!.removeListener(this.mainMenuInputProcessor); if (JThrowable.pending !== null) return;
        this.gameKeyEventHandler!.removeListener(this.mainMenuInputProcessor); if (JThrowable.pending !== null) return;
        this.setMenuInputProcessor(this.getPopupMenuInputProcessor()); if (JThrowable.pending !== null) return;
    }
    

    open(): void {
        this.basicMotionGesturesHandler!.addListenerInterface(this.menuInputProcessor); if (JThrowable.pending !== null) return;
        this.gameKeyEventHandler!.addListener(this.menuInputProcessor); if (JThrowable.pending !== null) return;
    }
    

    close(): void {
        this.basicMotionGesturesHandler!.removeListener(this.menuInputProcessor); if (JThrowable.pending !== null) return;
        this.gameKeyEventHandler!.removeListener(this.menuInputProcessor); if (JThrowable.pending !== null) return;
        this.primaryPlayerQueue!.clear(); if (JThrowable.pending !== null) return;
        this.secondaryPlayerQueue!.clear(); if (JThrowable.pending !== null) return;
    }
    

    processorInit(): void {
        this.setMainStateProcessor(Processor.getInstance()); if (JThrowable.pending !== null) return;
        this.setProcessGameProcessorInit(); if (JThrowable.pending !== null) return;
    }
    

    setProcessGameProcessorInit(): void {
        this.setProcessGameProcessor(new GameProcessor().jinit_GameProcessor_1(this)); if (JThrowable.pending !== null) return;
    }
    

    initSpecialPaint(): void {
        this.menuBehavior!.initSpecialPaint(this); if (JThrowable.pending !== null) return;
    }
    

    init(gameLayerManager: AllBinaryGameLayerManager | null, buffered: bool): void {
        this.gameStateTimeHelper!.setStartTimeTNT(); if (JThrowable.pending !== null) return;
        this.setHighScoreSubmitted(false); if (JThrowable.pending !== null) return;
        this.setLayerManager(gameLayerManager); if (JThrowable.pending !== null) return;
        if (!buffered) {
            let BUFF_MESSAGE: string | null = "XXX Not Buffering Causes Concurrency Issues XXX";
            this.logUtil!.putF(BUFF_MESSAGE, this, this.commonStrings!.CONSTRUCTOR); if (JThrowable.pending !== null) return;
        } else {
            { JThrowable.raise(new JException().jinit_JException_1("Buffering is disabled")); return; }
        } if (JThrowable.pending !== null) return;
        this.setGameInputProcessor(Processor.getInstance()); if (JThrowable.pending !== null) return;
        let features: Features | null = Features.getInstance(); if (JThrowable.pending !== null) return;
        if (features!.isFeature(GameFeatureFactory.getInstance()!.CHEATING)) {
            this.isCheating = true;
            this.cheatProcessor = new CheatGameInputProcessor().jinit_CheatGameInputProcessor_1(this); if (JThrowable.pending !== null) return;
            this.gameKeyEventHandler!.addListener(this.cheatProcessor); if (JThrowable.pending !== null) return;
        } else {
            this.isCheating = false;
            this.cheatProcessor = NoPlayerGameInput.getInstance(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        this.realEndGameProcessor = new EndGameProcessor().jinit_EndGameProcessor_1(this); if (JThrowable.pending !== null) return;
        this.setEndGameProcessor(Processor.getInstance()); if (JThrowable.pending !== null) return;
        this.realStartIntermissionProcessor = new StartIntermissionProcessor().jinit_StartIntermissionProcessor_1(this); if (JThrowable.pending !== null) return;
        this.startIntermissionProcessor = Processor.getInstance(); if (JThrowable.pending !== null) return;
        this.setEndGameStatePaintable(new EndGamePaintable().jinit_EndGamePaintable_1(this)); if (JThrowable.pending !== null) return;
        this.setEndGamePaintable(NullPaintable.getInstance()); if (JThrowable.pending !== null) return;
        this.setIntermissionPaintable(NullPaintable.getInstance()); if (JThrowable.pending !== null) return;
        this.getStartIntermissionInterface()!.setListener(this); if (JThrowable.pending !== null) return;
    }
    

    notifyIntermission(enable: bool): void {
        if (enable) {
            this.startIntermissionProcessor = this.realStartIntermissionProcessor;
        } else {
            this.startIntermissionProcessor = Processor.getInstance(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        if (enable) {
            this.setIntermissionPaintable(this.getStartIntermissionPaintable()); if (JThrowable.pending !== null) return;
        } else {
            this.setIntermissionPaintable(NullPaintable.getInstance()); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    mediaInit(): void {
        ForcedLogUtil.log(this.commonStrings!.NOT_IMPLEMENTED, this); if (JThrowable.pending !== null) return;
    }
    

    initConfigurable(abeClientInformation: AbeClientInformationInterface | null): void {
        let progressCanvas: ProgressCanvas | null = ProgressCanvasFactory.getInstance(); if (JThrowable.pending !== null) return;
        progressCanvas!.addNormalPortion(50, "Setting Configurables"); if (JThrowable.pending !== null) return;
        GameInitializationUtil.getInstance()!.initGame(abeClientInformation, this, this.gameInitializationInterfaceFactoryInterface); if (JThrowable.pending !== null) return;
        let gameFeatureFactory: GameFeatureFactory | null = GameFeatureFactory.getInstance(); if (JThrowable.pending !== null) return;
        let changedGameFeatureListener: ChangedGameFeatureListener | null = ChangedGameFeatureListener.getInstance(); if (JThrowable.pending !== null) return;
        if (changedGameFeatureListener!.isChangedFeature(gameFeatureFactory!.SOUND)) {
            let features: Features | null = Features.getInstance(); if (JThrowable.pending !== null) return;
            this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append("Sound Changing To: ")!.appendboolean(features!.isFeature(gameFeatureFactory!.SOUND))), this, "initConfigurable"); if (JThrowable.pending !== null) return;
            this.mediaInit(); if (JThrowable.pending !== null) return;
            changedGameFeatureListener!.remove(gameFeatureFactory!.SOUND); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        let sensorFeatureFactory: SensorFeatureFactory | null = SensorFeatureFactory.getInstance(); if (JThrowable.pending !== null) return;
        if (changedGameFeatureListener!.isChangedFeature(sensorFeatureFactory!.ORIENTATION_SENSORS) || changedGameFeatureListener!.isChangedFeature(sensorFeatureFactory!.NO_ORIENTATION) || changedGameFeatureListener!.isChangedFeature(sensorFeatureFactory!.SIMULATED_ORIENTATION_SENSORS)) {
            changedGameFeatureListener!.remove(sensorFeatureFactory!.NO_ORIENTATION); if (JThrowable.pending !== null) return;
            changedGameFeatureListener!.remove(sensorFeatureFactory!.ORIENTATION_SENSORS); if (JThrowable.pending !== null) return;
            changedGameFeatureListener!.remove(sensorFeatureFactory!.SIMULATED_ORIENTATION_SENSORS); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        let resourceLoadingLevelFactory: ResourceLoadingLevelFactory | null = ResourceLoadingLevelFactory.getInstance(); if (JThrowable.pending !== null) return;
        this.loadResourceLoadingLevel(resourceLoadingLevelFactory!.LOAD_GAME); if (JThrowable.pending !== null) return;
    }
    

    initApp(abeClientInformation: AbeClientInformationInterface | null): void {
        this.initConfigurable(abeClientInformation); if (JThrowable.pending !== null) return;
        this.processorInit(); if (JThrowable.pending !== null) return;
        this.sensorGameUpdateProcessor!.process(this.gameLayerManager); if (JThrowable.pending !== null) return;
        this.sensorGameUpdateProcessor!.sendNotifications(this.gameLayerManager); if (JThrowable.pending !== null) return;
        this.initTouch(); if (JThrowable.pending !== null) return;
    }
    

    initTouch(): void {
        let gameInitializedEvent: GameInitializedEvent | null = GameInitializationUtil.getInstance()!.EVENT; if (JThrowable.pending !== null) return;
        let resourceLoadingLevelFactory: ResourceLoadingLevelFactory | null = ResourceLoadingLevelFactory.getInstance(); if (JThrowable.pending !== null) return;
        gameInitializedEvent!.setResourceLoadingLevel(resourceLoadingLevelFactory!.LOAD_TOUCH); if (JThrowable.pending !== null) return;
        GameInitializedEventHandler.getInstance()!.fireEvent(gameInitializedEvent); if (JThrowable.pending !== null) return;
        this.touchButtonFactory!.defaultList(); if (JThrowable.pending !== null) return;
        this.updateTouch(); if (JThrowable.pending !== null) return;
        this.postInitTouch(); if (JThrowable.pending !== null) return;
    }
    

    updateCurrentTouchInputFactory(nextTouchInput: BaseTouchInput | null): void {
        if (nextTouchInput != this.currentTouchInputFactory) {
            this.currentTouchInputFactory = nextTouchInput;
            PreLogUtil.put(JObject.jtoString(this.currentTouchInputFactory), this, this.gameInputStrings!.UDPATE_CURRENT_TOUCH_INPUT_FACTORY); if (JThrowable.pending !== null) return;
            this.touchButtonFactory!.toggle(this.isPaused(), this.currentTouchInputFactory!.getList()); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    updateTouch(): void {
        this.gameBehavior!.updateTouch(this); if (JThrowable.pending !== null) return;
    }
    

    updateTouch2(): void {
        let features: Features | null = Features.getInstance(); if (JThrowable.pending !== null) return;
        if (features!.isFeature(this.touchFeatureFactory!.AUTO_HIDE_SHOW_SCREEN_BUTTONS)) {
            if (this.gameLayerManager!.getGameInfo()!.getCurrentLevel() - this.getStartLevel() == 1) {
                this.setTouchPaintableP(NullPaintable.getInstance()); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    postInitTouch(): void {
        this.setTouchButtonsPaintable(TouchButtonsPaintableFactory.getInstance1(this.gameLayerManager!.getForegroundBasicColor())); if (JThrowable.pending !== null) return;
        this.updateScreenButtonPaintable(); if (JThrowable.pending !== null) return;
    }
    

    initCommands(cmdListener: CommandListener | null): void {
        this.removeAllCommands(); if (JThrowable.pending !== null) return;
        this.addCommands(); if (JThrowable.pending !== null) return;
        this.setCommandListener(cmdListener); if (JThrowable.pending !== null) return;
    }
    

    addCommands(): void {
        let gameCommandsFactory: GameCommandsFactory | null = GameCommandsFactory.getInstance(); if (JThrowable.pending !== null) return;
        let myCommandsFactory: MyCommandsFactory | null = MyCommandsFactory.getInstance(); if (JThrowable.pending !== null) return;
        if (DebugFactory.getInstance() != NoDebug.getInstance()) {
            this.addCommand(gameCommandsFactory!.START_TRACE); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        this.addCommand(gameCommandsFactory!.RESTART_COMMAND); if (JThrowable.pending !== null) return;
        this.addCommand(myCommandsFactory!.PAUSE_COMMAND); if (JThrowable.pending !== null) return;
        this.addCommand(gameCommandsFactory!.QUIT_COMMAND); if (JThrowable.pending !== null) return;
        let isOverScan: bool = OperatingSystemFactory.getInstance()!.getOperatingSystemInstance()!.isOverScan(); if (JThrowable.pending !== null) return;
        if (J2MEUtil.isHTML()) {
        } else if (SWTUtil.isSWT) {
        } else if (!isOverScan) {
            if (TouchScreenFactory.getInstance()!.isTouch() && new InGameFeatures().jinit_InGameFeatures_0()!.isAny()) {
                this.addCommand(InGameOptionsForm.DISPLAY); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
            this.addCommand(gameCommandsFactory!.SAVE); if (JThrowable.pending !== null) return;
            this.addCommand(gameCommandsFactory!.DISPLAY_LOAD_FORM); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    itemStateChanged(item: LcduiItem | null): void {
        do {
            let itemLabel: string | null = item!.getLabel(); if (JThrowable.pending !== null) break;
            this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(this.commonLabels!.ITEM_LABEL)!.append(itemLabel)), this, "itemStateChanged"); if (JThrowable.pending !== null) break;
            if ((item instanceof ChoiceGroup)) {
                let gameFeatureUtil: GameFeatureUtil | null = GameFeatureUtil.getInstance(); if (JThrowable.pending !== null) break;
                if (gameFeatureUtil!.isExclusive(itemLabel)) {
                    gameFeatureUtil!.updateExclusiveForChoiceGroup(changetype<ChoiceGroup | null>(item)); if (JThrowable.pending !== null) break;
                } else {
                    gameFeatureUtil!.updateMultiple(changetype<ChoiceGroup | null>(item)); if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            this.sensorGameUpdateProcessor!.process(this.gameLayerManager); if (JThrowable.pending !== null) break;
            this.updateTouch(); if (JThrowable.pending !== null) break;
            this.updateScreenButtonPaintable(); if (JThrowable.pending !== null) break;
            this.sensorGameUpdateProcessor!.sendNotifications(this.gameLayerManager); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "itemStateChanged", e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    updateScreenButtonPaintable(): void {
        this.gameBehavior!.updateScreenButtonPaintable(this); if (JThrowable.pending !== null) return;
    }
    

    updateScreenButtonPaintable2(): void {
        let features: Features | null = Features.getInstance(); if (JThrowable.pending !== null) return;
        if (features!.isFeature(this.touchFeatureFactory!.AUTO_HIDE_SHOW_SCREEN_BUTTONS)) {
            this.setTouchPaintableP(this.getTouchButtonsPaintable()); if (JThrowable.pending !== null) return;
            this.setStartLevel(this.gameLayerManager!.getGameInfo()!.getCurrentLevel()); if (JThrowable.pending !== null) return;
        } else if (features!.isFeature(this.touchFeatureFactory!.SHOW_SCREEN_BUTTONS)) {
            this.setTouchPaintableP(this.getTouchButtonsPaintable()); if (JThrowable.pending !== null) return;
        } else if (features!.isFeature(this.touchFeatureFactory!.HIDE_SCREEN_BUTTONS)) {
            this.setTouchPaintableP(NullPaintable.getInstance()); if (JThrowable.pending !== null) return;
        } else {
            this.setTouchPaintableP(NullPaintable.getInstance()); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    getLayerManager(): AllBinaryGameLayerManager | null {
        return this.gameLayerManager;
    }
    

    setLayerManager(layerManager: AllBinaryGameLayerManager | null): void {
        this.gameLayerManager = layerManager;
    }
    

    isGameOver(): bool {
        return this.gameOver;
    }
    

    setGameOver(gameOver: bool): void {
        this.gameOver = gameOver;
    }
    

    processGameOver(): void {
        PreLogUtil.put(this.commonStrings!.START, this, this.gameStrings!.SET_GAME_OVER); if (JThrowable.pending !== null) return;
        this.setGameOver(true); if (JThrowable.pending !== null) return;
        this.removePauseCommand(); if (JThrowable.pending !== null) return;
        this.setGameState(this.gameStateFactory!.SHOW_END_RESULT_GAME_STATE); if (JThrowable.pending !== null) return;
        this.setEndGamePaintable(this.getEndGameStatePaintable()); if (JThrowable.pending !== null) return;
    }
    

    isHighScoreSubmitted(): bool {
        return this.highScoreSubmitted;
    }
    

    setHighScoreSubmitted(highScoreSubmitted: bool): void {
        this.highScoreSubmitted = highScoreSubmitted;
        if (highScoreSubmitted) {
            this.highScoresHelper!.setSelectedHighScores(NullHighScoresSingletonFactory.getInstance()); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append("isHighScoreSubmitted: ")!.appendboolean(highScoreSubmitted)), this, "setHighScoreSubmitted"); if (JThrowable.pending !== null) return;
    }
    

    getGameState(): GameState | null {
        return this.gameState;
    }
    

    setGameState(gameState: GameState | null): void {
        this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(this.gameStrings!.GAME_STATE)!.append(this.stringUtil!.toString1(gameState))), this, this.gameStrings!.SET_GAME_STATE); if (JThrowable.pending !== null) return;
        this.gameState = gameState;
        this.gameStateTimeHelper!.setStartTimeTNT(); if (JThrowable.pending !== null) return;
        this.updateEndGameProcessor(); if (JThrowable.pending !== null) return;
        this.updateGameKeyEventProcessor(); if (JThrowable.pending !== null) return;
        this.gameBehavior!.setGameState(this); if (JThrowable.pending !== null) return;
    }
    

    updateGameState(): void {
        let gameAdState: GameAdState | null = this.gameAdStateFactory!.getCurrentInstance(); if (JThrowable.pending !== null) return;
        gameAdState!.processAdState(this.gameState, this.gameLayerManager!.getGameInfo()!.getGameType()); if (JThrowable.pending !== null) return;
        if (this.gameState != this.gameStateFactory!.PLAYING_GAME_STATE) {
            gameAdState!.processPageAdState(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    updateGameKeyEventProcessor(): void {
        if (this.getGameState() != this.gameStateFactory!.PLAYING_GAME_STATE || this.isCheating) {
        } else {
        } if (JThrowable.pending !== null) return;
    }
    

    removeAllGameKeyInputListenersOnBuild(): void {
        this.removeAllGameKeyInputListeners(); if (JThrowable.pending !== null) return;
    }
    

    removeAllGameKeyInputListeners(): void {
        this.gameBehavior!.removeAllGameKeyInputListeners(this); if (JThrowable.pending !== null) return;
    }
    

    removeAllGameKeyInputListeners2(): void {
        this.logUtil!.putF("Remove PlayerInput Listeners", this, "removeAllGameKeyInputListeners"); if (JThrowable.pending !== null) return;
        for (let index: i32 = this.localPlayerGameInputList!.size() - 1; index >= 0; index--) {
            let playerGameInput: PlayerGameInput | null = changetype<PlayerGameInput | null>(this.localPlayerGameInputList!.get(index)); if (JThrowable.pending !== null) return;
            this.removeKeyInputListener(playerGameInput); if (JThrowable.pending !== null) return;
            playerGameInput!.removeNonAIInputGameKeyEvents(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    removeKeyInputListener(playerGameInput: PlayerGameInput | null): void {
        this.gameKeyEventHandler!.removeListener(playerGameInput); if (JThrowable.pending !== null) return;
    }
    

    updateEndGameProcessor(): void {
        this.gameBehavior!.updateEndGameProcessor(this); if (JThrowable.pending !== null) return;
    }
    

    updateEndGameProcessor2(): void {
        if (this.getGameState() == this.gameStateFactory!.SHOW_END_RESULT_GAME_STATE || this.getGameState() == this.gameStateFactory!.SHOW_HIGH_SCORE_GAME_STATE) {
            this.setEndGameProcessor(this.realEndGameProcessor); if (JThrowable.pending !== null) return;
        } else {
            this.setEndGameProcessor(Processor.getInstance()); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    buildGameInit(isPortion: bool): void {
    }
    

    cleanupGame(): void {
        this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.CLEANUP); if (JThrowable.pending !== null) return;
        let progressCanvas: ProgressCanvas | null = ProgressCanvasFactory.getInstance(); if (JThrowable.pending !== null) return;
        progressCanvas!.addNormalPortion(10, "Cleaning Up"); if (JThrowable.pending !== null) return;
        this.primaryPlayerQueue!.clear(); if (JThrowable.pending !== null) return;
        this.secondaryPlayerQueue!.clear(); if (JThrowable.pending !== null) return;
        GameLevelDisplayChangeEventListenersFactory.getInstance()!.clear(); if (JThrowable.pending !== null) return;
    }
    

    loadResourceLoadingLevel(resourceLoadingLevel: ResourceLoadingLevel | null): void {
        let gameInitializedEvent: GameInitializedEvent | null = GameInitializationUtil.getInstance()!.EVENT; if (JThrowable.pending !== null) return;
        gameInitializedEvent!.setResourceLoadingLevel(resourceLoadingLevel); if (JThrowable.pending !== null) return;
        GameInitializedEventHandler.getInstance()!.fireEvent(gameInitializedEvent); if (JThrowable.pending !== null) return;
    }
    

    loadResources(level: i32): void {
        let gameInitializedEvent: GameInitializedEvent | null = GameInitializationUtil.getInstance()!.EVENT; if (JThrowable.pending !== null) return;
        gameInitializedEvent!.setLevel(level); if (JThrowable.pending !== null) return;
        GameInitializedEventHandler.getInstance()!.fireEvent(gameInitializedEvent); if (JThrowable.pending !== null) return;
    }
    

    updateColor(): void {
    }
    

    buildGame(portion: i32): void {
        this.screenCapture!.endRecording(); if (JThrowable.pending !== null) return;
        this.screenCapture!.startRecording(); if (JThrowable.pending !== null) return;
        let progressCanvas: ProgressCanvas | null = ProgressCanvasFactory.getInstance(); if (JThrowable.pending !== null) return;
        let features: Features | null = Features.getInstance(); if (JThrowable.pending !== null) return;
        progressCanvas!.addNormalPortion(portion, "Generic Build"); if (JThrowable.pending !== null) return;
        this.removeAllGameKeyInputListenersOnBuild(); if (JThrowable.pending !== null) return;
        this.updateTouch(); if (JThrowable.pending !== null) return;
        progressCanvas!.addNormalPortion(portion, "High Scores"); if (JThrowable.pending !== null) return;
        this.highScoresFactoryInterface!.fetchHighScores(this.gameLayerManager!.getGameInfo(), this.highScoresHelper); if (JThrowable.pending !== null) return;
        this.setHighScoresPaintable(NullPaintable.getInstance()); if (JThrowable.pending !== null) return;
        progressCanvas!.addNormalPortion(portion, "Finishing."); if (JThrowable.pending !== null) return;
        this.getEndGameInfoP()!.update(this.getLayerManager()!.getGameInfo(), this); if (JThrowable.pending !== null) return;
        this.isSingleKeyRepeatableProcessing = features!.isFeature(InputFeatureFactory.getInstance()!.SINGLE_KEY_REPEAT_PRESS); if (JThrowable.pending !== null) return;
        this.setGameOver(false); if (JThrowable.pending !== null) return;
        progressCanvas!.addNormalPortion(portion, "Finishing.."); if (JThrowable.pending !== null) return;
        this.updateColor(); if (JThrowable.pending !== null) return;
        this.getStartIntermissionPaintable()!.update(); if (JThrowable.pending !== null) return;
        if (!this.isRunningInAnotherThread()) {
            return;
        } if (JThrowable.pending !== null) return;
        progressCanvas!.addNormalPortion(portion, "Finishing..."); if (JThrowable.pending !== null) return;
        if (this.isMainCanvas() || !this.isInitialized()) {
            if (features!.isFeature(MainFeatureFactory.getInstance()!.LOAD_ONDEMAND)) {
                if (this.getCustomCommandListener() != null) {
                    progressCanvas!.end(); if (JThrowable.pending !== null) return;
                } if (JThrowable.pending !== null) return;
            } else {
                progressCanvas!.end(); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
            this.setInitialized(true); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        if (this.getCustomCommandListener() == NullCommandListener.NULL_COMMAND_LISTENER) {
            this.logUtil!.putF("Show Game Paintable in DemoCanvas Thread", this, this.BUILD_GAME); if (JThrowable.pending !== null) return;
            this.gameCanvasStartListener!.showGamePaintable(); if (JThrowable.pending !== null) return;
        } else {
            this.logUtil!.putF("No GameCanvasStartListener", this, this.BUILD_GAME); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        this.colorFillPaintable!.setBasicColorP(this.gameLayerManager!.getBackgroundBasicColor()); if (JThrowable.pending !== null) return;
        this.gameBehavior!.buildGame(this); if (JThrowable.pending !== null) return;
    }
    

    buildGame2(): void {
        PreLogUtil.put(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(this.gameInputStrings!.ENABLE_PLAYER_GAME_INPUTS)!.appendint(this.localPlayerGameInputList!.size())), this, this.BUILD_GAME); if (JThrowable.pending !== null) return;
        let playerGameInput: PlayerGameInput | null = null;
        for (let index: i32 = this.localPlayerGameInputList!.size() - 1; index >= 0; index--) {
            playerGameInput = changetype<PlayerGameInput | null>(this.localPlayerGameInputList!.get(index)); if (JThrowable.pending !== null) return;
            PreLogUtil.put(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(this.gameInputStrings!.ENABLE_PLAYER_GAME_INPUT)!.append(JObject.jtoString(playerGameInput))), this, this.BUILD_GAME); if (JThrowable.pending !== null) return;
            playerGameInput!.removeNonAIInputGameKeyEvents(); if (JThrowable.pending !== null) return;
            this.addKeyInputListener(playerGameInput); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    addKeyInputListener(playerGameInput: PlayerGameInput | null): void {
        GameKeyEventHandler.getInstance()!.addListenerForPlayer(playerGameInput, playerGameInput!.getPlayerInputId()); if (JThrowable.pending !== null) return;
    }
    

    setGameCanvasStartListener(gameCanvasStartListener: DemoPaintableInterface | null): void {
        this.gameCanvasStartListener = gameCanvasStartListener;
    }
    

    loadState(): void {
        this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.LOAD); if (JThrowable.pending !== null) return;
        let hashtable: ABHashtable | null = this.getLoadStateHashtable(); if (JThrowable.pending !== null) return;
        if (hashtable != null && hashtable!.size() > 0) {
            let levelAsString: string | null = changetype<string | null>(hashtable!.get(changetype<Object | null>(GameInfo.LEVEL_NAME))); if (JThrowable.pending !== null) return;
            let level: i32 = JInteger.valueOf1(levelAsString)!.intValue(); if (JThrowable.pending !== null) return;
            let gameInfo: GameInfo | null = this.gameLayerManager!.getGameInfo(); if (JThrowable.pending !== null) return;
            gameInfo!.setCurrentLevel(level); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    getLoadStateHashtable(): ABHashtable | null {
        this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(this.commonLabels!.START_LABEL)!.append(this.stringUtil!.toString1(this.hashtable))), this, "getLoadStateHashtable"); if (JThrowable.pending !== null) return null;
        return this.hashtable;
    }
    

    setLoadStateHashtable(hashtable: ABHashtable | null): void {
        this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(this.commonLabels!.START_LABEL)!.append(this.stringUtil!.toString1(hashtable))), this, "setLoadStateHashtable"); if (JThrowable.pending !== null) return;
        this.hashtable = hashtable;
    }
    

    getCurrentStateHashtable(): ABHashtable | null {
        let hashtable: ABHashtable | null = this.stdUtil!.createHashtable(); if (JThrowable.pending !== null) return null;
        let level: i32 = this.gameLayerManager!.getGameInfo()!.getCurrentLevel(); if (JThrowable.pending !== null) return null;
        hashtable!.put(JString.toString0(GameInfo.LEVEL_NAME), JInteger.toString1(level)); if (JThrowable.pending !== null) return null;
        this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append("End: ")!.append(this.stringUtil!.toString1(hashtable))), this, "getCurrentStateHashtable"); if (JThrowable.pending !== null) return null;
        return hashtable;
    }
    

    paintGameOver(graphics: Graphics | null): void {
        ForcedLogUtil.log(this.commonStrings!.NOT_IMPLEMENTED, this); if (JThrowable.pending !== null) return;
    }
    

    draw(graphics: Graphics | null): void {
        this.colorFillPaintable!.paint(graphics); if (JThrowable.pending !== null) return;
        this.basicSetColorUtil!.setBasicColorP(graphics, this.gameLayerManager!.getForegroundBasicColor()); if (JThrowable.pending !== null) return;
        this.gameSpecificPaintable!.paint(graphics); if (JThrowable.pending !== null) return;
    }
    

    clear(graphics: Graphics | null): void {
        this.colorFillPaintable!.paint(graphics); if (JThrowable.pending !== null) return;
    }
    

    paint(graphics: Graphics | null): void {
        this.myFontProcessor!.process(graphics); if (JThrowable.pending !== null) return;
        this.baseGameStatistics!.nextRefresh(); if (JThrowable.pending !== null) return;
        this.draw(graphics); if (JThrowable.pending !== null) return;
        this.menuPaintable!.paint(graphics); if (JThrowable.pending !== null) return;
        this.progressPaintable!.paint(graphics); if (JThrowable.pending !== null) return;
    }
    

    paintThreed(graphics: Graphics | null): void {
    }
    

    processEndLevelIntermissionGameState(): void {
    }
    

    nonBotPaint(graphics: Graphics | null): void {
        this.endGamePaintable!.paint(graphics); if (JThrowable.pending !== null) return;
        this.intermissionPaintable!.paint(graphics); if (JThrowable.pending !== null) return;
        this.paintIntermission(graphics); if (JThrowable.pending !== null) return;
        this.touchPaintable!.paint(graphics); if (JThrowable.pending !== null) return;
    }
    

    paintIntermission(graphics: Graphics | null): void {
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
        this.inputProcessor!.keyPressedByDevice(keyCode, deviceId); if (JThrowable.pending !== null) return;
    }
    

    keyRepeatedByDevice(keyCode: i32, deviceId: i32): void {
        if (this.isSingleKeyRepeatableProcessing) {
            this.inputProcessor!.keyPressedByDevice(keyCode, deviceId); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    keyReleasedByDevice(keyCode: i32, deviceId: i32): void {
        this.inputProcessor!.keyReleasedByDevice(this, keyCode, deviceId); if (JThrowable.pending !== null) return;
    }
    

    handleRawKey(keyCode: i32, deviceId: i32, repeated: bool): void {
    }
    

    endProgress(isProgress: bool): i32 {
        let portion: i32 = 30;
        if (isProgress && this.isMainCanvas()) {
            let myCommandsFactory: MyCommandsFactory | null = MyCommandsFactory.getInstance(); if (JThrowable.pending !== null) return 0;
            let progressCanvas: ProgressCanvas | null = ProgressCanvasFactory.getInstance(); if (JThrowable.pending !== null) return 0;
            progressCanvas!.start(); if (JThrowable.pending !== null) return 0;
            this.getCustomCommandListener()!.commandAction(myCommandsFactory!.SET_DISPLAYABLE, progressCanvas); if (JThrowable.pending !== null) return 0;
            portion = 4;
        } if (JThrowable.pending !== null) return 0;
        return portion;
    }
    

    processPlayingGame(): void {
        this.cheatProcessor!.update(); if (JThrowable.pending !== null) return;
        this.sensorGameUpdateProcessor!.getInputSensor()!.update(); if (JThrowable.pending !== null) return;
        this.gameInputProcessor!.process(); if (JThrowable.pending !== null) return;
        this.gameLayerManager!.process(); if (JThrowable.pending !== null) return;
        this.startIntermissionProcessor!.process(); if (JThrowable.pending !== null) return;
    }
    

    threadInit(): void {
    }
    

    processGame(): void {
        super.process(); if (JThrowable.pending !== null) return;
        if (AllBinaryMediaManager.update()) {
            if (!this.primaryPlayerQueue!.process()) {
                this.secondaryPlayerQueue!.process(); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        this.mainStateProcessor!.process(); if (JThrowable.pending !== null) return;
        this.menuInputProcessor!.processInputList(); if (JThrowable.pending !== null) return;
        this.endGameProcessor!.process(); if (JThrowable.pending !== null) return;
        this.baseGameStatistics!.nextFrame(); if (JThrowable.pending !== null) return;
    }
    

    notifyDonePainting(): void {
        {
            this.threadObjectUtil!.notifyObject(this); if (JThrowable.pending !== null) return;
        }
    }
    

    shouldWait(): void {
        let features: Features | null = Features.getInstance(); if (JThrowable.pending !== null) return;
        if (AndroidUtil.isAndroid()) {
        } else if (features!.isFeature(this.openGLFeatureFactory!.OPENGL_2D)) {
        } else {
            if (features!.isDefault(this.openGLFeatureFactory!.OPENGL)) {
                let openGLImageSpecificFactory: OpenGLImageSpecificFactory | null = OpenGLImageSpecificFactory.getInstance(); if (JThrowable.pending !== null) return;
                while (openGLImageSpecificFactory!.updating) {
                    JThread.sleep(this.YIELD_SLEEP); if (JThrowable.pending !== null) return;
                } if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    run(): void {
        do {
            this.logUtil!.putF(this.commonStrings!.START_RUNNABLE, this, this.commonStrings!.RUN); if (JThrowable.pending !== null) break;
            let progressCanvas: ProgressCanvas | null = ProgressCanvasFactory.getInstance(); if (JThrowable.pending !== null) break;
            progressCanvas!.addNormalPortion(50, "Game Thread"); if (JThrowable.pending !== null) break;
            this.setCurrentThread(); if (JThrowable.pending !== null) break;
            this.setRunning(true); if (JThrowable.pending !== null) break;
            if (this.getCustomCommandListener() == NullCommandListener.NULL_COMMAND_LISTENER) {
                JThread.sleep(this.YIELD_SLEEP); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            this.shouldWait(); if (JThrowable.pending !== null) break;
            this.threadInit(); if (JThrowable.pending !== null) break;
            if (this.getCustomCommandListener() == NullCommandListener.NULL_COMMAND_LISTENER) {
                JThread.sleep(this.YIELD_SLEEP); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            this.open(); if (JThrowable.pending !== null) break;
            let gameAdState: GameAdState | null = this.gameAdStateFactory!.getCurrentInstance(); if (JThrowable.pending !== null) break;
            gameAdState!.init(); if (JThrowable.pending !== null) break;
            gameAdState!.setGameIsReady(true); if (JThrowable.pending !== null) break;
            this.gameBehavior!.run(this); if (JThrowable.pending !== null) break;
            this.logUtil!.putF(this.commonStrings!.END_RUNNABLE, this, this.commonStrings!.RUN); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.RUN, e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    run2(): void {
        let features: Features | null = Features.getInstance(); if (JThrowable.pending !== null) return;
        if (features!.isDefault(this.openGLFeatureFactory!.OPENGL_AS_GAME_THREAD) || J2MEUtil.isHTML()) {
            if (features!.isDefault(this.openGLFeatureFactory!.OPENGL_AS_GAME_THREAD)) {
                this.logUtil!.putF(this.openGLFeatureFactory!.OPENGL_AS_GAME_THREAD!.getName(), this, this.commonStrings!.RUN); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
            if (J2MEUtil.isHTML()) {
                this.logUtil!.putF(GraphicsStrings.getInstance()!.HTML, this, this.commonStrings!.RUN); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
            let currentDisplayableFactory: CurrentDisplayableFactory | null = CurrentDisplayableFactory.getInstance(); if (JThrowable.pending !== null) return;
            currentDisplayableFactory!.setRunnable(this.gameRunnable); if (JThrowable.pending !== null) return;
            currentDisplayableFactory!.setDisplayable(this); if (JThrowable.pending !== null) return;
            OpenGLThreadUtil.getInstance()!.onResume(); if (JThrowable.pending !== null) return;
        } else if (features!.isDefault(this.openGLFeatureFactory!.OPENGL_AND_GAME_HAVE_DIFFERENT_THREADS)) {
            this.logUtil!.putF(this.openGLFeatureFactory!.OPENGL_AND_GAME_HAVE_DIFFERENT_THREADS!.getName(), this, this.commonStrings!.RUN); if (JThrowable.pending !== null) return;
            OpenGLThreadUtil.getInstance()!.onResume(); if (JThrowable.pending !== null) return;
            while (this.isRunning()) {
                this.run3(); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
            this.end(); if (JThrowable.pending !== null) return;
        } else {
            this.logUtil!.putF("this thread", this, this.commonStrings!.RUN); if (JThrowable.pending !== null) return;
            while (this.isRunning()) {
                this.run3(); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
            this.end(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    run3(): void {
        this.loopTimeHelper!.setStartTime(this.gameTickTimeDelayHelper!.setStartTime()); if (JThrowable.pending !== null) return;
        this.gameTickDisplayInfoSingleton!.update(); if (JThrowable.pending !== null) return;
        this.processGame(); if (JThrowable.pending !== null) return;
        this.processLoopSleep(); if (JThrowable.pending !== null) return;
    }
    

    setRunning(running: bool): void {
        super.setRunning(running); if (JThrowable.pending !== null) return;
        do {
            let features: Features | null = Features.getInstance(); if (JThrowable.pending !== null) break;
            if (running) {
            } else {
                if (features!.isDefault(this.openGLFeatureFactory!.OPENGL) || SWTUtil.isSWT) {
                    if (this.gameLayerManager!.getGameInfo()!.getGameType() != this.gameTypeFactory!.BOT) {
                        let currentDisplayableFactory: CurrentDisplayableFactory | null = CurrentDisplayableFactory.getInstance(); if (JThrowable.pending !== null) break;
                        currentDisplayableFactory!.clearRunnable(); if (JThrowable.pending !== null) break;
                    } if (JThrowable.pending !== null) break;
                    this.end(); if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.SET_RUNNING, e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    end(): void {
        this.screenCapture!.endRecording(); if (JThrowable.pending !== null) return;
        this.baseGameStatistics!.add(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(JObject.jtoString(this.baseGameStatistics))!.append(CommonSeps.getInstance()!.NEW_LINE))); if (JThrowable.pending !== null) return;
        this.baseGameStatistics!.init(); if (JThrowable.pending !== null) return;
        this.gameKeyEventHandler!.removeListener(this.cheatProcessor); if (JThrowable.pending !== null) return;
        this.close(); if (JThrowable.pending !== null) return;
        this.removeAllGameKeyInputListeners(); if (JThrowable.pending !== null) return;
        this.endGameThread(); if (JThrowable.pending !== null) return;
    }
    

    endGameThread(): void {
        DisplayChangeEventHandler.getInstance()!.removeListener(this); if (JThrowable.pending !== null) return;
        GameLevelDisplayChangeEventListenersFactory.getInstance()!.clear(); if (JThrowable.pending !== null) return;
        let gameAdState: GameAdState | null = this.gameAdStateFactory!.getCurrentInstance(); if (JThrowable.pending !== null) return;
        gameAdState!.notPlayingAdState(); if (JThrowable.pending !== null) return;
    }
    

    createHighScore(score: i64): HighScore | null {
        let gameInfo: GameInfo | null = this.gameLayerManager!.getGameInfo(); if (JThrowable.pending !== null) return null;
        return new HighScore().jinit_HighScore_4(0, "NONE", new GameInfo().jinit_GameInfo_5(gameInfo!.getGameType(), gameInfo!.getGameMode(), PlayerTypesFactory.getInstance()!.PLAYER_TYPE_ONE, 0, 0), score);
    }
    

    setHighScore(abeClientInformation: AbeClientInformationInterface | null, name: string | null, score: i64, autoSubmit: bool, isLast: bool): void {
        this.gameBehavior!.setHighScore(abeClientInformation, this, name, score, autoSubmit, isLast); if (JThrowable.pending !== null) return;
    }
    

    setHighScore2(abeClientInformation: AbeClientInformationInterface | null, name: string | null, score: i64, autoSubmit: bool, isLast: bool): void {
        let highScore: HighScore | null = this.createHighScore(score); if (JThrowable.pending !== null) return;
        let textBox: HighScoreTextBox | null = new HighScoreTextBox().jinit_HighScoreTextBox_9(this.highScoresFactoryInterface, this.highScoresHelper, abeClientInformation, this.gameLayerManager!.getGameInfo(), this.getCustomCommandListener(), name, highScore, this.gameLayerManager!.getBackgroundBasicColor(), this.gameLayerManager!.getForegroundBasicColor()); if (JThrowable.pending !== null) return;
        if (isLast) {
            this.getCustomCommandListener()!.commandAction(GameCommandsFactory.getInstance()!.SET_MENU_DISPLAYABLE, textBox); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        if (autoSubmit) {
            SecondaryThreadPool.getInstance()!.runTask(new SaveHighScoreRunnable().jinit_SaveHighScoreRunnable_2(isLast, textBox)); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    getGameStateTimeHelper(): TimeDelayHelper | null {
        return this.gameStateTimeHelper;
    }
    

    setInitialized(initialized: bool): void {
        this.initialized = initialized;
    }
    

    isInitialized(): bool {
        return this.initialized;
    }
    

    getSourceId(): i32 {
        return AllBinaryGameCanvas.id;
    }
    

    setProgressPaintable(paintable: PaintableInterface | null): void {
        this.progressPaintable = paintable;
    }
    

    getStartIntermissionInterface(): IntermissionInterface | null {
        return this.startIntermissionInterface;
    }
    

    getEndLevelIntermissionInterface(): IntermissionInterface | null {
        return this.endLevelIntermissionInterface;
    }
    

    setTouchPaintableP(paintable: Paintable | null): void {
        this.touchPaintable = paintable;
    }
    

    getTouchPaintableP(): Paintable | null {
        return this.touchPaintable;
    }
    

    setEndGamePaintable(endGamePaintable: Paintable | null): void {
        this.endGamePaintable = endGamePaintable;
    }
    

    getEndGamePaintable(): Paintable | null {
        return this.endGamePaintable;
    }
    

    setIntermissionPaintable(intermissionPaintable: Paintable | null): void {
        this.intermissionPaintable = intermissionPaintable;
    }
    

    getIntermissionPaintable(): Paintable | null {
        return this.intermissionPaintable;
    }
    

    getEndGameInfoP(): EndGameInfo | null {
        return this.endGameInfo;
    }
    

    setHighScoresPaintable(highScoresPaintable: Paintable | null): void {
        this.highScoresPaintable = highScoresPaintable;
    }
    

    getHighScoresPaintable(): Paintable | null {
        return this.highScoresPaintable;
    }
    

    getRealHighScoresPaintable(): HighScoresPaintable | null {
        return this.realHighScoresPaintable;
    }
    

    clearPlayerGameInputList(): void {
        let playerGameInput: PlayerGameInput | null = null;
        for (let index: i32 = this.localPlayerGameInputList!.size() - 1; index >= 0; index--) {
            playerGameInput = changetype<PlayerGameInput | null>(this.localPlayerGameInputList!.get(index)); if (JThrowable.pending !== null) return;
            this.gameKeyEventHandler!.removeListener(playerGameInput); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        this.localPlayerGameInputList!.clear(); if (JThrowable.pending !== null) return;
    }
    

    addPlayerGameInput(playerGameInput: PlayerGameInput | null): void {
        this.localPlayerGameInputList!.add(playerGameInput); if (JThrowable.pending !== null) return;
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
    

    getStartLevel(): i32 {
        return this.startLevel;
    }
    

    setStartLevel(startLevel: i32): void {
        this.startLevel = startLevel;
    }
    

    setTouchButtonsPaintable(touchButtonsPaintable: Paintable | null): void {
        this.touchButtonsPaintable = touchButtonsPaintable;
    }
    

    getTouchButtonsPaintable(): Paintable | null {
        return this.touchButtonsPaintable;
    }
    

    setGameInputProcessor(gameInputProcessor: Processor | null): void {
        this.gameInputProcessor = gameInputProcessor;
    }
    

    getGameInputProcessor(): Processor | null {
        return this.gameInputProcessor;
    }
    

    setEndGameProcessor(endGameProcessor: Processor | null): void {
        this.endGameProcessor = endGameProcessor;
    }
    

    getEndGameProcessor(): Processor | null {
        return this.endGameProcessor;
    }
    

    setEndGameStatePaintable(endGameStatePaintable: Paintable | null): void {
        this.endGameStatePaintable = endGameStatePaintable;
    }
    

    getEndGameStatePaintable(): Paintable | null {
        return this.endGameStatePaintable;
    }
    

    setNonBotPaintableP(nonBotPaintable: Paintable | null): void {
        this.nonBotPaintable = nonBotPaintable;
    }
    

    getNonBotPaintableP(): Paintable | null {
        return this.nonBotPaintable;
    }
    

    setStartIntermissionPaintable(startIntermissionPaintable: InitUpdatePaintable | null): void {
        this.startIntermissionPaintable = startIntermissionPaintable;
    }
    

    getStartIntermissionPaintable(): InitUpdatePaintable | null {
        return this.startIntermissionPaintable;
    }
    

    setMainStateProcessor(mainStateProcessor: Processor | null): void {
        this.mainStateProcessor = mainStateProcessor;
    }
    

    getMainStateProcessor(): Processor | null {
        return this.mainStateProcessor;
    }
    

    setProcessGameProcessor(processGameProcessor: Processor | null): void {
        this.processGameProcessor = processGameProcessor;
    }
    

    getProcessGameProcessor(): Processor | null {
        return this.processGameProcessor;
    }
    

    setOpenMenuPaintable(openMenuPaintable: Paintable | null): void {
        this.openMenuPaintable = openMenuPaintable;
    }
    

    getOpenMenuPaintable(): Paintable | null {
        return this.openMenuPaintable;
    }
    

    setPopupMenuInputProcessor(popupMenuInputProcessor: BasicMenuInputProcessor | null): void {
        this.popupMenuInputProcessor = popupMenuInputProcessor;
    }
    

    getPopupMenuInputProcessor(): BasicMenuInputProcessor | null {
        return this.popupMenuInputProcessor;
    }
    

    getSensorGameUpdateProcessor(): SensorGameUpdateProcessor | null {
        return this.sensorGameUpdateProcessor;
    }
    

    getRawGameInputProcessor(): InputProcessor | null {
        return this.rawGameInputProcessor;
    }
    

    getRawInputProcessor(): InputProcessor | null {
        return this.rawInputProcessor;
    }
    

    setInputProcessor(inputProcessor: InputProcessor | null): void {
        this.inputProcessor = inputProcessor;
    }
    

    getInputProcessor(): InputProcessor | null {
        return this.inputProcessor;
    }
    

    setMenuPaintable(menuPaintable: Paintable | null): void {
        this.menuPaintable = menuPaintable;
    }
    

    getMenuPaintable(): Paintable | null {
        return this.menuPaintable;
    }
    

    setFormPaintable(formPaintable: Paintable | null): void {
        this.formPaintable = formPaintable;
    }
    

    getFormPaintable(): Paintable | null {
        return this.formPaintable;
    }
    

    setGameSpecificPaintableP(gameSpecificPaintable: Paintable | null): void {
        this.gameSpecificPaintable = gameSpecificPaintable;
    }
    

    getGameSpecificPaintableP(): Paintable | null {
        return this.gameSpecificPaintable;
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
    

    getType(): i32 {
        return AllBinaryGameCanvas.TYPE;
    }
    

    getTitle(): string | null {
        return super.getTitle();
    }
    

    isPaused(): bool {
        return super.isPaused();
    }
}

