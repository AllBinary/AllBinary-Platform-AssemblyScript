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
// package org.allbinary.canvas
// import org.allbinary.graphics.GPoint
// import org.allbinary.graphics.PointFactory

@global export class GameGlobalsFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.canvas.GameGlobalsFactory";
    }
    @lazy static jv_instance: GameGlobalsFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): GameGlobalsFactory | null {
        if (!GameGlobalsFactory.js_instance) {
            GameGlobalsFactory.js_instance = true;
            GameGlobalsFactory.jv_instance = new GameGlobalsFactory().jinit_GameGlobalsFactory_0();
        }
        return GameGlobalsFactory.jv_instance;
    }
    static set instance(value: GameGlobalsFactory | null) {
        GameGlobalsFactory.js_instance = true;
        GameGlobalsFactory.jv_instance = value;
    }
    newCanvas: bool = false;
    newDisplaybleTime: i64 = 0;
    point: GPoint | null = null;

    jfields_GameGlobalsFactory(): void {
    this.newCanvas = true;
    this.newDisplaybleTime = (<i64>(JInteger.MIN_VALUE));
    this.point = PointFactory.getInstance()!.ZERO_ZERO;
    }

    jinit_GameGlobalsFactory_0(): GameGlobalsFactory {
        super.jinit_JObject_0();
        this.jfields_GameGlobalsFactory();
        return this;
    }
    

    static getInstance(): GameGlobalsFactory | null {
        return GameGlobalsFactory.instance;
    }
}

