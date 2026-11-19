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
// package org.allbinary.math
// import org.allbinary.graphics.GPoint
// import org.allbinary.layer.AllBinaryLayer
// import org.allbinary.logic.math.MathUtil

@global export class LayerDistanceUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.math.LayerDistanceUtil";
    }
    @lazy static jv_instance: LayerDistanceUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): LayerDistanceUtil | null {
        if (!LayerDistanceUtil.js_instance) {
            LayerDistanceUtil.js_instance = true;
            LayerDistanceUtil.jv_instance = new LayerDistanceUtil().jinit_LayerDistanceUtil_0();
        }
        return LayerDistanceUtil.jv_instance;
    }
    static set instance(value: LayerDistanceUtil | null) {
        LayerDistanceUtil.js_instance = true;
        LayerDistanceUtil.jv_instance = value;
    }
    mathUtil: MathUtil | null = null;

    jfields_LayerDistanceUtil(): void {
    this.mathUtil = MathUtil.getInstance();
    }

    jinit_LayerDistanceUtil_0(): LayerDistanceUtil {
        super.jinit_JObject_0();
        this.jfields_LayerDistanceUtil();
        return this;
    }
    

    static getInstance(): LayerDistanceUtil | null {
        return LayerDistanceUtil.instance;
    }
    

    getDistance(layerInterface: AllBinaryLayer | null, layerInterface2: AllBinaryLayer | null): i32 {
        let dx: i32 = (layerInterface!.getXP() + layerInterface!.getHalfWidth()) - (layerInterface2!.getXP() + layerInterface2!.getHalfWidth()); if (JThrowable.pending !== null) return 0;
        let dy: i32 = (layerInterface!.getYP() + layerInterface!.getHalfHeight()) - (layerInterface2!.getYP() + layerInterface2!.getHalfHeight()); if (JThrowable.pending !== null) return 0;
        return this.mathUtil!.sqrt((dx * dx) + (dy * dy));
    }
    

    getDistance3D(layerInterface: AllBinaryLayer | null, layerInterface2: AllBinaryLayer | null): i32 {
        let dx: i32 = (layerInterface!.getXP() + layerInterface!.getHalfWidth()) - (layerInterface2!.getXP() + layerInterface2!.getHalfWidth()); if (JThrowable.pending !== null) return 0;
        let dy: i32 = (layerInterface!.getYP() + layerInterface!.getHalfHeight()) - (layerInterface2!.getYP() + layerInterface2!.getHalfHeight()); if (JThrowable.pending !== null) return 0;
        let dz: i32 = (layerInterface!.getZP() + layerInterface!.getHalfDepth()) - (layerInterface2!.getZP() + layerInterface2!.getHalfDepth()); if (JThrowable.pending !== null) return 0;
        return this.mathUtil!.sqrt((dx * dx) + (dy * dy) + (dz * dz));
    }
    

    getDistanceAt(layerInterface: AllBinaryLayer | null, point: GPoint | null): i32 {
        let dx: i32 = layerInterface!.getXP() - point!.getX(); if (JThrowable.pending !== null) return 0;
        let dy: i32 = layerInterface!.getYP() - point!.getY(); if (JThrowable.pending !== null) return 0;
        return this.mathUtil!.sqrt((dx * dx) + (dy * dy));
    }
}

