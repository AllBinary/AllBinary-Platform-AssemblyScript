/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2022 AllBinary 
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
// package org.allbinary.graphics.displayable

@global export class GameTickDisplayInfoSingleton extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.displayable.GameTickDisplayInfoSingleton";
    }
    @lazy static jv_instance: GameTickDisplayInfoSingleton | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): GameTickDisplayInfoSingleton | null {
        if (!GameTickDisplayInfoSingleton.js_instance) {
            GameTickDisplayInfoSingleton.js_instance = true;
            GameTickDisplayInfoSingleton.jv_instance = new GameTickDisplayInfoSingleton().jinit_GameTickDisplayInfoSingleton_0();
        }
        return GameTickDisplayInfoSingleton.jv_instance;
    }
    static set instance(value: GameTickDisplayInfoSingleton | null) {
        GameTickDisplayInfoSingleton.js_instance = true;
        GameTickDisplayInfoSingleton.jv_instance = value;
    }
    displayInfoSingleton: DisplayInfoSingleton | null = null;
    lastWidth: i32 = 0;
    lastHeight: i32 = 0;
    lastHalfWidth: i32 = 0;
    lastHalfHeight: i32 = 0;

    jfields_GameTickDisplayInfoSingleton(): void {
    this.displayInfoSingleton = DisplayInfoSingleton.getInstance();
    this.lastWidth = this.displayInfoSingleton!.getLastWidth();
    this.lastHeight = this.displayInfoSingleton!.getLastHeight();
    this.lastHalfWidth = this.displayInfoSingleton!.getLastHalfWidth();
    this.lastHalfHeight = this.displayInfoSingleton!.getLastHalfHeight();
    }

    jinit_GameTickDisplayInfoSingleton_0(): GameTickDisplayInfoSingleton {
        super.jinit_JObject_0();
        this.jfields_GameTickDisplayInfoSingleton();
        return this;
    }
    

    static getInstance(): GameTickDisplayInfoSingleton | null {
        return GameTickDisplayInfoSingleton.instance;
    }
    

    update(): void {
        this.lastWidth = this.displayInfoSingleton!.getLastWidth(); if (JThrowable.pending !== null) return;
        this.lastHeight = this.displayInfoSingleton!.getLastHeight(); if (JThrowable.pending !== null) return;
        this.lastHalfWidth = this.displayInfoSingleton!.getLastHalfWidth(); if (JThrowable.pending !== null) return;
        this.lastHalfHeight = this.displayInfoSingleton!.getLastHalfHeight(); if (JThrowable.pending !== null) return;
    }
    

    getLastWidth(): i32 {
        return this.lastWidth;
    }
    

    getLastHeight(): i32 {
        return this.lastHeight;
    }
    

    getLastHalfWidth(): i32 {
        return this.lastHalfWidth;
    }
    

    getLastHalfHeight(): i32 {
        return this.lastHalfHeight;
    }
}

