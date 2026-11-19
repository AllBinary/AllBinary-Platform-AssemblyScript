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
// import org.allbinary.game.commands.GameCommandsFactory
// import org.allbinary.game.input.GameKey
// import org.allbinary.game.input.GameKeyFactory
// import org.allbinary.game.input.Input
// import org.allbinary.game.input.InputFactory
// import org.allbinary.game.input.PlatformInputMappingFactory
// import org.allbinary.game.input.mapping.InputMappingInterface
// import org.allbinary.game.input.mapping.PersistentInputMapping
// import org.allbinary.game.layer.AllBinaryGameLayerManager
// import org.allbinary.game.paint.ColorFillBasePaintable
// import org.allbinary.game.paint.ColorFillPaintableFactory
// import org.allbinary.game.paint.help.HelpPaintable
// import org.allbinary.game.paint.help.InputMappingHelpPaintable
// import org.allbinary.graphics.paint.ProcessPaintable
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.logic.system.security.licensing.AbeClientInformationInterface
// import org.allbinary.util.BasicArrayList

@global export class GameInputMappingCanvas extends GameCommandCanvas implements InputMappingInterface {

    jclassName(): string {
        return "org.allbinary.game.displayable.canvas.GameInputMappingCanvas";
    }
    @lazy static readonly NAME: string | null = "GameInputMappingCanvas";
    @lazy static jv_DISPLAY: Command | null = null;
    @lazy static js_DISPLAY: bool = false;
    static get DISPLAY(): Command | null {
        if (!GameInputMappingCanvas.js_DISPLAY) {
            GameInputMappingCanvas.js_DISPLAY = true;
            GameInputMappingCanvas.jv_DISPLAY = new Command().jinit_Command_4("Controls", StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 2);
        }
        return GameInputMappingCanvas.jv_DISPLAY;
    }
    static set DISPLAY(value: Command | null) {
        GameInputMappingCanvas.js_DISPLAY = true;
        GameInputMappingCanvas.jv_DISPLAY = value;
    }
    @lazy static jv_DEFAULT: Command | null = null;
    @lazy static js_DEFAULT: bool = false;
    static get DEFAULT(): Command | null {
        if (!GameInputMappingCanvas.js_DEFAULT) {
            GameInputMappingCanvas.js_DEFAULT = true;
            GameInputMappingCanvas.jv_DEFAULT = new Command().jinit_Command_4("Default", StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 2);
        }
        return GameInputMappingCanvas.jv_DEFAULT;
    }
    static set DEFAULT(value: Command | null) {
        GameInputMappingCanvas.js_DEFAULT = true;
        GameInputMappingCanvas.jv_DEFAULT = value;
    }
    paintable: ProcessPaintable | null = null;
    helpPaintable: InputMappingHelpPaintable | null = null;
    colorFillPaintable: ColorFillBasePaintable | null = null;
    inputMapping: PersistentInputMapping | null = null;
    NONE: GameKey | null = null;
    abeClientInformation: AbeClientInformationInterface | null = null;
    selectedGameKey: GameKey | null = null;
    selectedInput: Input | null = null;
    inputFactory: InputFactory | null = null;

    jfields_GameInputMappingCanvas(): void {
    
    
    
    
    this.NONE = GameKeyFactory.getInstance()!.NONE;
    
    this.selectedGameKey = this.NONE;
    this.selectedInput = this.NONE;
    this.inputFactory = InputFactory.getInstance();
    }
    

    jinit_GameInputMappingCanvas_4(abeClientInformation: AbeClientInformationInterface | null, commandListener: CommandListener | null, allBinaryGameLayerManager: AllBinaryGameLayerManager | null, helpPaintable: HelpPaintable | null): GameInputMappingCanvas {
        super.jinit_GameCommandCanvas_4(commandListener, GameInputMappingCanvas.NAME, allBinaryGameLayerManager!.getBackgroundBasicColor(), allBinaryGameLayerManager!.getForegroundBasicColor());
        this.jfields_GameInputMappingCanvas();
        this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR); if (JThrowable.pending !== null) return this;
        if (helpPaintable == null) {
            { JThrowable.raise(new JException().jinit_JException_1("Help Paintable Exception")); return this; }
        } if (JThrowable.pending !== null) return this;
        this.abeClientInformation = abeClientInformation;
        this.helpPaintable = changetype<InputMappingHelpPaintable | null>(helpPaintable);
        this.inputMapping = PlatformInputMappingFactory.getInstance()!.getPersistentInputMappingInstance(); if (JThrowable.pending !== null) return this;
        this.paintable = new ProcessPaintable().jinit_ProcessPaintable_0(); if (JThrowable.pending !== null) return this;
        this.colorFillPaintable = ColorFillPaintableFactory.getInstance()!.getInstance2(allBinaryGameLayerManager!.getBackgroundBasicColor(), false); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    close(): void {
        super.close(); if (JThrowable.pending !== null) return;
        this.paintable!.process(); if (JThrowable.pending !== null) return;
        this.selectedGameKey = this.NONE;
        this.selectedInput = this.NONE;
        this.update(); if (JThrowable.pending !== null) return;
    }
    

    initCommands(cmdListener: CommandListener | null): void {
        this.removeAllCommands(); if (JThrowable.pending !== null) return;
        this.addCommand(GameCommandsFactory.getInstance()!.CLOSE_AND_SHOW_GAME_CANVAS); if (JThrowable.pending !== null) return;
        this.addCommand(GameInputMappingCanvas.DEFAULT); if (JThrowable.pending !== null) return;
        this.addCommand(GameInputMappingInstructionsCanvas.DISPLAY); if (JThrowable.pending !== null) return;
        this.setCommandListener(cmdListener); if (JThrowable.pending !== null) return;
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
        this.addGameKey(keyCode, false); if (JThrowable.pending !== null) return;
        super.keyPressedByDevice(keyCode, 0); if (JThrowable.pending !== null) return;
    }
    

    addGameKey(keyCode: i32, repeated: bool): void {
        do {
            this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append("Raw Device Key Code: ")!.append(JInteger.toHexString(keyCode))), this, this.gameInputStrings!.ADD_KEY_EVENT); if (JThrowable.pending !== null) break;
            let gameKey: GameKey | null = this.inputToGameKeyMapping!.getInstanceForCanvas(this, keyCode); if (JThrowable.pending !== null) break;
            let input: Input | null = this.inputFactory!.getInstanceById(keyCode); if (JThrowable.pending !== null) break;
            this.processInputMapping(gameKey, input); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put("Key Event Error", this, this.gameInputStrings!.ADD_KEY_EVENT, e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    processInputMapping(gameKey: GameKey | null, input: Input | null): void {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return;
        stringBuffer!.append("Start Passed GameKey: "); if (JThrowable.pending !== null) return;
        stringBuffer!.append(this.stringUtil!.toString1(gameKey)); if (JThrowable.pending !== null) return;
        stringBuffer!.append(" Input: "); if (JThrowable.pending !== null) return;
        stringBuffer!.append(this.stringUtil!.toString1(input)); if (JThrowable.pending !== null) return;
        this.logUtil!.putF(JObject.jtoString(stringBuffer), this, this.commonStrings!.PROCESS); if (JThrowable.pending !== null) return;
        if (this.selectedGameKey != this.NONE) {
            this.gameActionCrud(gameKey, input); if (JThrowable.pending !== null) return;
        } else {
            this.setSelectedAction(gameKey); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    setSelectedAction(gameKey: GameKey | null): void {
        this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append("Selected GameKey: ")!.append(this.stringUtil!.toString1(gameKey))), this, "setSelectedAction"); if (JThrowable.pending !== null) return;
        this.selectedGameKey = gameKey;
        this.selectedInput = this.NONE;
        this.helpPaintable!.update(this.selectedGameKey, this.selectedInput); if (JThrowable.pending !== null) return;
        this.repaintBehavior!.onChangeRepaint(this); if (JThrowable.pending !== null) return;
    }
    

    gameActionCrud(gameKey: GameKey | null, input: Input | null): void {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return;
        stringBuffer!.append("Start GameKey: "); if (JThrowable.pending !== null) return;
        stringBuffer!.append(this.stringUtil!.toString1(this.selectedGameKey)); if (JThrowable.pending !== null) return;
        stringBuffer!.append(" Input: "); if (JThrowable.pending !== null) return;
        stringBuffer!.append(this.stringUtil!.toString1(this.selectedInput)); if (JThrowable.pending !== null) return;
        this.logUtil!.putF(JObject.jtoString(stringBuffer), this, "gameActionCrud"); if (JThrowable.pending !== null) return;
        if (this.selectedInput == this.NONE) {
            let list: BasicArrayList | null = this.inputMapping!.getInputMapping()!.getMappedInput(this.selectedGameKey); if (JThrowable.pending !== null) return;
            let isInputAlreadyMappedToSelectedAction: bool = list!.contains(input); if (JThrowable.pending !== null) return;
            if (isInputAlreadyMappedToSelectedAction) {
                this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append("Already Mapped Input: ")!.append(this.stringUtil!.toString1(input))), this, "gameActionCrud"); if (JThrowable.pending !== null) return;
                this.selectedInput = input;
                this.helpPaintable!.update(this.selectedGameKey, this.selectedInput); if (JThrowable.pending !== null) return;
                this.repaintBehavior!.onChangeRepaint(this); if (JThrowable.pending !== null) return;
            } else {
                this.addNewMapping(gameKey, input); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } else if (this.inputMapping!.isDelete(input)) {
            this.deleteCurrentMapping(); if (JThrowable.pending !== null) return;
        } else {
            this.setSelectedAction(gameKey); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    addNewMapping(gameKey: GameKey | null, input: Input | null): void {
        let METHOD_NAME: string | null = "addNewMapping";
        this.logUtil!.putF(this.commonStrings!.START, this, METHOD_NAME); if (JThrowable.pending !== null) return;
        let isInputAlreadyMapped: bool = this.inputMapping!.getInputMapping()!.isMapped(input); if (JThrowable.pending !== null) return;
        if (!isInputAlreadyMapped && !this.inputMapping!.isSystemInput(input)) {
            let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return;
            stringBuffer!.append("Add Key Mapping : GameKey: "); if (JThrowable.pending !== null) return;
            stringBuffer!.append(this.stringUtil!.toString1(this.selectedGameKey)); if (JThrowable.pending !== null) return;
            stringBuffer!.append(" Input: "); if (JThrowable.pending !== null) return;
            stringBuffer!.append(this.stringUtil!.toString1(this.selectedInput)); if (JThrowable.pending !== null) return;
            this.logUtil!.putF(JObject.jtoString(stringBuffer), this, METHOD_NAME); if (JThrowable.pending !== null) return;
            this.inputMapping!.getInputMapping()!.add(this.selectedGameKey, input); if (JThrowable.pending !== null) return;
            this.selectedInput = input;
            this.update(); if (JThrowable.pending !== null) return;
        } else {
            this.logUtil!.putF("Unable to add Mapping since one already exists or is MENU, HOME, or BACK key and setting selected action to what it is already mapped to", this, METHOD_NAME); if (JThrowable.pending !== null) return;
            this.setSelectedAction(gameKey); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    deleteCurrentMapping(): void {
        let METHOD_NAME: string | null = "deleteCurrentMapping";
        let list: BasicArrayList | null = this.inputMapping!.getInputMapping()!.getMappedInput(this.selectedGameKey); if (JThrowable.pending !== null) return;
        if (list!.size() > 1) {
            let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return;
            stringBuffer!.append("Start GameKey: "); if (JThrowable.pending !== null) return;
            stringBuffer!.append("Remove Key Mapping: GameKey: "); if (JThrowable.pending !== null) return;
            stringBuffer!.append(this.stringUtil!.toString1(this.selectedGameKey)); if (JThrowable.pending !== null) return;
            stringBuffer!.append(" Input: "); if (JThrowable.pending !== null) return;
            stringBuffer!.append(this.stringUtil!.toString1(this.selectedInput)); if (JThrowable.pending !== null) return;
            this.logUtil!.putF(JObject.jtoString(stringBuffer), this, METHOD_NAME); if (JThrowable.pending !== null) return;
            this.inputMapping!.getInputMapping()!.remove(this.selectedGameKey, this.selectedInput); if (JThrowable.pending !== null) return;
            this.selectedInput = this.NONE;
            this.update(); if (JThrowable.pending !== null) return;
        } else {
            this.logUtil!.putF("Can't Remove Last Key Mapping", this, METHOD_NAME); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    setDefault(): void {
        this.inputMapping!.setDefault(this.abeClientInformation); if (JThrowable.pending !== null) return;
        this.helpPaintable!.update(this.NONE, this.NONE); if (JThrowable.pending !== null) return;
        this.repaintBehavior!.onChangeRepaint(this); if (JThrowable.pending !== null) return;
    }
    

    update(): void {
        this.inputMapping!.update(this.abeClientInformation); if (JThrowable.pending !== null) return;
        this.helpPaintable!.update(this.selectedGameKey, this.selectedInput); if (JThrowable.pending !== null) return;
        this.repaintBehavior!.onChangeRepaint(this); if (JThrowable.pending !== null) return;
    }
    

    paint(graphics: Graphics | null): void {
        this.colorFillPaintable!.paint(graphics); if (JThrowable.pending !== null) return;
        this.helpPaintable!.paint(graphics); if (JThrowable.pending !== null) return;
        this.paintable!.paint(graphics); if (JThrowable.pending !== null) return;
        super.paint(graphics); if (JThrowable.pending !== null) return;
    }
}

