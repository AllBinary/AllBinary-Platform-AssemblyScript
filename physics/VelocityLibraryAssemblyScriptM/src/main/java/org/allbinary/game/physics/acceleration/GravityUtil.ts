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
// package org.allbinary.game.physics.acceleration
// import org.allbinary.game.physics.velocity.BasicVelocityProperties

@global export class GravityUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.game.physics.acceleration.GravityUtil";
    }
    @lazy static jv_instance: GravityUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): GravityUtil | null {
        if (!GravityUtil.js_instance) {
            GravityUtil.js_instance = true;
            GravityUtil.jv_instance = new GravityUtil().jinit_GravityUtil_0();
        }
        return GravityUtil.jv_instance;
    }
    static set instance(value: GravityUtil | null) {
        GravityUtil.js_instance = true;
        GravityUtil.jv_instance = value;
    }
    GAME_GRAVITY_VELOCITY: i32 = 0;
    MAX_GAME_VELOCITY: i32 = 0;

    jfields_GravityUtil(): void {
    this.GAME_GRAVITY_VELOCITY = 1800;
    this.MAX_GAME_VELOCITY = 18000;
    }

    jinit_GravityUtil_0(): GravityUtil {
        super.jinit_JObject_0();
        this.jfields_GravityUtil();
        return this;
    }
    

    static getInstance(): GravityUtil | null {
        return GravityUtil.instance;
    }
    

    process(velocityProperties: BasicVelocityProperties | null, customGravity: i32): void {
        velocityProperties!.getVelocityYBasicDecimalP()!.addint(customGravity); if (JThrowable.pending !== null) return;
    }
}

