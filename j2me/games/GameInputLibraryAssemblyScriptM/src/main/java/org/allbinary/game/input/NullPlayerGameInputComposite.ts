/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2025 AllBinary 
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
// package org.allbinary.game.input
// import org.allbinary.layer.AllBinaryLayerManager
// import org.allbinary.logic.string.StringUtil

@global export class NullPlayerGameInputComposite extends JObject implements PlayerGameInputCompositeInterface {

    jclassName(): string {
        return "org.allbinary.game.input.NullPlayerGameInputComposite";
    }
    @lazy static jv_NULL_PLAYER_GAME_INPUT_COMPOSITE: NullPlayerGameInputComposite | null = null;
    @lazy static js_NULL_PLAYER_GAME_INPUT_COMPOSITE: bool = false;
    static get NULL_PLAYER_GAME_INPUT_COMPOSITE(): NullPlayerGameInputComposite | null {
        if (!NullPlayerGameInputComposite.js_NULL_PLAYER_GAME_INPUT_COMPOSITE) {
            NullPlayerGameInputComposite.js_NULL_PLAYER_GAME_INPUT_COMPOSITE = true;
            NullPlayerGameInputComposite.jv_NULL_PLAYER_GAME_INPUT_COMPOSITE = new NullPlayerGameInputComposite().jinit_NullPlayerGameInputComposite_0();
        }
        return NullPlayerGameInputComposite.jv_NULL_PLAYER_GAME_INPUT_COMPOSITE;
    }
    static set NULL_PLAYER_GAME_INPUT_COMPOSITE(value: NullPlayerGameInputComposite | null) {
        NullPlayerGameInputComposite.js_NULL_PLAYER_GAME_INPUT_COMPOSITE = true;
        NullPlayerGameInputComposite.jv_NULL_PLAYER_GAME_INPUT_COMPOSITE = value;
    }

    jinit_NullPlayerGameInputComposite_0(): NullPlayerGameInputComposite {
        super.jinit_JObject_0();
        return this;
    }
    

    getName(): string | null {
        return StringUtil.getInstance()!.EMPTY_STRING;
    }
    

    processInput(layerManager: AllBinaryLayerManager | null): void {
    }
    

    initInputProcessors(): void {
    }
    

    getPlayerGameInput(): PlayerGameInput | null {
        return NoPlayerGameInput.getInstance();
    }
}

