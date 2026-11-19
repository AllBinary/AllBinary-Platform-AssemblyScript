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
// import org.allbinary.game.input.GameKey
// import org.allbinary.game.input.GameKeyEventSourceInterface
// import org.allbinary.game.input.GameKeyFactory
// import org.allbinary.game.input.InputProcessor
// import org.allbinary.game.input.PlatformInputMappingFactory
// import org.allbinary.game.input.event.DownGameKeyEventHandler
// import org.allbinary.game.input.event.DownKeyEventHandler
// import org.allbinary.game.input.event.GameKeyEvent
// import org.allbinary.game.input.event.GameKeyEventFactory
// import org.allbinary.game.input.event.UpGameKeyEventHandler
// import org.allbinary.game.input.mapping.InputToGameKeyMapping
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.math.SmallIntegerSingletonFactory
// import org.allbinary.logic.string.StringMaker

@global export class GameCanvasInputProcessor extends InputProcessor {

    jclassName(): string {
        return "org.allbinary.game.displayable.canvas.GameCanvasInputProcessor";
    }
    logUtil: LogUtil | null = null;
    allBinaryGameCanvas: AllBinaryGameCanvas | null = null;
    downGameKeyEventHandler: DownGameKeyEventHandler | null = null;
    upGameKeyEventHandler: UpGameKeyEventHandler | null = null;
    downKeyEventHandler: DownKeyEventHandler | null = null;
    smallIntegerSingletonFactory: SmallIntegerSingletonFactory | null = null;
    inputToGameKeyMapping: InputToGameKeyMapping | null = null;
    NONE: GameKey | null = null;
    gameKeyEventFactory: GameKeyEventFactory | null = null;

    jfields_GameCanvasInputProcessor(): void {
    this.logUtil = LogUtil.getInstance();
    
    this.downGameKeyEventHandler = DownGameKeyEventHandler.getInstance();
    this.upGameKeyEventHandler = UpGameKeyEventHandler.getInstance();
    this.downKeyEventHandler = DownKeyEventHandler.getInstance();
    this.smallIntegerSingletonFactory = SmallIntegerSingletonFactory.getInstance();
    this.inputToGameKeyMapping = PlatformInputMappingFactory.getInstance()!.getPersistentInputMappingInstance()!.getInputMapping();
    this.NONE = GameKeyFactory.getInstance()!.NONE;
    this.gameKeyEventFactory = GameKeyEventFactory.getInstance();
    }
    

    jinit_GameCanvasInputProcessor_1(allBinaryGameCanvas: AllBinaryGameCanvas | null): GameCanvasInputProcessor {
        super.jinit_InputProcessor_0();
        this.jfields_GameCanvasInputProcessor();
        this.allBinaryGameCanvas = allBinaryGameCanvas;
        this.inputToGameKeyMapping!.init(this.allBinaryGameCanvas); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    keyPressedByDevice(keyCode: i32, deviceId: i32): void {
        do {
            let gameKey: GameKey | null = this.inputToGameKeyMapping!.getInstanceForCanvas(this.allBinaryGameCanvas, keyCode); if (JThrowable.pending !== null) break;
            if (gameKey != this.NONE) {
                let gameKeyEvent: GameKeyEvent | null = this.gameKeyEventFactory!.getInstanceForInput(this.allBinaryGameCanvas, gameKey); if (JThrowable.pending !== null) break;
                this.downGameKeyEventHandler!.fireEvent(gameKeyEvent); if (JThrowable.pending !== null) break;
                this.downGameKeyEventHandler!.getInstanceForDevice(deviceId)!.fireEvent(gameKeyEvent); if (JThrowable.pending !== null) break;
            } else {
                this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(this.gameInputStrings!.NO_KEY)!.appendint(keyCode)), this, this.gameInputStrings!.ADD_KEY_EVENT); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            let keyCodeAsInteger: JInteger | null = this.smallIntegerSingletonFactory!.getAtNoThrow(keyCode); if (JThrowable.pending !== null) break;
            this.downKeyEventHandler!.fireEventI(keyCodeAsInteger); if (JThrowable.pending !== null) break;
            this.downKeyEventHandler!.getInstanceForDevice(deviceId)!.fireEventI(keyCodeAsInteger); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put("Key Event Error", this, this.gameInputStrings!.ADD_KEY_EVENT, e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    keyReleasedByDevice(canvas: Canvas | null, keyCode: i32, deviceId: i32): void {
        this.removeGameKeyEvent(canvas, keyCode, deviceId, false); if (JThrowable.pending !== null) return;
    }
    

    removeGameKeyEvent(canvas: Canvas | null, keyCode: i32, deviceId: i32, repeated: bool): void {
        do {
            let gameKey: GameKey | null = this.inputToGameKeyMapping!.getInstanceForCanvas(canvas, keyCode); if (JThrowable.pending !== null) break;
            if (gameKey != this.NONE) {
                let gameKeyEventSourceInterface: GameKeyEventSourceInterface | null = changetype<GameKeyEventSourceInterface | null>(canvas);
                let gameKeyEvent: GameKeyEvent | null = this.gameKeyEventFactory!.getInstanceForInput(gameKeyEventSourceInterface, gameKey); if (JThrowable.pending !== null) break;
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
}

