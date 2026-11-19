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

@global export class DesktopDefaultGameInputMapping extends PersistentInputMapping {

    jclassName(): string {
        return "org.allbinary.game.input.DesktopDefaultGameInputMapping";
    }
    

    jinit_DesktopDefaultGameInputMapping_0(): DesktopDefaultGameInputMapping {
        super.jinit_PersistentInputMapping_1(GamePersistanceStrings.getInstance()!.DEFAULT_INPUT_MAPPING_RECORD_ID);
        let pcKeyFactory: PCKeyFactory | null = PCKeyFactory.getInstance(); if (JThrowable.pending !== null) return this;
        let inputToGameKeyMapping: InputToGameKeyMapping | null = this.getInputMapping(); if (JThrowable.pending !== null) return this;
        let gameKeyFactory: GameKeyFactory | null = GameKeyFactory.getInstance(); if (JThrowable.pending !== null) return this;
        let touchMotionGestureFactory: TouchMotionGestureFactory | null = TouchMotionGestureFactory.getInstance(); if (JThrowable.pending !== null) return this;
        let basicTouchInputFactory: BasicTouchInputFactory | null = BasicTouchInputFactory.getInstance(); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.FIRE, pcKeyFactory!.ENTER); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.KEY_NUM1, pcKeyFactory!.FOUR); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.KEY_NUM1, pcKeyFactory!._P); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.KEY_NUM1, pcKeyFactory!.p); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.UP, pcKeyFactory!.DPAD_UP); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.DOWN, pcKeyFactory!.DPAD_DOWN); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.LEFT, pcKeyFactory!.DPAD_LEFT); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.RIGHT, pcKeyFactory!.DPAD_RIGHT); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.KEY_NUM7, pcKeyFactory!._Y); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.KEY_NUM9, pcKeyFactory!._I); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.UP, pcKeyFactory!._U); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.LEFT, pcKeyFactory!._H); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.RIGHT, pcKeyFactory!._J); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.DOWN, pcKeyFactory!._N); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.KEY_NUM5, pcKeyFactory!._M); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.KEY_NUM7, pcKeyFactory!.y); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.KEY_NUM9, pcKeyFactory!.i); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.UP, pcKeyFactory!.u); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.LEFT, pcKeyFactory!.h); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.RIGHT, pcKeyFactory!.j); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.DOWN, pcKeyFactory!.n); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.KEY_NUM5, pcKeyFactory!.m); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.KEY_NUM7, pcKeyFactory!._Q); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.KEY_NUM9, pcKeyFactory!._E); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.UP, pcKeyFactory!._W); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.LEFT, pcKeyFactory!._A); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.RIGHT, pcKeyFactory!._D); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.DOWN, pcKeyFactory!._S); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.KEY_NUM5, pcKeyFactory!._X); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.KEY_NUM7, pcKeyFactory!.q); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.KEY_NUM9, pcKeyFactory!.e); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.UP, pcKeyFactory!.w); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.LEFT, pcKeyFactory!.a); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.RIGHT, pcKeyFactory!.d); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.DOWN, pcKeyFactory!.s); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.KEY_NUM5, pcKeyFactory!.x); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.UP, touchMotionGestureFactory!.UP); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.DOWN, touchMotionGestureFactory!.DOWN); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.LEFT, touchMotionGestureFactory!.LEFT); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.RIGHT, touchMotionGestureFactory!.RIGHT); if (JThrowable.pending !== null) return this;
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
        inputToGameKeyMapping!.add(gameKeyFactory!.KEY_NUM3, pcKeyFactory!.THREE); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.KEY_NUM0, pcKeyFactory!.ZERO); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.KEY_NUM0, pcKeyFactory!.ONE); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.KEY_NUM0, pcKeyFactory!.SPACE); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.KEY_POUND, pcKeyFactory!.DEL); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.KEY_POUND, pcKeyFactory!.TWO); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.KEY_STAR, pcKeyFactory!.ESCAPE); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.KEY_STAR, pcKeyFactory!.STAR); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.LEVEL_DOWN, pcKeyFactory!.COMMA); if (JThrowable.pending !== null) return this;
        inputToGameKeyMapping!.add(gameKeyFactory!.LEVEL_UP, pcKeyFactory!.PERIOD); if (JThrowable.pending !== null) return this;
        return this;
    }
}

