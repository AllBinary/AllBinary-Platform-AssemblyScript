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
// import org.allbinary.game.input.Input
// import org.allbinary.game.input.InputFactory
// import org.allbinary.game.input.InputProcessor
// import org.allbinary.game.input.PlatformKeyFactory
// import org.allbinary.game.input.event.DownKeyEventHandler
// import org.allbinary.game.input.event.GameKeyEvent
// import org.allbinary.game.input.event.GameKeyEventFactory
// import org.allbinary.game.input.event.UpGameKeyEventHandler
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.communication.log.PreLogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.string.CommonSeps
// import org.allbinary.string.CommonStrings

@global export class FormInputProcessor extends InputProcessor {

    jclassName(): string {
        return "org.allbinary.game.displayable.canvas.FormInputProcessor";
    }
    logUtil: LogUtil | null = null;
    commonStrings: CommonStrings | null = null;
    gameKeyEventFactory: GameKeyEventFactory | null = null;
    downKeyEventHandler: DownKeyEventHandler | null = null;
    upGameKeyEventHandler: UpGameKeyEventHandler | null = null;
    inputFactory: InputFactory | null = null;
    platformKeyFactory: PlatformKeyFactory | null = null;
    allBinaryGameCanvas: AllBinaryGameCanvas | null = null;

    jfields_FormInputProcessor(): void {
    this.logUtil = LogUtil.getInstance();
    this.commonStrings = CommonStrings.getInstance();
    this.gameKeyEventFactory = GameKeyEventFactory.getInstance();
    this.downKeyEventHandler = DownKeyEventHandler.getInstance();
    this.upGameKeyEventHandler = UpGameKeyEventHandler.getInstance();
    this.inputFactory = InputFactory.getInstance();
    this.platformKeyFactory = PlatformKeyFactory.getInstance();
    
    }
    

    jinit_FormInputProcessor_1(allBinaryGameCanvas: AllBinaryGameCanvas | null): FormInputProcessor {
        super.jinit_InputProcessor_0();
        this.jfields_FormInputProcessor();
        this.allBinaryGameCanvas = allBinaryGameCanvas;
        return this;
    }
    

    keyPressedByDevice(keyCode: i32, deviceId: i32): void {
        do {
            PreLogUtil.put(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(this.inputFactory!.KEY_CODE_LABEL)!.appendint(keyCode)!.append(CommonSeps.getInstance()!.SPACE)!.append(this.inputFactory!.DEVICE_ID_LABEL)!.appendint(deviceId)), this, this.gameInputStrings!.KEY_PRESSED); if (JThrowable.pending !== null) break;
            let input: Input | null = this.inputFactory!.getInstanceById(keyCode); if (JThrowable.pending !== null) break;
            let gameKeyEvent: GameKeyEvent | null = this.gameKeyEventFactory!.getInstanceForInput(this.allBinaryGameCanvas, input); if (JThrowable.pending !== null) break;
            this.downKeyEventHandler!.fireEventForGameKeyEvent(gameKeyEvent); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.gameInputStrings!.ADD_KEY_EVENT, e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    keyReleasedByDevice(canvas: Canvas | null, keyCode: i32, deviceId: i32): void {
        do {
            let input: Input | null = this.inputFactory!.getInstanceById(keyCode); if (JThrowable.pending !== null) break;
            if (this.platformKeyFactory!.isEnter(input)) {
                PreLogUtil.put(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(this.inputFactory!.KEY_CODE_LABEL)!.appendint(keyCode)!.append(CommonSeps.getInstance()!.SPACE)!.append(this.inputFactory!.DEVICE_ID_LABEL)!.appendint(deviceId)), this, this.gameInputStrings!.KEY_RELEASED); if (JThrowable.pending !== null) break;
                let gameKey: GameKey | null = GameKeyFactory.getInstance()!.KEY_NUM0; if (JThrowable.pending !== null) break;
                let gameKeyEventSourceInterface: GameKeyEventSourceInterface | null = changetype<GameKeyEventSourceInterface | null>(canvas);
                let gameKeyEvent: GameKeyEvent | null = this.gameKeyEventFactory!.getInstanceForInput(gameKeyEventSourceInterface, gameKey); if (JThrowable.pending !== null) break;
                this.upGameKeyEventHandler!.fireEvent(gameKeyEvent); if (JThrowable.pending !== null) break;
                this.upGameKeyEventHandler!.getInstanceForDevice(deviceId)!.fireEvent(gameKeyEvent); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.gameInputStrings!.ADD_KEY_EVENT, e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

