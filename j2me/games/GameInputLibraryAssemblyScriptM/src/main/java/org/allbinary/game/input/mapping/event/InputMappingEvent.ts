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
// package org.allbinary.game.input.mapping.event
// import org.allbinary.game.input.mapping.InputToGameKeyMapping
// import org.allbinary.logic.util.event.AllBinaryEventObject

@global export class InputMappingEvent extends AllBinaryEventObject {

    jclassName(): string {
        return "org.allbinary.game.input.mapping.event.InputMappingEvent";
    }
    inputToGameKeyMapping: InputToGameKeyMapping | null = null;

    jfields_InputMappingEvent(): void {
    this.inputToGameKeyMapping = InputToGameKeyMapping.getNullInstance();
    }
    

    jinit_InputMappingEvent_1(anyType: Object | null): InputMappingEvent {
        super.jinit_AllBinaryEventObject_1(anyType);
        this.jfields_InputMappingEvent();
        return this;
    }
    

    setInputToGameKeyMapping(inputToGameKeyMapping: InputToGameKeyMapping | null): void {
        this.inputToGameKeyMapping = inputToGameKeyMapping;
    }
    

    getInputToGameKeyMapping(): InputToGameKeyMapping | null {
        return this.inputToGameKeyMapping;
    }
}

