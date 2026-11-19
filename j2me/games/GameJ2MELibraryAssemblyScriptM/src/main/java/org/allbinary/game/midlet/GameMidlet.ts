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
// package org.allbinary.game.midlet
// import java.util.Enumeration
// import javax.microedition.lcdui.Canvas
// import javax.microedition.lcdui.Command
// import javax.microedition.lcdui.CommandListener
// import javax.microedition.lcdui.Displayable
// import javax.microedition.lcdui.NullCanvas
// import javax.microedition.midlet.MIDletStateChangeException
// import org.allbinary.J2MEUtil
// import org.allbinary.TsUtil
// import org.allbinary.business.advertisement.GameAdStateFactory
// import org.allbinary.canvas.FullScreenUtil
// import org.allbinary.canvas.GameStatisticsFactory
// import org.allbinary.debug.DebugFactory
// import org.allbinary.debug.DebugInterface
// import org.allbinary.game.GameAdState
// import org.allbinary.game.GameInfo
// import org.allbinary.game.GameMode
// import org.allbinary.game.GameStrings
// import org.allbinary.game.GameTypeFactory
// import org.allbinary.game.PlayerTypesFactory
// import org.allbinary.game.commands.GameCommandsFactory
// import org.allbinary.game.configuration.GameOptionsForm
// import org.allbinary.game.configuration.GameOptionsFormFactory
// import org.allbinary.game.configuration.InGameFeatures
// import org.allbinary.game.configuration.InGameOptionsForm
// import org.allbinary.game.configuration.InGameOptionsFormFactory
// import org.allbinary.game.configuration.LoadGameForm
// import org.allbinary.game.configuration.event.ChangedGameFeatureListener
// import org.allbinary.game.configuration.event.GameFeatureEventHandler
// import org.allbinary.game.configuration.feature.Features
// import org.allbinary.game.configuration.feature.GameFeatureFormUtil
// import org.allbinary.game.configuration.feature.MainFeatureFactory
// import org.allbinary.game.configuration.persistance.GamePersistanceSingleton
// import org.allbinary.game.configuration.persistance.KeyValuePersistance
// import org.allbinary.game.displayable.canvas.AllBinaryGameCanvas
// import org.allbinary.game.displayable.canvas.BasicPaintablesCanvas
// import org.allbinary.game.displayable.canvas.DemoCanvas
// import org.allbinary.game.displayable.canvas.GameCanvasRunnableInterface
// import org.allbinary.game.displayable.canvas.GameEventHandlerUtil
// import org.allbinary.game.displayable.canvas.GameInputMappingCanvas
// import org.allbinary.game.displayable.canvas.GameInputMappingInstructionsCanvas
// import org.allbinary.game.displayable.canvas.MenuListener
// import org.allbinary.game.displayable.canvas.NullGameCanvasRunnable
// import org.allbinary.game.input.TextNotificationUtil
// import org.allbinary.game.layer.AllBinaryGameLayerManager
// import org.allbinary.game.layer.hud.event.GameNotificationEventHandler
// import org.allbinary.game.paint.help.HelpPaintable
// import org.allbinary.game.score.HighScoreCommands
// import org.allbinary.game.score.HighScoreCommandsFactory
// import org.allbinary.game.score.displayable.HighScoreTextBox
// import org.allbinary.game.score.displayable.HighScoreUtil
// import org.allbinary.game.score.displayable.HighScoresCanvas
// import org.allbinary.game.state.GameStateFactory
// import org.allbinary.graphics.ResizableListenerHandler
// import org.allbinary.graphics.canvas.transition.progress.ProgressCanvas
// import org.allbinary.graphics.canvas.transition.progress.ProgressCanvasFactory
// import org.allbinary.graphics.color.BasicColorFactory
// import org.allbinary.graphics.color.ColorChangeEventHandler
// import org.allbinary.graphics.displayable.CanvasStrings
// import org.allbinary.graphics.displayable.MyCanvas
// import org.allbinary.graphics.displayable.command.MyCommandsFactory
// import org.allbinary.graphics.displayable.screen.AboutCommandProcessor
// import org.allbinary.graphics.displayable.screen.AboutPaintableFactory
// import org.allbinary.graphics.displayable.screen.CommandForm
// import org.allbinary.graphics.displayable.screen.WebCommandProcessor
// import org.allbinary.input.AllBinarySensorManager
// import org.allbinary.input.event.VirtualKeyboardEventHandler
// import org.allbinary.input.motion.gesture.observer.BasicMotionGesturesHandler
// import org.allbinary.logic.communication.log.ForcedLogUtil
// import org.allbinary.logic.communication.log.PreLogUtil
// import org.allbinary.logic.math.SmallIntegerSingletonFactory
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.system.security.licensing.ClientInformationFactory
// import org.allbinary.logic.system.security.licensing.InApplicationPurchaseFactory
// import org.allbinary.logic.system.security.licensing.LockableFeature
// import org.allbinary.logic.system.security.licensing.LockableFeatureFactory
// import org.allbinary.logic.util.event.AllBinaryEventObject
// import org.allbinary.logic.util.event.EventStrings
// import org.allbinary.media.audio.AllBinaryMediaManager
// import org.allbinary.midlet.MidletStrings
// import org.allbinary.midlet.ProgressMidlet
// import org.allbinary.thread.NullThread
// import org.allbinary.thread.ThreadFactoryUtil
// import org.allbinary.thread.ThreadUtil
// import org.allbinary.time.TimeDelayHelper
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.EnumerationUtil
// import org.allbinary.logic.StdUtil
// import org.allbinary.util.ABHashtable

@global export class GameMidlet extends ProgressMidlet implements CommandListener {

    jclassName(): string {
        return "org.allbinary.game.midlet.GameMidlet";
    }
    enumerationUtil: EnumerationUtil | null = null;
    basicColorFactory: BasicColorFactory | null = null;
    features: Features | null = null;
    midletStrings: MidletStrings | null = null;
    myCommandsFactory: MyCommandsFactory | null = null;
    gameStrings: GameStrings | null = null;
    gameAdStateFactory: GameAdStateFactory | null = null;
    gameStateFactory: GameStateFactory | null = null;
    tsUtil: TsUtil | null = null;
    DISPLAYABLE: string | null = null;
    COMMAND_NAME: string | null = null;
    NO_COMMAND: string | null = null;
    NO_DISPLAYABLE: string | null = null;
    COMMAND_ACTION: string | null = null;
    PAUSE_APP_BACKGROUND: string | null = null;
    UN_PAUSE_APP_BACKGROUND: string | null = null;
    aboutCommandProcessor: AboutCommandProcessor | null = null;
    webCommandProcessor: WebCommandProcessor | null = null;
    gameMidletStateFactory: GameMidletStateFactory | null = null;
    gameStartTimeHelper: TimeDelayHelper | null = null;
    fullScreenUtil: FullScreenUtil | null = null;
    debugInterface: DebugInterface | null = null;
    allbinaryGameCanvasRunnableInterface: GameCanvasRunnableInterface | null = null;
    thread: JThread | null = null;
    loadGameForm: CommandForm | null = null;
    isFullScreen: bool = false;
    resized: bool = false;
    startedBefore: bool = false;

    jfields_GameMidlet(): void {
    this.enumerationUtil = EnumerationUtil.getInstance();
    this.basicColorFactory = BasicColorFactory.getInstance();
    this.features = Features.getInstance();
    this.midletStrings = MidletStrings.getInstance();
    this.myCommandsFactory = MyCommandsFactory.getInstance();
    this.gameStrings = GameStrings.getInstance();
    this.gameAdStateFactory = GameAdStateFactory.getInstance();
    this.gameStateFactory = GameStateFactory.getInstance();
    this.tsUtil = TsUtil.getInstance();
    this.DISPLAYABLE = " Displayable: ";
    this.COMMAND_NAME = "command Name/Label: ";
    this.NO_COMMAND = "No Command";
    this.NO_DISPLAYABLE = "No Displayable";
    this.COMMAND_ACTION = JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append("GameMidlet::")!.append(this.midletStrings!.COMMAND_ACTION));
    this.PAUSE_APP_BACKGROUND = "pauseAppBackground";
    this.UN_PAUSE_APP_BACKGROUND = "unPauseAppBackground";
    this.aboutCommandProcessor = AboutCommandProcessor.getInstance();
    this.webCommandProcessor = WebCommandProcessor.getInstance();
    this.gameMidletStateFactory = GameMidletStateFactory.getInstance();
    this.gameStartTimeHelper = new TimeDelayHelper().jinit_TimeDelayHelper_1(240);
    this.fullScreenUtil = FullScreenUtil.getInstance();
    
    this.allbinaryGameCanvasRunnableInterface = NullGameCanvasRunnable.NULL_GAME_CANVAS_RUNNABLE;
    this.thread = NullThread.NULL_THREAD;
    
    this.isFullScreen = false;
    this.resized = false;
    this.startedBefore = false;
    }
    

    jinit_GameMidlet_1(clientInformationFactory: ClientInformationFactory | null): GameMidlet {
        super.jinit_ProgressMidlet_1(clientInformationFactory);
        this.jfields_GameMidlet();
        SmallIntegerSingletonFactory.getInstance()!.initWithRange(0x291, 6); if (JThrowable.pending !== null) return this;
        this.loadGameForm = CommandForm.getNullCommandForm(); if (JThrowable.pending !== null) return this;
        let progressCanvas: ProgressCanvas | null = ProgressCanvasFactory.getInstance(); if (JThrowable.pending !== null) return this;
        progressCanvas!.init(this); if (JThrowable.pending !== null) return this;
        GameFeatureEventHandler.getInstance()!.addListenerInterface(ChangedGameFeatureListener.getInstance()); if (JThrowable.pending !== null) return this;
        GamePersistanceSingleton.getInstance()!.clear(); if (JThrowable.pending !== null) return this;
        this.debugInterface = DebugFactory.getInstance(); if (JThrowable.pending !== null) return this;
        this.init(); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    init(): void {
    }
    

    setDemo(): void {
        { JThrowable.raise(new JException().jinit_JException_1(this.commonStrings!.NOT_IMPLEMENTED)); return; }
    }
    

    createGame(): void {
        { JThrowable.raise(new JException().jinit_JException_1(this.commonStrings!.NOT_IMPLEMENTED)); return; }
    }
    

    mediaShutdown(): void {
        { JThrowable.raise(new JException().jinit_JException_1(this.commonStrings!.NOT_IMPLEMENTED)); return; }
    }
    

    stopAll(): void {
    }
    

    pauseApp(): void {
        this.pauseAppBackground(true); if (JThrowable.pending !== null) return;
        let gameAdState: GameAdState | null = this.gameAdStateFactory!.getCurrentInstance(); if (JThrowable.pending !== null) return;
        gameAdState!.getAdvertisements()!.stopAll(); if (JThrowable.pending !== null) return;
    }
    

    pauseAppBackground(background: bool): void {
        this.logUtil!.putF(this.commonStrings!.START, this, this.PAUSE_APP_BACKGROUND); if (JThrowable.pending !== null) return;
        if (this.allbinaryGameCanvasRunnableInterface != NullGameCanvasRunnable.NULL_GAME_CANVAS_RUNNABLE) {
            this.allbinaryGameCanvasRunnableInterface!.pause(); if (JThrowable.pending !== null) return;
        } else {
            this.logUtil!.putF("<<<<<< Null", this, this.PAUSE_APP_BACKGROUND); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        AllBinarySensorManager.getInstance()!.shutdown(); if (JThrowable.pending !== null) return;
    }
    

    unPauseApp(): void {
        this.unPauseAppBackground(true); if (JThrowable.pending !== null) return;
        let gameAdState: GameAdState | null = this.gameAdStateFactory!.getCurrentInstance(); if (JThrowable.pending !== null) return;
        gameAdState!.getAdvertisements()!.startAll(); if (JThrowable.pending !== null) return;
    }
    

    unPauseAppBackground(background: bool): void {
        this.logUtil!.putF(this.commonStrings!.START, this, this.UN_PAUSE_APP_BACKGROUND); if (JThrowable.pending !== null) return;
        AllBinarySensorManager.getInstance()!.init(); if (JThrowable.pending !== null) return;
        let gameCanvasRunnableInterface: GameCanvasRunnableInterface | null = this.allbinaryGameCanvasRunnableInterface;
        if (gameCanvasRunnableInterface != NullGameCanvasRunnable.NULL_GAME_CANVAS_RUNNABLE) {
            gameCanvasRunnableInterface!.unPause(); if (JThrowable.pending !== null) return;
        } else {
            this.logUtil!.putF("<<<<<< Null", this, this.UN_PAUSE_APP_BACKGROUND); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    destroyAppInRunnable(unconditional: bool, isProgress: bool): void {
        let progressCanvas: ProgressCanvas | null = ProgressCanvasFactory.getInstance(); if (JThrowable.pending !== null) return;
        if (isProgress) {
            progressCanvas!.start(); if (JThrowable.pending !== null) return;
            this.commandAction(this.myCommandsFactory!.SET_DISPLAYABLE, progressCanvas); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        this.destroyApp(unconditional); if (JThrowable.pending !== null) return;
        if (isProgress) {
            progressCanvas!.end(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    destroyApp(unconditional: bool): void {
        let METHOD_NAME: string | null = "GameMidlet::destroyApp";
        do {
            PreLogUtil.put(JObject.jtoString(GameStatisticsFactory.getInstance()), this, METHOD_NAME); if (JThrowable.pending !== null) break;
            let gameAdState: GameAdState | null = this.gameAdStateFactory!.getCurrentInstance(); if (JThrowable.pending !== null) break;
            gameAdState!.getAdvertisements()!.stopAll(); if (JThrowable.pending !== null) break;
            if (!this.isDestroyed()) {
                this.stopGameCanvasRunnableInterface(); if (JThrowable.pending !== null) break;
                this.setGameCanvasRunnableInterface(NullGameCanvasRunnable.NULL_GAME_CANVAS_RUNNABLE); if (JThrowable.pending !== null) break;
                this.mediaShutdown(); if (JThrowable.pending !== null) break;
            } else {
                this.logUtil!.putF("Midlet Managment Error: Midlet Should Only Be Destroyed Once", this, METHOD_NAME); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            super.destroyApp(true); if (JThrowable.pending !== null) break;
            PreLogUtil.put(this.commonStrings!.END, this, METHOD_NAME); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, METHOD_NAME, e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        this.logUtil!.putF(this.commonStrings!.END, this, METHOD_NAME); if (JThrowable.pending !== null) return;
    }
    

    startApp(): void {
        do {
            let gameAdState: GameAdState | null = this.gameAdStateFactory!.getCurrentInstance(); if (JThrowable.pending !== null) break;
            gameAdState!.getAdvertisements()!.startAll(); if (JThrowable.pending !== null) break;
            let START_APP: string | null = "startApp";
            this.logUtil!.putF(this.commonStrings!.START, this, START_APP); if (JThrowable.pending !== null) break;
            let gameCanvasRunnableInterface: Object | null = this.allbinaryGameCanvasRunnableInterface;
            if (gameCanvasRunnableInterface == changetype<Object | null>(NullGameCanvasRunnable.NULL_GAME_CANVAS_RUNNABLE)) {
                this.gameMidletStateFactory!.setCurrentGameState(this.gameStateFactory!.NO_GAME_STATE); if (JThrowable.pending !== null) break;
                this.setDemo(); if (JThrowable.pending !== null) break;
            } else {
                this.logUtil!.putF("GameCanvasRunnableInterface is available", this, START_APP); if (JThrowable.pending !== null) break;
                if (gameCanvasRunnableInterface == changetype<Object | null>(this.getCurrentDisplayable())) {
                    this.unPauseAppBackground(false); if (JThrowable.pending !== null) break;
                } else {
                    this.logUtil!.putF("GameCanvasRunnableInterface is not current displayable", this, START_APP); if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "startApp", e); if (JThrowable.pending !== null) return;
            this.destroyApp(false); if (JThrowable.pending !== null) return;
            this.notifyDestroyed(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    commandAction(command: Command | null, displayable: Displayable | null): void {
        do {
            let displayableAsString: string | null = this.NO_DISPLAYABLE;
            if (displayable != null) {
                displayableAsString = JObject.jtoString(displayable); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            let label: string | null = this.NO_COMMAND;
            if (command != null) {
                label = command!.getLabel(); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            PreLogUtil.put(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(this.COMMAND_NAME)!.append(label)!.append(this.DISPLAYABLE)!.append(displayableAsString)), this, this.COMMAND_ACTION); if (JThrowable.pending !== null) break;
            let gameCommandsFactory: GameCommandsFactory | null = GameCommandsFactory.getInstance(); if (JThrowable.pending !== null) break;
            let allbinaryGameCanvasRunnableInterface: GameCanvasRunnableInterface | null = this.allbinaryGameCanvasRunnableInterface;
            let gameCanvasRunnableInterface: Object | null = allbinaryGameCanvasRunnableInterface;
            if (command == gameCommandsFactory!.SHOW_GAME_CANVAS) {
                if (changetype<Object | null>(this.getDisplay()!.getCurrent()) != gameCanvasRunnableInterface && allbinaryGameCanvasRunnableInterface!.getType() != NullGameCanvasRunnable.NULL_GAME_CANVAS_RUNNABLE!.getType()) {
                    this.setDisplay(changetype<Displayable | null>(gameCanvasRunnableInterface)); if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
                this.unPauseAppBackground(false); if (JThrowable.pending !== null) break;
            } else if (command == gameCommandsFactory!.CLOSE_AND_SHOW_GAME_CANVAS) {
                let menuListener: MenuListener | null = changetype<MenuListener | null>(displayable);
                menuListener!.close(); if (JThrowable.pending !== null) break;
                this.setDisplay(changetype<Displayable | null>(gameCanvasRunnableInterface)); if (JThrowable.pending !== null) break;
                this.unPauseAppBackground(false); if (JThrowable.pending !== null) break;
            } else if (command == gameCommandsFactory!.EXIT_COMMAND) {
                if (GameMidletEventHandler.getInstance()!.getEventListenerInterfaceListP()!.size() == 0) {
                    this.exitProgress(true); if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
                GameMidletEventHandler.getInstance()!.fireEvent(new DemoGameMidletEvent().jinit_DemoGameMidletEvent_2(this, DemoGameMidletStateFactory.getInstance()!.NONE)); if (JThrowable.pending !== null) break;
            } else if (command == gameCommandsFactory!.EXIT_WITHOUT_PROGRESS_COMMAND) {
                this.exitProgress(false); if (JThrowable.pending !== null) break;
            } else if (command == gameCommandsFactory!.START_COMMAND || command == gameCommandsFactory!.RESTART_COMMAND || command == gameCommandsFactory!.CONTINUE_COMMAND) {
                if (this.gameMidletStateFactory!.getCurrentGameState() != this.gameStateFactory!.PLAYING_GAME_STATE || command == gameCommandsFactory!.RESTART_COMMAND) {
                    if (this.gameStartTimeHelper!.isTimeTNT()) {
                        if (command == gameCommandsFactory!.START_COMMAND && this.isDemoLoading()) {
                            this.logUtil!.putF("Trying to Start Game Before Loading Complete", this, this.midletStrings!.COMMAND_ACTION); if (JThrowable.pending !== null) break;
                        } else {
                            this.startedBefore = true;
                            this.createGame(); if (JThrowable.pending !== null) break;
                            this.gameMidletStateFactory!.setCurrentGameState(this.gameStateFactory!.PLAYING_GAME_STATE); if (JThrowable.pending !== null) break;
                        } if (JThrowable.pending !== null) break;
                    } else {
                        this.logUtil!.putF("Starting Game Too Often", this, this.midletStrings!.COMMAND_ACTION); if (JThrowable.pending !== null) break;
                    } if (JThrowable.pending !== null) break;
                } else {
                    this.logUtil!.putF("Already in playing state", this, this.COMMAND_ACTION); if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
            } else if (command == gameCommandsFactory!.BUY_COMMAND) {
                let inApplicationPurchaseFactory: InApplicationPurchaseFactory | null = InApplicationPurchaseFactory.getInstance(); if (JThrowable.pending !== null) break;
                let list: BasicArrayList | null = LockableFeatureFactory.getInstance()!.getList(); if (JThrowable.pending !== null) break;
                let lockableFeature: LockableFeature | null = changetype<LockableFeature | null>(list!.get(0)); if (JThrowable.pending !== null) break;
                if (list!.size() > 0 && !inApplicationPurchaseFactory!.isPurchased(lockableFeature)) {
                    inApplicationPurchaseFactory!.purchase(lockableFeature); if (JThrowable.pending !== null) break;
                } else {
                    TextNotificationUtil.getInstance()!.fireSuccess("Already Purchased"); if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
            } else if (command == gameCommandsFactory!.QUIT_COMMAND) {
                if (this.gameStartTimeHelper!.isTimeTNT()) {
                    if ((displayable instanceof HighScoreTextBox)) {
                        let menuListener: MenuListener | null = changetype<MenuListener | null>(displayable);
                        menuListener!.close(); if (JThrowable.pending !== null) break;
                    } if (JThrowable.pending !== null) break;
                    this.stopGameCanvasRunnableInterface(); if (JThrowable.pending !== null) break;
                    this.gameMidletStateFactory!.setCurrentGameState(this.gameStateFactory!.NO_GAME_STATE); if (JThrowable.pending !== null) break;
                    this.setDemo(); if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
            } else if (command == this.myCommandsFactory!.RESUME_COMMAND) {
                this.unPauseAppBackground(false); if (JThrowable.pending !== null) break;
            } else if (command == this.myCommandsFactory!.PAUSE_COMMAND) {
                this.pauseAppBackground(false); if (JThrowable.pending !== null) break;
            } else if (command == this.myCommandsFactory!.SET_DISPLAYABLE) {
                this.pauseAppBackground(false); if (JThrowable.pending !== null) break;
                this.setDisplay(displayable); if (JThrowable.pending !== null) break;
            } else if (command == gameCommandsFactory!.SET_MENU_DISPLAYABLE) {
                this.pauseAppBackground(false); if (JThrowable.pending !== null) break;
                let menuListener: MenuListener | null = changetype<MenuListener | null>(displayable);
                menuListener!.open(); if (JThrowable.pending !== null) break;
                this.setDisplay(displayable); if (JThrowable.pending !== null) break;
            } else if (command == gameCommandsFactory!.START_TRACE) {
                this.debugInterface!.start(); if (JThrowable.pending !== null) break;
                let gameCanvas: AllBinaryGameCanvas | null = changetype<AllBinaryGameCanvas | null>(allbinaryGameCanvasRunnableInterface);
                gameCanvas!.addCommand(gameCommandsFactory!.STOP_TRACE); if (JThrowable.pending !== null) break;
                gameCanvas!.removeCommand(gameCommandsFactory!.START_TRACE); if (JThrowable.pending !== null) break;
            } else if (command == gameCommandsFactory!.STOP_TRACE) {
                this.pauseAppBackground(false); if (JThrowable.pending !== null) break;
                this.debugInterface!.stop(); if (JThrowable.pending !== null) break;
                this.unPauseAppBackground(false); if (JThrowable.pending !== null) break;
                let gameCanvas: AllBinaryGameCanvas | null = changetype<AllBinaryGameCanvas | null>(allbinaryGameCanvasRunnableInterface);
                gameCanvas!.addCommand(gameCommandsFactory!.START_TRACE); if (JThrowable.pending !== null) break;
                gameCanvas!.removeCommand(gameCommandsFactory!.STOP_TRACE); if (JThrowable.pending !== null) break;
            } else if (command == gameCommandsFactory!.DEFAULT_OPTIONS) {
                let tempDisplayable: Displayable | null = displayable;
                if ((tempDisplayable instanceof GameOptionsForm)) {
                    GameFeatureFormUtil.getInstance()!.setDefault(changetype<CommandForm | null>(tempDisplayable)); if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
            } else if (command == GameInputMappingInstructionsCanvas.DISPLAY) {
                let tempDisplayable: Displayable | null = displayable;
                if ((tempDisplayable instanceof GameInputMappingCanvas)) {
                    let gameInputMappingCanvas: GameInputMappingCanvas | null = changetype<GameInputMappingCanvas | null>(tempDisplayable);
                    gameInputMappingCanvas!.update(); if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
                this.commandAction(gameCommandsFactory!.SET_MENU_DISPLAYABLE, this.getInputMappingInstructionsCanvas()); if (JThrowable.pending !== null) break;
            } else if (HighScoreCommandsFactory.getInstance()!.isHighScoreCommand(command)) {
                let tempDisplayable: Displayable | null = displayable;
                if ((tempDisplayable instanceof HighScoresCanvas)) {
                    let highScoresCanvas: HighScoresCanvas | null = changetype<HighScoresCanvas | null>(tempDisplayable);
                    highScoresCanvas!.updateCommand(command); if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
            } else if (command == HighScoreCommands.getInstance()!.DISPLAY) {
                this.commandAction(gameCommandsFactory!.SET_MENU_DISPLAYABLE, this.createHighScoresCanvas()); if (JThrowable.pending !== null) break;
            } else if (command == GameInputMappingInstructionsCanvas.CLOSE) {
                let menuListener: MenuListener | null = changetype<MenuListener | null>(displayable);
                menuListener!.close(); if (JThrowable.pending !== null) break;
                this.commandAction(GameInputMappingCanvas.DISPLAY, NullCanvas.NULL_CANVAS); if (JThrowable.pending !== null) break;
            } else if (command == GameInputMappingCanvas.DISPLAY) {
                if (J2MEUtil.isHTML()) {
                    this.pauseAppBackground(false); if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
                this.commandAction(gameCommandsFactory!.SET_MENU_DISPLAYABLE, this.getInputMappingCanvas()); if (JThrowable.pending !== null) break;
            } else if (command == GameInputMappingCanvas.DEFAULT) {
                let tempDisplayable: Displayable | null = displayable;
                if ((tempDisplayable instanceof GameInputMappingCanvas)) {
                    let gameInputMappingCanvas: GameInputMappingCanvas | null = changetype<GameInputMappingCanvas | null>(tempDisplayable);
                    gameInputMappingCanvas!.setDefault(); if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
            } else if (command == InGameOptionsForm.DISPLAY) {
                this.pauseAppBackground(false); if (JThrowable.pending !== null) break;
                let progressCanvas: ProgressCanvas | null = ProgressCanvasFactory.getInstance(); if (JThrowable.pending !== null) break;
                progressCanvas!.addNormalPortion(50, "In Game Options"); if (JThrowable.pending !== null) break;
                let layerManager: AllBinaryGameLayerManager | null = this.createGameLayerManager(); if (JThrowable.pending !== null) break;
                let inGameOptionsFormFactory: InGameOptionsFormFactory | null = InGameOptionsFormFactory.getInstance(); if (JThrowable.pending !== null) break;
                inGameOptionsFormFactory!.init(this, new InGameFeatures().jinit_InGameFeatures_0(), "Options In Game", layerManager!.getBackgroundBasicColor(), layerManager!.getForegroundBasicColor()); if (JThrowable.pending !== null) break;
                let inGameOptionsForm: CommandForm | null = inGameOptionsFormFactory!.get(); if (JThrowable.pending !== null) break;
                inGameOptionsForm!.setItemStateListener(allbinaryGameCanvasRunnableInterface); if (JThrowable.pending !== null) break;
                this.commandAction(gameCommandsFactory!.SET_MENU_DISPLAYABLE, inGameOptionsForm); if (JThrowable.pending !== null) break;
            } else if (command == InGameOptionsForm.DEFAULT) {
                let inGameOptionsForm: InGameOptionsForm | null = changetype<InGameOptionsForm | null>(InGameOptionsFormFactory.getInstance()!.get()); if (JThrowable.pending !== null) break;
                GameFeatureFormUtil.getInstance()!.setDefault(inGameOptionsForm); if (JThrowable.pending !== null) break;
            } else if (command == gameCommandsFactory!.DISPLAY_OPTIONS) {
                AllBinaryMediaManager.setMuted(true); if (JThrowable.pending !== null) break;
                this.stopAll(); if (JThrowable.pending !== null) break;
                let mainFeatureFactory: MainFeatureFactory | null = MainFeatureFactory.getInstance(); if (JThrowable.pending !== null) break;
                this.isFullScreen = this.features!.isFeature(mainFeatureFactory!.FULL_SCREEN); if (JThrowable.pending !== null) break;
                ResizableListenerHandler.getInstance()!.fireEvent(true); if (JThrowable.pending !== null) break;
                this.setResized(false); if (JThrowable.pending !== null) break;
                this.commandAction(gameCommandsFactory!.SET_MENU_DISPLAYABLE, this.getGameOptionsForm()); if (JThrowable.pending !== null) break;
            } else if (command == gameCommandsFactory!.CLOSE_OPTIONS) {
                ResizableListenerHandler.getInstance()!.fireEvent(false); if (JThrowable.pending !== null) break;
                this.commandAction(gameCommandsFactory!.CLOSE_AND_SHOW_GAME_CANVAS, displayable); if (JThrowable.pending !== null) break;
                let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) break;
                stringBuffer!.append("Close isFullScreen/change: "); if (JThrowable.pending !== null) break;
                stringBuffer!.appendboolean(this.isFullScreen); if (JThrowable.pending !== null) break;
                stringBuffer!.appendboolean(this.fullScreenUtil!.isScreenChange(this.isFullScreen)); if (JThrowable.pending !== null) break;
                stringBuffer!.append(" isResized: "); if (JThrowable.pending !== null) break;
                stringBuffer!.appendboolean(this.isResized()); if (JThrowable.pending !== null) break;
                PreLogUtil.put(JObject.jtoString(stringBuffer), this, this.COMMAND_ACTION); if (JThrowable.pending !== null) break;
                if (this.isResized() || this.fullScreenUtil!.isScreenChange(this.isFullScreen)) {
                    this.updateFullScreen(); if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
                AllBinaryMediaManager.setMuted(false); if (JThrowable.pending !== null) break;
            } else if (command == gameCommandsFactory!.DISPLAY_LOAD_FORM) {
                this.pauseAppBackground(false); if (JThrowable.pending !== null) break;
                let keyValuePersistance: KeyValuePersistance | null = GamePersistanceSingleton.getInstance(); if (JThrowable.pending !== null) break;
                keyValuePersistance!.clear(); if (JThrowable.pending !== null) break;
                keyValuePersistance!.loadAll(this.abeClientInformation); if (JThrowable.pending !== null) break;
                if (this.getLoadGameForm() == CommandForm.getNullCommandForm()) {
                    let layerManager: AllBinaryGameLayerManager | null = this.createGameLayerManager(); if (JThrowable.pending !== null) break;
                    this.setLoadGameForm(new LoadGameForm().jinit_LoadGameForm_4(this, "Load Game", layerManager!.getBackgroundBasicColor(), layerManager!.getForegroundBasicColor())); if (JThrowable.pending !== null) break;
                } else {
                    this.getLoadGameForm()!.update(); if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
                this.commandAction(gameCommandsFactory!.SET_MENU_DISPLAYABLE, this.getLoadGameForm()); if (JThrowable.pending !== null) break;
            } else if (command == gameCommandsFactory!.LOAD_FILE) {
                let loadGameForm: LoadGameForm | null = changetype<LoadGameForm | null>(this.getLoadGameForm()); if (JThrowable.pending !== null) break;
                let index: i32 = loadGameForm!.getSelectedId(); if (JThrowable.pending !== null) break;
                if (index != -1) {
                    let keyValuePersistance: KeyValuePersistance | null = GamePersistanceSingleton.getInstance(); if (JThrowable.pending !== null) break;
                    this.setStartStateHashtable(keyValuePersistance!.get(index)); if (JThrowable.pending !== null) break;
                    let menuListener: MenuListener | null = this.getLoadGameForm(); if (JThrowable.pending !== null) break;
                    menuListener!.close(); if (JThrowable.pending !== null) break;
                    PreLogUtil.put(JObject.jtoString(BasicMotionGesturesHandler.getInstance()), this, this.COMMAND_ACTION); if (JThrowable.pending !== null) break;
                    this.commandAction(gameCommandsFactory!.START_COMMAND, NullCanvas.NULL_CANVAS); if (JThrowable.pending !== null) break;
                    PreLogUtil.put(JObject.jtoString(BasicMotionGesturesHandler.getInstance()), this, this.COMMAND_ACTION); if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
            } else if (command == gameCommandsFactory!.DELETE_FILE) {
                let loadGameForm: LoadGameForm | null = changetype<LoadGameForm | null>(this.getLoadGameForm()); if (JThrowable.pending !== null) break;
                let index: i32 = loadGameForm!.getSelectedText(); if (JThrowable.pending !== null) break;
                if (index != -1) {
                    let keyValuePersistance: KeyValuePersistance | null = GamePersistanceSingleton.getInstance(); if (JThrowable.pending !== null) break;
                    keyValuePersistance!.delete_(this.abeClientInformation, index); if (JThrowable.pending !== null) break;
                    keyValuePersistance!.clear(); if (JThrowable.pending !== null) break;
                    keyValuePersistance!.loadAllSize(this.abeClientInformation, 1); if (JThrowable.pending !== null) break;
                    this.getLoadGameForm()!.update(); if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
            } else if (command == gameCommandsFactory!.SAVE) {
                let keyValuePersistance: KeyValuePersistance | null = GamePersistanceSingleton.getInstance(); if (JThrowable.pending !== null) break;
                this.pauseAppBackground(false); if (JThrowable.pending !== null) break;
                keyValuePersistance!.save(this.abeClientInformation, this.getCurrentStateHashtable()); if (JThrowable.pending !== null) break;
                this.unPauseAppBackground(false); if (JThrowable.pending !== null) break;
            } else if (command == HighScoreUtil.SUBMIT_TEXTBOX_COMMAND) {
                this.logUtil!.putF("Submitted Score", this, this.COMMAND_ACTION); if (JThrowable.pending !== null) break;
                if ((displayable instanceof HighScoreTextBox)) {
                    let highScoreTextBox: HighScoreTextBox | null = changetype<HighScoreTextBox | null>(displayable);
                    highScoreTextBox!.submitted = true;
                }
                allbinaryGameCanvasRunnableInterface!.setHighScoreSubmitted(true); if (JThrowable.pending !== null) break;
                this.commandAction(gameCommandsFactory!.CLOSE_AND_SHOW_GAME_CANVAS, displayable); if (JThrowable.pending !== null) break;
            } else if (command == gameCommandsFactory!.DISPLAY_ABOUT) {
                this.aboutCommandProcessor!.process(this, gameCommandsFactory!.SET_MENU_DISPLAYABLE, this.getAboutCanvas()); if (JThrowable.pending !== null) break;
            } else if (command == gameCommandsFactory!.OPEN_WEB_URL) {
                this.webCommandProcessor!.process(this, gameCommandsFactory!.OPEN_WEB_URL, NullCanvas.NULL_CANVAS); if (JThrowable.pending !== null) break;
            } else if (command == gameCommandsFactory!.TOGGLE_KEYBOARD) {
                let virtualKeyboardEventHandler: VirtualKeyboardEventHandler | null = VirtualKeyboardEventHandler.getInstance(); if (JThrowable.pending !== null) break;
                virtualKeyboardEventHandler!.fireEvent(virtualKeyboardEventHandler!.SHOW_EVENT); if (JThrowable.pending !== null) break;
            } else if (this.tsUtil!.compareTo(command!.getLabel(), gameCommandsFactory!.TOGGLE_FULLSCREEN!.getLabel()) == 0) {
                let mainFeatureFactory: MainFeatureFactory | null = MainFeatureFactory.getInstance(); if (JThrowable.pending !== null) break;
                let isFullScreen: bool = this.features!.isFeature(mainFeatureFactory!.FULL_SCREEN); if (JThrowable.pending !== null) break;
                if (isFullScreen) {
                    this.features!.removeDefault(mainFeatureFactory!.FULL_SCREEN); if (JThrowable.pending !== null) break;
                } else {
                    this.features!.addDefault(mainFeatureFactory!.FULL_SCREEN); if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
                this.updateFullScreen(); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(this.commonStrings!.EXCEPTION_LABEL)!.append(command!.getLabel())), this, this.midletStrings!.COMMAND_ACTION, e); if (JThrowable.pending !== null) return;
            if (command != GameCommandsFactory.getInstance()!.EXIT_COMMAND) {
                this.exitProgress(false); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    updateFullScreen(): void {
        let mainFeatureFactory: MainFeatureFactory | null = MainFeatureFactory.getInstance(); if (JThrowable.pending !== null) return;
        let isFullScreen: bool = this.features!.isFeature(mainFeatureFactory!.FULL_SCREEN); if (JThrowable.pending !== null) return;
        let displayable: Displayable | null = this.getDisplay()!.getCurrent(); if (JThrowable.pending !== null) return;
        if ((displayable instanceof Canvas)) {
            let canvas: Canvas | null = changetype<Canvas | null>(displayable);
            canvas!.setFullScreenMode(isFullScreen); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    onEvent(eventObject: AllBinaryEventObject | null): void {
        ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this); if (JThrowable.pending !== null) return;
    }
    

    getInputMappingInstructionsCanvas(): MyCanvas | null {
        return new GameInputMappingInstructionsCanvas().jinit_GameInputMappingInstructionsCanvas_2(this, this.createGameLayerManager());
    }
    

    getInputMappingCanvas(): MyCanvas | null {
        return new GameInputMappingCanvas().jinit_GameInputMappingCanvas_4(this.abeClientInformation, this, this.createGameLayerManager(), this.getHelpPaintable());
    }
    

    getAboutCanvas(): MyCanvas | null {
        return new BasicPaintablesCanvas().jinit_BasicPaintablesCanvas_4(this, CanvasStrings.getInstance()!.ABOUT, this.createGameLayerManager(), AboutPaintableFactory.getInstance()!.paintableArray);
    }
    

    getHelpPaintable(): HelpPaintable | null {
        { JThrowable.raise(new JException().jinit_JException_1(this.commonStrings!.NOT_IMPLEMENTED)); return null; }
        return null;
    }
    

    createHighScoresCanvas(): HighScoresCanvas | null {
        { JThrowable.raise(new JException().jinit_JException_1(this.commonStrings!.NOT_IMPLEMENTED)); return null; }
        return null;
    }
    

    startGameCanvasRunnableInterface(): void {
        let threadFactoryUtil: ThreadFactoryUtil | null = ThreadFactoryUtil.getInstance(); if (JThrowable.pending !== null) return;
        this.thread = threadFactoryUtil!.getInstanceGameCanvasRunnable(this.allbinaryGameCanvasRunnableInterface); if (JThrowable.pending !== null) return;
        this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append("Thread Priority: ")!.appendint(this.thread!.getPriority())), this, "startGameCanvasRunnableInterface"); if (JThrowable.pending !== null) return;
        this.allbinaryGameCanvasRunnableInterface!.setThread(this.thread); if (JThrowable.pending !== null) return;
        threadFactoryUtil!.start(this.thread); if (JThrowable.pending !== null) return;
    }
    

    stopGameCanvasRunnableInterface(): void {
        this.logUtil!.putF(this.commonStrings!.START, this, this.gameStrings!.STOP_GAME_CANVAS_RUNNABLE_INTERFACE); if (JThrowable.pending !== null) return;
        GameNotificationEventHandler.getInstance()!.removeAllListeners(); if (JThrowable.pending !== null) return;
        ColorChangeEventHandler.getInstance()!.removeAllListeners(); if (JThrowable.pending !== null) return;
        GameEventHandlerUtil.removeAllListeners(); if (JThrowable.pending !== null) return;
        let gameCanvasRunnableInterface: GameCanvasRunnableInterface | null = this.allbinaryGameCanvasRunnableInterface;
        if (gameCanvasRunnableInterface != NullGameCanvasRunnable.NULL_GAME_CANVAS_RUNNABLE) {
            this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append("Set Running False: ")!.append(JObject.jtoString(gameCanvasRunnableInterface))), this, this.gameStrings!.STOP_GAME_CANVAS_RUNNABLE_INTERFACE); if (JThrowable.pending !== null) return;
            gameCanvasRunnableInterface!.setRunning(false); if (JThrowable.pending !== null) return;
        } else {
            this.logUtil!.putF("StopGame - Could Not Stop", this, this.gameStrings!.STOP_GAME_CANVAS_RUNNABLE_INTERFACE); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        ThreadUtil.getInstance()!.join(this.thread); if (JThrowable.pending !== null) return;
        let progressCanvas: ProgressCanvas | null = ProgressCanvasFactory.getInstance(); if (JThrowable.pending !== null) return;
        if (this.features!.isFeature(MainFeatureFactory.getInstance()!.LOAD_ALL)) {
            progressCanvas!.addNormalPortion(50, "Stopped Game Runnable"); if (JThrowable.pending !== null) return;
        } else {
            progressCanvas!.addNormalPortion(50, "Stopped Main Runnable"); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        this.logUtil!.putF(this.commonStrings!.END, this, this.gameStrings!.STOP_GAME_CANVAS_RUNNABLE_INTERFACE); if (JThrowable.pending !== null) return;
    }
    

    getGameCanvasRunnableInterface(): GameCanvasRunnableInterface | null {
        return this.allbinaryGameCanvasRunnableInterface;
    }
    

    setGameCanvasRunnableInterface(gameCanvasRunnableInterface: GameCanvasRunnableInterface | null): void {
        this.allbinaryGameCanvasRunnableInterface = gameCanvasRunnableInterface;
    }
    

    createGameLayerManager(): AllBinaryGameLayerManager | null {
        let gameInfo: GameInfo | null = new GameInfo().jinit_GameInfo_5(GameTypeFactory.getInstance()!.SINGLE_PLAYER, GameMode.SERVER, PlayerTypesFactory.getInstance()!.PLAYER_TYPE_ONE, 1, 1); if (JThrowable.pending !== null) return null;
        return new AllBinaryGameLayerManager().jinit_AllBinaryGameLayerManager_3(this.basicColorFactory!.BLACK, this.basicColorFactory!.WHITE, gameInfo);
    }
    

    getGameOptionsForm(): CommandForm | null {
        let layerManager: AllBinaryGameLayerManager | null = this.createGameLayerManager(); if (JThrowable.pending !== null) return null;
        return GameOptionsFormFactory.getInstance()!.init(this, "Game Options", layerManager!.getBackgroundBasicColor(), layerManager!.getForegroundBasicColor());
    }
    

    save(): void {
        this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.SAVE); if (JThrowable.pending !== null) return;
        let hashtable: ABHashtable | null = this.getCurrentStateHashtable(); if (JThrowable.pending !== null) return;
        GamePersistanceSingleton.getInstance()!.save(this.abeClientInformation, hashtable); if (JThrowable.pending !== null) return;
    }
    

    getCurrentStateHashtable(): ABHashtable | null {
        this.logUtil!.putF(this.commonStrings!.START, this, "getCurrentStateHashtable"); if (JThrowable.pending !== null) return null;
        let hashtable: ABHashtable | null = StdUtil.getInstance()!.createHashtable(); if (JThrowable.pending !== null) return null;
        if (this.allbinaryGameCanvasRunnableInterface != NullGameCanvasRunnable.NULL_GAME_CANVAS_RUNNABLE) {
            let currentHashtable: ABHashtable | null = this.allbinaryGameCanvasRunnableInterface!.getCurrentStateHashtable(); if (JThrowable.pending !== null) return null;
            let enumeration: JEnumeration | null = currentHashtable!.keys(); if (JThrowable.pending !== null) return null;
            let key: Object | null = null;
            while (this.enumerationUtil!.hasMoreElements(enumeration)) {
                key = this.enumerationUtil!.nextElement(enumeration); if (JThrowable.pending !== null) return null;
                hashtable!.put(key, currentHashtable!.get(key)); if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return hashtable;
    }
    

    setLoadGameForm(loadGameForm: LoadGameForm | null): void {
        this.loadGameForm = loadGameForm;
    }
    

    getLoadGameForm(): CommandForm | null {
        return this.loadGameForm;
    }
    

    setResized(resized: bool): void {
        this.resized = resized;
    }
    

    isResized(): bool {
        return this.resized;
    }
    

    isDemoLoading(): bool {
        if (this.startedBefore) {
            return false;
        }
        let displayable: Displayable | null = this.getDisplay()!.getCurrent(); if (JThrowable.pending !== null) return false;
        if ((displayable instanceof DemoCanvas)) {
            let demoCanvas: DemoCanvas | null = changetype<DemoCanvas | null>(displayable);
            if (demoCanvas!.isDemoLoading()) {
                return true;
            } if (JThrowable.pending !== null) return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
}

