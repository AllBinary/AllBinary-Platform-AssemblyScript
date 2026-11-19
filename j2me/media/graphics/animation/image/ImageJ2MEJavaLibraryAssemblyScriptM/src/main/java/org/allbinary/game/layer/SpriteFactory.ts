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
// package org.allbinary.game.layer
// import javax.microedition.lcdui.Image
// import javax.microedition.lcdui.game.Sprite
// import org.allbinary.logic.communication.log.LogUtil

@global export class SpriteFactory extends JObject implements SpriteFactoryInterface {

    jclassName(): string {
        return "org.allbinary.game.layer.SpriteFactory";
    }
    @lazy static jv_instance: SpriteFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): SpriteFactory | null {
        if (!SpriteFactory.js_instance) {
            SpriteFactory.js_instance = true;
            SpriteFactory.jv_instance = new SpriteFactory().jinit_SpriteFactory_0();
        }
        return SpriteFactory.jv_instance;
    }
    static set instance(value: SpriteFactory | null) {
        SpriteFactory.js_instance = true;
        SpriteFactory.jv_instance = value;
    }
    logUtil: LogUtil | null = null;

    jfields_SpriteFactory(): void {
    this.logUtil = LogUtil.getInstance();
    }

    jinit_SpriteFactory_0(): SpriteFactory {
        super.jinit_JObject_0();
        this.jfields_SpriteFactory();
        return this;
    }
    

    static getInstance(): SpriteFactory | null {
        return SpriteFactory.instance;
    }
    

    createSprite(image: Image | null, frameWidth: i32, frameHeight: i32): Sprite | null {
        return new Sprite().jinit_Sprite_3(image, frameWidth, frameHeight);
    }
}

