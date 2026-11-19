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
// import org.allbinary.game.layer.AllBinaryGameLayerManager
// import org.allbinary.game.paint.ColorFillBasePaintable
// import org.allbinary.game.paint.ColorFillPaintableFactory
// import org.allbinary.graphics.Anchor
// import org.allbinary.graphics.draw.DrawStringUtil
// import org.allbinary.logic.string.StringUtil

@global export class GameInputMappingInstructionsCanvas extends GameCommandCanvas {

    jclassName(): string {
        return "org.allbinary.game.displayable.canvas.GameInputMappingInstructionsCanvas";
    }
    @lazy static jv_DISPLAY: Command | null = null;
    @lazy static js_DISPLAY: bool = false;
    static get DISPLAY(): Command | null {
        if (!GameInputMappingInstructionsCanvas.js_DISPLAY) {
            GameInputMappingInstructionsCanvas.js_DISPLAY = true;
            GameInputMappingInstructionsCanvas.jv_DISPLAY = new Command().jinit_Command_4("Help", StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 1);
        }
        return GameInputMappingInstructionsCanvas.jv_DISPLAY;
    }
    static set DISPLAY(value: Command | null) {
        GameInputMappingInstructionsCanvas.js_DISPLAY = true;
        GameInputMappingInstructionsCanvas.jv_DISPLAY = value;
    }
    @lazy static jv_CLOSE: Command | null = null;
    @lazy static js_CLOSE: bool = false;
    static get CLOSE(): Command | null {
        if (!GameInputMappingInstructionsCanvas.js_CLOSE) {
            GameInputMappingInstructionsCanvas.js_CLOSE = true;
            GameInputMappingInstructionsCanvas.jv_CLOSE = new Command().jinit_Command_4("Close", StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 1);
        }
        return GameInputMappingInstructionsCanvas.jv_CLOSE;
    }
    static set CLOSE(value: Command | null) {
        GameInputMappingInstructionsCanvas.js_CLOSE = true;
        GameInputMappingInstructionsCanvas.jv_CLOSE = value;
    }
    @lazy static readonly NAME: string | null = "GameInputMappingInstructionsCanvas";
    drawStringUtil: DrawStringUtil | null = null;
    TITLE: string | null = null;
    instructions: StaticArray<string | null> | null = null;
    colorFillPaintable: ColorFillBasePaintable | null = null;
    anchor: i32 = 0;

    jfields_GameInputMappingInstructionsCanvas(): void {
    this.drawStringUtil = DrawStringUtil.getInstance();
    this.TITLE = "Input Instructions";
    this.instructions = StaticArray.fromArray<string | null>(["Add Input Mapping:", "1. Select the desired action by generating a currently defined input for a given action.", "(Example: Press the '1' key to select the Fire action)", "2. Make the newly desired input for the selected action.", "(Example: Press 'f' to add it to the selected action)", "Note: If the input is already mapped to another action then it will not be added. You", "will need to deleted from the other action before adding it to another.", "Warning: Not all keys map for a given platform and show as Unknown.", StringUtil.getInstance()!.EMPTY_STRING, "Remove Input Mapping:", "1. Select the desired action by generating a currently defined input for a given action.", "(Example: Press the key '1' to select the Fire action)", "2. Select a mapped input for the selected action.", "(Example: Press the key '1' to select the '1' key input for the selected Fire action)", "3. Press the Delete Key."]);
    
    this.anchor = Anchor.TOP_LEFT;
    }
    

    jinit_GameInputMappingInstructionsCanvas_2(commandListener: CommandListener | null, allBinaryGameLayerManager: AllBinaryGameLayerManager | null): GameInputMappingInstructionsCanvas {
        super.jinit_GameCommandCanvas_4(commandListener, GameInputMappingInstructionsCanvas.NAME, allBinaryGameLayerManager!.getBackgroundBasicColor(), allBinaryGameLayerManager!.getForegroundBasicColor());
        this.jfields_GameInputMappingInstructionsCanvas();
        this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR); if (JThrowable.pending !== null) return this;
        this.colorFillPaintable = ColorFillPaintableFactory.getInstance()!.getInstance2(allBinaryGameLayerManager!.getBackgroundBasicColor(), false); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    initCommands(cmdListener: CommandListener | null): void {
        this.removeAllCommands(); if (JThrowable.pending !== null) return;
        this.addCommand(GameInputMappingInstructionsCanvas.CLOSE); if (JThrowable.pending !== null) return;
        this.setCommandListener(cmdListener); if (JThrowable.pending !== null) return;
    }
    

    paint(graphics: Graphics | null): void {
        this.myFontProcessor!.process(graphics); if (JThrowable.pending !== null) return;
        this.colorFillPaintable!.paint(graphics); if (JThrowable.pending !== null) return;
        let halfWidth: i32 = this.displayInfo!.getLastHalfWidth(); if (JThrowable.pending !== null) return;
        let beginWidth: i32 = (graphics!.getFont()!.stringWidth(this.TITLE) >> 1); if (JThrowable.pending !== null) return;
        graphics!.setColor(this.foregroundColor); if (JThrowable.pending !== null) return;
        graphics!.drawString(this.TITLE, halfWidth - beginWidth, this.fontHeight, this.anchor); if (JThrowable.pending !== null) return;
        this.drawStringUtil!.drawCenterStrings(graphics, this.instructions, this.displayInfo!.getLastWidth(), this.fontHeight, halfWidth, 3 * this.fontHeight); if (JThrowable.pending !== null) return;
        super.paint(graphics); if (JThrowable.pending !== null) return;
    }
}

