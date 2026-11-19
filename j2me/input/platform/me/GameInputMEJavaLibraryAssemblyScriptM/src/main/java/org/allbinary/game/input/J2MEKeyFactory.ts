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

@global export class J2MEKeyFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.input.J2MEKeyFactory";
    }
    @lazy static jv_instance: J2MEKeyFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): J2MEKeyFactory | null {
        if (!J2MEKeyFactory.js_instance) {
            J2MEKeyFactory.js_instance = true;
            J2MEKeyFactory.jv_instance = new J2MEKeyFactory().jinit_J2MEKeyFactory_0();
        }
        return J2MEKeyFactory.jv_instance;
    }
    static set instance(value: J2MEKeyFactory | null) {
        J2MEKeyFactory.js_instance = true;
        J2MEKeyFactory.jv_instance = value;
    }
    gameKeyFactory: GameKeyFactory | null = null;

    jfields_J2MEKeyFactory(): void {
    this.gameKeyFactory = GameKeyFactory.getInstance();
    }
    

    static getInstance(): J2MEKeyFactory | null {
        return J2MEKeyFactory.instance;
    }
    

    jinit_J2MEKeyFactory_0(): J2MEKeyFactory {
        super.jinit_JObject_0();
        this.jfields_J2MEKeyFactory();
        return this;
    }
    

    init(): void {
        let gameKeyArray: StaticArray<GameKey | null> | null = StaticArray.fromArray<GameKey | null>([this.gameKeyFactory!.DOWN, this.gameKeyFactory!.FIRE, this.gameKeyFactory!.GAME_A, this.gameKeyFactory!.GAME_B, this.gameKeyFactory!.GAME_C, this.gameKeyFactory!.GAME_D, this.gameKeyFactory!.KEY_NUM0, this.gameKeyFactory!.KEY_NUM1, this.gameKeyFactory!.KEY_NUM2, this.gameKeyFactory!.KEY_NUM3, this.gameKeyFactory!.KEY_NUM4, this.gameKeyFactory!.KEY_NUM5, this.gameKeyFactory!.KEY_NUM6, this.gameKeyFactory!.KEY_NUM7, this.gameKeyFactory!.KEY_NUM8, this.gameKeyFactory!.KEY_NUM9, this.gameKeyFactory!.KEY_POUND, this.gameKeyFactory!.KEY_STAR, this.gameKeyFactory!.LEFT, this.gameKeyFactory!.LEVEL_DOWN, this.gameKeyFactory!.LEVEL_UP, this.gameKeyFactory!.NONE, this.gameKeyFactory!.RIGHT, this.gameKeyFactory!.UP]);
        let inputFactory: InputFactory | null = InputFactory.getInstance(); if (JThrowable.pending !== null) return;
        for (let index: i32 = gameKeyArray!.length; --index >= 0; ) {
            inputFactory!.add(gameKeyArray![index]!.getId(), gameKeyArray![index]); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    isSubmission(input: Input | null): bool {
        if (input == this.gameKeyFactory!.FIRE) {
            return true;
        }
        return false;
    }
    

    isDelete(input: Input | null): bool {
        if (input == this.gameKeyFactory!.GAME_D) {
            return true;
        }
        return false;
    }
    

    isBackSpace(input: Input | null): bool {
        return false;
    }
    

    isUp(input: Input | null): bool {
        if (input == this.gameKeyFactory!.UP) {
            return true;
        }
        return false;
    }
    

    isDown(input: Input | null): bool {
        if (input == this.gameKeyFactory!.DOWN) {
            return true;
        }
        return false;
    }
    

    isLeft(input: Input | null): bool {
        if (input == this.gameKeyFactory!.LEFT) {
            return true;
        }
        return false;
    }
    

    isRight(input: Input | null): bool {
        if (input == this.gameKeyFactory!.RIGHT) {
            return true;
        }
        return false;
    }
    

    isEnter(input: Input | null): bool {
        if (input == this.gameKeyFactory!.FIRE) {
            return true;
        }
        return false;
    }
}

