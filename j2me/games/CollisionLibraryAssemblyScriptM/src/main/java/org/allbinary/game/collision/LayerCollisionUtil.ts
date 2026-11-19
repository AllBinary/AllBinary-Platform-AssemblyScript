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
// package org.allbinary.game.collision
// import org.allbinary.game.configuration.feature.Features
// import org.allbinary.game.configuration.feature.GameFeatureFactory
// import org.allbinary.graphics.opengles.OpenGLFeatureUtil
// import org.allbinary.layer.AllBinaryLayer

@global export class LayerCollisionUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.game.collision.LayerCollisionUtil";
    }
    @lazy static jv_instance: LayerCollisionUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): LayerCollisionUtil | null {
        if (!LayerCollisionUtil.js_instance) {
            LayerCollisionUtil.js_instance = true;
            LayerCollisionUtil.jv_instance = new LayerCollisionUtil().jinit_LayerCollisionUtil_0();
        }
        return LayerCollisionUtil.jv_instance;
    }
    static set instance(value: LayerCollisionUtil | null) {
        LayerCollisionUtil.js_instance = true;
        LayerCollisionUtil.jv_instance = value;
    }
    collisionProcessor: CollisionProcessor | null = null;

    jfields_LayerCollisionUtil(): void {
    this.collisionProcessor = null;
    }
    

    static getInstance(): LayerCollisionUtil | null {
        return LayerCollisionUtil.instance;
    }
    

    jinit_LayerCollisionUtil_0(): LayerCollisionUtil {
        super.jinit_JObject_0();
        this.jfields_LayerCollisionUtil();
        let features: Features | null = Features.getInstance(); if (JThrowable.pending !== null) return this;
        let gameFeatureFactory: GameFeatureFactory | null = GameFeatureFactory.getInstance(); if (JThrowable.pending !== null) return this;
        if (OpenGLFeatureUtil.getInstance()!.isAnyThreed() && !features!.isFeature(gameFeatureFactory!.COLLISIONS_FORCED_TWO_DIMENSIONAL)) {
            this.collisionProcessor = new CollisionThreedProcessor().jinit_CollisionThreedProcessor_0(); if (JThrowable.pending !== null) return this;
        } else {
            this.collisionProcessor = new Collision2DProcessor().jinit_Collision2DProcessor_0(); if (JThrowable.pending !== null) return this;
        } if (JThrowable.pending !== null) return this;
        return this;
    }
    

    isCollision(myLayer: AllBinaryLayer | null, myLayer2: AllBinaryLayer | null): bool {
        return this.collisionProcessor!.isCollision(myLayer, myLayer2);
    }
}

