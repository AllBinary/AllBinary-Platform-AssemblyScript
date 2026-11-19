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
// package org.allbinary.game.input
// import org.allbinary.game.configuration.persistance.GamePersistanceStrings
// import org.allbinary.game.input.mapping.InputToGameKeyMapping
// import org.allbinary.game.input.mapping.PersistentInputMapping
// import org.allbinary.input.motion.button.BasicTouchInputFactory
// import org.allbinary.input.motion.gesture.TouchMotionGestureFactory

@global export class MotionJ2MEDefaultGameInputMapping extends PersistentInputMapping {

    jclassName(): string {
        return "org.allbinary.game.input.MotionJ2MEDefaultGameInputMapping";
    }
    

    jinit_MotionJ2MEDefaultGameInputMapping_0(): MotionJ2MEDefaultGameInputMapping {
        super.jinit_PersistentInputMapping_1(GamePersistanceStrings.getInstance()!.DEFAULT_INPUT_MAPPING_RECORD_ID);
        let inputToGameKeyMapping: InputToGameKeyMapping | null = this.getInputMapping(); if (JThrowable.pending !== null) return this;
        let gameKeyFactory: GameKeyFactory | null = GameKeyFactory.getInstance(); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.UP, gameKeyFactory!.KEY_NUM2); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.LEFT, gameKeyFactory!.KEY_NUM4); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.RIGHT, gameKeyFactory!.KEY_NUM6); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.DOWN, gameKeyFactory!.KEY_NUM8); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.KEY_NUM1, gameKeyFactory!.GAME_A); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.KEY_NUM3, gameKeyFactory!.GAME_B); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.KEY_NUM7, gameKeyFactory!.GAME_C); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.KEY_NUM9, gameKeyFactory!.GAME_D); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.LEVEL_DOWN, gameKeyFactory!.LEVEL_DOWN); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.LEVEL_UP, gameKeyFactory!.LEVEL_UP); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.UP, gameKeyFactory!.UP); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.DOWN, gameKeyFactory!.DOWN); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.LEFT, gameKeyFactory!.LEFT); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.RIGHT, gameKeyFactory!.RIGHT); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.KEY_POUND, gameKeyFactory!.KEY_POUND); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.KEY_STAR, gameKeyFactory!.KEY_STAR); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.KEY_NUM1, gameKeyFactory!.KEY_NUM1); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.KEY_NUM3, gameKeyFactory!.KEY_NUM3); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.KEY_NUM5, gameKeyFactory!.KEY_NUM5); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.KEY_NUM7, gameKeyFactory!.KEY_NUM7); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.KEY_NUM9, gameKeyFactory!.KEY_NUM9); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.KEY_NUM0, gameKeyFactory!.KEY_NUM0); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.KEY_NUM1, gameKeyFactory!.FIRE); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.UP, TouchMotionGestureFactory.getInstance()!.UP); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.DOWN, TouchMotionGestureFactory.getInstance()!.DOWN); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.LEFT, TouchMotionGestureFactory.getInstance()!.LEFT); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.RIGHT, TouchMotionGestureFactory.getInstance()!.RIGHT); if (JThrowable.pending !== null) return this;
        let basicTouchInputFactory: BasicTouchInputFactory | null = BasicTouchInputFactory.getInstance(); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.UP, basicTouchInputFactory!.UP); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.LEFT, basicTouchInputFactory!.LEFT); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.RIGHT, basicTouchInputFactory!.RIGHT); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.DOWN, basicTouchInputFactory!.DOWN); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.KEY_NUM0, basicTouchInputFactory!.SPECIAL_BUTTON_FIVE); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.KEY_NUM7, basicTouchInputFactory!.SPECIAL_BUTTON_FOUR); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.KEY_NUM9, basicTouchInputFactory!.SPECIAL_BUTTON_THREE); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.KEY_NUM1, basicTouchInputFactory!.SPECIAL_BUTTON_TWO); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.KEY_NUM3, basicTouchInputFactory!.SPECIAL_BUTTON_ONE); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.KEY_NUM2, basicTouchInputFactory!.SPECIAL_BUTTON_SIX); if (JThrowable.pending !== null) return this;
        return this;
    }
}

