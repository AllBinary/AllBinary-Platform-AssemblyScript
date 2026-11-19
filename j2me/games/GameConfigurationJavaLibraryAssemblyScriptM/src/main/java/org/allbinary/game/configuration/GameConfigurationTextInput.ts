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
// package org.allbinary.game.configuration
// import javax.microedition.lcdui.TextField
// import org.allbinary.logic.StdUtil
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.util.ABHashtable

@global export class GameConfigurationTextInput extends JObject {

    jclassName(): string {
        return "org.allbinary.game.configuration.GameConfigurationTextInput";
    }
    @lazy static jv_hashtable: ABHashtable | null = null;
    @lazy static js_hashtable: bool = false;
    static get hashtable(): ABHashtable | null {
        if (!GameConfigurationTextInput.js_hashtable) {
            GameConfigurationTextInput.js_hashtable = true;
            GameConfigurationTextInput.jv_hashtable = StdUtil.getInstance()!.createHashtable();
        }
        return GameConfigurationTextInput.jv_hashtable;
    }
    static set hashtable(value: ABHashtable | null) {
        GameConfigurationTextInput.js_hashtable = true;
        GameConfigurationTextInput.jv_hashtable = value;
    }
    @lazy static jv_SIMULATOR_IP: GameConfigurationTextInput | null = null;
    @lazy static js_SIMULATOR_IP: bool = false;
    static get SIMULATOR_IP(): GameConfigurationTextInput | null {
        if (!GameConfigurationTextInput.js_SIMULATOR_IP) {
            GameConfigurationTextInput.js_SIMULATOR_IP = true;
            GameConfigurationTextInput.jv_SIMULATOR_IP = new GameConfigurationTextInput().jinit_GameConfigurationTextInput_2("IP: ", "192.168.1.3");
        }
        return GameConfigurationTextInput.jv_SIMULATOR_IP;
    }
    static set SIMULATOR_IP(value: GameConfigurationTextInput | null) {
        GameConfigurationTextInput.js_SIMULATOR_IP = true;
        GameConfigurationTextInput.jv_SIMULATOR_IP = value;
    }
    @lazy static jv_SIMULATOR_PORT: GameConfigurationTextInput | null = null;
    @lazy static js_SIMULATOR_PORT: bool = false;
    static get SIMULATOR_PORT(): GameConfigurationTextInput | null {
        if (!GameConfigurationTextInput.js_SIMULATOR_PORT) {
            GameConfigurationTextInput.js_SIMULATOR_PORT = true;
            GameConfigurationTextInput.jv_SIMULATOR_PORT = new GameConfigurationTextInput().jinit_GameConfigurationTextInput_2("Port: ", "8010");
        }
        return GameConfigurationTextInput.jv_SIMULATOR_PORT;
    }
    static set SIMULATOR_PORT(value: GameConfigurationTextInput | null) {
        GameConfigurationTextInput.js_SIMULATOR_PORT = true;
        GameConfigurationTextInput.jv_SIMULATOR_PORT = value;
    }
    label: string | null = null;
    text: string | null = null;

    jfields_GameConfigurationTextInput(): void {
    this.label = StringUtil.getInstance()!.EMPTY_STRING;
    this.text = StringUtil.getInstance()!.EMPTY_STRING;
    }
    

    jinit_GameConfigurationTextInput_2(label: string | null, text: string | null): GameConfigurationTextInput {
        super.jinit_JObject_0();
        this.jfields_GameConfigurationTextInput();
        this.setText(text); if (JThrowable.pending !== null) return this;
        this.setLabel(label); if (JThrowable.pending !== null) return this;
        GameConfigurationTextInput.hashtable!.put(this.getLabel(), this); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    static update(textField: TextField | null): void {
        let anyType: Object | null = changetype<Object | null>(textField!.getLabel()); if (JThrowable.pending !== null) return;
        let gameConfigurationTextInput: GameConfigurationTextInput | null = changetype<GameConfigurationTextInput | null>(GameConfigurationTextInput.hashtable!.get(anyType)); if (JThrowable.pending !== null) return;
        gameConfigurationTextInput!.setText(textField!.getString()); if (JThrowable.pending !== null) return;
    }
    

    setText(text: string | null): void {
        this.text = text;
    }
    

    getText(): string | null {
        return this.text;
    }
    

    setLabel(label: string | null): void {
        this.label = label;
    }
    

    getLabel(): string | null {
        return this.label;
    }
    

    static getHashtable(): ABHashtable | null {
        return GameConfigurationTextInput.hashtable;
    }
}

