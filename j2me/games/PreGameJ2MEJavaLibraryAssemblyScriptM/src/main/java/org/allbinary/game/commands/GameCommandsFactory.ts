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
// package org.allbinary.game.commands
// import javax.microedition.lcdui.Command
// import org.allbinary.graphics.displayable.CanvasStrings
// import org.allbinary.logic.NullUtil
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.string.CommonStrings

@global export class GameCommandsFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.commands.GameCommandsFactory";
    }
    @lazy static jv_instance: Object | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): Object | null {
        if (!GameCommandsFactory.js_instance) {
            GameCommandsFactory.js_instance = true;
            GameCommandsFactory.jv_instance = NullUtil.getInstance()!.NULL_OBJECT;
        }
        return GameCommandsFactory.jv_instance;
    }
    static set instance(value: Object | null) {
        GameCommandsFactory.js_instance = true;
        GameCommandsFactory.jv_instance = value;
    }
    TOGGLE_FULLSCREEN: Command | null = null;
    TOGGLE_KEYBOARD: Command | null = null;
    SET_MENU_DISPLAYABLE: Command | null = null;
    APPLICATION_UPDATE: Command | null = null;
    DISPLAY_ABOUT: Command | null = null;
    OPEN_WEB_URL: Command | null = null;
    CLOSE_OPTIONS: Command | null = null;
    DISPLAY_OPTIONS: Command | null = null;
    START_TRACE: Command | null = null;
    STOP_TRACE: Command | null = null;
    DEFAULT_OPTIONS: Command | null = null;
    SHOW_GAME_CANVAS: Command | null = null;
    CLOSE_AND_SHOW_GAME_CANVAS: Command | null = null;
    QUIT_COMMAND: Command | null = null;
    RESTART_COMMAND: Command | null = null;
    DISPLAY_SAVE_FORM: Command | null = null;
    SAVE: Command | null = null;
    DISPLAY_LOAD_FORM: Command | null = null;
    LOAD_FILE: Command | null = null;
    DELETE_FILE: Command | null = null;
    EXIT_COMMAND: Command | null = null;
    EXIT_WITHOUT_PROGRESS_COMMAND: Command | null = null;
    START_COMMAND: Command | null = null;
    CONTINUE_COMMAND: Command | null = null;
    SELECT_COMMAND: Command | null = null;
    FEATURE_UPDATE: Command | null = null;
    BUY_COMMAND: Command | null = null;

    jfields_GameCommandsFactory(): void {
    this.TOGGLE_FULLSCREEN = new Command().jinit_Command_4("Toggle FullScreen", StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 1);
    this.TOGGLE_KEYBOARD = new Command().jinit_Command_4("Keyboard", StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 1);
    this.SET_MENU_DISPLAYABLE = new Command().jinit_Command_4("Set Menu Displayable", StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 1);
    this.APPLICATION_UPDATE = new Command().jinit_Command_4(CommonStrings.getInstance()!.UPDATE, StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 1);
    this.DISPLAY_ABOUT = new Command().jinit_Command_4(CanvasStrings.getInstance()!.ABOUT, StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 2);
    this.OPEN_WEB_URL = new Command().jinit_Command_4("Open Web URL", StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 2);
    this.CLOSE_OPTIONS = new Command().jinit_Command_4("Back", StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 1);
    this.DISPLAY_OPTIONS = new Command().jinit_Command_4(CanvasStrings.getInstance()!.OPTIONS, StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 2);
    this.START_TRACE = new Command().jinit_Command_4("Start Trace", StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 1);
    this.STOP_TRACE = new Command().jinit_Command_4("Stop Trace", StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 1);
    this.DEFAULT_OPTIONS = new Command().jinit_Command_4("Default", StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 1);
    this.SHOW_GAME_CANVAS = new Command().jinit_Command_4("Back to Game", StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 1);
    this.CLOSE_AND_SHOW_GAME_CANVAS = new Command().jinit_Command_4("Back", StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 1);
    this.QUIT_COMMAND = new Command().jinit_Command_4("Quit", StringUtil.getInstance()!.EMPTY_STRING, Command.STOP, 1);
    this.RESTART_COMMAND = new Command().jinit_Command_4("Restart", StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 0);
    this.DISPLAY_SAVE_FORM = new Command().jinit_Command_4("Save To", StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 3);
    this.SAVE = new Command().jinit_Command_4("Save", StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 3);
    this.DISPLAY_LOAD_FORM = new Command().jinit_Command_4("Load", StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 3);
    this.LOAD_FILE = new Command().jinit_Command_4("Load File", StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 3);
    this.DELETE_FILE = new Command().jinit_Command_4("Delete File", StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 1);
    this.EXIT_COMMAND = new Command().jinit_Command_4("Exit", StringUtil.getInstance()!.EMPTY_STRING, Command.EXIT, 2);
    this.EXIT_WITHOUT_PROGRESS_COMMAND = new Command().jinit_Command_4("Exit Without Progress", StringUtil.getInstance()!.EMPTY_STRING, Command.EXIT, 2);
    this.START_COMMAND = new Command().jinit_Command_4(CommonStrings.getInstance()!.START, StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 1);
    this.CONTINUE_COMMAND = new Command().jinit_Command_4("Continue", StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 1);
    this.SELECT_COMMAND = new Command().jinit_Command_4("Select", StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 1);
    this.FEATURE_UPDATE = new Command().jinit_Command_4("Feature Update", StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 1);
    this.BUY_COMMAND = new Command().jinit_Command_4("BUY", StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 1);
    }
    

    static getInstance(): GameCommandsFactory | null {
        if (GameCommandsFactory.instance == changetype<Object | null>(NullUtil.getInstance()!.NULL_OBJECT)) {
            GameCommandsFactory.instance = new GameCommandsFactory().jinit_GameCommandsFactory_0(); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return changetype<GameCommandsFactory | null>(GameCommandsFactory.instance);
    }
    

    jinit_GameCommandsFactory_0(): GameCommandsFactory {
        super.jinit_JObject_0();
        this.jfields_GameCommandsFactory();
        return this;
    }
}

