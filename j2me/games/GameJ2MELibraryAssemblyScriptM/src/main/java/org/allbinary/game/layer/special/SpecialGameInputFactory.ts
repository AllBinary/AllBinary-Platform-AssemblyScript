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
// package org.allbinary.game.layer.special

@global export class SpecialGameInputFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.layer.special.SpecialGameInputFactory";
    }
    @lazy static jv_NO_SPECIAL_GAME_INPUT: SpecialGameInput | null = null;
    @lazy static js_NO_SPECIAL_GAME_INPUT: bool = false;
    static get NO_SPECIAL_GAME_INPUT(): SpecialGameInput | null {
        if (!SpecialGameInputFactory.js_NO_SPECIAL_GAME_INPUT) {
            SpecialGameInputFactory.js_NO_SPECIAL_GAME_INPUT = true;
            SpecialGameInputFactory.jv_NO_SPECIAL_GAME_INPUT = new SpecialGameInput().jinit_SpecialGameInput_0();
        }
        return SpecialGameInputFactory.jv_NO_SPECIAL_GAME_INPUT;
    }
    static set NO_SPECIAL_GAME_INPUT(value: SpecialGameInput | null) {
        SpecialGameInputFactory.js_NO_SPECIAL_GAME_INPUT = true;
        SpecialGameInputFactory.jv_NO_SPECIAL_GAME_INPUT = value;
    }

    jinit_SpecialGameInputFactory_0(): SpecialGameInputFactory {
        super.jinit_JObject_0();
        return this;
    }
}

