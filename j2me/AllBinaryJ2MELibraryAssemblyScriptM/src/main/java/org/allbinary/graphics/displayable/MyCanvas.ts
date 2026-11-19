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
// package org.allbinary.graphics.displayable
// import javax.microedition.lcdui.Canvas
// import javax.microedition.lcdui.Command
// import javax.microedition.lcdui.CommandListener
// import javax.microedition.lcdui.Graphics
// import javax.microedition.lcdui.NullCommandListener
// import org.allbinary.graphics.displayable.command.MyCommandInterface
// import org.allbinary.graphics.displayable.command.MyCommandsFactory
// import org.allbinary.input.TouchJ2ME
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.media.audio.Sound
// import org.allbinary.string.CommonStrings
// import org.allbinary.util.BasicArrayList
// import org.allbinary.logic.StdUtil
// import org.allbinary.util.ABStack

@global export class MyCanvas extends Canvas implements DisplayableInterface, MyCommandInterface {

    jclassName(): string {
        return "org.allbinary.graphics.displayable.MyCanvas";
    }
    logUtil: LogUtil | null = null;
    commonStrings: CommonStrings | null = null;
    canvasStrings: CanvasStrings | null = null;
    stringUtil: StringUtil | null = null;
    displayInfo: DisplayInfoSingleton | null = null;
    name: string | null = null;
    childNameList: BasicArrayList | null = null;
    commandStack: ABStack | null = null;
    commandListener: CommandListener | null = null;
    paused: bool = false;
    touchME: TouchJ2ME | null = null;

    jfields_MyCanvas(): void {
    this.logUtil = LogUtil.getInstance();
    this.commonStrings = CommonStrings.getInstance();
    this.canvasStrings = CanvasStrings.getInstance();
    this.stringUtil = StringUtil.getInstance();
    this.displayInfo = DisplayInfoSingleton.getInstance();
    
    
    
    this.commandListener = NullCommandListener.NULL_COMMAND_LISTENER;
    this.paused = false;
    this.touchME = new TouchJ2ME().jinit_TouchJ2ME_0();
    }
    

    jinit_MyCanvas_2(name: string | null, childNameList: BasicArrayList | null): MyCanvas {
        super.jinit_Canvas_0();
        this.jfields_MyCanvas();
        this.logUtil!.putF(this.commonStrings!.CONSTRUCTOR, this, this.commonStrings!.CONSTRUCTOR); if (JThrowable.pending !== null) return this;
        this.displayInfo!.update(this, this.canvasStrings!.CONSTRUCTOR); if (JThrowable.pending !== null) return this;
        this.name = name;
        this.childNameList = childNameList;
        this.commandStack = StdUtil.getInstance()!.createStack(); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    getWidth(): i32 {
        return super.getWidth();
    }
    

    getHeight(): i32 {
        return super.getHeight();
    }
    

    setFullScreenMode(mode: bool): void {
        super.setFullScreenMode(mode); if (JThrowable.pending !== null) return;
        this.displayInfo!.update(this, this.canvasStrings!.SET_FULL_SCREEN_MODE); if (JThrowable.pending !== null) return;
    }
    

    sizeChanged(w: i32, h: i32): void {
        this.displayInfo!.update(this, this.canvasStrings!.SIZE_CHANGED); if (JThrowable.pending !== null) return;
    }
    

    getCommandStack(): ABStack | null {
        return this.commandStack;
    }
    

    isCommand(command: Command | null): bool {
        return this.commandStack!.contains(command);
    }
    

    addCommand(command: Command | null): void {
        if (!this.commandStack!.contains(command)) {
            this.commandStack!.push(command); if (JThrowable.pending !== null) return;
            super.addCommand(command); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    removeCommand(command: Command | null): void {
        this.commandStack!.removeElement(command); if (JThrowable.pending !== null) return;
        super.removeCommand(command); if (JThrowable.pending !== null) return;
    }
    

    removeAllCommands(): void {
        let size: i32 = this.commandStack!.size(); if (JThrowable.pending !== null) return;
        for (let index: i32 = 0; index < size; index++) {
            super.removeCommand(changetype<Command | null>(this.commandStack!.pop())); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    setCommandListener(l: CommandListener | null): void {
        super.setCommandListener(l); if (JThrowable.pending !== null) return;
        this.commandListener = l;
    }
    

    getCustomCommandListener(): CommandListener | null {
        return this.commandListener;
    }
    

    isPaused(): bool {
        return this.paused;
    }
    

    removePauseCommand(): void {
        this.removeCommand(MyCommandsFactory.getInstance()!.PAUSE_COMMAND); if (JThrowable.pending !== null) return;
    }
    

    pause(): void {
        this.logUtil!.putF(this.commonStrings!.START, this, this.canvasStrings!.PAUSE); if (JThrowable.pending !== null) return;
        this.removePauseCommand(); if (JThrowable.pending !== null) return;
        this.addCommand(MyCommandsFactory.getInstance()!.RESUME_COMMAND); if (JThrowable.pending !== null) return;
        this.setPaused(true); if (JThrowable.pending !== null) return;
    }
    

    unPause(): void {
        this.logUtil!.putF(this.commonStrings!.START, this, this.canvasStrings!.UN_PAUSE); if (JThrowable.pending !== null) return;
        this.removeCommand(MyCommandsFactory.getInstance()!.RESUME_COMMAND); if (JThrowable.pending !== null) return;
        this.addCommand(MyCommandsFactory.getInstance()!.PAUSE_COMMAND); if (JThrowable.pending !== null) return;
        this.setPaused(false); if (JThrowable.pending !== null) return;
    }
    

    process(): void {
        this.displayInfo!.process(); if (JThrowable.pending !== null) return;
    }
    

    paint(graphics: Graphics | null): void {
    }
    

    draw(graphics: Graphics | null): void {
    }
    

    hasChild(displayable: MyCanvas | null): bool {
        return this.childNameList!.contains(displayable!.name);
    }
    

    destroy(): void {
        this.logUtil!.putF("Destroyed MyCanvas", this, "destroy"); if (JThrowable.pending !== null) return;
    }
    

    setPaused(isPaused: bool): void {
        this.paused = isPaused;
    }
    

    keyPressedByDevice(keyCode: i32, deviceId: i32): void {
    }
    

    keyRepeatedByDevice(keyCode: i32, deviceId: i32): void {
    }
    

    keyReleasedByDevice(keyCode: i32, deviceId: i32): void {
    }
    

    pointerDragged(x: i32, y: i32): void {
        this.touchME!.pointerDragged(x, y); if (JThrowable.pending !== null) return;
    }
    

    pointerPressed(x: i32, y: i32): void {
        this.touchME!.pointerPressed(x, y); if (JThrowable.pending !== null) return;
    }
    

    pointerReleased(x: i32, y: i32): void {
        this.touchME!.pointerReleased(x, y); if (JThrowable.pending !== null) return;
    }
    

    nextSong(nextSongSound: Sound | null, leftVolume: i32, rightVolume: i32): void {
    }
}

